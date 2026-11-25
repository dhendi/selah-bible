import React, { useState } from 'react';
import { X, Check, Sparkles, BookOpen } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { GENESIS_CHAPTERS } from '../../data/books/genesisChapters';
import { EXODUS_CHAPTERS } from '../../data/books/exodusChapters';
import { LEVITICUS_CHAPTERS } from '../../data/books/leviticusChapters';
import { NUMBERS_CHAPTERS } from '../../data/books/numbersChapters';
import { DEUTERONOMY_CHAPTERS } from '../../data/books/deuteronomyChapters';
import { JOSHUA_CHAPTERS } from '../../data/books/joshuaChapters';
import { JUDGES_CHAPTERS } from '../../data/books/judgesChapters';
import { RUTH_CHAPTERS } from '../../data/books/ruthChapters';
import { FIRST_SAMUEL_CHAPTERS } from '../../data/books/firstSamuelChapters';
import { SECOND_SAMUEL_CHAPTERS } from '../../data/books/secondSamuelChapters';
import { FIRST_KINGS_CHAPTERS } from '../../data/books/firstKingsChapters';
import { SECOND_KINGS_CHAPTERS } from '../../data/books/secondKingsChapters';
import { FIRST_CHRONICLES_CHAPTERS } from '../../data/books/firstChroniclesChapters';
import { SECOND_CHRONICLES_CHAPTERS } from '../../data/books/secondChroniclesChapters';
import { EZRA_CHAPTERS } from '../../data/books/ezraChapters';
import { NEHEMIAH_CHAPTERS } from '../../data/books/nehemiahChapters';
import { ESTHER_CHAPTERS } from '../../data/books/estherChapters';
import { JOB_CHAPTERS } from '../../data/books/jobChapters';
import { PSALMS_CHAPTERS } from '../../data/books/psalmsChapters';
import { PROVERBS_CHAPTERS } from '../../data/books/proverbsChapters';
import { ECCLESIASTES_CHAPTERS } from '../../data/books/ecclesiastesChapters';
import { SONG_OF_SOLOMON_CHAPTERS } from '../../data/books/songOfSolomonChapters';
import { ISAIAH_CHAPTERS } from '../../data/books/isaiahChapters';
import { DANIEL_CHAPTERS } from '../../data/books/danielChapters';

