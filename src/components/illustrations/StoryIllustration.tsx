import React from 'react';
import { assetUrl } from '../../utils/assetUrl';

const ILLUSTRATION_URL_MAP: Record<string, { src: string; alt: string }> = {
  'ill-creation': {
    src: '/images/gen-01.jpg',
    alt: 'Creation: Cosmic Dawn and New Earth',
  },
  'ill-desert-manna': {
    src: '/images/exo-16.jpg',
    alt: 'Exodus 16: The Provision of Manna in the Wilderness',
  },
  'ill-ruth-naomi': {
    src: '/images/ruth-naomi.jpg',
    alt: 'Ruth and Naomi walking toward Bethlehem',
  },
  'ill-peace-pastures': {
    src: '/images/peace-pastures.jpg',
    alt: 'Peaceful green pastures and still waters',
  },
  'ill-wisdom-scroll': {
    src: '/images/wisdom-scroll.jpg',
    alt: 'Ancient parchment scroll and olive branch',
  },
  'ill-courage-light': {
    src: '/images/courage-light.jpg',
    alt: 'Warm glowing lantern along a twilight mountain trail',
  },
};

function resolveChapterAsset(key: string): { src: string; alt: string } | undefined {
  const genMatch = /^ill-gen-(\d+)$/.exec(key);
  if (genMatch) {
    const ch = Number(genMatch[1]);
    if (ch >= 1 && ch <= 50) {
      return {
        src: `/images/gen-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Genesis ${ch} illustration`,
      };
    }
  }
  const exoMatch = /^ill-exo-(\d+)$/.exec(key);
  if (exoMatch) {
    const ch = Number(exoMatch[1]);
    if (ch >= 1 && ch <= 40) {
      return {
        src: `/images/exo-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Exodus ${ch} illustration`,
      };
    }
  }
  const levMatch = /^ill-lev-(\d+)$/.exec(key);
  if (levMatch) {
    const ch = Number(levMatch[1]);
    if (ch >= 1 && ch <= 27) {
      return {
        src: `/images/lev-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Leviticus ${ch} illustration`,
      };
    }
  }
  const numMatch = /^ill-num-(\d+)$/.exec(key);
  if (numMatch) {
    const ch = Number(numMatch[1]);
    if (ch >= 1 && ch <= 36) {
      return {
        src: `/images/num-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Numbers ${ch} illustration`,
      };
    }
  }
  const deuMatch = /^ill-deu-(\d+)$/.exec(key);
  if (deuMatch) {
    const ch = Number(deuMatch[1]);
    if (ch >= 1 && ch <= 34) {
      return {
        src: `/images/deu-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Deuteronomy ${ch} illustration`,
      };
    }
  }
  const josMatch = /^ill-jos-(\d+)$/.exec(key);
  if (josMatch) {
    const ch = Number(josMatch[1]);
    if (ch >= 1 && ch <= 24) {
      return {
        src: `/images/jos-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Joshua ${ch} illustration`,
      };
    }
  }
  const jdgMatch = /^ill-jdg-(\d+)$/.exec(key);
  if (jdgMatch) {
    const ch = Number(jdgMatch[1]);
    if (ch >= 1 && ch <= 21) {
      return {
        src: `/images/jdg-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Judges ${ch} illustration`,
      };
    }
  }
  const rutMatch = /^ill-rut-(\d+)$/.exec(key);
  if (rutMatch) {
    const ch = Number(rutMatch[1]);
    if (ch >= 1 && ch <= 4) {
      return {
        src: `/images/rut-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Ruth ${ch} illustration`,
      };
    }
  }
  const firstSamMatch = /^ill-1sa-(\d+)$/.exec(key);
  if (firstSamMatch) {
    const ch = Number(firstSamMatch[1]);
    if (ch >= 1 && ch <= 31) {
      return {
        src: `/images/1sa-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 Samuel ${ch} illustration`,
      };
    }
  }
  const secondSamMatch = /^ill-2sa-(\d+)$/.exec(key);
  if (secondSamMatch) {
    const ch = Number(secondSamMatch[1]);
    if (ch >= 1 && ch <= 24) {
      return {
        src: `/images/2sa-${String(ch).padStart(2, '0')}.jpg`,
        alt: `2 Samuel ${ch} illustration`,
      };
    }
  }
  const firstKingsMatch = /^ill-1ki-(\d+)$/.exec(key);
  if (firstKingsMatch) {
    const ch = Number(firstKingsMatch[1]);
    if (ch >= 1 && ch <= 22) {
      return {
        src: `/images/1ki-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 Kings ${ch} illustration`,
      };
    }
  }
  const secondKingsMatch = /^ill-2ki-(\d+)$/.exec(key);
  if (secondKingsMatch) {
    const ch = Number(secondKingsMatch[1]);
    if (ch >= 1 && ch <= 25) {
      return {
        src: `/images/2ki-${String(ch).padStart(2, '0')}.jpg`,
        alt: `2 Kings ${ch} illustration`,
      };
    }
  }
  const firstChroniclesMatch = /^ill-1ch-(\d+)$/.exec(key);
  if (firstChroniclesMatch) {
    const ch = Number(firstChroniclesMatch[1]);
    if (ch >= 1 && ch <= 29) {
      return {
        src: `/images/1ch-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 Chronicles ${ch} illustration`,
      };
    }
  }
  const secondChroniclesMatch = /^ill-2ch-(\d+)$/.exec(key);
  if (secondChroniclesMatch) {
    const ch = Number(secondChroniclesMatch[1]);
    if (ch >= 1 && ch <= 36) {
      return {
        src: `/images/2ch-${String(ch).padStart(2, '0')}.jpg`,
        alt: `2 Chronicles ${ch} illustration`,
      };
    }
  }
  const ezraMatch = /^ill-ezr-(\d+)$/.exec(key);
  if (ezraMatch) {
    const ch = Number(ezraMatch[1]);
    if (ch >= 1 && ch <= 10) {
      return {
        src: `/images/ezr-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Ezra ${ch} illustration`,
      };
    }
  }
  const nehemiahMatch = /^ill-neh-(\d+)$/.exec(key);
  if (nehemiahMatch) {
    const ch = Number(nehemiahMatch[1]);
    if (ch >= 1 && ch <= 13) {
      return {
        src: `/images/neh-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Nehemiah ${ch} illustration`,
      };
    }
  }
  const jobMatch = /^ill-job-(\d+)$/.exec(key);
  if (jobMatch) {
    const ch = Number(jobMatch[1]);
    if (ch >= 1 && ch <= 42) {
      return {
        src: `/images/job-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Job ${ch} illustration`,
      };
    }
  }
  const psalmsMatch = /^ill-psa-(\d+)$/.exec(key);
  if (psalmsMatch) {
    const ch = Number(psalmsMatch[1]);
    if (ch >= 1 && ch <= 150) {
      return {
        src: `/images/psa-${String(ch).padStart(3, '0')}.jpg`,
        alt: `Psalm ${ch} illustration`,
      };
    }
  }
  const danielMatch = /^ill-dan-(\d+)$/.exec(key);
  if (danielMatch) {
    const ch = Number(danielMatch[1]);
    if (ch >= 1 && ch <= 12) {
      return {
        src: `/images/dan-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Daniel ${ch} illustration`,
      };
    }
  }
  return undefined;
}

