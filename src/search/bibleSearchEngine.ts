import { PICKER_BOOKS, PICKER_BOOK_MAP, type BibleBookId } from '../data/bookGroups';
import type { BibleStoryGuideEntry } from './bibleStoryGuide';

export interface IndexedChapter {
  id: string;
  bookId: BibleBookId;
  bookName: string;
  chapterNumber: number;
  testament: 'OT' | 'NT';
  groupLabel: string;
  title: string;
  subtitle: string;
  summaryHook: string;
  bigPictureText: string;
  illustrationId: string;
  versesCount: number;
  entityTitles: string[];
  openingRef: string;
  openingText: string;
}

export interface IndexedEntity {
  id: string;
  type: 'person' | 'place' | 'term' | 'artifact' | 'concept';
  title: string;
  originalLanguageTerm: string;
  shortDefinition: string;
  historicalContext: string;
  theologicalInsight: string;
  timelineEra: string;
  relatedVerseRefs: string[];
}

export type VerseTuple = [number, number, string]; // [chapterIdx, verseNumber, text]
export type PassageTuple = [number, number, number]; // [chapterIdx, startVerse, endVerse]

export interface DirectReferenceMatch {
  chapterId: string;
  bookName: string;
  chapterNumber: number;
  verseNumber?: number;
  label: string;
  chapter?: IndexedChapter;
  verseText?: string;
}

export interface GuideSearchResult {
  entry: BibleStoryGuideEntry;
  score: number;
  illustrationId: string;
}

export interface ChapterSearchResult {
  chapter: IndexedChapter;
  score: number;
  matchedTerms: string[];
  matchingSnippet?: { verseNumber: number; text: string };
  matchReason: 'keyword' | 'semantic' | 'hybrid';
}

export interface VerseSearchResult {
  chapterId: string;
  bookName: string;
  chapterNumber: number;
  verseNumber: number;
  text: string;
  score: number;
  matchedTokensCount: number;
}

export interface EntitySearchResult {
  entity: IndexedEntity;
  score: number;
}

export interface HybridSearchOutput {
  directReference: DirectReferenceMatch | null;
  guideAnswer: GuideSearchResult | null;
  chapters: ChapterSearchResult[];
  verses: VerseSearchResult[];
  entities: EntitySearchResult[];
  tokens: string[];
  usedSemantic: boolean;
}

export type SemanticModelStatus = 'idle' | 'loading' | 'ready' | 'unavailable';

interface VectorsMeta {
  model: string;
  dims: number;
  queryPrefix?: string;
  chaptersCount: number;
  entitiesCount: number;
  passagesCount?: number;
  guideCount?: number;
}

// Conversational stop words removed before tokenization
const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'been', 'bible', 'biblical', 'book',
  'but', 'by', 'can', 'chapter', 'chapters', 'could', 'did', 'do', 'does', 'doing',
  'find', 'for', 'from', 'get', 'give', 'had', 'happened', 'happens', 'has',
  'have', 'he', 'her', 'him', 'his', 'how', 'i', 'in', 'into', 'is', 'it', 'its',
  'like', 'me', 'more', 'my', 'of', 'on', 'or', 'out', 'passage', 'passages',
  'please', 'says', 'scripture', 'search', 'she', 'show', 'something',
  'stories', 'story', 'tell', 'that', 'the', 'their', 'them', 'then', 'there',
  'they', 'thing', 'this', 'those', 'to', 'told', 'verse', 'verses', 'want',
  'was', 'were', 'what', 'whats', 'when', 'where', 'which', 'who', 'whom',
  'whose', 'why', 'will', 'with', 'would', 'you', 'your', 'about',
]);

// Generic action verbs/nouns kept for semantic & phrase matching, but damped in single-word BM25
// so words like "eaten", "knowing", or "turning" cannot hijack specific nouns like "whale" or "salt"
const LOW_SIGNAL_TERMS = new Set([
  'became', 'become', 'becomes', 'came', 'come', 'eat', 'eaten', 'eating', 'ate',
  'fall', 'falling', 'falls', 'fell', 'gave', 'give', 'go', 'going', 'got',
  'guy', 'guys', 'knew', 'know', 'knowing', 'knows', 'lie', 'lied', 'lies', 'lying',
  'look', 'looked', 'looking', 'made', 'make', 'man', 'men', 'people', 'person',
  'put', 'ran', 'run', 'said', 'saw', 'see', 'started', 'take', 'took',
  'turn', 'turned', 'turning', 'turns', 'went', 'woman', 'women',
]);

