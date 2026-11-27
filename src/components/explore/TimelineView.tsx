import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SEED_TIMELINE_ERAS } from '../../data/seedTimelines';
import { resolvePassageFromReference } from '../../data/bookGroups';
import { useStudyStore } from '../../store/useStudyStore';

export const TimelineView: React.FC = () => {
  const { navigateToPassage, selectedExploreItem } = useStudyStore();

  const [activeEraId, setActiveEraId] = useState<string>(
    selectedExploreItem && selectedExploreItem.startsWith('era-')
      ? selectedExploreItem
      : 'era-exodus'
  );

  useEffect(() => {
    if (selectedExploreItem && selectedExploreItem.startsWith('era-')) {
      setActiveEraId(selectedExploreItem);
    }
  }, [selectedExploreItem]);

  const activeEra =
    SEED_TIMELINE_ERAS.find((e) => e.id === activeEraId) || SEED_TIMELINE_ERAS[2];

  const handleJumpToPassage = (ref: string) => {
    const { chapterId, verseNumber } = resolvePassageFromReference(ref);
    navigateToPassage(chapterId, verseNumber);
  };

  return (
    <div className="space-y-5">
      {/* Intro Hook */}
      <div className="bg-[#F3EFE6] p-4 rounded-3xl border border-[#E5DFD5]">
        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82] mb-1">
          Historical Master Timeline
        </div>
        <p className="text-xs text-[#52504A] leading-relaxed">
          The Bible is not a disjointed collection of moral proverbs; it is a unified unfolding historical drama. Scrub the eras below to see when each event occurred.
        </p>
      </div>

      {/* Horizontal Scrubbable Timeline Track */}
      <div>
        <div className="text-xs font-semibold text-[#76746E] uppercase tracking-wider mb-2 px-1">
          Scrub Biblical Eras
        </div>

        <div className="flex gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x">
          {SEED_TIMELINE_ERAS.map((era, index) => {
            const isSelected = era.id === activeEra.id;

            return (
              <button
                key={era.id}
                onClick={() => setActiveEraId(era.id)}
                className={`snap-center flex-shrink-0 w-36 text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm scale-[1.02]'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[0.625rem] font-mono text-[#76746E]">
                    Era {index + 1}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: era.color }}
                  />
                </div>
                <div className="text-xs font-bold font-serif text-[#2C2C2A] line-clamp-1">
                  {era.name}
                </div>
                <div className="text-[0.625rem] text-[#76746E] mt-0.5 truncate">
                  {era.approxDate}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Era Detail Card */}
      <div className="bg-[#FAF7F2] rounded-3xl p-5 border border-[#E5DFD5] shadow-xs">
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E8E2D7] mb-4">
          <div>
            <span
              className="text-[0.625rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: activeEra.color }}
            >
              {activeEra.approxDate}
            </span>
            <h3 className="text-xl font-serif font-bold text-[#2C2C2A] mt-1.5">
              {activeEra.name}
            </h3>
          </div>
          <button
            onClick={() =>
              handleJumpToPassage(
                activeEra.id === 'era-creation' ? 'Genesis 1:1' : 'Exodus 16:15'
              )
            }
            className="text-xs font-medium text-[#7A9A82] hover:text-[#5A7D63] flex items-center gap-1 transition-colors"
          >
            <span>Read Passage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Narrative Summary */}
        <p className="text-sm text-[#484642] leading-relaxed mb-5">
          {activeEra.summary}
        </p>

        {/* Milestones in this Era */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#76746E] mb-3">
            Key Milestone Events
          </h4>

          <div className="space-y-2.5">
            {activeEra.keyEvents.map((evt, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] flex items-start justify-between gap-3"
              >
                <div>
                  <span className="text-[0.6875rem] font-mono font-semibold text-[#7A9A82] block">
                    {evt.year}
                  </span>
                  <p className="text-xs text-[#2C2C2A] font-medium mt-0.5">
                    {evt.event}
                  </p>
                </div>

                <button
                  onClick={() => handleJumpToPassage(evt.reference)}
                  className="px-2 py-1 rounded-lg bg-[#FAF7F2] text-[0.6875rem] font-medium text-[#5A7D63] border border-[#E8E2D7] hover:bg-[#EDE7DC] flex items-center gap-1 flex-shrink-0"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>{evt.reference}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
