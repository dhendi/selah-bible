import fs from 'node:fs';
import path from 'node:path';
import { stripTypeScriptTypes } from 'node:module';
import { pipeline } from '@huggingface/transformers';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'search');
fs.mkdirSync(OUT_DIR, { recursive: true });

async function loadTsModule(relPath) {
  const fullPath = path.join(ROOT, relPath);
  const src = fs.readFileSync(fullPath, 'utf8');
  const js = stripTypeScriptTypes(src, { mode: 'strip' });
  const dataUrl = `data:text/javascript;base64,${Buffer.from(js, 'utf8').toString('base64')}`;
  return import(dataUrl);
}

console.log('1. Loading bookGroups, entities, and all 66 book modules...');
const { PICKER_BOOKS, BIBLE_BOOK_GROUPS } = await loadTsModule('src/data/bookGroups.ts');
const { SEED_ENTITIES } = await loadTsModule('src/data/seedEntities.ts');

const bookLoaderSrc = fs.readFileSync(path.join(ROOT, 'src/data/bookLoader.ts'), 'utf8');
const importerMatches = [
  ...bookLoaderSrc.matchAll(/['"]?([A-Z0-9]+)['"]?:\s*\(\)\s*=>\s*import\(['"](\.\/books\/[^'"]+)['"]\)\.then\(\(m\)\s*=>\s*m\.([A-Z0-9_]+)\)/g),
];

if (importerMatches.length !== 66) {
  throw new Error(`Expected 66 book importers, found ${importerMatches.length}`);
}

const groupById = Object.fromEntries(BIBLE_BOOK_GROUPS.map((g) => [g.id, g]));

const allChaptersMap = {};
for (const [, , relBookImport, exportName] of importerMatches) {
  const relTs = path.join('src/data', relBookImport + '.ts');
  const mod = await loadTsModule(relTs);
  const chapObj = mod[exportName];
  if (!chapObj) throw new Error(`Missing export ${exportName} in ${relTs}`);
  Object.assign(allChaptersMap, chapObj);
}

// Generic high-frequency entities to deprioritize when building distinctive chapter embeddings
const GENERIC_ENTITIES = new Set([
  'char-god',
  'char-yahweh',
  'char-jesus',
  'term-ruach',
  'place-eretz',
  'place-israel',
  'place-jerusalem',
  'char-israel',
]);

const chaptersIndex = [];
const versesIndex = [];

for (const book of PICKER_BOOKS) {
  const group = groupById[book.groupId];
  for (let ch = 1; ch <= book.chapters; ch++) {
    const chapId = `${book.id}-${ch}`;
    const c = allChaptersMap[chapId];
    if (!c) throw new Error(`Missing chapter ${chapId}`);

    const chapIdx = chaptersIndex.length;
    const entityIds = [];
    const entitySet = new Set();

    for (const v of c.verses || []) {
      const cleanText = (v.text || '').replace(/\s+/g, ' ').trim();
      versesIndex.push([chapIdx, v.verseNumber, cleanText]);
      for (const link of v.linkedEntities || []) {
        const ent = SEED_ENTITIES[link.entityId];
        if (ent?.title && !entitySet.has(ent.title)) {
          entitySet.add(ent.title);
          entityIds.push(link.entityId);
        }
      }
    }

    // Select up to 5 distinctive entity notes to enrich this chapter's semantic meaning
    const distinctiveNotes = entityIds
      .filter((eid) => !GENERIC_ENTITIES.has(eid))
      .slice(0, 5)
      .map((eid) => {
        const ent = SEED_ENTITIES[eid];
        const cleanTitle = ent.title.replace(/\s*\([^)]*\)/g, '').trim();
        return `${cleanTitle}${ent.shortDefinition ? ' (' + ent.shortDefinition + ')' : ''}`;
      });

    const openingVerse = c.verses?.[0];
    chaptersIndex.push({
      id: chapId,
      bookId: book.id,
      bookName: book.title,
      chapterNumber: ch,
      testament: book.testament,
      groupLabel: group?.label || '',
      title: c.title || `${book.title} ${ch}`,
      subtitle: c.subtitle || '',
      summaryHook: c.summaryHook || '',
      bigPictureText: c.bigPictureText || '',
      illustrationId: c.illustrationId || c.illustrationTheme || `ill-${book.id.toLowerCase()}-${ch}`,
      versesCount: (c.verses || []).length,
      entityTitles: [...entitySet].slice(0, 14),
      openingRef: openingVerse ? `${book.title} ${ch}:${openingVerse.verseNumber}` : `${book.title} ${ch}`,
      openingText: openingVerse?.text?.replace(/\s+/g, ' ').trim() || '',
      _distinctiveNotes: distinctiveNotes,
    });
  }
}

const entitiesList = Object.values(SEED_ENTITIES);
const entitiesIndex = entitiesList.map((e) => ({
  id: e.id,
  type: e.type,
  title: e.title,
  originalLanguageTerm: e.originalLanguageTerm || '',
  shortDefinition: e.shortDefinition || '',
  historicalContext: e.historicalContext || '',
  theologicalInsight: e.theologicalInsight || '',
  timelineEra: e.timelineEra || '',
  relatedVerseRefs: e.relatedVerseRefs || [],
}));

console.log(`Built ${chaptersIndex.length} chapters, ${versesIndex.length} verses, ${entitiesIndex.length} entities.`);

const publicChapters = chaptersIndex.map(({ _distinctiveNotes, ...rest }) => rest);
fs.writeFileSync(path.join(OUT_DIR, 'chapters-index.json'), JSON.stringify(publicChapters));
fs.writeFileSync(path.join(OUT_DIR, 'entities-index.json'), JSON.stringify(entitiesIndex));
fs.writeFileSync(path.join(OUT_DIR, 'verses-index.json'), JSON.stringify(versesIndex));

console.log('2. Computing 384-d quantized int8 semantic vectors (Xenova/bge-small-en-v1.5)...');
const MODEL_ID = 'Xenova/bge-small-en-v1.5';
const extractor = await pipeline('feature-extraction', MODEL_ID, { dtype: 'q8' });

async function embedTextsToInt8(texts, label) {
  const dims = 384;
  const out = new Int8Array(texts.length * dims);
  const BATCH = 32;
  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH);
    const res = await extractor(batch, { pooling: 'mean', normalize: true });
    for (let j = 0; j < batch.length; j++) {
      const rowOffset = (i + j) * dims;
      for (let d = 0; d < dims; d++) {
        const val = res.data[j * dims + d];
        out[rowOffset + d] = Math.max(-127, Math.min(127, Math.round(val * 127)));
      }
    }
    if ((i + BATCH) % 160 === 0 || i + BATCH >= texts.length) {
      console.log(`   ${label}: ${Math.min(i + BATCH, texts.length)} / ${texts.length}`);
    }
  }
  return out;
}

