import React, { useState } from 'react';
import type { BookOverview, BiblicalGenre } from '../../types/bible';
import { SEED_BOOKS, GENRE_COLORS } from '../../data/seedBooks';
import { BookOverviewModal } from './BookOverviewModal';

export const BookGridView: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [activeBook, setActiveBook] = useState<BookOverview | null>(null);

  const genres: (string | BiblicalGenre)[] = [
    'All',
    'Law',
    'History',
    'Poetry',
    'Prophets',
    'Gospels',
    'Letters',
  ];

  const filteredBooks =
    selectedGenre === 'All'
      ? SEED_BOOKS
      : SEED_BOOKS.filter((b) => b.genre === selectedGenre);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGenre(g)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedGenre === g
                ? 'bg-[#7A9A82] text-white shadow-xs'
                : 'bg-[#F3EFE6] text-[#76746E] hover:bg-[#EBE5DA]'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Grid of Books */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {filteredBooks.map((book) => {
          const color = GENRE_COLORS[book.genre] || GENRE_COLORS['Law'];
          const isFeaturedSeed =
            book.id === 'GEN' ||
            book.id === 'EXO' ||
            book.id === 'LEV' ||
            book.id === 'NUM' ||
            book.id === 'DEU' ||
            book.id === 'JOS' ||
            book.id === 'JDG' ||
            book.id === 'RUT' ||
            book.id === '1SA' ||
            book.id === '2SA' ||
            book.id === '1KI' ||
            book.id === '2KI' ||
            book.id === 'JOB' ||
            book.id === 'PSA' ||
            book.id === 'DAN';

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
                    className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: color.badge, color: '#FFFFFF' }}
                  >
                    {book.id}
                  </span>
                  {isFeaturedSeed && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#7A9A82] text-white">
                      Seed V1
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-serif font-bold text-[#2C2C2A] mt-2 group-hover:text-[#1F3A27] transition-colors">
                  {book.title}
                </h4>
              </div>

              <div className="text-[11px] text-[#55534E] flex items-center justify-between mt-2 pt-1 border-t border-black/5">
                <span>{book.genre}</span>
                <span>{book.chapterCount} ch</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Modal */}
      <BookOverviewModal book={activeBook} onClose={() => setActiveBook(null)} />
    </div>
  );
};
