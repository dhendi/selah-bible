import React, { useState } from 'react';
import {
  PenLine,
  Trash2,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Plus,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { PICKER_BOOK_MAP, parseBookIdFromChapter, type BibleBookId } from '../../data/bookGroups';
import { StoryIllustration } from '../illustrations/StoryIllustration';

export const JournalTimeline: React.FC = () => {
  const {
    journalEntries,
    togglePrayerAnswered,
    deleteJournalEntry,
    navigateToPassage,
    openJournalSheet,
    currentChapterId,
    preferences,
  } = useStudyStore();

  const [filterMode, setFilterMode] = useState<'all' | 'prayer' | string>('all');

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';

  const curBookId = parseBookIdFromChapter(currentChapterId || 'GEN-1');
  const curChapNum = (currentChapterId || 'GEN-1').split('-')[1] || '1';
  const curBookTitle = PICKER_BOOK_MAP[curBookId]?.title || 'Genesis';

  const filteredEntries = journalEntries.filter((entry) => {
    if (filterMode === 'all') return true;
    if (filterMode === 'prayer') return entry.linkedToPrayerList;
    return entry.bookId === filterMode;
  });

  const bookFilters = Array.from(new Set(journalEntries.map((e) => e.bookId))).map((bId) => ({
    id: bId,
    label: PICKER_BOOK_MAP[bId as BibleBookId]?.title || bId,
  }));

  const handleJump = (ref: string, fallbackBookId?: string) => {
    const chapMatch = ref.match(/\b(\d+)(?::(\d+))?\s*$/);
    const chap = chapMatch ? chapMatch[1] : '1';
    const verse = chapMatch && chapMatch[2] ? parseInt(chapMatch[2], 10) : undefined;
    const bookEntry = Object.values(PICKER_BOOK_MAP).find((b) =>
      ref.toLowerCase().startsWith(b.title.toLowerCase())
    );
    const bId = bookEntry?.id || (fallbackBookId as BibleBookId) || 'GEN';
    navigateToPassage(`${bId}-${chap}`, verse);
  };

  return (
    <div className={`space-y-4 ${fontClass}`}>
      {/* Header & Quick Add */}
      <div className="flex items-center justify-between text-xs text-[#76746E] px-1">
        <span className="font-semibold text-[#2C2C2A]">
          {journalEntries.length} Journal {journalEntries.length === 1 ? 'Reflection' : 'Reflections'}
        </span>
        <button
          onClick={() =>
            openJournalSheet({
              verseRef: `${curBookTitle} ${curChapNum}:1`,
              bookId: curBookId,
              snapshotText: `Reflecting on ${curBookTitle} ${curChapNum}.`,
              illustrationId: 'ill-creation',
            })
          }
          className="flex items-center gap-1 text-[#7A9A82] hover:text-[#5A7D63] font-medium cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Entry</span>
        </button>
      </div>

      {/* Filter Pills */}
      {journalEntries.length > 0 && (
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All' },
            { id: 'prayer', label: 'Prayer List' },
            ...bookFilters,
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setFilterMode(pill.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                filterMode === pill.id
                  ? 'bg-[#7A9A82] text-white shadow-xs'
                  : 'bg-[#F3EFE6] text-[#76746E] hover:bg-[#EBE5DA]'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      )}

      {/* Journal Feed */}
      {filteredEntries.length === 0 ? (
        <div className="bg-[#F3EFE6] rounded-3xl p-6 text-center border border-[#E5DFD5]">
          <PenLine className="w-8 h-8 text-[#96938B] mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-[#2C2C2A]">
            {journalEntries.length === 0 ? 'No journal reflections yet' : 'No entries matching filter'}
          </h4>
          <p className="text-xs text-[#76746E] mt-1 max-w-xs mx-auto">
            Tap "Reflect in Journal" while reading any passage to save your personal reflections and prayer requests here.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-[#FAF7F2] rounded-3xl p-4 border border-[#E5DFD5] shadow-xs space-y-3"
            >
              {/* Top Meta Row */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[0.6875rem] font-mono text-[#76746E]">
                  {new Date(entry.createdAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>

                <div className="flex items-center gap-1.5">
                  {entry.linkedToPrayerList && (
                    <button
                      onClick={() => togglePrayerAnswered(entry.id)}
                      className={`text-[0.625rem] font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 transition-all cursor-pointer ${
                        entry.prayerAnswered
                          ? 'bg-[#EBF2ED] border-[#7A9A82] text-[#385541]'
                          : 'bg-[#FAECE5] border-[#ECCDC0] text-[#B07456]'
                      }`}
                      title="Toggle answered prayer status"
                    >
                      {entry.prayerAnswered ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-[#7A9A82]" />
                          <span>Answered Prayer</span>
                        </>
                      ) : (
                        <>
                          <HeartHandshake className="w-3 h-3" />
                          <span>In Prayer List</span>
                        </>
                      )}
                    </button>
                  )}

                  <button
                    onClick={() => deleteJournalEntry(entry.id)}
                    className="p-1 text-[#96938B] hover:text-[#C88A6B] transition-colors"
                    title="Delete journal entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Embedded "What I Read" Snapshot Card */}
              <button
                onClick={() => handleJump(entry.verseReference, entry.bookId)}
                className="w-full text-left bg-[#F3EFE6] hover:bg-[#EDE7DC] rounded-2xl p-2.5 border border-[#E5DFD5] flex gap-3 items-center transition-colors group cursor-pointer"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                  <StoryIllustration
                    illustrationId={entry.illustrationId}
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-[#2C2C2A] group-hover:text-[#7A9A82]">
                      {entry.verseReference}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#7A9A82] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[0.6875rem] text-[#6B6862] mt-0.5 line-clamp-2 leading-snug">
                    {entry.passageSnapshotText}
                  </p>
                </div>
              </button>

              {/* User Reflection Text */}
              <p
                className="text-[#2C2C2A] leading-relaxed"
                style={{
                  fontSize: `${Math.max(14, Math.min(preferences.fontSize - 2, 24))}px`,
                  lineHeight: preferences.lineHeight,
                }}
              >
                {entry.userReflectionText}
              </p>

              {/* Reaction Tags */}
              {entry.reactionTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {entry.reactionTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.625rem] font-medium px-2.5 py-0.5 rounded-full bg-[#EDE7DC] text-[#55534E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