function stemToken(word: string): string {
  let w = word.toLowerCase();
  if (w.length <= 3) return w;
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
  if (w.endsWith('ing') && w.length > 5) {
    let base = w.slice(0, -3);
    if (base.length >= 3 && base[base.length - 1] === base[base.length - 2]) {
      base = base.slice(0, -1);
    }
    return base;
  }
  if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('es') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);
  return w;
}

export function extractQueryTokens(rawQuery: string): {
  rawTokens: string[];
  stems: string[];
  cleanPhrase: string;
} {
  const cleaned = rawQuery
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9\s:]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = cleaned.split(' ').filter((w) => w.length > 1 && !w.includes(':') && !STOP_WORDS.has(w));
  const rawTokens = [...new Set(words)];
  const stems = [...new Set(rawTokens.map(stemToken).filter((s) => s.length >= 2))];
  return {
    rawTokens,
    stems,
    cleanPhrase: rawTokens.join(' ') || cleaned,
  };
}

const BOOK_ALIASES: Record<string, BibleBookId> = (() => {
  const map: Record<string, BibleBookId> = {};
  for (const b of PICKER_BOOKS) {
    map[b.id.toLowerCase()] = b.id;
    map[b.title.toLowerCase()] = b.id;
    map[b.title.toLowerCase().replace(/\s+/g, '')] = b.id;
    map[b.shortLabel.toLowerCase()] = b.id;
  }
  const extras: Record<string, BibleBookId> = {
    gen: 'GEN', ex: 'EXO', exod: 'EXO', exo: 'EXO', lev: 'LEV', num: 'NUM', deu: 'DEU', deut: 'DEU',
    josh: 'JOS', jos: 'JOS', judg: 'JDG', jdg: 'JDG', rut: 'RUT',
    '1sam': '1SA', '1 sam': '1SA', '2sam': '2SA', '2 sam': '2SA',
    '1kgs': '1KI', '1 ki': '1KI', '1 kings': '1KI', '2kgs': '2KI', '2 ki': '2KI',
    '1chr': '1CH', '1 chr': '1CH', '1 chron': '1CH', '2chr': '2CH', '2 chr': '2CH', '2 chron': '2CH',
    ezr: 'EZR', neh: 'NEH', est: 'EST', esth: 'EST',
    ps: 'PSA', psa: 'PSA', psalm: 'PSA', psalms: 'PSA',
    pr: 'PRO', pro: 'PRO', prov: 'PRO', ecc: 'ECC', eccl: 'ECC',
    song: 'SNG', sng: 'SNG', sos: 'SNG', 'song of songs': 'SNG',
    isa: 'ISA', jer: 'JER', lam: 'LAM', ezek: 'EZK', ezk: 'EZK', dan: 'DAN',
    hos: 'HOS', joel: 'JOL', jol: 'JOL', amos: 'AMO', obad: 'OBA', jon: 'JON', mic: 'MIC',
    nah: 'NAM', hab: 'HAB', zeph: 'ZEP', zep: 'ZEP', hag: 'HAG', zech: 'ZEC', zec: 'ZEC', mal: 'MAL',
    mt: 'MAT', mat: 'MAT', matt: 'MAT', mk: 'MRK', mrk: 'MRK', lk: 'LUK', luk: 'LUK',
    jn: 'JHN', jhn: 'JHN', joh: 'JHN', acts: 'ACT', act: 'ACT',
    rom: 'ROM', '1cor': '1CO', '1 cor': '1CO', '2cor': '2CO', '2 cor': '2CO',
    gal: 'GAL', eph: 'EPH', phil: 'PHP', php: 'PHP', col: 'COL',
    '1th': '1TH', '1 th': '1TH', '1thess': '1TH', '1 thess': '1TH',
    '2th': '2TH', '2 th': '2TH', '2thess': '2TH', '2 thess': '2TH',
    '1tim': '1TI', '1 tim': '1TI', '2tim': '2TI', '2 tim': '2TI',
    tit: 'TIT', phm: 'PHM', philem: 'PHM', heb: 'HEB', jas: 'JAS', jam: 'JAS',
    '1pet': '1PE', '1 pet': '1PE', '1pe': '1PE', '2pet': '2PE', '2 pet': '2PE', '2pe': '2PE',
    '1jn': '1JN', '1 jn': '1JN', '1 john': '1JN', '2jn': '2JN', '2 jn': '2JN', '3jn': '3JN', '3 jn': '3JN',
    jude: 'JUD', jud: 'JUD', rev: 'REV',
  };
  return { ...map, ...extras };
})();

