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
import { StoryIllustration } from '../illustrations/StoryIllustration';

export const JournalTimeline: React.FC = () => {
  const {
    journalEntries,
    togglePrayerAnswered,
    deleteJournalEntry,
    navigateToPassage,
    openJournalSheet,
    preferences,
  } = useStudyStore();

  const [filterMode, setFilterMode] = useState<'all' | 'prayer' | 'GEN' | 'EXO' | 'LEV' | 'NUM' | 'DEU' | 'JOS' | 'JDG' | 'RUT' | '1SA' | '2SA' | '1KI' | '2KI' | 'JOB' | 'PSA' | 'DAN'>('all');

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';

  const filteredEntries = journalEntries.filter((entry) => {
    if (filterMode === 'all') return true;
    if (filterMode === 'prayer') return entry.linkedToPrayerList;
    return entry.bookId === filterMode;
  });

  const handleJump = (ref: string) => {
    const stripped = ref.replace(/^(?:1|2)\s+(?:Samuel|Kings)\s+/i, '');
    const chapMatch = stripped.match(/\b(\d+)(?::(\d+))?/);
    const chap = chapMatch ? chapMatch[1] : '1';
    const verse = chapMatch && chapMatch[2] ? parseInt(chapMatch[2], 10) : undefined;

    if (ref.includes('Genesis')) {
      navigateToPassage(`GEN-${chap}`, verse);
    } else if (ref.includes('Leviticus')) {
      navigateToPassage(`LEV-${chap}`, verse);
    } else if (ref.includes('Numbers')) {
      navigateToPassage(`NUM-${chap}`, verse);
    } else if (ref.includes('Deuteronomy')) {
      navigateToPassage(`DEU-${chap}`, verse);
    } else if (ref.includes('Joshua')) {
      navigateToPassage(`JOS-${chap}`, verse);
    } else if (ref.includes('Judges')) {
      navigateToPassage(`JDG-${chap}`, verse);
    } else if (ref.includes('1 Samuel')) {
      navigateToPassage(`1SA-${chap}`, verse);
    } else if (ref.includes('2 Samuel')) {
      navigateToPassage(`2SA-${chap}`, verse);
    } else if (ref.includes('1 Kings')) {
      navigateToPassage(`1KI-${chap}`, verse);
    } else if (ref.includes('2 Kings')) {
      navigateToPassage(`2KI-${chap}`, verse);
    } else if (ref.includes('Job')) {
      navigateToPassage(`JOB-${chap}`, verse);
    } else if (ref.includes('Psalm')) {
      navigateToPassage(`PSA-${chap}`, verse);
    } else if (ref.includes('Daniel')) {
      navigateToPassage(`DAN-${chap}`, verse);
    } else if (ref.includes('Ruth')) {
      navigateToPassage('RUT-1', verse || 16);
    } else {
      navigateToPassage(`EXO-${chap === '1' && !ref.includes('1:') ? '16' : chap}`, verse);
    }
  };

  return (
    <div className={`space-y-4 ${fontClass}`}>
      {/* Header & Quick Add */}
      <div className="flex items-center justify-between text-xs text-[#76746E] px-1">
        <span className="font-semibold text-[#2C2C2A]">
          {journalEntries.length} Journal Reflections
        </span>
        <button
          onClick={() =>
            openJournalSheet({
              verseRef: 'Ruth 1:16',
              bookId: 'RUT',
              snapshotText:
                'Ruth refuses to abandon her grieving mother-in-law Naomi, declaring faithful love and trust in God.',
              illustrationId: 'ill-ruth-naomi',
            })
          }
          className="flex items-center gap-1 text-[#7A9A82] hover:text-[#5A7D63] font-medium cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Entry</span>
        </button>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'all', label: 'All' },
          { id: 'prayer', label: 'Prayer List' },
          { id: 'GEN', label: 'Genesis' },
          { id: 'EXO', label: 'Exodus' },
          { id: 'LEV', label: 'Leviticus' },
          { id: 'NUM', label: 'Numbers' },
          { id: 'DEU', label: 'Deuteronomy' },
          { id: 'JOS', label: 'Joshua' },
          { id: 'JDG', label: 'Judges' },
          { id: 'RUT', label: 'Ruth' },
          { id: '1SA', label: '1 Samuel' },
          { id: '2SA', label: '2 Samuel' },
          { id: '1KI', label: '1 Kings' },
          { id: '2KI', label: '2 Kings' },
          { id: 'JOB', label: 'Job' },
          { id: 'PSA', label: 'Psalms' },
          { id: 'DAN', label: 'Daniel' },
        ].map((pill) => (
          <button
            key={pill.id}
            onClick={() => setFilterMode(pill.id as any)}
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

      {/* Journal Feed */}
      {filteredEntries.length === 0 ? (
        <div className="bg-[#F3EFE6] rounded-3xl p-6 text-center border border-[#E5DFD5]">
          <PenLine className="w-8 h-8 text-[#96938B] mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-[#2C2C2A]">No entries matching filter</h4>
          <p className="text-xs text-[#76746E] mt-1">
            Tap "Reflect in Journal" while reading any passage to save your reflections here.
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
                <span className="text-[11px] font-mono text-[#76746E]">
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
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 transition-all cursor-pointer ${
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
                onClick={() => handleJump(entry.verseReference)}
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
                  <p className="text-[11px] text-[#6B6862] mt-0.5 line-clamp-2 leading-snug">
                    {entry.passageSnapshotText}
                  </p>
                </div>
              </button>

              {/* User Reflection Text */}
              <p
                className="text-[#2C2C2A] leading-relaxed"
                style={{
                  fontSize: `${Math.max(13, Math.min(preferences.fontSize - 3, 19))}px`,
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
                      className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#EDE7DC] text-[#55534E]"
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
