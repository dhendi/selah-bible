import type { ChapterData } from '../types/bible';
import { GENESIS_CHAPTERS } from './books/genesisChapters';
import { EXODUS_CHAPTERS } from './books/exodusChapters';
import { LEVITICUS_CHAPTERS } from './books/leviticusChapters';
import { NUMBERS_CHAPTERS } from './books/numbersChapters';
import { DEUTERONOMY_CHAPTERS } from './books/deuteronomyChapters';
import { JOSHUA_CHAPTERS } from './books/joshuaChapters';
import { JUDGES_CHAPTERS } from './books/judgesChapters';
import { RUTH_CHAPTERS } from './books/ruthChapters';
import { FIRST_SAMUEL_CHAPTERS } from './books/firstSamuelChapters';
import { SECOND_SAMUEL_CHAPTERS } from './books/secondSamuelChapters';
import { FIRST_KINGS_CHAPTERS } from './books/firstKingsChapters';
import { SECOND_KINGS_CHAPTERS } from './books/secondKingsChapters';
import { FIRST_CHRONICLES_CHAPTERS } from './books/firstChroniclesChapters';
import { SECOND_CHRONICLES_CHAPTERS } from './books/secondChroniclesChapters';
import { EZRA_CHAPTERS } from './books/ezraChapters';
import { NEHEMIAH_CHAPTERS } from './books/nehemiahChapters';
import { ESTHER_CHAPTERS } from './books/estherChapters';
import { JOB_CHAPTERS } from './books/jobChapters';
import { PSALMS_CHAPTERS } from './books/psalmsChapters';
import { PROVERBS_CHAPTERS } from './books/proverbsChapters';
import { ECCLESIASTES_CHAPTERS } from './books/ecclesiastesChapters';
import { SONG_OF_SOLOMON_CHAPTERS } from './books/songOfSolomonChapters';
import { ISAIAH_CHAPTERS } from './books/isaiahChapters';
import { JEREMIAH_CHAPTERS } from './books/jeremiahChapters';
import { LAMENTATIONS_CHAPTERS } from './books/lamentationsChapters';
import { EZEKIEL_CHAPTERS } from './books/ezekielChapters';
import { DANIEL_CHAPTERS } from './books/danielChapters';
import { HOSEA_CHAPTERS } from './books/hoseaChapters';
import { JOEL_CHAPTERS } from './books/joelChapters';
import { AMOS_CHAPTERS } from './books/amosChapters';
import { OBADIAH_CHAPTERS } from './books/obadiahChapters';
import { JONAH_CHAPTERS } from './books/jonahChapters';
import { MICAH_CHAPTERS } from './books/micahChapters';
import { NAHUM_CHAPTERS } from './books/nahumChapters';
import { HABAKKUK_CHAPTERS } from './books/habakkukChapters';
import { ZEPHANIAH_CHAPTERS } from './books/zephaniahChapters';
import { HAGGAI_CHAPTERS } from './books/haggaiChapters';
import { ZECHARIAH_CHAPTERS } from './books/zechariahChapters';
import { MALACHI_CHAPTERS } from './books/malachiChapters';

export const SEED_CHAPTERS: Record<string, ChapterData> = {
  ...GENESIS_CHAPTERS,
  ...EXODUS_CHAPTERS,
  ...LEVITICUS_CHAPTERS,
  ...NUMBERS_CHAPTERS,
  ...DEUTERONOMY_CHAPTERS,
  ...JOSHUA_CHAPTERS,
  ...JUDGES_CHAPTERS,
  ...RUTH_CHAPTERS,
  ...FIRST_SAMUEL_CHAPTERS,
  ...SECOND_SAMUEL_CHAPTERS,
  ...FIRST_KINGS_CHAPTERS,
  ...SECOND_KINGS_CHAPTERS,
  ...FIRST_CHRONICLES_CHAPTERS,
  ...SECOND_CHRONICLES_CHAPTERS,
  ...EZRA_CHAPTERS,
  ...NEHEMIAH_CHAPTERS,
  ...ESTHER_CHAPTERS,
  ...JOB_CHAPTERS,
  ...PSALMS_CHAPTERS,
  ...PROVERBS_CHAPTERS,
  ...ECCLESIASTES_CHAPTERS,
  ...SONG_OF_SOLOMON_CHAPTERS,
  ...ISAIAH_CHAPTERS,
  ...JEREMIAH_CHAPTERS,
  ...LAMENTATIONS_CHAPTERS,
  ...EZEKIEL_CHAPTERS,
  ...DANIEL_CHAPTERS,
  ...HOSEA_CHAPTERS,
  ...JOEL_CHAPTERS,
  ...AMOS_CHAPTERS,
  ...OBADIAH_CHAPTERS,
  ...JONAH_CHAPTERS,
  ...MICAH_CHAPTERS,
  ...NAHUM_CHAPTERS,
  ...HABAKKUK_CHAPTERS,
  ...ZEPHANIAH_CHAPTERS,
  ...HAGGAI_CHAPTERS,
  ...ZECHARIAH_CHAPTERS,
  ...MALACHI_CHAPTERS,
};
