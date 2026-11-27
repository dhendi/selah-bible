import { useEffect, useState } from 'react';
import type { ChapterData } from '../types/bible';

type ChapterMap = Record<string, ChapterData>;
type ChapterLoader = () => Promise<ChapterMap>;

const BOOK_IMPORTERS: Record<string, ChapterLoader> = {
  GEN: () => import('./books/genesisChapters').then((m) => m.GENESIS_CHAPTERS),
  EXO: () => import('./books/exodusChapters').then((m) => m.EXODUS_CHAPTERS),
  LEV: () => import('./books/leviticusChapters').then((m) => m.LEVITICUS_CHAPTERS),
  NUM: () => import('./books/numbersChapters').then((m) => m.NUMBERS_CHAPTERS),
  DEU: () => import('./books/deuteronomyChapters').then((m) => m.DEUTERONOMY_CHAPTERS),
  JOS: () => import('./books/joshuaChapters').then((m) => m.JOSHUA_CHAPTERS),
  JDG: () => import('./books/judgesChapters').then((m) => m.JUDGES_CHAPTERS),
  RUT: () => import('./books/ruthChapters').then((m) => m.RUTH_CHAPTERS),
  '1SA': () => import('./books/firstSamuelChapters').then((m) => m.FIRST_SAMUEL_CHAPTERS),
  '2SA': () => import('./books/secondSamuelChapters').then((m) => m.SECOND_SAMUEL_CHAPTERS),
  '1KI': () => import('./books/firstKingsChapters').then((m) => m.FIRST_KINGS_CHAPTERS),
  '2KI': () => import('./books/secondKingsChapters').then((m) => m.SECOND_KINGS_CHAPTERS),
  '1CH': () => import('./books/firstChroniclesChapters').then((m) => m.FIRST_CHRONICLES_CHAPTERS),
  '2CH': () => import('./books/secondChroniclesChapters').then((m) => m.SECOND_CHRONICLES_CHAPTERS),
  EZR: () => import('./books/ezraChapters').then((m) => m.EZRA_CHAPTERS),
  NEH: () => import('./books/nehemiahChapters').then((m) => m.NEHEMIAH_CHAPTERS),
  EST: () => import('./books/estherChapters').then((m) => m.ESTHER_CHAPTERS),
  JOB: () => import('./books/jobChapters').then((m) => m.JOB_CHAPTERS),
  PSA: () => import('./books/psalmsChapters').then((m) => m.PSALMS_CHAPTERS),
  PRO: () => import('./books/proverbsChapters').then((m) => m.PROVERBS_CHAPTERS),
  ECC: () => import('./books/ecclesiastesChapters').then((m) => m.ECCLESIASTES_CHAPTERS),
  SNG: () => import('./books/songOfSolomonChapters').then((m) => m.SONG_OF_SOLOMON_CHAPTERS),
  ISA: () => import('./books/isaiahChapters').then((m) => m.ISAIAH_CHAPTERS),
  JER: () => import('./books/jeremiahChapters').then((m) => m.JEREMIAH_CHAPTERS),
  LAM: () => import('./books/lamentationsChapters').then((m) => m.LAMENTATIONS_CHAPTERS),
  EZK: () => import('./books/ezekielChapters').then((m) => m.EZEKIEL_CHAPTERS),
  DAN: () => import('./books/danielChapters').then((m) => m.DANIEL_CHAPTERS),
  HOS: () => import('./books/hoseaChapters').then((m) => m.HOSEA_CHAPTERS),
  JOL: () => import('./books/joelChapters').then((m) => m.JOEL_CHAPTERS),
  AMO: () => import('./books/amosChapters').then((m) => m.AMOS_CHAPTERS),
  OBA: () => import('./books/obadiahChapters').then((m) => m.OBADIAH_CHAPTERS),
  JON: () => import('./books/jonahChapters').then((m) => m.JONAH_CHAPTERS),
  MIC: () => import('./books/micahChapters').then((m) => m.MICAH_CHAPTERS),
  NAM: () => import('./books/nahumChapters').then((m) => m.NAHUM_CHAPTERS),
  HAB: () => import('./books/habakkukChapters').then((m) => m.HABAKKUK_CHAPTERS),
  ZEP: () => import('./books/zephaniahChapters').then((m) => m.ZEPHANIAH_CHAPTERS),
  HAG: () => import('./books/haggaiChapters').then((m) => m.HAGGAI_CHAPTERS),
  ZEC: () => import('./books/zechariahChapters').then((m) => m.ZECHARIAH_CHAPTERS),
  MAL: () => import('./books/malachiChapters').then((m) => m.MALACHI_CHAPTERS),
  MAT: () => import('./books/matthewChapters').then((m) => m.MATTHEW_CHAPTERS),
  MRK: () => import('./books/markChapters').then((m) => m.MARK_CHAPTERS),
  LUK: () => import('./books/lukeChapters').then((m) => m.LUKE_CHAPTERS),
  JHN: () => import('./books/johnChapters').then((m) => m.JOHN_CHAPTERS),
  ACT: () => import('./books/actsChapters').then((m) => m.ACTS_CHAPTERS),
  ROM: () => import('./books/romansChapters').then((m) => m.ROMANS_CHAPTERS),
  '1CO': () => import('./books/firstCorinthiansChapters').then((m) => m.FIRST_CORINTHIANS_CHAPTERS),
  '2CO': () => import('./books/secondCorinthiansChapters').then((m) => m.SECOND_CORINTHIANS_CHAPTERS),
  GAL: () => import('./books/galatiansChapters').then((m) => m.GALATIANS_CHAPTERS),
  EPH: () => import('./books/ephesiansChapters').then((m) => m.EPHESIANS_CHAPTERS),
  PHP: () => import('./books/philippiansChapters').then((m) => m.PHILIPPIANS_CHAPTERS),
  COL: () => import('./books/colossiansChapters').then((m) => m.COLOSSIANS_CHAPTERS),
  '1TH': () => import('./books/firstThessaloniansChapters').then((m) => m.FIRST_THESSALONIANS_CHAPTERS),
  '2TH': () => import('./books/secondThessaloniansChapters').then((m) => m.SECOND_THESSALONIANS_CHAPTERS),
  '1TI': () => import('./books/firstTimothyChapters').then((m) => m.FIRST_TIMOTHY_CHAPTERS),
  '2TI': () => import('./books/secondTimothyChapters').then((m) => m.SECOND_TIMOTHY_CHAPTERS),
  TIT: () => import('./books/titusChapters').then((m) => m.TITUS_CHAPTERS),
  PHM: () => import('./books/philemonChapters').then((m) => m.PHILEMON_CHAPTERS),
  HEB: () => import('./books/hebrewsChapters').then((m) => m.HEBREWS_CHAPTERS),
  JAS: () => import('./books/jamesChapters').then((m) => m.JAMES_CHAPTERS),
  '1PE': () => import('./books/firstPeterChapters').then((m) => m.FIRST_PETER_CHAPTERS),
  '2PE': () => import('./books/secondPeterChapters').then((m) => m.SECOND_PETER_CHAPTERS),
  '1JN': () => import('./books/firstJohnChapters').then((m) => m.FIRST_JOHN_CHAPTERS),
  '2JN': () => import('./books/secondJohnChapters').then((m) => m.SECOND_JOHN_CHAPTERS),
  '3JN': () => import('./books/thirdJohnChapters').then((m) => m.THIRD_JOHN_CHAPTERS),
  JUD: () => import('./books/judeChapters').then((m) => m.JUDE_CHAPTERS),
  REV: () => import('./books/revelationChapters').then((m) => m.REVELATION_CHAPTERS),
};

