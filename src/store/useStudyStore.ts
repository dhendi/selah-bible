import { useState, useEffect } from 'react';
import type {
  ReaderPreferences,
  UserStudyProgress,
  UserVerseNote,
  Flashcard,
  JournalEntry,
} from '../types/bible';
import { SEED_FLASHCARDS } from '../data/seedFlashcards';

const STORAGE_KEYS = {
  PREFS: 'selah_bible_preferences_v1',
  PROGRESS: 'selah_bible_progress_v1',
  NOTES: 'selah_bible_notes_v1',
  CARDS: 'selah_bible_flashcards_v1',
  CURRENT_CHAPTER: 'selah_bible_current_chapter_v1',
  JOURNAL: 'selah_bible_journal_v1',
};

const DEFAULT_PREFERENCES: ReaderPreferences = {
  fontSize: 18,
  lineHeight: 1.75,
  fontFamily: 'serif',
  isDyslexicFont: false,
  highContrast: false,
  highlightConnections: true,
  audioSpeechRate: 1.0,
  uiScale: 'normal',
};

function applyAccessibilityDOM(prefs: ReaderPreferences) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const px =
    prefs.uiScale === 'xlarge' ? '22px' : prefs.uiScale === 'large' ? '19px' : '16px';
  root.style.fontSize = px;
  root.classList.toggle('high-contrast', Boolean(prefs.highContrast));
}

const DEFAULT_PROGRESS: UserStudyProgress = {
  hasCompletedOnboarding: false,
  experienceLevel: 'beginner',
  streakDays: 0,
  lastActiveDate: '',
  completedQuizzes: [],
  quizScores: [],
  readVersesCount: 0,
  savedPassageBookmarks: [],
  lastReadPassage: {
    bookId: 'GEN',
    chapterNumber: 1,
    verseNumber: 1,
  },
};

const DEFAULT_NOTES: UserVerseNote[] = [];

const DEFAULT_JOURNAL_ENTRIES: JournalEntry[] = [];

const LEGACY_SEED_NOTE_IDS = new Set(['note-1', 'note-2']);
const LEGACY_SEED_JOURNAL_IDS = new Set(['journal-seed-1', 'journal-seed-2']);
const CLEAN_SLATE_MIGRATION_KEY = 'selah_clean_slate_v1';

export interface JournalTarget {
  verseRef: string;
  bookId: string;
  snapshotText: string;
  illustrationId: string;
}

export interface ShareVerseTarget {
  verseRef: string;
  verseText: string;
  illustrationId: string;
  cardTitle?: string;
  cardCategory?: string;
  originalTerm?: string;
}

class StudyStore {
  private preferences: ReaderPreferences;
  private progress: UserStudyProgress;
  private notes: UserVerseNote[];
  private flashcards: Flashcard[];
  private journalEntries: JournalEntry[];
  private currentChapterId: string;
  private activeEntityId: string | null = null;
  private activeCharacterId: string | null = null;
  private characterHistory: string[] = [];
  private activeExplainVerseId: string | null = null;
  private activeJournalTarget: JournalTarget | null = null;
  private activeShareVerse: ShareVerseTarget | null = null;
  private highlightedVerseNumber: number | null = null;
  private isKidsMode: boolean = false;
  private activeTab: 'today' | 'bible' | 'read' | 'explore' | 'library' = 'today';
  private showTypographyDrawer = false;
  private showChapterPicker = false;
  private showVisualHookHeader = true;
  private exploreView: 'search' | 'people' | 'grid' | 'timeline' | 'map' = 'search';
  private selectedExploreItem: string | null = null;
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.preferences = this.loadFromStorage(STORAGE_KEYS.PREFS, DEFAULT_PREFERENCES);
    applyAccessibilityDOM(this.preferences);
    this.progress = this.loadFromStorage(STORAGE_KEYS.PROGRESS, DEFAULT_PROGRESS);
    this.notes = this.loadFromStorage(STORAGE_KEYS.NOTES, DEFAULT_NOTES);
    this.flashcards = this.loadFromStorage<Flashcard[]>(STORAGE_KEYS.CARDS, []);
    this.journalEntries = this.loadFromStorage(STORAGE_KEYS.JOURNAL, DEFAULT_JOURNAL_ENTRIES);
    this.currentChapterId = this.loadFromStorage(STORAGE_KEYS.CURRENT_CHAPTER, 'GEN-1');