export function parseBibleReference(rawQuery: string): DirectReferenceMatch | null {
  const q = rawQuery.trim().toLowerCase().replace(/\s+/g, ' ');
  const m = q.match(/^([1-3]?\s*[a-z\s]+?)\s+(\d+)(?:[:.](\d+))?$/i);
  if (!m) return null;

  const bookRaw = m[1].trim().replace(/\.$/, '');
  const bookId = BOOK_ALIASES[bookRaw] || BOOK_ALIASES[bookRaw.replace(/\s+/g, '')];
  if (!bookId) return null;

  const meta = PICKER_BOOK_MAP[bookId];
  const chapNum = parseInt(m[2], 10);
  if (!meta || Number.isNaN(chapNum) || chapNum < 1 || chapNum > meta.chapters) return null;

  const verseNum = m[3] ? parseInt(m[3], 10) : undefined;
  return {
    chapterId: `${bookId}-${chapNum}`,
    bookName: meta.title,
    chapterNumber: chapNum,
    verseNumber: verseNum,
    label: verseNum ? `${meta.title} ${chapNum}:${verseNum}` : `${meta.title} ${chapNum}`,
  };
}

// Module-level search index state
let chaptersCache: IndexedChapter[] | null = null;
let entitiesCache: IndexedEntity[] | null = null;
let versesCache: VerseTuple[] | null = null;
let passagesCache: PassageTuple[] | null = null;
let guideCache: BibleStoryGuideEntry[] | null = null;

let chapterVectorsCache: Int8Array | null = null;
let entityVectorsCache: Int8Array | null = null;
let passageVectorsCache: Int8Array | null = null;
let guideVectorsCache: Int8Array | null = null;
let vectorsMetaCache: VectorsMeta | null = null;

let chapterSearchDocs: { haystack: string; titleLower: string; entityLower: string }[] | null = null;
let entitySearchDocs: { haystack: string; titleLower: string }[] | null = null;
let guideSearchDocs: { haystack: string; headlineLower: string; keywordsLower: string[] }[] | null = null;
let verseLowerTexts: string[] | null = null;
let tokenIdfCache: Map<string, number> | null = null;
let verseMapCache: Map<string, string> | null = null;

function buildTokenIdf(texts: string[]): Map<string, number> {
  const df = new Map<string, number>();
  const n = texts.length;
  for (const t of texts) {
    const seen = new Set(t.match(/[a-z]{3,}/g) || []);
    for (const w of seen) {
      df.set(w, (df.get(w) || 0) + 1);
    }
  }
  const idf = new Map<string, number>();
  for (const [w, count] of df.entries()) {
    idf.set(w, Math.min(3.5, Math.max(0.5, Math.log((n + 1) / (count + 1)))));
  }
  return idf;
}

function getTokenWeight(raw: string, stem: string): number {
  if (LOW_SIGNAL_TERMS.has(raw) || LOW_SIGNAL_TERMS.has(stem)) {
    return 0.35;
  }
  if (!tokenIdfCache) return 1.5;
  return tokenIdfCache.get(raw) ?? tokenIdfCache.get(stem) ?? 3.0;
}

let indexLoadPromise: Promise<void> | null = null;

