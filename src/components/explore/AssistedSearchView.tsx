import React, { useEffect, useMemo, useState } from 'react';
import {
  Search,
  X,
  ArrowRight,
  BookOpen,
  Sparkles,
  User,
  MapPin,
  FileText,
} from 'lucide-react';
import {
  ensureSearchIndexesLoaded,
  getSemanticStatus,
  initSemanticModel,
  searchBibleHybrid,
  subscribeSemanticStatus,
  type HybridSearchOutput,
  type SemanticModelStatus,
} from '../../search/bibleSearchEngine';
import { StoryIllustration } from '../illustrations/StoryIllustration';
import { useStudyStore } from '../../store/useStudyStore';

type ResultFilter = 'all' | 'chapters' | 'verses' | 'entities';

const SUGGESTED_QUERIES = [
  'Story about the flood',
  'Food that falls from heaven',
  'When a donkey talked',
  'Prodigal son',
  'John 3:16',
];

const CURATED_STARTERS = [
  {
    id: 'GEN-7',
    label: 'Genesis 7',
    title: 'Noah & the Great Flood',
    summary: 'Rain falls for forty days while God seals Noah and his family safely inside the ark.',
    group: 'OT · Law',
    illustrationId: 'ill-gen-7',
  },
  {
    id: 'EXO-16',
    label: 'Exodus 16',
    title: 'The Provision of Manna',
    summary: 'Hungry travelers in the desert receive sweet daily bread rained down from heaven each morning.',
    group: 'OT · Law',
    illustrationId: 'ill-exo-16',
  },
  {
    id: 'PSA-23',
    label: 'Psalm 23',
    title: 'The Lord Is My Shepherd',
    summary: 'Green pastures, still waters, and fearless trust walking through dark valleys.',
    group: 'OT · Wisdom & Poetry',
    illustrationId: 'ill-psa-23',
  },
  {
    id: 'JON-1',
    label: 'Jonah 1',
    title: 'Runaway Prophet & Great Fish',
    summary: 'A raging sea storm and a great fish redirect Jonah toward unexpected mercy for Nineveh.',
    group: 'OT · Minor Prophets',
    illustrationId: 'ill-jon-1',
  },
  {
    id: 'LUK-15',
    label: 'Luke 15',
    title: 'Lost Sheep, Coin & Running Father',
    summary: 'Jesus pictures heaven’s joy as a father running barefoot to embrace his returning son.',
    group: 'NT · Gospels',
    illustrationId: 'ill-luk-15',
  },
  {
    id: 'REV-21',
    label: 'Revelation 21',
    title: 'New Heaven, New Earth & No More Tears',
    summary: 'God makes His home with humanity inside the radiant New Jerusalem.',
    group: 'NT · Prophecy',
    illustrationId: 'ill-rev-21',
  },
];

function highlightMatchedTokens(text: string, tokens: string[]): React.ReactNode {
  if (!tokens || tokens.length === 0) return text;
  const escaped = tokens
    .filter((t) => t.length >= 2)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (escaped.length === 0) return text;

  const regex = new RegExp(`(\\b(?:${escaped.join('|')})[a-z]*)`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, idx) =>
    idx % 2 === 1 ? (
      <mark key={idx} className="bg-[#EDE3CE] text-[#24221E] px-0.5 rounded-[2px] font-medium">
        {part}
      </mark>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  );
}

