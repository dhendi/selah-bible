import React from 'react';
import { X, Sliders } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';

export const TypographyDrawer: React.FC = () => {
  const {
    showTypographyDrawer,
    setShowTypographyDrawer,
    preferences,
    updatePreferences,
  } = useStudyStore();

  if (!showTypographyDrawer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-auto">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/35 backdrop-blur-xs animate-fade-in"
        onClick={() => setShowTypographyDrawer(false)}
      />

      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-t-[32px] shadow-2xl border-t border-[#E8E2D7] p-5 pb-8 z-10 animate-slide-up">
        {/* Handle */}
        <div className="w-12 h-1.5 bg-[#DED7CB] rounded-full mx-auto mb-4" />

        <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7] mb-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#7A9A82]" />
            <h3 className="text-base font-bold text-[#2C2C2A]">Reader & Typography Comfort</h3>
          </div>
          <button
            onClick={() => setShowTypographyDrawer(false)}
            className="p-1.5 rounded-full hover:bg-[#F3EFE6] text-[#76746E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Font Size Slider */}
        <div className="mb-5 bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5]">
          <div className="flex items-center justify-between text-xs font-semibold text-[#2C2C2A] mb-2">
            <span>Font Size</span>
            <span className="text-[#7A9A82] font-mono">{preferences.fontSize}px</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#76746E] font-serif">A</span>
            <input
              type="range"
              min="15"
              max="26"
              step="1"
              value={preferences.fontSize}
              onChange={(e) => updatePreferences({ fontSize: parseInt(e.target.value, 10) })}
              className="w-full accent-[#7A9A82] cursor-pointer"
            />
            <span className="text-lg text-[#2C2C2A] font-serif font-bold">A</span>
          </div>
        </div>

        {/* Line Spacing selector */}
        <div className="mb-5 bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5]">
          <div className="text-xs font-semibold text-[#2C2C2A] mb-2">Line Spacing</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Compact', val: 1.5 },
              { label: 'Standard', val: 1.8 },
              { label: 'Generous', val: 2.2 },
            ].map((option) => (
              <button
                key={option.label}
                onClick={() => updatePreferences({ lineHeight: option.val })}
                className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                  preferences.lineHeight === option.val
                    ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Font Family Selection */}
        <div className="mb-5 bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5]">
          <div className="text-xs font-semibold text-[#2C2C2A] mb-2">Typeface Style</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'serif', label: 'Serif', fontClass: 'font-serif' },
              { id: 'sans', label: 'Sans-Serif', fontClass: 'font-sans' },
              { id: 'dyslexic', label: 'Dyslexia Mode', fontClass: 'font-dyslexic font-medium' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  updatePreferences({
                    fontFamily: item.id as any,
                    isDyslexicFont: item.id === 'dyslexic',
                  })
                }
                className={`py-2.5 px-2 rounded-xl text-xs border text-center transition-all ${
                  preferences.fontFamily === item.id
                    ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                } ${item.fontClass}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility Toggles */}
        <div className="space-y-2.5">
          {/* Dyslexia mode quick switch */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E5DFD5] cursor-pointer">
            <div>
              <div className="text-xs font-semibold text-[#2C2C2A]">Dyslexia-Friendly Font (Lexend)</div>
              <div className="text-[11px] text-[#76746E]">Weighted base shapes and enhanced letter spacing</div>
            </div>
            <input
              type="checkbox"
              checked={preferences.isDyslexicFont}
              onChange={(e) =>
                updatePreferences({
                  isDyslexicFont: e.target.checked,
                  fontFamily: e.target.checked ? 'dyslexic' : 'serif',
                })
              }
              className="w-4 h-4 accent-[#7A9A82] cursor-pointer"
            />
          </label>

          {/* Highlight Connections toggle */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E5DFD5] cursor-pointer">
            <div>
              <div className="text-xs font-semibold text-[#2C2C2A]">Highlight Connected Concepts</div>
              <div className="text-[11px] text-[#76746E]">Soft sage underlines on theological and historical words</div>
            </div>
            <input
              type="checkbox"
              checked={preferences.highlightConnections}
              onChange={(e) => updatePreferences({ highlightConnections: e.target.checked })}
              className="w-4 h-4 accent-[#7A9A82] cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
