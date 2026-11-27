import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  HeartHandshake,
  Images,
  PenLine,
  Sparkles,
  Square,
  Volume2,
} from 'lucide-react';
import { SEED_BIBLE_STORIES } from '../../data/seedBibleStories';
import { parseBookIdFromChapter } from '../../data/bookGroups';
import { useStudyStore } from '../../store/useStudyStore';
import { assetUrl } from '../../utils/assetUrl';

export const StoriesView: React.FC = () => {
  const {
    preferences,
    selectedExploreItem,
    setExploreView,
    navigateToPassage,
    openJournalSheet,
  } = useStudyStore();

  const [categoryFilter, setCategoryFilter] = useState<'all' | 'OT' | 'NT'>('all');
  const [activeStoryId, setActiveStoryId] = useState<string | null>(() =>
    selectedExploreItem?.startsWith('story-') ? selectedExploreItem : null,
  );
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedExploreItem && selectedExploreItem.startsWith('story-')) {
      setActiveStoryId(selectedExploreItem);
    }
  }, [selectedExploreItem]);

  useEffect(() => {
    if (activeStoryId) {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsReadingAloud(false);
    };
  }, [activeStoryId]);

  const filteredStories = useMemo(() => {
    if (categoryFilter === 'all') return SEED_BIBLE_STORIES;
    return SEED_BIBLE_STORIES.filter((s) => s.testament === categoryFilter);
  }, [categoryFilter]);

  const activeStoryIndex = activeStoryId
    ? SEED_BIBLE_STORIES.findIndex((s) => s.id === activeStoryId)
    : -1;
  const activeStory = activeStoryIndex >= 0 ? SEED_BIBLE_STORIES[activeStoryIndex] : null;

  const fontClass =
    preferences.isDyslexicFont || preferences.fontFamily === 'dyslexic'
      ? 'font-dyslexic'
      : preferences.fontFamily === 'sans'
        ? 'font-sans'
        : 'font-serif';

  const handleOpenStory = (storyId: string) => {
    setActiveStoryId(storyId);
    setExploreView('stories', storyId);
  };

  const handleBackToStories = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsReadingAloud(false);
    setActiveStoryId(null);
    setExploreView('stories', null);
  };

  const toggleReadStoryAloud = () => {
    if (!activeStory || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
      return;
    }

    window.speechSynthesis.cancel();
    const parts = [
      `${activeStory.title}. ${activeStory.subtitle}. ${activeStory.summary}`,
      ...activeStory.beats.map((b) => `${b.title}. ${b.narrative}`),
      `Lessons Learned. ${activeStory.lessonsLearned
        .map((l, idx) => `${idx + 1}. ${l.title}. ${l.description}`)
        .join(' ')}`,
    ];

    const utterance = new SpeechSynthesisUtterance(parts.join(' '));
    utterance.rate = preferences.audioSpeechRate || 1.0;
    utterance.onend = () => setIsReadingAloud(false);
    utterance.onerror = () => setIsReadingAloud(false);
    setIsReadingAloud(true);
    window.speechSynthesis.speak(utterance);
  };

  if (activeStory) {
    const prevStory =
      activeStoryIndex > 0 ? SEED_BIBLE_STORIES[activeStoryIndex - 1] : null;
    const nextStory =
      activeStoryIndex < SEED_BIBLE_STORIES.length - 1
        ? SEED_BIBLE_STORIES[activeStoryIndex + 1]
        : null;
    const primaryBookId = parseBookIdFromChapter(activeStory.primaryChapterId);

    return (
      <div ref={topRef} className="space-y-6 pb-4">
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5DFD5]">
          <button
            onClick={handleBackToStories}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3EFE6] hover:bg-[#EAE3D5] text-xs font-semibold text-[#2C2C2A] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#8B3A2B]" />
            <span>All Stories</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleReadStoryAloud}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors cursor-pointer ${
                isReadingAloud
                  ? 'bg-[#8B3A2B] border-[#8B3A2B] text-white'
                  : 'bg-[#FAF7F2] border-[#DED7CB] text-[#484642] hover:bg-[#F3EFE6]'
              }`}
              aria-label={isReadingAloud ? 'Stop reading story aloud' : 'Listen to story read aloud'}
            >
              {isReadingAloud ? (
                <>
                  <Square className="w-3 h-3 fill-current" />
                  <span>Stop Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#8B3A2B]" />
                  <span>Listen to Story</span>
                </>
              )}
            </button>

            <button
              onClick={() => navigateToPassage(activeStory.primaryChapterId)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#24221E] hover:bg-[#3A3731] text-[#FAF7F2] text-xs font-semibold transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read {activeStory.scriptureRange}</span>
            </button>
          </div>
        </div>

        {/* Story Title & Intro */}
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#EBF2ED] text-[#285842] text-[0.6875rem] font-bold uppercase tracking-wider">
              {activeStory.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F3EFE6] border border-[#E5DFD5] text-[#5C5852] text-[0.6875rem] font-semibold inline-flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-[#8B3A2B]" />
              {activeStory.scriptureRange}
            </span>
            <span className="text-[0.6875rem] text-[#76746E] inline-flex items-center gap-1">
              <Images className="w-3.5 h-3.5 text-[#C88A6B]" />
              {activeStory.beats.length} Illustrated Scenes
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2A] leading-tight">
              {activeStory.title}
            </h2>
            <p className="text-sm font-serif italic text-[#7A6B5D] mt-1">
              {activeStory.subtitle}
            </p>
          </div>

          <p
            className={`text-[#484642] ${fontClass} bg-[#F5F1E8] border-l-3 border-[#8B3A2B] px-4 py-3 rounded-r-xl`}
            style={{
              fontSize: `${Math.max(15, preferences.fontSize - 1)}px`,
              lineHeight: preferences.lineHeight,
            }}
          >
            {activeStory.summary}
          </p>
        </header>

        {/* Illustrated Scenes */}
        <div className="space-y-6">
          {activeStory.beats.map((beat) => (
            <article
              key={beat.id}
              className="bg-white/95 rounded-2xl border border-[#E5DFD5] overflow-hidden shadow-xs"
            >
              {/* Watercolor Scene Graphic */}
              <div className="relative bg-[#F5EFE4] border-b border-[#EFE9DD]">
                <img
                  src={assetUrl(beat.imageUrl)}
                  alt={beat.imageAlt}
                  className="w-full aspect-[6/5] object-cover block"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF7F2]/95 backdrop-blur-xs border border-[#DED7CB] text-[0.6875rem] font-bold text-[#2C2C2A] shadow-xs">
                  Scene {beat.beatNumber} of {activeStory.beats.length}
                </span>
              </div>

              {/* Scene Narrative & Scripture References */}
              <div className="p-4 sm:p-5 space-y-3">
                <h3 className="text-lg font-serif font-bold text-[#2C2C2A]">
                  {beat.title}
                </h3>

                <p
                  className={`text-[#383632] ${fontClass}`}
                  style={{
                    fontSize: `${preferences.fontSize}px`,
                    lineHeight: preferences.lineHeight,
                  }}
                >
                  {beat.narrative}
                </p>

                {/* Inline Scripture Location Links */}
                <div className="pt-2 border-t border-[#F0EAE0] flex flex-wrap items-center gap-2">
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#76746E]">
                    Find in Scripture:
                  </span>
                  {beat.scriptureRefs.map((ref) => (
                    <button
                      key={`${beat.id}-${ref.label}`}
                      onClick={() => navigateToPassage(ref.chapterId, ref.verseNumber)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF2ED] hover:bg-[#DCE9E0] text-[#285842] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>{ref.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-70" />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Lessons Learned Footer Section */}
        <section
          aria-label="Lessons Learned"
          className="bg-gradient-to-br from-[#F4EFE4] to-[#EBF2ED]/60 rounded-2xl border border-[#D8D0C1] p-5 space-y-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7A9A82]/20 text-[#285842] flex items-center justify-center">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#285842]">
                Takeaways For Today
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C2C2A]">
                Lessons Learned
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            {activeStory.lessonsLearned.map((lesson, idx) => (
              <div
                key={lesson.title}
                className="bg-white/90 rounded-xl border border-[#E5DFD5] p-3.5 sm:p-4 space-y-1.5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#8B3A2B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-serif font-bold text-base text-[#2C2C2A]">
                      {lesson.title}
                    </h4>
                    <p
                      className={`text-[#484642] ${fontClass}`}
                      style={{
                        fontSize: `${Math.max(15, preferences.fontSize - 1)}px`,
                        lineHeight: preferences.lineHeight,
                      }}
                    >
                      {lesson.description}
                    </p>
                    {lesson.anchorRef && (
                      <button
                        onClick={() =>
                          navigateToPassage(
                            lesson.anchorRef!.chapterId,
                            lesson.anchorRef!.verseNumber,
                          )
                        }
                        className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#285842] hover:underline cursor-pointer"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Read {lesson.anchorRef.label} in Bible</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reflection Prompt & Journal Action */}
          <div className="bg-[#FAF7F2] rounded-xl border border-[#DED7CB] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#8B3A2B] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reflect</span>
              </div>
              <p className="text-sm font-serif italic text-[#2C2C2A]">
                “{activeStory.reflectionPrompt}”
              </p>
            </div>
            <button
              onClick={() =>
                openJournalSheet({
                  verseRef: activeStory.scriptureRange,
                  bookId: primaryBookId,
                  snapshotText: `${activeStory.title} — ${activeStory.reflectionPrompt}`,
                  illustrationId: `story-${activeStory.slug}`,
                })
              }
              className="px-4 py-2 rounded-xl bg-[#7A9A82] hover:bg-[#6A8871] text-white text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer flex-shrink-0"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Write in Journal</span>
            </button>
          </div>
        </section>

        {/* Bottom Prev / Next Story Bar */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {prevStory ? (
            <button
              onClick={() => handleOpenStory(prevStory.id)}
              className="flex-1 text-left p-3 rounded-xl bg-[#F3EFE6] hover:bg-[#EAE3D5] border border-[#E5DFD5] transition-colors cursor-pointer"
            >
              <div className="text-[0.6875rem] text-[#76746E] flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" />
                <span>Previous Story</span>
              </div>
              <div className="font-serif font-bold text-sm text-[#2C2C2A] truncate mt-0.5">
                {prevStory.title}
              </div>
            </button>
          ) : (
            <div className="flex-1" />
          )}

          {nextStory ? (
            <button
              onClick={() => handleOpenStory(nextStory.id)}
              className="flex-1 text-right p-3 rounded-xl bg-[#F3EFE6] hover:bg-[#EAE3D5] border border-[#E5DFD5] transition-colors cursor-pointer"
            >
              <div className="text-[0.6875rem] text-[#76746E] flex items-center justify-end gap-1">
                <span>Next Story</span>
                <ArrowRight className="w-3 h-3" />
              </div>
              <div className="font-serif font-bold text-sm text-[#2C2C2A] truncate mt-0.5">
                {nextStory.title}
              </div>
            </button>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    );
  }

  // Catalog View (All Illustrated Stories & Parables)
  return (
    <div className="space-y-4 pb-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-serif font-bold text-[#2C2C2A]">
            Famous Stories & Parables
          </h2>
          <p className="text-xs text-[#76746E]">
            Easy-to-read illustrated retellings with verse links and lessons learned.
          </p>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => setCategoryFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
            categoryFilter === 'all'
              ? 'bg-[#2C2C2A] text-white'
              : 'bg-[#F3EFE6] text-[#5C5852] hover:bg-[#EAE3D5]'
          }`}
        >
          All Stories ({SEED_BIBLE_STORIES.length})
        </button>
        <button
          onClick={() => setCategoryFilter('OT')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
            categoryFilter === 'OT'
              ? 'bg-[#8B3A2B] text-white'
              : 'bg-[#F3EFE6] text-[#5C5852] hover:bg-[#EAE3D5]'
          }`}
        >
          Old Testament (3)
        </button>
        <button
          onClick={() => setCategoryFilter('NT')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
            categoryFilter === 'NT'
              ? 'bg-[#285842] text-white'
              : 'bg-[#F3EFE6] text-[#5C5852] hover:bg-[#EAE3D5]'
          }`}
        >
          Parables of Jesus (2)
        </button>
      </div>

      {/* Illustrated Story Cards */}
      <div className="space-y-4">
        {filteredStories.map((story) => (
          <button
            key={story.id}
            onClick={() => handleOpenStory(story.id)}
            className="w-full text-left bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C8B9A6] transition-all group cursor-pointer"
          >
            <div className="relative bg-[#F5EFE4]">
              <img
                src={assetUrl(story.coverImageUrl)}
                alt={story.title}
                className="w-full aspect-[6/5] sm:aspect-[4/3] object-cover block group-hover:scale-[1.015] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2]/95 backdrop-blur-xs text-[0.6875rem] font-bold text-[#2C2C2A] border border-[#E5DFD5]">
                  {story.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#24221E]/85 text-[#FAF7F2] text-[0.6875rem] font-semibold inline-flex items-center gap-1">
                  <Images className="w-3 h-3" />
                  {story.beats.length} Scenes
                </span>
              </div>
            </div>

            <div className="p-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[0.6875rem] font-semibold text-[#76746E]">
                <span className="text-[#8B3A2B] font-bold uppercase tracking-wider">
                  {story.scriptureRange}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {story.readingTimeMinutes} min read
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#2C2C2A] group-hover:text-[#8B3A2B] transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs font-serif italic text-[#7A6B5D] mt-0.5">
                  {story.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#484642] leading-relaxed line-clamp-2">
                {story.summary}
              </p>

              <div className="pt-1 flex items-center justify-between text-xs font-semibold text-[#285842]">
                <span>Read Story & Lessons Learned</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
