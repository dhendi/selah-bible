import React, { useState } from 'react';
import { Search, Sparkles, X, ArrowRight, Heart } from 'lucide-react';
import type { StoryModule } from '../../types/bible';
import {
  SEARCH_STARTER_CHIPS,
  searchStoryModules,
} from '../../data/seedStoryModules';
import { StoryIllustration } from '../illustrations/StoryIllustration';
import { VerseSnapshotModal } from './VerseSnapshotModal';
import { useStudyStore } from '../../store/useStudyStore';

export const AssistedSearchView: React.FC = () => {
  const { preferences } = useStudyStore();
  const [query, setQuery] = useState('');
  const [selectedStory, setSelectedStory] = useState<StoryModule | null>(null);

  const matchedStories = searchStoryModules(query);

  const fontClass = preferences.isDyslexicFont
    ? 'font-dyslexic'
    : 'font-sans';

  return (
    <div className={`space-y-5 ${fontClass}`}>
      {/* Natural-Language Search Bar */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-[#7A9A82] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Try "Give me a story about faith and love"...'
            className="w-full pl-10 pr-9 py-3 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] text-sm text-[#2C2C2A] placeholder-[#8E8B83] focus:outline-none focus:ring-2 focus:ring-[#7A9A82]/40 focus:bg-[#FAF7F2] transition-all shadow-xs"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#E8E2D7] text-[#76746E]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Starter Chips */}
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-[11px] font-semibold text-[#76746E] mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C88A6B]" />
            Try:
          </span>
          {SEARCH_STARTER_CHIPS.map((chip) => {
            const isSelected = query.toLowerCase() === chip.toLowerCase();
            return (
              <button
                key={chip}
                onClick={() => setQuery(isSelected ? '' : chip)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                    : 'bg-[#F3EFE6] text-[#55534E] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-xs text-[#76746E] px-1">
        <span className="font-semibold uppercase tracking-wider text-[11px]">
          {query ? `Matches for "${query}"` : 'Suggested Connected Stories'}
        </span>
        <span className="font-mono text-[#7A9A82]">{matchedStories.length} stories</span>
      </div>

      {/* Suggested Story Cards */}
      <div className="space-y-3.5">
        {matchedStories.map((story) => (
          <div
            key={story.id}
            className="bg-[#FAF7F2] rounded-3xl border border-[#E5DFD5] p-3.5 shadow-xs hover:border-[#7A9A82]/50 transition-all flex flex-col sm:flex-row gap-3.5"
          >
            {/* Reusable Illustration Thumbnail */}
            <div className="sm:w-32 flex-shrink-0">
              <StoryIllustration
                illustrationId={story.illustrationId}
                className="w-full h-32 sm:h-full rounded-2xl"
              />
            </div>

            {/* Story Details */}
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A9A82]">
                    {story.chapterRange}
                  </span>
                  {story.kidFriendly && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FAECE5] text-[#B07456] flex items-center gap-1">
                      <Heart className="w-2.5 h-2.5 fill-[#B07456]" />
                      Family Friendly
                    </span>
                  )}
                </div>

                <h3 className="text-base font-serif font-bold text-[#2C2C2A] leading-snug">
                  {story.title}
                </h3>

                <p className="text-xs text-[#6B6862] mt-1 leading-relaxed">
                  {story.oneSentenceSummary}
                </p>
              </div>

              <div className="pt-3 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {story.themes.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#F3EFE6] text-[#76746E] capitalize"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Step 1 -> Step 2 Trigger */}
                <button
                  onClick={() => setSelectedStory(story)}
                  className="px-4 py-2 rounded-xl bg-[#7A9A82] hover:bg-[#68866F] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer flex-shrink-0"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Step 2: Illustrated Verse Snapshot Modal */}
      <VerseSnapshotModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />
    </div>
  );
};
