import React, { useState } from 'react';
import { X, Check, Sparkles, BookOpen } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { useBookChapters } from '../../data/bookLoader';

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
    'GEN' | 'EXO' | 'LEV' | 'NUM' | 'DEU' | 'JOS' | 'JDG' | 'RUT' | '1SA' | '2SA' | '1KI' | '2KI' | '1CH' | '2CH' | 'EZR' | 'NEH' | 'EST' | 'JOB' | 'PSA' | 'PRO' | 'ECC' | 'SNG' | 'ISA' | 'JER' | 'LAM' | 'EZK' | 'DAN' | 'HOS' | 'JOL' | 'AMO' | 'OBA' | 'JON' | 'MIC' | 'NAM' | 'HAB' | 'ZEP' | 'HAG' | 'ZEC' | 'MAL' | 'MAT' | 'MRK' | 'LUK' | 'JHN' | 'ACT' | 'FEATURED'
  >(
    currentChapterId.startsWith('ACT-')
      ? 'ACT'
      : currentChapterId.startsWith('JHN-')
      ? 'JHN'
      : currentChapterId.startsWith('LUK-')
      ? 'LUK'
      : currentChapterId.startsWith('MRK-')
      ? 'MRK'
      : currentChapterId.startsWith('MAT-')
      ? 'MAT'
      : currentChapterId.startsWith('MAL-')
      ? 'MAL'
      : currentChapterId.startsWith('ZEC-')
      ? 'ZEC'
      : currentChapterId.startsWith('HAG-')
      ? 'HAG'
      : currentChapterId.startsWith('ZEP-')
      ? 'ZEP'
      : currentChapterId.startsWith('HAB-')
      ? 'HAB'
      : currentChapterId.startsWith('NAM-')
      ? 'NAM'
      : currentChapterId.startsWith('MIC-')
      ? 'MIC'
      : currentChapterId.startsWith('JON-')
      ? 'JON'
      : currentChapterId.startsWith('OBA-')
      ? 'OBA'
      : currentChapterId.startsWith('AMO-')
      ? 'AMO'
      : currentChapterId.startsWith('JOL-')
      ? 'JOL'
      : currentChapterId.startsWith('HOS-')
      ? 'HOS'
      : currentChapterId.startsWith('DAN-')
      ? 'DAN'
      : currentChapterId.startsWith('EZK-')
      ? 'EZK'
      : currentChapterId.startsWith('LAM-')
      ? 'LAM'
      : currentChapterId.startsWith('JER-')
      ? 'JER'
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

  const { bookChapters } = useBookChapters(
    showChapterPicker && selectedBookTab !== 'FEATURED' ? selectedBookTab : ''
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
  const jeremiahChapterNumbers = Array.from({ length: 52 }, (_, i) => i + 1);
  const lamChapterNumbers = Array.from({ length: 5 }, (_, i) => i + 1);
  const ezekielChapterNumbers = Array.from({ length: 48 }, (_, i) => i + 1);
  const danielChapterNumbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const hoseaChapterNumbers = Array.from({ length: 14 }, (_, i) => i + 1);
  const joelChapterNumbers = Array.from({ length: 3 }, (_, i) => i + 1);
  const amosChapterNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
  const obadiahChapterNumbers = [1];
  const jonahChapterNumbers = Array.from({ length: 4 }, (_, i) => i + 1);
  const micahChapterNumbers = Array.from({ length: 7 }, (_, i) => i + 1);
  const nahumChapterNumbers = Array.from({ length: 3 }, (_, i) => i + 1);
  const habakkukChapterNumbers = Array.from({ length: 3 }, (_, i) => i + 1);
  const zephaniahChapterNumbers = Array.from({ length: 3 }, (_, i) => i + 1);
  const haggaiChapterNumbers = Array.from({ length: 2 }, (_, i) => i + 1);
  const zechariahChapterNumbers = Array.from({ length: 14 }, (_, i) => i + 1);
  const malachiChapterNumbers = Array.from({ length: 4 }, (_, i) => i + 1);
  const matthewChapterNumbers = Array.from({ length: 28 }, (_, i) => i + 1);
  const markChapterNumbers = Array.from({ length: 16 }, (_, i) => i + 1);
  const lukeChapterNumbers = Array.from({ length: 24 }, (_, i) => i + 1);
  const johnChapterNumbers = Array.from({ length: 21 }, (_, i) => i + 1);
  const actsChapterNumbers = Array.from({ length: 28 }, (_, i) => i + 1);

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
              Full OT (39) + Gospels (4) + Acts (28) & Featured
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
            onClick={() => setSelectedBookTab('JER')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'JER'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Jer (52)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('LAM')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'LAM'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Lam (5)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('EZK')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'EZK'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Ezk (48)</span>
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
            onClick={() => setSelectedBookTab('HOS')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'HOS'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Hos (14)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('JOL')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'JOL'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Jol (3)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('AMO')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'AMO'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Amo (9)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('OBA')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'OBA'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Oba (1)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('JON')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'JON'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Jon (4)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('MIC')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'MIC'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Mic (7)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('NAM')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'NAM'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Nam (3)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('HAB')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'HAB'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Hab (3)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('ZEP')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'ZEP'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Zep (3)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('HAG')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'HAG'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Hag (2)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('ZEC')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'ZEC'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Zec (14)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('MAL')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'MAL'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Mal (4)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('MAT')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'MAT'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Mat (28)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('MRK')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'MRK'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Mrk (16)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('LUK')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'LUK'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Luk (24)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('JHN')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'JHN'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Jhn (21)</span>
          </button>

          <button
            onClick={() => setSelectedBookTab('ACT')}
            className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all cursor-pointer ${
              selectedBookTab === 'ACT'
                ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
                : 'text-[#76746E] hover:text-[#2C2C2A]'
            }`}
          >
            <span>Act (28)</span>
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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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
                  const chapInfo = bookChapters?.[id];

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

          {selectedBookTab === 'JER' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>52 Chapters · Full WEB Text</span>
                <span>1,364 Verses</span>
              </div>

              <div className="grid grid-cols-6 gap-1.5 mb-4">
                {jeremiahChapterNumbers.map((num) => {
                  const id = `JER-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Jeremiah ${num}`}
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
                  Key Jeremiah Turning Points
                </div>
                {[
                  { id: 'JER-1', label: 'Ch 1 · Almond Branch & “Before I Formed You”' },
                  { id: 'JER-18', label: 'Ch 18 · Potter’s Wheel & Wet Clay' },
                  { id: 'JER-29', label: 'Ch 29 · Seek Peace of City & Hopeful Plans (29:11)' },
                  { id: 'JER-31', label: 'Ch 31 · Everlasting Love & New Covenant on Hearts' },
                  { id: 'JER-36', label: 'Ch 36 · Burned Scroll Rewritten by Baruch' },
                  { id: 'JER-38', label: 'Ch 38 · Soft Rags Rescue From Cistern' },
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

          {selectedBookTab === 'LAM' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>5 Chapters · Full WEB Text</span>
                <span>154 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {lamChapterNumbers.map((num) => {
                  const id = `LAM-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Lamentations ${num}`}
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
                  Key Lamentations Anchors
                </div>
                {[
                  { id: 'LAM-1', label: 'Ch 1 · Solitary City Weeping Honestly' },
                  { id: 'LAM-3', label: 'Ch 3 · “Great Is Your Faithfulness” Every Morning' },
                  { id: 'LAM-5', label: 'Ch 5 · Renew Our Days as of Old' },
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

          {selectedBookTab === 'EZK' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>48 Chapters · Full WEB Text</span>
                <span>1,273 Verses</span>
              </div>

              <div className="grid grid-cols-6 gap-1.5 mb-4">
                {ezekielChapterNumbers.map((num) => {
                  const id = `EZK-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Ezekiel ${num}`}
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
                  Key Ezekiel Visions
                </div>
                {[
                  { id: 'EZK-1', label: 'Ch 1 · Sapphire Whirlwind & Wheels at Kebar River' },
                  { id: 'EZK-18', label: 'Ch 18 · “Why Will You Die? Turn and Live!”' },
                  { id: 'EZK-34', label: 'Ch 34 · God Himself the Good Shepherd' },
                  { id: 'EZK-36', label: 'Ch 36 · Heart of Stone Replaced With New Spirit' },
                  { id: 'EZK-37', label: 'Ch 37 · Valley of Dry Bones Breathing Alive!' },
                  { id: 'EZK-47', label: 'Ch 47 · Crystal Healing River to Dead Sea' },
                  { id: 'EZK-48', label: 'Ch 48 · Yahweh Shammah (“The Lord Is There”)' },
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
                  const chapInfo = bookChapters?.[id];

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

          {selectedBookTab === 'HOS' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>14 Chapters · Full WEB Text</span>
                <span>197 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {hoseaChapterNumbers.map((num) => {
                  const id = `HOS-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Hosea ${num}`}
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
                  Key Hosea Turning Points
                </div>
                {[
                  { id: 'HOS-2', label: 'Ch 2 · Valley of Achor Turned Into Door of Hope' },
                  { id: 'HOS-6', label: 'Ch 6 · Mercy Not Sacrifice & Sure as Dawn' },
                  { id: 'HOS-11', label: 'Ch 11 · Cords of Loving Compassion Over Ephraim' },
                  { id: 'HOS-14', label: 'Ch 14 · Healing Backsliding & Blossom Like Lily' },
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

          {selectedBookTab === 'JOL' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>3 Chapters · Full WEB Text</span>
                <span>73 Verses</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {joelChapterNumbers.map((num) => {
                  const id = `JOL-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Joel ${num}`}
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
                  Key Joel Moments
                </div>
                {[
                  { id: 'JOL-1', label: 'Ch 1 · Locust Plague Awakening Judah to Prayer' },
                  { id: 'JOL-2', label: 'Ch 2 · Rend Your Hearts & Spirit Poured on All' },
                  { id: 'JOL-3', label: 'Ch 3 · Valley of Decision & Spring from Zion' },
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

          {selectedBookTab === 'AMO' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>9 Chapters · Full WEB Text</span>
                <span>146 Verses</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {amosChapterNumbers.map((num) => {
                  const id = `AMO-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Amos ${num}`}
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
                  Key Amos Turning Points
                </div>
                {[
                  { id: 'AMO-3', label: 'Ch 3 · The Lion Has Roared — Who Will Not Prophesy?' },
                  { id: 'AMO-5', label: 'Ch 5 · Let Justice Roll Down Like Mighty Waters' },
                  { id: 'AMO-7', label: 'Ch 7 · Vision of the Plumb Line at Bethel' },
                  { id: 'AMO-9', label: 'Ch 9 · Raising Up David’s Fallen Booth Forever' },
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

          {selectedBookTab === 'OBA' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>1 Chapter · Full WEB Text</span>
                <span>21 Verses</span>
              </div>

              <div className="grid grid-cols-1 gap-2 mb-4">
                {obadiahChapterNumbers.map((num) => {
                  const id = `OBA-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Obadiah ${num}`}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C88A6B] text-white border-[#C88A6B] shadow-xs'
                          : 'bg-[#F3EFE6] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA] hover:border-[#C88A6B]/50'
                      }`}
                    >
                      Chapter 1 · Whole Book (21 Verses)
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {selectedBookTab === 'JON' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>4 Chapters · Full WEB Text</span>
                <span>48 Verses</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {jonahChapterNumbers.map((num) => {
                  const id = `JON-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Jonah ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'MIC' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>7 Chapters · Full WEB Text</span>
                <span>105 Verses</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {micahChapterNumbers.map((num) => {
                  const id = `MIC-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Micah ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'NAM' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>3 Chapters · Full WEB Text</span>
                <span>47 Verses</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {nahumChapterNumbers.map((num) => {
                  const id = `NAM-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Nahum ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'HAB' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>3 Chapters · Full WEB Text</span>
                <span>56 Verses</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {habakkukChapterNumbers.map((num) => {
                  const id = `HAB-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Habakkuk ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'ZEP' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>3 Chapters · Full WEB Text</span>
                <span>53 Verses</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {zephaniahChapterNumbers.map((num) => {
                  const id = `ZEP-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Zephaniah ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'HAG' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>2 Chapters · Full WEB Text</span>
                <span>38 Verses</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {haggaiChapterNumbers.map((num) => {
                  const id = `HAG-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Haggai ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'ZEC' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>14 Chapters · Full WEB Text</span>
                <span>211 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {zechariahChapterNumbers.map((num) => {
                  const id = `ZEC-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Zechariah ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'MAL' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>4 Chapters · Full WEB Text</span>
                <span>55 Verses</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {malachiChapterNumbers.map((num) => {
                  const id = `MAL-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Malachi ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'MAT' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>28 Chapters · Full WEB Text</span>
                <span>1,071 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {matthewChapterNumbers.map((num) => {
                  const id = `MAT-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Matthew ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'MRK' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>16 Chapters · Full WEB Text</span>
                <span>678 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {markChapterNumbers.map((num) => {
                  const id = `MRK-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Mark ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'LUK' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>24 Chapters · Full WEB Text</span>
                <span>1,151 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {lukeChapterNumbers.map((num) => {
                  const id = `LUK-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Luke ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'JHN' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>21 Chapters · Full WEB Text</span>
                <span>879 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {johnChapterNumbers.map((num) => {
                  const id = `JHN-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `John ${num}`}
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
            </div>
          )}

          {selectedBookTab === 'ACT' && (
            <div>
              <div className="flex items-center justify-between text-xs text-[#76746E] mb-2 px-1">
                <span>28 Chapters · Full WEB Text</span>
                <span>1,007 Verses</span>
              </div>

              <div className="grid grid-cols-5 gap-2 mb-4">
                {actsChapterNumbers.map((num) => {
                  const id = `ACT-${num}`;
                  const isActive = currentChapterId === id;
                  const chapInfo = bookChapters?.[id];

                  return (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      title={chapInfo?.title || `Acts ${num}`}
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

              {/* Jeremiah 1–52 */}
              <button
                onClick={() => handleSelect('JER-31')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('JER-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Jeremiah 1–52
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#4E6E56]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Potter’s wheel, letter to exiles (29:11), muddy cistern rescue, and New Covenant on hearts.
                  </p>
                </div>
                {currentChapterId.startsWith('JER-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Lamentations 1–5 */}
              <button
                onClick={() => handleSelect('LAM-3')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('LAM-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Lamentations 1–5
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#4E6E56]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Honest acrostic poems of grief discovering compassions made brand-new every morning.
                  </p>
                </div>
                {currentChapterId.startsWith('LAM-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Ezekiel 1–48 */}
              <button
                onClick={() => handleSelect('EZK-37')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('EZK-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" /> Ezekiel 1–48
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#4E6E56]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Sapphire chariot wheels, new heart of flesh, dry bones alive, and crystal healing river.
                  </p>
                </div>
                {currentChapterId.startsWith('EZK-') && (
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

              {/* Hosea–Obadiah */}
              <button
                onClick={() => handleSelect('HOS-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('HOS-') || currentChapterId.startsWith('JOL-') || currentChapterId.startsWith('AMO-') || currentChapterId.startsWith('OBA-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Hosea–Obadiah
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Books
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Unfailing love in Hosea, Spirit outpouring in Joel, rolling justice in Amos & Obadiah.
                  </p>
                </div>
                {(currentChapterId.startsWith('HOS-') || currentChapterId.startsWith('JOL-') || currentChapterId.startsWith('AMO-') || currentChapterId.startsWith('OBA-')) && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Jonah–Habakkuk */}
              <button
                onClick={() => handleSelect('JON-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('JON-') || currentChapterId.startsWith('MIC-') || currentChapterId.startsWith('NAM-') || currentChapterId.startsWith('HAB-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Jonah–Habakkuk
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Books
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Mercy to Nineveh in Jonah, justice & Bethlehem in Micah, Nineveh’s fall in Nahum, living by faith in Habakkuk.
                  </p>
                </div>
                {(currentChapterId.startsWith('JON-') || currentChapterId.startsWith('MIC-') || currentChapterId.startsWith('NAM-') || currentChapterId.startsWith('HAB-')) && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Zephaniah–Malachi */}
              <button
                onClick={() => handleSelect('ZEP-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('ZEP-') || currentChapterId.startsWith('HAG-') || currentChapterId.startsWith('ZEC-') || currentChapterId.startsWith('MAL-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Zephaniah–Malachi
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Books
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    God singing over Zion in Zephaniah, temple rebuilding in Haggai & Zechariah, Sun of Righteousness in Malachi.
                  </p>
                </div>
                {(currentChapterId.startsWith('ZEP-') || currentChapterId.startsWith('HAG-') || currentChapterId.startsWith('ZEC-') || currentChapterId.startsWith('MAL-')) && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Matthew (Gospel of the Kingdom) */}
              <button
                onClick={() => handleSelect('MAT-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('MAT-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Matthew 1–28
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Immanuel’s birth, Sermon on the Mount, parables of the Kingdom, cross & Great Commission.
                  </p>
                </div>
                {currentChapterId.startsWith('MAT-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Mark (Servant-King Gospel) */}
              <button
                onClick={() => handleSelect('MRK-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('MRK-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Mark 1–16
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Fast-moving Servant-King, calmed storms, Bartimaeus, broken alabaster jar & empty dawn tomb.
                  </p>
                </div>
                {currentChapterId.startsWith('MRK-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Luke (Savior of the World) */}
              <button
                onClick={() => handleSelect('LUK-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('LUK-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Luke 1–24
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Bethlehem shepherds, Good Samaritan, Prodigal Son, Zacchaeus & the Road to Emmaus.
                  </p>
                </div>
                {currentChapterId.startsWith('LUK-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* John (Gospel of the Word Made Flesh) */}
              <button
                onClick={() => handleSelect('JHN-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('JHN-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> John 1–21
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Eternal Word, Nicodemus by night, Samaritan well, Lazarus raised, True Vine & Thomas’s confession.
                  </p>
                </div>
                {currentChapterId.startsWith('JHN-') && (
                  <Check className="w-5 h-5 text-[#7A9A82] flex-shrink-0 ml-2" />
                )}
              </button>

              {/* Acts (The Early Church & Global Mission) */}
              <button
                onClick={() => handleSelect('ACT-1')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  currentChapterId.startsWith('ACT-')
                    ? 'bg-[#EBF2ED] border-[#7A9A82] shadow-sm'
                    : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#2C2C2A] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C88A6B]" /> Acts 1–28
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F7EBE4] text-[#8F5338]">
                      Full Book
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6862] mt-0.5">
                    Pentecost fire, Stephen, Damascus road, Antioch, Mars Hill & Paul’s unhindered witness to Rome.
                  </p>
                </div>
                {currentChapterId.startsWith('ACT-') && (
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
