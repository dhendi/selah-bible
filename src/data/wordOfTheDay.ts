import type { EntityCard } from '../types/bible';

export const TERM_MANNA_ENTITY: EntityCard = {
  id: 'term-manna',
  type: 'term',
  title: 'Manna: Bread from Heaven',
  originalLanguageTerm: 'Hebrew: מָן (Man) · What is it?',
  transliteration: 'Man',
  strongsNumber: 'H4478',
  shortDefinition: 'Miraculous edible frost-like substance provided daily for 40 years.',
  historicalContext: 'After Israel left Egypt, they grumbled from hunger in the Wilderness of Sin. God responded by raining manna—a fine, flake-like substance like coriander seeds tasting like honey wafers—every morning for 40 years, which they gathered daily except on the Sabbath.',
  theologicalInsight: "Jesus later declared in John 6: 'I am the bread of life. Your fathers ate the manna in the wilderness, and they died. This is the bread that comes down from heaven, so that one may eat of it and not die.' Manna trains humanity in daily faith rather than hoarding.",
  timelineYear: 'Exodus ~1446 BC',
  timelineEra: 'Exodus & Wilderness',
  frequencyCount: 'Appears: 19 times',
  mapCoordinates: {
    lat: 28.539,
    lng: 33.975,
    regionName: 'Wilderness of Sin',
    routeDescription: 'Route through Wilderness of Sin (Between Elim and Mount Sinai)',
    modernCountry: 'Sinai Peninsula, Egypt',
  },
  relatedVerseRefs: ['Exodus 16:15', 'Numbers 11:7', 'Deuteronomy 8:3', 'John 6:31-35'],
  iconSlug: 'manna-flakes',
};

export interface FeaturedWordPreview {
  entityId: string;
  label: string;
  glyph: string;
  title: string;
  subtitle: string;
}

export function getWordStudyForChapter(chapterId: string, isNt: boolean): FeaturedWordPreview {
  const dash = chapterId.indexOf('-');
  const book = dash >= 0 ? chapterId.slice(0, dash) : chapterId;
  if (!isNt) {
    if (book === 'PSA' || book === 'RUT') {
      return {
        entityId: 'term-loyal-love',
        label: 'Hebrew Word Study',
        glyph: 'חֶסֶד',
        title: 'Hesed: Covenant Steadfast Love',
        subtitle: 'Hebrew: חֶסֶד (Chesed) · Unfailing Loyal Love',
      };
    }
    if (book === 'GEN') {
      return {
        entityId: 'term-imago-dei',
        label: 'Hebrew Word Study',
        glyph: 'צֶלֶם',
        title: 'Image of God (Imago Dei)',
        subtitle: 'Hebrew: צֶלֶם אֱלֹהִים (Tselem Elohim) · Royal Mirror',
      };
    }
    return {
      entityId: 'term-manna',
      label: 'Hebrew Word Study',
      glyph: 'מָן',
      title: 'Manna: Bread from Heaven',
      subtitle: 'Hebrew: מָן (Man) · What is it?',
    };
  }
  if (book === 'REV') {
    return {
      entityId: 'term-alpha-omega',
      label: 'Greek Word Study',
      glyph: 'Α Ω',
      title: 'Alpha & Omega (First & Last)',
      subtitle: 'Greek: τὸ Ἄλφα καὶ τὸ Ὦ · Beginning & End',
    };
  }
  if (book === '1CO' || book === '1JN' || book === 'JHN') {
    return {
      entityId: 'term-agape-love',
      label: 'Greek Word Study',
      glyph: 'Ἀγάπη',
      title: 'Agape Love (Self-Giving Care)',
      subtitle: 'Greek: ἀγάπη (Agape) · “The More Excellent Way”',
    };
  }
  if (book === 'MAT' || book === 'MRK' || book === 'LUK') {
    return {
      entityId: 'term-beatitudes-blessed',
      label: 'Greek Word Study',
      glyph: 'Μακάριος',
      title: 'Blessed (Makarios · Deep Flourishing)',
      subtitle: 'Greek: μακάριος · Upheld Under God’s Favor',
    };
  }
  return {
    entityId: 'term-grace',
    label: 'Greek Word Study',
    glyph: 'Χάρις',
    title: 'Grace (Unmerited Favor in Christ)',
    subtitle: 'Greek: χάρις (Charis) · Freely Given Gift',
  };
}
