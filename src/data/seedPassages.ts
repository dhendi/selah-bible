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
import { JOB_CHAPTERS } from './books/jobChapters';
import { PSALMS_CHAPTERS } from './books/psalmsChapters';
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
  ...JOB_CHAPTERS,
  ...PSALMS_CHAPTERS,
  ...DANIEL_CHAPTERS,
};
