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

console.log('1. Loading bookGroups, entities, story guide, and all 66 book modules...');
const { PICKER_BOOKS, BIBLE_BOOK_GROUPS } = await loadTsModule('src/data/bookGroups.ts');
const { SEED_ENTITIES } = await loadTsModule('src/data/seedEntities.ts');
const { BIBLE_STORY_GUIDE } = await loadTsModule('src/search/bibleStoryGuide.ts');

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
const passagesMeta = []; // [chapterIdx, startVerse, endVerse]
const passageDocs = [];

for (const book of PICKER_BOOKS) {
  const group = groupById[book.groupId];
  for (let ch = 1; ch <= book.chapters; ch++) {
    const chapId = `${book.id}-${ch}`;
    const c = allChaptersMap[chapId];
    if (!c) throw new Error(`Missing chapter ${chapId}`);

    const chapIdx = chaptersIndex.length;
    const entityIds = [];
    const entitySet = new Set();
    const chapVerses = c.verses || [];

    for (const v of chapVerses) {
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

    // Build 6-verse chunks across the full chapter so every scene in all 31,103 verses gets a vector!
    const CHUNK_SIZE = 6;
    for (let i = 0; i < chapVerses.length; i += CHUNK_SIZE) {
      const slice = chapVerses.slice(i, i + CHUNK_SIZE);
      const startV = slice[0].verseNumber;
      const endV = slice[slice.length - 1].verseNumber;
      const chunkText = slice
        .map((v) => (v.text || '').replace(/\s+/g, ' ').trim())
        .join(' ');
      passagesMeta.push([chapIdx, startV, endV]);
      passageDocs.push(`${book.title} ${ch}:${startV}-${endV}. ${chunkText}`.slice(0, 1100));
    }

    const distinctiveNotes = entityIds
      .filter((eid) => !GENERIC_ENTITIES.has(eid))
      .slice(0, 5)
      .map((eid) => {
        const ent = SEED_ENTITIES[eid];
        const cleanTitle = ent.title.replace(/\s*\([^)]*\)/g, '').trim();
        return `${cleanTitle}${ent.shortDefinition ? ' (' + ent.shortDefinition + ')' : ''}`;
      });

    const openingVerse = chapVerses[0];
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
      versesCount: chapVerses.length,
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

console.log(
  `Built ${chaptersIndex.length} chapters, ${versesIndex.length} verses, ${passagesMeta.length} passage chunks, ${entitiesIndex.length} entities, ${BIBLE_STORY_GUIDE.length} story guide entries.`
);

const publicChapters = chaptersIndex.map(({ _distinctiveNotes, ...rest }) => rest);
fs.writeFileSync(path.join(OUT_DIR, 'chapters-index.json'), JSON.stringify(publicChapters));
fs.writeFileSync(path.join(OUT_DIR, 'entities-index.json'), JSON.stringify(entitiesIndex));
fs.writeFileSync(path.join(OUT_DIR, 'verses-index.json'), JSON.stringify(versesIndex));
fs.writeFileSync(path.join(OUT_DIR, 'passages-index.json'), JSON.stringify(passagesMeta));
fs.writeFileSync(path.join(OUT_DIR, 'guide-index.json'), JSON.stringify(BIBLE_STORY_GUIDE));

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
    if ((i + BATCH) % 320 === 0 || i + BATCH >= texts.length) {
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

const guideDocs = BIBLE_STORY_GUIDE.map((g) =>
  `${g.answerHeadline}. ${g.modernSummary} Keywords: ${g.keywords.join(', ')}.`
);

const chapterVecs = await embedTextsToInt8(chapterDocs, 'Chapters');
const entityVecs = await embedTextsToInt8(entityDocs, 'Entities');
const guideVecs = await embedTextsToInt8(guideDocs, 'StoryGuide');
const passageVecs = await embedTextsToInt8(passageDocs, 'PassageChunks');

fs.writeFileSync(path.join(OUT_DIR, 'chapter-vectors.bin'), Buffer.from(chapterVecs.buffer));
fs.writeFileSync(path.join(OUT_DIR, 'entity-vectors.bin'), Buffer.from(entityVecs.buffer));
fs.writeFileSync(path.join(OUT_DIR, 'guide-vectors.bin'), Buffer.from(guideVecs.buffer));
fs.writeFileSync(path.join(OUT_DIR, 'passage-vectors.bin'), Buffer.from(passageVecs.buffer));
fs.writeFileSync(
  path.join(OUT_DIR, 'vectors-meta.json'),
  JSON.stringify({
    model: MODEL_ID,
    dims: 384,
    queryPrefix: 'Represent this sentence for searching relevant passages: ',
    chaptersCount: chaptersIndex.length,
    entitiesCount: entitiesIndex.length,
    passagesCount: passagesMeta.length,
    guideCount: BIBLE_STORY_GUIDE.length,
  })
);

console.log('Done! Files in public/search/:');
for (const f of fs.readdirSync(OUT_DIR)) {
  const kb = (fs.statSync(path.join(OUT_DIR, f)).size / 1024).toFixed(1);
  console.log(`  ${f}: ${kb} KB`);
}
