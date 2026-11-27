export type BiblicalGenre = 
  | 'Law' 
  | 'History' 
  | 'Poetry' 
  | 'Prophets' 
  | 'Gospels' 
  | 'Letters' 
  | 'Prophecy';

export type Testament = 'OT' | 'NT';

export type EntityType = 'person' | 'place' | 'term' | 'artifact' | 'concept';

export interface IllustrationAsset {
  id: string;
  title: string;
  category: 'narrative' | 'thematic';
  themeType: 'creation' | 'desert-manna' | 'ruth-naomi' | 'peace-pastures' | 'wisdom-scroll' | 'courage-light';
  tags: string[];
  description?: string;
}

export interface BookOverview {
  id: string; // e.g., 'GEN', 'EXO', 'RUT'
  slug: string;
  title: string;
  genre: BiblicalGenre;
  genreLabel: string;
  testament: Testament;
  summaryHook: string;
  bigPictureText: string;
  era: string;
  keyThemes: string[];
  chapterCount: number;
  illustrationType: 'creation' | 'desert-manna' | 'ruth-naomi' | 'scroll' | 'temple' | 'cross' | 'crown';
}

export interface LinkedSpan {
  entityId: string;
  spanText: string;
  startIndex?: number;
  endIndex?: number;
}

export interface Verse {
  id?: string;
  bookId: string;
  bookName: string;
  chapterNumber: number;
  verseNumber: number;
  text: string;
  translation: string;
  linkedEntities: LinkedSpan[];
  illustrationId: string; // Universal verse mapping
}

export interface ChapterData {
  bookId: string;
  bookName: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  summaryHook: string;
  bigPictureText: string;
  verses: Verse[];
  illustrationTheme: string;
  illustrationId?: string;
}

export interface StoryModule {
  id: string;
  bookId: string;
  chapterRange: string;
  chapterId: string;
  title: string;
  subtitle: string;
  bigPictureSummary: string;
  anchorVerseId: string;
  anchorVerseRef: string;
  anchorVerseText: string;
  anchorVerseNumber: number;
  illustrationId: string;
  themes: string[];
  kidFriendly: boolean;
  oneSentenceSummary: string;
}

export interface VerseExplanation {
  verseId: string; // e.g. 'GEN-1:1', 'EXO-16:15', 'RUT-1:16'
  verseRef: string;
  whatThisMeans: string;
  lessonForYou: string;
  tryThisAction: string;
  kidFriendlySummary: string;
}

export type CharacterRoleBadge = 'Leaders' | 'Women of Faith' | 'Prophets' | 'New Testament';

export interface CharacterLocation {
  placeName: string;
  roleInLife: string;
  coordinates: { lat: number; lng: number };
  mapPinId?: string;
}

export interface CharacterKeyChapter {
  reference: string;
  label: string;
  storyModuleId: string;
  chapterId: string;
  anchorVerseNumber?: number;
}

export interface CharacterCard {
  id: string;
  name: string;
  nameMeaning: string;
  era: string;
  roleBadge: CharacterRoleBadge;
  portraitIllustrationId: string;
  quickBio: string;
  familyTree: {
    parents: string[];
    siblings: string[];
    spouse?: string[];
    children?: string[];
  };
  locationsLived: CharacterLocation[];
  whyTheyMatter: string[];
  keyChapters: CharacterKeyChapter[];
}

export interface JournalEntry {
  id: string;
  createdAt: string;
  verseReference: string;
  passageSnapshotText: string;
  illustrationId: string;
  reactionTags: string[];
  userReflectionText: string;
  linkedToPrayerList: boolean;
  prayerAnswered: boolean;
  bookId: string;
}

export interface MapCoordinates {
  lat: number;
  lng: number;
  regionName: string;
  routeDescription: string;
  modernCountry?: string;
  zoomLevel?: number;
}

export interface EntityCard {
  id: string;
  type: EntityType;
  title: string;
  originalLanguageTerm: string; // e.g. "Hebrew: מן (Man) · What is it?"
  transliteration?: string;
  strongsNumber?: string;
  shortDefinition: string;
  historicalContext: string;
  theologicalInsight?: string;
  timelineYear: string; // e.g. "Exodus ~1446 BC"
  timelineEra: string;
  frequencyCount?: string; // e.g. "Appears: 2,500+ times"
  mapCoordinates?: MapCoordinates;
  relatedVerseRefs: string[];
  iconSlug?: string;
  characterId?: string;
}

export interface QuizQuestion {
  id: string;
  passageId: string;
  passageRef: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  takeaway: string;
}

export interface Flashcard {
  id: string;
  verseReference: string;
  verseText: string;
  keyConcept: string;
  hebrewGreek?: string;
  hint: string;
  nextReviewDate: string; // ISO date string
  interval: number; // in days
  repetitions: number;
  easeFactor: number;
  lastScore?: number; // 0-5
}

export interface UserVerseNote {
  id: string;
  verseRef: string; // e.g. "Genesis 1:1"
  bookId: string;
  noteText: string;
  tag?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReaderPreferences {
  fontSize: number; // e.g., 18 (range 15-30)
  lineHeight: number; // e.g. 1.7 (range 1.4-2.2)
  fontFamily: 'serif' | 'sans' | 'dyslexic';
  isDyslexicFont: boolean;
  highContrast: boolean;
  highlightConnections: boolean;
  audioSpeechRate: number;
  uiScale?: 'normal' | 'large' | 'xlarge';
}

export interface UserStudyProgress {
  hasCompletedOnboarding: boolean;
  experienceLevel: 'beginner' | 'moderate' | 'deep';
  streakDays: number;
  lastActiveDate: string;
  completedQuizzes: string[]; // question ids
  quizScores: { quizId: string; score: number; total: number; date: string }[];
  readVersesCount: number;
  savedPassageBookmarks: string[];
  lastReadPassage: {
    bookId: string;
    chapterNumber: number;
    verseNumber?: number;
  };
}

export interface TimelineEra {
  id: string;
  name: string;
  approxDate: string;
  summary: string;
  color: string;
  keyEvents: { year: string; event: string; reference: string }[];
}

export interface MapLocationPin {
  id: string;
  name: string;
  ancientName: string;
  biblicalSignificance: string;
  modernLocation: string;
  xPercent: number; // 0-100 on stylized map
  yPercent: number; // 0-100 on stylized map
  era: string;
  keyPassage: string;
  region?: 'near-east' | 'mediterranean';
}
