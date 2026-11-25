import React from 'react';
import { LayoutGrid, Clock, Map, Search, Users } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { AssistedSearchView } from './AssistedSearchView';
import { PeopleDirectoryView } from './PeopleDirectoryView';
import { BookGridView } from './BookGridView';
import { TimelineView } from './TimelineView';
import { MapView } from './MapView';

export const ExploreScreen: React.FC = () => {
  const { exploreView, setExploreView } = useStudyStore();

  return (
    <div className="min-h-full pb-28 px-4 pt-6 max-w-xl mx-auto bg-[#FAF7F2] text-[#2C2C2A]">
      {/* Header */}
      <header className="mb-5">
        <h1 className="text-2xl font-serif font-bold text-[#2C2C2A]">
          Explore & Connect
        </h1>
        <p className="text-xs text-[#76746E] mt-0.5">
          Search stories, meet biblical people, browse 66 books, or explore maps & eras.
        </p>
      </header>

      {/* Segmented Control */}
      <div className="bg-[#F3EFE6] p-1 rounded-2xl border border-[#E5DFD5] grid grid-cols-5 gap-0.5 mb-5">
        <button
          onClick={() => setExploreView('search')}
          className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            exploreView === 'search'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Search className="w-3.5 h-3.5 text-[#7A9A82]" />
          <span>Search</span>
        </button>

        <button
          onClick={() => setExploreView('people')}
          className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            exploreView === 'people'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Users className="w-3.5 h-3.5 text-[#C88A6B]" />
          <span>People</span>
        </button>

        <button
          onClick={() => setExploreView('grid')}
          className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            exploreView === 'grid'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5 text-[#7A9A82]" />
          <span>Books</span>
        </button>

        <button
          onClick={() => setExploreView('timeline')}
          className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            exploreView === 'timeline'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Clock className="w-3.5 h-3.5 text-[#C88A6B]" />
          <span>Timeline</span>
        </button>

        <button
          onClick={() => setExploreView('map')}
          className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            exploreView === 'map'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Map className="w-3.5 h-3.5 text-[#5D7CA8]" />
          <span>Map</span>
        </button>
      </div>

      {/* Dynamic Content */}
      <main className="animate-fade-in">
        {exploreView === 'search' && <AssistedSearchView />}
        {exploreView === 'people' && <PeopleDirectoryView />}
        {exploreView === 'grid' && <BookGridView />}
        {exploreView === 'timeline' && <TimelineView />}
        {exploreView === 'map' && <MapView />}
      </main>
    </div>
  );
};
