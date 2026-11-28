import React from 'react';
import {
  X,
  ArrowLeft,
  Users,
  MapPin,
  BookOpen,
  ArrowRight,
  GitFork,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { SEED_CHARACTERS } from '../../data/seedCharacters';
import { CharacterPortrait } from '../illustrations/CharacterPortrait';

export const CharacterCardModal: React.FC = () => {
  const {
    activeCharacterId,
    characterHistory,
    openCharacterCard,
    goBackCharacterCard,
    closeCharacterCard,
    openVisualOverview,
    navigateToMapPin,
    preferences,
  } = useStudyStore();

  if (!activeCharacterId) return null;

  const character = SEED_CHARACTERS[activeCharacterId];
  if (!character) return null;

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';
  const bodySize = Math.max(14, Math.min(preferences.fontSize - 2, 24));

  const renderFamilyGroup = (label: string, items?: string[]) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 py-1.5 border-b border-[#EFEAE1] last:border-b-0">
        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#76746E] w-20 flex-shrink-0">
          {label}:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => {
            const linkedChar = SEED_CHARACTERS[item];
            if (linkedChar) {
              return (
                <button
                  key={item}
                  onClick={() => openCharacterCard(linkedChar.id, true)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF2ED] hover:bg-[#D9E6DC] border border-[#7A9A82]/50 text-[#285842] text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                  title={`Open ${linkedChar.name}'s Character Card`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A9A82]" />
                  <span>{linkedChar.name}</span>
                  <ArrowRight className="w-3 h-3 text-[#7A9A82]" />
                </button>
              );
            }
            return (
              <span
                key={item}
                className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#EDE7DC] text-[#55534E] text-xs font-medium"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  const handleKeyChapterClick = (chapterId: string, anchorVerseNum?: number) => {
    closeCharacterCard();
    openVisualOverview(chapterId, anchorVerseNum);
  };

  const handleLocationClick = (mapPinId?: string) => {
    closeCharacterCard();
    navigateToMapPin(mapPinId || 'loc-wilderness-sin');
  };

  return (
    <div className="fixed inset-0 z-[55] flex items-end sm:items-center justify-center sm:p-4 pointer-events-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#2C2C2A]/45 backdrop-blur-[2px] animate-fade-in"
        onClick={closeCharacterCard}
      />

      {/* Character Card Sheet */}
      <div
        className={`relative w-full max-w-lg bg-[#FAF7F2] rounded-t-[32px] sm:rounded-3xl shadow-2xl border border-[#E5DFD5] p-5 pb-8 z-10 animate-slide-up max-h-[90vh] overflow-y-auto ${fontClass}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="w-12 h-1.5 bg-[#DED7CB] rounded-full mx-auto mb-4 sm:hidden" />

        {/* Top Bar with Back History & Close */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {characterHistory.length > 0 && (
              <button
                onClick={goBackCharacterCard}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F3EFE6] hover:bg-[#EBE5DA] text-xs font-semibold text-[#2C2C2A] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}
            <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82] flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              Character Data Card
            </span>
          </div>

          <button
            onClick={closeCharacterCard}
            className="p-1.5 rounded-full text-[#76746E] hover:text-[#2C2C2A] hover:bg-[#F3EFE6] transition-colors cursor-pointer"
            aria-label="Close character card"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Header: Portrait, Name, Hebrew/Greek Meaning, Era */}
        <div className="flex items-start gap-4 pb-4 border-b border-[#E8E2D7] mb-4">
          <CharacterPortrait
            portraitId={character.portraitIllustrationId}
            className="w-20 h-20"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[0.625rem] font-bold uppercase px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#385541]">
                {character.roleBadge}
              </span>
              <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-full bg-[#FAECE5] text-[#B07456]">
                {character.era}
              </span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#2C2C2A] leading-tight">
              {character.name}
            </h2>
            <p className="text-xs font-medium text-[#7A9A82] font-hebrew mt-0.5 leading-snug">
              {character.nameMeaning}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* 2. Who They Are */}
          <div className="bg-[#F3EFE6] rounded-2xl p-4 border border-[#E5DFD5]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#76746E] mb-1.5">
              Who They Are
            </h3>
            <p
              className="text-[#2C2C2A] leading-relaxed"
              style={{ fontSize: `${bodySize}px`, lineHeight: preferences.lineHeight }}
            >
              {character.quickBio}
            </p>
          </div>

          {/* 3. Interactive Family Tree */}
          <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E5DFD5]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] flex items-center gap-1.5">
                <GitFork className="w-3.5 h-3.5" />
                Interactive Family Tree
              </h3>
              <span className="text-[0.625rem] text-[#96938B]">Tap green pills to explore</span>
            </div>
            <div>
              {renderFamilyGroup('Parents', character.familyTree.parents)}
              {renderFamilyGroup('Siblings', character.familyTree.siblings)}
              {renderFamilyGroup('Spouse', character.familyTree.spouse)}
              {renderFamilyGroup('Children', character.familyTree.children)}
            </div>
          </div>

          {/* 4. Where They Lived Map Strip */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#76746E] mb-2 flex items-center gap-1.5 px-1">
              <MapPin className="w-3.5 h-3.5 text-[#C88A6B]" />
              Where They Lived (Tap stop for Map)
            </h3>

            {/* Route visual breadcrumbs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {character.locationsLived.map((loc, idx) => (
                <React.Fragment key={loc.placeName}>
                  <button
                    onClick={() => handleLocationClick(loc.mapPinId)}
                    className="flex-shrink-0 w-44 text-left p-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EBE5DA] border border-[#E5DFD5] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-serif text-[#2C2C2A] group-hover:text-[#C88A6B]">
                        {loc.placeName}
                      </span>
                      <span className="text-[0.5625rem] font-mono text-[#96938B]">
                        {loc.coordinates.lat.toFixed(1)}°N
                      </span>
                    </div>
                    <p className="text-[0.6875rem] text-[#6B6862] leading-snug line-clamp-2">
                      {loc.roleInLife}
                    </p>
                  </button>

                  {idx < character.locationsLived.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#C88A6B] flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 5. Why They Matter */}
          <div className="bg-[#EFE9DC]/70 rounded-2xl p-4 border border-[#E2D6C3]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#B07456] mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Why They Matter
            </h3>
            <ul className="space-y-1.5">
              {character.whyTheyMatter.map((bullet, i) => (
                <li
                  key={i}
                  className="text-[#2C2C2A] flex items-start gap-2 leading-relaxed"
                  style={{ fontSize: `${Math.max(12, bodySize - 1)}px` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88A6B] mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Key Chapters */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#76746E] mb-2 px-1">
              Key Chapters to Read
            </h3>
            <div className="space-y-2">
              {character.keyChapters.map((ch) => (
                <button
                  key={ch.reference}
                  onClick={() => handleKeyChapterClick(ch.chapterId, ch.anchorVerseNumber)}
                  className="w-full p-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white flex items-center justify-between transition-all shadow-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 text-left">
                    <BookOpen className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold">{ch.reference}</div>
                      <div className="text-[0.6875rem] text-white/85">{ch.label}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold flex items-center gap-1">
                    Open Story <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
