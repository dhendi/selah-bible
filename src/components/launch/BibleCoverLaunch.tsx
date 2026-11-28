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
      aria-label="Opening Selah Bible"
      className={`fixed inset-0 z-[100] overflow-hidden flex items-center justify-center p-0 sm:py-6 sm:px-4 select-none cursor-pointer transition-opacity duration-300 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 45%, #EFE8D8 0%, #DDD2BD 100%)',
      }}
    >
      {/* Full App-Sized 3D Book Stage */}
      <div
        className={`relative w-full h-[100dvh] sm:max-w-3xl sm:h-[88dvh] transition-transform duration-700 ease-out ${
          isFading ? 'scale-[1.02]' : 'scale-100'
        }`}
        style={{ perspective: '2400px' }}
      >
        {/* Ambient Ground Shadow Under Book (Desktop Sheet Frame) */}
        <div
          className={`hidden sm:block absolute -inset-x-3 -bottom-4 top-4 rounded-2xl transition-opacity duration-700 pointer-events-none ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'radial-gradient(ellipse at 50% 60%, rgba(44,32,22,0.34) 0%, rgba(44,32,22,0) 75%)',
            filter: 'blur(14px)',
          }}
        />

        {/* Silk Crimson Bookmark Ribbon Peeking Bottom */}
        <div
          className="hidden sm:block absolute left-[48%] -bottom-5 w-4 h-10 bg-[#8B3A2B] shadow-md transition-transform duration-700"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)',
            transform: isOpeningOrFading ? 'translateY(3px)' : 'translateY(0)',
          }}
        />

        {/* Back Board + Cream Flyleaf Page Block (Matches App Page Sheet Under Cover) */}
        <div
          className="absolute inset-0 sm:rounded-r-xl sm:rounded-l-[6px] bg-[#2D1A15] shadow-2xl overflow-hidden"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Inner Cream Book Sheet */}
          <div className="absolute inset-y-0 sm:inset-y-[6px] left-0 sm:left-[12px] right-[5px] sm:right-[7px] sm:rounded-r-lg bg-[#FBF8F1] border border-[#DDD3C1] flex flex-col items-center justify-center px-8 text-center shadow-inner">
            {/* Subtle Inner Gutter Shadow */}
            <div
              className="absolute inset-y-0 left-0 w-9 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(60,44,32,0.16) 0%, rgba(60,44,32,0) 100%)',
              }}
            />
            {/* Inner Crimson Bookmark Ribbon Line */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-[3px] bg-[#8B3A2B]/80" />

            <div className="font-serif text-4xl sm:text-5xl font-semibold text-[#24221E] tracking-[0.06em]">
              Selah
            </div>
            <div className="mt-3 w-12 h-px bg-[#D6CCBA]" />
          </div>

          {/* Right Page-Block Depth Stripes */}
          <div
            className="absolute top-0 bottom-0 sm:top-[6px] sm:bottom-[6px] right-0 w-[6px] sm:w-[8px] pointer-events-none"
            style={{
              background:
                'repeating-linear-gradient(90deg, #EDE4D3 0px, #EDE4D3 1px, #D7CBB4 1px, #D7CBB4 2px)',
            }}
          />
        </div>

        {/* Hinged Front Leather Cover (Same Dimensions as the App) */}
        <div
          className="absolute inset-0 sm:rounded-r-xl sm:rounded-l-[6px] shadow-[8px_12px_32px_rgba(32,20,14,0.4)]"
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            transition: 'transform 850ms cubic-bezier(0.22, 1, 0.36, 1)',
            transform: isOpeningOrFading ? 'rotateY(-125deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Face of Leather Cover */}
          <div
            className="absolute inset-0 sm:rounded-r-xl sm:rounded-l-[6px] overflow-hidden flex flex-col justify-between p-5 sm:p-8"
            style={{
              backfaceVisibility: 'hidden',
              background:
                'linear-gradient(135deg, #4B2E26 0%, #382019 52%, #2B1712 100%)',
              boxShadow: 'inset 0 1px 1px rgba(255,235,205,0.16), inset 0 -2px 8px rgba(0,0,0,0.45)',
            }}
          >
            {/* Tactile Spine Ridges on Left Edge */}
            <div
              className="absolute inset-y-0 left-0 w-6 sm:w-8 pointer-events-none border-r border-black/30"
              style={{
                background:
                  'linear-gradient(90deg, #24130E 0%, #4E3027 42%, #2B1813 100%)',
              }}
            >
              {/* Raised Horizontal Spine Bands */}
              {[12, 30, 70, 88].map((pct) => (
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
            <div className="relative z-10 ml-5 sm:ml-7 h-full rounded-r-lg border border-[#D4B06A]/50 p-2 sm:p-2.5 flex flex-col">
              <div className="flex-1 border border-[#D4B06A]/30 rounded-r-md px-6 py-10 sm:py-14 flex flex-col items-center justify-center text-center">
                {/* Centered Engraved Gold Title: Selah */}
                <div className="flex flex-col items-center gap-6 my-auto">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    aria-hidden="true"
                    className="opacity-85"
                  >
                    <path
                      d="M12 2V30M4.5 10.5H19.5"
                      stroke="#DFC17E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>

                  <h1
                    className="font-serif font-bold text-5xl sm:text-6xl tracking-[0.14em]"
                    style={{
                      color: '#EAD092',
                      textShadow: '0 2px 3px rgba(0,0,0,0.55)',
                    }}
                  >
                    Selah
                  </h1>

                  <div className="w-16 h-px bg-[#D4B06A]/45" />
                </div>
              </div>
            </div>
          </div>

          {/* Inside Back Surface of Swinging Cover */}
          <div
            className="absolute inset-0 sm:rounded-l-xl bg-[#EAE2D2] border border-[#D4C9B4]"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              boxShadow: 'inset -10px 0 24px rgba(44,32,22,0.18)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
