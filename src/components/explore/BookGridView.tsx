import React, { useMemo, useState } from 'react';
import type { BookOverview } from '../../types/bible';
import { SEED_BOOKS, GENRE_COLORS, BUILT_BOOK_START_CHAPTER } from '../../data/seedBooks';
import { BIBLE_BOOK_GROUPS, type BibleGroupId, type BibleTestament } from '../../data/bookGroups';
import { BookOverviewModal } from './BookOverviewModal';

type TestamentFilter = 'ALL' | BibleTestament;

export const BookGridView: React.FC = () => {
  const [selectedTestament, setSelectedTestament] = useState<TestamentFilter>('ALL');
  const [selectedGroupId, setSelectedGroupId] = useState<BibleGroupId | 'ALL'>('ALL');
  const [activeBook, setActiveBook] = useState<BookOverview | null>(null);

  const bookMap = useMemo(
    () => Object.fromEntries(SEED_BOOKS.map((book) => [book.id, book])),
    []
  );

  const availableGroups = useMemo(
    () =>
      selectedTestament === 'ALL'
        ? BIBLE_BOOK_GROUPS
        : BIBLE_BOOK_GROUPS.filter((g) => g.testament === selectedTestament),
    [selectedTestament]
  );

  const visibleTestaments: BibleTestament[] = useMemo(() => {
    if (selectedGroupId !== 'ALL') {
      const grp = BIBLE_BOOK_GROUPS.find((g) => g.id === selectedGroupId);
      return grp ? [grp.testament] : ['OT', 'NT'];
    }
    return selectedTestament === 'ALL' ? ['OT', 'NT'] : [selectedTestament];
  }, [selectedTestament, selectedGroupId]);

  const handleTestamentSelect = (filter: TestamentFilter) => {
    setSelectedTestament(filter);
    if (
      filter !== 'ALL' &&
      selectedGroupId !== 'ALL' &&
      BIBLE_BOOK_GROUPS.find((g) => g.id === selectedGroupId)?.testament !== filter
    ) {
      setSelectedGroupId('ALL');
    }
  };

  return (
    <div className="space-y-4">
      {/* Testament Segmented Control */}
      <div className="bg-[#F3EFE6] p-1 rounded-2xl border border-[#E5DFD5] flex flex-wrap sm:grid sm:grid-cols-3 gap-1">
        {(
          [
            { id: 'ALL', label: 'All Books (66)' },
            { id: 'OT', label: 'Old Testament (39)' },
            { id: 'NT', label: 'New Testament (27)' },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTestamentSelect(tab.id)}
            className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedTestament === tab.id
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Book Group Filter Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedGroupId('ALL')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
            selectedGroupId === 'ALL'
              ? 'bg-[#2C2C2A] text-[#FAF7F2] border-[#2C2C2A] shadow-xs'
              : 'bg-[#F3EFE6] text-[#76746E] border-[#E5DFD5] hover:bg-[#EBE5DA]'
          }`}
        >
          All Groups
        </button>
        {availableGroups.map((group) => {
          const isActive = selectedGroupId === group.id;
          return (
            <button
              key={group.id}
              onClick={() => setSelectedGroupId(group.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer border ${
                isActive
                  ? 'shadow-xs font-semibold'
                  : 'bg-[#F3EFE6] text-[#76746E] border-[#E5DFD5] hover:bg-[#EBE5DA]'
              }`}
              style={
                isActive
                  ? {
                      backgroundColor: group.badgeBg,
                      borderColor: group.accent,
                      color: group.badgeText,
                    }
                  : undefined
              }
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: group.accent }}
              />
              {group.label} ({group.bookIds.length})
            </button>
          );
        })}
      </div>

      {/* Testament -> Group Sections -> Books Grid */}
      <div className="space-y-6">
        {visibleTestaments.map((testament) => {
          const groupsInSection = BIBLE_BOOK_GROUPS.filter(
            (g) =>
              g.testament === testament &&
              (selectedGroupId === 'ALL' || g.id === selectedGroupId)
          );

          return (
            <section key={testament} className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-1.5">
                <h3 className="text-sm font-serif font-bold text-[#2C2C2A]">
                  {testament === 'OT' ? 'Old Testament' : 'New Testament'}
                </h3>
                <span className="text-[0.6875rem] text-[#76746E]">
                  {testament === 'OT' ? '39 Books' : '27 Books'}
                </span>
              </div>

              {groupsInSection.map((group) => (
                <div key={group.id} className="space-y-2">
                  <div className="flex items-center justify-between px-0.5">
                    <span
                      className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                      style={{ color: group.badgeText }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: group.accent }}
                      />
                      {group.fullLabel}
                    </span>
                    <span className="text-[0.6875rem] text-[#76746E]">
                      {group.bookIds.length} {group.bookIds.length === 1 ? 'book' : 'books'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {group.bookIds.map((bookId) => {
                      const book = bookMap[bookId];
                      if (!book) return null;
                      const color = GENRE_COLORS[book.genre] || GENRE_COLORS['Law'];
                      const isFeaturedSeed = Boolean(BUILT_BOOK_START_CHAPTER[book.id]);

                      return (
                        <button
                          key={book.id}
                          onClick={() => setActiveBook(book)}
                          className="relative text-left p-3.5 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer group flex flex-col justify-between min-h-[96px]"
                          style={{
                            backgroundColor: color.bg,
                            borderColor: isFeaturedSeed ? '#7A9A82' : color.border,
                          }}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span
                                className="text-[0.625rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                                style={{ backgroundColor: color.badge, color: '#FFFFFF' }}
                              >
                                {book.id}
                              </span>
                              {isFeaturedSeed && (
                                <span className="text-[0.5625rem] font-bold px-1.5 py-0.5 rounded-full bg-[#7A9A82] text-white">
                                  Seed V1
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-serif font-bold text-[#2C2C2A] mt-2 group-hover:text-[#1F3A27] transition-colors">
                              {book.title}
                            </h4>
                          </div>

                          <div className="text-[0.6875rem] text-[#55534E] flex items-center justify-between mt-2 pt-1 border-t border-black/5">
                            <span>{group.label}</span>
                            <span>{book.chapterCount} ch</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </div>

      {/* Detail Modal */}
      <BookOverviewModal book={activeBook} onClose={() => setActiveBook(null)} />
    </div>
  );
};
