import React, { useState } from 'react';
import { RotateCw, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStudyStore } from '../../store/useStudyStore';

export const FlashcardDeck: React.FC = () => {
  const { flashcards, answerFlashcard, navigateToPassage } = useStudyStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (flashcards.length === 0) {
    return (
      <div className="bg-[#F3EFE6] rounded-3xl p-6 text-center border border-[#E5DFD5]">
        <p className="text-sm text-[#76746E]">All flashcards reviewed for today!</p>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex % flashcards.length];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGrade = (quality: number) => {
    answerFlashcard(currentCard.id, quality);
    setIsFlipped(false);
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#7A9A82', '#C88A6B'],
        });
      } catch {}
      setCurrentIndex(0);
    }
  };

  const handleJump = () => {
    if (currentCard.verseReference.includes('Genesis')) {
      navigateToPassage('GEN-1');
    } else {
      navigateToPassage('EXO-16');
    }
  };

  return (
    <div className="space-y-4">
      {/* Deck Header */}
      <div className="flex items-center justify-between text-xs text-[#76746E] px-1">
        <span className="flex items-center gap-1 font-semibold text-[#7A9A82]">
          <Sparkles className="w-3.5 h-3.5" />
          Active Recall Spaced Repetition (SM-2)
        </span>
        <span className="font-mono">
          Card {currentIndex + 1} of {flashcards.length}
        </span>
      </div>

      {/* 3D Flip Card */}
      <div
        className="w-full min-h-[260px] perspective-1000 cursor-pointer"
        onClick={handleFlip}
      >
        <div
          className={`relative w-full h-full min-h-[260px] transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT OF CARD */}
          <div className="absolute inset-0 backface-hidden bg-[#FAF7F2] rounded-3xl p-6 border border-[#E5DFD5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#5A7D63]">
                  {currentCard.verseReference}
                </span>
                <span className="text-[0.6875rem] text-[#96938B] flex items-center gap-1">
                  <RotateCw className="w-3 h-3" /> Tap to Flip
                </span>
              </div>

              <blockquote className="text-base sm:text-lg font-serif text-[#2C2C2A] leading-relaxed italic mt-2">
                "{currentCard.verseText}"
              </blockquote>
            </div>

            <div className="pt-3 border-t border-[#E8E2D7] text-xs text-[#76746E] flex items-center justify-between">
              <span><strong>Hint:</strong> {currentCard.hint}</span>
            </div>
          </div>

          {/* BACK OF CARD */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#F3EFE6] rounded-3xl p-6 border border-[#7A9A82]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82]">
                  Key Concept & Meaning
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleJump();
                  }}
                  className="text-[0.6875rem] font-medium text-[#7A9A82] hover:underline"
                >
                  View in Reader →
                </button>
              </div>

              <h3 className="text-base font-serif font-bold text-[#2C2C2A] mb-2">
                {currentCard.keyConcept}
              </h3>

              {currentCard.hebrewGreek && (
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D7] font-hebrew text-sm text-[#7A9A82] font-semibold mb-3">
                  {currentCard.hebrewGreek}
                </div>
              )}
            </div>

            {/* Rating Buttons */}
            <div
              className="pt-3 border-t border-[#E5DFD5]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[0.6875rem] font-semibold text-[#76746E] mb-2 text-center">
                How well did you recall this?
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <button
                  onClick={() => handleGrade(1)}
                  className="py-1.5 px-2 rounded-xl bg-[#F9ECE5] text-[#9A4B32] text-xs font-semibold hover:bg-[#F2D7CC] transition-colors"
                >
                  Again
                </button>
                <button
                  onClick={() => handleGrade(3)}
                  className="py-1.5 px-2 rounded-xl bg-[#F5EFE6] text-[#6A4F2C] text-xs font-semibold hover:bg-[#EBE0D0] transition-colors"
                >
                  Hard
                </button>
                <button
                  onClick={() => handleGrade(4)}
                  className="py-1.5 px-2 rounded-xl bg-[#EBF2ED] text-[#385541] text-xs font-semibold hover:bg-[#D9E6DC] transition-colors"
                >
                  Good
                </button>
                <button
                  onClick={() => handleGrade(5)}
                  className="py-1.5 px-2 rounded-xl bg-[#7A9A82] text-white text-xs font-semibold hover:bg-[#68866F] transition-colors"
                >
                  Easy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deck navigation bar */}
      <div className="flex items-center justify-between text-xs text-[#76746E]">
        <button
          onClick={() => {
            setIsFlipped(false);
            setCurrentIndex((i) => (i > 0 ? i - 1 : flashcards.length - 1));
          }}
          className="flex items-center gap-1 p-2 rounded-xl hover:bg-[#F3EFE6]"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <button
          onClick={() => {
            setIsFlipped(false);
            setCurrentIndex((i) => (i + 1) % flashcards.length);
          }}
          className="flex items-center gap-1 p-2 rounded-xl hover:bg-[#F3EFE6]"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
