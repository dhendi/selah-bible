import React, { useState } from 'react';
import { Users, ArrowRight, Clock } from 'lucide-react';
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

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';

  const filteredCharacters =
    selectedRole === 'All'
      ? CHARACTER_DIRECTORY_LIST
      : CHARACTER_DIRECTORY_LIST.filter((c) => c.roleBadge === selectedRole);

  return (
    <div className={`space-y-4 ${fontClass}`}>
      {/* Intro Banner */}
      <div className="bg-[#F3EFE6] rounded-3xl p-4 border border-[#E5DFD5]">
        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7A9A82] flex items-center gap-1.5 mb-1">
          <Users className="w-3.5 h-3.5" />
          <span>People of the Bible</span>
        </div>
        <p className="text-xs text-[#52504A] leading-relaxed">
          Explore key biblical figures, trace their family trees across generations, and follow their footsteps on the map.
        </p>
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
        {filteredCharacters.map((character) => (
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
        ))}
      </div>
    </div>
  );
};
