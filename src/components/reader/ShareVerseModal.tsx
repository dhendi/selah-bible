import React, { useState } from 'react';
import { X, Copy, Check, Share2, Download } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { StoryIllustration } from '../illustrations/StoryIllustration';

export const ShareVerseModal: React.FC = () => {
  const { activeShareVerse, closeShareModal, preferences } = useStudyStore();
  const [copied, setCopied] = useState(false);

  if (!activeShareVerse) return null;

  const fontClass = preferences.isDyslexicFont
    ? 'font-dyslexic'
    : preferences.fontFamily === 'sans'
    ? 'font-sans'
    : 'font-serif';

  const handleCopy = () => {
    const shareText = `"${activeShareVerse.verseText}" — ${activeShareVerse.verseRef} (via Selah Bible)`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#2C2C2A]/50 backdrop-blur-xs animate-fade-in"
        onClick={closeShareModal}
      />

      <div
        className="relative w-full max-w-sm bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DFD5] p-5 z-10 animate-slide-up"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E2D7]">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#7A9A82]" />
            <h3 className="text-sm font-bold text-[#2C2C2A]">Share Illustrated Verse Card</h3>
          </div>
          <button
            onClick={closeShareModal}
            className="p-1.5 rounded-full hover:bg-[#F3EFE6] text-[#76746E]"
            aria-label="Close share modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Shareable Illustrated Graphic Card */}
        <div className="rounded-3xl overflow-hidden border border-[#E5DFD5] bg-[#F3EFE6] shadow-md mb-5">
          <StoryIllustration
            illustrationId={activeShareVerse.illustrationId}
            className="w-full h-40 rounded-none"
          />
          <div className="p-5 bg-[#FAF7F2]">
            <p
              className={`text-[#2C2C2A] italic leading-relaxed ${fontClass}`}
              style={{
                fontSize: `${Math.min(preferences.fontSize, 19)}px`,
                lineHeight: preferences.lineHeight,
              }}
            >
              "{activeShareVerse.verseText}"
            </p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EFEAE1]">
              <span className="text-xs font-bold text-[#7A9A82]">
                {activeShareVerse.verseRef}
              </span>
              <span className="text-[10px] font-serif text-[#96938B]">
                Selah • Connected Bible
              </span>
            </div>
          </div>
        </div>

        {/* Share Actions */}
        <div className="flex gap-2.5">
          <button
            onClick={handleCopy}
            className="flex-1 py-3 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied Verse!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Text</span>
              </>
            )}
          </button>

          <button
            onClick={handleCopy}
            className="px-4 py-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EDE7DC] border border-[#E5DFD5] text-[#2C2C2A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Save or Copy Card"
          >
            <Download className="w-4 h-4 text-[#C88A6B]" />
            <span>Save Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};
