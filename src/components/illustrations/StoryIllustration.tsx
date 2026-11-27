import React from 'react';
import { assetUrl } from '../../utils/assetUrl';
import { SEED_ENTITIES } from '../../data/seedEntities';
import { resolveEntityAsset } from './EntityThumbnails';
import { getPortraitAsset } from './CharacterPortrait';

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
  const estherMatch = /^ill-est-(\d+)$/.exec(key);
  if (estherMatch) {
    const ch = Number(estherMatch[1]);
    if (ch >= 1 && ch <= 10) {
      return {
        src: `/images/est-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Esther ${ch} illustration`,
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
  const proverbsMatch = /^ill-pro-(\d+)$/.exec(key);
  if (proverbsMatch) {
    const ch = Number(proverbsMatch[1]);
    if (ch >= 1 && ch <= 31) {
      return {
        src: `/images/pro-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Proverbs ${ch} illustration`,
      };
    }
  }
  const eccMatch = /^ill-ecc-(\d+)$/.exec(key);
  if (eccMatch) {
    const ch = Number(eccMatch[1]);
    if (ch >= 1 && ch <= 12) {
      return {
        src: `/images/ecc-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Ecclesiastes ${ch} illustration`,
      };
    }
  }
  const sngMatch = /^ill-sng-(\d+)$/.exec(key);
  if (sngMatch) {
    const ch = Number(sngMatch[1]);
    if (ch >= 1 && ch <= 8) {
      return {
        src: `/images/sng-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Song of Solomon ${ch} illustration`,
      };
    }
  }
  const isaMatch = /^ill-isa-(\d+)$/.exec(key);
  if (isaMatch) {
    const ch = Number(isaMatch[1]);
    if (ch >= 1 && ch <= 66) {
      return {
        src: `/images/isa-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Isaiah ${ch} illustration`,
      };
    }
  }
  const jerMatch = /^ill-jer-(\d+)$/.exec(key);
  if (jerMatch) {
    const ch = Number(jerMatch[1]);
    if (ch >= 1 && ch <= 52) {
      return {
        src: `/images/jer-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Jeremiah ${ch} illustration`,
      };
    }
  }
  const lamMatch = /^ill-lam-(\d+)$/.exec(key);
  if (lamMatch) {
    const ch = Number(lamMatch[1]);
    if (ch >= 1 && ch <= 5) {
      return {
        src: `/images/lam-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Lamentations ${ch} illustration`,
      };
    }
  }
  const ezkMatch = /^ill-ezk-(\d+)$/.exec(key);
  if (ezkMatch) {
    const ch = Number(ezkMatch[1]);
    if (ch >= 1 && ch <= 48) {
      return {
        src: `/images/ezk-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Ezekiel ${ch} illustration`,
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
  const hoseaMatch = /^ill-hos-(\d+)$/.exec(key);
  if (hoseaMatch) {
    const ch = Number(hoseaMatch[1]);
    if (ch >= 1 && ch <= 14) {
      return {
        src: `/images/hos-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Hosea ${ch} illustration`,
      };
    }
  }
  const joelMatch = /^ill-jol-(\d+)$/.exec(key);
  if (joelMatch) {
    const ch = Number(joelMatch[1]);
    if (ch >= 1 && ch <= 3) {
      return {
        src: `/images/jol-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Joel ${ch} illustration`,
      };
    }
  }
  const amosMatch = /^ill-amo-(\d+)$/.exec(key);
  if (amosMatch) {
    const ch = Number(amosMatch[1]);
    if (ch >= 1 && ch <= 9) {
      return {
        src: `/images/amo-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Amos ${ch} illustration`,
      };
    }
  }
  const obaMatch = /^ill-oba-(\d+)$/.exec(key);
  if (obaMatch) {
    const ch = Number(obaMatch[1]);
    if (ch >= 1 && ch <= 1) {
      return {
        src: `/images/oba-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Obadiah ${ch} illustration`,
      };
    }
  }
  const jonMatch = /^ill-jon-(\d+)$/.exec(key);
  if (jonMatch) {
    const ch = Number(jonMatch[1]);
    if (ch >= 1 && ch <= 4) {
      return {
        src: `/images/jon-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Jonah ${ch} illustration`,
      };
    }
  }
  const micMatch = /^ill-mic-(\d+)$/.exec(key);
  if (micMatch) {
    const ch = Number(micMatch[1]);
    if (ch >= 1 && ch <= 7) {
      return {
        src: `/images/mic-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Micah ${ch} illustration`,
      };
    }
  }
  const namMatch = /^ill-nam-(\d+)$/.exec(key);
  if (namMatch) {
    const ch = Number(namMatch[1]);
    if (ch >= 1 && ch <= 3) {
      return {
        src: `/images/nam-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Nahum ${ch} illustration`,
      };
    }
  }
  const habMatch = /^ill-hab-(\d+)$/.exec(key);
  if (habMatch) {
    const ch = Number(habMatch[1]);
    if (ch >= 1 && ch <= 3) {
      return {
        src: `/images/hab-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Habakkuk ${ch} illustration`,
      };
    }
  }
  const zepMatch = /^ill-zep-(\d+)$/.exec(key);
  if (zepMatch) {
    const ch = Number(zepMatch[1]);
    if (ch >= 1 && ch <= 3) {
      return {
        src: `/images/zep-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Zephaniah ${ch} illustration`,
      };
    }
  }
  const hagMatch = /^ill-hag-(\d+)$/.exec(key);
  if (hagMatch) {
    const ch = Number(hagMatch[1]);
    if (ch >= 1 && ch <= 2) {
      return {
        src: `/images/hag-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Haggai ${ch} illustration`,
      };
    }
  }
  const zecMatch = /^ill-zec-(\d+)$/.exec(key);
  if (zecMatch) {
    const ch = Number(zecMatch[1]);
    if (ch >= 1 && ch <= 14) {
      return {
        src: `/images/zec-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Zechariah ${ch} illustration`,
      };
    }
  }
  const malMatch = /^ill-mal-(\d+)$/.exec(key);
  if (malMatch) {
    const ch = Number(malMatch[1]);
    if (ch >= 1 && ch <= 4) {
      return {
        src: `/images/mal-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Malachi ${ch} illustration`,
      };
    }
  }
  const matMatch = /^ill-mat-(\d+)$/.exec(key);
  if (matMatch) {
    const ch = Number(matMatch[1]);
    if (ch >= 1 && ch <= 28) {
      return {
        src: `/images/mat-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Matthew ${ch} illustration`,
      };
    }
  }
  const mrkMatch = /^ill-mrk-(\d+)$/.exec(key);
  if (mrkMatch) {
    const ch = Number(mrkMatch[1]);
    if (ch >= 1 && ch <= 16) {
      return {
        src: `/images/mrk-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Mark ${ch} illustration`,
      };
    }
  }
  const lukMatch = /^ill-luk-(\d+)$/.exec(key);
  if (lukMatch) {
    const ch = Number(lukMatch[1]);
    if (ch >= 1 && ch <= 24) {
      return {
        src: `/images/luk-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Luke ${ch} illustration`,
      };
    }
  }
  const jhnMatch = /^ill-jhn-(\d+)$/.exec(key);
  if (jhnMatch) {
    const ch = Number(jhnMatch[1]);
    if (ch >= 1 && ch <= 21) {
      return {
        src: `/images/jhn-${String(ch).padStart(2, '0')}.jpg`,
        alt: `John ${ch} illustration`,
      };
    }
  }
  const actMatch = /^ill-act-(\d+)$/.exec(key);
  if (actMatch) {
    const ch = Number(actMatch[1]);
    if (ch >= 1 && ch <= 28) {
      return {
        src: `/images/act-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Acts ${ch} illustration`,
      };
    }
  }
  return undefined;
}

export function resolveStoryIllustrationAsset(
  illustrationId?: string,
  themeType?: string
): { src: string; alt: string; isPortrait?: boolean } {
  const key = illustrationId || themeType || 'ill-creation';

  if (key.startsWith('entity:')) {
    const entity = SEED_ENTITIES[key.slice('entity:'.length)];
    if (entity) {
      return resolveEntityAsset({
        type: entity.type,
        iconSlug: entity.iconSlug,
        entityId: entity.id,
        characterId: entity.characterId,
        title: entity.title,
      });
    }
  }

  if (key.startsWith('portrait-')) {
    const portrait = getPortraitAsset(key);
    if (portrait) {
      return { ...portrait, isPortrait: true };
    }
  }

  if (key.startsWith('/images/')) {
    return {
      src: key,
      alt: 'Biblical illustration',
      isPortrait: key.includes('/portrait-'),
    };
  }

  const resolved = ILLUSTRATION_URL_MAP[key] || resolveChapterAsset(key);
  if (resolved) {
    return resolved;
  }

  if (key.includes('manna') || key.includes('exodus')) {
    return ILLUSTRATION_URL_MAP['ill-desert-manna'];
  }
  if (key.includes('ruth') || key.includes('naomi')) {
    return ILLUSTRATION_URL_MAP['ill-ruth-naomi'];
  }
  if (key.includes('pasture') || key.includes('peace')) {
    return ILLUSTRATION_URL_MAP['ill-peace-pastures'];
  }
  if (key.includes('scroll') || key.includes('wisdom')) {
    return ILLUSTRATION_URL_MAP['ill-wisdom-scroll'];
  }
  if (key.includes('courage') || key.includes('light')) {
    return ILLUSTRATION_URL_MAP['ill-courage-light'];
  }

  return ILLUSTRATION_URL_MAP['ill-creation'];
}

export const StoryIllustration: React.FC<{
  illustrationId?: string;
  themeType?: string;
  className?: string;
}> = ({ illustrationId, themeType, className = 'w-full h-48' }) => {
  const asset = resolveStoryIllustrationAsset(illustrationId, themeType);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#EAE4D9] shadow-inner select-none ${className}`}>
      <img
        src={assetUrl(asset.src)}
        alt={asset.alt}
        className={`w-full h-full object-cover ${asset.isPortrait ? 'object-top' : 'object-center'} transition-transform duration-500`}
        loading="lazy"
      />
    </div>
  );
};
