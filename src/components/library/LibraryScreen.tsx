import React, { useState } from 'react';
import {
  Sparkles,
  Bookmark,
  Award,
  Flame,
  BookOpen,
  RotateCcw,
  CheckCircle,
  PenLine,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { FlashcardDeck } from './FlashcardDeck';
import { NotesManager } from './NotesManager';
import { JournalTimeline } from './JournalTimeline';

export const LibraryScreen: React.FC = () => {
  const {
    progress,
    notes,
    flashcards,
    journalEntries,
    resetOnboarding,
    navigateToPassage,
  } = useStudyStore();

  const [activeSubTab, setActiveSubTab] = useState<'journal' | 'flashcards' | 'notes' | 'bookmarks'>('journal');

  // Calculate quiz accuracy
  const totalQuestions = progress.quizScores.reduce((acc, q) => acc + q.total, 0) || 1;
  const totalCorrect = progress.quizScores.reduce((acc, q) => acc + q.score, 0);
  const accuracyPercent = Math.round((totalCorrect / totalQuestions) * 100);

  const handleJumpToBookmark = (ref: string) => {
    if (ref.includes('GEN') || ref.includes('Genesis')) {
      navigateToPassage('GEN-1');
    } else if (ref.includes('RUT') || ref.includes('Ruth')) {
      navigateToPassage('RUT-1', 16);
    } else {
      navigateToPassage('EXO-16');
    }
  };

  return (
    <div className="min-h-full pb-28 px-4 pt-6 max-w-xl mx-auto bg-[#FAF7F2] text-[#2C2C2A]">
      {/* Header */}
      <header className="mb-5">
        <h1 className="text-2xl font-serif font-bold text-[#2C2C2A]">
          Study Library & Retention
        </h1>
        <p className="text-xs text-[#76746E] mt-0.5">
          Smart journal reflections, spaced-repetition flashcards, notes, and prayer list.
        </p>
      </header>

      {/* Progress & Metrics Dashboard Card */}
      <section className="mb-6">
        <div className="bg-[#F3EFE6] rounded-3xl p-5 border border-[#E5DFD5] shadow-xs">
          <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82] mb-3">
            Habit & Accuracy Metrics
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {/* Metric 1: Streak */}
            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E5DFD5] text-center">
              <Flame className="w-5 h-5 text-[#C88A6B] mx-auto mb-1 fill-[#C88A6B]" />
              <div className="text-base font-bold text-[#2C2C2A]">{progress.streakDays} Days</div>
              <div className="text-[0.625rem] text-[#76746E]">Current Streak</div>
            </div>

            {/* Metric 2: Quiz Accuracy */}
            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E5DFD5] text-center">
              <Award className="w-5 h-5 text-[#7A9A82] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2A]">{accuracyPercent}%</div>
              <div className="text-[0.625rem] text-[#76746E]">Quiz Accuracy</div>
            </div>

            {/* Metric 3: Verses Read */}
            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E5DFD5] text-center">
              <BookOpen className="w-5 h-5 text-[#5D7CA8] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2A]">{progress.readVersesCount}</div>
              <div className="text-[0.625rem] text-[#76746E]">Verses Studied</div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Sub-Tab Switcher */}
      <div className="bg-[#F3EFE6] p-1 rounded-2xl border border-[#E5DFD5] grid grid-cols-4 gap-0.5 mb-5">
        <button
          onClick={() => setActiveSubTab('journal')}
          className={`py-2 px-1 rounded-xl text-[0.6875rem] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeSubTab === 'journal'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <PenLine className="w-3.5 h-3.5 text-[#7A9A82]" />
          <span>Journal ({journalEntries.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('flashcards')}
          className={`py-2 px-1 rounded-xl text-[0.6875rem] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeSubTab === 'flashcards'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#7A9A82]" />
          <span>Cards ({flashcards.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('notes')}
          className={`py-2 px-1 rounded-xl text-[0.6875rem] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeSubTab === 'notes'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 text-[#C88A6B]" />
          <span>Notes ({notes.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('bookmarks')}
          className={`py-2 px-1 rounded-xl text-[0.6875rem] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeSubTab === 'bookmarks'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <CheckCircle className="w-3.5 h-3.5 text-[#5D7CA8]" />
          <span>Saved ({progress.savedPassageBookmarks.length})</span>
        </button>
      </div>

      {/* Main SubTab Content */}
      <main className="animate-fade-in mb-8">
        {activeSubTab === 'journal' && <JournalTimeline />}
        {activeSubTab === 'flashcards' && <FlashcardDeck />}
        {activeSubTab === 'notes' && <NotesManager />}
        {activeSubTab === 'bookmarks' && (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#76746E] px-1">
              Bookmarked Verses
            </div>
            {progress.savedPassageBookmarks.length === 0 ? (
              <div className="bg-[#F3EFE6] rounded-3xl p-6 text-center border border-[#E5DFD5] text-xs text-[#76746E]">
                No verses bookmarked yet. Tap the bookmark icon while reading.
              </div>
            ) : (
              <div className="space-y-2">
                {progress.savedPassageBookmarks.map((ref) => (
                  <button
                    key={ref}
                    onClick={() => handleJumpToBookmark(ref)}
                    className="w-full text-left bg-[#FAF7F2] hover:bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5] flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-serif font-bold text-[#2C2C2A] group-hover:text-[#7A9A82]">
                        {ref === 'GEN-1:1' ? 'Genesis 1:1' : ref === 'EXO-16:15' ? 'Exodus 16:15' : ref}
                      </div>
                      <div className="text-xs text-[#76746E] mt-0.5">
                        {ref.includes('GEN')
                          ? 'In the beginning God created the heavens and the earth.'
                          : ref.includes('Ruth')
                          ? 'Wherever you go, I will go, and wherever you live, I will live...'
                          : 'When the Israelites saw it, they said to each other, "What is it?" (Manna)...'}
                      </div>
                    </div>
                    <span className="text-xs text-[#7A9A82] font-medium ml-2">Read →</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Onboarding Re-Launch / Test Section */}
      <footer className="pt-4 border-t border-[#E8E2D7] text-center">
        <button
          onClick={resetOnboarding}
          className="text-xs text-[#96938B] hover:text-[#2C2C2A] flex items-center gap-1.5 mx-auto transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Re-launch 60-Second Onboarding Tour</span>
        </button>
      </footer>
    </div>
  );
};
