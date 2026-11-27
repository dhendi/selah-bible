import React, { useState } from 'react';
import { X, Save, Bookmark } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';

export const AddNoteModal: React.FC<{
  verseRef: string | null;
  bookId: string;
  onClose: () => void;
}> = ({ verseRef, bookId, onClose }) => {
  const { addVerseNote, notes } = useStudyStore();
  const [noteText, setNoteText] = useState('');
  const [tag, setTag] = useState('Daily Reflection');

  if (!verseRef) return null;

  const existingNotes = notes.filter((n) => n.verseRef === verseRef);

  const handleSave = () => {
    if (!noteText.trim()) return;
    addVerseNote(verseRef, bookId, noteText.trim(), tag);
    setNoteText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/35 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DFD5] p-5 z-10 animate-slide-up">
        <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7] mb-3">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#7A9A82]" />
            <h3 className="text-base font-serif font-bold text-[#2C2C2A]">
              Personal Note: {verseRef}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-[#F3EFE6] text-[#76746E]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Existing notes for this verse if any */}
        {existingNotes.length > 0 && (
          <div className="mb-3 max-h-36 overflow-y-auto space-y-2 pr-1">
            <span className="text-[0.6875rem] font-semibold text-[#76746E] uppercase">Previous Notes</span>
            {existingNotes.map((n) => (
              <div key={n.id} className="p-2.5 rounded-xl bg-[#F3EFE6] border border-[#E5DFD5] text-xs">
                <p className="text-[#2C2C2A]">{n.noteText}</p>
                <div className="flex justify-between items-center text-[0.625rem] text-[#76746E] mt-1">
                  <span className="px-1.5 py-0.5 rounded bg-[#EDE7DC]">{n.tag}</span>
                  <span>{new Date(n.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* New Note Input */}
        <div className="space-y-3">
          <textarea
            rows={4}
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write your observation, question, or prayer about this verse..."
            className="w-full p-3 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] text-sm text-[#2C2C2A] placeholder-[#96938B] focus:outline-none focus:ring-1 focus:ring-[#7A9A82] resize-none"
            autoFocus
          />

          <div className="flex items-center justify-between gap-2">
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="text-xs bg-[#F3EFE6] border border-[#E5DFD5] text-[#2C2C2A] px-2.5 py-1.5 rounded-xl focus:outline-none"
            >
              <option value="Daily Reflection">Daily Reflection</option>
              <option value="Theological Insight">Theological Insight</option>
              <option value="Question to Explore">Question to Explore</option>
              <option value="Prayer">Prayer</option>
            </select>

            <button
              onClick={handleSave}
              disabled={!noteText.trim()}
              className="px-4 py-2 rounded-xl bg-[#7A9A82] hover:bg-[#68866F] disabled:opacity-40 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
