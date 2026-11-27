import React from 'react';
import { X, Sliders, ZoomIn, Eye } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';

export const TypographyDrawer: React.FC = () => {
  const {
    showTypographyDrawer,
    setShowTypographyDrawer,
    preferences,
    updatePreferences,
  } = useStudyStore();

  if (!showTypographyDrawer) return null;

  const currentScale = preferences.uiScale || 'normal';

  const handleScaleSelect = (scale: 'normal' | 'large' | 'xlarge') => {
    const suggestedFontSize =
      scale === 'xlarge'
        ? Math.max(preferences.fontSize, 24)
        : scale === 'large'
          ? Math.max(preferences.fontSize, 21)
          : preferences.fontSize;
    updatePreferences({ uiScale: scale, fontSize: suggestedFontSize });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center pointer-events-auto">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/35 backdrop-blur-xs animate-fade-in"
        onClick={() => setShowTypographyDrawer(false)}
      />

      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-t-[32px] shadow-2xl border-t border-[#E8E2D7] p-5 pb-8 z-10 animate-slide-up max-h-[88vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Display Size and Reading Comfort"
      >
        {/* Handle */}
        <div className="w-12 h-1.5 bg-[#DED7CB] rounded-full mx-auto mb-4" />

        <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7] mb-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#7A9A82]" />
            <h3 className="text-base font-bold text-[#2C2C2A]">Display Size & Reading Comfort</h3>
          </div>
          <button
            onClick={() => setShowTypographyDrawer(false)}
            className="p-2 rounded-full hover:bg-[#F3EFE6] text-[#76746E] cursor-pointer"
            aria-label="Close display settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Whole-App UI & Button Size selector */}
        <div className="mb-4 bg-[#EBF2ED]/70 p-3.5 rounded-2xl border border-[#7A9A82]/35">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2C2C2A] mb-1">
            <ZoomIn className="w-4 h-4 text-[#5A7D63]" />
            <span>Buttons, Menus & Whole App Size</span>
          </div>
          <p className="text-[0.6875rem] text-[#55534E] mb-3 leading-snug">
            Makes buttons, book pickers, tabs, word popups, and labels bigger & easier to tap everywhere.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'normal', label: 'Standard', note: 'Default' },
              { id: 'large', label: 'Large', note: 'Bigger UI' },
              { id: 'xlarge', label: 'Extra Large', note: 'Easy Read' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleScaleSelect(opt.id as 'normal' | 'large' | 'xlarge')}
                className={`py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                  currentScale === opt.id
                    ? 'bg-[#5A7D63] text-white border-[#5A7D63] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#2C2C2A] border-[#D8D1C4] hover:bg-[#EBE5DA]'
                }`}
              >
                <div className="text-xs font-bold">{opt.label}</div>
                <div
                  className={`text-[0.625rem] mt-0.5 ${
                    currentScale === opt.id ? 'text-white/85' : 'text-[#76746E]'
                  }`}
                >
                  {opt.note}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Scripture Font Size Slider + Quick Presets */}
        <div className="mb-4 bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5]">
          <div className="flex items-center justify-between text-xs font-semibold text-[#2C2C2A] mb-2">
            <span>Bible Reading Text Size</span>
            <span className="text-[#5A7D63] font-mono">{preferences.fontSize}px</span>
          </div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-xs text-[#76746E] font-serif">A</span>
            <input
              type="range"
              min="15"
              max="30"
              step="1"
              value={preferences.fontSize}
              onChange={(e) => updatePreferences({ fontSize: parseInt(e.target.value, 10) })}
              className="w-full accent-[#7A9A82] cursor-pointer"
              aria-label="Bible reading text size"
            />
            <span className="text-lg text-[#2C2C2A] font-serif font-bold">A</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { label: 'Compact', px: 16 },
              { label: 'Regular', px: 18 },
              { label: 'Large', px: 22 },
              { label: 'Huge', px: 26 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => updatePreferences({ fontSize: preset.px })}
                className={`py-1.5 px-2 rounded-lg text-[0.6875rem] font-semibold border transition-all cursor-pointer ${
                  preferences.fontSize === preset.px
                    ? 'bg-[#7A9A82] text-white border-[#7A9A82]'
                    : 'bg-[#FAF7F2] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Line Spacing selector */}
        <div className="mb-4 bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5]">
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
                className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
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
        <div className="mb-4 bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5]">
          <div className="text-xs font-semibold text-[#2C2C2A] mb-2">Typeface Style</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'serif', label: 'Serif', fontClass: 'font-serif' },
              { id: 'sans', label: 'Sans-Serif', fontClass: 'font-sans' },
              { id: 'dyslexic', label: 'Easy-Read', fontClass: 'font-dyslexic font-medium' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  updatePreferences({
                    fontFamily: item.id as any,
                    isDyslexicFont: item.id === 'dyslexic',
                  })
                }
                className={`py-2.5 px-2 rounded-xl text-xs border text-center transition-all cursor-pointer ${
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

        {/* Audio Speech Rate */}
        <div className="mb-4 bg-[#F3EFE6] p-3.5 rounded-2xl border border-[#E5DFD5]">
          <div className="text-xs font-semibold text-[#2C2C2A] mb-2">Read-Aloud Voice Speed</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: '0.8× Slower', val: 0.8 },
              { label: '1.0× Normal', val: 1.0 },
              { label: '1.15× Brisk', val: 1.15 },
            ].map((sp) => (
              <button
                key={sp.label}
                onClick={() => updatePreferences({ audioSpeechRate: sp.val })}
                className={`py-2 px-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  Math.abs((preferences.audioSpeechRate || 1.0) - sp.val) < 0.05
                    ? 'bg-[#7A9A82] text-white border-[#7A9A82] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#2C2C2A] border-[#E5DFD5] hover:bg-[#EBE5DA]'
                }`}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility Toggles */}
        <div className="space-y-2.5">
          {/* High Contrast Ink toggle */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E5DFD5] cursor-pointer">
            <div className="flex items-start gap-2.5 pr-2">
              <Eye className="w-4 h-4 text-[#5A7D63] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#2C2C2A]">High-Contrast Dark Ink</div>
                <div className="text-[0.6875rem] text-[#76746E]">
                  Darkens light grey labels and borders for clearer reading
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              checked={preferences.highContrast}
              onChange={(e) => updatePreferences({ highContrast: e.target.checked })}
              className="w-5 h-5 accent-[#7A9A82] cursor-pointer flex-shrink-0"
            />
          </label>

          {/* Dyslexia mode quick switch */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E5DFD5] cursor-pointer">
            <div className="pr-2">
              <div className="text-xs font-semibold text-[#2C2C2A]">Dyslexia-Friendly Font (Lexend)</div>
              <div className="text-[0.6875rem] text-[#76746E]">
                Weighted base shapes and wider letter spacing
              </div>
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
              className="w-5 h-5 accent-[#7A9A82] cursor-pointer flex-shrink-0"
            />
          </label>

          {/* Highlight Connections toggle */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E5DFD5] cursor-pointer">
            <div className="pr-2">
              <div className="text-xs font-semibold text-[#2C2C2A]">Mark Study Terms</div>
              <div className="text-[0.6875rem] text-[#76746E]">
                Subtle dotted ink underlines on linked words and people
              </div>
            </div>
            <input
              type="checkbox"
              checked={preferences.highlightConnections}
              onChange={(e) => updatePreferences({ highlightConnections: e.target.checked })}
              className="w-5 h-5 accent-[#7A9A82] cursor-pointer flex-shrink-0"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
