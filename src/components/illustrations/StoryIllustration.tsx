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
    alt: 'Unrolled ancient parchment scroll with inkwell, reed pen, and olive branch',
  },
  'ill-courage-light': {
    src: '/images/courage-light.jpg',
    alt: 'Lit terracotta clay oil lamp resting beside a sunlit Judean foothill path',
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
  const romMatch = /^ill-rom-(\d+)$/.exec(key);
  if (romMatch) {
    const ch = Number(romMatch[1]);
    if (ch >= 1 && ch <= 16) {
      return {
        src: `/images/rom-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Romans ${ch} illustration`,
      };
    }
  }
  const cor1Match = /^ill-1co-(\d+)$/.exec(key);
  if (cor1Match) {
    const ch = Number(cor1Match[1]);
    if (ch >= 1 && ch <= 16) {
      return {
        src: `/images/1co-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 Corinthians ${ch} illustration`,
      };
    }
  }
  const cor2Match = /^ill-2co-(\d+)$/.exec(key);
  if (cor2Match) {
    const ch = Number(cor2Match[1]);
    if (ch >= 1 && ch <= 13) {
      return {
        src: `/images/2co-${String(ch).padStart(2, '0')}.jpg`,
        alt: `2 Corinthians ${ch} illustration`,
      };
    }
  }
  const galMatch = /^ill-gal-(\d+)$/.exec(key);
  if (galMatch) {
    const ch = Number(galMatch[1]);
    if (ch >= 1 && ch <= 6) {
      return {
        src: `/images/gal-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Galatians ${ch} illustration`,
      };
    }
  }
  const ephMatch = /^ill-eph-(\d+)$/.exec(key);
  if (ephMatch) {
    const ch = Number(ephMatch[1]);
    if (ch >= 1 && ch <= 6) {
      return {
        src: `/images/eph-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Ephesians ${ch} illustration`,
      };
    }
  }
  const phpMatch = /^ill-php-(\d+)$/.exec(key);
  if (phpMatch) {
    const ch = Number(phpMatch[1]);
    if (ch >= 1 && ch <= 4) {
      return {
        src: `/images/php-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Philippians ${ch} illustration`,
      };
    }
  }
  const colMatch = /^ill-col-(\d+)$/.exec(key);
  if (colMatch) {
    const ch = Number(colMatch[1]);
    if (ch >= 1 && ch <= 4) {
      return {
        src: `/images/col-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Colossians ${ch} illustration`,
      };
    }
  }
  const th1Match = /^ill-1th-(\d+)$/.exec(key);
  if (th1Match) {
    const ch = Number(th1Match[1]);
    if (ch >= 1 && ch <= 5) {
      return {
        src: `/images/1th-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 Thessalonians ${ch} illustration`,
      };
    }
  }
  const th2Match = /^ill-2th-(\d+)$/.exec(key);
  if (th2Match) {
    const ch = Number(th2Match[1]);
    if (ch >= 1 && ch <= 3) {
      return {
        src: `/images/2th-${String(ch).padStart(2, '0')}.jpg`,
        alt: `2 Thessalonians ${ch} illustration`,
      };
    }
  }
  const tim1Match = /^ill-1ti-(\d+)$/.exec(key);
  if (tim1Match) {
    const ch = Number(tim1Match[1]);
    if (ch >= 1 && ch <= 6) {
      return {
        src: `/images/1ti-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 Timothy ${ch} illustration`,
      };
    }
  }
  const tim2Match = /^ill-2ti-(\d+)$/.exec(key);
  if (tim2Match) {
    const ch = Number(tim2Match[1]);
    if (ch >= 1 && ch <= 4) {
      return {
        src: `/images/2ti-${String(ch).padStart(2, '0')}.jpg`,
        alt: `2 Timothy ${ch} illustration`,
      };
    }
  }
  const titMatch = /^ill-tit-(\d+)$/.exec(key);
  if (titMatch) {
    const ch = Number(titMatch[1]);
    if (ch >= 1 && ch <= 3) {
      return {
        src: `/images/tit-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Titus ${ch} illustration`,
      };
    }
  }
  const phmMatch = /^ill-phm-(\d+)$/.exec(key);
  if (phmMatch) {
    const ch = Number(phmMatch[1]);
    if (ch === 1) {
      return {
        src: `/images/phm-01.jpg`,
        alt: `Philemon 1 illustration`,
      };
    }
  }
  const hebMatch = /^ill-heb-(\d+)$/.exec(key);
  if (hebMatch) {
    const ch = Number(hebMatch[1]);
    if (ch >= 1 && ch <= 13) {
      return {
        src: `/images/heb-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Hebrews ${ch} illustration`,
      };
    }
  }
  const jasMatch = /^ill-jas-(\d+)$/.exec(key);
  if (jasMatch) {
    const ch = Number(jasMatch[1]);
    if (ch >= 1 && ch <= 5) {
      return {
        src: `/images/jas-${String(ch).padStart(2, '0')}.jpg`,
        alt: `James ${ch} illustration`,
      };
    }
  }
  const pet1Match = /^ill-1pe-(\d+)$/.exec(key);
  if (pet1Match) {
    const ch = Number(pet1Match[1]);
    if (ch >= 1 && ch <= 5) {
      return {
        src: `/images/1pe-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 Peter ${ch} illustration`,
      };
    }
  }
  const pet2Match = /^ill-2pe-(\d+)$/.exec(key);
  if (pet2Match) {
    const ch = Number(pet2Match[1]);
    if (ch >= 1 && ch <= 3) {
      return {
        src: `/images/2pe-${String(ch).padStart(2, '0')}.jpg`,
        alt: `2 Peter ${ch} illustration`,
      };
    }
  }
  const jn1Match = /^ill-1jn-(\d+)$/.exec(key);
  if (jn1Match) {
    const ch = Number(jn1Match[1]);
    if (ch >= 1 && ch <= 5) {
      return {
        src: `/images/1jn-${String(ch).padStart(2, '0')}.jpg`,
        alt: `1 John ${ch} illustration`,
      };
    }
  }
  const jn2Match = /^ill-2jn-(\d+)$/.exec(key);
  if (jn2Match && Number(jn2Match[1]) === 1) {
    return {
      src: `/images/2jn-01.jpg`,
      alt: `2 John 1 illustration`,
    };
  }
  const jn3Match = /^ill-3jn-(\d+)$/.exec(key);
  if (jn3Match && Number(jn3Match[1]) === 1) {
    return {
      src: `/images/3jn-01.jpg`,
      alt: `3 John 1 illustration`,
    };
  }
  const judMatch = /^ill-jud-(\d+)$/.exec(key);
  if (judMatch && Number(judMatch[1]) === 1) {
    return {
      src: `/images/jud-01.jpg`,
      alt: `Jude 1 illustration`,
    };
  }
  const revMatch = /^ill-rev-(\d+)$/.exec(key);
  if (revMatch) {
    const ch = Number(revMatch[1]);
    if (ch >= 1 && ch <= 22) {
      return {
        src: `/images/rev-${String(ch).padStart(2, '0')}.jpg`,
        alt: `Revelation ${ch} illustration`,
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

  if (key.startsWith('story-')) {
    const coverMap: Record<string, { src: string; alt: string }> = {
      'story-noah-flood': { src: '/images/stories/noah-2.jpg', alt: 'Noah and the Great Flood' },
      'story-david-goliath': { src: '/images/stories/david-goliath-4.jpg', alt: 'David and Goliath' },
      'story-daniel-lions': { src: '/images/stories/daniel-lions-4.jpg', alt: 'Daniel in the Lions Den' },
      'story-good-samaritan': { src: '/images/stories/good-samaritan-4.jpg', alt: 'The Good Samaritan' },
      'story-prodigal-son': { src: '/images/stories/prodigal-son-4.jpg', alt: 'The Prodigal Son' },
      'story-red-sea': { src: '/images/stories/red-sea-4.jpg', alt: 'Moses and the Crossing of the Red Sea' },
      'story-jonah-fish': { src: '/images/stories/jonah-3.jpg', alt: 'Jonah and the Great Fish' },
      'story-queen-esther': { src: '/images/stories/esther-4.jpg', alt: 'Queen Esthers Courage' },
      'story-feeding-5000': { src: '/images/stories/feeding-5000-2.jpg', alt: 'Feeding the Five Thousand' },
      'story-parable-sower': { src: '/images/stories/sower-6.jpg', alt: 'The Parable of the Sower' },
    };
    if (coverMap[key]) return coverMap[key];
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
