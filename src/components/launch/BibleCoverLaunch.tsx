import React, { useEffect, useState } from 'react';

export const BibleCoverLaunch: React.FC = () => {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'fading' | 'done'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return 'fading';
    }
    return 'closed';
  });

  useEffect(() => {
    if (phase === 'done') return;

    if (phase === 'closed') {
      const t = window.setTimeout(() => setPhase('opening'), 650);
      return () => window.clearTimeout(t);
    }
    if (phase === 'opening') {
      const t = window.setTimeout(() => setPhase('fading'), 850);
      return () => window.clearTimeout(t);
    }
    if (phase === 'fading') {
      const t = window.setTimeout(() => setPhase('done'), 320);
      return () => window.clearTimeout(t);
    }
  }, [phase]);

  const handleTriggerOpen = () => {
    if (phase === 'closed') {
      setPhase('opening');
    } else if (phase === 'opening') {
      setPhase('fading');
    }
  };

  if (phase === 'done') return null;

  const isOpeningOrFading = phase === 'opening' || phase === 'fading';
  const isFading = phase === 'fading';

  return (
    <div
      onClick={handleTriggerOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
          handleTriggerOpen();
        }
      }}
      aria-label="Opening Holy Bible"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-6 select-none cursor-pointer transition-opacity duration-300 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 44%, #F6F0E4 0%, #DFD3BD 100%)',
      }}
    >
      {/* 3D Book Stage */}
      <div
        className={`relative w-[min(78vw,320px)] aspect-[3/4.25] transition-transform duration-700 ease-out ${
          isFading ? 'scale-[1.06]' : isOpeningOrFading ? 'scale-[1.02]' : 'scale-100'
        }`}
        style={{ perspective: '1750px' }}
      >
        {/* Ambient Ground Shadow Under Bible */}
        <div
          className={`absolute -inset-x-4 -bottom-5 top-6 rounded-2xl transition-opacity duration-700 pointer-events-none ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'radial-gradient(ellipse at 50% 62%, rgba(44,32,22,0.34) 0%, rgba(44,32,22,0) 72%)',
            filter: 'blur(12px)',
          }}
        />

        {/* Silk Crimson Bookmark Ribbon Peeking Bottom */}
        <div
          className="absolute left-[46%] -bottom-4 w-3.5 h-10 bg-[#8B3A2B] shadow-md transition-transform duration-700"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)',
            transform: isOpeningOrFading ? 'translateY(3px)' : 'translateY(0)',
          }}
        />

        {/* Back Board + Stacked Gilded Page Block (Visible Under Cover) */}
        <div
          className="absolute inset-0 rounded-r-xl rounded-l-[4px] bg-[#2D1A15] shadow-2xl overflow-hidden"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Inner Cream Flyleaf Sheet */}
          <div className="absolute inset-y-[5px] left-[10px] right-[5px] rounded-r-lg bg-[#FBF8F1] border border-[#DDD3C1] flex flex-col items-center justify-center px-6 text-center shadow-inner">
            {/* Subtle Inner Gutter Shadow */}
            <div
              className="absolute inset-y-0 left-0 w-7 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(60,44,32,0.18) 0%, rgba(60,44,32,0) 100%)',
              }}
            />
            {/* Inner Crimson Ribbon Line */}
            <div className="absolute top-0 bottom-0 left-[22px] w-[2.5px] bg-[#8B3A2B]/80" />

            <div className="text-[0.6rem] uppercase tracking-[0.26em] text-[#8B3A2B] font-semibold">
              The Holy Scriptures
            </div>
            <div className="mt-2 font-serif text-xl font-semibold text-[#24221E] tracking-tight">
              Selah Study Edition
            </div>
            <div className="mt-2 w-10 h-px bg-[#D6CCBA]" />
            <p className="mt-2 font-serif italic text-xs text-[#666158]">
              World English Bible
            </p>
          </div>

          {/* Right Page-Block Depth Stripes */}
          <div
            className="absolute top-[5px] bottom-[5px] right-0 w-[6px] pointer-events-none"
            style={{
              background:
                'repeating-linear-gradient(90deg, #EDE4D3 0px, #EDE4D3 1px, #D7CBB4 1px, #D7CBB4 2px)',
            }}
          />
        </div>

        {/* Hinged Front Leather Cover (Swings Left Along Spine) */}
        <div
          className="absolute inset-0 rounded-r-xl rounded-l-[5px] shadow-[6px_10px_28px_rgba(32,20,14,0.38)]"
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            transition: 'transform 820ms cubic-bezier(0.22, 1, 0.36, 1)',
            transform: isOpeningOrFading ? 'rotateY(-128deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Face of Cover */}
          <div
            className="absolute inset-0 rounded-r-xl rounded-l-[5px] overflow-hidden flex flex-col justify-between p-5 sm:p-6"
            style={{
              backfaceVisibility: 'hidden',
              background:
                'linear-gradient(135deg, #4B2E26 0%, #382019 52%, #2B1712 100%)',
              boxShadow: 'inset 0 1px 1px rgba(255,235,205,0.16), inset 0 -2px 6px rgba(0,0,0,0.45)',
            }}
          >
            {/* Tactile Spine Ridges on Left Edge */}
            <div
              className="absolute inset-y-0 left-0 w-6 pointer-events-none border-r border-black/30"
              style={{
                background:
                  'linear-gradient(90deg, #24130E 0%, #4E3027 42%, #2B1813 100%)',
              }}
            >
              {/* Raised Horizontal Spine Bands */}
              {[14, 32, 68, 86].map((pct) => (
                <div
                  key={pct}
                  className="absolute inset-x-0 h-[3px]"
                  style={{
                    top: `${pct}%`,
                    background:
                      'linear-gradient(180deg, rgba(212,176,106,0.28) 0%, rgba(0,0,0,0.45) 100%)',
                  }}
                />
              ))}
            </div>

            {/* Double Gold-Foil Debossed Cover Frame */}
            <div className="relative z-10 ml-5 h-full rounded-r-md border border-[#D4B06A]/50 p-1.5 flex flex-col">
              <div className="flex-1 border border-[#D4B06A]/30 rounded-r-sm px-4 py-6 flex flex-col items-center justify-between text-center">
                {/* Top Decorative Ornament + Cross */}
                <div className="flex flex-col items-center gap-2 pt-2">
                  <svg
                    width="22"
                    height="28"
                    viewBox="0 0 22 28"
                    fill="none"
                    aria-hidden="true"
                    className="opacity-90"
                  >
                    <path
                      d="M11 2V26M4 9.5H18"
                      stroke="#DFC17E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="w-12 h-px bg-[#D4B06A]/45" />
                </div>

                {/* Engraved Center Gold Foil Title */}
                <div className="space-y-2.5 my-auto">
                  <h1
                    className="font-serif font-bold text-2xl sm:text-[1.65rem] tracking-[0.2em] leading-snug"
                    style={{
                      color: '#EAD092',
                      textShadow: '0 1px 1px rgba(0,0,0,0.6)',
                    }}
                  >
                    HOLY
                    <br />
                    BIBLE
                  </h1>
                  <div className="w-8 h-[1px] bg-[#D4B06A]/55 mx-auto" />
                  <p className="font-serif italic text-xs text-[#DFC17E]/90 tracking-wide">
                    Selah Edition
                  </p>
                </div>

                {/* Bottom Subtle Foil Stamp */}
                <div className="pb-1 space-y-1">
                  <div className="w-10 h-px bg-[#D4B06A]/40 mx-auto" />
                  <div className="text-[0.55rem] uppercase tracking-[0.22em] text-[#D4B06A]/75 font-medium">
                    World English Bible
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inside Back Surface of Swinging Cover */}
          <div
            className="absolute inset-0 rounded-l-xl bg-[#EAE2D2] border border-[#D4C9B4]"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              boxShadow: 'inset -8px 0 18px rgba(44,32,22,0.16)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