export async function ensureSearchIndexesLoaded(): Promise<void> {
  if (chaptersCache && entitiesCache && versesCache) return;
  if (indexLoadPromise) return indexLoadPromise;

  indexLoadPromise = (async () => {
    const [
      chRes,
      entRes,
      verRes,
      passRes,
      guideRes,
      chVecRes,
      entVecRes,
      passVecRes,
      guideVecRes,
      metaRes,
    ] = await Promise.all([
      fetch('./search/chapters-index.json'),
      fetch('./search/entities-index.json'),
      fetch('./search/verses-index.json'),
      fetch('./search/passages-index.json'),
      fetch('./search/guide-index.json'),
      fetch('./search/chapter-vectors.bin'),
      fetch('./search/entity-vectors.bin'),
      fetch('./search/passage-vectors.bin'),
      fetch('./search/guide-vectors.bin'),
      fetch('./search/vectors-meta.json'),
    ]);

    if (!chRes.ok || !entRes.ok || !verRes.ok) {
      throw new Error('Failed to load Bible search indexes');
    }

    const [chapters, entities, verses, passages, guide] = await Promise.all([
      chRes.json() as Promise<IndexedChapter[]>,
      entRes.json() as Promise<IndexedEntity[]>,
      verRes.json() as Promise<VerseTuple[]>,
      passRes.ok ? (passRes.json() as Promise<PassageTuple[]>) : Promise.resolve([]),
      guideRes.ok ? (guideRes.json() as Promise<BibleStoryGuideEntry[]>) : Promise.resolve([]),
    ]);

    chaptersCache = chapters;
    entitiesCache = entities;
    versesCache = verses;
    passagesCache = passages;
    guideCache = guide;

    chapterSearchDocs = chapters.map((c) => ({
      titleLower: `${c.title} ${c.bookName}`.toLowerCase(),
      entityLower: c.entityTitles.join(' ').toLowerCase(),
      haystack: `${c.title} ${c.subtitle} ${c.bigPictureText} ${c.entityTitles.join(' ')} ${c.bookName}`.toLowerCase(),
    }));

    entitySearchDocs = entities.map((e) => ({
      titleLower: `${e.title} ${e.originalLanguageTerm}`.toLowerCase(),
      haystack: `${e.title} ${e.originalLanguageTerm} ${e.shortDefinition} ${e.historicalContext} ${e.theologicalInsight}`.toLowerCase(),
    }));

    guideSearchDocs = guide.map((g) => ({
      headlineLower: g.answerHeadline.toLowerCase(),
      keywordsLower: g.keywords.map((k) => k.toLowerCase()),
      haystack: `${g.answerHeadline} ${g.modernSummary} ${g.keywords.join(' ')}`.toLowerCase(),
    }));

    verseLowerTexts = verses.map(([, , text]) => text.toLowerCase());
    verseMapCache = new Map();
    for (const [ci, vn, txt] of verses) {
      verseMapCache.set(`${ci}:${vn}`, txt);
    }

    // Build IDF across chapters + verses for balanced specificity
    tokenIdfCache = buildTokenIdf(chapterSearchDocs.map((d) => d.haystack));

    const vecPromises = await Promise.all([
      chVecRes.ok ? chVecRes.arrayBuffer() : Promise.resolve(null),
      entVecRes.ok ? entVecRes.arrayBuffer() : Promise.resolve(null),
      passVecRes.ok ? passVecRes.arrayBuffer() : Promise.resolve(null),
      guideVecRes.ok ? guideVecRes.arrayBuffer() : Promise.resolve(null),
      metaRes.ok ? (metaRes.json() as Promise<VectorsMeta>) : Promise.resolve(null),
    ]);

    if (vecPromises[0]) chapterVectorsCache = new Int8Array(vecPromises[0]);
    if (vecPromises[1]) entityVectorsCache = new Int8Array(vecPromises[1]);
    if (vecPromises[2]) passageVectorsCache = new Int8Array(vecPromises[2]);
    if (vecPromises[3]) guideVectorsCache = new Int8Array(vecPromises[3]);
    if (vecPromises[4]) vectorsMetaCache = vecPromises[4];
  })();

  return indexLoadPromise;
}

// On-device Semantic AI Embedding Pipeline
type StatusListener = (status: SemanticModelStatus) => void;
let semanticStatus: SemanticModelStatus = 'idle';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let semanticExtractor: any = null;
let semanticInitPromise: Promise<void> | null = null;
const queryVectorCache = new Map<string, Float32Array>();
const statusListeners = new Set<StatusListener>();

function setSemanticStatus(next: SemanticModelStatus) {
  semanticStatus = next;
  statusListeners.forEach((fn) => fn(next));
}

export function subscribeSemanticStatus(listener: StatusListener): () => void {
  statusListeners.add(listener);
  listener(semanticStatus);
  return () => {
    statusListeners.delete(listener);
  };
}

export function getSemanticStatus(): SemanticModelStatus {
  return semanticStatus;
}

export async function initSemanticModel(): Promise<void> {
  if (semanticExtractor) {
    setSemanticStatus('ready');
    return;
  }
  if (semanticInitPromise) return semanticInitPromise;

  semanticInitPromise = (async () => {
    try {
      setSemanticStatus('loading');
      const { pipeline, env } = await import('@huggingface/transformers');
      env.allowLocalModels = false;
      if (env?.backends?.onnx?.wasm) {
        env.backends.onnx.wasm.numThreads = 1;
      }
      const modelId = vectorsMetaCache?.model || 'Xenova/bge-small-en-v1.5';
      semanticExtractor = await pipeline('feature-extraction', modelId, { dtype: 'q8' });
      setSemanticStatus('ready');
    } catch (err) {
      console.warn('Semantic model unavailable (using full-text 31,103-verse search):', err);
      setSemanticStatus('unavailable');
    }
  })();

  return semanticInitPromise;
}