export const StoryIllustration: React.FC<{
  illustrationId?: string;
  themeType?: string;
  className?: string;
}> = ({ illustrationId, themeType, className = 'w-full h-48' }) => {
  const key = illustrationId || themeType || 'ill-creation';

  let asset = ILLUSTRATION_URL_MAP[key] || resolveChapterAsset(key);
  if (!asset) {
    if (key.includes('manna') || key.includes('exodus')) {
      asset = ILLUSTRATION_URL_MAP['ill-desert-manna'];
    } else if (key.includes('ruth') || key.includes('naomi')) {
      asset = ILLUSTRATION_URL_MAP['ill-ruth-naomi'];
    } else if (key.includes('pasture') || key.includes('peace')) {
      asset = ILLUSTRATION_URL_MAP['ill-peace-pastures'];
    } else if (key.includes('scroll') || key.includes('wisdom')) {
      asset = ILLUSTRATION_URL_MAP['ill-wisdom-scroll'];
    } else if (key.includes('courage') || key.includes('light')) {
      asset = ILLUSTRATION_URL_MAP['ill-courage-light'];
    } else {
      asset = ILLUSTRATION_URL_MAP['ill-creation'];
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#EAE4D9] shadow-inner select-none ${className}`}>
      <img
        src={assetUrl(asset.src)}
        alt={asset.alt}
        className="w-full h-full object-cover object-center transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
};
