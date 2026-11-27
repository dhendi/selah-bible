import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { MiniQuizModal } from '../quiz/MiniQuizModal';
import { TERM_MANNA_ENTITY } from '../../data/wordOfTheDay';
import { preloadBookForChapter, useChapterData } from '../../data/bookLoader';
import {
  BIBLE_BOOK_GROUPS,
  PICKER_BOOK_MAP,
  parseBookIdFromChapter,
} from '../../data/bookGroups';

const CURATED_SHELVES = [
  { chapId: 'GEN-1', label: 'Genesis 1', note: 'Creation & Light', testament: 'OT' },
  { chapId: 'EXO-16', label: 'Exodus 16', note: 'Bread in the Wilderness', testament: 'OT' },
  { chapId: 'PSA-23', label: 'Psalm 23', note: 'The Lord Is My Shepherd', testament: 'OT' },
  { chapId: 'ISA-53', label: 'Isaiah 53', note: 'The Suffering Servant', testament: 'OT' },
  { chapId: 'MAT-5', label: 'Matthew 5', note: 'Sermon on the Mount', testament: 'NT' },
  { chapId: 'JHN-1', label: 'John 1', note: 'The Word Made Flesh', testament: 'NT' },
  { chapId: 'ROM-8', label: 'Romans 8', note: 'Life in the Spirit', testament: 'NT' },
  { chapId: 'HEB-11', label: 'Hebrews 11', note: 'Cloud of Witnesses', testament: 'NT' },
  { chapId: 'REV-21', label: 'Revelation 21', note: 'New Heaven & Earth', testament: 'NT' },
];

function resolveQuizId(chapterId: string): string {
  if (chapterId === 'GEN-1') return 'gen-1';
  if (chapterId.startsWith('GEN-')) return 'gen-patriarchs';
  if (chapterId.startsWith('LEV-')) return 'lev-holiness';
  if (chapterId.startsWith('NUM-')) return 'num-wilderness';
  if (chapterId.startsWith('DEU-')) return 'deu-covenant';
  if (chapterId.startsWith('JOS-')) return 'jos-promised-land';
  if (chapterId.startsWith('JDG-')) return 'jdg-deliverers';
  if (chapterId.startsWith('RUT-')) return 'rut-chesed';
  if (chapterId.startsWith('1SA-')) return '1sa-kingship';
  if (chapterId.startsWith('2SA-')) return '2sa-davidic-grace';
  if (chapterId.startsWith('1KI-')) return '1ki-wisdom-prophets';
  if (chapterId.startsWith('2KI-')) return '2ki-mercy-reform';
  if (chapterId.startsWith('1CH-')) return '1ch-temple-worship';
  if (chapterId.startsWith('2CH-')) return '2ch-choir-humility';
  if (chapterId.startsWith('EZR-')) return 'ezr-return-word';
  if (chapterId.startsWith('NEH-')) return 'neh-wall-joy';
  if (chapterId.startsWith('EST-')) return 'est-hidden-providence';
  if (chapterId.startsWith('JOB-')) return 'job-suffering-whirlwind';
  if (chapterId.startsWith('PSA-')) return 'psa-praise-shepherd';
  if (chapterId.startsWith('PRO-')) return 'pro-wisdom-way';
  if (chapterId.startsWith('ECC-')) return 'ecc-season-creator';
  if (chapterId.startsWith('SNG-')) return 'sng-love-song';
  if (chapterId.startsWith('ISA-')) return 'isa-throne-servant';
  if (chapterId.startsWith('JER-')) return 'jer-covenant-cistern';
  if (chapterId.startsWith('LAM-')) return 'lam-morning-mercy';
  if (chapterId.startsWith('EZK-')) return 'ezk-bones-river';
  if (chapterId.startsWith('DAN-')) return 'dan-exile-kingdom';
  if (chapterId === 'EXO-16') return 'exo-16';
  return 'exo-sinai';
}

