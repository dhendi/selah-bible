import React from 'react';
import { SEED_CHARACTERS } from '../../data/seedCharacters';
import { getPortraitAsset } from './CharacterPortrait';
import { assetUrl } from '../../utils/assetUrl';

const ENTITY_SCENE_MAP: Record<string, string> = {
  'place-eden': '/images/gen-02.jpg',
  'place-ararat': '/images/gen-08.jpg',
  'place-babel': '/images/gen-11.jpg',
  'place-ur': '/images/gen-12.jpg',
  'place-moriah': '/images/gen-22.jpg',
  'place-hebron': '/images/gen-23.jpg',
  'place-haran': '/images/gen-24.jpg',
  'place-bethel': '/images/gen-28.jpg',
  'place-egypt': '/images/gen-41.jpg',
  'place-midian': '/images/exo-02.jpg',
  'place-nile': '/images/exo-07.jpg',
  'place-red-sea': '/images/exo-14.jpg',
  'place-marah': '/images/exo-15.jpg',
  'place-elim': '/images/exo-15.jpg',
  'place-wilderness-of-sin': '/images/exo-16.jpg',
  'place-rephidim': '/images/exo-17.jpg',
  'place-sinai': '/images/exo-19.jpg',
  'place-tent-of-meeting': '/images/lev-01.jpg',
  'place-canaan': '/images/lev-26.jpg',
  'place-kadesh': '/images/num-13.jpg',
  'place-mount-hor': '/images/num-20.jpg',
  'place-moab': '/images/num-22.jpg',
  'place-jordan': '/images/num-32.jpg',
  'place-horeb': '/images/deu-04.jpg',
  'place-mount-nebo': '/images/deu-34.jpg',
  'place-ebal-gerizim': '/images/deu-27.jpg',
  'place-jericho': '/images/jos-06.jpg',
  'place-gilgal': '/images/jos-04.jpg',
  'place-shechem': '/images/jos-24.jpg',
  'place-shiloh': '/images/jos-18.jpg',
  'place-mount-tabor': '/images/jdg-04.jpg',
  'place-spring-of-harod': '/images/jdg-07.jpg',
  'place-valley-of-sorek': '/images/jdg-16.jpg',
  'place-bethlehem': '/images/rut-02.jpg',
  'place-ramah': '/images/1sa-07.jpg',
  'place-valley-of-elah': '/images/1sa-17.jpg',
  'place-en-gedi': '/images/1sa-24.jpg',
  'place-jerusalem': '/images/2sa-05.jpg',
  'place-kidron': '/images/2sa-15.jpg',
  'place-gibeon': '/images/1ki-03.jpg',
  'place-samaria': '/images/1ki-16.jpg',
  'place-zarephath': '/images/1ki-17.jpg',
  'place-mount-carmel': '/images/1ki-18.jpg',
  'place-shunem': '/images/2ki-04.jpg',
  'place-dothan': '/images/2ki-06.jpg',
  'place-uz': '/images/job-01.jpg',
  'place-babylon': '/images/dan-01.jpg',
  'term-covenant': '/images/gen-09.jpg',
  'term-beginning': '/images/gen-01.jpg',
  'term-created': '/images/gen-01.jpg',
  'term-heavens': '/images/gen-01.jpg',
  'term-earth': '/images/gen-01.jpg',
  'term-ruach': '/images/gen-01.jpg',
  'term-imago-dei': '/images/gen-01.jpg',
  'term-passover': '/images/exo-12.jpg',
  'term-manna': '/images/exo-16.jpg',
  'term-bread': '/images/exo-16.jpg',
  'term-quail': '/images/exo-16.jpg',
  'term-frost': '/images/exo-16.jpg',
  'term-commandments': '/images/exo-20.jpg',
  'term-sabbath': '/images/exo-31.jpg',
  'term-mercy-seat': '/images/exo-37.jpg',
  'term-tabernacle': '/images/exo-40.jpg',
  'term-offering': '/images/lev-01.jpg',
  'term-atonement': '/images/lev-16.jpg',
  'term-scapegoat': '/images/lev-16.jpg',
  'term-neighbor': '/images/lev-19.jpg',
  'term-holiness': '/images/lev-20.jpg',
  'term-feasts': '/images/lev-23.jpg',
  'term-jubilee': '/images/lev-25.jpg',
  'term-blessing': '/images/num-06.jpg',
  'term-nazirite': '/images/num-06.jpg',
  'term-bronze-serpent': '/images/num-21.jpg',
  'term-cities-of-refuge': '/images/num-35.jpg',
  'term-shema': '/images/deu-06.jpg',
  'term-torah-scroll': '/images/deu-17.jpg',
  'term-circumcised-heart': '/images/deu-10.jpg',
  'term-choose-life': '/images/deu-30.jpg',
  'term-prophet-like-moses': '/images/deu-18.jpg',
  'term-scarlet-cord': '/images/jos-02.jpg',
  'term-twelve-stones': '/images/jos-04.jpg',
  'term-ark-of-covenant': '/images/jos-03.jpg',
  'term-choose-this-day': '/images/jos-24.jpg',
  'char-achan': '/images/jos-07.jpg',
  'char-gibeonites': '/images/jos-09.jpg',
  'char-barak': '/images/portrait-barak.jpg',
  'char-delilah': '/images/portrait-delilah.jpg',
  'term-judge-deliverer': '/images/jdg-02.jpg',
  'term-gideon-fleece': '/images/jdg-06.jpg',
  'term-no-king-in-israel': '/images/jdg-21.jpg',
  'term-loyal-love': '/images/rut-01.jpg',
  'term-kinsman-redeemer': '/images/rut-04.jpg',
  'char-eli': '/images/portrait-eli.jpg',
  'char-goliath': '/images/portrait-goliath.jpg',
  'term-ebenezer': '/images/1sa-07.jpg',
  'term-anointed': '/images/1sa-16.jpg',
  'term-looks-on-heart': '/images/1sa-16.jpg',
  'char-bathsheba': '/images/portrait-bathsheba.jpg',
  'char-absalom': '/images/portrait-absalom.jpg',
  'char-joab': '/images/portrait-joab.jpg',
  'term-davidic-covenant': '/images/2sa-07.jpg',
  'term-royal-table-grace': '/images/2sa-09.jpg',
  'char-jeroboam': '/images/portrait-jeroboam.jpg',
  'char-ahab': '/images/portrait-ahab.jpg',
  'char-jezebel': '/images/portrait-jezebel.jpg',
  'term-wise-heart': '/images/1ki-03.jpg',
  'term-solomon-temple': '/images/1ki-08.jpg',
  'term-still-small-voice': '/images/1ki-19.jpg',
  'char-shunammite': '/images/portrait-shunammite.jpg',
  'char-huldah': '/images/portrait-huldah.jpg',
  'term-chariots-of-fire': '/images/2ki-06.jpg',
  'term-book-of-the-law': '/images/2ki-22.jpg',
  'term-almighty': '/images/job-38.jpg',
  'term-whirlwind': '/images/job-38.jpg',
  'term-job-redeemer': '/images/job-19.jpg',
  'term-behemoth': '/images/job-40.jpg',
  'term-leviathan': '/images/job-41.jpg',
  'term-psalm-shepherd': '/images/psa-023.jpg',
  'term-refuge': '/images/psa-046.jpg',
  'term-rock-salvation': '/images/psa-018.jpg',
  'term-hallelujah': '/images/psa-150.jpg',
  'char-belshazzar': '/images/dan-05.jpg',
  'term-most-high': '/images/dan-04.jpg',
  'term-fiery-furnace': '/images/dan-03.jpg',
  'term-ancient-of-days': '/images/dan-07.jpg',
  'term-son-of-man': '/images/dan-07.jpg',
  'char-god': '/images/gen-01.jpg',
};

