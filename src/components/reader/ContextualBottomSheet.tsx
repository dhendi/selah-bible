import React from 'react';
import { X, MapPin, Clock, Volume2, ArrowRight, BookOpen, PenLine, Share2, Users } from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { SEED_ENTITIES } from '../../data/seedEntities';
import { EntityThumbnail } from '../illustrations/EntityThumbnails';

export const ContextualBottomSheet: React.FC = () => {
  const {
    activeEntityId,
    closeEntitySheet,
    openCharacterCard,
    navigateToMapPin,
    navigateToTimelineEra,
    openJournalSheet,
    openShareModal,
    preferences,
  } = useStudyStore();

  if (!activeEntityId) return null;

  const entity = SEED_ENTITIES[activeEntityId];
  if (!entity) return null;

  const fontClass = preferences.isDyslexicFont ? 'font-dyslexic' : 'font-sans';
  const bodySize = Math.max(14, Math.min(preferences.fontSize - 2, 24));

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = `${entity.title}. ${entity.shortDefinition}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleMapClick = () => {
    closeEntitySheet();
    const region = entity.mapCoordinates?.regionName || '';
    if (region.includes('Bethlehem')) {
      navigateToMapPin('loc-bethlehem');
    } else if (region.includes('Ur')) {
      navigateToMapPin('loc-ur');
    } else if (region.includes('Haran')) {
      navigateToMapPin('loc-haran');
    } else if (region.includes('Bethel') || region.includes('Ai')) {
      navigateToMapPin('loc-bethel');
    } else if (region.includes('Hebron') || region.includes('Machpelah') || region.includes('Beersheba') || region.includes('Dead Sea') || region.includes('Sodom')) {
      navigateToMapPin('loc-hebron');
    } else if (region.includes('Goshen') || region.includes('Egypt')) {
      navigateToMapPin('loc-goshen');
    } else if (region.includes('Ararat')) {
      navigateToMapPin('loc-ararat');
    } else if (region.includes('Jerusalem') || region.includes('Moriah') || region.includes('Jebus') || region.includes('Zion') || region.includes('Judea') || region.includes('Olivet') || region.includes('Bethany') || region.includes('Golgotha') || region.includes('Gethsemane')) {
      navigateToMapPin('loc-jerusalem');
    } else if (region.includes('Midian')) {
      navigateToMapPin('loc-midian');
    } else if (region.includes('Negev') || region.includes('Paran')) {
      navigateToMapPin('loc-kadesh');
    } else if (entity.id === 'place-uz' || region.includes('Uz') || region.includes('Eastern Plateau')) {
      navigateToMapPin('loc-uz');
    } else if (region.includes('Edom') || region.includes('Seir')) {
      navigateToMapPin('loc-mount-hor');
    } else if (region.includes('Transjordan') || region.includes('Jordan Valley') || region.includes('Gilead') || region.includes('Bashan') || region.includes('Heshbon') || region.includes('Ammon') || region.includes('Arabah') || region.includes('Jabesh') || region.includes('Mizpah')) {
      navigateToMapPin('loc-moab');
    } else if (region.includes('Nebo') || region.includes('Pisgah')) {
      navigateToMapPin('loc-mount-nebo');
    } else if (region.includes('Shechem')) {
      navigateToMapPin('loc-ebal-gerizim');
    } else if (region.includes('Jericho')) {
      navigateToMapPin('loc-jericho');
    } else if (region.includes('Gilgal')) {
      navigateToMapPin('loc-gilgal');
    } else if (region.includes('Shiloh')) {
      navigateToMapPin('loc-shiloh');
    } else if (region.includes('Tabor') || region.includes('Jezreel') || region.includes('Hazor') || region.includes('Galilee') || region.includes('Hermon') || region.includes('Banias') || region.includes('Capernaum') || region.includes('Nazareth') || region.includes('Magdala')) {
      navigateToMapPin('loc-mount-tabor');
    } else if (region.includes('Harod')) {
      navigateToMapPin('loc-harod');
    } else if (region.includes('Sorek') || region.includes('Philist') || region.includes('Gath') || region.includes('Ashdod') || region.includes('Ekron') || region.includes('Ziklag') || region.includes('Beth Shemesh')) {
      navigateToMapPin('loc-sorek');
    } else if (region.includes('Ramah') || region.includes('Gibeah')) {
      navigateToMapPin('loc-ramah');
    } else if (region.includes('Endor')) {
      navigateToMapPin('loc-mount-tabor');
    } else if (region.includes('Carmel')) {
      navigateToMapPin('loc-mount-carmel');
    } else if (region.includes('Samaria') || region.includes('Jezreel')) {
      navigateToMapPin('loc-samaria');
    } else if (region.includes('Dothan')) {
      navigateToMapPin('loc-dothan');
    } else if (region.includes('Zarephath') || region.includes('Sidon') || region.includes('Tyre') || region.includes('Lebanon') || region.includes('Macedonia') || region.includes('Greece') || region.includes('Asia Minor') || region.includes('Mediterranean')) {
      navigateToMapPin('loc-mount-carmel');
    } else if (region.includes('Gibeon')) {
      navigateToMapPin('loc-ramah');
    } else if (region.includes('Syria') || region.includes('Damascus') || region.includes('Aram')) {
      navigateToMapPin('loc-haran');
    } else if (region.includes('Babylon') || region.includes('Nineveh') || region.includes('Assyria') || region.includes('Chaldea') || region.includes('Persia') || region.includes('Susa') || region.includes('Shushan') || region.includes('Media') || region.includes('Ahava')) {
      navigateToMapPin('loc-babylon');
    } else if (region.includes('Uz')) {
      navigateToMapPin('loc-uz');
    } else if (region.includes('Elah')) {
      navigateToMapPin('loc-elah');
    } else if (region.includes('En Gedi')) {
      navigateToMapPin('loc-en-gedi');
    } else if (region.includes('Kidron')) {
      navigateToMapPin('loc-kidron');
    } else if (region.includes('Marah')) {
      navigateToMapPin('loc-marah');
    } else if (region.includes('Rephidim')) {
      navigateToMapPin('loc-rephidim');
    } else if (region.includes('Elim')) {
      navigateToMapPin('loc-elim');
    } else if (region.includes('Nile')) {
      navigateToMapPin('loc-nile');
    } else if (region.includes('Red Sea')) {
      navigateToMapPin('loc-red-sea');
    } else if (region.includes('Sinai')) {
      navigateToMapPin('loc-mount-sinai');
    } else if (entity.mapCoordinates && entity.timelineEra.includes('Exodus')) {
      navigateToMapPin('loc-wilderness-sin');
    } else {
      navigateToMapPin('loc-eden');
    }
  };

  const handleTimelineClick = () => {
    closeEntitySheet();
    if (entity.timelineEra.includes('Jesus') || entity.timelineEra.includes('Gospel') || entity.timelineEra.includes('Ministry')) {
      navigateToTimelineEra('era-jesus');
    } else if (entity.timelineEra.includes('Church') || entity.timelineEra.includes('Apost')) {
      navigateToTimelineEra('era-church');
    } else if (entity.timelineEra.includes('Exodus') || entity.timelineEra.includes('Wilderness') || entity.timelineEra.includes('Numbers') || entity.timelineEra.includes('Deuteronomy')) {
      navigateToTimelineEra('era-exodus');
    } else if (entity.timelineEra.includes('Patriarch')) {
      navigateToTimelineEra('era-patriarchs');
    } else if (entity.timelineEra.includes('Judges') || entity.timelineEra.includes('Conquest') || entity.timelineEra.includes('Joshua')) {
      navigateToTimelineEra('era-judges');
    } else if (entity.timelineEra.includes('Exile') || entity.timelineEra.includes('Captivity') || entity.timelineEra.includes('Babylon') || entity.timelineEra.includes('Assyria') || entity.timelineEra.includes('Restoration') || entity.timelineEra.includes('Return') || entity.timelineEra.includes('Jeremiah') || entity.timelineEra.includes('Daniel')) {
      navigateToTimelineEra('era-exile');
    } else if (entity.timelineEra.includes('Monarchy') || entity.timelineEra.includes('Kingdom') || entity.timelineEra.includes('Poetry') || entity.timelineEra.includes('Wisdom') || entity.timelineEra.includes('Song') || entity.timelineEra.includes('Prophet') || entity.timelineEra.includes('Isaiah')) {
      navigateToTimelineEra('era-kingdom');
    } else {
      navigateToTimelineEra('era-creation');
    }
  };

  const getIllustrationForEntity = () => `entity:${entity.id}`;

  const getEntityTypeLabel = () => {
    if (entity.type === 'person') return 'Person';
    if (entity.type === 'place') return 'Sacred Place';
    if (entity.type === 'artifact') return 'Sacred Object';
    return 'Key Concept';
  };

  const handleReflect = () => {
    const ref = entity.relatedVerseRefs[0] || 'Genesis 1:1';
    const bookId = ref.includes('Revelation')
      ? 'REV'
      : ref.includes('Jude')
        ? 'JUD'
        : ref.includes('3 John')
          ? '3JN'
          : ref.includes('2 John')
            ? '2JN'
            : ref.includes('1 John')
              ? '1JN'
              : ref.includes('2 Peter')
                ? '2PE'
                : ref.includes('1 Peter')
                  ? '1PE'
                  : ref.includes('James')
                    ? 'JAS'
                    : ref.includes('Hebrews')
      ? 'HEB'
      : ref.includes('Philemon')
        ? 'PHM'
        : ref.includes('Titus')
          ? 'TIT'
          : ref.includes('2 Timothy')
            ? '2TI'
            : ref.includes('1 Timothy')
              ? '1TI'
              : ref.includes('2 Thessalonians')
      ? '2TH'
      : ref.includes('1 Thessalonians')
        ? '1TH'
        : ref.includes('Colossians')
          ? 'COL'
          : ref.includes('Philippians')
      ? 'PHP'
      : ref.includes('Ephesians')
        ? 'EPH'
        : ref.includes('Galatians')
          ? 'GAL'
          : ref.includes('2 Corinthians')
      ? '2CO'
      : ref.includes('1 Corinthians')
        ? '1CO'
        : ref.includes('Romans')
          ? 'ROM'
          : ref.includes('Acts')
      ? 'ACT'
      : ref.includes('John')
        ? 'JHN'
        : ref.includes('Luke')
          ? 'LUK'
          : ref.includes('Mark')
            ? 'MRK'
            : ref.includes('Matthew')
              ? 'MAT'
              : ref.includes('Jeremiah')
      ? 'JER'
      : ref.includes('Isaiah')
        ? 'ISA'
        : ref.includes('Song of Solomon')
          ? 'SNG'
          : ref.includes('Ecclesiastes')
            ? 'ECC'
      : ref.includes('Proverbs')
        ? 'PRO'
        : ref.includes('Psalm')
          ? 'PSA'
          : ref.includes('Job')
            ? 'JOB'
            : ref.includes('Esther')
              ? 'EST'
              : ref.includes('Nehemiah')
                ? 'NEH'
                : ref.includes('Ezra')
                  ? 'EZR'
                  : ref.includes('2 Chronicles')
                    ? '2CH'
                    : ref.includes('1 Chronicles')
                      ? '1CH'
                      : ref.includes('2 Kings')
                        ? '2KI'
                        : ref.includes('1 Kings')
                          ? '1KI'
                          : ref.includes('2 Samuel')
                            ? '2SA'
                            : ref.includes('1 Samuel')
                              ? '1SA'
                              : ref.includes('Ruth')
                                ? 'RUT'
                                : ref.includes('Judges')
                                  ? 'JDG'
                                  : ref.includes('Joshua')
                                    ? 'JOS'
                                    : ref.includes('Deuteronomy')
                                      ? 'DEU'
                                      : ref.includes('Numbers')
                                        ? 'NUM'
                                        : ref.includes('Leviticus')
                                          ? 'LEV'
                                          : ref.includes('Exodus')
                                            ? 'EXO'
                                            : 'GEN';
    openJournalSheet({
      verseRef: ref,
      bookId,
      snapshotText: `${entity.title}: ${entity.shortDefinition}`,
      illustrationId: getIllustrationForEntity(),
    });
  };

  const handleShare = () => {
    openShareModal({
      verseRef: entity.relatedVerseRefs[0] || entity.timelineEra || entity.title,
      verseText: entity.shortDefinition,
      illustrationId: getIllustrationForEntity(),
      cardTitle: entity.title,
      cardCategory: `${getEntityTypeLabel()} • ${entity.timelineEra}`,
      originalTerm: entity.originalLanguageTerm,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-auto">
      {/* Dimmed Warm Backdrop */}
      <div
        className="absolute inset-0 bg-[#2C2C2A]/35 backdrop-blur-[2px] transition-opacity duration-300 animate-fade-in"
        onClick={closeEntitySheet}
        aria-label="Close bottom sheet"
      />

      {/* Slide-Up Bottom Sheet Card */}
      <div
        className={`relative w-full max-w-lg bg-[#FAF7F2] rounded-t-[32px] shadow-2xl border-t border-[#E8E2D7] p-5 pb-8 z-10 animate-slide-up max-h-[85vh] overflow-y-auto ${fontClass}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-[#DED7CB] rounded-full mx-auto mb-4 hover:bg-[#C9C0B2] cursor-grab transition-colors" />

        {/* Header with Icon, Title, and Close */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3.5">
            <EntityThumbnail
              type={entity.type}
              iconSlug={entity.iconSlug}
              entityId={entity.id}
              characterId={entity.characterId}
              className="w-12 h-12 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold font-serif text-[#2C2C2A] leading-tight">
                {entity.title}
              </h3>
              <p className="text-sm font-medium text-[#7A9A82] font-hebrew mt-0.5">
                {entity.originalLanguageTerm}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleSpeak}
              className="p-2 rounded-full text-[#76746E] hover:text-[#2C2C2A] hover:bg-[#F3EFE6] transition-colors"
              title="Listen to pronunciation and definition"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-[#76746E] hover:text-[#2C2C2A] hover:bg-[#F3EFE6] transition-colors"
              title="Share Illustrated Card"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={closeEntitySheet}
              className="p-2 rounded-full text-[#76746E] hover:text-[#2C2C2A] hover:bg-[#F3EFE6] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Short Definition Badge */}
        <div className="bg-[#F3EFE6] rounded-xl p-3 border border-[#E8E2D7] mb-4">
          <p
            className="text-[#484642] leading-relaxed"
            style={{ fontSize: `${bodySize}px`, lineHeight: preferences.lineHeight }}
          >
            {entity.shortDefinition}
          </p>
        </div>

        {/* Biblical History / Theological Insights */}
        <div className="mb-5 space-y-3">
          {entity.theologicalInsight && (
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#76746E] mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#7A9A82]" />
                Theological Insights
              </h4>
              <p
                className="text-[#2C2C2A] leading-relaxed bg-[#FAF7F2] rounded-lg"
                style={{ fontSize: `${bodySize}px`, lineHeight: preferences.lineHeight }}
              >
                {entity.theologicalInsight}
              </p>
            </div>
          )}

          {entity.historicalContext && (
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#76746E] mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C88A6B]" />
                Biblical History
              </h4>
              <p
                className="text-[#2C2C2A] leading-relaxed"
                style={{ fontSize: `${bodySize}px`, lineHeight: preferences.lineHeight }}
              >
                {entity.historicalContext}
              </p>
            </div>
          )}
        </div>

        {/* Quick Facts Section matching the screenshot cards */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-[#76746E] mb-2">
            Quick Facts
          </h4>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Fact 1: Timeline or Frequency */}
            {entity.timelineYear ? (
              <button
                onClick={handleTimelineClick}
                className="text-left bg-[#F3EFE6] hover:bg-[#EBE5DA] p-3 rounded-2xl border border-[#E5DFD5] transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div className="text-[0.6875rem] font-medium text-[#76746E] flex items-center justify-between">
                  <span>Timeline</span>
                  <ArrowRight className="w-3 h-3 text-[#7A9A82] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs font-semibold text-[#2C2C2A] mt-1 line-clamp-2">
                  {entity.timelineYear}
                </div>
                <span className="text-[0.625rem] text-[#7A9A82] mt-1 font-medium">Explore Era →</span>
              </button>
            ) : (
              <div className="bg-[#F3EFE6] p-3 rounded-2xl border border-[#E5DFD5]">
                <div className="text-[0.6875rem] font-medium text-[#76746E]">Appears</div>
                <div className="text-xs font-semibold text-[#2C2C2A] mt-1">
                  {entity.frequencyCount || 'Multiple passages'}
                </div>
              </div>
            )}

            {/* Fact 2: Map Pin or Deep Timeline */}
            {entity.mapCoordinates ? (
              <button
                onClick={handleMapClick}
                className="text-left bg-[#F3EFE6] hover:bg-[#EBE5DA] p-3 rounded-2xl border border-[#E5DFD5] transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div className="text-[0.6875rem] font-medium text-[#76746E] flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C88A6B]" />
                    See Map
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#C88A6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs font-semibold text-[#2C2C2A] mt-1 line-clamp-1">
                  {entity.mapCoordinates.regionName}
                </div>
                <span className="text-[0.625rem] text-[#C88A6B] mt-1 font-medium">View in Maps →</span>
              </button>
            ) : (
              <button
                onClick={handleTimelineClick}
                className="text-left bg-[#F3EFE6] hover:bg-[#EBE5DA] p-3 rounded-2xl border border-[#E5DFD5] transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div className="text-[0.6875rem] font-medium text-[#76746E] flex items-center justify-between">
                  <span>Frequency</span>
                  <ArrowRight className="w-3 h-3 text-[#7A9A82] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs font-semibold text-[#2C2C2A] mt-1">
                  {entity.frequencyCount || 'Found throughout Scripture'}
                </div>
                <span className="text-[0.625rem] text-[#7A9A82] mt-1 font-medium">See Timeline →</span>
              </button>
            )}
          </div>
        </div>

        {/* View Full Character Data Card CTA when entity links to a CharacterCard */}
        {entity.characterId && (
          <button
            onClick={() => openCharacterCard(entity.characterId!)}
            className="w-full py-2.5 rounded-2xl bg-[#FAECE5] hover:bg-[#F3DED3] border border-[#C88A6B]/40 text-[#9A4B32] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors mb-2.5 cursor-pointer"
          >
            <Users className="w-3.5 h-3.5 text-[#C88A6B]" />
            <span>View Character Card & Family Tree</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}

        {/* One-Tap Reflect in Journal CTA */}
        <button
          onClick={handleReflect}
          className="w-full py-2.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors mb-4 cursor-pointer shadow-xs"
        >
          <PenLine className="w-3.5 h-3.5" />
          <span>Reflect in Journal</span>
        </button>

        {/* Related Verses Footer */}
        {entity.relatedVerseRefs && entity.relatedVerseRefs.length > 0 && (
          <div className="pt-3 border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#76746E]">
            <span>Cross-References:</span>
            <div className="flex gap-1.5 flex-wrap">
              {entity.relatedVerseRefs.slice(0, 3).map((ref) => (
                <span
                  key={ref}
                  className="px-2 py-0.5 rounded-md bg-[#EDE7DC] text-[#2C2C2A] text-[0.6875rem] font-medium"
                >
                  {ref}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
