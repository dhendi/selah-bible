import React, { useState } from 'react';
import {
  Calendar,
  BookOpen,
  Book,
  Compass,
  Library,
  Smartphone,
  Monitor,
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
  const [isPhoneFrame, setIsPhoneFrame] = useState(true);

  // Global typography style resolution
  const getGlobalFontClass = () => {
    if (preferences.isDyslexicFont) return 'font-dyslexic';
    return 'font-sans';
  };

  return (
    <div className={`min-h-screen bg-[#F0ECE1] text-[#2C2C2A] flex flex-col items-center justify-start ${getGlobalFontClass()}`}>
      {/* Top Utility Bar for Web / Mobile Frame Toggle */}
      <nav className="w-full bg-[#E8E2D7]/80 backdrop-blur-xs border-b border-[#DDD6C8] px-4 py-2 flex items-center justify-between text-xs text-[#6B6862] z-40">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[#2C2C2A] text-sm flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7A9A82]" />
            Selah
          </span>
          <span className="hidden sm:inline text-[11px] text-[#76746E]">
            Connected Bible Understanding & Study Platform
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Frame Toggle */}
          <div className="bg-[#FAF7F2] p-0.5 rounded-lg border border-[#DDD6C8] flex items-center">
            <button
              onClick={() => setIsPhoneFrame(true)}
              className={`px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 transition-all ${
                isPhoneFrame
                  ? 'bg-[#7A9A82] text-white shadow-xs'
                  : 'text-[#76746E] hover:text-[#2C2C2A]'
              }`}
              title="Mobile Device Mockup View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile Frame</span>
            </button>
            <button
              onClick={() => setIsPhoneFrame(false)}
              className={`px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 transition-all ${
                !isPhoneFrame
                  ? 'bg-[#7A9A82] text-white shadow-xs'
                  : 'text-[#76746E] hover:text-[#2C2C2A]'
              }`}
              title="Responsive Web / Tablet View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Full Web</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container - Either phone mockup or responsive tablet/desktop wrapper */}
      <div
        className={`w-full flex-1 flex flex-col justify-start items-center ${
          isPhoneFrame ? 'py-4 sm:py-8' : 'p-0 sm:p-6'
        }`}
      >
        <div
          className={`relative w-full bg-[#FAF7F2] overflow-hidden transition-all duration-300 ${
            isPhoneFrame
              ? 'max-w-[420px] min-h-[820px] h-[860px] rounded-[48px] shadow-2xl border-[10px] border-[#2C2C2A] ring-1 ring-black/10 flex flex-col'
              : 'max-w-4xl min-h-[90vh] rounded-3xl shadow-sm border border-[#E5DFD5] flex flex-col'
          }`}
        >
          {/* Phone Frame Status Bar / Speaker Notch if in phone frame */}
          {isPhoneFrame && (
            <div className="w-full bg-[#FAF7F2] pt-3 pb-1 px-7 flex items-center justify-between text-[11px] font-semibold text-[#2C2C2A] select-none z-30">
              <span>9:41</span>
              {/* Dynamic Island / Speaker Pill */}
              <div className="w-24 h-4 bg-[#2C2C2A] rounded-full mx-auto -mt-1 shadow-inner" />
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">5G</span>
                <span className="w-4 h-2 rounded-xs border border-[#2C2C2A] p-0.5 inline-block">
                  <span className="w-full h-full bg-[#2C2C2A] block" />
                </span>
              </div>
            </div>
          )}

          {/* Active Screen View Container */}
          <div className="flex-1 w-full overflow-y-auto relative overscroll-contain">
            {activeTab === 'today' && <TodayScreen />}
            {activeTab === 'read' && <ReaderScreen />}
            {activeTab === 'bible' && <BibleScreen />}
            {activeTab === 'explore' && <ExploreScreen />}
            {activeTab === 'library' && <LibraryScreen />}
          </div>

          {/* ================= BOTTOM NAVIGATION BAR ================= */}
          <footer className="sticky bottom-0 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8E2D7] px-2 pt-2 pb-5 flex items-center justify-around shadow-sm select-none">
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

          {/* Home bar line indicator in phone frame */}
          {isPhoneFrame && (
            <div className="w-32 h-1 bg-[#2C2C2A] rounded-full mx-auto mb-2 -mt-3.5 z-40 select-none opacity-60" />
          )}

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
