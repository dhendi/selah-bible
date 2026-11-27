import React, { useEffect, useState } from 'react';
import {
  Flame,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { useStudyStore } from '../../store/useStudyStore';
import { MiniQuizModal } from '../quiz/MiniQuizModal';
import { TERM_MANNA_ENTITY } from '../../data/wordOfTheDay';
import { preloadBookForChapter } from '../../data/bookLoader';

export const TodayScreen: React.FC = () => {
  const {
    progress,
    navigateToPassage,
    openEntitySheet,
    currentChapterId,
    setCurrentChapterId,
  } = useStudyStore();

  const [activeQuizPassage, setActiveQuizPassage] = useState<string | null>(null);

  useEffect(() => {
    preloadBookForChapter(currentChapterId || 'EXO-16');
  }, [currentChapterId]);

  const wordOfTheDay = TERM_MANNA_ENTITY;

  const handleResumeReading = () => {
    navigateToPassage(currentChapterId || 'EXO-16');
  };

  const handleSelectPath = (chapId: string) => {
    setCurrentChapterId(chapId);
    navigateToPassage(chapId);
  };

  return (
    <div className="min-h-full pb-28 px-4 pt-6 max-w-xl mx-auto bg-[#FAF7F2] text-[#2C2C2A]">
      {/* Top Greeting & Streak Bar */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#76746E]">
            <Calendar className="w-3.5 h-3.5 text-[#7A9A82]" />
            <span>Today's Study</span>
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#2C2C2A] mt-0.5">
            Grace & Peace
          </h1>
        </div>

        {/* Streak Counter */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#F3EFE6] border border-[#E5DFD5]">
          <Flame className="w-4 h-4 text-[#C88A6B] fill-[#C88A6B]" />
          <span className="text-xs font-bold text-[#2C2C2A]">{progress.streakDays} Day Streak</span>
        </div>
      </header>

      {/* 1. Daily Learning Path Card */}
      <section className="mb-6">
        <div className="bg-[#F3EFE6] rounded-3xl p-5 border border-[#E5DFD5] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A9A82] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Daily Learning Path
            </span>
            <span className="text-xs font-medium text-[#76746E]">
              {currentChapterId.startsWith('DAN-')
                ? 'Lesson 28 of 28'
                : currentChapterId.startsWith('EZK-')
                ? 'Lesson 27 of 28'
                : currentChapterId.startsWith('LAM-')
                ? 'Lesson 26 of 28'
                : currentChapterId.startsWith('JER-')
                ? 'Lesson 25 of 28'
                : currentChapterId.startsWith('ISA-')
                ? 'Lesson 24 of 28'
                : currentChapterId.startsWith('SNG-')
                ? 'Lesson 23 of 28'
                : currentChapterId.startsWith('ECC-')
                ? 'Lesson 22 of 28'
                : currentChapterId.startsWith('PRO-')
                ? 'Lesson 21 of 28'
                : currentChapterId.startsWith('PSA-')
                ? 'Lesson 20 of 28'
                : currentChapterId.startsWith('JOB-')
                ? 'Lesson 19 of 28'
                : currentChapterId.startsWith('EST-')
                ? 'Lesson 18 of 28'
                : currentChapterId.startsWith('NEH-')
                ? 'Lesson 17 of 28'
                : currentChapterId.startsWith('EZR-')
                ? 'Lesson 16 of 28'
                : currentChapterId.startsWith('2CH-')
                ? 'Lesson 15 of 28'
                : currentChapterId.startsWith('1CH-')
                ? 'Lesson 14 of 28'
                : currentChapterId.startsWith('2KI-')
                ? 'Lesson 13 of 28'
                : currentChapterId.startsWith('1KI-')
                ? 'Lesson 12 of 28'
                : currentChapterId.startsWith('2SA-')
                ? 'Lesson 11 of 28'
                : currentChapterId.startsWith('1SA-')
                ? 'Lesson 10 of 28'
                : currentChapterId.startsWith('RUT-')
                ? 'Lesson 9 of 28'
                : currentChapterId.startsWith('JDG-')
                ? 'Lesson 8 of 28'
                : currentChapterId.startsWith('JOS-')
                ? 'Lesson 7 of 28'
                : currentChapterId.startsWith('DEU-')
                ? 'Lesson 6 of 28'
                : currentChapterId.startsWith('NUM-')
                ? 'Lesson 5 of 28'
                : currentChapterId.startsWith('LEV-')
                ? 'Lesson 4 of 28'
                : currentChapterId.startsWith('EXO-')
                ? 'Lesson 2 of 28'
                : 'Lesson 1 of 28'}
            </span>
          </div>

          <h2 className="text-xl font-serif font-bold text-[#2C2C2A] leading-tight">
            {currentChapterId.startsWith('DAN-')
              ? 'Daniel: Fiery Furnace, Lions & Kingdom'
              : currentChapterId.startsWith('EZK-')
              ? 'Ezekiel: Dry Bones, Spirit & River'
              : currentChapterId.startsWith('LAM-')
              ? 'Lamentations: Morning Mercy in Ashes'
              : currentChapterId.startsWith('JER-')
              ? 'Jeremiah: Potter, Cistern & New Covenant'
              : currentChapterId.startsWith('ISA-')
              ? 'Isaiah: Holy One, Comfort & Servant'
              : currentChapterId.startsWith('SNG-')
              ? 'Song of Solomon: Love Strong as Death'
              : currentChapterId.startsWith('ECC-')
              ? 'Ecclesiastes: Seasons, Joy & Creator'
              : currentChapterId.startsWith('PRO-')
              ? 'Proverbs: Wisdom, Speech & Integrity'
              : currentChapterId.startsWith('PSA-')
              ? 'Psalms: Prayers, Laments & Hallelujahs'
              : currentChapterId.startsWith('JOB-')
              ? 'Job: Suffering, Wisdom & Whirlwind'
              : currentChapterId.startsWith('EST-')
              ? 'Esther: Courage, Providence & Purim'
              : currentChapterId.startsWith('NEH-')
              ? 'Nehemiah: Prayer, Walls & Joyful Strength'
              : currentChapterId.startsWith('EZR-')
              ? 'Ezra: Homecoming, Altar & Word'
              : currentChapterId.startsWith('2CH-')
              ? '2 Chronicles: Prayer, Revival & Mercy'
              : currentChapterId.startsWith('1CH-')
              ? '1 Chronicles: Worship, Legacy & Praise'
              : currentChapterId.startsWith('2KI-')
              ? '2 Kings: Elisha, Hezekiah & Josiah'
              : currentChapterId.startsWith('1KI-')
              ? '1 Kings: Wisdom, Temple & Elijah'
              : currentChapterId.startsWith('2SA-')
              ? '2 Samuel: Davidic Covenant & Grace'
              : currentChapterId.startsWith('1SA-')
              ? '1 Samuel: Prophets, David & the Heart'
              : currentChapterId.startsWith('JDG-')
              ? 'Judges: Cry Out & Deliverance'
              : currentChapterId.startsWith('JOS-')
              ? 'Joshua: Courage & Promised Land'
              : currentChapterId.startsWith('DEU-')
              ? 'Deuteronomy: Love God & Choose Life'
              : currentChapterId.startsWith('NUM-')
              ? 'Numbers: Faith on the Wilderness Road'
              : currentChapterId.startsWith('LEV-')
              ? 'Leviticus: Holiness & Drawing Near'
              : currentChapterId === 'EXO-16'
              ? 'Exodus 16: The Provision of Manna'
              : currentChapterId.startsWith('EXO-')
              ? 'Exodus: Deliverance & Covenant'
              : currentChapterId.startsWith('RUT-')
              ? 'Ruth 1–4: Loyal Love & Redemption'
              : 'Genesis 1: Cosmic Beginnings & Light'}
          </h2>
          <p className="text-xs text-[#6B6862] mt-1.5 leading-relaxed">
            {currentChapterId.startsWith('DAN-')
              ? 'Stand with three friends inside the fiery furnace, kneel in prayer before the lions’ den, and behold the coming Son of Man.'
              : currentChapterId.startsWith('EZK-')
              ? 'Behold radiant sapphire glory wheels beside Kebar canal, watch dry bones stand breathing alive, and follow healing water to the Dead Sea.'
              : currentChapterId.startsWith('LAM-')
              ? 'Sit honestly among broken walls without hiding grief—discovering God’s compassions wake brand-new every morning.'
              : currentChapterId.startsWith('JER-')
              ? 'See wet clay reshaped on the potter’s wheel, soft rags rescue Jeremiah from mud, and God’s New Covenant written on hearts.'
              : currentChapterId.startsWith('ISA-')
              ? 'Behold heaven’s throne in Isaiah 6, mount up like eagles in chapter 40, and meet the Servant carrying our peace in Isaiah 53.'
              : currentChapterId.startsWith('SNG-')
              ? 'Step out of winter storms into blooming spring vineyards and celebrate faithful love stronger than death.'
              : currentChapterId.startsWith('ECC-')
              ? 'Honor honest seasons under heaven, braid a threefold cord of friendship, and remember your Creator early.'
              : currentChapterId.startsWith('PRO-')
              ? 'Trust Yahweh with all your heart, practice gentle answers that turn away wrath, and walk beside faithful friends.'
              : currentChapterId.startsWith('PSA-')
              ? 'Sing beside green pastures in Psalm 23, pray for a clean heart in Psalm 51, and lift Hallelujahs across all 150 Psalms.'
              : currentChapterId.startsWith('JOB-')
              ? 'Walk through sudden loss in Uz, proclaim “my Redeemer lives,” and hear Yahweh speak out of the whirlwind.'
              : currentChapterId.startsWith('EST-')
              ? 'Fast three days in Susa, step before the golden scepter “for such a time as this,” and celebrate Purim reversals.'
              : currentChapterId.startsWith('NEH-')
              ? 'Pray in Susa’s court, rebuild Jerusalem’s walls in fifty-two days, and celebrate at the Water Gate where joy becomes strength.'
              : currentChapterId.startsWith('EZR-')
              ? 'Return from exile behind Cyrus’s decree, rebuild Jerusalem’s altar with joyful tears, and follow God’s good hand in Scripture.'
              : currentChapterId.startsWith('2CH-')
              ? 'Stand in Temple dedication fire, march behind singing choirs in Jehoshaphat’s valley, shelter baby Joash, and see Manasseh forgiven.'
              : currentChapterId.startsWith('1CH-')
              ? 'Pray with humble Jabez, sing before the Ark in Jerusalem, stand on Ornan’s threshing floor, and give joyfully with King David.'
              : currentChapterId.startsWith('2KI-')
              ? 'See Elisha’s eyes opened at Dothan, Naaman healed in the Jordan, and young King Josiah rediscover the Torah scroll.'
              : currentChapterId.startsWith('1KI-')
              ? 'Ask for a listening heart with young Solomon, behold God’s fire on Mount Carmel, and listen for the gentle whisper at Mount Horeb.'
              : currentChapterId.startsWith('2SA-')
              ? 'Dance with David before the Ark in Jerusalem, receive God’s eternal covenant promise, and see Mephibosheth welcomed at the royal table.'
              : currentChapterId.startsWith('1SA-')
              ? 'Listen with Samuel at Shiloh, see shepherd David step into the Valley of Elah, and learn why God looks at the heart.'
              : currentChapterId.startsWith('JDG-')
              ? 'Walk with Deborah’s song, Gideon’s 300 torches, and Samson’s final prayer as God rescues imperfect people in dark days.'
              : currentChapterId.startsWith('JOS-')
              ? 'Cross the flooded Jordan behind the Ark, stand with Rahab’s scarlet cord, see Jericho’s walls fall, and pledge loyalty at Shechem.'
              : currentChapterId.startsWith('DEU-')
              ? 'Stand on the Plains of Moab for Moses’s heartfelt covenant sermons: the Shema, open-handed justice, and Mount Nebo.'
              : currentChapterId.startsWith('NUM-')
              ? 'Journey from Sinai to the Jordan through the Priestly Blessing, Caleb’s courage, Balaam’s Star prophecy, and Zelophehad’s daughters.'
              : currentChapterId.startsWith('LEV-')
              ? 'See how a holy God makes a welcoming way for ordinary people through atonement, feasts, and neighbor love.'
              : currentChapterId === 'EXO-16'
              ? 'Discover why God allowed Israel to experience desert hunger and how daily bread forged their trust.'
              : currentChapterId.startsWith('EXO-')
              ? 'Follow Moses and Israel from Egyptian bondage through the Red Sea to the Tabernacle at Mount Sinai.'
              : currentChapterId.startsWith('RUT-')
              ? 'Walk alongside Ruth, Naomi, and Boaz from Moab to Bethlehem’s harvest fields as loyal love enters King David’s family tree.'
              : 'Unpack the Hebrew origins of creation ex nihilo, the plural majesty of Elohim, and Day 1 light.'}
          </p>

          {/* Progress bar */}
          <div className="mt-4 mb-4">
            <div className="flex justify-between text-[11px] text-[#76746E] mb-1">
              <span>Chapter Progress</span>
              <span className="font-semibold text-[#7A9A82]">75%</span>
            </div>
            <div className="w-full bg-[#E5DFD5] h-2 rounded-full overflow-hidden">
              <div className="bg-[#7A9A82] h-full w-3/4 rounded-full" />
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={handleResumeReading}
            className="w-full py-3.5 rounded-2xl bg-[#7A9A82] hover:bg-[#68866F] text-white font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <span>Continue Lesson</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. Daily 3-Question Mini Quiz Card */}
      <section className="mb-6">
        <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F3EFE6] rounded-3xl p-5 border border-[#E5DFD5] shadow-xs">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C88A6B] flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" />
                Active Recall Retention
              </span>
              <h3 className="text-lg font-serif font-bold text-[#2C2C2A] mt-0.5">
                3-Question Daily Check
              </h3>
            </div>
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#C88A6B]/15 text-[#B07456]">
              ~2 Mins
            </span>
          </div>

          <p className="text-xs text-[#6B6862] mb-4">
            Lock in what you learned: Hebrew word origins, historical geography, and theological insights from today's passage.
          </p>

          <button
            onClick={() =>
              setActiveQuizPassage(
                currentChapterId === 'GEN-1'
                  ? 'gen-1'
                  : currentChapterId.startsWith('GEN-')
                  ? 'gen-patriarchs'
                  : currentChapterId.startsWith('LEV-')
                  ? 'lev-holiness'
                  : currentChapterId.startsWith('NUM-')
                  ? 'num-wilderness'
                  : currentChapterId.startsWith('DEU-')
                  ? 'deu-covenant'
                  : currentChapterId.startsWith('JOS-')
                  ? 'jos-promised-land'
                  : currentChapterId.startsWith('JDG-')
                  ? 'jdg-deliverers'
                  : currentChapterId.startsWith('RUT-')
                  ? 'rut-chesed'
                  : currentChapterId.startsWith('1SA-')
                  ? '1sa-kingship'
                  : currentChapterId.startsWith('2SA-')
                  ? '2sa-davidic-grace'
                  : currentChapterId.startsWith('1KI-')
                  ? '1ki-wisdom-prophets'
                  : currentChapterId.startsWith('2KI-')
                  ? '2ki-mercy-reform'
                  : currentChapterId.startsWith('1CH-')
                  ? '1ch-temple-worship'
                  : currentChapterId.startsWith('2CH-')
                  ? '2ch-choir-humility'
                  : currentChapterId.startsWith('EZR-')
                  ? 'ezr-return-word'
                  : currentChapterId.startsWith('NEH-')
                  ? 'neh-wall-joy'
                  : currentChapterId.startsWith('EST-')
                  ? 'est-hidden-providence'
                  : currentChapterId.startsWith('JOB-')
                  ? 'job-suffering-whirlwind'
                  : currentChapterId.startsWith('PSA-')
                  ? 'psa-praise-shepherd'
                  : currentChapterId.startsWith('PRO-')
                  ? 'pro-wisdom-way'
                  : currentChapterId.startsWith('ECC-')
                  ? 'ecc-season-creator'
                  : currentChapterId.startsWith('SNG-')
                  ? 'sng-love-song'
                  : currentChapterId.startsWith('ISA-')
                  ? 'isa-throne-servant'
                  : currentChapterId.startsWith('JER-')
                  ? 'jer-covenant-cistern'
                  : currentChapterId.startsWith('LAM-')
                  ? 'lam-morning-mercy'
                  : currentChapterId.startsWith('EZK-')
                  ? 'ezk-bones-river'
                  : currentChapterId.startsWith('DAN-')
                  ? 'dan-exile-kingdom'
                  : currentChapterId === 'EXO-16'
                  ? 'exo-16'
                  : 'exo-sinai'
              )
            }
            className="w-full py-3 rounded-2xl bg-[#F3EFE6] hover:bg-[#EDE7DC] border border-[#E5DFD5] text-[#2C2C2A] font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Start Daily Quiz</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C88A6B]" />
          </button>
        </div>
      </section>

      {/* 3. Word of the Day (Connected Concept Pill) */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-semibold text-[#76746E] uppercase tracking-wider">
            Connected Word of the Day
          </span>
          <span className="text-xs text-[#7A9A82] font-medium">Tap to Inspect</span>
        </div>

        <button
          onClick={() => openEntitySheet('term-manna')}
          className="w-full text-left bg-[#F3EFE6] hover:bg-[#EDE7DC] p-4 rounded-3xl border border-[#E5DFD5] transition-all flex items-center justify-between group cursor-pointer shadow-xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD5] flex items-center justify-center font-hebrew text-lg font-bold text-[#7A9A82]">
              מָן
            </div>
            <div>
              <div className="text-sm font-bold font-serif text-[#2C2C2A] group-hover:text-[#5A7D63] transition-colors">
                {wordOfTheDay.title}
              </div>
              <div className="text-xs text-[#76746E]">
                {wordOfTheDay.originalLanguageTerm}
              </div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#7A9A82] transform group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* 4. Switch between Seed Lessons */}
      <section className="mb-6">
        <div className="text-xs font-semibold text-[#76746E] uppercase tracking-wider mb-2.5 px-1">
          Available Connected Passages (V1)
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => handleSelectPath('GEN-1')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('GEN-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Genesis 1–50</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Creation & Patriarchs</div>
          </button>

          <button
            onClick={() => handleSelectPath('EXO-16')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('EXO-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Exodus 1–40</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Manna & Sinai</div>
          </button>

          <button
            onClick={() => handleSelectPath('LEV-19')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('LEV-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Leviticus 1–27</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Holiness & Jubilee</div>
          </button>

          <button
            onClick={() => handleSelectPath('NUM-13')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('NUM-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Numbers 1–36</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Wilderness & Spies</div>
          </button>

          <button
            onClick={() => handleSelectPath('DEU-6')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('DEU-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Deuteronomy 1–34</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Shema & Choose Life</div>
          </button>

          <button
            onClick={() => handleSelectPath('JOS-1')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('JOS-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Joshua 1–24</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Jericho & Courage</div>
          </button>

          <button
            onClick={() => handleSelectPath('JDG-6')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('JDG-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Judges 1–21</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Deborah & Gideon</div>
          </button>

          <button
            onClick={() => handleSelectPath('RUT-1')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('RUT-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Ruth 1–4</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Loyal Love & Boaz</div>
          </button>

          <button
            onClick={() => handleSelectPath('1SA-16')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('1SA-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">1 Samuel 1–31</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Samuel, David & Goliath</div>
          </button>

          <button
            onClick={() => handleSelectPath('2SA-7')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('2SA-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">2 Samuel 1–24</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Davidic Covenant & Grace</div>
          </button>

          <button
            onClick={() => handleSelectPath('1KI-3')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('1KI-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">1 Kings 1–22</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Wisdom, Temple & Elijah</div>
          </button>

          <button
            onClick={() => handleSelectPath('2KI-6')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('2KI-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">2 Kings 1–25</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Elisha, Hezekiah & Josiah</div>
          </button>

          <button
            onClick={() => handleSelectPath('1CH-16')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('1CH-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">1 Chronicles 1–29</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Jabez, Ark Praise & Temple</div>
          </button>

          <button
            onClick={() => handleSelectPath('2CH-20')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('2CH-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">2 Chronicles 1–36</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Humble, Choirs & Revival</div>
          </button>

          <button
            onClick={() => handleSelectPath('EZR-7')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('EZR-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Ezra 1–10</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Homecoming & God’s Word</div>
          </button>

          <button
            onClick={() => handleSelectPath('NEH-8')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('NEH-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Nehemiah 1–13</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">52-Day Wall & Water Gate</div>
          </button>

          <button
            onClick={() => handleSelectPath('EST-4')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('EST-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Esther 1–10</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Providence & Courage</div>
          </button>

          <button
            onClick={() => handleSelectPath('JOB-38')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('JOB-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Job 1–42</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Suffering & Whirlwind</div>
          </button>

          <button
            onClick={() => handleSelectPath('PSA-23')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('PSA-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Psalms 1–150</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Shepherd, Lament & Praise</div>
          </button>

          <button
            onClick={() => handleSelectPath('PRO-3')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('PRO-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Proverbs 1–31</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Wisdom, Speech & Trust</div>
          </button>

          <button
            onClick={() => handleSelectPath('ECC-3')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('ECC-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Ecclesiastes 1–12</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Seasons & Remember God</div>
          </button>

          <button
            onClick={() => handleSelectPath('SNG-2')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('SNG-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Song of Solomon 1–8</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Spring & Unquenched Love</div>
          </button>

          <button
            onClick={() => handleSelectPath('ISA-40')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('ISA-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Isaiah 1–66</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Throne, Comfort & Servant</div>
          </button>

          <button
            onClick={() => handleSelectPath('JER-31')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('JER-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Jeremiah 1–52</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Potter, Rags & New Covenant</div>
          </button>

          <button
            onClick={() => handleSelectPath('LAM-3')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('LAM-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Lamentations 1–5</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">New Every Morning Mercy</div>
          </button>

          <button
            onClick={() => handleSelectPath('EZK-37')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('EZK-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Ezekiel 1–48</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Dry Bones & Healing River</div>
          </button>

          <button
            onClick={() => handleSelectPath('DAN-6')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              currentChapterId.startsWith('DAN-')
                ? 'bg-[#EBF2ED] border-[#7A9A82]'
                : 'bg-[#F3EFE6] border-[#E5DFD5] hover:bg-[#EBE5DA]'
            }`}
          >
            <div className="text-xs font-bold font-serif text-[#2C2C2A]">Daniel 1–12</div>
            <div className="text-[10px] text-[#76746E] mt-0.5">Fiery Furnace & Lions’ Den</div>
          </button>
        </div>
      </section>

      {/* Mini Quiz Modal if active */}
      {activeQuizPassage && (
        <MiniQuizModal
          passageId={activeQuizPassage}
          onClose={() => setActiveQuizPassage(null)}
        />
      )}
    </div>
  );
};
