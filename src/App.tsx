import React from 'react';
import {
  Calendar,
  BookOpen,
  Book,
  Compass,
  Library,
} from 'lucide-react';
import { useStudyStore } from './store/useStudyStore';
import { TodayScreen } from './components/today/TodayScreen';
import { BibleScreen } from './components/bible/BibleScreen';
import { ReaderScreen } from './components/reader/ReaderScreen';
import { ExploreScreen } from './components/explore/ExploreScreen';
import { LibraryScreen } from './components/library/LibraryScreen';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { ContextualBottomSheet } from './components/reader/ContextualBottomSheet';
import { ExplainVerseBottomSheet } from './components/reader/ExplainVerseBottomSheet';
import { SmartJournalModal } from './components/journal/SmartJournalModal';
import { ShareVerseModal } from './components/reader/ShareVerseModal';
import { CharacterCardModal } from './components/explore/CharacterCardModal';

export const App: React.FC = () => {
  const { activeTab, setActiveTab, preferences } = useStudyStore();

  // Global typography style resolution
  const getGlobalFontClass = () => {
    if (preferences.isDyslexicFont) return 'font-dyslexic';
    return 'font-sans';
  };

  return (
    <div className={`min-h-[100dvh] bg-[#FAF7F2] sm:bg-[#F0ECE1] text-[#2C2C2A] flex flex-col items-center justify-start ${getGlobalFontClass()}`}>
      {/* Top Brand Header */}
      <nav className="w-full bg-[#FAF7F2]/90 sm:bg-[#E8E2D7]/80 backdrop-blur-xs border-b border-[#E8E2D7] sm:border-[#DDD6C8] px-4 py-2.5 flex items-center justify-between text-xs text-[#6B6862] sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[#2C2C2A] text-sm flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7A9A82]" />
            Selah
          </span>
          <span className="text-[11px] text-[#76746E] truncate">
            Connected Bible Study
          </span>
        </div>
      </nav>

      {/* Main Responsive Web / Tablet / Mobile Container */}
      <div className="w-full flex-1 flex flex-col justify-start items-center p-0 sm:p-6">
        <div className="relative w-full bg-[#FAF7F2] sm:max-w-4xl min-h-[calc(100dvh-2.75rem)] sm:min-h-[85dvh] sm:rounded-3xl sm:shadow-sm sm:border sm:border-[#E5DFD5] flex flex-col">
          {/* Active Screen View Container */}
          <div className="flex-1 w-full relative">
            {activeTab === 'today' && <TodayScreen />}
            {activeTab === 'read' && <ReaderScreen />}
            {activeTab === 'bible' && <BibleScreen />}
            {activeTab === 'explore' && <ExploreScreen />}
            {activeTab === 'library' && <LibraryScreen />}
          </div>

          {/* ================= BOTTOM NAVIGATION BAR ================= */}
          <footer className="sticky bottom-0 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8E2D7] px-2 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] flex items-center justify-around shadow-sm select-none">
            {/* Tab 1: Today */}
            <button
              onClick={() => setActiveTab('today')}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'today'
                  ? 'text-[#2C2C2A] font-bold'
                  : 'text-[#8E8B83] hover:text-[#55534E]'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  activeTab === 'today' ? 'bg-[#7A9A82]/15 text-[#5A7D63]' : ''
                }`}
              >
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-[11px] tracking-tight">Today</span>
            </button>

            {/* Tab 2: Study Reader */}
            <button
              onClick={() => setActiveTab('read')}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'read'
                  ? 'text-[#2C2C2A] font-bold'
                  : 'text-[#8E8B83] hover:text-[#55534E]'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  activeTab === 'read' ? 'bg-[#7A9A82]/15 text-[#5A7D63]' : ''
                }`}
              >
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[11px] tracking-tight">Read</span>
            </button>

            {/* Tab 3: Pure Bible */}
            <button
              onClick={() => setActiveTab('bible')}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'bible'
                  ? 'text-[#2C2C2A] font-bold'
                  : 'text-[#8E8B83] hover:text-[#55534E]'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  activeTab === 'bible' ? 'bg-[#7A9A82]/15 text-[#5A7D63]' : ''
                }`}
              >
                <Book className="w-5 h-5" />
              </div>
              <span className="text-[11px] tracking-tight">Bible</span>
            </button>

            {/* Tab 4: Explore */}
            <button
              onClick={() => setActiveTab('explore')}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'explore'
                  ? 'text-[#2C2C2A] font-bold'
                  : 'text-[#8E8B83] hover:text-[#55534E]'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  activeTab === 'explore' ? 'bg-[#7A9A82]/15 text-[#5A7D63]' : ''
                }`}
              >
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[11px] tracking-tight">Explore</span>
            </button>

            {/* Tab 5: Library */}
            <button
              onClick={() => setActiveTab('library')}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                activeTab === 'library'
                  ? 'text-[#2C2C2A] font-bold'
                  : 'text-[#8E8B83] hover:text-[#55534E]'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  activeTab === 'library' ? 'bg-[#7A9A82]/15 text-[#5A7D63]' : ''
                }`}
              >
                <Library className="w-5 h-5" />
              </div>
              <span className="text-[11px] tracking-tight">Library</span>
            </button>
          </footer>

          {/* Global Context & Study Modals */}
          <ContextualBottomSheet />
          <CharacterCardModal />
          <ExplainVerseBottomSheet />
          <SmartJournalModal />
          <ShareVerseModal />

          {/* Onboarding Overlay Flow (First Launch or Triggered) */}
          <OnboardingFlow />
        </div>
      </div>
    </div>
  );
};

export default App;
