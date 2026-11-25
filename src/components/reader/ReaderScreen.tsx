import React, { useState, useEffect, useRef } from 'react';
import {
  Sliders,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  MessageSquarePlus,
  ArrowLeft,
  Sparkles,
  PenLine,
  Share2,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { SEED_CHAPTERS } from '../../data/seedPassages';
import { SEED_STORY_MODULES } from '../../data/seedStoryModules';
import { StoryIllustration } from '../illustrations/StoryIllustration';
import { TypographyDrawer } from './TypographyDrawer';
import { ChapterPickerModal } from './ChapterPickerModal';
import { AddNoteModal } from './AddNoteModal';

export const ReaderScreen: React.FC = () => {
  const {
    currentChapterId,
    setCurrentChapterId,
    preferences,
    showVisualHookHeader,
    setShowVisualHookHeader,
    startReadingFromOverview,
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
  } = useStudyStore();

  const [activeNoteVerse, setActiveNoteVerse] = useState<string | null>(null);
  const highlightedRef = useRef<HTMLDivElement | null>(null);

  const chapterData = SEED_CHAPTERS[currentChapterId] || SEED_CHAPTERS['EXO-16'];
  const matchingStory = SEED_STORY_MODULES.find((s) => s.chapterId === currentChapterId);

  useEffect(() => {
    if (!showVisualHookHeader && highlightedVerseNumber && highlightedRef.current) {
      highlightedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showVisualHookHeader, highlightedVerseNumber, currentChapterId]);

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

  const getOverviewHeaderTitle = () => {
    return `${chapterData.bookName} ${chapterData.chapterNumber} Overview`;
  };

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

  const renderInteractiveVerse = (
    text: string,
    linkedEntities: { spanText: string; entityId: string }[]
  ) => {
    if (!preferences.highlightConnections || linkedEntities.length === 0) {
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
              onClick={() => openEntitySheet(seg.entityId!)}
              className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md bg-[#7A9A82]/15 text-[#243527] border-b border-[#7A9A82]/40 hover:bg-[#7A9A82]/30 active:scale-95 transition-all cursor-pointer font-medium decoration-none"
              title="Tap to see meaning, timeline & map"
            >
              {seg.text}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <div className="relative min-h-full pb-28 bg-[#FAF7F2] text-[#2C2C2A]">
      {/* Sticky Reader Top Bar */}
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D7] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showVisualHookHeader && (
            <button
              onClick={() => setShowVisualHookHeader(false)}
              className="p-1 -ml-1 text-[#76746E] hover:text-[#2C2C2A] transition-colors"
              title="Collapse overview"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={() => setShowChapterPicker(true)}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#2C2C2A] hover:bg-[#F3EFE6] px-2.5 py-1.5 rounded-xl border border-transparent hover:border-[#E5DFD5] transition-all cursor-pointer"
          >
            <span>{showVisualHookHeader ? getOverviewHeaderTitle() : passageTitle}</span>
            <ChevronDown className="w-4 h-4 text-[#7A9A82]" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowVisualHookHeader(!showVisualHookHeader)}
            className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
              showVisualHookHeader
                ? 'bg-[#7A9A82]/15 text-[#5A7D63] border-[#7A9A82]/30'
                : 'text-[#76746E] border-transparent hover:bg-[#F3EFE6]'
            }`}
          >
            {showVisualHookHeader ? 'Overview' : 'Big Picture'}
          </button>

          <button
            onClick={() => setShowTypographyDrawer(true)}
            className="p-2 rounded-full text-[#6B6862] hover:text-[#2C2C2A] hover:bg-[#F3EFE6] transition-colors cursor-pointer"
            title="Reader typography & comfort settings"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Reader Container */}
      <main className="max-w-xl mx-auto px-4 pt-4">
        {/* Step 3: Visual Hook Overview Card */}
        {showVisualHookHeader && (
          <div className="mb-6 space-y-3 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5DFD5] shadow-xs">
              <StoryIllustration
                illustrationId={getChapterIllustrationId()}
                className="w-full h-52"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/40 to-transparent p-5 flex flex-col justify-end text-white">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F3EFE6]/80 mb-1">
                  The Visual Hook
                </span>
                <h2 className="text-2xl font-serif font-bold text-white leading-tight drop-shadow-sm">
                  {chapterData.title.split(':')[1]?.trim() || chapterData.title}
                </h2>
                <p className="text-xs text-[#FAF7F2]/90 mt-1 line-clamp-2 max-w-sm">
                  {chapterData.subtitle}
                </p>
              </div>
            </div>

            <div className="bg-[#F3EFE6] rounded-3xl p-5 border border-[#E5DFD5] shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-serif font-bold text-[#2C2C2A]">The Big Picture</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#EDE7DC] text-[#76746E]">
                  {chapterData.bookName} Context
                </span>
              </div>
              <p
                className={`text-[#484642] leading-relaxed mb-4 ${
                  preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans'
                }`}
                style={{
                  fontSize: `${Math.max(13, Math.min(preferences.fontSize - 3, 18))}px`,
                  lineHeight: preferences.lineHeight,
                }}
              >
                {chapterData.bigPictureText}
              </p>

              <button
                onClick={startReadingFromOverview}
                className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>Start Reading</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Distraction-Free Scripture Reading Section */}
        <article className="pt-2">
          <div className="mb-6 pb-2 border-b border-[#EFEAE1]">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7A9A82]">
              Scripture Reading
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2A] mt-1">
              {chapterData.title}
            </h1>
            <p className="text-xs text-[#76746E] mt-1">
              Public Domain {chapterData.verses[0]?.translation || 'WEB'} Translation • {chapterData.verses.length} Verses • Tap underlined terms
            </p>
          </div>

          <div
            className={`space-y-6 ${getFontFamilyClass()}`}
            style={{
              fontSize: `${preferences.fontSize}px`,
              lineHeight: preferences.lineHeight,
            }}
          >
            {chapterData.verses.map((verse) => {
              const verseId =
                verse.id || `${chapterData.bookId}-${verse.chapterNumber}:${verse.verseNumber}`;
              const verseRef = `${chapterData.bookName} ${verse.chapterNumber}:${verse.verseNumber}`;
              const bookmarked = isBookmarked(verseRef);
              const isHighlighted = highlightedVerseNumber === verse.verseNumber;

              return (
                <div
                  key={`${verse.chapterNumber}-${verse.verseNumber}`}
                  ref={isHighlighted ? highlightedRef : null}
                  className={`group relative transition-colors rounded-2xl p-3 -mx-2 ${
                    isHighlighted
                      ? 'bg-[#EFE9DC] border border-[#DFD5C2] shadow-xs'
                      : 'hover:bg-[#F3EFE6]/60'
                  }`}
                >
                  {isHighlighted && (
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B07456] mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Highlighted Anchor Verse</span>
                    </div>
                  )}

                  <p className="text-[#2C2C2A] text-justify selection:bg-[#7A9A82]/20">
                    {renderInteractiveVerse(verse.text, verse.linkedEntities)}
                    <span className="inline-block ml-1.5 text-xs font-sans font-semibold text-[#8C8982] select-none">
                      [{verse.chapterNumber}:{verse.verseNumber}]
                    </span>
                  </p>

                  {/* Verse Actions: Explain This Verse, Bookmark, Note, Share */}
                  <div
                    className={`flex items-center justify-between gap-2 mt-2.5 pt-2 border-t border-[#E8E2D7]/60 text-xs font-sans transition-opacity ${
                      isHighlighted
                        ? 'opacity-100'
                        : 'opacity-75 group-hover:opacity-100 focus-within:opacity-100'
                    }`}
                  >
                    <button
                      onClick={() => openExplainDrawer(verseId)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#7A9A82]/12 hover:bg-[#7A9A82]/22 text-[#385541] text-[11px] font-semibold transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-[#7A9A82]" />
                      <span>Explain This Verse</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() =>
                          openShareModal({
                            verseRef,
                            verseText: verse.text,
                            illustrationId: verse.illustrationId,
                          })
                        }
                        className="p-1.5 rounded-lg hover:bg-[#EDE7DC] text-[#96938B] hover:text-[#2C2C2A] transition-colors cursor-pointer"
                        title="Share Illustrated Verse Card"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => toggleBookmark(verseRef)}
                        className={`p-1.5 rounded-lg hover:bg-[#EDE7DC] transition-colors cursor-pointer ${
                          bookmarked ? 'text-[#C88A6B]' : 'text-[#96938B]'
                        }`}
                        title={bookmarked ? 'Remove bookmark' : 'Bookmark verse'}
                      >
                        {bookmarked ? (
                          <BookmarkCheck className="w-3.5 h-3.5 text-[#C88A6B]" />
                        ) : (
                          <Bookmark className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => setActiveNoteVerse(verseRef)}
                        className="p-1.5 rounded-lg hover:bg-[#EDE7DC] text-[#96938B] hover:text-[#2C2C2A] transition-colors cursor-pointer"
                        title="Add private note"
                      >
                        <MessageSquarePlus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chapter-to-Chapter Navigation (Genesis 1–50 through Daniel 1–12) */}
          {(chapterData.bookId === 'GEN' ||
            chapterData.bookId === 'EXO' ||
            chapterData.bookId === 'LEV' ||
            chapterData.bookId === 'NUM' ||
            chapterData.bookId === 'DEU' ||
            chapterData.bookId === 'JOS' ||
            chapterData.bookId === 'JDG' ||
            chapterData.bookId === 'RUT' ||
            chapterData.bookId === '1SA' ||
            chapterData.bookId === '2SA' ||
            chapterData.bookId === '1KI' ||
            chapterData.bookId === '2KI' ||
            chapterData.bookId === '1CH' ||
            chapterData.bookId === '2CH' ||
            chapterData.bookId === 'JOB' ||
            chapterData.bookId === 'PSA' ||
            chapterData.bookId === 'DAN') && (() => {
            const maxChapters =
              chapterData.bookId === 'GEN'
                ? 50
                : chapterData.bookId === 'EXO'
                ? 40
                : chapterData.bookId === 'LEV'
                ? 27
                : chapterData.bookId === 'NUM'
                ? 36
                : chapterData.bookId === 'DEU'
                ? 34
                : chapterData.bookId === 'JOS'
                ? 24
                : chapterData.bookId === 'JDG'
                ? 21
                : chapterData.bookId === 'RUT'
                ? 4
                : chapterData.bookId === '1SA'
                ? 31
                : chapterData.bookId === '2SA'
                ? 24
                : chapterData.bookId === '1KI'
                ? 22
                : chapterData.bookId === '2KI'
                ? 25
                : chapterData.bookId === '1CH'
                ? 29
                : chapterData.bookId === '2CH'
                ? 36
                : chapterData.bookId === 'JOB'
                ? 42
                : chapterData.bookId === 'PSA'
                ? 150
                : 12;
            const prefix = chapterData.bookId;

            return (
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    if (chapterData.chapterNumber > 1) {
                      setCurrentChapterId(`${prefix}-${chapterData.chapterNumber - 1}`);
                      setShowVisualHookHeader(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  disabled={chapterData.chapterNumber <= 1}
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EBE5DA] disabled:opacity-40 border border-[#E5DFD5] text-xs font-semibold text-[#2C2C2A] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-[#7A9A82]" />
                  <span>Ch. {Math.max(1, chapterData.chapterNumber - 1)}</span>
                </button>

                <span className="text-xs font-mono text-[#76746E]">
                  {chapterData.chapterNumber} / {maxChapters}
                </span>

                <button
                  onClick={() => {
                    if (chapterData.chapterNumber < maxChapters) {
                      setCurrentChapterId(`${prefix}-${chapterData.chapterNumber + 1}`);
                      setShowVisualHookHeader(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  disabled={chapterData.chapterNumber >= maxChapters}
                  className="flex-1 py-2.5 px-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EBE5DA] disabled:opacity-40 border border-[#E5DFD5] text-xs font-semibold text-[#2C2C2A] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Ch. {Math.min(maxChapters, chapterData.chapterNumber + 1)}</span>
                  <ChevronRight className="w-4 h-4 text-[#7A9A82]" />
                </button>
              </div>
            );
          })()}

          {/* Bottom Passage Action Hub: Explain, Reflect in Journal, Daily Quiz */}
          <div className="mt-6 p-5 rounded-3xl bg-[#F3EFE6] border border-[#E5DFD5] space-y-3">
            <div className="text-center">
              <p className="text-xs font-bold text-[#7A9A82] uppercase tracking-wider">
                Passage Complete
              </p>
              <p className="text-xs text-[#6B6862] mt-1">
                Capture a reflection in your Smart Journal or explore what this passage means for today.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => openExplainDrawer(getDefaultVerseIdForChapter())}
                className="py-2.5 px-3 rounded-2xl bg-[#FAF7F2] hover:bg-[#EDE7DC] border border-[#E5DFD5] text-[#2C2C2A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#7A9A82]" />
                <span>Explain This Verse</span>
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
                className="py-2.5 px-3 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>Reflect in Journal</span>
              </button>
            </div>

            <div className="flex justify-center gap-3 pt-1">
              <button
                onClick={() => setActiveTab('today')}
                className="text-xs text-[#7A9A82] hover:text-[#5A7D63] font-semibold underline cursor-pointer"
              >
                Take Daily Quiz →
              </button>
              <span className="text-[#DDD6C8]">•</span>
              <button
                onClick={() => setActiveTab('explore')}
                className="text-xs text-[#76746E] hover:text-[#2C2C2A] font-medium underline cursor-pointer"
              >
                Explore Stories & Maps
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* Reader-Specific Modals */}
      <TypographyDrawer />
      <ChapterPickerModal />
      <AddNoteModal
        verseRef={activeNoteVerse}
        bookId={chapterData.bookId}
        onClose={() => setActiveNoteVerse(null)}
      />
    </div>
  );
};
