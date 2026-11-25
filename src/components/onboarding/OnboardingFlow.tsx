import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  XCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStudyStore } from '../../store/useStudyStore';
import { SEED_ENTITIES } from '../../data/seedEntities';
import { ONBOARDING_QUIZ } from '../../data/seedQuizzes';
import { EntityThumbnail } from '../illustrations/EntityThumbnails';

export const OnboardingFlow: React.FC = () => {
  const {
    progress,
    completeOnboarding,
    preferences,
    updatePreferences,
    setExperienceLevel,
  } = useStudyStore();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'moderate' | 'deep'>(
    progress.experienceLevel || 'beginner'
  );

  // Aha Mini Lesson state
  const [showAhaSheet, setShowAhaSheet] = useState(false);
  const [hasOpenedAha, setHasOpenedAha] = useState(false);
  const [ahaSelectedOption, setAhaSelectedOption] = useState<number | null>(null);
  const [ahaAnswered, setAhaAnswered] = useState(false);

  // If already completed onboarding, do not show
  if (progress.hasCompletedOnboarding) return null;

  const mannaEntity = SEED_ENTITIES['term-manna'];

  const handleNextStep = () => {
    if (step === 2) {
      setExperienceLevel(selectedLevel);
    }
    if (step < 4) {
      setStep((s) => (s + 1) as any);
    }
  };

  const handleFinishOnboarding = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7A9A82', '#C88A6B', '#FAF7F2'],
      });
    } catch {}
    completeOnboarding();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF7F2] overflow-y-auto flex flex-col justify-between p-6 max-w-xl mx-auto selection:bg-[#7A9A82]/20">
      {/* Top Header & Step Indicator */}
      <div className="w-full">
        <div className="flex items-center justify-between text-xs text-[#76746E] mb-4">
          <span className="font-serif font-bold text-sm text-[#7A9A82] flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Selah Bible
          </span>
          <span className="font-mono">Step {step} of 4</span>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-[#E8E2D7] h-1.5 rounded-full overflow-hidden mb-6">
          <div
            className="bg-[#7A9A82] h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* ================= STEP 1: WELCOME ================= */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in py-4">
            <div className="w-16 h-16 rounded-3xl bg-[#EBF2ED] text-[#7A9A82] flex items-center justify-center mx-auto shadow-inner">
              <BookOpen className="w-8 h-8" />
            </div>

            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A9A82]">
                A Calm, Connected Bible Platform
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C2A] mt-2 leading-tight">
                Understand how the whole Bible fits together
              </h1>
              <p className="text-sm text-[#6B6862] mt-3 leading-relaxed max-w-md mx-auto">
                No ads, no social feeds, and no seminary jargon. Connect Scripture directly to historical timelines, interactive maps, Hebrew meanings, and active-recall quizzes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="p-3.5 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] text-xs">
                <div className="font-bold text-[#2C2C2A] flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#7A9A82]" />
                  Connected Context
                </div>
                <div className="text-[#6B6862]">
                  Tap underlined words to reveal timeline era, original Hebrew, and map pins.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] text-xs">
                <div className="font-bold text-[#2C2C2A] flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#C88A6B]" />
                  Active Recall
                </div>
                <div className="text-[#6B6862]">
                  Daily 3-question quizzes and spaced-repetition flashcards to retain what you read.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: EXPERIENCE LEVEL ================= */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in py-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A9A82]">
                Personalize Your Path
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#2C2C2A] mt-1">
                Where are you starting from?
              </h2>
              <p className="text-xs text-[#6B6862] mt-1">
                We will calibrate definitions and quiz difficulty to fit you best.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'beginner' as const,
                  title: 'Brand new to the Bible',
                  desc: 'I want plain-English explanations, historical context, and gentle guidance without feeling overwhelmed.',
                },
                {
                  id: 'moderate' as const,
                  title: 'Read parts, want the big picture',
                  desc: 'I know some scattered stories, but want to understand how the 66 books fit into one coherent story.',
                },
                {
                  id: 'deep' as const,
                  title: 'Regular reader wanting deeper context',
                  desc: 'I want original Hebrew and Greek nuances, archaeological timelines, and cross-references.',
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedLevel(opt.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedLevel === opt.id
                      ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-xs'
                      : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold font-serif text-[#2C2C2A]">
                      {opt.title}
                    </span>
                    {selectedLevel === opt.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#7A9A82]" />
                    )}
                  </div>
                  <p className="text-xs text-[#6B6862] leading-relaxed">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 3: READING COMFORT SETUP ================= */}
        {step === 3 && (
          <div className="space-y-5 animate-fade-in py-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A9A82]">
                Accessibility & Typography
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#2C2C2A] mt-1">
                Customize your reading comfort
              </h2>
              <p className="text-xs text-[#6B6862] mt-1">
                Low eye strain, customizable sizing, and verified dyslexia-friendly mode.
              </p>
            </div>

            {/* Live Interactive Preview Card */}
            <div className="p-4 rounded-3xl bg-[#FAF7F2] border border-[#7A9A82]/40 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A9A82] block mb-1">
                Live Preview
              </span>
              <p
                className={`text-[#2C2C2A] ${
                  preferences.isDyslexicFont ? 'font-dyslexic' : 'font-serif'
                }`}
                style={{
                  fontSize: `${preferences.fontSize}px`,
                  lineHeight: preferences.lineHeight,
                }}
              >
                In the beginning God created the heavens and the earth. [1:1]
              </p>
            </div>

            {/* Controls */}
            <div className="bg-[#F3EFE6] p-4 rounded-2xl border border-[#E5DFD5] space-y-4">
              {/* Font Size slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#2C2C2A] mb-1.5">
                  <span>Font Size</span>
                  <span className="font-mono text-[#7A9A82]">{preferences.fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="24"
                  step="1"
                  value={preferences.fontSize}
                  onChange={(e) => updatePreferences({ fontSize: parseInt(e.target.value, 10) })}
                  className="w-full accent-[#7A9A82] cursor-pointer"
                />
              </div>

              {/* Dyslexia mode toggle */}
              <label className="flex items-center justify-between pt-2 border-t border-[#E8E2D7] cursor-pointer">
                <div>
                  <div className="text-xs font-semibold text-[#2C2C2A]">
                    Dyslexia-Friendly Font (Lexend)
                  </div>
                  <div className="text-[11px] text-[#76746E]">
                    Weighted letter bottoms for reading fluency
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.isDyslexicFont}
                  onChange={(e) =>
                    updatePreferences({
                      isDyslexicFont: e.target.checked,
                      fontFamily: e.target.checked ? 'dyslexic' : 'serif',
                    })
                  }
                  className="w-4 h-4 accent-[#7A9A82] cursor-pointer"
                />
              </label>
            </div>
          </div>
        )}

        {/* ================= STEP 4: INTERACTIVE "AHA!" MINI-LESSON ================= */}
        {step === 4 && (
          <div className="space-y-4 animate-fade-in py-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                The 30-Second "Aha!" Moment
              </span>
              <h2 className="text-xl font-serif font-bold text-[#2C2C2A] mt-1">
                Try tapping a connected concept
              </h2>
              <p className="text-xs text-[#6B6862] mt-0.5">
                In Exodus 16:15, Israel discovers something strange on the desert floor. Tap the underlined word:
              </p>
            </div>

            {/* Interactive verse card */}
            <div className="p-4 rounded-3xl bg-[#FAF7F2] border border-[#E5DFD5] shadow-xs">
              <p className="text-base font-serif leading-relaxed text-[#2C2C2A]">
                When the Israelites saw it, they said to each other, "What is it?" (
                <button
                  type="button"
                  onClick={() => {
                    setShowAhaSheet(true);
                    setHasOpenedAha(true);
                  }}
                  className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md bg-[#7A9A82]/20 text-[#243527] border-b-2 border-[#7A9A82] hover:bg-[#7A9A82]/30 active:scale-95 transition-all cursor-pointer font-bold animate-pulse"
                >
                  Manna
                </button>
                ) for they did not know what it was. Moses said to them, "It is the bread the LORD has given you to eat." [16:15]
              </p>
              <div className="text-right text-[11px] text-[#7A9A82] font-semibold mt-2">
                ↑ Tap "Manna" to open bottom sheet
              </div>
            </div>

            {/* Quick 1-Question Check */}
            {(hasOpenedAha || showAhaSheet) && (
              <div className="p-4 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] animate-fade-in">
                <div className="text-xs font-bold text-[#2C2C2A] mb-2">
                  Quick Check: {ONBOARDING_QUIZ.question}
                </div>
                <div className="space-y-2">
                  {ONBOARDING_QUIZ.options.map((option, idx) => {
                    let btnStyle = 'bg-[#FAF7F2] border-[#E8E2D7] text-[#2C2C2A]';
                    if (ahaAnswered) {
                      if (idx === ONBOARDING_QUIZ.correctIndex) {
                        btnStyle = 'bg-[#EBF2ED] border-[#7A9A82] text-[#285842] font-bold';
                      } else if (idx === ahaSelectedOption) {
                        btnStyle = 'bg-[#F9ECE5] border-[#C88A6B] text-[#9A4B32]';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setAhaSelectedOption(idx);
                          setAhaAnswered(true);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span>{option}</span>
                        {ahaAnswered && idx === ONBOARDING_QUIZ.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-[#7A9A82]" />
                        )}
                        {ahaAnswered && idx === ahaSelectedOption && idx !== ONBOARDING_QUIZ.correctIndex && (
                          <XCircle className="w-4 h-4 text-[#C88A6B]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {ahaAnswered && (
                  <div className="mt-3 text-xs text-[#285842] bg-[#EBF2ED] p-2.5 rounded-xl border border-[#C3D6C8]">
                    {ONBOARDING_QUIZ.explanation}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full pt-4 border-t border-[#E8E2D7]">
        {step < 4 ? (
          <button
            onClick={handleNextStep}
            className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{step === 1 ? 'Get Started' : 'Continue'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleFinishOnboarding}
            className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Enter Today Tab</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Aha Slide-Up Bottom Sheet Modal */}
      {showAhaSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-auto">
          <div
            className="absolute inset-0 bg-[#2C2C2A]/35 backdrop-blur-xs animate-fade-in"
            onClick={() => setShowAhaSheet(false)}
          />

          <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-t-[32px] shadow-2xl border-t border-[#E8E2D7] p-5 pb-8 z-10 animate-slide-up max-h-[80vh] overflow-y-auto">
            <div className="w-12 h-1.5 bg-[#DED7CB] rounded-full mx-auto mb-4" />

            <div className="flex items-start gap-3.5 mb-3">
              <EntityThumbnail
                type={mannaEntity.type}
                iconSlug={mannaEntity.iconSlug}
                className="w-12 h-12 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold font-serif text-[#2C2C2A]">
                  {mannaEntity.title}
                </h3>
                <p className="text-sm font-medium text-[#7A9A82] font-hebrew">
                  {mannaEntity.originalLanguageTerm}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#484642] leading-relaxed mb-4 bg-[#F3EFE6] p-3 rounded-2xl border border-[#E5DFD5]">
              {mannaEntity.historicalContext}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5]">
                <span className="text-[10px] text-[#76746E] block">Timeline</span>
                <span className="font-semibold text-[#2C2C2A]">{mannaEntity.timelineYear}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E5DFD5]">
                <span className="text-[10px] text-[#76746E] block">Location</span>
                <span className="font-semibold text-[#2C2C2A]">{mannaEntity.mapCoordinates?.regionName}</span>
              </div>
            </div>

            <button
              onClick={() => setShowAhaSheet(false)}
              className="w-full py-2.5 rounded-xl bg-[#7A9A82] text-white text-xs font-semibold"
            >
              Got it! Take Quick Check
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