const chapterDocs = chaptersIndex.map((c) =>
  [
    c.title,
    c.subtitle,
    c.bigPictureText,
    c._distinctiveNotes.length ? `Themes & figures: ${c._distinctiveNotes.join('; ')}.` : '',
  ]
    .filter(Boolean)
    .join(' ')
);

const entityDocs = entitiesIndex.map((e) =>
  [e.title, e.shortDefinition, e.historicalContext].filter(Boolean).join(' ')
);

const chapterVecs = await embedTextsToInt8(chapterDocs, 'Chapters');
const entityVecs = await embedTextsToInt8(entityDocs, 'Entities');

fs.writeFileSync(path.join(OUT_DIR, 'chapter-vectors.bin'), Buffer.from(chapterVecs.buffer));
fs.writeFileSync(path.join(OUT_DIR, 'entity-vectors.bin'), Buffer.from(entityVecs.buffer));
fs.writeFileSync(
  path.join(OUT_DIR, 'vectors-meta.json'),
  JSON.stringify({
    model: MODEL_ID,
    dims: 384,
    queryPrefix: 'Represent this sentence for searching relevant passages: ',
    chaptersCount: chaptersIndex.length,
    entitiesCount: entitiesIndex.length,
  })
);

function stripQueryFiller(q) {
  return (
    q
      .toLowerCase()
      .replace(
        /\b(what's|whats|what is|what was|who is|who was|tell me|give me|find|search|the story of|story about|a story about|bible story|chapter about|verse about|verses about|about|story|stories|the|that|when a|when)\b/g,
        ' '
      )
      .replace(/\s+/g, ' ')
      .trim() || q
  );
}

console.log('3. Smoke testing semantic queries across all 1,189 chapters...');
const testQueries = [
  "what's the story about the flood",
  "what's the story about the food that falls from heaven",
  'guy who wore camel hair and ate locusts',
  'when a donkey started talking',
  'prodigal runaway son forgiven by father',
  'swallowed by a big fish in the storm',
];
for (const tq of testQueries) {
  const cleanQ = stripQueryFiller(tq);
  const qRes = await extractor('Represent this sentence for searching relevant passages: ' + cleanQ, {
    pooling: 'mean',
    normalize: true,
  });
  const scores = chaptersIndex.map((c, idx) => {
    let dot = 0;
    const off = idx * 384;
    for (let d = 0; d < 384; d++) dot += qRes.data[d] * (chapterVecs[off + d] / 127);
    return { id: c.id, title: c.title, dot };
  });
  scores.sort((a, b) => b.dot - a.dot);
  console.log(
    `Query: "${tq}" (clean: "${cleanQ}") -> Top 3:`,
    scores.slice(0, 3).map((s) => `${s.id} (${s.dot.toFixed(3)}: ${s.title})`)
  );
}
console.log('Done! Files in public/search/:', fs.readdirSync(OUT_DIR));
