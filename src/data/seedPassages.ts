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
import { DANIEL_CHAPTERS } from './books/danielChapters';

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
  ...DANIEL_CHAPTERS,
};
