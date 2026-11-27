import React, { useState } from 'react';
import { Bookmark, Trash2, ArrowRight, BookOpen, Plus } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { PICKER_BOOK_MAP, parseBookIdFromChapter, type BibleBookId } from '../../data/bookGroups';
import { AddNoteModal } from '../reader/AddNoteModal';

export const NotesManager: React.FC = () => {
  const { notes, deleteVerseNote, navigateToPassage, currentChapterId } = useStudyStore();
  const [activeAddNoteRef, setActiveAddNoteRef] = useState<string | null>(null);

  const curBookId = parseBookIdFromChapter(currentChapterId || 'GEN-1');
  const curChapNum = (currentChapterId || 'GEN-1').split('-')[1] || '1';
  const curBookTitle = PICKER_BOOK_MAP[curBookId]?.title || 'Genesis';

  // Group notes by bookId
  const groupedNotes: Record<string, typeof notes> = {};
  notes.forEach((note) => {
    const book = note.bookId || 'Other';
    if (!groupedNotes[book]) {
      groupedNotes[book] = [];
    }
    groupedNotes[book].push(note);
  });

  const handleJump = (verseRef: string, fallbackBookId?: string) => {
    const chapMatch = verseRef.match(/\b(\d+)(?::(\d+))?\s*$/);
    const chap = chapMatch ? chapMatch[1] : '1';
    const verse = chapMatch && chapMatch[2] ? parseInt(chapMatch[2], 10) : undefined;
    const bookEntry = Object.values(PICKER_BOOK_MAP).find((b) =>
      verseRef.toLowerCase().startsWith(b.title.toLowerCase())
    );
    const bId = bookEntry?.id || (fallbackBookId as BibleBookId) || 'GEN';
    navigateToPassage(`${bId}-${chap}`, verse);
  };

  return (
    <div className="space-y-4">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs text-[#76746E] px-1">
        <span className="font-semibold text-[#2C2C2A]">
          {notes.length} Personal Study {notes.length === 1 ? 'Note' : 'Notes'}
        </span>
        <button
          onClick={() => setActiveAddNoteRef(`${curBookTitle} ${curChapNum}:1`)}
          className="flex items-center gap-1 text-[#7A9A82] hover:text-[#5A7D63] font-medium cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Note</span>
        </button>
      </div>

      {notes.length === 0 ? (
        <div className="bg-[#F3EFE6] rounded-3xl p-6 text-center border border-[#E5DFD5]">
          <Bookmark className="w-8 h-8 text-[#96938B] mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-[#2C2C2A]">No notes yet</h4>
          <p className="text-xs text-[#76746E] mt-1 max-w-xs mx-auto">
            While reading, tap any verse and select Note to record your personal insights and prayers.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.entries(groupedNotes).map(([bookId, bookNotes]) => {
            const bookName = PICKER_BOOK_MAP[bookId as BibleBookId]?.title || bookId;

            return (
              <div key={bookId} className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] px-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{bookName} ({bookNotes.length})</span>
                </div>

                <div className="space-y-2.5">
                  {bookNotes.map((note) => (
                    <div
                      key={note.id}
                      className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E5DFD5] shadow-xs group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <button
                          onClick={() => handleJump(note.verseRef, note.bookId)}
                          className="text-xs font-serif font-bold text-[#2C2C2A] hover:text-[#7A9A82] flex items-center gap-1 transition-colors"
                        >
                          <span>{note.verseRef}</span>
                          <ArrowRight className="w-3 h-3 text-[#7A9A82] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                        <div className="flex items-center gap-2">
                          <span className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[#F3EFE6] text-[#76746E] font-medium">
                            {note.tag || 'Reflection'}
                          </span>
                          <button
                            onClick={() => deleteVerseNote(note.id)}
                            className="text-[#96938B] hover:text-[#C88A6B] p-1 transition-colors"
                            title="Delete note"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-[#484642] leading-relaxed">
                        {note.noteText}
                      </p>

                      <div className="text-[0.625rem] text-[#96938B] mt-2 pt-2 border-t border-[#EFEAE1]">
                        Saved {new Date(note.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add note modal if triggered */}
      {activeAddNoteRef && (
        <AddNoteModal
          verseRef={activeAddNoteRef}
          bookId={curBookId}
          onClose={() => setActiveAddNoteRef(null)}
        />
      )}
    </div>
  );
};
