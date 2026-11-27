import React, { useMemo, useState } from 'react';
import { Users, ArrowRight, Clock, Search, X } from 'lucide-react';
import type { CharacterRoleBadge } from '../../types/bible';
import { CHARACTER_DIRECTORY_LIST } from '../../data/seedCharacters';
import { CharacterPortrait } from '../illustrations/CharacterPortrait';
import { useStudyStore } from '../../store/useStudyStore';

const ROLE_FILTERS: ('All' | CharacterRoleBadge)[] = [
  'All',
  'Leaders',
  'Women of Faith',
  'Prophets',
  'New Testament',
];

export const PeopleDirectoryView: React.FC = () => {
  const { openCharacterCard, preferences } = useStudyStore();
  const [selectedRole, setSelectedRole] = useState<'All' | CharacterRoleBadge>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';

  const filteredCharacters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CHARACTER_DIRECTORY_LIST.filter((c) => {
      if (selectedRole !== 'All' && c.roleBadge !== selectedRole) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.nameMeaning.toLowerCase().includes(q) ||
        c.era.toLowerCase().includes(q) ||
        c.quickBio.toLowerCase().includes(q)
      );
    });
  }, [selectedRole, searchQuery]);

  return (
    <div className={`space-y-4 ${fontClass}`}>
      {/* Intro Banner */}
      <div className="bg-[#F3EFE6] rounded-3xl p-4 border border-[#E5DFD5]">
        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82] flex items-center gap-1.5 mb-1">
          <Users className="w-3.5 h-3.5" />
          <span>People of the Bible ({CHARACTER_DIRECTORY_LIST.length})</span>
        </div>
        <p className="text-xs text-[#52504A] leading-relaxed">
          Explore key biblical figures, trace their family trees across generations, and follow their footsteps on the map.
        </p>
      </div>

      {/* Name & Era Quick Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#76746E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, role, or era (e.g. Mary, David, Paul)..."
          aria-label="Search biblical people"
          className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#E2DACB] text-xs text-[#2C2C2A] placeholder:text-[#8C867B] focus:outline-none focus:border-[#7A9A82]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            aria-label="Clear people search"
            className="p-1 rounded-full hover:bg-[#F3EFE6] text-[#76746E] absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Chips */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {ROLE_FILTERS.map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedRole === role
                ? 'bg-[#7A9A82] text-white shadow-xs'
                : 'bg-[#F3EFE6] text-[#76746E] hover:bg-[#EBE5DA]'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Character Cards Grid / List */}
      <div className="space-y-3">
        {filteredCharacters.length === 0 ? (
          <div className="bg-[#F3EFE6] rounded-3xl p-6 text-center border border-[#E5DFD5]">
            <p className="text-sm font-semibold text-[#2C2C2A]">No people matching “{searchQuery}”</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRole('All');
              }}
              className="mt-2 text-xs font-semibold text-[#7A9A82] hover:underline cursor-pointer"
            >
              Show all {CHARACTER_DIRECTORY_LIST.length} people
            </button>
          </div>
        ) : (
          filteredCharacters.map((character) => (
          <div
            key={character.id}
            className="bg-[#FAF7F2] rounded-3xl p-4 border border-[#E5DFD5] shadow-xs hover:border-[#7A9A82]/50 transition-all flex items-start gap-3.5"
          >
            <CharacterPortrait
              portraitId={character.portraitIllustrationId}
              className="w-16 h-16"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="text-base font-serif font-bold text-[#2C2C2A]">
                  {character.name}
                </h3>
                <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-full bg-[#EBF2ED] text-[#5A7D63]">
                  {character.roleBadge}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[0.6875rem] text-[#C88A6B] font-medium mt-0.5">
                <Clock className="w-3 h-3" />
                <span>{character.era}</span>
              </div>

              <p
                className="text-xs text-[#52504A] mt-1.5 leading-relaxed line-clamp-2"
                style={{
                  fontSize: `${Math.max(12, Math.min(preferences.fontSize - 5, 16))}px`,
                }}
              >
                {character.quickBio}
              </p>

              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => openCharacterCard(character.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#7A9A82] hover:bg-[#68866F] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
};
