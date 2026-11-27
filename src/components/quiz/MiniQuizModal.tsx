import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, XCircle, ArrowRight, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStudyStore } from '../../store/useStudyStore';
import { SEED_QUIZZES } from '../../data/seedQuizzes';

export const MiniQuizModal: React.FC<{
  passageId: string; // 'gen-1' or 'exo-16'
  onClose: () => void;
}> = ({ passageId, onClose }) => {
  const { recordQuizCompletion } = useStudyStore();
  const questions = SEED_QUIZZES[passageId] || SEED_QUIZZES['exo-16'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      recordQuizCompletion(
        passageId,
        questions.map((q) => q.id),
        score,
        questions.length
      );
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#7A9A82', '#C88A6B', '#F3EFE6', '#EDE7DC'],
        });
      } catch {
        // fallback
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/40 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DFD5] p-6 z-10 animate-slide-up flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7] mb-4">
          <div>
            <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#7A9A82]">
              Active-Recall Retention
            </div>
            <h3 className="text-lg font-serif font-bold text-[#2C2C2A]">
              Daily 3-Question Mini Quiz
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F3EFE6] text-[#76746E] cursor-pointer"
            aria-label="Close quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isFinished ? (
          <div>
            {/* Progress indicators */}
            <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 font-medium">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span className="font-mono text-[#7A9A82]">{currentQ.passageRef}</span>
            </div>
            <div className="w-full bg-[#E8E2D7] h-1.5 rounded-full overflow-hidden mb-5">
              <div
                className="bg-[#7A9A82] h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h4 className="text-base font-serif font-semibold text-[#2C2C2A] mb-4 leading-snug">
              {currentQ.question}
            </h4>

            {/* Options List */}
            <div className="space-y-2.5 mb-5">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-[#F3EFE6] border-[#E5DFD5] text-[#2C2C2A] hover:bg-[#EBE5DA]';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'bg-[#EBF2ED] border-[#7A9A82] text-[#285842] font-semibold';
                  } else if (idx === selectedOption) {
                    btnStyle = 'bg-[#F9ECE5] border-[#C88A6B] text-[#9A4B32]';
                  } else {
                    btnStyle = 'bg-[#F3EFE6]/50 border-transparent text-[#96938B]';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3.5 rounded-2xl border text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-[#EDE7DC] text-[#76746E] text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-[#7A9A82] flex-shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-[#C88A6B] flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Feedback Card */}
            {isAnswered && (
              <div className="p-4 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] mb-5 animate-fade-in">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A9A82] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Key Insight
                </div>
                <p className="text-xs text-[#2C2C2A] leading-relaxed mb-2">
                  {currentQ.explanation}
                </p>
                <div className="text-[0.6875rem] text-[#6B6862] italic bg-[#FAF7F2] p-2 rounded-xl border border-[#E8E2D7]">
                  "{currentQ.takeaway}"
                </div>
              </div>
            )}

            {/* Action Button */}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-medium text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          /* Finished summary view */
          <div className="text-center py-6 animate-fade-in space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF2ED] text-[#7A9A82] flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold text-[#2C2C2A]">
                Great Retention!
              </h4>
              <p className="text-sm text-[#76746E] mt-1">
                You scored <span className="font-bold text-[#7A9A82]">{score}</span> out of {questions.length} questions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] text-left text-xs text-[#484642] space-y-1.5">
              <div className="font-bold text-[#2C2C2A]">What you reinforced today:</div>
              {questions.map((q) => (
                <div key={q.id}>• {q.takeaway}</div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="flex-1 py-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#E5DFD5]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white text-xs font-semibold shadow-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
