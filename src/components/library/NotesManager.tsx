import React, { useState } from 'react';
import { Bookmark, Trash2, ArrowRight, BookOpen, Plus } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { AddNoteModal } from '../reader/AddNoteModal';

export const NotesManager: React.FC = () => {
  const { notes, deleteVerseNote, navigateToPassage } = useStudyStore();
  const [activeAddNoteRef, setActiveAddNoteRef] = useState<string | null>(null);

  // Group notes by bookId
  const groupedNotes: Record<string, typeof notes> = {};
  notes.forEach((note) => {
    const book = note.bookId || 'Other';
    if (!groupedNotes[book]) {
      groupedNotes[book] = [];
    }
    groupedNotes[book].push(note);
  });

  const handleJump = (verseRef: string) => {
    if (verseRef.includes('Genesis')) {
      navigateToPassage('GEN-1');
    } else {
      navigateToPassage('EXO-16');
    }
  };

  return (
    <div className="space-y-4">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs text-[#76746E] px-1">
        <span className="font-semibold text-[#2C2C2A]">
          {notes.length} Personal Study Notes
        </span>
        <button
          onClick={() => setActiveAddNoteRef('Exodus 16:15')}
          className="flex items-center gap-1 text-[#7A9A82] hover:text-[#5A7D63] font-medium"
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
            While reading, tap the note icon on any verse to record your personal insights and prayers.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.entries(groupedNotes).map(([bookId, bookNotes]) => {
            const bookName = bookId === 'GEN' ? 'Genesis' : bookId === 'EXO' ? 'Exodus' : bookId;

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
                          onClick={() => handleJump(note.verseRef)}
                          className="text-xs font-serif font-bold text-[#2C2C2A] hover:text-[#7A9A82] flex items-center gap-1 transition-colors"
                        >
                          <span>{note.verseRef}</span>
                          <ArrowRight className="w-3 h-3 text-[#7A9A82] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F3EFE6] text-[#76746E] font-medium">
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

                      <div className="text-[10px] text-[#96938B] mt-2 pt-2 border-t border-[#EFEAE1]">
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
          bookId={activeAddNoteRef.includes('Genesis') ? 'GEN' : 'EXO'}
          onClose={() => setActiveAddNoteRef(null)}
        />
      )}
    </div>
  );
};
