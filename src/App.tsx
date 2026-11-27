import React, { Suspense, lazy } from 'react';
import {
  Bookmark,
  BookOpen,
  Compass,
  PenLine,
} from 'lucide-react';
import { useStudyStore } from './store/useStudyStore';
import { TodayScreen } from './components/today/TodayScreen';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';

const ContextualBottomSheet = lazy(() =>
  import('./components/reader/ContextualBottomSheet').then((m) => ({
    default: m.ContextualBottomSheet,
  }))
);
const ReaderScreen = lazy(() =>
  import('./components/reader/ReaderScreen').then((m) => ({ default: m.ReaderScreen }))
);
const ExploreScreen = lazy(() =>
  import('./components/explore/ExploreScreen').then((m) => ({ default: m.ExploreScreen }))
);
const LibraryScreen = lazy(() =>
  import('./components/library/LibraryScreen').then((m) => ({ default: m.LibraryScreen }))
);
const ChapterPickerModal = lazy(() =>
  import('./components/reader/ChapterPickerModal').then((m) => ({
    default: m.ChapterPickerModal,
  }))
);
const ExplainVerseBottomSheet = lazy(() =>
  import('./components/reader/ExplainVerseBottomSheet').then((m) => ({
    default: m.ExplainVerseBottomSheet,
  }))
);
const SmartJournalModal = lazy(() =>
  import('./components/journal/SmartJournalModal').then((m) => ({
    default: m.SmartJournalModal,
  }))
);
const ShareVerseModal = lazy(() =>
  import('./components/reader/ShareVerseModal').then((m) => ({ default: m.ShareVerseModal }))
);
const CharacterCardModal = lazy(() =>
  import('./components/explore/CharacterCardModal').then((m) => ({
    default: m.CharacterCardModal,
  }))
);

export const App: React.FC = () => {
  const { activeTab, setActiveTab, preferences, showChapterPicker } = useStudyStore();

  const getGlobalFontClass = () => {
    if (preferences.isDyslexicFont) return 'font-dyslexic';
    return 'font-sans';
  };

  const isReaderTab = activeTab === 'read' || activeTab === 'bible';

  return (
    <div
      className={`min-h-[100dvh] bg-[#FBF8F1] sm:bg-[#EAE3D4] text-[#24221E] flex flex-col items-center justify-start ${getGlobalFontClass()}`}
    >
      {/* Subtle Top Book Spine Bar (Safe-area aware for native iOS/Android) */}
      <nav className="w-full bg-[#FBF8F1]/95 sm:bg-[#E4DCCB]/85 backdrop-blur-xs border-b border-[#DDD3C1] px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2 flex items-center justify-between text-xs text-[#666158] sticky top-0 z-40">
        <div className="max-w-3xl w-full mx-auto flex items-center justify-between">
          <span className="font-serif font-semibold text-[#24221E] text-sm flex items-center gap-2 tracking-wide">
            <span className="w-1.5 h-3.5 bg-[#8B3A2B] inline-block rounded-[1px]" />
            <span>Selah</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#666158]">
            Illustrated Study Bible
          </span>
        </div>
      </nav>

      {/* Main Book Page Sheet */}
      <div className="w-full flex-1 flex flex-col justify-start items-center p-0 sm:py-6 sm:px-4">
        <div className="relative w-full bg-[#FBF8F1] sm:max-w-3xl min-h-[calc(100dvh-2.5rem)] sm:min-h-[85dvh] sm:rounded-[4px] sm:border sm:border-[#D6CCBA] book-sheet flex flex-col">
          {/* Active Screen Content */}
          <div className="flex-1 w-full relative">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center text-sm text-[#666158] font-serif italic">
                  Opening page…
                </div>
              }
            >
              {activeTab === 'today' && <TodayScreen />}
              {isReaderTab && <ReaderScreen />}
              {activeTab === 'explore' && <ExploreScreen />}
              {activeTab === 'library' && <LibraryScreen />}
            </Suspense>
          </div>

          {/* Quiet Editorial Bottom Navigation */}
          <footer className="sticky bottom-0 left-0 right-0 z-30 bg-[#FBF8F1]/95 backdrop-blur-xs border-t border-[#DDD3C1] px-4 pt-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center justify-around select-none">
            <button
              onClick={() => setActiveTab('today')}
              className={`flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-3 border-t-2 transition-colors cursor-pointer ${
                activeTab === 'today'
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span className="text-[11px] font-serif tracking-wide">Bookmark</span>
            </button>

            <button
              onClick={() => setActiveTab('read')}
              className={`flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-3 border-t-2 transition-colors cursor-pointer ${
                isReaderTab
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-[11px] font-serif tracking-wide">Bible</span>
            </button>

            <button
              onClick={() => setActiveTab('explore')}
              className={`flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-3 border-t-2 transition-colors cursor-pointer ${
                activeTab === 'explore'
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span className="text-[11px] font-serif tracking-wide">Explore</span>
            </button>

            <button
              onClick={() => setActiveTab('library')}
              className={`flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-3 border-t-2 transition-colors cursor-pointer ${
                activeTab === 'library'
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <PenLine className="w-4 h-4" />
              <span className="text-[11px] font-serif tracking-wide">Journal</span>
            </button>
          </footer>
        </div>
      </div>

      {/* Global Overlays */}
      <OnboardingFlow />
      <Suspense fallback={null}>
        {showChapterPicker && <ChapterPickerModal />}
        <ContextualBottomSheet />
        <ExplainVerseBottomSheet />
        <SmartJournalModal />
        <ShareVerseModal />
        <CharacterCardModal />
      </Suspense>
    </div>
  );
};

export default App;