async function embedQuery(cleanPhrase: string): Promise<Float32Array | null> {
  if (!semanticExtractor) return null;
  const cached = queryVectorCache.get(cleanPhrase);
  if (cached) return cached;

  const prefix =
    vectorsMetaCache?.queryPrefix ??
    'Represent this sentence for searching relevant passages: ';
  const res = await semanticExtractor(prefix + cleanPhrase, {
    pooling: 'mean',
    normalize: true,
  });
  const vec = new Float32Array(res.data);
  queryVectorCache.set(cleanPhrase, vec);
  return vec;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function countTokenMatches(
  text: string,
  rawTokens: string[],
  stems: string[]
): { count: number; strongCount: number; weightedScore: number; matched: string[] } {
  const matched: string[] = [];
  let strongCount = 0;
  let weightedScore = 0;

  for (let i = 0; i < rawTokens.length; i++) {
    const raw = rawTokens[i];
    const stem = stems[i] || raw;
    const isLow = LOW_SIGNAL_TERMS.has(raw) || LOW_SIGNAL_TERMS.has(stem);
    const w = getTokenWeight(raw, stem);

    if (new RegExp(`\\b${escapeRegExp(raw)}\\b`, 'i').test(text)) {
      matched.push(raw);
      if (!isLow) strongCount++;
      weightedScore += w;
    } else if (
      stem.length >= 3 &&
      new RegExp(`\\b${escapeRegExp(stem)}s?\\b`, 'i').test(text)
    ) {
      matched.push(raw);
      if (!isLow) strongCount++;
      weightedScore += w * 0.95;
    } else if (
      stem.length >= 3 &&
      new RegExp(`\\b${escapeRegExp(stem)}(?:es|ed|ing)?\\b`, 'i').test(text)
    ) {
      matched.push(raw);
      if (!isLow) strongCount++;
      weightedScore += w * 0.35;
    }
  }
  return { count: matched.length, strongCount, weightedScore, matched };
}

export async function searchBibleHybrid(rawQuery: string): Promise<HybridSearchOutput> {
  await ensureSearchIndexesLoaded();

  const chapters = chaptersCache!;
  const entities = entitiesCache!;
  const verses = versesCache!;
  const passages = passagesCache || [];
  const guide = guideCache || [];
  const chDocs = chapterSearchDocs!;
  const entDocs = entitySearchDocs!;
  const gDocs = guideSearchDocs || [];
  const vTexts = verseLowerTexts!;
  const vMap = verseMapCache!;

  const trimmed = rawQuery.trim();
  const directReference = parseBibleReference(trimmed);
  if (directReference) {
    const chap = chapters.find((c) => c.id === directReference.chapterId);
    directReference.chapter = chap;
    if (directReference.verseNumber && chap) {
      const chapIdx = chapters.indexOf(chap);
      const foundText = vMap.get(`${chapIdx}:${directReference.verseNumber}`);
      if (foundText) directReference.verseText = foundText;
    }
  }

  const { rawTokens, stems, cleanPhrase } = extractQueryTokens(trimmed);
  if (!trimmed || (rawTokens.length === 0 && !directReference)) {
    return {
      directReference: null,
      guideAnswer: null,
      chapters: [],
      verses: [],
      entities: [],
      tokens: [],
      usedSemantic: false,
    };
  }

  const strongQueryTokensCount = rawTokens.filter(
    (t) => !LOW_SIGNAL_TERMS.has(t) && !LOW_SIGNAL_TERMS.has(stemToken(t))
  ).length;
  const phraseLower = cleanPhrase.toLowerCase();

  // 1. Scan all 31,103 verses for BM25/keyword relevance
  const verseResults: VerseSearchResult[] = [];
  const bestVerseForChapter = new Map<
    number,
    { score: number; verseNumber: number; text: string; matchedCount: number; strongMatched: number }
  >();

  if (rawTokens.length > 0 && !directReference) {
    for (let i = 0; i < vTexts.length; i++) {
      const vt = vTexts[i];
      let matchedCount = 0;
      let strongMatched = 0;
      let score = 0;

      for (let t = 0; t < rawTokens.length; t++) {
        const raw = rawTokens[t];
        const stem = stems[t] || raw;
        const isLow = LOW_SIGNAL_TERMS.has(raw) || LOW_SIGNAL_TERMS.has(stem);
        const idf = getTokenWeight(raw, stem);

        if (new RegExp(`\\b${escapeRegExp(raw)}\\b`).test(vt)) {
          matchedCount++;
          if (!isLow) strongMatched++;
          score += 3.0 * idf;
        } else if (stem.length >= 3 && new RegExp(`\\b${escapeRegExp(stem)}s?\\b`).test(vt)) {
          matchedCount++;
          if (!isLow) strongMatched++;
          score += 2.6 * idf;
        } else if (stem.length >= 3 && new RegExp(`\\b${escapeRegExp(stem)}(?:es|ed|ing)?\\b`).test(vt)) {
          matchedCount++;
          if (!isLow) strongMatched++;
          score += 1.0 * idf;
        }
      }

      if (matchedCount === 0) continue;
      // Ignore single weak-verb-only matches when strong query nouns exist (e.g. only matching "eaten" for "eaten by whale")
      if (strongQueryTokensCount > 0 && strongMatched === 0 && matchedCount === 1) continue;

      if (rawTokens.length > 1) {
        if (matchedCount === rawTokens.length) score += 9;
        else if (strongMatched >= 2) score += strongMatched * 3.5;
      }
      if (phraseLower.length >= 4 && vt.includes(phraseLower)) {
        score += 8;
      }

      const [chapIdx, verseNum, origText] = verses[i];
      const existing = bestVerseForChapter.get(chapIdx);
      if (!existing || score > existing.score) {
        bestVerseForChapter.set(chapIdx, {
          score,
          verseNumber: verseNum,
          text: origText,
          matchedCount,
          strongMatched,
        });
      }

      if ((strongQueryTokensCount <= 1 && matchedCount >= 1 && score >= 4) || strongMatched >= 2 || score >= 6) {
        const c = chapters[chapIdx];
        verseResults.push({
          chapterId: c.id,
          bookName: c.bookName,
          chapterNumber: c.chapterNumber,
          verseNumber: verseNum,
          text: origText,
          score,
          matchedTokensCount: matchedCount,
        });
      }
    }
  }

  verseResults.sort((a, b) => b.score - a.score || b.matchedTokensCount - a.matchedTokensCount);
  const topVerses = verseResults.slice(0, 18);

  // 2. Compute on-device semantic similarity across Guide, 5,679 Verse Passages, Chapters & Entities
  let queryVec: Float32Array | null = null;
  if (semanticExtractor && cleanPhrase.length >= 2 && !directReference) {
    try {
      queryVec = await embedQuery(cleanPhrase);
    } catch {
      queryVec = null;
    }
  }

  const dims = vectorsMetaCache?.dims || 384;
  const chapterSemScores = new Float32Array(chapters.length);
  const entitySemScores = new Float32Array(entities.length);
  const guideSemScores = new Float32Array(guide.length);
  const bestPassageForChapter = new Map<number, { sem: number; startV: number }>();

  if (queryVec) {
    if (chapterVectorsCache) {
      for (let i = 0; i < chapters.length; i++) {
        let dot = 0;
        const off = i * dims;
        for (let d = 0; d < dims; d++) {
          dot += queryVec[d] * (chapterVectorsCache[off + d] / 127);
        }
        chapterSemScores[i] = dot;
      }
    }
    if (entityVectorsCache) {
      for (let i = 0; i < entities.length; i++) {
        let dot = 0;
        const off = i * dims;
        for (let d = 0; d < dims; d++) {
          dot += queryVec[d] * (entityVectorsCache[off + d] / 127);
        }
        entitySemScores[i] = dot;
      }
    }
    if (guideVectorsCache) {
      for (let i = 0; i < guide.length; i++) {
        let dot = 0;
        const off = i * dims;
        for (let d = 0; d < dims; d++) {
          dot += queryVec[d] * (guideVectorsCache[off + d] / 127);
        }
        guideSemScores[i] = dot;
      }
    }
    // Scan all 5,679 6-verse passage chunks across all 31,103 verses (~3ms!)
    if (passageVectorsCache && passages.length > 0) {
      for (let i = 0; i < passages.length; i++) {
        let dot = 0;
        const off = i * dims;
        for (let d = 0; d < dims; d++) {
          dot += queryVec[d] * (passageVectorsCache[off + d] / 127);
        }
        if (dot >= 0.50) {
          const [chapIdx, startV] = passages[i];
          const prev = bestPassageForChapter.get(chapIdx);
          if (!prev || dot > prev.sem) {
            bestPassageForChapter.set(chapIdx, { sem: dot, startV });
          }
        }
      }
    }
  }

  // 3. Score Story & Character Guide Entries (answers "who is..." / "story about..." cleanly!)
  let guideAnswer: GuideSearchResult | null = null;
  const guideBoostByChapterId = new Map<string, { boost: number; verseNumber?: number }>();

  if (!directReference && guide.length > 0) {
    const scoredGuide = guide
      .map((entry, idx) => {
        const gDoc = gDocs[idx];
        let kwScore = 0;

        // Strong keyword phrase / tag match against curated natural-language keywords
        for (const kw of gDoc.keywordsLower) {
          if (phraseLower.includes(kw) || trimmed.toLowerCase().includes(kw)) {
            kwScore += kw.split(' ').length >= 2 ? 24 : 11;
          }
        }

        const headMatch = countTokenMatches(gDoc.headlineLower, rawTokens, stems);
        const bodyMatch = countTokenMatches(gDoc.haystack, rawTokens, stems);
        kwScore += headMatch.weightedScore * 3.5 + bodyMatch.weightedScore * 1.6;
        if (bodyMatch.strongCount >= 2) kwScore += bodyMatch.strongCount * 4;

        const semRaw = queryVec ? guideSemScores[idx] : 0;
        const semScore = queryVec ? Math.max(0, semRaw - 0.51) * 110 : 0;
        const total = kwScore + semScore;

        return { entry, score: total, semRaw, bodyStrong: bodyMatch.strongCount };
      })
      .filter((r) => r.score >= 12 && (r.bodyStrong >= 1 || r.semRaw >= 0.57))
      .sort((a, b) => b.score - a.score);

    if (scoredGuide.length > 0) {
      const top = scoredGuide[0];
      const chapMeta = chapters.find((c) => c.id === top.entry.chapterId);
      guideAnswer = {
        entry: top.entry,
        score: top.score,
        illustrationId:
          chapMeta?.illustrationId || `ill-${top.entry.chapterId.toLowerCase()}`,
      };
      scoredGuide.slice(0, 2).forEach((g, idx) => {
        guideBoostByChapterId.set(g.entry.chapterId, {
          boost: idx === 0 ? Math.min(48, g.score * 0.95) : 16,
          verseNumber: g.entry.verseNumber,
        });
      });
    }
  }

  // 4. Rank Entities (Hybrid keyword + semantic)
  const entityAnchorChapterBoost = new Map<string, number>();
  const entityBoostByTitle = new Map<string, number>();

  const entityRanked: EntitySearchResult[] = entities
    .map((ent, idx) => {
      const doc = entDocs[idx];
      let kwScore = 0;
      if (rawTokens.length > 0) {
        const titleMatches = countTokenMatches(doc.titleLower, rawTokens, stems);
        const bodyMatches = countTokenMatches(doc.haystack, rawTokens, stems);
        kwScore += titleMatches.weightedScore * 2.5 + bodyMatches.weightedScore * 1.0;
        if (titleMatches.count === rawTokens.length && titleMatches.strongCount > 0) kwScore += 8;
        if (phraseLower.length >= 3 && doc.titleLower.includes(phraseLower)) kwScore += 10;
      }
      const semRaw = queryVec ? entitySemScores[idx] : 0;
      const sem = queryVec ? Math.max(0, semRaw - 0.50) * 90 : 0;
      return { entity: ent, score: kwScore + sem, sem, semRaw };
    })
    .filter((r) => r.score >= 4.0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  entityRanked.slice(0, 3).forEach((er, rankIdx) => {
    if (er.entity.type === 'person') return;
    const { sem, semRaw } = er as unknown as { sem: number; semRaw: number };
    if (semRaw < 0.505 && rankIdx > 0) return;
    const boost = Math.min(26, (Math.max(sem, er.score * 0.9) * 2.0) / (rankIdx + 1));
    entityBoostByTitle.set(er.entity.title, boost);
    (er.entity.relatedVerseRefs || []).forEach((ref, rIdx) => {
      const parsed = parseBibleReference(ref.split('-')[0].trim());
      if (parsed) {
        const refMultiplier = rIdx === 0 ? 1.45 : 1.1;
        const prev = entityAnchorChapterBoost.get(parsed.chapterId) || 0;
        entityAnchorChapterBoost.set(parsed.chapterId, Math.max(prev, boost * refMultiplier));
      }
    });
  });

  // 5. Rank Chapters (Summary + 5,679 Passage Chunks + Verse Evidence + Guide + Semantic Entity Boost)
  const chapterRanked: ChapterSearchResult[] = chapters
    .map((chap, idx) => {
      const doc = chDocs[idx];
      const titleMatch = countTokenMatches(doc.titleLower, rawTokens, stems);
      const bodyMatch = countTokenMatches(doc.haystack, rawTokens, stems);
      const entMatch = countTokenMatches(doc.entityLower, rawTokens, stems);

      let kwScore = 0;
      if (rawTokens.length > 0 && (strongQueryTokensCount === 0 || bodyMatch.strongCount > 0)) {
        const titleCov = 0.45 + 0.55 * (titleMatch.count / rawTokens.length);
        const bodyCov = 0.45 + 0.55 * (bodyMatch.count / rawTokens.length);
        kwScore += titleMatch.weightedScore * 2.5 * titleCov;
        kwScore += entMatch.weightedScore * 1.3 * bodyCov;
        kwScore += bodyMatch.weightedScore * 1.6 * bodyCov;
        for (const mt of bodyMatch.matched) {
          const w = getTokenWeight(mt, stemToken(mt));
          if (w >= 3.3) kwScore += 8;
        }
        if (rawTokens.length > 1 && bodyMatch.strongCount >= Math.min(2, strongQueryTokensCount)) {
          kwScore += bodyMatch.strongCount * 3.5;
        }
        if (rawTokens.length > 1 && bodyMatch.count === rawTokens.length) kwScore += 10;
        if (phraseLower.length >= 4 && doc.haystack.includes(phraseLower)) kwScore += 10;
      }

      const bestV = bestVerseForChapter.get(idx);
      const verseCoverage =
        bestV && strongQueryTokensCount > 0
          ? bestV.strongMatched / strongQueryTokensCount
          : bestV && rawTokens.length > 0
          ? bestV.matchedCount / rawTokens.length
          : 0;
      const verseBoost = bestV ? Math.min(bestV.score * (0.25 + verseCoverage * 0.9), 30) : 0;

      let entityCrossBoost = entityAnchorChapterBoost.get(chap.id) || 0;
      for (const t of chap.entityTitles) {
        const b = entityBoostByTitle.get(t);
        if (b) entityCrossBoost = Math.max(entityCrossBoost, b);
      }

      const guideMeta = guideBoostByChapterId.get(chap.id);
      const guideBoost = guideMeta ? guideMeta.boost : 0;

      const summarySemRaw = queryVec ? chapterSemScores[idx] : 0;
      const bestPass = bestPassageForChapter.get(idx);
      const passageSemRaw = bestPass ? bestPass.sem : 0;
      const effectiveSemRaw = Math.max(summarySemRaw, passageSemRaw * 1.03);
      const semScore = queryVec ? Math.max(0, effectiveSemRaw - 0.51) * 90 : 0;

      const total = kwScore + verseBoost + semScore + entityCrossBoost + guideBoost;

      const hasKw = kwScore >= 2.5 || verseBoost >= 3.5;
      const hasSem = semScore >= 4.0 || entityCrossBoost >= 4.0 || guideBoost >= 8.0;
      const matchReason: 'keyword' | 'semantic' | 'hybrid' =
        hasKw && hasSem ? 'hybrid' : hasSem ? 'semantic' : 'keyword';

      // Build snippet: exact matching verse, or guide anchor verse, or best semantic passage start verse
      let matchingSnippet: { verseNumber: number; text: string } | undefined;
      if (bestV) {
        matchingSnippet = { verseNumber: bestV.verseNumber, text: bestV.text };
      } else if (guideMeta?.verseNumber) {
        const gTxt = vMap.get(`${idx}:${guideMeta.verseNumber}`);
        if (gTxt) matchingSnippet = { verseNumber: guideMeta.verseNumber, text: gTxt };
      } else if (bestPass) {
        const pTxt = vMap.get(`${idx}:${bestPass.startV}`);
        if (pTxt) matchingSnippet = { verseNumber: bestPass.startV, text: pTxt };
      }

      return {
        chapter: chap,
        score: total,
        matchedTerms: [...new Set([...titleMatch.matched, ...bodyMatch.matched])],
        matchingSnippet,
        matchReason,
      };
    })
    .filter((r) => r.score >= 4.5)
    .sort((a, b) => b.score - a.score)
    .slice(0, 16);

  return {
    directReference,
    guideAnswer,
    chapters: chapterRanked,
    verses: topVerses,
    entities: entityRanked,
    tokens: rawTokens,
    usedSemantic: Boolean(queryVec),
  };
}