    this.cleanSlateLegacySeedMigration();
    this.updateDailyStreak();
  }

  private cleanSlateLegacySeedMigration() {
    try {
      if (localStorage.getItem(CLEAN_SLATE_MIGRATION_KEY)) return;
      localStorage.setItem(CLEAN_SLATE_MIGRATION_KEY, '1');

      // Strip untouched legacy demo notes
      const filteredNotes = this.notes.filter((n) => !LEGACY_SEED_NOTE_IDS.has(n.id));
      if (filteredNotes.length !== this.notes.length) {
        this.notes = filteredNotes;
        this.saveToStorage(STORAGE_KEYS.NOTES, this.notes);
      }

      // Strip untouched legacy demo journal entries
      const filteredJournal = this.journalEntries.filter(
        (j) => !LEGACY_SEED_JOURNAL_IDS.has(j.id)
      );
      if (filteredJournal.length !== this.journalEntries.length) {
        this.journalEntries = filteredJournal;
        this.saveToStorage(STORAGE_KEYS.JOURNAL, this.journalEntries);
      }

      // Strip untouched starter flashcards if user hasn't reviewed any card
      const seedIds = new Set(SEED_FLASHCARDS.map((c) => c.id));
      if (
        this.flashcards.length > 0 &&
        this.flashcards.every((c) => seedIds.has(c.id) && c.repetitions === 0 && c.lastScore == null)
      ) {
        this.flashcards = [];
        this.saveToStorage(STORAGE_KEYS.CARDS, this.flashcards);
      }

      // Reset untouched fake seed progress if still matching default seed
      const hasOnlySeedQuiz =
        this.progress.quizScores.length === 1 &&
        this.progress.quizScores[0]?.quizId === 'exo-16' &&
        this.progress.completedQuizzes.length === 0;
      const hasOnlySeedBookmarks =
        this.progress.savedPassageBookmarks.length === 2 &&
        this.progress.savedPassageBookmarks.includes('GEN-1:1') &&
        this.progress.savedPassageBookmarks.includes('EXO-16:15');
      if (hasOnlySeedQuiz || (hasOnlySeedBookmarks && this.progress.readVersesCount === 10)) {
        this.progress = {
          ...this.progress,
          streakDays: 0,
          lastActiveDate: '',
          quizScores: hasOnlySeedQuiz ? [] : this.progress.quizScores,
          readVersesCount: this.progress.readVersesCount === 10 ? 0 : this.progress.readVersesCount,
          savedPassageBookmarks: hasOnlySeedBookmarks ? [] : this.progress.savedPassageBookmarks,
        };
        this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
      }

      if (this.currentChapterId === 'EXO-16' && !localStorage.getItem(STORAGE_KEYS.CURRENT_CHAPTER)) {
        this.currentChapterId = 'GEN-1';
      }
    } catch {
      // Ignore storage availability errors
    }
  }

  private loadFromStorage<T>(key: string, fallback: T): T {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(fallback)) {
          return (Array.isArray(parsed) ? parsed : fallback) as T;
        }
        if (typeof fallback === 'object' && fallback !== null) {
          return { ...fallback, ...parsed };
        }
        return parsed;
      }
    } catch (e) {
      console.warn(`Error reading ${key} from localStorage:`, e);
    }
    return fallback;
  }

  private saveToStorage(key: string, value: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`Error saving ${key} to localStorage:`, e);
    }
  }

  private notify() {
    this.listeners.forEach((listener) => listener());
  }

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  // Getters
  public getPreferences() { return this.preferences; }
  public getProgress() { return this.progress; }
  public getNotes() { return this.notes; }
  public getFlashcards() { return this.flashcards; }
  public getJournalEntries() { return this.journalEntries; }
  public getCurrentChapterId() { return this.currentChapterId; }
  public getActiveEntityId() { return this.activeEntityId; }
  public getActiveCharacterId() { return this.activeCharacterId; }
  public getCharacterHistory() { return this.characterHistory; }
  public getActiveExplainVerseId() { return this.activeExplainVerseId; }
  public getActiveJournalTarget() { return this.activeJournalTarget; }
  public getActiveShareVerse() { return this.activeShareVerse; }
  public getHighlightedVerseNumber() { return this.highlightedVerseNumber; }
  public getIsKidsMode() { return this.isKidsMode; }
  public getActiveTab() { return this.activeTab; }
  public getShowTypographyDrawer() { return this.showTypographyDrawer; }
  public getShowChapterPicker() { return this.showChapterPicker; }
  public getShowVisualHookHeader() { return this.showVisualHookHeader; }
  public getExploreView() { return this.exploreView; }
  public getSelectedExploreItem() { return this.selectedExploreItem; }

  // Actions
  public setActiveTab(tab: 'today' | 'bible' | 'read' | 'explore' | 'library') {
    this.activeTab = tab;
    this.notify();
  }

  public setCurrentChapterId(chapterId: string) {
    this.currentChapterId = chapterId;
    this.highlightedVerseNumber = null;
    this.saveToStorage(STORAGE_KEYS.CURRENT_CHAPTER, chapterId);

    const [bookId, chap] = chapterId.split('-');
    this.progress.lastReadPassage = {
      bookId,
      chapterNumber: parseInt(chap, 10) || 1,
    };
    this.recordStudyActivity();
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    this.notify();
  }

  public openEntitySheet(entityId: string) {
    this.activeEntityId = entityId;
    this.activeExplainVerseId = null;
    this.notify();
  }

  public closeEntitySheet() {
    this.activeEntityId = null;
    this.notify();
  }

  public openCharacterCard(characterId: string, pushHistory = false) {
    if (pushHistory && this.activeCharacterId && this.activeCharacterId !== characterId) {
      this.characterHistory = [...this.characterHistory, this.activeCharacterId];
    } else if (!pushHistory) {
      this.characterHistory = [];
    }
    this.activeCharacterId = characterId;
    this.activeEntityId = null;
    this.activeExplainVerseId = null;
    this.notify();
  }

  public goBackCharacterCard() {
    if (this.characterHistory.length === 0) {
      this.closeCharacterCard();
      return;
    }
    const prev = this.characterHistory[this.characterHistory.length - 1];
    this.characterHistory = this.characterHistory.slice(0, -1);
    this.activeCharacterId = prev;
    this.notify();
  }

  public closeCharacterCard() {
    this.activeCharacterId = null;
    this.characterHistory = [];
    this.notify();
  }

  public openExplainDrawer(verseId: string) {
    this.activeExplainVerseId = verseId;
    this.activeEntityId = null;
    this.notify();
  }

  public closeExplainDrawer() {
    this.activeExplainVerseId = null;
    this.notify();
  }

  public setKidsMode(val: boolean) {
    this.isKidsMode = val;
    this.notify();
  }

  public openJournalSheet(target: JournalTarget) {
    this.activeJournalTarget = target;
    this.activeExplainVerseId = null;
    this.activeEntityId = null;
    this.notify();
  }

  public closeJournalSheet() {
    this.activeJournalTarget = null;
    this.notify();
  }

  public openShareModal(target: ShareVerseTarget) {
    this.activeShareVerse = target;
    this.notify();
  }

  public closeShareModal() {
    this.activeShareVerse = null;
    this.notify();
  }

  public setHighlightedVerseNumber(verseNum: number | null) {
    this.highlightedVerseNumber = verseNum;
    this.notify();
  }

  public setShowTypographyDrawer(show: boolean) {
    this.showTypographyDrawer = show;
    this.notify();
  }

  public setShowChapterPicker(show: boolean) {
    this.showChapterPicker = show;
    this.notify();
  }

  public setShowVisualHookHeader(show: boolean) {
    this.showVisualHookHeader = show;
    this.notify();
  }

  public setExploreView(view: 'search' | 'people' | 'grid' | 'timeline' | 'map', itemId: string | null = null) {
    this.exploreView = view;
    this.selectedExploreItem = itemId;
    this.notify();
  }

  public updatePreferences(newPrefs: Partial<ReaderPreferences>) {
    this.preferences = { ...this.preferences, ...newPrefs };
    applyAccessibilityDOM(this.preferences);
    this.saveToStorage(STORAGE_KEYS.PREFS, this.preferences);
    this.notify();
  }

  public setExperienceLevel(level: 'beginner' | 'moderate' | 'deep') {
    this.progress.experienceLevel = level;
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    this.notify();
  }

  public completeOnboarding() {
    this.progress.hasCompletedOnboarding = true;
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    this.activeTab = 'today';
    this.notify();
  }

  public resetOnboarding() {
    this.progress.hasCompletedOnboarding = false;
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    this.notify();
  }

  public toggleBookmark(verseRef: string) {
    const exists = this.progress.savedPassageBookmarks.includes(verseRef);
    if (exists) {
      this.progress.savedPassageBookmarks = this.progress.savedPassageBookmarks.filter((r) => r !== verseRef);
    } else {
      this.progress.savedPassageBookmarks = [...this.progress.savedPassageBookmarks, verseRef];
    }
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    this.notify();
  }

  public isBookmarked(verseRef: string): boolean {
    return this.progress.savedPassageBookmarks.includes(verseRef);
  }

  public addVerseNote(verseRef: string, bookId: string, noteText: string, tag?: string) {
    const newNote: UserVerseNote = {
      id: `note-${Date.now()}`,
      verseRef,
      bookId,
      noteText,
      tag: tag || 'Reflection',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.notes = [newNote, ...this.notes];
    this.recordStudyActivity();
    this.saveToStorage(STORAGE_KEYS.NOTES, this.notes);
    this.notify();
  }

  public updateVerseNote(id: string, noteText: string, tag?: string) {
    this.notes = this.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          noteText,
          tag: tag || note.tag,
          updatedAt: new Date().toISOString(),
        };
      }
      return note;
    });
    this.saveToStorage(STORAGE_KEYS.NOTES, this.notes);
    this.notify();
  }

  public deleteVerseNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.saveToStorage(STORAGE_KEYS.NOTES, this.notes);
    this.notify();
  }

  // Journal Methods
  public addJournalEntry(entry: Omit<JournalEntry, 'id' | 'createdAt'>) {
    const newEntry: JournalEntry = {
      ...entry,
      id: `journal-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.journalEntries = [newEntry, ...this.journalEntries];
    this.recordStudyActivity();
    this.saveToStorage(STORAGE_KEYS.JOURNAL, this.journalEntries);
    this.notify();
  }

  public togglePrayerAnswered(id: string) {
    this.journalEntries = this.journalEntries.map((entry) =>
      entry.id === id ? { ...entry, prayerAnswered: !entry.prayerAnswered } : entry
    );
    this.saveToStorage(STORAGE_KEYS.JOURNAL, this.journalEntries);
    this.notify();
  }

  public deleteJournalEntry(id: string) {
    this.journalEntries = this.journalEntries.filter((e) => e.id !== id);
    this.saveToStorage(STORAGE_KEYS.JOURNAL, this.journalEntries);
    this.notify();
  }

  // Flashcards Methods
  public addFlashcard(verseReference: string, verseText: string, keyConcept: string, hint: string, hebrewGreek?: string): boolean {
    const exists = this.flashcards.some(
      (c) => c.verseReference.toLowerCase() === verseReference.toLowerCase()
    );
    if (exists) return false;

    const newCard: Flashcard = {
      id: `fc-${Date.now()}`,
      verseReference,
      verseText,
      keyConcept,
      hebrewGreek,
      hint,
      nextReviewDate: new Date().toISOString(),
      interval: 1,
      repetitions: 0,
      easeFactor: 2.5,
    };
    this.flashcards = [newCard, ...this.flashcards];
    this.saveToStorage(STORAGE_KEYS.CARDS, this.flashcards);
    this.notify();
    return true;
  }

  public recordQuizCompletion(quizId: string, questionIds: string[], score: number, total: number) {
    const updatedCompleted = Array.from(new Set([...this.progress.completedQuizzes, ...questionIds]));
    const newEntry = {
      quizId,
      score,
      total,
      date: new Date().toISOString(),
    };

    this.progress = {
      ...this.progress,
      completedQuizzes: updatedCompleted,
      quizScores: [newEntry, ...this.progress.quizScores],
    };
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    this.notify();
  }

  public answerFlashcard(cardId: string, qualityRating: number) {
    this.flashcards = this.flashcards.map((card) => {
      if (card.id !== cardId) return card;

      let { interval, repetitions, easeFactor } = card;

      if (qualityRating >= 3) {
        if (repetitions === 0) {
          interval = 1;
        } else if (repetitions === 1) {
          interval = 3;
        } else {
          interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
      } else {
        repetitions = 0;
        interval = 1;
      }

      easeFactor = easeFactor + (0.1 - (5 - qualityRating) * (0.08 + (5 - qualityRating) * 0.02));
      if (easeFactor < 1.3) easeFactor = 1.3;

      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + interval);

      return {
        ...card,
        interval,
        repetitions,
        easeFactor,
        nextReviewDate: nextDate.toISOString(),
        lastScore: qualityRating,
      };
    });

    this.saveToStorage(STORAGE_KEYS.CARDS, this.flashcards);
    this.notify();
  }

  private updateDailyStreak() {
    const lastActive = this.progress.lastActiveDate;
    if (!lastActive) return;

    const today = new Date().toISOString().split('T')[0];
    if (lastActive === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (lastActive !== yesterday && this.progress.streakDays > 0) {
      this.progress.streakDays = 0;
      this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    }
  }

  private recordStudyActivity() {
    const today = new Date().toISOString().split('T')[0];
    if (this.progress.lastActiveDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    this.progress.streakDays = this.progress.lastActiveDate === yesterday ? this.progress.streakDays + 1 : 1;
    this.progress.lastActiveDate = today;
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
  }

  public loadStarterFlashcards() {
    if (this.flashcards.length === 0) {
      this.flashcards = SEED_FLASHCARDS.map((c) => ({ ...c }));
      this.saveToStorage(STORAGE_KEYS.CARDS, this.flashcards);
      this.notify();
    }
  }

  public clearAllStudyData() {
    this.notes = [];
    this.journalEntries = [];
    this.flashcards = [];
    this.progress = {
      ...DEFAULT_PROGRESS,
      hasCompletedOnboarding: this.progress.hasCompletedOnboarding,
      experienceLevel: this.progress.experienceLevel,
    };
    this.currentChapterId = 'GEN-1';
    this.saveToStorage(STORAGE_KEYS.NOTES, this.notes);
    this.saveToStorage(STORAGE_KEYS.JOURNAL, this.journalEntries);
    this.saveToStorage(STORAGE_KEYS.CARDS, this.flashcards);
    this.saveToStorage(STORAGE_KEYS.PROGRESS, this.progress);
    this.saveToStorage(STORAGE_KEYS.CURRENT_CHAPTER, this.currentChapterId);
    this.notify();
  }

  // 4-Step Progressive Flow Actions
  // Step 2 -> Step 3: Navigate to Visual Hook Overview with anchor verse primed for Step 4
  public openVisualOverview(chapterId: string, anchorVerseNum?: number) {
    this.currentChapterId = chapterId;
    this.highlightedVerseNumber = anchorVerseNum ?? null;
    this.showVisualHookHeader = true;
    this.activeTab = 'read';
    this.saveToStorage(STORAGE_KEYS.CURRENT_CHAPTER, chapterId);
    this.notify();
  }

  // Step 3 -> Step 4: Hide hook header to focus on scripture with anchor verse highlighted
  public startReadingFromOverview() {
    this.showVisualHookHeader = false;
    this.notify();
  }

  public navigateToPassage(chapterId: string, verseNumber?: number) {
    this.currentChapterId = chapterId;
    this.highlightedVerseNumber = verseNumber ?? null;
    this.activeTab = 'read';
    this.showVisualHookHeader = true;
    this.saveToStorage(STORAGE_KEYS.CURRENT_CHAPTER, chapterId);
    this.notify();
  }

  public navigateToEntityInReader(chapterId: string, entityId: string) {
    this.currentChapterId = chapterId;
    this.activeTab = 'read';
    this.showVisualHookHeader = false;
    this.activeEntityId = entityId;
    this.saveToStorage(STORAGE_KEYS.CURRENT_CHAPTER, chapterId);
    this.notify();
  }

  public navigateToMapPin(pinId: string) {
    this.activeTab = 'explore';
    this.exploreView = 'map';
    this.selectedExploreItem = pinId;
    this.notify();
  }

  public navigateToTimelineEra(eraId: string) {
    this.activeTab = 'explore';
    this.exploreView = 'timeline';
    this.selectedExploreItem = eraId;
    this.notify();
  }

  /**
   * Handles Android hardware back navigation: closes any open modal/drawer first,
   * returns from secondary tabs to the Bookmark flyleaf, or returns false to exit.
   */
  public handleNativeBack(): boolean {
    if (this.showChapterPicker) {
      this.setShowChapterPicker(false);
      return true;
    }
    if (this.showTypographyDrawer) {
      this.setShowTypographyDrawer(false);
      return true;
    }
    if (this.activeShareVerse) {
      this.closeShareModal();
      return true;
    }
    if (this.activeJournalTarget) {
      this.closeJournalSheet();
      return true;
    }
    if (this.activeCharacterId) {
      this.goBackCharacterCard();
      return true;
    }
    if (this.activeExplainVerseId) {
      this.closeExplainDrawer();
      return true;
    }
    if (this.activeEntityId) {
      this.closeEntitySheet();
      return true;
    }
    if (this.activeTab !== 'today') {
      this.setActiveTab('today');
      return true;
    }
    return false;
  }
}

export const globalStore = new StudyStore();

export function useStudyStore() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const unsubscribe = globalStore.subscribe(() => {
      setTick((t) => t + 1);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    preferences: globalStore.getPreferences(),
    progress: globalStore.getProgress(),
    notes: globalStore.getNotes(),
    flashcards: globalStore.getFlashcards(),
    journalEntries: globalStore.getJournalEntries(),
    currentChapterId: globalStore.getCurrentChapterId(),
    activeEntityId: globalStore.getActiveEntityId(),
    activeCharacterId: globalStore.getActiveCharacterId(),
    characterHistory: globalStore.getCharacterHistory(),
    activeExplainVerseId: globalStore.getActiveExplainVerseId(),
    activeJournalTarget: globalStore.getActiveJournalTarget(),
    activeShareVerse: globalStore.getActiveShareVerse(),
    highlightedVerseNumber: globalStore.getHighlightedVerseNumber(),
    isKidsMode: globalStore.getIsKidsMode(),
    activeTab: globalStore.getActiveTab(),
    showTypographyDrawer: globalStore.getShowTypographyDrawer(),
    showChapterPicker: globalStore.getShowChapterPicker(),
    showVisualHookHeader: globalStore.getShowVisualHookHeader(),
    exploreView: globalStore.getExploreView(),
    selectedExploreItem: globalStore.getSelectedExploreItem(),

    setActiveTab: (tab: 'today' | 'bible' | 'read' | 'explore' | 'library') => globalStore.setActiveTab(tab),
    setCurrentChapterId: (id: string) => globalStore.setCurrentChapterId(id),
    openEntitySheet: (id: string) => globalStore.openEntitySheet(id),
    closeEntitySheet: () => globalStore.closeEntitySheet(),
    openCharacterCard: (id: string, pushHistory = false) => globalStore.openCharacterCard(id, pushHistory),
    goBackCharacterCard: () => globalStore.goBackCharacterCard(),
    closeCharacterCard: () => globalStore.closeCharacterCard(),
    openExplainDrawer: (verseId: string) => globalStore.openExplainDrawer(verseId),
    closeExplainDrawer: () => globalStore.closeExplainDrawer(),
    openJournalSheet: (target: JournalTarget) => globalStore.openJournalSheet(target),
    closeJournalSheet: () => globalStore.closeJournalSheet(),
    openShareModal: (target: ShareVerseTarget) => globalStore.openShareModal(target),
    closeShareModal: () => globalStore.closeShareModal(),
    setHighlightedVerseNumber: (num: number | null) => globalStore.setHighlightedVerseNumber(num),
    setKidsMode: (val: boolean) => globalStore.setKidsMode(val),
    setShowTypographyDrawer: (show: boolean) => globalStore.setShowTypographyDrawer(show),
    setShowChapterPicker: (show: boolean) => globalStore.setShowChapterPicker(show),
    setShowVisualHookHeader: (show: boolean) => globalStore.setShowVisualHookHeader(show),
    setExploreView: (view: 'search' | 'people' | 'grid' | 'timeline' | 'map', itemId?: string | null) => globalStore.setExploreView(view, itemId),
    updatePreferences: (prefs: Partial<ReaderPreferences>) => globalStore.updatePreferences(prefs),
    setExperienceLevel: (lvl: 'beginner' | 'moderate' | 'deep') => globalStore.setExperienceLevel(lvl),
    completeOnboarding: () => globalStore.completeOnboarding(),
    resetOnboarding: () => globalStore.resetOnboarding(),
    toggleBookmark: (ref: string) => globalStore.toggleBookmark(ref),
    isBookmarked: (ref: string) => globalStore.isBookmarked(ref),
    addVerseNote: (ref: string, bookId: string, text: string, tag?: string) => globalStore.addVerseNote(ref, bookId, text, tag),
    updateVerseNote: (id: string, text: string, tag?: string) => globalStore.updateVerseNote(id, text, tag),
    deleteVerseNote: (id: string) => globalStore.deleteVerseNote(id),
    addJournalEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt'>) => globalStore.addJournalEntry(entry),
    togglePrayerAnswered: (id: string) => globalStore.togglePrayerAnswered(id),
    deleteJournalEntry: (id: string) => globalStore.deleteJournalEntry(id),
    addFlashcard: (ref: string, text: string, concept: string, hint: string, hebrewGreek?: string) =>
      globalStore.addFlashcard(ref, text, concept, hint, hebrewGreek),
    recordQuizCompletion: (qId: string, qIds: string[], score: number, total: number) => globalStore.recordQuizCompletion(qId, qIds, score, total),
    answerFlashcard: (cardId: string, score: number) => globalStore.answerFlashcard(cardId, score),
    loadStarterFlashcards: () => globalStore.loadStarterFlashcards(),
    clearAllStudyData: () => globalStore.clearAllStudyData(),
    openVisualOverview: (chapId: string, anchorVerseNum?: number) => globalStore.openVisualOverview(chapId, anchorVerseNum),
    startReadingFromOverview: () => globalStore.startReadingFromOverview(),
    navigateToPassage: (chapId: string, vNum?: number) => globalStore.navigateToPassage(chapId, vNum),
    navigateToEntityInReader: (chapId: string, entityId: string) => globalStore.navigateToEntityInReader(chapId, entityId),
    navigateToMapPin: (pinId: string) => globalStore.navigateToMapPin(pinId),
    navigateToTimelineEra: (eraId: string) => globalStore.navigateToTimelineEra(eraId),
  };
}
