import React, { useState } from 'react';
import { X, PenLine, Check, Sparkles, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStudyStore } from '../../store/useStudyStore';
import { StoryIllustration } from '../illustrations/StoryIllustration';

const REACTION_CHIPS = [
  'Grateful',
  'Encouraged',
  'Challenged',
  'Peaceful',
  'Want to Trust More',
];

export const SmartJournalModal: React.FC = () => {
  const {
    activeJournalTarget,
    closeJournalSheet,
    addJournalEntry,
    preferences,
    setActiveTab,
  } = useStudyStore();

  const [selectedTags, setSelectedTags] = useState<string[]>(['Encouraged']);
  const [reflectionText, setReflectionText] = useState('');
  const [linkToPrayer, setLinkToPrayer] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!activeJournalTarget) return null;

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSave = () => {
    const finalReflection =
      reflectionText.trim() ||
      `Remembering the message of ${activeJournalTarget.verseRef} today.`;

    addJournalEntry({
      verseReference: activeJournalTarget.verseRef,
      passageSnapshotText: activeJournalTarget.snapshotText,
      illustrationId: activeJournalTarget.illustrationId,
      reactionTags: selectedTags.length > 0 ? selectedTags : ['Peaceful'],
      userReflectionText: finalReflection,
      linkedToPrayerList: linkToPrayer,
      prayerAnswered: false,
      bookId: activeJournalTarget.bookId,
    });

    setSavedSuccess(true);
    try {
      confetti({
        particleCount: 40,
        spread: 55,
        origin: { y: 0.7 },
        colors: ['#7A9A82', '#C88A6B', '#FAF7F2'],
      });
    } catch {}

    setTimeout(() => {
      setSavedSuccess(false);
      setReflectionText('');
      setSelectedTags(['Encouraged']);
      closeJournalSheet();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center pointer-events-auto">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/40 backdrop-blur-[2px] animate-fade-in"
        onClick={closeJournalSheet}
      />

      <div
        className={`relative w-full max-w-lg bg-[#FAF7F2] rounded-t-[32px] shadow-2xl border-t border-[#E8E2D7] p-5 pb-8 z-10 animate-slide-up max-h-[90vh] overflow-y-auto ${fontClass}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="w-12 h-1.5 bg-[#DED7CB] rounded-full mx-auto mb-4" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7] mb-4">
          <div className="flex items-center gap-2">
            <PenLine className="w-4 h-4 text-[#7A9A82]" />
            <h3 className="text-base font-serif font-bold text-[#2C2C2A]">
              Reflect in Smart Journal
            </h3>
          </div>
          <button
            onClick={closeJournalSheet}
            className="p-1.5 rounded-full hover:bg-[#F3EFE6] text-[#76746E]"
            aria-label="Close journal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedSuccess ? (
          <div className="py-10 text-center space-y-3 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#EBF2ED] text-[#7A9A82] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-serif font-bold text-[#2C2C2A]">
              Saved to Journal & Prayer List!
            </h4>
            <p className="text-xs text-[#76746E]">
              You can revisit all your reflections anytime in the Library tab.
            </p>
            <button
              onClick={() => {
                setSavedSuccess(false);
                closeJournalSheet();
                setActiveTab('library');
              }}
              className="text-xs font-semibold text-[#7A9A82] underline"
            >
              View in Library →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Embedded "What I Read" Snapshot Card */}
            <div className="bg-[#F3EFE6] rounded-2xl p-3 border border-[#E5DFD5] flex gap-3 items-center">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                <StoryIllustration
                  illustrationId={activeJournalTarget.illustrationId}
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#7A9A82]">
                  <Sparkles className="w-3 h-3" />
                  <span>What I Read • {activeJournalTarget.verseRef}</span>
                </div>
                <p
                  className="text-xs text-[#2C2C2A] mt-1 leading-relaxed line-clamp-3"
                  style={{ fontSize: `${Math.max(12, Math.min(preferences.fontSize - 5, 16))}px` }}
                >
                  {activeJournalTarget.snapshotText}
                </p>
              </div>
            </div>

            {/* Reaction Chips */}
            <div>
              <div className="text-xs font-semibold text-[#2C2C2A] mb-2">
                How does this make you feel today?
              </div>
              <div className="flex flex-wrap gap-1.5">
                {REACTION_CHIPS.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#55534E] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Guided Fill-In Prompt */}
            <div>
              <label className="block text-xs font-semibold text-[#2C2C2A] mb-1.5">
                Your Reflection
              </label>
              <textarea
                rows={3}
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder="One thing I want to remember from this today is..."
                className="w-full p-3.5 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] text-sm text-[#2C2C2A] placeholder-[#8E8B83] focus:outline-none focus:ring-2 focus:ring-[#7A9A82]/40 focus:bg-[#FAF7F2] resize-none"
                style={{ fontSize: `${Math.max(14, Math.min(preferences.fontSize - 2, 18))}px` }}
              />
            </div>

            {/* Prayer List Link Toggle */}
            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] cursor-pointer">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#C88A6B]" />
                <div>
                  <div className="text-xs font-semibold text-[#2C2C2A]">
                    Also save to my Prayer Journal
                  </div>
                  <div className="text-[11px] text-[#76746E]">
                    Track answered prayers alongside your study notes
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={linkToPrayer}
                onChange={(e) => setLinkToPrayer(e.target.checked)}
                className="w-4 h-4 accent-[#7A9A82] cursor-pointer"
              />
            </label>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Save Entry</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
