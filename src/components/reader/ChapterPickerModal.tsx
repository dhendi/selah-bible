import React, { useEffect, useMemo, useState } from 'react';
import { X, Check, Sparkles, BookOpen } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { useBookChapters } from '../../data/bookLoader';
import {
  BIBLE_BOOK_GROUPS,
  FEATURED_HIGHLIGHTS,
  PICKER_BOOK_MAP,
  parseBookIdFromChapter,
  type BibleBookId,
  type BibleGroupId,
  type BibleTestament,
} from '../../data/bookGroups';

type TestamentTab = BibleTestament | 'FEATURED';

export const ChapterPickerModal: React.FC = () => {
  const {
    showChapterPicker,
    setShowChapterPicker,
    currentChapterId,
    setCurrentChapterId,
    setShowVisualHookHeader,
    activeTab,
    setActiveTab,
  } = useStudyStore();

  const currentBookId = useMemo(
    () => parseBookIdFromChapter(currentChapterId),
    [currentChapterId]
  );

  const [selectedTestament, setSelectedTestament] = useState<TestamentTab>(
    () => PICKER_BOOK_MAP[currentBookId].testament
  );
  const [selectedGroupId, setSelectedGroupId] = useState<BibleGroupId | 'ALL'>(
    () => PICKER_BOOK_MAP[currentBookId].groupId
  );
  const [selectedBookId, setSelectedBookId] = useState<BibleBookId>(currentBookId);

  // Sync the active Testament, Group, and Book whenever the picker opens
  useEffect(() => {
    if (!showChapterPicker) return;
    const meta = PICKER_BOOK_MAP[currentBookId];
    setSelectedTestament(meta.testament);
    setSelectedGroupId(meta.groupId);
    setSelectedBookId(meta.id);
  }, [showChapterPicker, currentBookId]);

  const { bookChapters } = useBookChapters(
    showChapterPicker && selectedTestament !== 'FEATURED' ? selectedBookId : ''
  );

  const testamentGroups = useMemo(
    () =>
      selectedTestament === 'FEATURED'
        ? []
        : BIBLE_BOOK_GROUPS.filter((g) => g.testament === selectedTestament),
    [selectedTestament]
  );

  const visibleGroups = useMemo(() => {
    if (selectedGroupId === 'ALL') return testamentGroups;
    return testamentGroups.filter((g) => g.id === selectedGroupId);
  }, [testamentGroups, selectedGroupId]);

  const selectedBook = PICKER_BOOK_MAP[selectedBookId];
  const selectedBookGroup = BIBLE_BOOK_GROUPS.find((g) => g.id === selectedBook.groupId);

  const chapterNumbers = useMemo(
    () => Array.from({ length: selectedBook.chapters }, (_, i) => i + 1),
    [selectedBook.chapters]
  );

  const featuredByTestament = useMemo(
    () => ({
      OT: FEATURED_HIGHLIGHTS.filter((item) => item.testament === 'OT'),
      NT: FEATURED_HIGHLIGHTS.filter((item) => item.testament === 'NT'),
    }),
    []
  );

  if (!showChapterPicker) return null;

  const handleSelect = (chapId: string) => {
    setCurrentChapterId(chapId);
    setShowVisualHookHeader(activeTab !== 'bible');
    if (activeTab !== 'read' && activeTab !== 'bible') {
      setActiveTab('read');
    }
    setShowChapterPicker(false);
  };

  const handleTestamentSwitch = (tab: TestamentTab) => {
    setSelectedTestament(tab);
    if (tab === 'FEATURED') return;

    // If current book belongs to this testament, keep it selected cleanly; otherwise show all groups
    if (PICKER_BOOK_MAP[selectedBookId].testament === tab) {
      setSelectedGroupId(PICKER_BOOK_MAP[selectedBookId].groupId);
    } else {
      setSelectedGroupId('ALL');
      const firstGroup = BIBLE_BOOK_GROUPS.find((g) => g.testament === tab);
      if (firstGroup) {
        setSelectedBookId(firstGroup.bookIds[0]);
      }
    }
  };

  const handleGroupSwitch = (groupId: BibleGroupId | 'ALL') => {
    setSelectedGroupId(groupId);
    if (groupId !== 'ALL') {
      const group = BIBLE_BOOK_GROUPS.find((g) => g.id === groupId);
      if (group && !group.bookIds.includes(selectedBookId)) {
        setSelectedBookId(group.bookIds[0]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/40 backdrop-blur-xs animate-fade-in"
        onClick={() => setShowChapterPicker(false)}
      />

      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DFD5] p-5 z-10 animate-slide-up max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7] mb-3">
          <div>
            <h3 className="text-lg font-serif font-bold text-[#2C2C2A]">Select Book & Chapter</h3>
            <p className="text-xs text-[#76746E]">
              Old Testament (39) · New Testament (27)
            </p>
          </div>
          <button
            onClick={() => setShowChapterPicker(false)}
            className="p-1.5 rounded-full hover:bg-[#F3EFE6] text-[#76746E] cursor-pointer"
            aria-label="Close picker"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level 1: Testament Toggle */}
        <div className="bg-[#F3EFE6] p-1 rounded-2xl border border-[#E5DFD5] grid grid-cols-3 gap-1 mb-2.5">
          <button
            onClick={() => handleTestamentSwitch('OT')}
            className={`py-2 px-2 rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
              selectedTestament === 'OT'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            Old Testament (39)
          </button>
          <button
            onClick={() => handleTestamentSwitch('NT')}
            className={`py-2 px-2 rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
              selectedTestament === 'NT'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            New Testament (27)
          </button>
          <button
            onClick={() => handleTestamentSwitch('FEATURED')}
            className={`py-2 px-2 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
              selectedTestament === 'FEATURED'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#7A9A82]" />
            <span>Featured</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-1 space-y-3">
          {selectedTestament !== 'FEATURED' ? (
            <>
              {/* Level 2: Book Group Filter Strip */}
              <div className="flex flex-wrap gap-1.5 pb-1">
                <button
                  onClick={() => handleGroupSwitch('ALL')}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer border ${
                    selectedGroupId === 'ALL'
                      ? 'bg-[#2C2C2A] text-[#FAF7F2] border-[#2C2C2A]'
                      : 'bg-[#F3EFE6] text-[#6B6862] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                  }`}
                >
                  All ({selectedTestament === 'OT' ? 39 : 27})
                </button>
                {testamentGroups.map((group) => {
                  const isActive = selectedGroupId === group.id;
                  return (
                    <button
                      key={group.id}
                      onClick={() => handleGroupSwitch(group.id)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 transition-all cursor-pointer border ${
                        isActive
                          ? 'text-[#2C2C2A] shadow-xs font-semibold'
                          : 'bg-[#F3EFE6] text-[#6B6862] border-[#E5DFD5] hover:bg-[#EBE5DA]'
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
                      <span>
                        {group.label} ({group.bookIds.length})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Level 3: Books Grouped by Canonical Group */}
              <div
                className={`bg-[#F3EFE6] p-2.5 rounded-2xl border border-[#E5DFD5] space-y-2.5 ${
                  selectedGroupId === 'ALL' ? 'max-h-[190px] overflow-y-auto' : ''
                }`}
              >
                {visibleGroups.map((group) => (
                  <div key={group.id}>
                    <div className="flex items-center justify-between px-0.5 mb-1.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5"
                        style={{ color: group.badgeText }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: group.accent }}
                        />
                        {group.fullLabel}
                      </span>
                      <span className="text-[10px] text-[#8E8B84]">
                        {group.bookIds.length} {group.bookIds.length === 1 ? 'book' : 'books'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {group.bookIds.map((bookId) => {
                        const book = PICKER_BOOK_MAP[bookId];
                        const isSelected = selectedBookId === bookId;
                        return (
                          <button
                            key={bookId}
                            onClick={() => setSelectedBookId(bookId)}
                            className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                                : 'bg-transparent text-[#6B6862] border-transparent hover:bg-[#FAF7F2]/60 hover:text-[#2C2C2A]'
                            }`}
                            style={isSelected ? { borderColor: group.accent } : undefined}
                          >
                            {book.shortLabel}{' '}
                            <span className="text-[10px] opacity-65 font-normal">
                              ({book.chapters})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Level 4: Selected Book Chapters & Turning Points */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                  <span
                    className="font-semibold"
                    style={{ color: selectedBookGroup?.badgeText || selectedBook.accent }}
                  >
                    {selectedBook.title} · {selectedBookGroup?.label}
                  </span>
                  <span>
                    {selectedBook.chapters} {selectedBook.chapters === 1 ? 'Ch' : 'Chapters'} ·{' '}
                    {selectedBook.verses}
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-4">
                  {chapterNumbers.map((num) => {
                    const id = `${selectedBook.id}-${num}`;
                    const isActive = currentChapterId === id;
                    const chapInfo = bookChapters?.[id];

                    return (
                      <button
                        key={id}
                        onClick={() => handleSelect(id)}
                        title={chapInfo?.title || `${selectedBook.title} ${num}`}
                        className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          isActive
                            ? 'text-white shadow-xs'
                            : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                        }`}
                        style={
                          isActive
                            ? {
                                backgroundColor: selectedBook.accent,
                                borderColor: selectedBook.accent,
                              }
                            : undefined
                        }
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>

                {selectedBook.shortcuts && selectedBook.shortcuts.length > 0 && (
                  <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                      {selectedBook.shortcutsHeading || `Key ${selectedBook.title} Moments`}
                    </div>
                    {selectedBook.shortcuts.map((shortcut) => {
                      const isCurrent = currentChapterId === shortcut.id;
                      return (
                        <button
                          key={shortcut.id}
                          onClick={() => handleSelect(shortcut.id)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                            isCurrent
                              ? 'bg-[#EBF2ED] text-[#285842] font-semibold'
                              : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                          }`}
                        >
                          <span>{shortcut.label}</span>
                          {isCurrent && (
                            <Check
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{ color: selectedBook.accent }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Featured Highlights Split by Old & New Testament */
            <div className="space-y-4">
              {(
                [
                  { testament: 'OT', label: 'Old Testament Highlights (39 Books)' },
                  { testament: 'NT', label: 'New Testament Highlights (27 Books)' },
                ] as const
              ).map((section) => (
                <div key={section.testament} className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                    {section.label}
                  </div>
                  <div className="space-y-2">
                    {featuredByTestament[section.testament].map((item) => {
                      const isActive = item.prefixes.some((p) =>
                        currentChapterId.startsWith(p)
                      );
                      return (
                        <button
                          key={item.startChapterId}
                          onClick={() => handleSelect(item.startChapterId)}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                            isActive
                              ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                              : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                                <BookOpen
                                  className="w-3.5 h-3.5"
                                  style={{ color: item.iconColor }}
                                />{' '}
                                {item.title}
                              </span>
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#6B6862] border border-[#E5DFD5]">
                                {item.groupLabel}
                              </span>
                            </div>
                            <p className="text-xs text-[#6B6862] mt-0.5">{item.desc}</p>
                          </div>
                          {isActive && (
                            <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
