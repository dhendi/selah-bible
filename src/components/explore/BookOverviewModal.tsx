import React from 'react';
import { X, BookOpen, Clock, Tag } from 'lucide-react';
import type { BookOverview } from '../../types/bible';
import { useStudyStore } from '../../store/useStudyStore';
import { GENRE_COLORS, BUILT_BOOK_START_CHAPTER } from '../../data/seedBooks';

export const BookOverviewModal: React.FC<{
  book: BookOverview | null;
  onClose: () => void;
}> = ({ book, onClose }) => {
  const { navigateToPassage } = useStudyStore();

  if (!book) return null;

  const genreColor = GENRE_COLORS[book.genre] || GENRE_COLORS['Law'];
  const startPassageId = BUILT_BOOK_START_CHAPTER[book.id];

  const handleStartReading = () => {
    if (!startPassageId) return;
    onClose();
    navigateToPassage(startPassageId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/40 backdrop-blur-xs animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DFD5] p-5 z-10 animate-slide-up flex flex-col max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#E8E2D7] mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[0.625rem] font-semibold uppercase px-2 py-0.5 rounded-full"
                style={{ backgroundColor: genreColor.bg, color: genreColor.text }}
              >
                {book.genreLabel}
              </span>
              <span className="text-xs text-[#76746E]">
                {book.testament === 'OT' ? 'Old Testament' : 'New Testament'} • {book.chapterCount} Chapters
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#2C2C2A]">
              {book.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F3EFE6] text-[#76746E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Summary Hook */}
        <div className="p-3.5 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5] mb-4">
          <p className="text-sm font-medium text-[#2C2C2A] leading-relaxed">
            "{book.summaryHook}"
          </p>
        </div>

        {/* The Big Picture */}
        <div className="mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#76746E] mb-1.5">
            The Big Picture
          </h4>
          <p className="text-xs text-[#484642] leading-relaxed">
            {book.bigPictureText}
          </p>
        </div>

        {/* Era & Historical Setting */}
        <div className="mb-4 flex items-center gap-2 text-xs text-[#6B6862] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E8E2D7]">
          <Clock className="w-4 h-4 text-[#C88A6B] flex-shrink-0" />
          <span><strong>Era:</strong> {book.era}</span>
        </div>

        {/* Key Themes */}
        <div className="mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#76746E] mb-2 flex items-center gap-1">
            <Tag className="w-3 h-3 text-[#7A9A82]" />
            Key Themes
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {book.keyThemes.map((theme, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-xl bg-[#EDE7DC] text-[#2C2C2A] text-xs font-medium"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {startPassageId ? (
          <button
            onClick={handleStartReading}
            className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-medium text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Start Reading {book.title}</span>
          </button>
        ) : (
          <div
            aria-disabled="true"
            className="w-full py-3.5 rounded-2xl bg-[#EFECE6] border border-[#E5E2D9] text-[#7D7B74] font-medium text-sm flex items-center justify-center gap-2 cursor-not-allowed select-none"
          >
            <Clock className="w-4 h-4" />
            <span>Chapters &amp; Artwork Coming Soon</span>
          </div>
        )}
      </div>
    </div>
  );
};
