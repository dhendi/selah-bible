import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  MessageSquarePlus,
  Sparkles,
  PenLine,
  Share2,
  X,
  BookOpen,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { preloadBookForChapter, useChapterData } from '../../data/bookLoader';
import { SEED_STORY_MODULES } from '../../data/seedStoryModules';
import { formatChapterTitle, getAdjacentChapters } from '../../data/bookGroups';
import type { Verse } from '../../types/bible';
import { StoryIllustration } from '../illustrations/StoryIllustration';
import { AddNoteModal } from './AddNoteModal';
import { triggerLightHaptic } from '../../native/capacitorBridge';

const POETRY_BOOKS = new Set(['JOB', 'PSA', 'PRO', 'ECC', 'SNG', 'LAM']);

function groupVersesIntoParagraphs(verses: Verse[], bookId: string): Verse[][] {
  const isPoetry = POETRY_BOOKS.has(bookId);
  const targetSize = isPoetry ? 3 : 4;
  const paragraphs: Verse[][] = [];

  for (let i = 0; i < verses.length; i += targetSize) {
    paragraphs.push(verses.slice(i, i + targetSize));
  }
  return paragraphs;
}

export const ReaderScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const highlightedRef = useRef<HTMLSpanElement | null>(null);

  const {
    currentChapterId,
    setCurrentChapterId,
    preferences,
    showVisualHookHeader,
    setShowVisualHookHeader,
    setShowTypographyDrawer,
    setShowChapterPicker,
    openEntitySheet,
    openExplainDrawer,
    openJournalSheet,
    openShareModal,
    highlightedVerseNumber,
    toggleBookmark,
    isBookmarked,
    setActiveTab,
    activeTab,
  } = useStudyStore();

  const [selectedVerseNum, setSelectedVerseNum] = useState<number | null>(null);
  const [activeNoteVerse, setActiveNoteVerse] = useState<string | null>(null);

  const isPureTextMode = activeTab === 'bible';
  const targetChapterId = currentChapterId || 'EXO-16';
  const { chapterData, isLoading } = useChapterData(targetChapterId);
  const matchingStory = SEED_STORY_MODULES.find((s) => s.chapterId === targetChapterId);

  const { prevChapterId, nextChapterId } = useMemo(
    () =>
      chapterData
        ? getAdjacentChapters(`${chapterData.bookId}-${chapterData.chapterNumber}`)
        : getAdjacentChapters(targetChapterId),
    [chapterData, targetChapterId]
  );

  useEffect(() => {
    if (prevChapterId) preloadBookForChapter(prevChapterId);
    if (nextChapterId) preloadBookForChapter(nextChapterId);
  }, [prevChapterId, nextChapterId]);

  useEffect(() => {
    setSelectedVerseNum(null);
  }, [currentChapterId]);

  useEffect(() => {
    if (highlightedVerseNumber && highlightedRef.current) {
      highlightedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setSelectedVerseNum(highlightedVerseNumber);
    }
  }, [highlightedVerseNumber, currentChapterId]);

  if (!chapterData) {
    return (
      <div
        ref={containerRef}
        className="min-h-full bg-[#FBF8F1] text-[#24221E] flex flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="text-sm font-serif italic text-[#666158]">
          {isLoading ? 'Turning to passage…' : 'Chapter not found.'}
        </p>
      </div>
    );
  }

  const getFontFamilyClass = () => {
    if (preferences.isDyslexicFont || preferences.fontFamily === 'dyslexic') {
      return 'font-dyslexic';
    }
    if (preferences.fontFamily === 'sans') {
      return 'font-sans';
    }
    return 'font-serif';
  };

  const passageTitle = `${chapterData.bookName} ${chapterData.chapterNumber}`;

  const getDefaultVerseIdForChapter = () => {
    if (currentChapterId === 'EXO-16') return 'EXO-16:15';
    if (currentChapterId === 'RUT-1') return 'RUT-1:16';
    const firstVerse = chapterData.verses[0];
    return firstVerse?.id || `${chapterData.bookId}-${chapterData.chapterNumber}:1`;
  };

  const getChapterIllustrationId = () => {
    if (chapterData.illustrationId) return chapterData.illustrationId;
    if (currentChapterId === 'EXO-16') return 'ill-exo-16';
    if (currentChapterId === 'RUT-1') return 'ill-ruth-naomi';
    return 'ill-creation';
  };

  const turnToChapter = (chapterId: string | null) => {
    if (!chapterId) return;
    void triggerLightHaptic();
    setCurrentChapterId(chapterId);
    setSelectedVerseNum(null);
    const scrollParent = containerRef.current?.closest('.overflow-y-auto');
    if (scrollParent) {
      scrollParent.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectedVerse =
    selectedVerseNum !== null
      ? chapterData.verses.find((v) => v.verseNumber === selectedVerseNum) || null
      : null;

  const paragraphs = groupVersesIntoParagraphs(chapterData.verses, chapterData.bookId);
  const isPoetry = POETRY_BOOKS.has(chapterData.bookId);

  const renderInteractiveVerse = (
    text: string,
    linkedEntities: { spanText: string; entityId: string }[]
  ) => {
    if (isPureTextMode || !preferences.highlightConnections || linkedEntities.length === 0) {
      return <span>{text}</span>;
    }

    const segments: { text: string; entityId?: string }[] = [];
    let remaining = text;

    while (remaining.length > 0) {
      let earliestMatchIndex = -1;
      let matchedSpan: { spanText: string; entityId: string } | null = null;

      for (const link of linkedEntities) {
        const escaped = link.spanText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const match = remaining.match(new RegExp(`\\b${escaped}\\b`, 'i'));
        const idx = match && match.index !== undefined ? match.index : -1;
        if (idx !== -1 && (earliestMatchIndex === -1 || idx < earliestMatchIndex)) {
          earliestMatchIndex = idx;
          matchedSpan = link;
        }
      }

      if (earliestMatchIndex === -1 || !matchedSpan) {
        segments.push({ text: remaining });
        break;
      }

      if (earliestMatchIndex > 0) {
        segments.push({ text: remaining.slice(0, earliestMatchIndex) });
      }

      const matchEnd = earliestMatchIndex + matchedSpan.spanText.length;
      segments.push({
        text: remaining.slice(earliestMatchIndex, matchEnd),
        entityId: matchedSpan.entityId,
      });

      remaining = remaining.slice(matchEnd);
    }

    return (
      <>
        {segments.map((seg, i) => {
          if (!seg.entityId) {
            return <span key={i}>{seg.text}</span>;
          }
          return (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openEntitySheet(seg.entityId!);
              }}
              className="inline border-b border-dotted border-[#8B3A2B]/55 text-inherit hover:bg-[#EFE7D6] hover:border-[#8B3A2B] transition-colors cursor-pointer"
              title="Tap to read word & character note"
            >
              {seg.text}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <div ref={containerRef} className="relative min-h-full pb-28 bg-[#FBF8F1] text-[#24221E]">
      {/* Running Book Folio Header */}
      <header className="sticky top-0 z-30 bg-[#FBF8F1]/95 backdrop-blur-xs border-b border-[#E2DACB] px-5 py-2.5 flex items-center justify-between gap-2">
        <button
          onClick={() => setShowChapterPicker(true)}
          className="flex items-center gap-1.5 text-sm font-serif font-semibold tracking-wide text-[#24221E] hover:text-[#8B3A2B] transition-colors cursor-pointer"
          aria-label="Select book and chapter"
        >
          <span className="uppercase text-xs tracking-[0.12em]">
            {chapterData.bookName}
          </span>
          <span className="text-[#8B3A2B] font-bold">{chapterData.chapterNumber}</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#8C867B]" />
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Page Turns in Running Header */}
          <div className="flex items-center border-r border-[#E2DACB] pr-2 gap-0.5">
            <button
              onClick={() => turnToChapter(prevChapterId)}
              disabled={!prevChapterId}
              className="p-1 text-[#666158] hover:text-[#24221E] disabled:opacity-25 transition-colors cursor-pointer"
              title={prevChapterId ? `Previous: ${formatChapterTitle(prevChapterId)}` : 'Start of Bible'}
              aria-label="Previous chapter"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => turnToChapter(nextChapterId)}
              disabled={!nextChapterId}
              className="p-1 text-[#666158] hover:text-[#24221E] disabled:opacity-25 transition-colors cursor-pointer"
              title={nextChapterId ? `Next: ${formatChapterTitle(nextChapterId)}` : 'End of Bible'}
              aria-label="Next chapter"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Illustrated Study vs. Clean Printed Text Toggle */}
          <div className="flex items-center gap-2.5 text-[0.6875rem] font-medium">
            <button
              onClick={() => {
                setActiveTab('read');
                setShowVisualHookHeader(true);
              }}
              className={`pb-0.5 transition-colors cursor-pointer border-b ${
                !isPureTextMode
                  ? 'text-[#24221E] font-semibold border-[#8B3A2B]'
                  : 'text-[#8C867B] border-transparent hover:text-[#24221E]'
              }`}
            >
              Study
            </button>
            <button
              onClick={() => {
                setActiveTab('bible');
                setShowVisualHookHeader(false);
              }}
              className={`pb-0.5 transition-colors cursor-pointer border-b ${
                isPureTextMode
                  ? 'text-[#24221E] font-semibold border-[#8B3A2B]'
                  : 'text-[#8C867B] border-transparent hover:text-[#24221E]'
              }`}
            >
              Clean
            </button>
          </div>

          <button
            onClick={() => setShowTypographyDrawer(true)}
            className="pl-2 border-l border-[#E2DACB] font-serif text-sm font-semibold text-[#666158] hover:text-[#24221E] transition-colors cursor-pointer"
            title="Page typography & spacing"
            aria-label="Typography settings"
          >
            Aa
          </button>
        </div>
      </header>

      {/* Main Book Page Body */}
      <main className="max-w-[38rem] mx-auto px-6 sm:px-8 pt-7">
        {/* Framed Watercolor Frontispiece & Chapter Headnote (Study Mode) */}
        {!isPureTextMode && showVisualHookHeader && (
          <figure className="mb-6 animate-fade-in">
            <div className="p-2 bg-[#F4EFE4] border border-[#DDD3C1] shadow-xs">
              <StoryIllustration
                illustrationId={getChapterIllustrationId()}
                className="w-full h-48 sm:h-56"
              />
            </div>
            <figcaption className="mt-2.5 text-center px-2">
              <div className="text-[0.625rem] uppercase tracking-[0.16em] text-[#8C867B]">
                {chapterData.bookName} · Chapter {chapterData.chapterNumber}
              </div>
              <p className="font-serif italic text-sm text-[#4A463F] mt-1 leading-snug">
                {chapterData.subtitle}
              </p>
            </figcaption>
          </figure>
        )}

        {/* Chapter Opening Heading & Italic Introduction */}
        <article>
          <header className="text-center mb-6 pb-4 border-b border-[#E2DACB]">
            <div className="text-[0.625rem] uppercase tracking-[0.2em] text-[#8B3A2B] font-semibold">
              {chapterData.verses[0]?.translation || 'WEB'} · Chapter {chapterData.chapterNumber}
            </div>
            <h1 className="text-2xl sm:text-[1.85rem] font-serif font-semibold text-[#24221E] mt-1 leading-tight">
              {chapterData.title.includes(':')
                ? chapterData.title.split(':').slice(1).join(':').trim()
                : chapterData.title}
            </h1>

            {!isPureTextMode && showVisualHookHeader && chapterData.bigPictureText && (
              <p className="font-serif italic text-[13.5px] text-[#5B564D] leading-relaxed mt-3 max-w-md mx-auto">
                {chapterData.bigPictureText}
              </p>
            )}

            <div className="mt-3 flex items-center justify-center gap-3 text-[0.6875rem] text-[#8C867B]">
              <span>{chapterData.verses.length} Verses</span>
              {!isPureTextMode && (
                <>
                  <span>·</span>
                  <button
                    onClick={() => setShowVisualHookHeader(!showVisualHookHeader)}
                    className="hover:text-[#24221E] underline decoration-dotted underline-offset-4 cursor-pointer"
                  >
                    {showVisualHookHeader ? 'Hide plate' : 'Show plate'}
                  </button>
                </>
              )}
            </div>
          </header>

          {/* Flowing Printed Scripture Paragraphs */}
          <div
            className={`${isPoetry ? 'space-y-4' : 'space-y-5'} ${getFontFamilyClass()} text-[#24221E]`}
            style={{
              fontSize: `${preferences.fontSize}px`,
              lineHeight: preferences.lineHeight,
            }}
          >
            {paragraphs.map((paraVerses, pIdx) => (
              <p
                key={pIdx}
                className={`${
                  !isPoetry && pIdx > 0 ? 'indent-5' : ''
                } text-left sm:text-justify selection:bg-[#7A9A82]/20`}
              >
                {pIdx === 0 && (
                  <span className="book-dropcap text-[2.85em]" aria-hidden="true">
                    {chapterData.chapterNumber}
                  </span>
                )}
                {paraVerses.map((verse, vIdx) => {
                  const verseRef = `${chapterData.bookName} ${verse.chapterNumber}:${verse.verseNumber}`;
                  const bookmarked = isBookmarked(verseRef);
                  const isHighlighted = highlightedVerseNumber === verse.verseNumber;
                  const isSelected = selectedVerseNum === verse.verseNumber;
                  const isFirstVerseInChapter = pIdx === 0 && vIdx === 0;

                  return (
                    <span
                      key={`${verse.chapterNumber}-${verse.verseNumber}`}
                      ref={isHighlighted ? highlightedRef : null}
                      onClick={() =>
                        setSelectedVerseNum(isSelected ? null : verse.verseNumber)
                      }
                      className={`cursor-pointer transition-colors rounded-[2px] ${
                        isSelected
                          ? 'bg-[#EDE3CE]'
                          : isHighlighted
                          ? 'bg-[#F3E9D2]'
                          : 'hover:bg-[#F3EDE0]/70'
                      }`}
                    >
                      {!isFirstVerseInChapter && (
                        <sup className="font-sans text-[0.625rem] font-semibold text-[#8B3A2B]/80 mr-1 ml-1 select-none">
                          {verse.verseNumber}
                        </sup>
                      )}
                      {bookmarked && (
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full bg-[#8B3A2B] align-middle mr-1"
                          title="Bookmarked verse"
                        />
                      )}
                      {renderInteractiveVerse(verse.text, verse.linkedEntities)}{' '}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>

          {/* Quiet Colophon Hint */}
          <p className="mt-7 text-center text-[0.6875rem] font-serif italic text-[#8C867B]">
            {isPureTextMode
              ? 'Tap any verse number or line to bookmark or reflect.'
              : 'Tap any verse to explain, note, or bookmark · Tap underlined words for context.'}
          </p>

          {/* Editorial Folio Page Turn (Universal Across All 66 Books) */}
          <nav
            aria-label="Chapter turn navigation"
            className="mt-8 pt-5 border-t border-[#E2DACB] flex items-center justify-between gap-4 text-sm font-serif"
          >
            <button
              onClick={() => turnToChapter(prevChapterId)}
              disabled={!prevChapterId}
              className="flex items-center gap-1.5 text-[#5B564D] hover:text-[#24221E] disabled:opacity-30 transition-colors cursor-pointer text-left"
            >
              <ChevronLeft className="w-4 h-4 text-[#8B3A2B]" />
              <span>{prevChapterId ? formatChapterTitle(prevChapterId) : 'Beginning'}</span>
            </button>

            <span className="text-[0.6875rem] tracking-[0.18em] uppercase text-[#8C867B] font-sans">
              ❦
            </span>

            <button
              onClick={() => turnToChapter(nextChapterId)}
              disabled={!nextChapterId}
              className="flex items-center gap-1.5 text-[#5B564D] hover:text-[#24221E] disabled:opacity-30 transition-colors cursor-pointer text-right"
            >
              <span>{nextChapterId ? formatChapterTitle(nextChapterId) : 'End of Bible'}</span>
              <ChevronRight className="w-4 h-4 text-[#8B3A2B]" />
            </button>
          </nav>

          {/* Quiet End-of-Chapter Study Reflection Strip */}
          {!isPureTextMode && (
            <section className="mt-8 pt-6 border-t border-[#E2DACB] text-center space-y-3">
              <div className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#8C867B]">
                End of {passageTitle}
              </div>
              <p className="text-xs font-serif italic text-[#5B564D] max-w-sm mx-auto">
                Pause in the margin — capture a prayer or read a verse study note before turning the page.
              </p>

              <div className="flex items-center justify-center gap-3 pt-1">
                <button
                  onClick={() => openExplainDrawer(getDefaultVerseIdForChapter())}
                  className="px-4 py-2 border border-[#D6CCBA] bg-[#F4EFE4] hover:bg-[#ECE4D4] text-[#24221E] text-xs font-medium rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#8B3A2B]" />
                  <span>Explain Key Verse</span>
                </button>

                <button
                  onClick={() =>
                    openJournalSheet({
                      verseRef: passageTitle,
                      bookId: chapterData.bookId,
                      snapshotText:
                        matchingStory?.oneSentenceSummary || chapterData.subtitle,
                      illustrationId: getChapterIllustrationId(),
                    })
                  }
                  className="px-4 py-2 bg-[#24221E] hover:bg-[#3A3731] text-[#FBF8F1] text-xs font-medium rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PenLine className="w-3.5 h-3.5" />
                  <span>Write in Journal</span>
                </button>
              </div>
            </section>
          )}
        </article>
      </main>

      {/* Quiet Floating Verse Selection Bar (Appears Only When User Taps a Verse) */}
      {selectedVerse && (() => {
        const vId =
          selectedVerse.id ||
          `${chapterData.bookId}-${selectedVerse.chapterNumber}:${selectedVerse.verseNumber}`;
        const vRef = `${chapterData.bookName} ${selectedVerse.chapterNumber}:${selectedVerse.verseNumber}`;
        const bookmarked = isBookmarked(vRef);

        return (
          <div className="fixed bottom-[4.75rem] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md bg-[#24221E] text-[#FBF8F1] border border-[#3E3A33] shadow-xl rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2 animate-slide-up">
            <div className="text-xs font-serif font-semibold truncate pr-1">
              {vRef}
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => openExplainDrawer(vId)}
                className="px-2.5 py-1 rounded-md bg-[#8B3A2B] hover:bg-[#9E4534] text-white text-[0.6875rem] font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                <span>Explain</span>
              </button>

              <button
                onClick={() => setActiveNoteVerse(vRef)}
                className="p-1.5 rounded-md hover:bg-white/10 text-[#E2DACB] hover:text-white transition-colors cursor-pointer"
                title="Add margin note"
                aria-label="Add note"
              >
                <MessageSquarePlus className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  void triggerLightHaptic();
                  toggleBookmark(vRef);
                }}
                className={`p-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer ${
                  bookmarked ? 'text-[#E59D8D]' : 'text-[#E2DACB] hover:text-white'
                }`}
                title={bookmarked ? 'Remove bookmark' : 'Bookmark verse'}
                aria-label="Bookmark verse"
              >
                {bookmarked ? (
                  <BookmarkCheck className="w-4 h-4" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() =>
                  openShareModal({
                    verseRef: vRef,
                    verseText: selectedVerse.text,
                    illustrationId: selectedVerse.illustrationId,
                  })
                }
                className="p-1.5 rounded-md hover:bg-white/10 text-[#E2DACB] hover:text-white transition-colors cursor-pointer"
                title="Share verse card"
                aria-label="Share verse"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedVerseNum(null)}
                className="p-1 rounded-md hover:bg-white/10 text-[#96938B] hover:text-white transition-colors cursor-pointer ml-0.5"
                title="Clear selection"
                aria-label="Close verse actions"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })()}

      {/* Reader-Specific Modals */}
      <AddNoteModal
        verseRef={activeNoteVerse}
        bookId={chapterData.bookId}
        onClose={() => setActiveNoteVerse(null)}
      />
    </div>
  );
};