export const AssistedSearchView: React.FC = () => {
  const { preferences, navigateToPassage, openEntitySheet } = useStudyStore();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<ResultFilter>('all');
  const [indexesReady, setIndexesReady] = useState(false);
  const [semanticStatus, setSemanticStatus] = useState<SemanticModelStatus>(() =>
    getSemanticStatus()
  );
  const [results, setResults] = useState<HybridSearchOutput | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Preload 66-book indexes immediately & warm on-device AI model in background
  useEffect(() => {
    let active = true;
    const unsub = subscribeSemanticStatus((st) => {
      if (active) setSemanticStatus(st);
    });

    ensureSearchIndexesLoaded()
      .then(() => {
        if (active) setIndexesReady(true);
        void initSemanticModel();
      })
      .catch((err) => {
        console.warn('Search index preload issue:', err);
      });

    return () => {
      active = false;
      unsub();
    };
  }, []);

  // Re-run search smoothly on query change or when offline AI finishes warming up
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults(null);
      setIsSearching(false);
      return;
    }

    let cancelled = false;
    setIsSearching(true);
    const timer = setTimeout(async () => {
      try {
        const out = await searchBibleHybrid(trimmed);
        if (!cancelled) {
          setResults(out);
          setIsSearching(false);
        }
      } catch {
        if (!cancelled) setIsSearching(false);
      }
    }, 110);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query, semanticStatus]);

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';

  const statusMeta = useMemo(() => {
    if (!indexesReady) {
      return { dot: '#C88A6B', text: 'Loading 31,103-verse index…' };
    }
    if (semanticStatus === 'ready') {
      return { dot: '#5A7D63', text: 'Offline AI + All 31,103 Verses Ready' };
    }
    if (semanticStatus === 'loading') {
      return { dot: '#C88A6B', text: '31,103 Verses Ready · Warming Offline AI…' };
    }
    return { dot: '#7A9A82', text: 'All 31,103 Verses & 1,189 Chapters Ready' };
  }, [indexesReady, semanticStatus]);

  const hasAnyResults =
    results &&
    (Boolean(results.directReference) ||
      Boolean(results.guideAnswer) ||
      results.chapters.length > 0 ||
      results.verses.length > 0 ||
      results.entities.length > 0);

  return (
    <div className={`space-y-5 ${fontClass}`}>
      {/* Search Bar & Offline Engine Status */}
      <div className="space-y-2.5">
        <div className="relative">
          <Search className="w-4 h-4 text-[#8B3A2B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveFilter('all');
            }}
            placeholder='Ask anything ("food falling from heaven", "John 3:16", "Noah")…'
            className="w-full pl-10 pr-9 py-3 rounded-xl bg-[#F4EFE4] border border-[#DDD3C1] text-sm text-[#24221E] placeholder-[#8C867B] focus:outline-none focus:ring-2 focus:ring-[#8B3A2B]/30 focus:bg-[#FBF8F1] transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#E2DACB] text-[#666158] cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status Indicator & Prompt Suggestions */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-0.5">
          <div className="flex items-center gap-1.5 text-[11px] text-[#666158]">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: statusMeta.dot }}
            />
            <span>{statusMeta.text}</span>
          </div>
          {isSearching && (
            <span className="text-[11px] font-serif italic text-[#8B3A2B]">
              Searching 66 books…
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
          <span className="text-[11px] font-serif italic text-[#666158] mr-1">Try:</span>
          {SUGGESTED_QUERIES.map((chip) => {
            const isSelected = query.toLowerCase() === chip.toLowerCase();
            return (
              <button
                key={chip}
                onClick={() => setQuery(isSelected ? '' : chip)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#24221E] text-[#FBF8F1] border-[#24221E]'
                    : 'bg-[#F4EFE4] text-[#5B564D] border-[#DDD3C1] hover:bg-[#ECE4D4]'
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty Query: Curated Passages Across OT & NT */}
      {!query.trim() && (
        <div className="space-y-3">
          <div className="flex items-baseline justify-between border-b border-[#E2DACB] pb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#666158]">
              Suggested Reading Across Scripture
            </span>
            <span className="text-[11px] font-serif italic text-[#8C867B]">
              Search any topic or phrase
            </span>
          </div>

          <div className="space-y-3">
            {CURATED_STARTERS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPassage(item.id)}
                className="w-full text-left bg-[#FBF8F1] hover:bg-[#F4EFE4]/80 border border-[#DDD3C1] p-3 transition-colors flex flex-col sm:flex-row gap-3.5 cursor-pointer group"
              >
                <div className="sm:w-28 flex-shrink-0 border border-[#E2DACB] p-1 bg-[#F4EFE4]">
                  <StoryIllustration
                    illustrationId={item.illustrationId}
                    className="w-full h-28 sm:h-20"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8B3A2B]">
                      {item.label} · {item.group}
                    </div>
                    <h3 className="text-base font-serif font-semibold text-[#24221E] mt-0.5 group-hover:text-[#8B3A2B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#666158] mt-1 leading-relaxed">{item.summary}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Search Results */}
      {query.trim() && results && (
        <div className="space-y-5">
          {/* Direct Reference Match (e.g. "John 3:16") */}
          {results.directReference && (
            <div className="bg-[#F4EFE4] border border-[#DDD3C1] border-l-4 border-l-[#8B3A2B] p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B3A2B]">
                  Direct Reference Match
                </span>
                <button
                  onClick={() =>
                    navigateToPassage(
                      results.directReference!.chapterId,
                      results.directReference!.verseNumber
                    )
                  }
                  className="px-3 py-1.5 bg-[#24221E] hover:bg-[#3A3731] text-[#FBF8F1] text-xs font-medium rounded-sm inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open {results.directReference.label}</span>
                </button>
              </div>

              {results.directReference.chapter && (
                <div className="font-serif font-semibold text-base text-[#24221E]">
                  {results.directReference.chapter.title}
                </div>
              )}

              {results.directReference.verseText && (
                <p className="font-serif italic text-sm text-[#4A463F] leading-relaxed">
                  “{results.directReference.verseText}”
                </p>
              )}
            </div>
          )}

          {/* Contextual Story / Person Answer Card */}
          {!results.directReference && results.guideAnswer && (
            <div className="bg-[#F4EFE4] border border-[#DDD3C1] border-l-4 border-l-[#8B3A2B] p-4 flex flex-col sm:flex-row gap-3.5">
              <div className="sm:w-28 flex-shrink-0 border border-[#E2DACB] p-1 bg-[#FBF8F1]">
                <StoryIllustration
                  illustrationId={results.guideAnswer.illustrationId}
                  className="w-full h-28 sm:h-24"
                />
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B3A2B]">
                    You May Be Looking For · {results.guideAnswer.entry.referenceLabel}
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-base sm:text-lg text-[#24221E] leading-snug">
                  {results.guideAnswer.entry.answerHeadline}
                </h3>

                <p className="text-xs text-[#4A463F] leading-relaxed">
                  {results.guideAnswer.entry.modernSummary}
                </p>

                <div className="pt-1.5 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() =>
                      navigateToPassage(
                        results.guideAnswer!.entry.chapterId,
                        results.guideAnswer!.entry.verseNumber
                      )
                    }
                    className="px-3.5 py-1.5 bg-[#24221E] hover:bg-[#3A3731] text-[#FBF8F1] text-xs font-medium rounded-sm inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Passage</span>
                  </button>

                  {results.guideAnswer.entry.entityId && (
                    <button
                      onClick={() => openEntitySheet(results.guideAnswer!.entry.entityId!)}
                      className="px-3 py-1.5 bg-[#FBF8F1] hover:bg-[#ECE4D4] border border-[#DDD3C1] text-[#24221E] text-xs font-medium rounded-sm cursor-pointer"
                    >
                      Read Profile →
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Result Category Filter Bar */}
          {hasAnyResults && (
            <div className="flex flex-wrap gap-1.5 border-b border-[#E2DACB] pb-3">
              {(
                [
                  {
                    id: 'all',
                    label: `All (${results.chapters.length + results.verses.length + results.entities.length})`,
                    show: true,
                  },
                  {
                    id: 'chapters',
                    label: `Chapters (${results.chapters.length})`,
                    show: results.chapters.length > 0,
                  },
                  {
                    id: 'verses',
                    label: `Verses (${results.verses.length})`,
                    show: results.verses.length > 0,
                  },
                  {
                    id: 'entities',
                    label: `Words & People (${results.entities.length})`,
                    show: results.entities.length > 0,
                  },
                ] as const
              )
                .filter((t) => t.show)
                .map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#24221E] text-[#FBF8F1] border-[#24221E]'
                      : 'bg-[#F4EFE4] text-[#5B564D] border-[#DDD3C1] hover:bg-[#ECE4D4]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Section 1: Best Matching Stories & Chapters */}
          {(activeFilter === 'all' || activeFilter === 'chapters') &&
            results.chapters.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#666158]">
                    Stories & Chapters
                  </h4>
                  {results.usedSemantic && (
                    <span className="text-[10px] font-serif italic text-[#5A7D63] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Meaning + Verse Ranking
                    </span>
                  )}
                </div>

                <div className="space-y-2.5">
                  {(activeFilter === 'all'
                    ? results.chapters.slice(0, 6)
                    : results.chapters
                  ).map((res) => (
                    <button
                      key={res.chapter.id}
                      onClick={() =>
                        navigateToPassage(
                          res.chapter.id,
                          res.matchingSnippet?.verseNumber
                        )
                      }
                      className="w-full text-left bg-[#FBF8F1] hover:bg-[#F4EFE4]/80 border border-[#DDD3C1] p-3 transition-colors flex flex-col sm:flex-row gap-3.5 cursor-pointer group"
                    >
                      <div className="sm:w-28 flex-shrink-0 border border-[#E2DACB] p-1 bg-[#F4EFE4]">
                        <StoryIllustration
                          illustrationId={res.chapter.illustrationId}
                          className="w-full h-28 sm:h-20"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8B3A2B]">
                              {res.chapter.bookName} {res.chapter.chapterNumber} ·{' '}
                              {res.chapter.testament} · {res.chapter.groupLabel}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4EFE4] text-[#666158] border border-[#E2DACB] capitalize">
                              {res.matchReason === 'semantic'
                                ? 'Meaning match'
                                : res.matchReason === 'hybrid'
                                ? 'Best match'
                                : 'Text match'}
                            </span>
                          </div>

                          <h3 className="text-base font-serif font-semibold text-[#24221E] mt-0.5 group-hover:text-[#8B3A2B] transition-colors">
                            {res.chapter.title}
                          </h3>

                          <p className="text-xs text-[#666158] mt-1 leading-relaxed line-clamp-2">
                            {res.chapter.subtitle || res.chapter.bigPictureText}
                          </p>

                          {res.matchingSnippet && (
                            <p className="text-[11px] font-serif italic text-[#4A463F] mt-1.5 pl-2 border-l-2 border-[#DDD3C1] line-clamp-1">
                              v.{res.matchingSnippet.verseNumber}:{' '}
                              {highlightMatchedTokens(
                                res.matchingSnippet.text,
                                results.tokens
                              )}
                            </p>
                          )}
                        </div>

                        <div className="mt-2 flex justify-end">
                          <span className="text-[11px] font-medium text-[#8B3A2B] inline-flex items-center gap-1">
                            <span>Read Chapter</span>
                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

          {/* Section 2: Exact Matching Bible Verses (Across 31,103 Verses) */}
          {(activeFilter === 'all' || activeFilter === 'verses') &&
            results.verses.length > 0 && (
              <section className="space-y-2.5">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#666158]">
                  Scripture Verses
                </h4>

                <div className="divide-y divide-[#E2DACB] border-y border-[#E2DACB]">
                  {(activeFilter === 'all'
                    ? results.verses.slice(0, 6)
                    : results.verses
                  ).map((v) => (
                    <button
                      key={`${v.chapterId}:${v.verseNumber}`}
                      onClick={() => navigateToPassage(v.chapterId, v.verseNumber)}
                      className="w-full py-3 px-2 text-left hover:bg-[#F4EFE4]/70 transition-colors cursor-pointer group flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-serif font-semibold text-[#8B3A2B]">
                          {v.bookName} {v.chapterNumber}:{v.verseNumber}
                        </div>
                        <p className="font-serif text-[13.5px] text-[#24221E] leading-relaxed">
                          {highlightMatchedTokens(v.text, results.tokens)}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C867B] group-hover:text-[#8B3A2B] mt-1 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </section>
            )}

          {/* Section 3: Matching People, Places & Word Studies */}
          {(activeFilter === 'all' || activeFilter === 'entities') &&
            results.entities.length > 0 && (
              <section className="space-y-2.5">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#666158]">
                  People, Places & Word Studies
                </h4>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {(activeFilter === 'all'
                    ? results.entities.slice(0, 4)
                    : results.entities
                  ).map(({ entity }) => (
                    <button
                      key={entity.id}
                      onClick={() => openEntitySheet(entity.id)}
                      className="text-left p-3 bg-[#F4EFE4]/60 hover:bg-[#F4EFE4] border border-[#DDD3C1] transition-colors cursor-pointer flex items-start gap-2.5 group"
                    >
                      <div className="p-1.5 rounded-sm bg-[#FBF8F1] border border-[#E2DACB] text-[#8B3A2B] mt-0.5">
                        {entity.type === 'person' ? (
                          <User className="w-3.5 h-3.5" />
                        ) : entity.type === 'place' ? (
                          <MapPin className="w-3.5 h-3.5" />
                        ) : (
                          <FileText className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="font-serif font-semibold text-sm text-[#24221E] group-hover:text-[#8B3A2B] transition-colors truncate">
                          {entity.title}
                        </div>
                        {entity.originalLanguageTerm && (
                          <div className="text-[10px] text-[#8C867B] truncate">
                            {entity.originalLanguageTerm}
                          </div>
                        )}
                        <p className="text-xs text-[#666158] mt-1 line-clamp-2">
                          {entity.shortDefinition}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

          {/* Honest Empty State */}
          {!hasAnyResults && !isSearching && (
            <div className="py-10 px-4 text-center border border-[#E2DACB] bg-[#F4EFE4]/50 space-y-2">
              <p className="font-serif text-base text-[#24221E]">
                No exact passages matched “{query}”.
              </p>
              <p className="text-xs text-[#666158] max-w-sm mx-auto">
                Try describing the person, object, or feeling (like{' '}
                <button
                  onClick={() => setQuery('when a donkey talked')}
                  className="text-[#8B3A2B] underline cursor-pointer"
                >
                  when a donkey talked
                </button>{' '}
                or{' '}
                <button
                  onClick={() => setQuery('Exodus 16')}
                  className="text-[#8B3A2B] underline cursor-pointer"
                >
                  Exodus 16
                </button>
                ).
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