export const TodayScreen: React.FC = () => {
  const {
    progress,
    navigateToPassage,
    openEntitySheet,
    currentChapterId,
    setShowChapterPicker,
  } = useStudyStore();

  const [activeQuizPassage, setActiveQuizPassage] = useState<string | null>(null);

  const activeChapter = currentChapterId || 'EXO-16';
  const bookId = parseBookIdFromChapter(activeChapter);
  const bookMeta = PICKER_BOOK_MAP[bookId];
  const groupMeta = BIBLE_BOOK_GROUPS.find((g) => g.id === bookMeta.groupId);
  const { chapterData } = useChapterData(activeChapter);

  useEffect(() => {
    preloadBookForChapter(activeChapter);
  }, [activeChapter]);

  const wordOfTheDay = TERM_MANNA_ENTITY;

  const handleResumeReading = () => {
    navigateToPassage(activeChapter);
  };

  const chapterNum = activeChapter.split('-')[1] || '1';
  const chapterHeading = chapterData?.title?.includes(':')
    ? chapterData.title.split(':').slice(1).join(':').trim()
    : chapterData?.title || `${bookMeta.title} ${chapterNum}`;
  const openingSnippet = chapterData?.verses?.[0]?.text || '';

  return (
    <div className="min-h-full pb-28 px-6 sm:px-8 pt-8 max-w-[38rem] mx-auto bg-[#FBF8F1] text-[#24221E]">
      {/* Book Flyleaf / Title Page Masthead */}
      <header className="text-center pb-6 border-b border-[#E2DACB] mb-7">
        <div className="text-[0.625rem] uppercase tracking-[0.24em] text-[#8B3A2B] font-semibold">
          The Holy Scriptures · World English Bible
        </div>
        <h1 className="text-3xl font-serif font-semibold text-[#24221E] mt-2 tracking-tight">
          Selah Study Edition
        </h1>
        <p className="font-serif italic text-xs text-[#666158] mt-1.5">
          All 66 Books · Old & New Testaments · {progress.streakDays}{' '}
          {progress.streakDays === 1 ? 'day' : 'days'} in the Word
        </p>
      </header>

      {/* 1. Silk Ribbon Bookmark — Where You Left Off */}
      <section className="mb-8">
        <div className="relative bg-[#F4EFE4] border border-[#DDD3C1] border-l-4 border-l-[#8B3A2B] p-5 sm:p-6 shadow-xs">
          {/* Physical Ribbon Bookmark Tail */}
          <div
            className="ribbon-bookmark-tab absolute top-0 right-5 w-4 h-9 bg-[#8B3A2B] shadow-xs"
            aria-hidden="true"
          />

          <div className="text-[0.625rem] uppercase tracking-[0.18em] text-[#8B3A2B] font-semibold pr-8">
            Ribbon Bookmark · {bookMeta.title} {chapterNum}
          </div>

          <h2 className="text-xl font-serif font-semibold text-[#24221E] mt-1.5 leading-snug pr-6">
            {chapterHeading}
          </h2>

          {groupMeta && (
            <div className="text-[0.6875rem] text-[#666158] mt-0.5">
              {bookMeta.testament === 'OT' ? 'Old Testament' : 'New Testament'} ·{' '}
              {groupMeta.fullLabel}
            </div>
          )}

          {openingSnippet && (
            <blockquote className="mt-3 pt-3 border-t border-[#E2DACB] font-serif italic text-[13.5px] text-[#4A463F] leading-relaxed line-clamp-2">
              “{openingSnippet}”
            </blockquote>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleResumeReading}
              className="px-4 py-2 bg-[#24221E] hover:bg-[#3A3731] text-[#FBF8F1] text-xs font-medium rounded-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Open to {bookMeta.title} {chapterNum}</span>
            </button>

            <button
              onClick={() => setShowChapterPicker(true)}
              className="text-xs font-serif italic text-[#666158] hover:text-[#24221E] underline decoration-dotted underline-offset-4 cursor-pointer"
            >
              Turn to another book →
            </button>
          </div>
        </div>
      </section>

      {/* 2. Word Study & Daily Recall — Printed Study Notes Style */}
      <section className="grid sm:grid-cols-2 gap-5 pb-7 mb-7 border-b border-[#E2DACB]">
        {/* Lexicon Entry */}
        <button
          onClick={() => openEntitySheet('term-manna')}
          className="text-left p-4 bg-[#F4EFE4]/60 hover:bg-[#F4EFE4] border border-[#E2DACB] transition-colors group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[0.625rem] uppercase tracking-[0.16em] text-[#8C867B]">
              <span>Hebrew Word Study</span>
              <span className="font-hebrew text-base text-[#8B3A2B] font-semibold">מָן</span>
            </div>
            <div className="font-serif font-semibold text-base text-[#24221E] mt-1 group-hover:text-[#8B3A2B] transition-colors">
              {wordOfTheDay.title}
            </div>
            <p className="text-xs text-[#666158] mt-1">
              {wordOfTheDay.originalLanguageTerm}
            </p>
          </div>
          <div className="mt-3 text-[0.6875rem] font-medium text-[#8B3A2B] inline-flex items-center gap-1">
            <span>Read lexicon note</span>
            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>

        {/* Passage Recall Check */}
        <button
          onClick={() => setActiveQuizPassage(resolveQuizId(activeChapter))}
          className="text-left p-4 bg-[#F4EFE4]/60 hover:bg-[#F4EFE4] border border-[#E2DACB] transition-colors group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[0.625rem] uppercase tracking-[0.16em] text-[#8C867B]">
              <span>Active Recall</span>
              <span>3 Questions</span>
            </div>
            <div className="font-serif font-semibold text-base text-[#24221E] mt-1 group-hover:text-[#8B3A2B] transition-colors">
              Chapter Comprehension Check
            </div>
            <p className="text-xs text-[#666158] mt-1">
              Review key words, geography, and meaning from your reading.
            </p>
          </div>
          <div className="mt-3 text-[0.6875rem] font-medium text-[#8B3A2B] inline-flex items-center gap-1">
            <span>Begin short review</span>
            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
      </section>

      {/* 3. Table of Contents Excerpt — Key Passages Across All 66 Books */}
      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#666158]">
            Notable Chapters
          </h3>
          <button
            onClick={() => setShowChapterPicker(true)}
            className="text-xs font-serif italic text-[#8B3A2B] hover:underline cursor-pointer"
          >
            All 66 books →
          </button>
        </div>

        <div className="divide-y divide-[#E2DACB] border-y border-[#E2DACB]">
          {CURATED_SHELVES.map((item) => {
            const isActive = activeChapter === item.chapId;
            return (
              <button
                key={item.chapId}
                onClick={() => navigateToPassage(item.chapId)}
                className={`w-full py-2.5 px-1.5 text-left flex items-baseline justify-between gap-3 transition-colors cursor-pointer ${
                  isActive ? 'bg-[#F4EFE4]' : 'hover:bg-[#F4EFE4]/60'
                }`}
              >
                <div className="flex items-baseline gap-2.5 min-w-0">
                  <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-[#8C867B] w-6 flex-shrink-0">
                    {item.testament}
                  </span>
                  <span className="font-serif font-semibold text-sm text-[#24221E] truncate">
                    {item.label}
                  </span>
                </div>
                <span className="text-xs font-serif italic text-[#666158] truncate">
                  {item.note}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Mini Quiz Modal if active */}
      {activeQuizPassage && (
        <MiniQuizModal
          passageId={activeQuizPassage}
          onClose={() => setActiveQuizPassage(null)}
        />
      )}
    </div>
  );
};
