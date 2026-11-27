import React, { useRef } from 'react';
import { Sliders, ChevronDown, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { SEED_CHAPTERS } from '../../data/seedPassages';
import { TypographyDrawer } from '../reader/TypographyDrawer';
import { ChapterPickerModal } from '../reader/ChapterPickerModal';

const BOOK_SEQUENCE: { bookId: string; bookName: string; chapters: number }[] = [
  { bookId: 'GEN', bookName: 'Genesis', chapters: 50 },
  { bookId: 'EXO', bookName: 'Exodus', chapters: 40 },
  { bookId: 'LEV', bookName: 'Leviticus', chapters: 27 },
  { bookId: 'NUM', bookName: 'Numbers', chapters: 36 },
  { bookId: 'DEU', bookName: 'Deuteronomy', chapters: 34 },
  { bookId: 'JOS', bookName: 'Joshua', chapters: 24 },
  { bookId: 'JDG', bookName: 'Judges', chapters: 21 },
  { bookId: 'RUT', bookName: 'Ruth', chapters: 4 },
  { bookId: '1SA', bookName: '1 Samuel', chapters: 31 },
  { bookId: '2SA', bookName: '2 Samuel', chapters: 24 },
  { bookId: '1KI', bookName: '1 Kings', chapters: 22 },
  { bookId: '2KI', bookName: '2 Kings', chapters: 25 },
  { bookId: '1CH', bookName: '1 Chronicles', chapters: 29 },
  { bookId: '2CH', bookName: '2 Chronicles', chapters: 36 },
  { bookId: 'EZR', bookName: 'Ezra', chapters: 10 },
  { bookId: 'NEH', bookName: 'Nehemiah', chapters: 13 },
  { bookId: 'EST', bookName: 'Esther', chapters: 10 },
  { bookId: 'JOB', bookName: 'Job', chapters: 42 },
  { bookId: 'PSA', bookName: 'Psalms', chapters: 150 },
  { bookId: 'PRO', bookName: 'Proverbs', chapters: 31 },
  { bookId: 'ECC', bookName: 'Ecclesiastes', chapters: 12 },
  { bookId: 'SNG', bookName: 'Song of Solomon', chapters: 8 },
  { bookId: 'ISA', bookName: 'Isaiah', chapters: 66 },
  { bookId: 'JER', bookName: 'Jeremiah', chapters: 52 },
  { bookId: 'LAM', bookName: 'Lamentations', chapters: 5 },
  { bookId: 'EZK', bookName: 'Ezekiel', chapters: 48 },
  { bookId: 'DAN', bookName: 'Daniel', chapters: 12 },
  { bookId: 'HOS', bookName: 'Hosea', chapters: 14 },
  { bookId: 'JOL', bookName: 'Joel', chapters: 3 },
  { bookId: 'AMO', bookName: 'Amos', chapters: 9 },
  { bookId: 'OBA', bookName: 'Obadiah', chapters: 1 },
  { bookId: 'JON', bookName: 'Jonah', chapters: 4 },
  { bookId: 'MIC', bookName: 'Micah', chapters: 7 },
  { bookId: 'NAM', bookName: 'Nahum', chapters: 3 },
  { bookId: 'HAB', bookName: 'Habakkuk', chapters: 3 },
  { bookId: 'ZEP', bookName: 'Zephaniah', chapters: 3 },
  { bookId: 'HAG', bookName: 'Haggai', chapters: 2 },
  { bookId: 'ZEC', bookName: 'Zechariah', chapters: 14 },
  { bookId: 'MAL', bookName: 'Malachi', chapters: 4 },
];

const ORDERED_CHAPTER_IDS: string[] = BOOK_SEQUENCE.flatMap((book) =>
  Array.from({ length: book.chapters }, (_, i) => `${book.bookId}-${i + 1}`)
);

export const BibleScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    currentChapterId,
    setCurrentChapterId,
    preferences,
    setShowTypographyDrawer,
    setShowChapterPicker,
    setShowVisualHookHeader,
    setActiveTab,
  } = useStudyStore();

  const chapterData = SEED_CHAPTERS[currentChapterId] || SEED_CHAPTERS['GEN-1'];
  const currentIndex = ORDERED_CHAPTER_IDS.indexOf(
    `${chapterData.bookId}-${chapterData.chapterNumber}`
  );
  const prevChapterId = currentIndex > 0 ? ORDERED_CHAPTER_IDS[currentIndex - 1] : null;
  const nextChapterId =
    currentIndex >= 0 && currentIndex < ORDERED_CHAPTER_IDS.length - 1
      ? ORDERED_CHAPTER_IDS[currentIndex + 1]
      : null;

  const getFontFamilyClass = () => {
    if (preferences.isDyslexicFont || preferences.fontFamily === 'dyslexic') {
      return 'font-dyslexic';
    }
    if (preferences.fontFamily === 'sans') {
      return 'font-sans';
    }
    return 'font-serif';
  };

  const goToChapter = (chapterId: string | null) => {
    if (!chapterId) return;
    setCurrentChapterId(chapterId);
    const scrollParent = containerRef.current?.closest('.overflow-y-auto');
    if (scrollParent) {
      scrollParent.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formatChapterLabel = (id: string | null) => {
    if (!id) return '';
    const ch = SEED_CHAPTERS[id];
    return ch ? `${ch.bookName} ${ch.chapterNumber}` : id;
  };

  return (
    <div ref={containerRef} className="relative min-h-full pb-28 bg-[#FAF7F2] text-[#2C2C2A]">
      {/* Minimal Sticky Top Bar */}
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D7] px-4 py-3 flex items-center justify-between gap-2">
        <button
          onClick={() => setShowChapterPicker(true)}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#2C2C2A] hover:bg-[#F3EFE6] px-2.5 py-1.5 rounded-xl border border-transparent hover:border-[#E5DFD5] transition-all cursor-pointer"
          aria-label="Choose Bible book and chapter"
        >
          <span>
            {chapterData.bookName} {chapterData.chapterNumber}
          </span>
          <ChevronDown className="w-4 h-4 text-[#7A9A82]" />
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={() => goToChapter(prevChapterId)}
            disabled={!prevChapterId}
            className="p-1.5 rounded-lg text-[#6B6862] hover:bg-[#F3EFE6] disabled:opacity-30 transition-colors cursor-pointer"
            title={prevChapterId ? `Previous: ${formatChapterLabel(prevChapterId)}` : 'Start of Bible'}
            aria-label="Previous chapter"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => goToChapter(nextChapterId)}
            disabled={!nextChapterId}
            className="p-1.5 rounded-lg text-[#6B6862] hover:bg-[#F3EFE6] disabled:opacity-30 transition-colors cursor-pointer"
            title={nextChapterId ? `Next: ${formatChapterLabel(nextChapterId)}` : 'End of loaded books'}
            aria-label="Next chapter"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setShowVisualHookHeader(false);
              setActiveTab('read');
            }}
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg text-[#76746E] hover:text-[#2C2C2A] hover:bg-[#F3EFE6] transition-colors flex items-center gap-1 cursor-pointer"
            title="Switch to interactive Study View for notes & explanations"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" />
            <span className="hidden sm:inline">Study View</span>
          </button>

          <button
            onClick={() => setShowTypographyDrawer(true)}
            className="p-2 rounded-full text-[#6B6862] hover:text-[#2C2C2A] hover:bg-[#F3EFE6] transition-colors cursor-pointer"
            title="Typography & comfort settings"
            aria-label="Typography settings"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Pure Distraction-Free Scripture Canvas */}
      <main className="max-w-xl mx-auto px-5 pt-6">
        <article>
          <div className="mb-6 pb-3 border-b border-[#EFEAE1] flex items-baseline justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2A]">
                {chapterData.bookName} {chapterData.chapterNumber}
              </h1>
              <p className="text-xs text-[#76746E] mt-1">
                World English Bible (WEB) • {chapterData.verses.length} Verses
              </p>
            </div>
          </div>

          <div
            className={`space-y-4 text-[#2C2C2A] ${getFontFamilyClass()}`}
            style={{
              fontSize: `${preferences.fontSize}px`,
              lineHeight: preferences.lineHeight,
            }}
          >
            {chapterData.verses.map((verse) => (
              <p key={`${verse.chapterNumber}-${verse.verseNumber}`} className="leading-relaxed">
                <sup className="text-[11px] font-sans font-semibold text-[#7A9A82] mr-1.5 select-none">
                  {verse.verseNumber}
                </sup>
                <span>{verse.text}</span>
              </p>
            ))}
          </div>

          {/* Simple Chapter Turn Controls */}
          <div className="mt-10 pt-5 border-t border-[#EFEAE1] flex items-center justify-between gap-3">
            <button
              onClick={() => goToChapter(prevChapterId)}
              disabled={!prevChapterId}
              className="flex-1 py-3 px-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EBE5DA] disabled:opacity-40 border border-[#E5DFD5] text-xs font-semibold text-[#2C2C2A] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#7A9A82]" />
              <span>{prevChapterId ? formatChapterLabel(prevChapterId) : 'Start'}</span>
            </button>

            <button
              onClick={() => goToChapter(nextChapterId)}
              disabled={!nextChapterId}
              className="flex-1 py-3 px-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EBE5DA] disabled:opacity-40 border border-[#E5DFD5] text-xs font-semibold text-[#2C2C2A] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{nextChapterId ? formatChapterLabel(nextChapterId) : 'End'}</span>
              <ChevronRight className="w-4 h-4 text-[#7A9A82]" />
            </button>
          </div>
        </article>
      </main>

      <TypographyDrawer />
      <ChapterPickerModal />
    </div>
  );
};