const bookCache: Record<string, ChapterMap> = {};
const inFlightLoads: Record<string, Promise<ChapterMap>> = {};
const cacheListeners = new Set<() => void>();

function notifyListeners() {
  cacheListeners.forEach((fn) => fn());
}

export function extractBookId(chapterOrVerseId: string): string {
  if (!chapterOrVerseId) return '';
  const chapPart = chapterOrVerseId.split(':')[0];
  const dashIdx = chapPart.indexOf('-');
  return dashIdx >= 0 ? chapPart.slice(0, dashIdx) : chapPart;
}

export function isBookSupported(bookId: string): boolean {
  return Boolean(BOOK_IMPORTERS[bookId]);
}

export function getCachedBookChapters(bookId: string): ChapterMap | undefined {
  return bookCache[bookId];
}

export function getCachedChapter(chapterId: string): ChapterData | undefined {
  if (!chapterId) return undefined;
  const chapKey = chapterId.split(':')[0];
  const bookId = extractBookId(chapKey);
  return bookCache[bookId]?.[chapKey];
}

export async function loadBookChapters(bookId: string): Promise<ChapterMap> {
  if (!bookId) return {};
  if (bookCache[bookId]) return bookCache[bookId];

  const existingPromise = inFlightLoads[bookId];
  if (existingPromise) return existingPromise;

  const loader = BOOK_IMPORTERS[bookId];
  if (!loader) return {};

  const promise = loader()
    .then((chapters) => {
      bookCache[bookId] = chapters;
      delete inFlightLoads[bookId];
      notifyListeners();
      return chapters;
    })
    .catch((err) => {
      delete inFlightLoads[bookId];
      throw err;
    });

  inFlightLoads[bookId] = promise;
  return promise;
}

export function preloadBookForChapter(chapterOrVerseId: string): void {
  const bookId = extractBookId(chapterOrVerseId);
  if (bookId && BOOK_IMPORTERS[bookId] && !bookCache[bookId]) {
    void loadBookChapters(bookId);
  }
}

export function useBookChapters(bookId: string): {
  bookChapters: ChapterMap | undefined;
  isLoading: boolean;
} {
  const [, setVersion] = useState(0);

  useEffect(() => {
    const listener = () => setVersion((v) => v + 1);
    cacheListeners.add(listener);
    if (bookId && BOOK_IMPORTERS[bookId] && !bookCache[bookId]) {
      void loadBookChapters(bookId);
    }
    return () => {
      cacheListeners.delete(listener);
    };
  }, [bookId]);

  const cached = bookId ? bookCache[bookId] : undefined;
  const isLoading = Boolean(bookId && BOOK_IMPORTERS[bookId] && !cached);
  return { bookChapters: cached, isLoading };
}

export function useChapterData(chapterOrVerseId: string): {
  chapterData: ChapterData | undefined;
  bookChapters: ChapterMap | undefined;
  isLoading: boolean;
} {
  const bookId = extractBookId(chapterOrVerseId);
  const { bookChapters, isLoading } = useBookChapters(bookId);
  const chapKey = chapterOrVerseId.split(':')[0];
  return {
    chapterData: bookChapters?.[chapKey],
    bookChapters,
    isLoading,
  };
}
