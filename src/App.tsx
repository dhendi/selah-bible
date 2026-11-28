import React, { Suspense, lazy, useEffect, useRef } from 'react';
import {
  Bookmark,
  BookOpen,
  Compass,
  Music,
  PenLine,
} from 'lucide-react';
import { globalStore, useStudyStore } from './store/useStudyStore';
import { TodayScreen } from './components/today/TodayScreen';
import { BibleCoverLaunch } from './components/launch/BibleCoverLaunch';

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
const HymnalsScreen = lazy(() =>
  import('./components/hymnals/HymnalsScreen').then((m) => ({ default: m.HymnalsScreen }))
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
const TypographyDrawer = lazy(() =>
  import('./components/reader/TypographyDrawer').then((m) => ({
    default: m.TypographyDrawer,
  }))
);

export const App: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const {
    activeTab,
    setActiveTab,
    preferences,
    showChapterPicker,
    setShowTypographyDrawer,
  } = useStudyStore();

  useEffect(() => {
    const syncChromeHeights = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          '--selah-nav-h',
          `${navRef.current.offsetHeight}px`
        );
      }
      if (footerRef.current) {
        document.documentElement.style.setProperty(
          '--selah-footer-h',
          `${footerRef.current.offsetHeight}px`
        );
      }
    };
    syncChromeHeights();
    const ro = new ResizeObserver(syncChromeHeights);
    if (navRef.current) ro.observe(navRef.current);
    if (footerRef.current) ro.observe(footerRef.current);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        globalStore.closeTopOverlay();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      ro.disconnect();
      window.removeEventListener('keydown', handleEsc);
    };
  }, [preferences.uiScale]);

  const scaleLabel =
    preferences.uiScale === 'xlarge'
      ? 'XL Size'
      : preferences.uiScale === 'large'
        ? 'Large UI'
        : 'Display Size';

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
      <nav ref={navRef} className="w-full bg-[#FBF8F1]/95 sm:bg-[#E4DCCB]/85 backdrop-blur-xs border-b border-[#DDD3C1] px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2 flex items-center justify-between text-xs text-[#666158] sticky top-0 z-40">
        <div className="max-w-3xl w-full mx-auto flex items-center justify-between">
          <span className="font-serif font-semibold text-[#24221E] text-sm flex items-center gap-2 tracking-wide">
            <span className="w-1.5 h-3.5 bg-[#8B3A2B] inline-block rounded-[1px]" />
            <span>Selah</span>
          </span>
          <button
            onClick={() => setShowTypographyDrawer(true)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[0.6875rem] font-semibold transition-all cursor-pointer ${
              preferences.uiScale && preferences.uiScale !== 'normal'
                ? 'bg-[#EBF2ED] border-[#7A9A82]/60 text-[#285842]'
                : 'bg-[#FAF7F2]/80 border-[#D6CCBA] text-[#484642] hover:bg-[#FAF7F2]'
            }`}
            title="Change menu, button, and text sizes"
            aria-label="Open display size and reading comfort settings"
          >
            <span className="font-serif font-bold text-[#8B3A2B]">Aa</span>
            <span>{scaleLabel}</span>
          </button>
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
              {activeTab === 'hymnals' && <HymnalsScreen />}
              {activeTab === 'library' && <LibraryScreen />}
            </Suspense>
          </div>

          {/* Quiet Editorial Bottom Navigation */}
          <footer ref={footerRef} className="sticky bottom-0 left-0 right-0 z-30 bg-[#FBF8F1]/95 backdrop-blur-xs border-t border-[#DDD3C1] px-1 sm:px-4 pt-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] grid grid-cols-5 sm:flex sm:items-center sm:justify-around select-none">
            <button
              onClick={() => setActiveTab('today')}
              className={`min-w-0 flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-0.5 sm:px-3 border-t-2 transition-colors cursor-pointer ${
                activeTab === 'today'
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <Bookmark className="w-4 h-4 shrink-0" />
              <span className="text-[0.625rem] sm:text-[0.6875rem] font-serif tracking-tight sm:tracking-wide truncate max-w-full">Bookmark</span>
            </button>

            <button
              onClick={() => setActiveTab('read')}
              className={`min-w-0 flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-0.5 sm:px-3 border-t-2 transition-colors cursor-pointer ${
                isReaderTab
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="text-[0.625rem] sm:text-[0.6875rem] font-serif tracking-tight sm:tracking-wide truncate max-w-full">Bible</span>
            </button>

            <button
              onClick={() => setActiveTab('explore')}
              className={`min-w-0 flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-0.5 sm:px-3 border-t-2 transition-colors cursor-pointer ${
                activeTab === 'explore'
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span className="text-[0.625rem] sm:text-[0.6875rem] font-serif tracking-tight sm:tracking-wide truncate max-w-full">Explore</span>
            </button>

            <button
              onClick={() => setActiveTab('hymnals')}
              className={`min-w-0 flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-0.5 sm:px-3 border-t-2 transition-colors cursor-pointer ${
                activeTab === 'hymnals'
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <Music className="w-4 h-4 shrink-0" />
              <span className="text-[0.625rem] sm:text-[0.6875rem] font-serif tracking-tight sm:tracking-wide truncate max-w-full">Hymnals</span>
            </button>

            <button
              onClick={() => setActiveTab('library')}
              className={`min-w-0 flex flex-col items-center justify-center gap-1 pt-2.5 pb-1 px-0.5 sm:px-3 border-t-2 transition-colors cursor-pointer ${
                activeTab === 'library'
                  ? 'border-[#8B3A2B] text-[#24221E] font-semibold'
                  : 'border-transparent text-[#8C867B] hover:text-[#24221E]'
              }`}
            >
              <PenLine className="w-4 h-4 shrink-0" />
              <span className="text-[0.625rem] sm:text-[0.6875rem] font-serif tracking-tight sm:tracking-wide truncate max-w-full">Journal</span>
            </button>
          </footer>
        </div>
      </div>

      {/* Global Overlays */}
      <BibleCoverLaunch />
      <Suspense fallback={null}>
        {showChapterPicker && <ChapterPickerModal />}
        <ContextualBottomSheet />
        <ExplainVerseBottomSheet />
        <SmartJournalModal />
        <ShareVerseModal />
        <CharacterCardModal />
        <TypographyDrawer />
      </Suspense>
    </div>
  );
};

export default App;
