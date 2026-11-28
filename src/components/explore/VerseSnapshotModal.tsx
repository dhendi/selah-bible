import React, { useState } from 'react';
import { X, BookOpen, BookmarkPlus, Check, Share2 } from 'lucide-react';
import type { StoryModule } from '../../types/bible';
import { useStudyStore } from '../../store/useStudyStore';
import { StoryIllustration } from '../illustrations/StoryIllustration';

export const VerseSnapshotModal: React.FC<{
  story: StoryModule | null;
  onClose: () => void;
}> = ({ story, onClose }) => {
  const {
    preferences,
    flashcards,
    addFlashcard,
    openVisualOverview,
    openShareModal,
  } = useStudyStore();

  const [justSaved, setJustSaved] = useState(false);

  if (!story) return null;

  const isSavedInDeck =
    justSaved ||
    flashcards.some(
      (c) => c.verseReference.toLowerCase() === story.anchorVerseRef.toLowerCase()
    );

  const fontClass = preferences.isDyslexicFont
    ? 'font-dyslexic'
    : preferences.fontFamily === 'sans'
    ? 'font-sans'
    : 'font-serif';

  const handleSaveFlashcard = () => {
    addFlashcard(
      story.anchorVerseRef,
      story.anchorVerseText,
      story.title,
      story.oneSentenceSummary
    );
    setJustSaved(true);
  };

  const handleReadMore = () => {
    onClose();
    openVisualOverview(story.chapterId, story.anchorVerseNumber);
  };

  const handleShare = () => {
    openShareModal({
      verseRef: story.anchorVerseRef,
      verseText: story.anchorVerseText,
      illustrationId: story.illustrationId,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/45 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DFD5] overflow-hidden z-10 animate-slide-up flex flex-col max-h-[88vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Reusable Pastel Illustration */}
        <div className="relative">
          <StoryIllustration illustrationId={story.illustrationId} className="w-full h-44 rounded-none" />

          {/* Floating top actions */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#2C2C2A] shadow-sm transition-colors"
              title="Share Illustrated Verse Card"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#2C2C2A] shadow-sm transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute bottom-3 left-4">
            <span className="text-[0.625rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF7F2]/95 text-[#5A7D63] shadow-xs flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {story.anchorVerseRef}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#2C2C2A] leading-tight">
              {story.title}
            </h3>
            <p className="text-xs text-[#76746E] mt-1">{story.subtitle}</p>
          </div>

          {/* Anchor Verse Card */}
          <div className="bg-[#F3EFE6] rounded-2xl p-4 border border-[#E5DFD5]">
            <blockquote
              className={`text-[#2C2C2A] italic leading-relaxed ${fontClass}`}
              style={{
                fontSize: `${Math.min(preferences.fontSize, 20)}px`,
                lineHeight: preferences.lineHeight,
              }}
            >
              "{story.anchorVerseText}"
            </blockquote>
            <div className="text-right text-[0.6875rem] font-semibold text-[#7A9A82] mt-2">
              — {story.anchorVerseRef} (BSB)
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            {/* Step 2 -> Step 3 Primary CTA */}
            <button
              onClick={handleReadMore}
              className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read More</span>
            </button>

            {/* Secondary Save to Flashcards */}
            <button
              onClick={handleSaveFlashcard}
              disabled={isSavedInDeck}
              className={`w-full py-3 rounded-2xl border font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isSavedInDeck
                  ? 'bg-[#EBF2ED] border-[#7A9A82] text-[#385541]'
                  : 'bg-[#F3EFE6] hover:bg-[#EDE7DC] border-[#E5DFD5] text-[#2C2C2A]'
              }`}
            >
              {isSavedInDeck ? (
                <>
                  <Check className="w-4 h-4 text-[#7A9A82]" />
                  <span>Saved to Flashcards</span>
                </>
              ) : (
                <>
                  <BookmarkPlus className="w-4 h-4 text-[#C88A6B]" />
                  <span>Save to Flashcards</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