export const ChapterPickerModal: React.FC = () => {
  const {
    showChapterPicker,
    setShowChapterPicker,
    currentChapterId,
    setCurrentChapterId,
    setShowVisualHookHeader,
    activeTab,
  } = useStudyStore();

  const [selectedBookTab, setSelectedBookTab] = useState<
    'GEN' | 'EXO' | 'LEV' | 'NUM' | 'DEU' | 'JOS' | 'JDG' | 'RUT' | '1SA' | '2SA' | '1KI' | '2KI' | '1CH' | '2CH' | 'EZR' | 'NEH' | 'EST' | 'JOB' | 'PSA' | 'PRO' | 'ECC' | 'SNG' | 'ISA' | 'DAN' | 'FEATURED'
  >(
    currentChapterId.startsWith('DAN-')
      ? 'DAN'
      : currentChapterId.startsWith('ISA-')
      ? 'ISA'
      : currentChapterId.startsWith('SNG-')
      ? 'SNG'
      : currentChapterId.startsWith('ECC-')
      ? 'ECC'
      : currentChapterId.startsWith('PRO-')
      ? 'PRO'
      : currentChapterId.startsWith('PSA-')
      ? 'PSA'
      : currentChapterId.startsWith('JOB-')
      ? 'JOB'
      : currentChapterId.startsWith('EST-')
      ? 'EST'
      : currentChapterId.startsWith('NEH-')
      ? 'NEH'
      : currentChapterId.startsWith('EZR-')
      ? 'EZR'
      : currentChapterId.startsWith('2CH-')
      ? '2CH'
      : currentChapterId.startsWith('1CH-')
      ? '1CH'
      : currentChapterId.startsWith('2KI-')
      ? '2KI'
      : currentChapterId.startsWith('1KI-')
      ? '1KI'
      : currentChapterId.startsWith('2SA-')
      ? '2SA'
      : currentChapterId.startsWith('1SA-')
      ? '1SA'
      : currentChapterId.startsWith('RUT-')
      ? 'RUT'
      : currentChapterId.startsWith('JDG-')
      ? 'JDG'
      : currentChapterId.startsWith('JOS-')
      ? 'JOS'
      : currentChapterId.startsWith('DEU-')
      ? 'DEU'
      : currentChapterId.startsWith('NUM-')
      ? 'NUM'
      : currentChapterId.startsWith('LEV-')
      ? 'LEV'
      : currentChapterId.startsWith('EXO-')
      ? 'EXO'
      : currentChapterId.startsWith('GEN-')
      ? 'GEN'
      : 'FEATURED'
  );

  if (!showChapterPicker) return null;

  const handleSelect = (chapId: string) => {
    setCurrentChapterId(chapId);
    setShowVisualHookHeader(activeTab !== 'bible');
    setShowChapterPicker(false);
  };

  const genesisChapterNumbers = Array.from({ length: 50 }, (_, i) => i + 1);
  const exodusChapterNumbers = Array.from({ length: 40 }, (_, i) => i + 1);
  const leviticusChapterNumbers = Array.from({ length: 27 }, (_, i) => i + 1);
  const numbersChapterNumbers = Array.from({ length: 36 }, (_, i) => i + 1);
  const deuteronomyChapterNumbers = Array.from({ length: 34 }, (_, i) => i + 1);
  const joshuaChapterNumbers = Array.from({ length: 24 }, (_, i) => i + 1);
  const judgesChapterNumbers = Array.from({ length: 21 }, (_, i) => i + 1);
  const ruthChapterNumbers = Array.from({ length: 4 }, (_, i) => i + 1);
  const firstSamuelChapterNumbers = Array.from({ length: 31 }, (_, i) => i + 1);
  const secondSamuelChapterNumbers = Array.from({ length: 24 }, (_, i) => i + 1);
  const firstKingsChapterNumbers = Array.from({ length: 22 }, (_, i) => i + 1);
  const secondKingsChapterNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const firstChroniclesChapterNumbers = Array.from({ length: 29 }, (_, i) => i + 1);
  const secondChroniclesChapterNumbers = Array.from({ length: 36 }, (_, i) => i + 1);
  const ezraChapterNumbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const nehemiahChapterNumbers = Array.from({ length: 13 }, (_, i) => i + 1);
  const estherChapterNumbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const jobChapterNumbers = Array.from({ length: 42 }, (_, i) => i + 1);
  const psalmsChapterNumbers = Array.from({ length: 150 }, (_, i) => i + 1);
  const proverbsChapterNumbers = Array.from({ length: 31 }, (_, i) => i + 1);
  const eccChapterNumbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const sngChapterNumbers = Array.from({ length: 8 }, (_, i) => i + 1);
  const isaiahChapterNumbers = Array.from({ length: 66 }, (_, i) => i + 1);
  const danielChapterNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/40 backdrop-blur-xs animate-fade-in"
        onClick={() => setShowChapterPicker(false)}
      />

      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DFD5] p-5 z-10 animate-slide-up max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7] mb-3">
          <div>
            <h3 className="text-lg font-serif font-bold text-[#2C2C2A]">Select Book & Chapter</h3>
            <p className="text-xs text-[#76746E]">
              Gen through Daniel (12) & Featured
            </p>
          </div>
          <button
            onClick={() => setShowChapterPicker(false)}
            className="p-1.5 rounded-full hover:bg-[#F3EFE6] text-[#76746E]"
            aria-label="Close picker"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Book Switcher Tabs */}
        <div className="bg-[#F3EFE6] p-1 rounded-2xl border border-[#E5DFD5] grid grid-cols-4 sm:grid-cols-6 gap-1 mb-3">
          <button
            onClick={() => setSelectedBookTab('GEN')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'GEN'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Gen (50)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('EXO')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'EXO'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Exo (40)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('LEV')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'LEV'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Lev (27)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('NUM')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'NUM'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Num (36)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('DEU')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'DEU'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Deu (34)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('JOS')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'JOS'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Jos (24)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('JDG')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'JDG'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Jdg (21)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('RUT')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'RUT'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Rut (4)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('1SA')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === '1SA'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>1Sa (31)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('2SA')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === '2SA'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>2Sa (24)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('1KI')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === '1KI'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>1Ki (22)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('2KI')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === '2KI'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>2Ki (25)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('1CH')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === '1CH'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>1Ch (29)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('2CH')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === '2CH'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>2Ch (36)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('EZR')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'EZR'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Ezr (10)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('NEH')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'NEH'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Neh (13)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('EST')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'EST'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Est (10)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('JOB')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'JOB'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Job (42)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('PSA')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'PSA'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Psa (150)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('PRO')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'PRO'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Pro (31)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('ECC')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'ECC'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Ecc (12)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('SNG')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'SNG'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Sng (8)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('ISA')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'ISA'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Isa (66)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('DAN')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'DAN'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Dan (12)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('FEATURED')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'FEATURED'
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
          {selectedBookTab === 'GEN' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#7A9A82]">All 50 Chapters of Genesis</span>
                <span>1,533 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {genesisChapterNumbers.map((num) => {
                  const id = `GEN-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = GENESIS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Genesis ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A9A82]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Genesis Turning Points
                </div>
                {[
                  { id: 'GEN-1', label: 'Ch 1 · Creation & Light' },
                  { id: 'GEN-3', label: 'Ch 3 · The Fall & First Promise' },
                  { id: 'GEN-9', label: 'Ch 9 · Noah & Rainbow Covenant' },
                  { id: 'GEN-15', label: 'Ch 15 · Abraham & Starry Promise' },
                  { id: 'GEN-22', label: 'Ch 22 · Mount Moriah Test' },
                  { id: 'GEN-28', label: 'Ch 28 · Jacob’s Ladder at Bethel' },
                  { id: 'GEN-50', label: 'Ch 50 · Joseph: "Meant for Good"' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#285842] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A9A82]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'EXO' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#C88A6B]">All 40 Chapters of Exodus</span>
                <span>1,213 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {exodusChapterNumbers.map((num) => {
                  const id = `EXO-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = EXODUS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Exodus ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Exodus Turning Points
                </div>
                {[
                  { id: 'EXO-3', label: 'Ch 3 · The Burning Bush ("I AM")' },
                  { id: 'EXO-12', label: 'Ch 12 · The First Passover' },
                  { id: 'EXO-14', label: 'Ch 14 · Parting the Red Sea' },
                  { id: 'EXO-16', label: 'Ch 16 · Provision of Manna' },
                  { id: 'EXO-20', label: 'Ch 20 · Ten Commandments at Sinai' },
                  { id: 'EXO-34', label: 'Ch 34 · God’s Compassionate Name' },
                  { id: 'EXO-40', label: 'Ch 40 · Glory Fills the Tabernacle' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#FAECE5] text-[#9A4B32] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'LEV' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#5D7CA8]">All 27 Chapters of Leviticus</span>
                <span>859 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {leviticusChapterNumbers.map((num) => {
                  const id = `LEV-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = LEVITICUS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Leviticus ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#5D7CA8] text-white border-[#5D7CA8] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#5D7CA8]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Leviticus Turning Points
                </div>
                {[
                  { id: 'LEV-1', label: 'Ch 1 · Drawing Near (Korban)' },
                  { id: 'LEV-9', label: 'Ch 9 · God’s Glory & Aaron’s Blessing' },
                  { id: 'LEV-16', label: 'Ch 16 · Day of Atonement (Yom Kippur)' },
                  { id: 'LEV-19', label: 'Ch 19 · "Love Your Neighbor as Yourself"' },
                  { id: 'LEV-23', label: 'Ch 23 · The Seven Sacred Feasts' },
                  { id: 'LEV-25', label: 'Ch 25 · The Year of Jubilee ("Liberty!")' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBEFF7] text-[#354B74] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#5D7CA8]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'NUM' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#9F7A4D]">All 36 Chapters of Numbers</span>
                <span>1,288 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {numbersChapterNumbers.map((num) => {
                  const id = `NUM-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = NUMBERS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Numbers ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#9F7A4D] text-white border-[#9F7A4D] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#9F7A4D]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Numbers Turning Points
                </div>
                {[
                  { id: 'NUM-6', label: 'Ch 6 · Priestly Blessing & Nazirite Vow' },
                  { id: 'NUM-13', label: 'Ch 13 · Twelve Spies & Caleb’s Courage' },
                  { id: 'NUM-17', label: 'Ch 17 · Aaron’s Budding Almond Staff' },
                  { id: 'NUM-21', label: 'Ch 21 · The Bronze Serpent' },
                  { id: 'NUM-22', label: 'Ch 22 · Balaam & His Talking Donkey' },
                  { id: 'NUM-24', label: 'Ch 24 · Star Out of Jacob Prophecy' },
                  { id: 'NUM-27', label: 'Ch 27 · Daughters of Zelophehad' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F4EDE3] text-[#785730] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#9F7A4D]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'DEU' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#7A6A9A]">All 34 Chapters of Deuteronomy</span>
                <span>959 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {deuteronomyChapterNumbers.map((num) => {
                  const id = `DEU-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = DEUTERONOMY_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Deuteronomy ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A6A9A] text-white border-[#7A6A9A] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A6A9A]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Deuteronomy Turning Points
                </div>
                {[
                  { id: 'DEU-5', label: 'Ch 5 · The Ten Words Renewed' },
                  { id: 'DEU-6', label: 'Ch 6 · The Shema: Love With All Your Heart' },
                  { id: 'DEU-8', label: 'Ch 8 · Not By Bread Alone' },
                  { id: 'DEU-15', label: 'Ch 15 · Seven-Year Debt Release & Open Hands' },
                  { id: 'DEU-30', label: 'Ch 30 · Choose Life! Covenant Renewal' },
                  { id: 'DEU-31', label: 'Ch 31 · Be Strong & Courageous (Joshua)' },
                  { id: 'DEU-34', label: 'Ch 34 · Mount Nebo & Moses’s Farewell' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EFEBF5] text-[#4E3E6E] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A6A9A]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'JOS' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#6E8B74]">All 24 Chapters of Joshua</span>
                <span>658 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {joshuaChapterNumbers.map((num) => {
                  const id = `JOS-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = JOSHUA_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Joshua ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#6E8B74] text-white border-[#6E8B74] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#6E8B74]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Joshua Turning Points
                </div>
                {[
                  { id: 'JOS-1', label: 'Ch 1 · "Be Strong & Courageous"' },
                  { id: 'JOS-2', label: 'Ch 2 · Rahab & the Scarlet Cord' },
                  { id: 'JOS-4', label: 'Ch 4 · Twelve Stones at Gilgal' },
                  { id: 'JOS-6', label: 'Ch 6 · The Walls of Jericho' },
                  { id: 'JOS-14', label: 'Ch 14 · Caleb at 85 ("Give Me This Mountain")' },
                  { id: 'JOS-20', label: 'Ch 20 · Six Cities of Refuge' },
                  { id: 'JOS-24', label: 'Ch 24 · "As for Me & My House"' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#285842] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#6E8B74]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'JDG' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#B07456]">All 21 Chapters of Judges</span>
                <span>618 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {judgesChapterNumbers.map((num) => {
                  const id = `JDG-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = JUDGES_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Judges ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#B07456] text-white border-[#B07456] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#B07456]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Judges Turning Points
                </div>
                {[
                  { id: 'JDG-2', label: 'Ch 2 · The Cycle of Cry & Rescue' },
                  { id: 'JDG-4', label: 'Ch 4 · Deborah & Barak at Mount Tabor' },
                  { id: 'JDG-5', label: 'Ch 5 · Song of Deborah & Barak' },
                  { id: 'JDG-6', label: 'Ch 6 · Gideon: "Mighty Man of Valor"' },
                  { id: 'JDG-7', label: 'Ch 7 · 300 Soldiers, Jars & Torches' },
                  { id: 'JDG-13', label: 'Ch 13 · Samson’s Nazirite Promise' },
                  { id: 'JDG-16', label: 'Ch 16 · Samson’s Final Prayer' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#B07456]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'RUT' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#C88A6B]">All 4 Chapters of Ruth</span>
                <span>85 Verses</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {ruthChapterNumbers.map((num) => {
                  const id = `RUT-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = RUTH_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Ruth ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Ruth’s 4-Chapter Arc
                </div>
                {[
                  { id: 'RUT-1', label: 'Ch 1 · Loyal Love & Faith ("Where You Go...")' },
                  { id: 'RUT-2', label: 'Ch 2 · Grace in Boaz’s Barley Fields' },
                  { id: 'RUT-3', label: 'Ch 3 · Kinsman-Redeemer at Midnight' },
                  { id: 'RUT-4', label: 'Ch 4 · Redemption & King David’s Family' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === '1SA' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#5A7D63]">All 31 Chapters of 1 Samuel</span>
                <span>810 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {firstSamuelChapterNumbers.map((num) => {
                  const id = `1SA-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = FIRST_SAMUEL_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `1 Samuel ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#5A7D63] text-white border-[#5A7D63] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#5A7D63]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key 1 Samuel Turning Points
                </div>
                {[
                  { id: '1SA-1', label: 'Ch 1 · Hannah’s Honest Prayer at Shiloh' },
                  { id: '1SA-3', label: 'Ch 3 · "Speak, Lord, Your Servant Listens"' },
                  { id: '1SA-7', label: 'Ch 7 · Ebenezer ("Stone of Help")' },
                  { id: '1SA-16', label: 'Ch 16 · David Anointed ("God Looks on the Heart")' },
                  { id: '1SA-17', label: 'Ch 17 · David & Goliath in the Valley of Elah' },
                  { id: '1SA-24', label: 'Ch 24 · Mercy in the Cave of En Gedi' },
                  { id: '1SA-25', label: 'Ch 25 · Abigail’s Wise Peacemaking' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#285842] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#5A7D63]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === '2SA' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span className="font-semibold text-[#C88A6B]">All 24 Chapters of 2 Samuel</span>
                <span>695 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {secondSamuelChapterNumbers.map((num) => {
                  const id = `2SA-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = SECOND_SAMUEL_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `2 Samuel ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key 2 Samuel Turning Points
                </div>
                {[
                  { id: '2SA-1', label: 'Ch 1 · Lament for Saul & Jonathan' },
                  { id: '2SA-6', label: 'Ch 6 · Dancing Before the Ark in Jerusalem' },
                  { id: '2SA-7', label: 'Ch 7 · The Davidic Covenant' },
                  { id: '2SA-9', label: 'Ch 9 · Kindness to Mephibosheth' },
                  { id: '2SA-12', label: 'Ch 12 · Nathan’s Parable & Honest Mercy' },
                  { id: '2SA-22', label: 'Ch 22 · David’s Song of Deliverance' },
                  { id: '2SA-24', label: 'Ch 24 · Araunah’s Threshing Floor' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === '1KI' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>22 Chapters · Full WEB Text</span>
                <span>816 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {firstKingsChapterNumbers.map((num) => {
                  const id = `1KI-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = FIRST_KINGS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `1 Kings ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key 1 Kings Turning Points
                </div>
                {[
                  { id: '1KI-3', label: 'Ch 3 · Solomon Asks for a Listening Heart' },
                  { id: '1KI-8', label: 'Ch 8 · Dedicating the Jerusalem Temple' },
                  { id: '1KI-10', label: 'Ch 10 · Queen of Sheba Visits' },
                  { id: '1KI-12', label: 'Ch 12 · The Kingdom Splits in Two' },
                  { id: '1KI-17', label: 'Ch 17 · Ravens & Widow’s Flour Jar' },
                  { id: '1KI-18', label: 'Ch 18 · Fire on Mount Carmel' },
                  { id: '1KI-19', label: 'Ch 19 · Gentle Whisper at Horeb' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === '2KI' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>25 Chapters · Full WEB Text</span>
                <span>719 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {secondKingsChapterNumbers.map((num) => {
                  const id = `2KI-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = SECOND_KINGS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `2 Kings ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key 2 Kings Turning Points
                </div>
                {[
                  { id: '2KI-2', label: 'Ch 2 · Chariot of Fire & Elijah’s Mantle' },
                  { id: '2KI-4', label: 'Ch 4 · Flowing Oil & Shunammite Compassion' },
                  { id: '2KI-5', label: 'Ch 5 · Little Servant Girl & Naaman Healed' },
                  { id: '2KI-6', label: 'Ch 6 · Chariots of Fire Around Dothan' },
                  { id: '2KI-19', label: 'Ch 19 · Hezekiah Spreads the Letter Before God' },
                  { id: '2KI-22', label: 'Ch 22 · Boy-King Josiah Finds the Torah Scroll' },
                  { id: '2KI-25', label: 'Ch 25 · Fall of Jerusalem & Promised Lamp' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === '1CH' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>29 Chapters · Full WEB Text</span>
                <span>942 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {firstChroniclesChapterNumbers.map((num) => {
                  const id = `1CH-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = FIRST_CHRONICLES_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `1 Chronicles ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key 1 Chronicles Turning Points
                </div>
                {[
                  { id: '1CH-4', label: 'Ch 4 · Humble Prayer of Jabez Inside Judah’s Tree' },
                  { id: '1CH-11', label: 'Ch 11 · David Crowned & Benaiah’s Lion in Snow' },
                  { id: '1CH-15', label: 'Ch 15 · Levites Carry the Ark With Trumpets' },
                  { id: '1CH-16', label: 'Ch 16 · “For His Lovingkindness Endures Forever!”' },
                  { id: '1CH-17', label: 'Ch 17 · Prophet Nathan & Eternal Covenant Promise' },
                  { id: '1CH-21', label: 'Ch 21 · Altar of Mercy on Ornan’s Threshing Floor' },
                  { id: '1CH-28', label: 'Ch 28 · Temple Blueprint Scroll & “Be Strong!”' },
                  { id: '1CH-29', label: 'Ch 29 · Cheerful Offerings & David’s Doxology' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === '2CH' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>36 Chapters · Full WEB Text</span>
                <span>822 Verses</span>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-4">
                {secondChroniclesChapterNumbers.map((num) => {
                  const id = `2CH-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = SECOND_CHRONICLES_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `2 Chronicles ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key 2 Chronicles Turning Points
                </div>
                {[
                  { id: '2CH-5', label: 'Ch 5 · Glory Cloud Fills Solomon’s Temple' },
                  { id: '2CH-7', label: 'Ch 7 · Fire & “If My People Humble Themselves”' },
                  { id: '2CH-14', label: 'Ch 14 · Asa’s Prayer: “None Besides You to Help”' },
                  { id: '2CH-20', label: 'Ch 20 · Choirs Leading the Army in Beracah' },
                  { id: '2CH-22', label: 'Ch 22 · Jehoshabeath Shelters Baby Joash' },
                  { id: '2CH-29', label: 'Ch 29 · Hezekiah Reopens Sealed Temple Doors' },
                  { id: '2CH-33', label: 'Ch 33 · Manasseh Humbled & Forgiven in Mercy' },
                  { id: '2CH-34', label: 'Ch 34 · Young Josiah Rediscovers Lost Torah Scroll' },
                  { id: '2CH-36', label: 'Ch 36 · Dawn Decree of Cyrus: “Let Him Go Up!”' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'EZR' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>10 Chapters · Full WEB Text</span>
                <span>280 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {ezraChapterNumbers.map((num) => {
                  const id = `EZR-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = EZRA_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Ezra ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Ezra Turning Points
                </div>
                {[
                  { id: 'EZR-1', label: 'Ch 1 · Cyrus’s Decree & Returned Gold Bowls' },
                  { id: 'EZR-3', label: 'Ch 3 · Altar Rebuilt & Tears Mingled With Joy' },
                  { id: 'EZR-6', label: 'Ch 6 · Found Scroll & Temple Completed' },
                  { id: 'EZR-7', label: 'Ch 7 · God’s Good Hand: Study, Live, Teach' },
                  { id: 'EZR-8', label: 'Ch 8 · Fasting by Ahava Canal for Safe Walk' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'NEH' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>13 Chapters · Full WEB Text</span>
                <span>406 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {nehemiahChapterNumbers.map((num) => {
                  const id = `NEH-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = NEHEMIAH_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Nehemiah ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Nehemiah Turning Points
                </div>
                {[
                  { id: 'NEH-1', label: 'Ch 1 · Broken Heart & Persistent Prayer at Susa' },
                  { id: 'NEH-2', label: 'Ch 2 · Arrow Prayer & Midnight Wall Inspection' },
                  { id: 'NEH-4', label: 'Ch 4 · Trowel in Hand & Spear Guarding by Night' },
                  { id: 'NEH-6', label: 'Ch 6 · “I Am Doing a Great Work”—52 Days Done' },
                  { id: 'NEH-8', label: 'Ch 8 · Water Gate Torah: “Joy Is Your Strength!”' },
                  { id: 'NEH-12', label: 'Ch 12 · Two Joyful Choirs Around City Walls' },
                  { id: 'NEH-13', label: 'Ch 13 · Sabbath Dusk Gates & “Remember Me, O God”' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'EST' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>10 Chapters · Full WEB Text</span>
                <span>167 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {estherChapterNumbers.map((num) => {
                  const id = `EST-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = ESTHER_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Esther ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Esther Turning Points
                </div>
                {[
                  { id: 'EST-2', label: 'Ch 2 · Hadassah Chosen & Mordecai at the Gate' },
                  { id: 'EST-4', label: 'Ch 4 · “For Such a Time as This” & Three-Day Fast' },
                  { id: 'EST-5', label: 'Ch 5 · Stepping Uninvited Before Golden Scepter' },
                  { id: 'EST-6', label: 'Ch 6 · Sleepless Night & Archive Reversal' },
                  { id: 'EST-7', label: 'Ch 7 · Queen’s Banquet Plea & Haman’s Fall' },
                  { id: 'EST-9', label: 'Ch 9 · Purim Gifts Shared With Friends & Poor' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'JOB' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>42 Chapters · Full WEB Text</span>
                <span>1,070 Verses</span>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-4">
                {jobChapterNumbers.map((num) => {
                  const id = `JOB-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = JOB_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Job ${num}`}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A9A82]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Job Turning Points
                </div>
                {[
                  { id: 'JOB-1', label: 'Ch 1 · Blameless Job & Sudden Loss in Uz' },
                  { id: 'JOB-2', label: 'Ch 2 · Ash Heap & Seven Days of Silent Friends' },
                  { id: 'JOB-19', label: 'Ch 19 · “I Know That My Redeemer Lives!”' },
                  { id: 'JOB-28', label: 'Ch 28 · Deep Silver Mines & True Wisdom' },
                  { id: 'JOB-38', label: 'Ch 38 · Yahweh Answers Out of the Whirlwind' },
                  { id: 'JOB-40', label: 'Ch 40 · Silent Hand Over Mouth & Behemoth' },
                  { id: 'JOB-42', label: 'Ch 42 · “Now My Eye Sees You” & Double Restoration' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#1F3A27] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A9A82]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'PSA' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>150 Psalms · Full WEB Text</span>
                <span>2,461 Verses</span>
              </div>

              <div className="grid grid-cols-6 gap-1.5 mb-4">
                {psalmsChapterNumbers.map((num) => {
                  const id = `PSA-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = PSALMS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Psalm ${num}`}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A9A82]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Psalms Across Books I–V
                </div>
                {[
                  { id: 'PSA-1', label: 'Ps 1 · Tree Planted by Streams of Water' },
                  { id: 'PSA-23', label: 'Ps 23 · The Lord Is My Shepherd' },
                  { id: 'PSA-46', label: 'Ps 46 · “Be Still & Know That I Am God”' },
                  { id: 'PSA-51', label: 'Ps 51 · Create in Me a Clean Heart' },
                  { id: 'PSA-73', label: 'Ps 73 · Steadied Inside the Sanctuary' },
                  { id: 'PSA-103', label: 'Ps 103 · As Far as East Is from West' },
                  { id: 'PSA-119', label: 'Ps 119 · Your Word Is a Lamp to My Feet' },
                  { id: 'PSA-139', label: 'Ps 139 · Fearfully & Wonderfully Made' },
                  { id: 'PSA-150', label: 'Ps 150 · Let Everything That Has Breath Praise!' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#1F3A27] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A9A82]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'PRO' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>31 Chapters · Full WEB Text</span>
                <span>915 Verses</span>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-4">
                {proverbsChapterNumbers.map((num) => {
                  const id = `PRO-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = PROVERBS_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Proverbs ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A9A82]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Proverbs Anchors
                </div>
                {[
                  { id: 'PRO-1', label: 'Ch 1 · Beginning of Knowledge & Reverence' },
                  { id: 'PRO-3', label: 'Ch 3 · Trust Yahweh With All Your Heart' },
                  { id: 'PRO-8', label: 'Ch 8 · Lady Wisdom Calling Before Creation' },
                  { id: 'PRO-15', label: 'Ch 15 · Gentle Answers Turn Away Wrath' },
                  { id: 'PRO-27', label: 'Ch 27 · Iron Sharpens Iron in Friendship' },
                  { id: 'PRO-30', label: 'Ch 30 · Agur’s Humble Prayer & Wise Creatures' },
                  { id: 'PRO-31', label: 'Ch 31 · Defend the Voiceless & Noble Hands' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#1F3A27] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A9A82]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'ECC' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>12 Chapters · Full WEB Text</span>
                <span>222 Verses</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {eccChapterNumbers.map((num) => {
                  const id = `ECC-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = ECCLESIASTES_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Ecclesiastes ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A9A82]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Ecclesiastes Anchors
                </div>
                {[
                  { id: 'ECC-1', label: 'Ch 1 · Vapor & Turning Streams' },
                  { id: 'ECC-3', label: 'Ch 3 · A Time for Every Season & Eternity' },
                  { id: 'ECC-4', label: 'Ch 4 · Two Are Better & Threefold Cord' },
                  { id: 'ECC-9', label: 'Ch 9 · Eat Bread Gladly & Quiet Helper' },
                  { id: 'ECC-12', label: 'Ch 12 · Remember Your Creator Early' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#1F3A27] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A9A82]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'SNG' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>8 Chapters · Full WEB Text</span>
                <span>117 Verses</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {sngChapterNumbers.map((num) => {
                  const id = `SNG-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = SONG_OF_SOLOMON_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Song of Solomon ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A9A82]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Song of Songs Moments
                </div>
                {[
                  { id: 'SNG-2', label: 'Ch 2 · Rose of Sharon & Winter Past' },
                  { id: 'SNG-4', label: 'Ch 4 · Enclosed Garden & Lebanon Streams' },
                  { id: 'SNG-6', label: 'Ch 6 · “I Am My Beloved’s, Beloved Is Mine”' },
                  { id: 'SNG-8', label: 'Ch 8 · Love Strong as Death & Yahweh’s Flame' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#1F3A27] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A9A82]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'ISA' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>66 Chapters · Full WEB Text</span>
                <span>1,292 Verses</span>
              </div>

              <div className="grid grid-cols-6 gap-1.5 mb-4">
                {isaiahChapterNumbers.map((num) => {
                  const id = `ISA-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = ISAIAH_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Isaiah ${num}`}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#7A9A82]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Isaiah Turning Points
                </div>
                {[
                  { id: 'ISA-6', label: 'Ch 6 · “Holy, Holy, Holy!”—Here Am I, Send Me' },
                  { id: 'ISA-9', label: 'Ch 9 · Great Light & “Prince of Peace” Born' },
                  { id: 'ISA-11', label: 'Ch 11 · Shoot From Jesse’s Stump & Peaceable Kingdom' },
                  { id: 'ISA-35', label: 'Ch 35 · Desert Blossoms & Highway of Holiness' },
                  { id: 'ISA-40', label: 'Ch 40 · “Comfort My People” & Mounting Like Eagles' },
                  { id: 'ISA-53', label: 'Ch 53 · Suffering Servant Pierced for Our Peace' },
                  { id: 'ISA-61', label: 'Ch 61 · Anointed to Bind Up Brokenhearted' },
                  { id: 'ISA-65', label: 'Ch 65 · New Heavens & New Earth' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#EBF2ED] text-[#4E6E56] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#7A9A82]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'DAN' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>12 Chapters · Full WEB Text</span>
                <span>357 Verses</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {danielChapterNumbers.map((num) => {
                  const id = `DAN-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = DANIEL_CHAPTERS[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Daniel ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8E2D7] space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76746E] px-1">
                  Key Daniel Turning Points
                </div>
                {[
                  { id: 'DAN-1', label: 'Ch 1 · Unshaken Conviction in Babylon’s Court' },
                  { id: 'DAN-2', label: 'Ch 2 · Statue Dream & Stone Cut Without Hands' },
                  { id: 'DAN-3', label: 'Ch 3 · Four Walking Inside the Fiery Furnace' },
                  { id: 'DAN-5', label: 'Ch 5 · Mysterious Writing on the Palace Wall' },
                  { id: 'DAN-6', label: 'Ch 6 · Open Windows & Peace in the Lions’ Den' },
                  { id: 'DAN-7', label: 'Ch 7 · Ancient of Days & One Like a Son of Man' },
                  { id: 'DAN-12', label: 'Ch 12 · Wise Shall Shine Like Brightness of Stars' },
                ].map((shortcut) => (
                  <button
                    key={shortcut.id}
                    onClick={() => handleSelect(shortcut.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentChapterId === shortcut.id
                        ? 'bg-[#F7EBE4] text-[#8F5338] font-semibold'
                        : 'bg-[#F3EFE6] hover:bg-[#EBE5DA] text-[#2C2C2A]'
                    }`}
                  >
                    <span>{shortcut.label}</span>
                    {currentChapterId === shortcut.id && (
                      <Check className="w-3.5 h-3.5 text-[#C88A6B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedBookTab === 'FEATURED' && (
            <div className="space-y-2.5">
              {/* Genesis 1–50 */}
              <button
                onClick={() => handleSelect('GEN-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('GEN-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Genesis 1–50
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7A9A82]/15 text-[#5A7D63]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Creation, Noah, Abraham, Jacob, and Joseph across all 50 chapters.
                  </p>
                </div>
                {currentChapterId.startsWith('GEN-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Exodus 1–40 */}
              <button
                onClick={() => handleSelect('EXO-16')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('EXO-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Exodus 1–40
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#C88A6B]/15 text-[#B07456]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Burning Bush, Passover, Red Sea, Manna, Sinai, and the Tabernacle.
                  </p>
                </div>
                {currentChapterId.startsWith('EXO-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Leviticus 1–27 */}
              <button
                onClick={() => handleSelect('LEV-19')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('LEV-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#5D7CA8]" /> Leviticus 1–27
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EBEFF7] text-[#354B74]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Day of Atonement, "Love Your Neighbor", Sacred Feasts, and Jubilee.
                  </p>
                </div>
                {currentChapterId.startsWith('LEV-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Numbers 1–36 */}
              <button
                onClick={() => handleSelect('NUM-13')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('NUM-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#9F7A4D]" /> Numbers 1–36
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F4EDE3] text-[#785730]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Priestly Blessing, Twelve Spies, Bronze Serpent, Balaam, and Zelophehad’s daughters.
                  </p>
                </div>
                {currentChapterId.startsWith('NUM-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Deuteronomy 1–34 */}
              <button
                onClick={() => handleSelect('DEU-6')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('DEU-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A6A9A]" /> Deuteronomy 1–34
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EFEBF5] text-[#4E3E6E]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    The Shema, Not By Bread Alone, Choose Life, Joshua’s Commission, and Mount Nebo.
                  </p>
                </div>
                {currentChapterId.startsWith('DEU-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Joshua 1–24 */}
              <button
                onClick={() => handleSelect('JOS-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('JOS-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#6E8B74]" /> Joshua 1–24
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#285842]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Crossing Jordan, Rahab’s Scarlet Cord, Jericho’s Walls, Caleb at 85, and Shechem.
                  </p>
                </div>
                {currentChapterId.startsWith('JOS-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Judges 1–21 */}
              <button
                onClick={() => handleSelect('JDG-6')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('JDG-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#B07456]" /> Judges 1–21
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Deborah’s Victory Song, Gideon’s 300 Torches, and Samson’s Nazirite Prayer.
                  </p>
                </div>
                {currentChapterId.startsWith('JDG-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Ruth 1–4 */}
              <button
                onClick={() => handleSelect('RUT-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('RUT-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Ruth 1–4
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#C88A6B]/15 text-[#B07456]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Loyal love, barley fields with Boaz, redemption at the gate, and David’s family line.
                  </p>
                </div>
                {currentChapterId.startsWith('RUT-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* 1 Samuel 1–31 */}
              <button
                onClick={() => handleSelect('1SA-16')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('1SA-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#5A7D63]" /> 1 Samuel 1–31
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#285842]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Hannah, Samuel’s call, King Saul, David & Goliath, Jonathan, and Abigail.
                  </p>
                </div>
                {currentChapterId.startsWith('1SA-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* 2 Samuel 1–24 */}
              <button
                onClick={() => handleSelect('2SA-7')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('2SA-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> 2 Samuel 1–24
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Ark in Jerusalem, Davidic Covenant, Mephibosheth, Nathan’s Parable, and Temple site.
                  </p>
                </div>
                {currentChapterId.startsWith('2SA-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* 1 Kings 1–22 */}
              <button
                onClick={() => handleSelect('1KI-3')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('1KI-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> 1 Kings 1–22
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7A9A82]/15 text-[#5A7D63]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Solomon’s Temple & wisdom, divided kingdom, Mount Carmel fire, and Horeb’s gentle whisper.
                  </p>
                </div>
                {currentChapterId.startsWith('1KI-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* 2 Kings 1–25 */}
              <button
                onClick={() => handleSelect('2KI-6')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('2KI-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> 2 Kings 1–25
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Elisha’s miracles, Naaman’s healing, Hezekiah’s prayer, Josiah’s Torah reform, and exile.
                  </p>
                </div>
                {currentChapterId.startsWith('2KI-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* 1 Chronicles 1–29 */}
              <button
                onClick={() => handleSelect('1CH-16')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('1CH-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> 1 Chronicles 1–29
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Prayer of Jabez, Ark thanksgiving praise, Ornan’s threshing floor, and cheerful Temple giving.
                  </p>
                </div>
                {currentChapterId.startsWith('1CH-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* 2 Chronicles 1–36 */}
              <button
                onClick={() => handleSelect('2CH-20')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('2CH-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> 2 Chronicles 1–36
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Temple fire (7:14), Jehoshaphat’s battle choirs, Joash rescued, Manasseh forgiven, and Josiah’s Torah scroll.
                  </p>
                </div>
                {currentChapterId.startsWith('2CH-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Ezra 1–10 */}
              <button
                onClick={() => handleSelect('EZR-7')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('EZR-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Ezra 1–10
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Cyrus’s decree, rebuilt altar, prayer at Ahava canal, and God’s good hand in Torah.
                  </p>
                </div>
                {currentChapterId.startsWith('EZR-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Nehemiah 1–13 */}
              <button
                onClick={() => handleSelect('NEH-8')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('NEH-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Nehemiah 1–13
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Arrow prayer in Susa, 52-day wall builders, Water Gate Torah joy, and choirs on walls.
                  </p>
                </div>
                {currentChapterId.startsWith('NEH-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Esther 1–10 */}
              <button
                onClick={() => handleSelect('EST-4')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('EST-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Esther 1–10
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Three-day fast, golden scepter courage, sleepless royal chronicles, and Purim generosity.
                  </p>
                </div>
                {currentChapterId.startsWith('EST-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Job 1–42 */}
              <button
                onClick={() => handleSelect('JOB-38')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('JOB-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Job 1–42
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7A9A82]/15 text-[#5A7D63]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Honest lament in Uz, “My Redeemer lives,” mines of wisdom, and Yahweh out of the whirlwind.
                  </p>
                </div>
                {currentChapterId.startsWith('JOB-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Psalms 1–150 */}
              <button
                onClick={() => handleSelect('PSA-23')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('PSA-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Psalms 1–150
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7A9A82]/15 text-[#5A7D63]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Israel’s prayerbook and hymnal: green pastures (23), clean heart (51), and Hallelujah (150).
                  </p>
                </div>
                {currentChapterId.startsWith('PSA-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Proverbs 1–31 */}
              <button
                onClick={() => handleSelect('PRO-3')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('PRO-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Proverbs 1–31
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7A9A82]/15 text-[#5A7D63]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Skillful everyday living: Trust (3:5), Lady Wisdom (8), Gentle answers (15:1), and Proverbs 31.
                  </p>
                </div>
                {currentChapterId.startsWith('PRO-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Ecclesiastes 1–12 */}
              <button
                onClick={() => handleSelect('ECC-3')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('ECC-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Ecclesiastes 1–12
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7A9A82]/15 text-[#5A7D63]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Every season under heaven (3), threefold cord (4:12), and remembering your Creator (12).
                  </p>
                </div>
                {currentChapterId.startsWith('ECC-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Song of Solomon 1–8 */}
              <button
                onClick={() => handleSelect('SNG-2')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('SNG-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Song of Solomon 1–8
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7A9A82]/15 text-[#5A7D63]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Spring awakening after winter rains (2:11) and unquenchable love strong as death (8:6).
                  </p>
                </div>
                {currentChapterId.startsWith('SNG-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Isaiah 1–66 */}
              <button
                onClick={() => handleSelect('ISA-40')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('ISA-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Isaiah 1–66
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#4E6E56]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Throne room call, Prince of Peace, “Comfort My People,” and the Suffering Servant.
                  </p>
                </div>
                {currentChapterId.startsWith('ISA-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Daniel 1–12 */}
              <button
                onClick={() => handleSelect('DAN-6')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('DAN-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Daniel 1–12
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Fiery furnace courage, lions’ den prayer, and eternal Son of Man Kingdom visions.
                  </p>
                </div>
                {currentChapterId.startsWith('DAN-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
