import React, { useRef, useState } from 'react';
import {
  Layers,
  Bookmark,
  Award,
  Flame,
  BookOpen,
  CheckCircle,
  PenLine,
  Download,
  Upload,
  FileText,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { PICKER_BOOK_MAP, type BibleBookId } from '../../data/bookGroups';
import { FlashcardDeck } from './FlashcardDeck';
import { NotesManager } from './NotesManager';
import { JournalTimeline } from './JournalTimeline';

function triggerDownload(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export const LibraryScreen: React.FC = () => {
  const {
    progress,
    notes,
    flashcards,
    journalEntries,
    favoriteHymns,
    clearAllStudyData,
    navigateToPassage,
    exportStudyBackup,
    importStudyBackup,
    exportStudyMarkdown,
  } = useStudyStore();

  const [activeSubTab, setActiveSubTab] = useState<'journal' | 'flashcards' | 'notes' | 'bookmarks'>('journal');
  const [confirmClear, setConfirmClear] = useState(false);
  const [restoreMode, setRestoreMode] = useState<'merge' | 'replace'>('merge');
  const [backupStatus, setBackupStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDownloadBackup = () => {
    const backup = exportStudyBackup();
    const stamp = new Date().toISOString().split('T')[0];
    triggerDownload(
      `selah-study-backup-${stamp}.json`,
      JSON.stringify(backup, null, 2),
      'application/json'
    );
    setBackupStatus({
      ok: true,
      message: `Saved backup (${notes.length} notes, ${journalEntries.length} journal, ${flashcards.length} cards, ${favoriteHymns.length} hymns).`,
    });
  };

  const handleDownloadMarkdown = async () => {
    const md = await exportStudyMarkdown();
    const stamp = new Date().toISOString().split('T')[0];
    triggerDownload(`selah-study-archive-${stamp}.md`, md, 'text/markdown;charset=utf-8');
    setBackupStatus({ ok: true, message: 'Exported Markdown study archive (.md).' });
  };

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const res = importStudyBackup(parsed, restoreMode);
      setBackupStatus({ ok: res.ok, message: res.summary });
    } catch {
      setBackupStatus({
        ok: false,
        message: 'Could not read that file. Please select a valid Selah JSON backup.',
      });
    }
  };

  // Calculate quiz accuracy
  const totalQuestions = progress.quizScores.reduce((acc, q) => acc + q.total, 0);
  const totalCorrect = progress.quizScores.reduce((acc, q) => acc + q.score, 0);
  const accuracyDisplay =
    progress.quizScores.length === 0 || totalQuestions === 0
      ? '—'
      : `${Math.round((totalCorrect / totalQuestions) * 100)}%`;

  const formatBookmarkTitle = (ref: string) => {
    const [chapPart, versePart] = ref.split(':');
    const [bookId, chapNum] = chapPart.split('-');
    const meta = PICKER_BOOK_MAP[bookId as BibleBookId];
    if (meta && chapNum) {
      return `${meta.title} ${chapNum}${versePart ? `:${versePart}` : ''}`;
    }
    return ref;
  };

  const handleJumpToBookmark = (ref: string) => {
    const [chapPart, versePart] = ref.split(':');
    if (chapPart.includes('-')) {
      navigateToPassage(chapPart, versePart ? parseInt(versePart, 10) : undefined);
      return;
    }
    navigateToPassage('GEN-1');
  };

  return (
    <div className="min-h-full pb-28 px-4 pt-6 max-w-xl mx-auto bg-[#FAF7F2] text-[#2C2C2A]">
      {/* Header */}
      <header className="mb-5">
        <h1 className="text-2xl font-serif font-bold text-[#2C2C2A]">
          Study Library & Retention
        </h1>
        <p className="text-xs text-[#76746E] mt-0.5">
          Smart journal reflections, spaced-repetition flashcards, notes, and prayer list.
        </p>
      </header>

      {/* Progress & Metrics Dashboard Card */}
      <section className="mb-6">
        <div className="bg-[#F3EFE6] rounded-3xl p-5 border border-[#E5DFD5] shadow-xs">
          <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82] mb-3">
            Habit & Accuracy Metrics
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {/* Metric 1: Streak */}
            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E5DFD5] text-center">
              <Flame className="w-5 h-5 text-[#C88A6B] mx-auto mb-1 fill-[#C88A6B]" />
              <div className="text-base font-bold text-[#2C2C2A]">{progress.streakDays} Days</div>
              <div className="text-[0.625rem] text-[#76746E]">Current Streak</div>
            </div>

            {/* Metric 2: Quiz Accuracy */}
            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E5DFD5] text-center">
              <Award className="w-5 h-5 text-[#7A9A82] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2A]">{accuracyDisplay}</div>
              <div className="text-[0.625rem] text-[#76746E]">Quiz Accuracy</div>
            </div>

            {/* Metric 3: Verses Read */}
            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E5DFD5] text-center">
              <BookOpen className="w-5 h-5 text-[#5D7CA8] mx-auto mb-1" />
              <div className="text-base font-bold text-[#2C2C2A]">{progress.readVersesCount}</div>
              <div className="text-[0.625rem] text-[#76746E]">Verses Studied</div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Sub-Tab Switcher (stacks neatly like Explore on narrow/XL viewports) */}
      <div className="bg-[#F3EFE6] p-1 rounded-2xl border border-[#E5DFD5] grid grid-cols-4 gap-0.5 mb-5">
        <button
          onClick={() => setActiveSubTab('journal')}
          className={`py-2 px-1 rounded-xl text-[0.625rem] sm:text-[0.6875rem] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            activeSubTab === 'journal'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <PenLine className="w-3.5 h-3.5 text-[#7A9A82] flex-shrink-0" />
          <span className="whitespace-nowrap">Journal ({journalEntries.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('flashcards')}
          className={`py-2 px-1 rounded-xl text-[0.625rem] sm:text-[0.6875rem] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            activeSubTab === 'flashcards'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-[#7A9A82] flex-shrink-0" />
          <span className="whitespace-nowrap">Cards ({flashcards.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('notes')}
          className={`py-2 px-1 rounded-xl text-[0.625rem] sm:text-[0.6875rem] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            activeSubTab === 'notes'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 text-[#C88A6B] flex-shrink-0" />
          <span className="whitespace-nowrap">Notes ({notes.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('bookmarks')}
          className={`py-2 px-1 rounded-xl text-[0.625rem] sm:text-[0.6875rem] font-semibold flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
            activeSubTab === 'bookmarks'
              ? 'bg-[#FAF7F2] text-[#2C2C2A] shadow-xs'
              : 'text-[#76746E] hover:text-[#2C2C2A]'
          }`}
        >
          <CheckCircle className="w-3.5 h-3.5 text-[#5D7CA8] flex-shrink-0" />
          <span className="whitespace-nowrap">Saved ({progress.savedPassageBookmarks.length})</span>
        </button>
      </div>

      {/* Main SubTab Content */}
      <main className="animate-fade-in mb-8">
        {activeSubTab === 'journal' && <JournalTimeline />}
        {activeSubTab === 'flashcards' && <FlashcardDeck />}
        {activeSubTab === 'notes' && <NotesManager />}
        {activeSubTab === 'bookmarks' && (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#76746E] px-1">
              Bookmarked Verses
            </div>
            {progress.savedPassageBookmarks.length === 0 ? (
              <div className="bg-[#F3EFE6] rounded-3xl p-6 text-center border border-[#E5DFD5] text-xs text-[#76746E]">
                No verses bookmarked yet. Tap the bookmark icon while reading.
              </div>
            ) : (
              <div className="space-y-2">
                {progress.savedPassageBookmarks.map((ref) => (
                  <button
                    key={ref}
                    onClick={() => handleJumpToBookmark(ref)}
                    className="w-full text-left bg-[#FAF7F2] hover:bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5] flex items-center justify-between transition-colors group cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-serif font-bold text-[#2C2C2A] group-hover:text-[#7A9A82]">
                        {formatBookmarkTitle(ref)}
                      </div>
                      <div className="text-xs text-[#76746E] mt-0.5">
                        Saved reading bookmark
                      </div>
                    </div>
                    <span className="text-xs text-[#7A9A82] font-medium ml-2">Read →</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Backup & Export Archive Card */}
      <section className="mb-6 bg-[#F3EFE6] rounded-3xl p-4 sm:p-5 border border-[#E5DFD5] space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82]">
              Backup &amp; Export
            </div>
            <p className="text-xs text-[#666158] mt-0.5">
              Save your notes, journal, flashcards, reading plans, and {favoriteHymns.length} saved{' '}
              {favoriteHymns.length === 1 ? 'hymn' : 'hymns'} to keep across devices.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          <button
            onClick={handleDownloadBackup}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#24221E] hover:bg-[#3A3731] text-[#FAF7F2] text-xs font-semibold transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download JSON Backup</span>
          </button>

          <button
            onClick={handleDownloadMarkdown}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EFE9DC] border border-[#DED7CB] text-[#24221E] text-xs font-semibold transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#8B3A2B]" />
            <span>Export Study Archive (.md)</span>
          </button>
        </div>

        <div className="pt-2 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1 text-[0.6875rem] bg-[#FAF7F2] p-0.5 rounded-lg border border-[#E5DFD5]">
            <button
              onClick={() => setRestoreMode('merge')}
              className={`px-2 py-1 rounded-md font-semibold cursor-pointer ${
                restoreMode === 'merge' ? 'bg-[#7A9A82] text-white' : 'text-[#666158]'
              }`}
            >
              Merge
            </button>
            <button
              onClick={() => setRestoreMode('replace')}
              className={`px-2 py-1 rounded-md font-semibold cursor-pointer ${
                restoreMode === 'replace' ? 'bg-[#8B3A2B] text-white' : 'text-[#666158]'
              }`}
            >
              Replace
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleFileSelected}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EFE9DC] border border-[#DED7CB] text-xs font-semibold text-[#24221E] transition-colors cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5 text-[#7A9A82]" />
            <span>Import JSON ({restoreMode === 'merge' ? 'Merge' : 'Replace'})</span>
          </button>
        </div>

        {backupStatus && (
          <div
            className={`text-xs px-3 py-2 rounded-xl border ${
              backupStatus.ok
                ? 'bg-[#EBF2ED] border-[#C6DBC9] text-[#285842]'
                : 'bg-[#FAECE5] border-[#ECCDC0] text-[#8B3A2B]'
            }`}
          >
            {backupStatus.message}
          </div>
        )}
      </section>

      {/* Clean Slate Reset Section */}
      <footer className="pt-4 border-t border-[#E8E2D7] text-center space-y-3">
        {confirmClear ? (
          <div className="inline-flex items-center gap-2 bg-[#FAECE5] border border-[#ECCDC0] px-3 py-1.5 rounded-xl text-xs">
            <span className="text-[#8B3A2B] font-medium">Clear all notes, cards & journal?</span>
            <button
              onClick={() => {
                clearAllStudyData();
                setConfirmClear(false);
              }}
              className="px-2 py-0.5 rounded-lg bg-[#8B3A2B] text-white font-semibold cursor-pointer"
            >
              Yes, Clear
            </button>
            <button
              onClick={() => setConfirmClear(false)}
              className="px-2 py-0.5 rounded-lg bg-[#FAF7F2] text-[#2C2C2A] font-medium cursor-pointer"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmClear(true)}
            className="text-xs text-[#96938B] hover:text-[#8B3A2B] block mx-auto transition-colors cursor-pointer"
          >
            Reset Study Data (Clean Slate)
          </button>
        )}
      </footer>
    </div>
  );
};
