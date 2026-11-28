import { useEffect, useState } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { extractBookId, isBookSupported } from './bookLoader';

type KjvBookChapters = Record<string, string[]>;

const kjvCache: Record<string, KjvBookChapters> = {};
const kjvInFlight: Record<string, Promise<KjvBookChapters>> = {};
const kjvListeners = new Set<() => void>();

function notifyKjvListeners() {
  kjvListeners.forEach((fn) => fn());
}

export async function loadKjvBook(bookId: string): Promise<KjvBookChapters> {
  if (!bookId || !isBookSupported(bookId)) return {};
  if (kjvCache[bookId]) return kjvCache[bookId];

  const existing = kjvInFlight[bookId];
  if (existing) return existing;

  const url = assetUrl(`/bibles/kjv/${bookId}.json`);
  const promise = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load KJV ${bookId}: ${res.status}`);
      return res.json() as Promise<KjvBookChapters>;
    })
    .then((data) => {
      kjvCache[bookId] = data;
      delete kjvInFlight[bookId];
      notifyKjvListeners();
      return data;
    })
    .catch(() => {
      delete kjvInFlight[bookId];
      return {};
    });

  kjvInFlight[bookId] = promise;
  return promise;
}

export function useKjvChapter(
  chapterOrVerseId: string,
  enabled: boolean
): {
  kjvVerses: string[] | undefined;
  isLoadingKjv: boolean;
} {
  const [, setVersion] = useState(0);
  const bookId = extractBookId(chapterOrVerseId);
  const chapKey = chapterOrVerseId.split(':')[0];
  const chapNum = chapKey.includes('-') ? chapKey.split('-')[1] : '1';

  useEffect(() => {
    if (!enabled || !bookId || !isBookSupported(bookId)) return;
    const listener = () => setVersion((v) => v + 1);
    kjvListeners.add(listener);
    if (!kjvCache[bookId]) {
      void loadKjvBook(bookId);
    }
    return () => {
      kjvListeners.delete(listener);
    };
  }, [bookId, enabled]);

  if (!enabled || !bookId) {
    return { kjvVerses: undefined, isLoadingKjv: false };
  }

  const cachedBook = kjvCache[bookId];
  const isLoadingKjv = Boolean(isBookSupported(bookId) && !cachedBook);
  return {
    kjvVerses: cachedBook?.[chapNum],
    isLoadingKjv,
  };
}