export const EntityThumbnail: React.FC<{
  type: string;
  iconSlug?: string;
  entityId?: string;
  characterId?: string;
  className?: string;
}> = ({ type, iconSlug, entityId, characterId, className = 'w-12 h-12' }) => {
  let src = '/images/wisdom-scroll.jpg';

  if (characterId && SEED_CHARACTERS[characterId]) {
    const portrait = getPortraitAsset(SEED_CHARACTERS[characterId].portraitIllustrationId);
    if (portrait) {
      src = portrait.src;
    }
  } else if (entityId && ENTITY_SCENE_MAP[entityId]) {
    src = ENTITY_SCENE_MAP[entityId];
  } else if (iconSlug === 'manna-flakes' || iconSlug === 'dew-frost' || iconSlug === 'quail-bird' || iconSlug === 'bread-loaf') {
    src = '/images/exo-16.jpg';
  } else if (iconSlug === 'moses-staff') {
    src = '/images/portrait-moses.jpg';
  } else if (iconSlug === 'wheat-grain') {
    src = '/images/gen-04.jpg';
  } else if (iconSlug === 'peace-dove') {
    src = '/images/gen-08.jpg';
  } else if (iconSlug === 'water-spring') {
    src = '/images/gen-16.jpg';
  } else if (iconSlug === 'divine-light' || iconSlug === 'cosmic-spark' || iconSlug === 'spark-beginning' || iconSlug === 'stars-sky') {
    src = '/images/gen-01.jpg';
  } else if (iconSlug === 'earth-globe') {
    src = '/images/peace-pastures.jpg';
  } else if (iconSlug === 'covenant-fire') {
    src = '/images/courage-light.jpg';
  } else if (iconSlug === 'desert-dunes' || type === 'place') {
    src = '/images/ruth-naomi.jpg';
  } else if (type === 'person') {
    src = '/images/portrait-ruth.jpg';
  }

  return (
    <div className={`rounded-xl bg-[#F3EFE6] border border-[#E5DFD5] shadow-sm overflow-hidden flex-shrink-0 ${className}`}>
      <img
        src={assetUrl(src)}
        alt="Biblical context artwork"
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
};
