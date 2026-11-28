import React, { useState } from 'react';
import { X, Copy, Check, Share2, Download } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { StoryIllustration, resolveStoryIllustrationAsset } from '../illustrations/StoryIllustration';
import { assetUrl } from '../../utils/assetUrl';

function wrapTextLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export const ShareVerseModal: React.FC = () => {
  const { activeShareVerse, closeShareModal, preferences } = useStudyStore();
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!activeShareVerse) return null;

  const isStudyCard = Boolean(activeShareVerse.cardTitle);

  const fontClass = preferences.isDyslexicFont
    ? 'font-dyslexic'
    : preferences.fontFamily === 'sans'
    ? 'font-sans'
    : 'font-serif';

  const handleCopy = () => {
    const shareText = isStudyCard
      ? [
          activeShareVerse.cardTitle,
          activeShareVerse.originalTerm ? `(${activeShareVerse.originalTerm})` : '',
          `— ${activeShareVerse.verseText}`,
          `[${activeShareVerse.verseRef}] (via Selah Bible)`,
        ]
          .filter(Boolean)
          .join(' ')
      : `"${activeShareVerse.verseText}" — ${activeShareVerse.verseRef} (via Selah Bible)`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveCard = async () => {
    try {
      const asset = resolveStoryIllustrationAsset(activeShareVerse.illustrationId);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Image load failed'));
        img.src = assetUrl(asset.src);
      });

      const width = 800;
      const imgHeight = 420;
      const pad = 44;
      const contentWidth = width - pad * 2;

      const measureCanvas = document.createElement('canvas');
      const mctx = measureCanvas.getContext('2d');
      if (!mctx) throw new Error('Canvas unavailable');

      mctx.font = 'bold 30px Georgia, serif';
      const titleLines = activeShareVerse.cardTitle
        ? wrapTextLines(mctx, activeShareVerse.cardTitle, contentWidth)
        : [];

      mctx.font = isStudyCard ? '22px system-ui, sans-serif' : 'italic 24px Georgia, serif';
      const bodyText = isStudyCard ? activeShareVerse.verseText : `"${activeShareVerse.verseText}"`;
      const bodyLines = wrapTextLines(mctx, bodyText, contentWidth).slice(0, 8);

      const extraHeaderH = isStudyCard
        ? (activeShareVerse.cardCategory ? 28 : 0) +
          titleLines.length * 36 +
          (activeShareVerse.originalTerm ? 28 : 0) +
          14
        : 0;
      const bodyH = bodyLines.length * 32;
      const height = imgHeight + pad + extraHeaderH + bodyH + 74;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas unavailable');

      ctx.fillStyle = '#FAF7F2';
      ctx.fillRect(0, 0, width, height);

      const srcRatio = img.width / img.height;
      const dstRatio = width / imgHeight;
      let sx = 0, sy = 0, sw = img.width, sh = img.height;
      if (srcRatio > dstRatio) {
        sw = img.height * dstRatio;
        sx = (img.width - sw) / 2;
      } else {
        sh = img.width / dstRatio;
        sy = asset.isPortrait ? 0 : (img.height - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, imgHeight);

      let y = imgHeight + 40;
      if (isStudyCard) {
        if (activeShareVerse.cardCategory) {
          ctx.fillStyle = '#B07456';
          ctx.font = 'bold 14px system-ui, sans-serif';
          ctx.fillText(activeShareVerse.cardCategory.toUpperCase(), pad, y);
          y += 28;
        }
        ctx.fillStyle = '#2C2C2A';
        ctx.font = 'bold 30px Georgia, serif';
        for (const line of titleLines) {
          ctx.fillText(line, pad, y);
          y += 36;
        }
        if (activeShareVerse.originalTerm) {
          ctx.fillStyle = '#7A9A82';
          ctx.font = '500 18px system-ui, sans-serif';
          ctx.fillText(activeShareVerse.originalTerm, pad, y);
          y += 28;
        }
        y += 8;
      }

      ctx.fillStyle = '#2C2C2A';
      ctx.font = isStudyCard ? '22px system-ui, sans-serif' : 'italic 24px Georgia, serif';
      for (const line of bodyLines) {
        ctx.fillText(line, pad, y);
        y += 32;
      }

      y += 12;
      ctx.strokeStyle = '#EFEAE1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pad, y);
      ctx.lineTo(width - pad, y);
      ctx.stroke();

      y += 30;
      ctx.fillStyle = '#7A9A82';
      ctx.font = 'bold 18px system-ui, sans-serif';
      ctx.fillText(activeShareVerse.verseRef, pad, y);

      ctx.fillStyle = '#96938B';
      ctx.font = '15px Georgia, serif';
      const footerRight = 'Selah • Connected Bible';
      const rightW = ctx.measureText(footerRight).width;
      ctx.fillText(footerRight, width - pad - rightW, y);

      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const slug = (activeShareVerse.cardTitle || activeShareVerse.verseRef)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      link.download = `selah-${slug || 'card'}.png`;
      link.href = url;
      link.click();

      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {
      handleCopy();
    }
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
            <h3 className="text-sm font-bold text-[#2C2C2A]">
              {isStudyCard ? 'Share Illustrated Study Card' : 'Share Illustrated Verse Card'}
            </h3>
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
            className="w-full h-44 rounded-none"
          />
          <div className="p-5 bg-[#FAF7F2]">
            {isStudyCard ? (
              <div>
                {activeShareVerse.cardCategory && (
                  <p className="text-[0.625rem] font-bold uppercase tracking-wider text-[#B07456] mb-1">
                    {activeShareVerse.cardCategory}
                  </p>
                )}
                <h4 className="text-lg font-serif font-bold text-[#2C2C2A] leading-snug">
                  {activeShareVerse.cardTitle}
                </h4>
                {activeShareVerse.originalTerm && (
                  <p className="text-xs font-medium text-[#7A9A82] font-hebrew mt-0.5 leading-snug">
                    {activeShareVerse.originalTerm}
                  </p>
                )}
                <p
                  className={`whitespace-pre-line text-[#484642] leading-relaxed mt-2.5 ${fontClass}`}
                  style={{
                    fontSize: `${Math.min(preferences.fontSize - 2, 16)}px`,
                    lineHeight: preferences.lineHeight,
                  }}
                >
                  {activeShareVerse.verseText}
                </p>
              </div>
            ) : (
              <p
                className={`text-[#2C2C2A] italic leading-relaxed ${fontClass}`}
                style={{
                  fontSize: `${Math.min(preferences.fontSize, 19)}px`,
                  lineHeight: preferences.lineHeight,
                }}
              >
                "{activeShareVerse.verseText}"
              </p>
            )}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EFEAE1]">
              <span className="text-xs font-bold text-[#7A9A82]">
                {activeShareVerse.verseRef}
              </span>
              <span className="text-[0.625rem] font-serif text-[#96938B]">
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
                <span>{isStudyCard ? 'Copied Card!' : 'Copied Verse!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Text</span>
              </>
            )}
          </button>

          <button
            onClick={handleSaveCard}
            className="px-4 py-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EDE7DC] border border-[#E5DFD5] text-[#2C2C2A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Download Illustrated Card PNG"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4 text-[#7A9A82]" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#C88A6B]" />
                <span>Save Card</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
