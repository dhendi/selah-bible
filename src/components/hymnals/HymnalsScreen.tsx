import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  Check,
  Copy,
  Heart,
  Music,
  Search,
  Square,
  Volume2,
  X,
} from 'lucide-react';
import { SDA_HYMNAL_SECTIONS, SDA_HYMNS, type HymnEntry } from '../../data/sdaHymnal';
import { useStudyStore } from '../../store/useStudyStore';

const FAVORITE_HYMNS_KEY = 'selah_favorite_hymns_v1';
const PAGE_BATCH_SIZE = 80;

function loadFavoriteHymns(): number[] {
  try {
    const raw = localStorage.getItem(FAVORITE_HYMNS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((n) => typeof n === 'number') : [];
  } catch {
    return [];
  }
}

export const HymnalsScreen: React.FC = () => {
  const {
    preferences,
    activeHymnNumber,
    setActiveHymnNumber,
  } = useStudyStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState<'all' | 'saved' | number>('all');
  const [visibleLimit, setVisibleLimit] = useState(PAGE_BATCH_SIZE);
  const [favoriteNumbers, setFavoriteNumbers] = useState<number[]>(() => loadFavoriteHymns());
  const [copiedNumber, setCopiedNumber] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const sectionMap = useMemo(() => {
    const m = new Map<number, string>();
    for (const s of SDA_HYMNAL_SECTIONS) m.set(s.id, s.title);
    return m;
  }, []);

  const favoriteSet = useMemo(() => new Set(favoriteNumbers), [favoriteNumbers]);

  const activeHymn: HymnEntry | null = useMemo(() => {
    if (activeHymnNumber == null) return null;
    return SDA_HYMNS.find((h) => h.number === activeHymnNumber) ?? null;
  }, [activeHymnNumber]);

  useEffect(() => {
    if (activeHymnNumber != null) {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
    };
  }, [activeHymnNumber]);

  const toggleFavorite = (num: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavoriteNumbers((prev) => {
      const exists = prev.includes(num);
      const next = exists ? prev.filter((n) => n !== num) : [num, ...prev].sort((a, b) => a - b);
      try {
        localStorage.setItem(FAVORITE_HYMNS_KEY, JSON.stringify(next));
      } catch {
        // ignore storage quota errors
      }
      return next;
    });
  };

  const trimmedQuery = searchQuery.trim();
  const parsedJumpNumber = useMemo(() => {
    if (!/^\d{1,3}$/.test(trimmedQuery)) return null;
    const n = parseInt(trimmedQuery, 10);
    return n >= 1 && n <= 695 ? n : null;
  }, [trimmedQuery]);

  const filteredHymns = useMemo(() => {
    const q = trimmedQuery.toLowerCase();
    return SDA_HYMNS.filter((h) => {
      if (selectedSectionId === 'saved' && !favoriteSet.has(h.number)) return false;
      if (typeof selectedSectionId === 'number' && h.sectionId !== selectedSectionId) return false;
      if (!q) return true;
      if (String(h.number) === q || String(h.number).includes(q)) return true;
      if (h.title.toLowerCase().includes(q)) return true;
      if (h.refrain && h.refrain.toLowerCase().includes(q)) return true;
      return h.verses.some((v) => v.toLowerCase().includes(q));
    });
  }, [trimmedQuery, selectedSectionId, favoriteSet]);

  const displayedHymns = useMemo(
    () => filteredHymns.slice(0, visibleLimit),
    [filteredHymns, visibleLimit]
  );

  const fontClass =
    preferences.isDyslexicFont || preferences.fontFamily === 'dyslexic'
      ? 'font-dyslexic'
      : preferences.fontFamily === 'sans'
        ? 'font-sans'
        : 'font-serif';

  const handleOpenHymn = (num: number) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setActiveHymnNumber(num);
  };

  const handleCopyHymn = async (hymn: HymnEntry) => {
    const blocks = [`#${hymn.number} — ${hymn.title}`];
    hymn.verses.forEach((v, idx) => {
      blocks.push(`\n${idx + 1}.\n${v}`);
      if (idx === 0 && hymn.refrain) {
        blocks.push(`\nRefrain\n${hymn.refrain}`);
      }
    });
    if (hymn.refrain2) {
      blocks.push(`\nFinal Refrain\n${hymn.refrain2}`);
    }
    try {
      await navigator.clipboard.writeText(blocks.join('\n'));
      setCopiedNumber(hymn.number);
      setTimeout(() => setCopiedNumber((cur) => (cur === hymn.number ? null : cur)), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  const toggleSpeakHymn = (hymn: HymnEntry) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const parts: string[] = [`Hymn ${hymn.number}. ${hymn.title}.`];
    hymn.verses.forEach((v, idx) => {
      parts.push(`Verse ${idx + 1}. ${v.replace(/\n+/g, ' ')}`);
      if (hymn.refrain) {
        parts.push(`Refrain. ${hymn.refrain.replace(/\n+/g, ' ')}`);
      }
    });
    if (hymn.refrain2) {
      parts.push(`Final Refrain. ${hymn.refrain2.replace(/\n+/g, ' ')}`);
    }

    const utterance = new SpeechSynthesisUtterance(parts.join(' '));
    utterance.rate = preferences.audioSpeechRate || 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  if (activeHymn) {
    const prevNum = activeHymn.number > 1 ? activeHymn.number - 1 : null;
    const nextNum = activeHymn.number < SDA_HYMNS.length ? activeHymn.number + 1 : null;
    const isFav = favoriteSet.has(activeHymn.number);
    const secName = sectionMap.get(activeHymn.sectionId) || 'SDA Hymnal';

    return (
      <div ref={topRef} className="px-4 sm:px-8 py-5 pb-10 space-y-6">
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5DFD5]">
          <button
            onClick={() => setActiveHymnNumber(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3EFE6] hover:bg-[#EAE3D5] text-xs font-semibold text-[#2C2C2A] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#8B3A2B]" />
            <span>All Hymns</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => toggleFavorite(activeHymn.number, e)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors cursor-pointer ${
                isFav
                  ? 'bg-[#FDF4F1] border-[#8B3A2B]/40 text-[#8B3A2B]'
                  : 'bg-[#FAF7F2] border-[#DED7CB] text-[#484642] hover:bg-[#F3EFE6]'
              }`}
              aria-label={isFav ? 'Remove hymn from saved favorites' : 'Save hymn to favorites'}
            >
              <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-[#8B3A2B] text-[#8B3A2B]' : ''}`} />
              <span>{isFav ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={() => handleCopyHymn(activeHymn)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-[#FAF7F2] border-[#DED7CB] text-[#484642] hover:bg-[#F3EFE6] text-xs font-semibold transition-colors cursor-pointer"
              aria-label="Copy hymn lyrics"
            >
              {copiedNumber === activeHymn.number ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#285842]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={() => toggleSpeakHymn(activeHymn)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors cursor-pointer ${
                isSpeaking
                  ? 'bg-[#8B3A2B] border-[#8B3A2B] text-white'
                  : 'bg-[#FAF7F2] border-[#DED7CB] text-[#484642] hover:bg-[#F3EFE6]'
              }`}
              aria-label={isSpeaking ? 'Stop reading hymn aloud' : 'Read hymn aloud'}
            >
              {isSpeaking ? (
                <>
                  <Square className="w-3 h-3 fill-current" />
                  <span>Stop</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#8B3A2B]" />
                  <span>Read</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hymn Title Header */}
        <header className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#8B3A2B] text-white font-serif font-bold tracking-wide">
              Hymn #{activeHymn.number}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F3EFE6] border border-[#DED7CB] text-[#5C5852] font-medium">
              {secName}
            </span>
            <span className="text-[#8C867B]">• Seventh-day Adventist Hymnal</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#24221E] leading-tight">
            {activeHymn.title}
          </h1>
        </header>

        {/* Hymn Stanzas & Refrain */}
        <div
          className={`space-y-5 ${fontClass}`}
          style={{
            fontSize: `${preferences.fontSize}px`,
            lineHeight: preferences.lineHeight,
          }}
        >
          {activeHymn.verses.map((verseText, idx) => (
            <React.Fragment key={idx}>
              <section className="rounded-xl bg-[#FAF7F2] border border-[#E5DFD5] p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#EFE9DC] text-[#8B3A2B] font-serif font-bold text-sm flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="whitespace-pre-line text-[#24221E] flex-1">{verseText}</p>
                </div>
              </section>

              {idx === 0 && activeHymn.refrain && (
                <section className="ml-3 sm:ml-6 rounded-xl bg-[#F5EFE2] border-l-4 border-[#8B3A2B] border-y border-r border-[#E2D8C7] p-4 sm:p-5">
                  <div className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#8B3A2B] mb-1.5 font-sans">
                    Refrain
                  </div>
                  <p className="whitespace-pre-line italic text-[#24221E]">{activeHymn.refrain}</p>
                </section>
              )}
            </React.Fragment>
          ))}

          {activeHymn.refrain2 && (
            <section className="ml-3 sm:ml-6 rounded-xl bg-[#F5EFE2] border-l-4 border-[#8B3A2B] border-y border-r border-[#E2D8C7] p-4 sm:p-5">
              <div className="text-[0.6875rem] uppercase tracking-[0.14em] font-semibold text-[#8B3A2B] mb-1.5 font-sans">
                Final Refrain
              </div>
              <p className="whitespace-pre-line italic text-[#24221E]">{activeHymn.refrain2}</p>
            </section>
          )}
        </div>

        {/* Prev / Next Navigation */}
        <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between gap-3">
          {prevNum ? (
            <button
              onClick={() => handleOpenHymn(prevNum)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D5] text-xs font-semibold text-[#2C2C2A] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#8B3A2B]" />
              <span>Hymn #{prevNum}</span>
            </button>
          ) : (
            <div />
          )}

          {nextNum ? (
            <button
              onClick={() => handleOpenHymn(nextNum)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F3EFE6] hover:bg-[#EAE3D5] text-xs font-semibold text-[#2C2C2A] transition-colors cursor-pointer"
            >
              <span>Hymn #{nextNum}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8B3A2B]" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }

  return (
    <div ref={topRef} className="px-4 sm:px-8 py-5 pb-10 space-y-5">
      {/* Header & Active Hymnal Card */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold text-[#24221E] tracking-tight">Hymnals</h1>
            <p className="text-xs text-[#666158] mt-0.5">
              Sing and meditate alongside Scripture
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EFE9DC] text-[#8B3A2B] text-xs font-semibold">
            <Music className="w-3.5 h-3.5" />
            <span>695 Hymns</span>
          </span>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#F7F1E3] to-[#EFE7D5] border border-[#DDD3C1] p-4 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#8B3A2B] text-[#FBF8F1] flex items-center justify-center shrink-0 shadow-xs">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#8B3A2B]">
                Active Hymnal
              </div>
              <h2 className="font-serif font-bold text-base text-[#24221E]">
                Seventh-day Adventist Hymnal
              </h2>
              <p className="text-xs text-[#5C5852]">
                1985 Edition • Numbers 1–695 • 13 Topical Sections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Quick Number Jump */}
      <div className="space-y-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (parsedJumpNumber) {
              handleOpenHymn(parsedJumpNumber);
            }
          }}
          className="relative"
        >
          <Search className="w-4 h-4 text-[#8C867B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleLimit(PAGE_BATCH_SIZE);
            }}
            placeholder="Search hymn number (#1–695), title, or lyrics…"
            aria-label="Search Seventh-day Adventist Hymnal"
            className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DED7CB] text-sm text-[#24221E] placeholder-[#8C867B] focus:outline-none focus:border-[#8B3A2B]"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {parsedJumpNumber && (
              <button
                type="submit"
                className="px-2.5 py-1 rounded-lg bg-[#8B3A2B] text-white text-xs font-semibold cursor-pointer hover:bg-[#722E21] transition-colors"
              >
                Open #{parsedJumpNumber}
              </button>
            )}
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setVisibleLimit(PAGE_BATCH_SIZE);
                }}
                aria-label="Clear search"
                className="p-1 text-[#8C867B] hover:text-[#24221E] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

        {/* Topical Section Filter Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
          <button
            onClick={() => {
              setSelectedSectionId('all');
              setVisibleLimit(PAGE_BATCH_SIZE);
            }}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
              selectedSectionId === 'all'
                ? 'bg-[#24221E] text-[#FBF8F1] border-[#24221E]'
                : 'bg-[#FAF7F2] text-[#484642] border-[#DED7CB] hover:bg-[#F3EFE6]'
            }`}
          >
            All (695)
          </button>

          <button
            onClick={() => {
              setSelectedSectionId('saved');
              setVisibleLimit(PAGE_BATCH_SIZE);
            }}
            className={`shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
              selectedSectionId === 'saved'
                ? 'bg-[#8B3A2B] text-white border-[#8B3A2B]'
                : 'bg-[#FAF7F2] text-[#484642] border-[#DED7CB] hover:bg-[#F3EFE6]'
            }`}
          >
            <Heart className={`w-3 h-3 ${selectedSectionId === 'saved' ? 'fill-white' : 'text-[#8B3A2B]'}`} />
            <span>Saved ({favoriteNumbers.length})</span>
          </button>

          {SDA_HYMNAL_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                setSelectedSectionId(sec.id);
                setVisibleLimit(PAGE_BATCH_SIZE);
              }}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                selectedSectionId === sec.id
                  ? 'bg-[#8B3A2B] text-white border-[#8B3A2B]'
                  : 'bg-[#FAF7F2] text-[#484642] border-[#DED7CB] hover:bg-[#F3EFE6]'
              }`}
            >
              {sec.title} ({sec.firstHymn}–{sec.lastHymn})
            </button>
          ))}
        </div>
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-xs text-[#666158]">
        <span>
          Showing {displayedHymns.length} of {filteredHymns.length} hymn
          {filteredHymns.length === 1 ? '' : 's'}
        </span>
        {selectedSectionId !== 'all' && (
          <button
            onClick={() => setSelectedSectionId('all')}
            className="text-[#8B3A2B] font-semibold hover:underline cursor-pointer"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* Hymns List */}
      {filteredHymns.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#D6CCBA] bg-[#FAF7F2] p-8 text-center space-y-2">
          <p className="font-serif font-semibold text-[#24221E]">
            {selectedSectionId === 'saved'
              ? 'No saved hymns yet'
              : 'No hymns matched your search'}
          </p>
          <p className="text-xs text-[#666158]">
            {selectedSectionId === 'saved'
              ? 'Tap the heart icon on any hymn to save favorites for quick worship access.'
              : 'Try searching by hymn number (1–695), title, or a phrase from the lyrics.'}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {displayedHymns.map((hymn) => {
            const isFav = favoriteSet.has(hymn.number);
            const firstLine = hymn.verses[0]?.split('\n')[0] || '';
            const secName = sectionMap.get(hymn.sectionId) || '';
            return (
              <div
                key={hymn.number}
                onClick={() => handleOpenHymn(hymn.number)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenHymn(hymn.number);
                  }
                }}
                className="group w-full text-left rounded-xl bg-[#FAF7F2] hover:bg-[#F4EEE1] border border-[#E5DFD5] p-3.5 flex items-center justify-between gap-3 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <span className="shrink-0 min-w-[3rem] px-2 py-1 rounded-lg bg-[#EFE9DC] group-hover:bg-[#E5DEC9] text-[#8B3A2B] font-serif font-bold text-sm text-center">
                    #{hymn.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-[#24221E] text-sm sm:text-base truncate">
                        {hymn.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#666158] truncate mt-0.5">{firstLine}</p>
                    <span className="inline-block text-[0.6875rem] text-[#8C867B] mt-1">
                      {secName} • {hymn.verses.length} {hymn.verses.length === 1 ? 'stanza' : 'stanzas'}
                      {hymn.refrain ? ' + Refrain' : ''}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => toggleFavorite(hymn.number, e)}
                  aria-label={isFav ? `Remove hymn ${hymn.number} from saved` : `Save hymn ${hymn.number}`}
                  className="p-2 rounded-full hover:bg-[#EAE2D0] text-[#8C867B] transition-colors cursor-pointer shrink-0"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-[#8B3A2B] text-[#8B3A2B]' : ''}`} />
                </button>
              </div>
            );
          })}

          {displayedHymns.length < filteredHymns.length && (
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => setVisibleLimit((v) => v + PAGE_BATCH_SIZE)}
                className="px-4 py-2 rounded-full bg-[#F3EFE6] hover:bg-[#EAE3D5] border border-[#DED7CB] text-xs font-semibold text-[#24221E] cursor-pointer transition-colors"
              >
                Load More ({filteredHymns.length - displayedHymns.length} remaining)
              </button>
              <button
                onClick={() => setVisibleLimit(filteredHymns.length)}
                className="px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F3EFE6] border border-[#DED7CB] text-xs font-semibold text-[#666158] cursor-pointer transition-colors"
              >
                Show All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
