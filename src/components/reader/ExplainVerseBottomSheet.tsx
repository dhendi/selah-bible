import React from 'react';
import {
  X,
  Sparkles,
  BookOpen,
  Heart,
  MapPin,
  Clock,
  Share2,
  PenLine,
  Users,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { getExplanationForVerse } from '../../data/seedVerseExplanations';
import { getCachedChapter, useChapterData } from '../../data/bookLoader';

export const ExplainVerseBottomSheet: React.FC = () => {
  const {
    activeExplainVerseId,
    closeExplainDrawer,
    isKidsMode,
    setKidsMode,
    preferences,
    navigateToMapPin,
    navigateToTimelineEra,
    openShareModal,
    openJournalSheet,
  } = useStudyStore();

  const { chapterData } = useChapterData(activeExplainVerseId || '');

  if (!activeExplainVerseId) return null;

  const chapPart = activeExplainVerseId.split(':')[0];
  const resolvedChapter = chapterData || getCachedChapter(chapPart);
  const explanation = getExplanationForVerse(activeExplainVerseId, resolvedChapter);

  // Locate actual verse object to grab text & illustrationId
  let verseText = '';
  let illustrationId = 'ill-creation';
  let bookId = 'GEN';

  if (resolvedChapter) {
    const found = resolvedChapter.verses.find(
      (v) =>
        v.id === activeExplainVerseId ||
        `${v.bookId}-${v.chapterNumber}:${v.verseNumber}` === activeExplainVerseId
    );
    if (found) {
      verseText = found.text;
      illustrationId = found.illustrationId;
      bookId = found.bookId;
    }
  }

  const fontClass = preferences.isDyslexicFont
    ? 'font-dyslexic'
    : 'font-sans';

  const bodyFontSize = Math.max(13, Math.min(preferences.fontSize - 3, 19));

  const handleMapClick = () => {
    closeExplainDrawer();
    if (activeExplainVerseId.startsWith('EXO')) {
      navigateToMapPin('loc-wilderness-sin');
    } else if (activeExplainVerseId.startsWith('RUT')) {
      navigateToMapPin('loc-bethlehem');
    } else if (/^(MAT|MRK|LUK|JHN)-/.test(activeExplainVerseId)) {
      navigateToMapPin('loc-mount-tabor');
    } else if (activeExplainVerseId.startsWith('ACT-')) {
      navigateToMapPin('loc-jerusalem');
    } else if (/^(ROM|1CO|2CO)-/.test(activeExplainVerseId)) {
      navigateToMapPin('loc-mount-carmel');
    } else {
      navigateToMapPin('loc-eden');
    }
  };

  const handleTimelineClick = () => {
    closeExplainDrawer();
    if (activeExplainVerseId.startsWith('EXO')) {
      navigateToTimelineEra('era-exodus');
    } else if (activeExplainVerseId.startsWith('RUT')) {
      navigateToTimelineEra('era-judges');
    } else if (/^(MAT|MRK|LUK|JHN)-/.test(activeExplainVerseId)) {
      navigateToTimelineEra('era-jesus');
    } else if (/^(ACT|ROM|1CO|2CO)-/.test(activeExplainVerseId)) {
      navigateToTimelineEra('era-church');
    } else {
      navigateToTimelineEra('era-creation');
    }
  };

  const handleShareClick = () => {
    openShareModal({
      verseRef: explanation.verseRef,
      verseText: verseText || explanation.whatThisMeans,
      illustrationId,
    });
  };

  const handleReflectClick = () => {
    openJournalSheet({
      verseRef: explanation.verseRef,
      bookId,
      snapshotText: isKidsMode
        ? explanation.kidFriendlySummary
        : explanation.whatThisMeans.split('.')[0] + '.',
      illustrationId,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#2C2C2A]/35 backdrop-blur-[2px] animate-fade-in"
        onClick={closeExplainDrawer}
        aria-label="Close explanation drawer"
      />

      {/* Drawer Content */}
      <div
        className={`relative w-full max-w-lg bg-[#FAF7F2] rounded-t-[32px] shadow-2xl border-t border-[#E8E2D7] p-5 pb-8 z-10 animate-slide-up max-h-[88vh] overflow-y-auto ${fontClass}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-[#DED7CB] rounded-full mx-auto mb-4" />

        {/* Drawer Header + Standard / Kids & Family Toggle Pill */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-[#E8E2D7] mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#7A9A82]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explain What This Means</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#2C2C2A] mt-0.5">
              {explanation.verseRef}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Compact Toggle Pill: Standard | Kids & Family */}
            <div className="bg-[#F3EFE6] p-0.5 rounded-full border border-[#E5DFD5] flex items-center text-[11px] font-semibold">
              <button
                onClick={() => setKidsMode(false)}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  !isKidsMode
                    ? 'bg-[#7A9A82] text-white shadow-xs'
                    : 'text-[#76746E] hover:text-[#2C2C2A]'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setKidsMode(true)}
                className={`px-2.5 py-1 rounded-full flex items-center gap-1 transition-all cursor-pointer ${
                  isKidsMode
                    ? 'bg-[#C88A6B] text-white shadow-xs'
                    : 'text-[#76746E] hover:text-[#2C2C2A]'
                }`}
              >
                <Users className="w-3 h-3" />
                <span>Kids & Family</span>
              </button>
            </div>

            <button
              onClick={closeExplainDrawer}
              className="p-1.5 rounded-full text-[#76746E] hover:text-[#2C2C2A] hover:bg-[#F3EFE6]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Content: Kids & Family View vs Standard Two-Part View */}
        {isKidsMode ? (
          <div className="space-y-4 mb-5 animate-fade-in">
            <div className="bg-[#FAECE5]/60 rounded-3xl p-4 border border-[#ECCDC0]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B07456] mb-2">
                <Heart className="w-4 h-4 fill-[#B07456]" />
                <span>Storytime for Kids & Family</span>
              </div>
              <p
                className="text-[#2C2C2A] leading-relaxed"
                style={{ fontSize: `${bodyFontSize + 1}px`, lineHeight: preferences.lineHeight }}
              >
                {explanation.kidFriendlySummary}
              </p>
            </div>

            <div className="bg-[#EBF2ED] rounded-2xl p-4 border border-[#C3D6C8]">
              <p
                className="text-[#285842] leading-relaxed"
                style={{ fontSize: `${bodyFontSize}px`, lineHeight: preferences.lineHeight }}
              >
                <strong className="font-bold">Try this together today: </strong>
                {explanation.tryThisAction}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-5 animate-fade-in">
            {/* Part 1: What This Means */}
            <div className="bg-[#F3EFE6] rounded-2xl p-4 border border-[#E5DFD5]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                1. What This Means
              </h4>
              <p
                className="text-[#2C2C2A] leading-relaxed"
                style={{ fontSize: `${bodyFontSize}px`, lineHeight: preferences.lineHeight }}
              >
                {explanation.whatThisMeans}
              </p>
            </div>

            {/* Part 2: The Lesson For You */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E5DFD5] space-y-3">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C88A6B] mb-1.5 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  2. The Lesson For You
                </h4>
                <p
                  className="text-[#2C2C2A] leading-relaxed"
                  style={{ fontSize: `${bodyFontSize}px`, lineHeight: preferences.lineHeight }}
                >
                  {explanation.lessonForYou}
                </p>
              </div>

              {/* Bold "Try this today:" action prompt */}
              <div className="bg-[#EBF2ED] rounded-xl p-3 border border-[#C3D6C8]">
                <p
                  className="text-[#285842] leading-relaxed"
                  style={{ fontSize: `${Math.max(12, bodyFontSize - 1)}px` }}
                >
                  <strong className="font-bold">Try this today: </strong>
                  {explanation.tryThisAction}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reflect in Journal Primary Action */}
        <button
          onClick={handleReflectClick}
          className="w-full py-3 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs mb-4 cursor-pointer"
        >
          <PenLine className="w-4 h-4" />
          <span>Reflect in Journal</span>
        </button>

        {/* Horizontal Connected Quick Links Pills */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#76746E] mb-2">
            Connected Links
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={handleMapClick}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F3EFE6] hover:bg-[#EBE5DA] border border-[#E5DFD5] text-xs font-medium text-[#2C2C2A] whitespace-nowrap cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C88A6B]" />
              <span>Interactive Map Pin</span>
            </button>

            <button
              onClick={handleTimelineClick}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F3EFE6] hover:bg-[#EBE5DA] border border-[#E5DFD5] text-xs font-medium text-[#2C2C2A] whitespace-nowrap cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-[#7A9A82]" />
              <span>Timeline Era</span>
            </button>

            <button
              onClick={handleShareClick}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F3EFE6] hover:bg-[#EBE5DA] border border-[#E5DFD5] text-xs font-medium text-[#2C2C2A] whitespace-nowrap cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#5D7CA8]" />
              <span>Share Verse Card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
