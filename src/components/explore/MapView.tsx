import React, { useState } from 'react';
import { MapPin, Compass, BookOpen } from 'lucide-react';
import { SEED_MAP_LOCATIONS } from '../../data/seedMapLocations';
import { useStudyStore } from '../../store/useStudyStore';

export const MapView: React.FC = () => {
  const { navigateToPassage, selectedExploreItem } = useStudyStore();

  const [activePinId, setActivePinId] = useState<string>(
    selectedExploreItem && selectedExploreItem.startsWith('loc-')
      ? selectedExploreItem
      : 'loc-wilderness-sin'
  );

  const activeLocation =
    SEED_MAP_LOCATIONS.find((loc) => loc.id === activePinId) || SEED_MAP_LOCATIONS[0];

  const handleJumpToPassage = (passage: string) => {
    if (passage.includes('Exodus')) {
      const match = passage.match(/Exodus\s+(\d+)/);
      const chap = match ? match[1] : '16';
      navigateToPassage(`EXO-${chap}`);
    } else if (passage.includes('Leviticus')) {
      const match = passage.match(/Leviticus\s+(\d+)/);
      const chap = match ? match[1] : '1';
      navigateToPassage(`LEV-${chap}`);
    } else if (passage.includes('Numbers')) {
      const match = passage.match(/Numbers\s+(\d+)/);
      const chap = match ? match[1] : '1';
      navigateToPassage(`NUM-${chap}`);
    } else if (passage.includes('Deuteronomy')) {
      const match = passage.match(/Deuteronomy\s+(\d+)/);
      const chap = match ? match[1] : '6';
      navigateToPassage(`DEU-${chap}`);
    } else if (passage.includes('Joshua')) {
      const match = passage.match(/Joshua\s+(\d+)/);
      const chap = match ? match[1] : '1';
      navigateToPassage(`JOS-${chap}`);
    } else if (passage.includes('Judges')) {
      const match = passage.match(/Judges\s+(\d+)/);
      const chap = match ? match[1] : '4';
      navigateToPassage(`JDG-${chap}`);
    } else if (passage.includes('Ruth')) {
      const match = passage.match(/Ruth\s+(\d+)/);
      const chap = match ? match[1] : '1';
      navigateToPassage(`RUT-${chap}`, chap === '1' ? 16 : undefined);
    } else if (passage.includes('1 Samuel')) {
      const match = passage.match(/1 Samuel\s+(\d+)/);
      const chap = match ? match[1] : '16';
      navigateToPassage(`1SA-${chap}`);
    } else if (passage.includes('2 Samuel')) {
      const match = passage.match(/2 Samuel\s+(\d+)/);
      const chap = match ? match[1] : '7';
      navigateToPassage(`2SA-${chap}`);
    } else if (passage.includes('1 Kings')) {
      const match = passage.match(/1 Kings\s+(\d+)/);
      const chap = match ? match[1] : '18';
      navigateToPassage(`1KI-${chap}`);
    } else if (passage.includes('2 Kings')) {
      const match = passage.match(/2 Kings\s+(\d+)/);
      const chap = match ? match[1] : '6';
      navigateToPassage(`2KI-${chap}`);
    } else if (passage.includes('Job')) {
      const match = passage.match(/Job\s+(\d+)/);
      const chap = match ? match[1] : '1';
      navigateToPassage(`JOB-${chap}`);
    } else if (passage.includes('Psalm')) {
      const match = passage.match(/Psalms?\s+(\d+)/);
      const chap = match ? match[1] : '23';
      navigateToPassage(`PSA-${chap}`);
    } else if (passage.includes('Daniel')) {
      const match = passage.match(/Daniel\s+(\d+)/);
      const chap = match ? match[1] : '6';
      navigateToPassage(`DAN-${chap}`);
    } else if (passage.includes('Luke')) {
      navigateToPassage('RUT-1', 16);
    } else {
      const match = passage.match(/Genesis\s+(\d+)/);
      const chap = match ? match[1] : '1';
      navigateToPassage(`GEN-${chap}`);
    }
  };

  return (
    <div className="space-y-4">
      {/* Intro info bar */}
      <div className="flex items-center justify-between text-xs text-[#76746E] px-1">
        <span className="flex items-center gap-1.5 font-medium">
          <Compass className="w-4 h-4 text-[#C88A6B]" />
          Ancient Near East & Sinai Route
        </span>
        <span className="text-[0.6875rem] text-[#7A9A82] font-semibold">Tap any pin to inspect</span>
      </div>

      {/* Stylized Parchment Map Canvas */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5DFD5] bg-[#EFE9DD] shadow-inner select-none">
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Parchment background pattern */}
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#FAF5E8" />
              <stop offset="70%" stopColor="#EDE3CE" />
              <stop offset="100%" stopColor="#DFD2B5" />
            </radialGradient>
            {/* Water Gradient */}
            <linearGradient id="waterBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C4D7D1" />
              <stop offset="100%" stopColor="#A9C4BC" />
            </linearGradient>
          </defs>

          {/* Map Base Surface */}
          <rect width="600" height="450" fill="url(#mapGlow)" />

          {/* Mediterranean Sea (Top Left & Center North) */}
          <path
            d="M0 0 L320 0 Q300 60 360 120 Q370 170 360 210 L0 210 Z"
            fill="url(#waterBody)"
            opacity="0.85"
          />
          <text x="70" y="70" fill="#6B8E85" fontSize="13" fontStyle="italic" fontFamily="serif" opacity="0.8">
            Great Sea (Mediterranean)
          </text>

          {/* Red Sea / Gulf of Suez & Gulf of Aqaba (V-shape around Sinai) */}
          {/* Gulf of Suez (Left horn) */}
          <path
            d="M130 260 Q170 310 210 390 L180 450 L120 450 Q110 330 90 260 Z"
            fill="url(#waterBody)"
          />
          {/* Gulf of Aqaba (Right horn) */}
          <path
            d="M260 270 Q280 340 310 450 L340 450 Q310 330 280 270 Z"
            fill="url(#waterBody)"
          />
          <text x="145" y="425" fill="#6B8E85" fontSize="10" fontStyle="italic" fontFamily="serif">
            Red Sea (Yam Suph)
          </text>

          {/* Dead Sea & Jordan River */}
          <path
            d="M370 140 Q372 170 375 200 L371 205 Q368 170 367 140 Z"
            stroke="#97B8AE"
            strokeWidth="3"
            fill="none"
          />
          <ellipse cx="372" cy="190" rx="4" ry="14" fill="#A9C4BC" />
          <text x="382" y="195" fill="#6B8E85" fontSize="9" fontFamily="serif">Dead Sea</text>

          {/* Sea of Galilee */}
          <ellipse cx="370" cy="120" rx="6" ry="8" fill="#A9C4BC" />

          {/* Tigris & Euphrates River hint (North-East) */}
          <path
            d="M480 30 Q440 80 480 130 Q530 160 580 190"
            stroke="#A9C4BC"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="4 2"
          />
          <text x="460" y="55" fill="#8C7A65" fontSize="10" fontStyle="italic" fontFamily="serif">
            Mesopotamia (Eden / Ur)
          </text>

          {/* Sinai Peninsula Mountains Texture */}
          <path
            d="M220 330 L235 305 L250 330 Z"
            fill="#D5C2A5"
            stroke="#BAA382"
            strokeWidth="1"
          />
          <path
            d="M245 350 L260 320 L275 350 Z"
            fill="#CEB99A"
            stroke="#BAA382"
            strokeWidth="1"
          />
          <path
            d="M190 340 L205 315 L220 340 Z"
            fill="#D5C2A5"
            stroke="#BAA382"
            strokeWidth="1"
          />
          <text x="210" y="325" fill="#8C7A65" fontSize="11" fontStyle="italic" fontFamily="serif" opacity="0.8">
            Sinai Desert
          </text>

          {/* Abraham's Patriarchal Route (Ur -> Haran -> Bethel -> Hebron -> Goshen) */}
          <path
            d="M540 216 Q495 110 432 63 Q385 110 372 144 Q368 180 360 220 Q230 220 96 216"
            stroke="#7A9A82"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            fill="none"
            opacity="0.85"
          />

          {/* Exodus Journey Route (Dashed Terracotta Line) */}
          <path
            d="M95 245 Q125 255 155 260 Q180 290 195 330 Q215 365 240 380"
            stroke="#C88A6B"
            strokeWidth="3"
            strokeDasharray="6 4"
            fill="none"
          />

          {/* Interactive Map Location Pins (Selected rendered last on top) */}
          {[...SEED_MAP_LOCATIONS]
            .sort((a, b) => (a.id === activeLocation.id ? 1 : b.id === activeLocation.id ? -1 : 0))
            .map((loc) => {
              const isSelected = loc.id === activeLocation.id;
              const cx = (loc.xPercent / 100) * 600;
              const cy = (loc.yPercent / 100) * 450;
              const labelBelow =
                loc.id === 'loc-marah' ||
                loc.id === 'loc-rephidim' ||
                loc.id === 'loc-bethlehem';
              const shortLabel = isSelected
                ? loc.name
                : loc.name.split(' (')[0].replace(' Oasis', '').replace(' Crossing', '');

              return (
                <g
                  key={loc.id}
                  onClick={() => setActivePinId(loc.id)}
                  className="cursor-pointer group"
                  transform={`translate(${cx}, ${cy})`}
                >
                  {isSelected && (
                    <circle
                      r="14"
                      fill="#C88A6B"
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}
                  <circle
                    r={isSelected ? '9' : '6'}
                    fill={isSelected ? '#C88A6B' : '#7A9A82'}
                    stroke="#FAF7F2"
                    strokeWidth="2"
                    className="transition-all"
                  />
                  <circle r="2.2" fill="#FAF7F2" />

                  <text
                    x="0"
                    y={labelBelow ? (isSelected ? '20' : '15') : isSelected ? '-14' : '-10'}
                    textAnchor="middle"
                    fill={isSelected ? '#2C2C2A' : '#484642'}
                    stroke="#FAF7F2"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    style={{ paintOrder: 'stroke' }}
                    fontSize={isSelected ? '11.5' : '9'}
                    fontWeight={isSelected ? 'bold' : '600'}
                    fontFamily="sans-serif"
                    className="select-none"
                  >
                    {shortLabel}
                  </text>
                </g>
              );
            })}
        </svg>

        {/* Legend Overlay at bottom-right */}
        <div className="absolute bottom-2.5 right-2.5 bg-[#FAF7F2]/90 backdrop-blur-xs p-2 rounded-xl border border-[#E5DFD5] text-[0.625rem] text-[#6B6862] space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#7A9A82]" />
            <span>Biblical Landmark</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-[#7A9A82]" />
            <span>Patriarchs Route</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-[#C88A6B]" />
            <span>Exodus Route</span>
          </div>
        </div>
      </div>

      {/* Selected Location Inspector Card */}
      <div className="bg-[#FAF7F2] rounded-3xl p-5 border border-[#E5DFD5] shadow-xs animate-fade-in">
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E8E2D7] mb-3">
          <div>
            <div className="flex items-center gap-1 text-[0.6875rem] font-mono text-[#C88A6B] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activeLocation.era}</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#2C2C2A] mt-0.5">
              {activeLocation.name}
            </h3>
            <p className="text-xs text-[#7A9A82] font-hebrew font-medium">
              {activeLocation.ancientName}
            </p>
          </div>

          <button
            onClick={() => handleJumpToPassage(activeLocation.keyPassage)}
            className="px-3 py-1.5 rounded-xl bg-[#7A9A82] hover:bg-[#68866F] text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Read Passage</span>
          </button>
        </div>

        {/* Modern Location badge */}
        <div className="text-xs text-[#6B6862] mb-3">
          <span className="font-semibold text-[#2C2C2A]">Modern Geography: </span>
          {activeLocation.modernLocation}
        </div>

        {/* Significance */}
        <p className="text-sm text-[#484642] leading-relaxed mb-4">
          {activeLocation.biblicalSignificance}
        </p>

        {/* Quick jump to passage button */}
        <div className="flex items-center justify-between text-xs pt-3 border-t border-[#E8E2D7]">
          <span className="text-[#76746E]">Key Scripture Reference:</span>
          <span className="font-bold text-[#2C2C2A]">{activeLocation.keyPassage}</span>
        </div>
      </div>
    </div>
  );
};
