import type { BibleStory, StorySection } from '../types/bible';

export interface StorySectionConfig {
  id: StorySection;
  tagline: string;
}

export const STORY_SECTIONS: StorySectionConfig[] = [
  { id: 'Stories for Kids', tagline: 'Wonder-filled classics ideal for family and younger readers' },
  { id: 'Love & Kindness', tagline: 'Compassion, loyal friendship, grace, and generous hearts' },
  { id: 'Perseverance & Trials', tagline: 'Steady hope and praise when facing long storms or locked doors' },
  { id: 'Courage & Faith', tagline: 'Standing firm under pressure and trusting God against the odds' },
  { id: 'Jesus & Miracles', tagline: 'Signs of the Savior’s presence, power, and welcoming joy' },
];

const STORY_SECTION_MAP: Record<
  string,
  { primary: StorySection; all: StorySection[] }
> = {
  'story-noah-flood': {
    primary: 'Stories for Kids',
    all: ['Stories for Kids', 'Perseverance & Trials'],
  },
  'story-jonah-fish': {
    primary: 'Stories for Kids',
    all: ['Stories for Kids', 'Perseverance & Trials'],
  },
  'story-lost-sheep': {
    primary: 'Stories for Kids',
    all: ['Stories for Kids', 'Love & Kindness', 'Jesus & Miracles'],
  },
  'story-zacchaeus': {
    primary: 'Stories for Kids',
    all: ['Stories for Kids', 'Love & Kindness', 'Jesus & Miracles'],
  },
  'story-ruth-naomi': {
    primary: 'Love & Kindness',
    all: ['Love & Kindness', 'Perseverance & Trials'],
  },
  'story-good-samaritan': {
    primary: 'Love & Kindness',
    all: ['Love & Kindness', 'Stories for Kids'],
  },
  'story-prodigal-son': {
    primary: 'Love & Kindness',
    all: ['Love & Kindness', 'Perseverance & Trials'],
  },
  'story-wedding-cana': {
    primary: 'Love & Kindness',
    all: ['Love & Kindness', 'Jesus & Miracles', 'Stories for Kids'],
  },
  'story-joseph-coat': {
    primary: 'Perseverance & Trials',
    all: ['Perseverance & Trials', 'Love & Kindness'],
  },
  'story-red-sea': {
    primary: 'Perseverance & Trials',
    all: ['Perseverance & Trials', 'Courage & Faith', 'Stories for Kids'],
  },
  'story-paul-silas': {
    primary: 'Perseverance & Trials',
    all: ['Perseverance & Trials', 'Courage & Faith'],
  },
  'story-parable-sower': {
    primary: 'Perseverance & Trials',
    all: ['Perseverance & Trials', 'Jesus & Miracles'],
  },
  'story-jericho-walls': {
    primary: 'Perseverance & Trials',
    all: ['Perseverance & Trials', 'Courage & Faith', 'Stories for Kids'],
  },
  'story-david-goliath': {
    primary: 'Courage & Faith',
    all: ['Courage & Faith', 'Stories for Kids'],
  },
  'story-daniel-lions': {
    primary: 'Courage & Faith',
    all: ['Courage & Faith', 'Perseverance & Trials', 'Stories for Kids'],
  },
  'story-queen-esther': {
    primary: 'Courage & Faith',
    all: ['Courage & Faith', 'Perseverance & Trials'],
  },
  'story-fiery-furnace': {
    primary: 'Courage & Faith',
    all: ['Courage & Faith', 'Perseverance & Trials', 'Stories for Kids'],
  },
  'story-first-christmas': {
    primary: 'Jesus & Miracles',
    all: ['Jesus & Miracles', 'Stories for Kids', 'Love & Kindness'],
  },
  'story-feeding-5000': {
    primary: 'Jesus & Miracles',
    all: ['Jesus & Miracles', 'Stories for Kids', 'Love & Kindness'],
  },
  'story-walks-water': {
    primary: 'Jesus & Miracles',
    all: ['Jesus & Miracles', 'Courage & Faith'],
  },
};

export function getStoryPrimarySection(story: BibleStory): StorySection {
  return story.primarySection ?? STORY_SECTION_MAP[story.id]?.primary ?? 'Stories for Kids';
}

export function getStorySections(story: BibleStory): StorySection[] {
  return story.sections ?? STORY_SECTION_MAP[story.id]?.all ?? [getStoryPrimarySection(story)];
}

export const SEED_BIBLE_STORIES: BibleStory[] = [
  {
    id: 'story-noah-flood',
    slug: 'noah-flood',
    title: 'Noah & the Great Flood',
    subtitle: 'Faithful Obedience Through the Storm',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: 'Genesis 6–9',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/noah-2.webp',
    primaryChapterId: 'GEN-6',
    summary:
      'In a generation consumed by violence and forgetfulness of God, one quiet righteous man named Noah found grace in the Lord’s eyes—and trusted Him enough to build an enormous wooden rescue vessel long before a single cloud appeared.',
    beats: [
      {
        id: 'noah-1',
        beatNumber: 1,
        title: 'A Giant Boat on Dry Ground',
        narrative:
          'Long before a single drop of rain fell from the sky, God looked down with sorrow upon an earth filled with cruelty and corruption. Yet Noah, Scripture tells us, “walked with God.” Speaking directly to His faithful servant, the Lord revealed a coming flood and gave detailed blueprints for an enormous three-story vessel of gopher wood—four hundred and fifty feet long, lined inside and out with pitch, with rooms built to shelter both Noah’s family and living creatures of every kind.\n\nDay after day, season after season, the sharp ring of hammer and chisel echoed across the sunlit olive hills. Neighbors paused to stare and whisper at an aging carpenter raising a sea-sized wooden frame miles from any coast. Still, Noah did not argue or quit; Genesis pauses simply to note, “Noah did this. According to all that God commanded him, so he did.”',
        imageUrl: '/images/stories/noah-1.webp',
        imageAlt: 'Noah building the massive wooden ark beams beside sunlit olive hills',
        scriptureRefs: [
          { label: 'Genesis 6:8–14', chapterId: 'GEN-6', verseNumber: 14 },
          { label: 'Genesis 6:15–16', chapterId: 'GEN-6', verseNumber: 15 },
          { label: 'Genesis 6:22', chapterId: 'GEN-6', verseNumber: 22 },
        ],
      },
      {
        id: 'noah-2',
        beatNumber: 2,
        title: 'Two by Two Into Shelter',
        narrative:
          'At last the towering timber frame stood finished, stocked with baskets of grain, fruit, and dried hay for months ahead. Then God gave the quiet word: “Come, you and all your household, into the ship.” Soon an unforgettable procession moved across the valley grass—heavy gray elephants, quiet spotted deer, thick-maned lions, gentle wooly sheep, and pairs of fluttering birds walking peacefully up the wide plank ramp.\n\nNo net or whip was needed to herd them; the same Creator who formed every living wing and hoof gently guided them into safety before a storm nobody else believed was coming. Once Noah, his wife, their three sons Shem, Ham, and Japheth, and their wives stepped inside, Genesis records a tender detail: Yahweh Himself shut the heavy door behind them.',
        imageUrl: '/images/stories/noah-2.webp',
        imageAlt: 'Pairs of gentle animals walking up the wooden ramp into Noah’s ark before storm clouds',
        scriptureRefs: [
          { label: 'Genesis 7:1–5', chapterId: 'GEN-7', verseNumber: 1 },
          { label: 'Genesis 7:7–9', chapterId: 'GEN-7', verseNumber: 9 },
          { label: 'Genesis 7:15–16', chapterId: 'GEN-7', verseNumber: 16 },
        ],
      },
      {
        id: 'noah-3',
        beatNumber: 3,
        title: 'Forty Days of Relentless Rain',
        narrative:
          'Seven days later, the sky darkened to deep slate and “all the fountains of the great deep burst open, and the sky’s windows were opened.” Torrential sheets of water poured relentlessly for forty days and forty nights without pause. Streams overflowed their banks, valleys turned into roaring lakes, and swelling waves climbed past ancient forests until even the highest mountain ridges sank beneath the sea.\n\nInside the pitch-dark hull, the timber beams groaned and lifted upward on the rising tide. Every familiar landmark outside vanished behind churning foam, yet the pitch-sealed ark held dry and steady—carrying that small remnant of humanity and Creation safely above the storm.',
        imageUrl: '/images/stories/noah-3.webp',
        imageAlt: 'The sturdy wooden ark riding high waves beneath pouring rain',
        scriptureRefs: [
          { label: 'Genesis 7:11–12', chapterId: 'GEN-7', verseNumber: 11 },
          { label: 'Genesis 7:17–20', chapterId: 'GEN-7', verseNumber: 19 },
          { label: 'Genesis 7:23–24', chapterId: 'GEN-7', verseNumber: 24 },
        ],
      },
      {
        id: 'noah-4',
        beatNumber: 4,
        title: 'God Remembers & Calms the Waters',
        narrative:
          'For one hundred and fifty long days the waters prevailed while Noah’s family cared for the animals in quiet patience, waiting without knowing when land would appear again. Then comes one of the most comforting turning points in all of Genesis: “God remembered Noah, and every living thing, and all the livestock that were with him in the ship.”\n\nImmediately God sent a warm steady wind across the flooded world. The hidden fountains sealed shut, the pouring rain halted, and week after week the vast sea began pulling slowly back. On the seventeenth day of the seventh month, Noah felt a gentle scrape beneath the keel—the heavy ark had come safely to rest high upon the misty mountains of Ararat under pale sunrise skies.',
        imageUrl: '/images/stories/noah-4.webp',
        imageAlt: 'Calm sunrise light breaking over flat waters as mountain peaks emerge near the ark',
        scriptureRefs: [
          { label: 'Genesis 8:1–2', chapterId: 'GEN-8', verseNumber: 1 },
          { label: 'Genesis 8:3–4', chapterId: 'GEN-8', verseNumber: 4 },
          { label: 'Genesis 8:5', chapterId: 'GEN-8', verseNumber: 5 },
        ],
      },
      {
        id: 'noah-5',
        beatNumber: 5,
        title: 'The Dove With the Olive Leaf',
        narrative:
          'Still Noah waited patiently for the deep valleys far below the mountaintops to drain. Unlatching the ark’s wooden window, he first sent out a strong black raven, then released a gentle white dove to search for dry footing. When the dove found only endless water, she flew back weary to the window ledge, and Noah reached out to bring her lovingly inside.\n\nSeven days later he opened his hands and sent her out once more. That evening, just as dusk softened the horizon, white wings fluttered back toward the ark—and in her beak gleamed a freshly plucked green olive leaf! Noah knew at once that new life was already sprouting across the earth, and when he waited seven days longer and sent her a third time, she never needed to return.',
        imageUrl: '/images/stories/noah-5.webp',
        imageAlt: 'Noah gently receiving a white dove carrying a fresh green olive twig',
        scriptureRefs: [
          { label: 'Genesis 8:6–9', chapterId: 'GEN-8', verseNumber: 9 },
          { label: 'Genesis 8:10–11', chapterId: 'GEN-8', verseNumber: 11 },
          { label: 'Genesis 8:12', chapterId: 'GEN-8', verseNumber: 12 },
        ],
      },
      {
        id: 'noah-6',
        beatNumber: 6,
        title: 'The Rainbow Promise',
        narrative:
          'At last God lifted the waiting: “Go out of the ship, you, your wife, your sons, and your sons’ wives with you.” Footsteps echoed down the wooden ramp onto firm green soil as birds burst into clear sky and herds wandered back across fresh meadows. Before pitching a single tent or plowing a single field, Noah gathered stones, built a simple altar, and offered up a sacrifice of pure gratitude to the Lord.\n\nDelighted by his thankful heart, God spoke an eternal covenant over all living generations—setting His radiant watercolor bow across the drifting rainclouds. From that morning onward, every rainbow shining through storm mist stands as a quiet pledge of God’s mercy: never again would floodwaters wipe out the earth, and His faithfulness would endure through every season to come.',
        imageUrl: '/images/stories/noah-6.webp',
        imageAlt: 'A soft watercolor rainbow arcing over green hills beside a thanksgiving altar',
        scriptureRefs: [
          { label: 'Genesis 8:15–19', chapterId: 'GEN-8', verseNumber: 16 },
          { label: 'Genesis 8:20–22', chapterId: 'GEN-8', verseNumber: 20 },
          { label: 'Genesis 9:12–16', chapterId: 'GEN-9', verseNumber: 13 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Faithful steps come before seeing the outcome',
        description:
          'Noah started sawing timber years before a drop of rain appeared, even while neighbors doubted. Steady, quiet obedience today builds shelter long before life’s storms arrive.',
        anchorRef: { label: 'Genesis 6:22', chapterId: 'GEN-6', verseNumber: 22 },
      },
      {
        title: 'God never forgets those waiting inside the storm',
        description:
          'Months drifted by without visible change, yet Scripture says “God remembered Noah.” Silence does not mean absence—God keeps track of every waiting heart.',
        anchorRef: { label: 'Genesis 8:1', chapterId: 'GEN-8', verseNumber: 1 },
      },
      {
        title: 'Gratitude welcomes a new beginning',
        description:
          'Noah’s very first act on dry land was building an altar of thanks before tending anything else—reminding us to pause and honor God at the start of every new chapter.',
        anchorRef: { label: 'Genesis 8:20', chapterId: 'GEN-8', verseNumber: 20 },
      },
    ],
    reflectionPrompt:
      'Where in your life do you feel asked to stay faithful right now even before you can see the outcome?',
  },
  {
    id: 'story-david-goliath',
    slug: 'david-goliath',
    title: 'David & Goliath',
    subtitle: 'Small Hands, Unshakable Trust in God',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: '1 Samuel 17',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/david-goliath-4.webp',
    primaryChapterId: '1SA-17',
    summary:
      'While an intimidating giant champion paralyzed an entire army with forty days of fear, a teenage shepherd arrived carrying simple bread and cheese for his brothers—and showed everyone what ordinary faith in the living God can do.',
    beats: [
      {
        id: 'dg-1',
        beatNumber: 1,
        title: 'Two Camps Across the Valley of Elah',
        narrative:
          'War broke out again between Israel and the Philistine cities, and both armies dug in on facing limestone slopes above the rocky Valley of Elah. Every morning, trumpets sounded across the dry riverbed separating the camps, yet neither side dared charge downhill first. Back home in quiet Bethlehem hills, young David—the youngest of Jesse’s eight sons—spent his days watching sheep and strumming songs on his harp.\n\nOne morning his aging father packed roasted grain, ten fresh loaves of bread, and ten cuts of cheese, sending David twenty miles down to the army camp to check on his three oldest brothers. Arriving just as soldiers hurried toward the front lines shouting battle cries, David left his supplies with the baggage keeper and ran eagerly forward to greet his family.',
        imageUrl: '/images/stories/david-goliath-1.webp',
        imageAlt: 'Two ancient armies encamped on facing hills above the Valley of Elah',
        scriptureRefs: [
          { label: '1 Samuel 17:1–3', chapterId: '1SA-17', verseNumber: 1 },
          { label: '1 Samuel 17:17–22', chapterId: '1SA-17', verseNumber: 20 },
        ],
      },
      {
        id: 'dg-2',
        beatNumber: 2,
        title: 'A Giant’s Boast Silences the Army',
        narrative:
          'Suddenly a hush fell across the hillside lines. Out from the Philistine ranks strode their towering champion, Goliath of Gath—standing over nine feet tall, clad from brow to shin in heavy bronze scale armor weighing well over a hundred pounds. A thick wooden spear tipped with gleaming iron rested over his shoulder while a shield-bearer marched steadily ahead of him.\n\nEvery morning and evening for forty straight days, Goliath’s deep voice had thundered across the valley: “Choose a man for yourselves, and let him come down to me! Today I defy the armies of Israel!” Watching seasoned Israelite warriors turn pale and stumble backward in dread, young David burned with quiet astonishment—how could anyone let an outsider insult the living God of Israel without answering?',
        imageUrl: '/images/stories/david-goliath-2.webp',
        imageAlt: 'Towering bronze-armored Goliath standing across the valley ridge before fearful troops',
        scriptureRefs: [
          { label: '1 Samuel 17:4–11', chapterId: '1SA-17', verseNumber: 4 },
          { label: '1 Samuel 17:16', chapterId: '1SA-17', verseNumber: 16 },
          { label: '1 Samuel 17:24–26', chapterId: '1SA-17', verseNumber: 26 },
        ],
      },
      {
        id: 'dg-3',
        beatNumber: 3,
        title: 'Setting Aside Heavy Armor',
        narrative:
          'Word of David’s fearless questions reached King Saul, who summoned the curly-haired youth into his royal tent. “You aren’t able to go against this Philistine,” Saul sighed, seeing only a boy beside a lifelong warrior. Quietly, David told the king how lions and bears had tried to steal lambs from his father’s flock—and how Yahweh Himself had given the young shepherd strength to rescue every lamb safely. Convinced by his calm faith, Saul agreed, saying, “Go, and may Yahweh be with you.”\n\nWanting to protect the boy, Saul buckled his own heavy bronze helmet onto David’s head, cinched a thick coat of bronze mail around his chest, and strapped a heavy sword to his belt. David tried to take a few steps—and nearly buckled beneath the unfamiliar metal. Respectfully lifting off the royal armor, he answered honestly: “I cannot go in these, for I have not tested them.”',
        imageUrl: '/images/stories/david-goliath-3.webp',
        imageAlt: 'Young David setting aside King Saul’s oversized bronze helmet and armor inside a tent',
        scriptureRefs: [
          { label: '1 Samuel 17:32–37', chapterId: '1SA-17', verseNumber: 37 },
          { label: '1 Samuel 17:38–39', chapterId: '1SA-17', verseNumber: 39 },
        ],
      },
      {
        id: 'dg-4',
        beatNumber: 4,
        title: 'Five Smooth Stones From the Stream',
        narrative:
          'Stepping out of the king’s tent wearing only his light linen shepherd tunic, David gripped his wooden walking staff and walked down alone into the wide valley floor. Reaching the clear, rippling creek that wound between the two armies, he knelt beside the sunlit pebbles and took his time—feeling for five smooth river stones worn perfectly round by rushing water.\n\nDropping them neatly into the worn leather pouch slung at his side, he checked his simple braided wool sling—a tool he had practiced with across lonely Bethlehem hills for years. No gleaming shield covered his chest, yet peace rested on his brow as he rose and walked briskly across the gravel toward the waiting giant.',
        imageUrl: '/images/stories/david-goliath-4.webp',
        imageAlt: 'Young shepherd David kneeling beside a clear stream choosing five smooth river stones',
        scriptureRefs: [
          { label: '1 Samuel 17:40', chapterId: '1SA-17', verseNumber: 40 },
          { label: '1 Samuel 17:41–44', chapterId: '1SA-17', verseNumber: 43 },
        ],
      },
      {
        id: 'dg-5',
        beatNumber: 5,
        title: 'Standing in the Name of the Lord',
        narrative:
          'When Goliath squinted at the rosy-cheeked shepherd carrying a stick instead of a spear, he roared with insulted laughter: “Am I a dog, that you come to me with sticks?” Cursing David by his Philistine idols, the armored giant lumbered angrily forward across the valley dust.\n\nDavid did not flinch—in fact, he began to run straight toward the battle line, calling out loud enough for both hillsides to hear: “You come to me with a sword, with a spear, and with a javelin; but I come to you in the name of Yahweh of Armies!” Reaching smoothly into his shepherd bag, David slipped one round stone into his leather sling, whirled it overhead with a sharp hum, and let fly. God guided that single stone straight into the one unarmored gap above Goliath’s brow—sending the towering champion crashing face-first to the earth.',
        imageUrl: '/images/stories/david-goliath-5.webp',
        imageAlt: 'Courageous young David striding forward whirling his leather sling in golden light',
        scriptureRefs: [
          { label: '1 Samuel 17:45–47', chapterId: '1SA-17', verseNumber: 45 },
          { label: '1 Samuel 17:48–50', chapterId: '1SA-17', verseNumber: 49 },
        ],
      },
      {
        id: 'dg-6',
        beatNumber: 6,
        title: 'Courage That Inspires Everyone Around',
        narrative:
          'For one breathless second, utter silence hung across the Valley of Elah. Then an unstoppable roar of joy broke from the Israelite ridge—men who had hidden behind boulders for forty days leaped to their feet and surged forward together while the Philistine ranks turned and scattered down the western road.\n\nLater that golden afternoon, Saul welcomed the humble young shepherd back, amazed at how completely God had rescued an entire nation without sword or spear in David’s hand. One faithful heart, choosing trust over terror, had broken the grip of fear across an entire generation.',
        imageUrl: '/images/stories/david-goliath-6.webp',
        imageAlt: 'Golden sunrise over the Valley of Elah as David lifts his shepherd staff in thanksgiving',
        scriptureRefs: [
          { label: '1 Samuel 17:51–53', chapterId: '1SA-17', verseNumber: 52 },
          { label: '1 Samuel 17:55–58', chapterId: '1SA-17', verseNumber: 58 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'You don’t need someone else’s armor to serve God',
        description:
          'Saul’s bronze helmet and breastplate only slowed David down. God equips you through your own quiet training and everyday skills—not by copying someone else’s size.',
        anchorRef: { label: '1 Samuel 17:39', chapterId: '1SA-17', verseNumber: 39 },
      },
      {
        title: 'Remember past rescues when facing today’s giant',
        description:
          'David faced Goliath with confidence because he treasured every memory of how God had protected his flock from lion and bear when nobody was watching.',
        anchorRef: { label: '1 Samuel 17:37', chapterId: '1SA-17', verseNumber: 37 },
      },
      {
        title: 'The battle belongs to God, not outward strength',
        description:
          'Loud boasting and heavy gear look decisive to human eyes, yet God delights in showing His strength through humble, trusting servants.',
        anchorRef: { label: '1 Samuel 17:47', chapterId: '1SA-17', verseNumber: 47 },
      },
    ],
    reflectionPrompt:
      'What “oversized expectation” can you set down today so you can step forward simply with what God has placed in your hands?',
  },
  {
    id: 'story-daniel-lions',
    slug: 'daniel-lions',
    title: 'Daniel in the Lions’ Den',
    subtitle: 'Quiet Faithfulness That Outlasts Any Decree',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: 'Daniel 6',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/daniel-lions-4.webp',
    primaryChapterId: 'DAN-6',
    summary:
      'Now a silver-haired statesman in his eighties, Daniel had served kingdoms honestly for decades—until jealous rivals turned his steady daily habit of prayer into a deadly trap inside a stone-sealed lions’ pit.',
    beats: [
      {
        id: 'dan-1',
        beatNumber: 1,
        title: 'Steady Prayer by an Open Window',
        narrative:
          'Even after empires rose and fell around Babylon, aging Daniel shone above every administrator in King Darius’s court because an “excellent spirit was in him.” So clear were his accounts and so upright his decisions that the king planned to set him over the whole realm. Fame, however, never crowded out Daniel’s oldest friendship.\n\nThree times every single day—at morning light, midday heat, and quiet dusk—he walked up the stone stairs of his house, pushed open the shutters facing distant Jerusalem, got down on his knees, and prayed aloud with thanksgiving just as he had faithfully done since his youth.',
        imageUrl: '/images/stories/daniel-lions-1.webp',
        imageAlt: 'Elder white-bearded Daniel kneeling serenely in prayer beside an arched window at sunrise',
        scriptureRefs: [
          { label: 'Daniel 6:1–4', chapterId: 'DAN-6', verseNumber: 3 },
          { label: 'Daniel 6:10', chapterId: 'DAN-6', verseNumber: 10 },
        ],
      },
      {
        id: 'dan-2',
        beatNumber: 2,
        title: 'A Jealous Plot Behind Palace Doors',
        narrative:
          'Jealous governors and court officials met in hushed anger beneath carved sandstone arches, combing through years of Daniel’s paperwork to ruin his name. To their frustration, they found no bribery, no favoritism, and not a single careless line. Finally one plotter whispered the truth they knew well: “We will not find any occasion against this Daniel, unless we find it against him concerning the law of his God.”\n\nFlattering King Darius’s pride, they coaxed him into sealing an unchangeable thirty-day law under the royal signet ring: anyone praying to any god or mortal besides the king himself would be thrown straight into the den of hungry lions.',
        imageUrl: '/images/stories/daniel-lions-2.webp',
        imageAlt: 'Scheming officials whispering beneath carved sandstone arches with a royal scroll',
        scriptureRefs: [
          { label: 'Daniel 6:4–5', chapterId: 'DAN-6', verseNumber: 5 },
          { label: 'Daniel 6:6–9', chapterId: 'DAN-6', verseNumber: 8 },
          { label: 'Daniel 6:11', chapterId: 'DAN-6', verseNumber: 11 },
        ],
      },
      {
        id: 'dan-3',
        beatNumber: 3,
        title: 'Lowered Into the Sealed Pit at Dusk',
        narrative:
          'When Daniel learned that the decree bore the king’s fresh wax seal, he didn’t close his blinds or switch to hiding under covers. He walked peacefully upstairs, opened his shutters toward Jerusalem, knelt as always, and gave thanks to God. Spies stationed outside rushed straight back to the palace in triumph.\n\nHearing their accusation, King Darius instantly realized he had been tricked—and spent the rest of the afternoon pacing law books until sunset trying desperately to rescue his trusted elder statesman. At twilight, bound by the proud customs of his kingdom, Darius watched helplessly as guards guided calm, unresisting Daniel down into the rocky pit and rolled a massive stone wheel over its mouth, whispering: “Your God whom you serve continually, He will deliver you!”',
        imageUrl: '/images/stories/daniel-lions-3.webp',
        imageAlt: 'Calm elder Daniel descending into the stone pit as guards roll a heavy sealing stone',
        scriptureRefs: [
          { label: 'Daniel 6:10–13', chapterId: 'DAN-6', verseNumber: 10 },
          { label: 'Daniel 6:14–16', chapterId: 'DAN-6', verseNumber: 16 },
          { label: 'Daniel 6:17', chapterId: 'DAN-6', verseNumber: 17 },
        ],
      },
      {
        id: 'dan-4',
        beatNumber: 4,
        title: 'Angels Quiet the Lions Through the Night',
        narrative:
          'Back inside his golden palace, King Darius refused supper, sent away every palace musician, and lay awake listening to the ticking silence until dawn. Yet deep beneath the courtyard stone, where growls usually echoed through the dark, remarkable stillness settled over the cavern.\n\nA messenger from heaven stood invisibly beside the silver-haired man of prayer. Massive golden-maned lions—fierce beasts kept half-starved at the palace edge—blinked softly, folded their heavy paws, and curled fast asleep around Daniel like gentle shepherd lambs while soft moonlight fell across his folded hands.',
        imageUrl: '/images/stories/daniel-lions-4.webp',
        imageAlt: 'Inside the moonlit stone cavern, Daniel resting calmly in prayer beside sleeping golden lions',
        scriptureRefs: [
          { label: 'Daniel 6:18', chapterId: 'DAN-6', verseNumber: 18 },
          { label: 'Daniel 6:22', chapterId: 'DAN-6', verseNumber: 22 },
        ],
      },
      {
        id: 'dan-5',
        beatNumber: 5,
        title: 'An Anxious Call at First Light',
        narrative:
          'At the very first pale streak of sunrise, Darius rose hurriedly from his unrumpled bed and ran across the cool palace stones to the sealed lions’ pit. As attendants strained to roll aside the heavy stone cover, warm golden daylight spilled down into the cavern.\n\nLeaning forward with a cracked, grieving voice, the king called down into the shaft: “Daniel, servant of the living God, has your God, whom you serve continually, been able to deliver you from the lions?” Out of the sunlit pit rose a steady, cheerful, unhurried voice: “O king, live forever! My God has sent His angel, and has shut the lions’ mouths, and they have not hurt me!”',
        imageUrl: '/images/stories/daniel-lions-5.webp',
        imageAlt: 'Warm sunrise streaming into the opened pit as King Darius looks down eagerly',
        scriptureRefs: [
          { label: 'Daniel 6:19–20', chapterId: 'DAN-6', verseNumber: 20 },
          { label: 'Daniel 6:21–22', chapterId: 'DAN-6', verseNumber: 21 },
        ],
      },
      {
        id: 'dan-6',
        beatNumber: 6,
        title: 'Unharmed and Honoring God Across the Empire',
        narrative:
          'Overwhelmed with gladness, Darius ordered guards to lift Daniel gently up out of the pit at once. Watching closely in bright courtyard morning light, attendants marveled to find “no kind of harm was found on him, because he had trusted in his God”—not even a torn hem or scratched sleeve from a long night among predators.\n\nInstead of hidden schemers controlling the realm, the living God of Daniel was proclaimed to every language and province across the empire: “He is the living God, and steadfast forever! He rescues and delivers, and works signs and wonders in heaven and on earth.”',
        imageUrl: '/images/stories/daniel-lions-6.webp',
        imageAlt: 'Joyous sunlit reunion as Daniel stands unharmed beside the relieved king',
        scriptureRefs: [
          { label: 'Daniel 6:23', chapterId: 'DAN-6', verseNumber: 23 },
          { label: 'Daniel 6:25–28', chapterId: 'DAN-6', verseNumber: 26 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Quiet daily habits build crisis-ready courage',
        description:
          'Daniel didn’t suddenly invent bravery on the afternoon of the decree—it grew steadily from decades of kneeling three times a day when life was ordinary.',
        anchorRef: { label: 'Daniel 6:10', chapterId: 'DAN-6', verseNumber: 10 },
      },
      {
        title: 'Integrity leaves critics with nothing shameful to find',
        description:
          'Because Daniel worked with complete fairness and clean hands, his opponents could only target his devotion to God—never his character.',
        anchorRef: { label: 'Daniel 6:4', chapterId: 'DAN-6', verseNumber: 4 },
      },
      {
        title: 'No sealed stone can lock God’s presence outside',
        description:
          'Human decrees and stone seals felt final at dusk, yet God entered the cavern Himself and turned a place of dread into peace until dawn.',
        anchorRef: { label: 'Daniel 6:22–23', chapterId: 'DAN-6', verseNumber: 23 },
      },
    ],
    reflectionPrompt:
      'What small, peaceful daily rhythm—like morning prayer or Scripture reading—keeps your heart steady when pressure rises?',
  },
  {
    id: 'story-good-samaritan',
    slug: 'good-samaritan',
    title: 'The Good Samaritan',
    subtitle: 'Love That Crosses Every Boundary',
    testament: 'NT',
    category: 'Parables of Jesus',
    scriptureRange: 'Luke 10:25–37',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/good-samaritan-4.webp',
    primaryChapterId: 'LUK-10',
    summary:
      'When a legal expert tried to draw neat boundary lines around whom he had to love, Jesus painted an unforgettable story along the dangerous canyon trail down to Jericho—showing that real love stops, kneels, and shares.',
    beats: [
      {
        id: 'gs-1',
        beatNumber: 1,
        title: 'The Steep Road Down to Jericho',
        narrative:
          'One day a trained expert in Scripture stood up to test Jesus: “Teacher, what shall I do to inherit eternal life?” Jesus gently pointed him right back to the ancient commandments he knew by heart: “Love the Lord your God with all your heart… and love your neighbor as yourself.” Hoping to narrow that second duty down to friends like himself, the scholar pressed back, “And who is my neighbor?”\n\nInstead of debating definitions, Jesus told a story everyone in His crowd could picture clearly. A traveler set out walking from bright Jerusalem rooftops down the winding seventeen-mile mountain road toward palm-dotted Jericho—a steep, barren limestone pass dropping over three thousand feet through lonely canyon bends.',
        imageUrl: '/images/stories/good-samaritan-1.webp',
        imageAlt: 'Winding dusty desert road descending limestone hills between Jerusalem and Jericho',
        scriptureRefs: [
          { label: 'Luke 10:25–29', chapterId: 'LUK-10', verseNumber: 29 },
          { label: 'Luke 10:30', chapterId: 'LUK-10', verseNumber: 30 },
        ],
      },
      {
        id: 'gs-2',
        beatNumber: 2,
        title: 'Ambushed and Left Beside the Stones',
        narrative:
          'Known even in ancient times as “The Way of Blood” for its blind rock overhangs and outlaw hiding caves, that desert trail held sudden danger for anyone traveling alone. Rounding a quiet bend beneath golden cliffs, the lone traveler fell straight into the hands of waiting robbers.\n\nQuickly they tore away his heavy traveling coat, emptied his pouch, struck him hard, and hurried off into the canyon dust—leaving him bruised, exhausted, and half-conscious beside dry roadside boulders beneath the glaring noon heat.',
        imageUrl: '/images/stories/good-samaritan-2.webp',
        imageAlt: 'A weary bruised traveler slumped beside desert roadside stones awaiting help',
        scriptureRefs: [
          { label: 'Luke 10:30', chapterId: 'LUK-10', verseNumber: 30 },
        ],
      },
      {
        id: 'gs-3',
        beatNumber: 3,
        title: 'Passing By on the Opposite Side',
        narrative:
          'Hope stirred when footsteps echoed down the gravel path—a temple priest, fresh from serving God in Jerusalem, walked down the very same trail! Yet catching sight of the groaning figure slumped against the stones, the priest quietly drifted to the far edge of the desert road and hurried on without breaking stride.\n\nSoon after, a Levite worship helper arrived at the same bend, glanced over closely at the wounded man’s bruised shoulders, and likewise angled safely across to the opposite side. Both men knew every verse about mercy—yet fear, hurry, or inconvenience kept their robes clean and their hands empty.',
        imageUrl: '/images/stories/good-samaritan-3.webp',
        imageAlt: 'Two finely robed travelers hurrying along the far side of the road without stopping',
        scriptureRefs: [
          { label: 'Luke 10:31–32', chapterId: 'LUK-10', verseNumber: 31 },
        ],
      },
      {
        id: 'gs-4',
        beatNumber: 4,
        title: 'The Outsider Who Stopped With Compassion',
        narrative:
          'Then Jesus introduced a twist that startled His whole audience: “But a certain Samaritan, as he traveled, came where he was.” For centuries, bitter distrust had divided Jewish listeners and Samaritans into strangers who rarely spoke at a town well, let alone helped on a lonely mountain pass.\n\nYet when this Samaritan saw the stranded stranger hurting in the dirt, Luke writes that “he was moved with compassion.” Disregarding danger, delay, and old divisions, he climbed down beside the rocks, poured soothing wine to clean the scrapes and soothing olive oil to ease the sting, and patiently wrapped clean linen strips around the man’s bruised arms.',
        imageUrl: '/images/stories/good-samaritan-4.webp',
        imageAlt: 'A kind Samaritan kneeling beside the wounded man wrapping clean bandages around his arm',
        scriptureRefs: [
          { label: 'Luke 10:33–34', chapterId: 'LUK-10', verseNumber: 33 },
        ],
      },
      {
        id: 'gs-5',
        beatNumber: 5,
        title: 'Walking While Another Rides',
        narrative:
          'Kind words alone could not carry an injured man out of an empty canyon before dark. With gentle steady strength, the Samaritan supported the bandaged traveler upright, helped lift him carefully onto the padded saddle of his own sure-footed gray donkey, and took the lead rope himself.\n\nStep after rocky step through the warm afternoon sun, the rescuer walked on dusty feet while the stranger rested safely above—trading personal comfort and hours of travel to make sure another human being reached shelter alive.',
        imageUrl: '/images/stories/good-samaritan-5.webp',
        imageAlt: 'The Samaritan guiding his donkey carrying the bandaged traveler down the sunlit trail',
        scriptureRefs: [
          { label: 'Luke 10:34', chapterId: 'LUK-10', verseNumber: 34 },
        ],
      },
      {
        id: 'gs-6',
        beatNumber: 6,
        title: 'Generous Care Until Full Recovery',
        narrative:
          'Just as amber lantern light warmed the stone walls of a roadside Jericho inn at dusk, they arrived safely. The Samaritan stayed up caring for the man through the night, then reached into his travel bag next morning, pulled out two silver denarii—two full days’ wages covering weeks of quiet lodging—and placed them into the innkeeper’s palm: “Take care of him; whatever you spend beyond that, I will repay you when I return.”\n\nPausing, Jesus looked directly at the legal scholar and asked gently, “Now which of these three do you think seemed to be a neighbor to him?” Even reluctant lips had to whisper the truth: “He who showed mercy on him.” With quiet clarity, Jesus replied, “Go and do likewise.”',
        imageUrl: '/images/stories/good-samaritan-6.webp',
        imageAlt: 'Warm inn courtyard at dusk as the Samaritan hands silver coins to a welcoming innkeeper',
        scriptureRefs: [
          { label: 'Luke 10:35', chapterId: 'LUK-10', verseNumber: 35 },
          { label: 'Luke 10:36–37', chapterId: 'LUK-10', verseNumber: 37 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Love is measured by stopping, not religious status',
        description:
          'Knowledge, titles, and busy schedules mean little if hurry convinces us to cross the street around someone hurting in front of us.',
        anchorRef: { label: 'Luke 10:31–33', chapterId: 'LUK-10', verseNumber: 33 },
      },
      {
        title: 'Every person in need is our neighbor',
        description:
          'Jesus flipped “Who deserves my care?” into “Whose neighbor can I become today?”—calling us to cross old social walls with simple kindness.',
        anchorRef: { label: 'Luke 10:36–37', chapterId: 'LUK-10', verseNumber: 36 },
      },
      {
        title: 'Compassion finishes what it starts',
        description:
          'The Samaritan offered practical care—bandages, his own seat on the donkey, his night’s rest, and money for recovery—sticking with his neighbor until safe.',
        anchorRef: { label: 'Luke 10:34–35', chapterId: 'LUK-10', verseNumber: 35 },
      },
    ],
    reflectionPrompt:
      'Who around you might need an unhurried kindness, phone call, or helping hand this week?',
  },
  {
    id: 'story-prodigal-son',
    slug: 'prodigal-son',
    title: 'The Prodigal Son',
    subtitle: 'A Father Running Down the Road With Open Arms',
    testament: 'NT',
    category: 'Parables of Jesus',
    scriptureRange: 'Luke 15:11–32',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/prodigal-son-4.webp',
    primaryChapterId: 'LUK-15',
    summary:
      'Criticized for sharing meals with broken outsiders, Jesus told one of the most moving stories ever spoken—revealing a heavenly Father who watches the horizon eagerly and runs to welcome returning hearts.',
    beats: [
      {
        id: 'ps-1',
        beatNumber: 1,
        title: 'Asking to Leave Home Early',
        narrative:
          'Religious critics grumbled aloud because Jesus welcomed tax collectors and ordinary sinners around His table. In answer, Jesus pictured a warmhearted landowner who had two sons. One day the younger son stepped beneath the sunny stone courtyard arch with an aching restlessness: “Father, give me the share of your property that will come to me.”\n\nIn the ancient world, demanding an inheritance early felt like wishing a parent gone—yet instead of exploding in anger, the silver-haired father quietly divided his estate with sorrowful generosity. Only a few days later, the younger son gathered his silver coins into a leather satchel, embraced his father at the gate, and set off down the dusty hill toward a far-off country.',
        imageUrl: '/images/stories/prodigal-son-1.webp',
        imageAlt: 'Silver-haired father standing gently beneath courtyard olive shade as his younger son departs',
        scriptureRefs: [
          { label: 'Luke 15:1–2', chapterId: 'LUK-15', verseNumber: 2 },
          { label: 'Luke 15:11–13', chapterId: 'LUK-15', verseNumber: 12 },
        ],
      },
      {
        id: 'ps-2',
        beatNumber: 2,
        title: 'Fast Living & Empty Pockets',
        narrative:
          'Free at last from family advice and dawn chores, the young man arrived in bustling foreign streets glowing with warm paper lanterns, loud music, and crowded banquet tables. Silver coins clinked easily from his open hand as smiling acquaintances gathered round, cheering every toast as long as he paid the bill.\n\nYet careless wealth never lasts. Just when his pouch grew light, a severe famine parched that distant land—bread prices soared, tables fell silent, and one by one every cheerful companion vanished into the evening alleys, leaving him frightened, hungry, and completely alone.',
        imageUrl: '/images/stories/prodigal-son-2.webp',
        imageAlt: 'Bright evening town square where the young man spends his coins freely in crowds',
        scriptureRefs: [
          { label: 'Luke 15:13–14', chapterId: 'LUK-15', verseNumber: 13 },
        ],
      },
      {
        id: 'ps-3',
        beatNumber: 3,
        title: 'Coming to His Senses in the Fields',
        narrative:
          'Desperate for even a crust of bread, he hired himself out to a local farmer—who sent the once-proud son out into the mud to feed pigs, the lowest, loneliest task imaginable to Jesus’s listeners. Sitting barefoot on a damp rock beneath pale overcast hills, his stomach ached so fiercely that he longed just to eat the coarse carob pods spilled into the wooden troughs, yet no one gave him anything.\n\nIn that quiet mud, honesty broke through pride. “When he came to himself,” Luke writes, “he said, ‘How many hired servants of my father’s have bread enough to spare, and I’m dying with hunger! I will get up and go to my father, and will tell him, Father, I have sinned against heaven, and in your sight. I am no longer worthy to be called your son. Make me as one of your hired servants.’”',
        imageUrl: '/images/stories/prodigal-son-3.webp',
        imageAlt: 'Ragged humble young man sitting beside muddy wooden troughs looking homeward',
        scriptureRefs: [
          { label: 'Luke 15:15–16', chapterId: 'LUK-15', verseNumber: 16 },
          { label: 'Luke 15:17–19', chapterId: 'LUK-15', verseNumber: 17 },
        ],
      },
      {
        id: 'ps-4',
        beatNumber: 4,
        title: 'Spotted From Afar & Met With a Sprint',
        narrative:
          'Rehearsing his humble confession step after weary step, the tattered traveler finally rounded the last familiar cypress bend overlooking his childhood vineyard walls—expecting at best a cold glance from the porch or a bed in the outer barn.\n\nWhat he did not know was that his father had never stopped scanning the horizon road. “While he was still far off,” Jesus told the hushed crowd, “his father saw him, and was moved with compassion!” Dignity mattered little to a loving father’s heart—he bunched his long outer robes into his belt and sprinted straight down the gravel road with arms wide open.',
        imageUrl: '/images/stories/prodigal-son-4.webp',
        imageAlt: 'Elderly father lifting his robes and running swiftly down a sunlit path toward his distant son',
        scriptureRefs: [
          { label: 'Luke 15:20', chapterId: 'LUK-15', verseNumber: 20 },
        ],
      },
      {
        id: 'ps-5',
        beatNumber: 5,
        title: 'Tears, Forgiveness & an Open Embrace',
        narrative:
          'Catching up in golden late-afternoon sunlight beside the low stone wall, the father didn’t wait for a formal speech or demand proof first. He threw both arms tightly around his ragged, dusty son and kissed his cheeks with tears of pure relief.\n\nCatching his breath, the son tried to finish the speech he had practiced on the road: “Father, I have sinned against heaven and in your sight. I am no longer worthy to be called your son—” Yet the father gently cut off the “make me a servant” line before it could leave his boy’s lips, calling warmly toward the house at once.',
        imageUrl: '/images/stories/prodigal-son-5.webp',
        imageAlt: 'Warm golden-hour reunion embrace as the father holds his kneeling son tightly',
        scriptureRefs: [
          { label: 'Luke 15:20–21', chapterId: 'LUK-15', verseNumber: 21 },
        ],
      },
      {
        id: 'ps-6',
        beatNumber: 6,
        title: 'A Fine Robe & a Joyful Table',
        narrative:
          '“Bring out the best robe,” the father beamed, “and put it on him! Put a ring on his hand, and sandals on his feet!” Not a uniform for a field worker, but the family seal of honor—proclaiming before every neighbor that shame was finished and full belonging was restored.\n\nSoon glowing oil lamps hung beneath courtyard olive trees, music drifted into the night air, and family and neighbors gathered around a joyful banquet table—celebrating what heaven itself looks like whenever one lost heart comes home: “This son of mine was dead, and is alive again! He was lost, and is found!”',
        imageUrl: '/images/stories/prodigal-son-6.webp',
        imageAlt: 'Lantern-lit courtyard celebration with the son wearing a fine robe beside a joyful table',
        scriptureRefs: [
          { label: 'Luke 15:22–24', chapterId: 'LUK-15', verseNumber: 24 },
          { label: 'Luke 15:31–32', chapterId: 'LUK-15', verseNumber: 32 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'No mistake leaves you too far gone to turn back',
        description:
          'Even from the muddiest low point, honest humility—admitting where we drifted and turning toward home—always finds the road still open.',
        anchorRef: { label: 'Luke 15:17–18', chapterId: 'LUK-15', verseNumber: 17 },
      },
      {
        title: 'God doesn’t wait stiffly—He runs to meet returning hearts',
        description:
          'The father didn’t fold his arms on the porch until his son earned back trust; his compassion moved him into a sprint while his child was still far down the road.',
        anchorRef: { label: 'Luke 15:20', chapterId: 'LUK-15', verseNumber: 20 },
      },
      {
        title: 'Grace restores full belonging, not just bare pardon',
        description:
          'The best robe, family ring, sandals, and feast declare that God welcomes repentant people back as beloved family—never as second-class servants.',
        anchorRef: { label: 'Luke 15:22–24', chapterId: 'LUK-15', verseNumber: 22 },
      },
    ],
    reflectionPrompt:
      'Have you ever felt “too far off” to come back cleanly? What does the father’s running embrace tell you about God’s heart today?',
  },
  {
    id: 'story-red-sea',
    slug: 'red-sea',
    title: 'Moses & the Crossing of the Red Sea',
    subtitle: 'Stand Still and Watch the Lord Fight for You',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: 'Exodus 13–15',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/red-sea-4.webp',
    primaryChapterId: 'EXO-14',
    summary:
      'Leading newly freed families out of Egypt only to find deep sea waters ahead and thundering iron chariots closing in behind, Moses lifted his wooden shepherd staff—and God carved a dry highway right through the waves.',
    beats: [
      {
        id: 'rs-1',
        beatNumber: 1,
        title: 'Guided by Cloud & Fire',
        narrative:
          'After four hundred years of harsh brickmaking in Egypt, hundreds of thousands of Israelite men, women, and children walked out under night skies carrying leaven-free dough wrapped in kneading bowls. They carried no military maps or compasses—only God’s promise and Moses leading them step by step.\n\nBetter than any earthly scout, Yahweh Himself traveled directly ahead of their column: as a towering bright pillar of cloud shielding them from scorching desert sun by day, and a warm glowing pillar of fire lighting every dusty mile by night so the whole camp could keep moving forward in peace.',
        imageUrl: '/images/stories/red-sea-1.webp',
        imageAlt: 'A towering golden pillar of cloud and fire guiding Israelite families across desert twilight',
        scriptureRefs: [
          { label: 'Exodus 13:17–18', chapterId: 'EXO-13', verseNumber: 17 },
          { label: 'Exodus 13:21–22', chapterId: 'EXO-13', verseNumber: 21 },
        ],
      },
      {
        id: 'rs-2',
        beatNumber: 2,
        title: 'Trapped Between Waves & Chariots',
        narrative:
          'Following the pillar’s strange south turn, the families pitched camp right beside shimmering blue-teal waters of the Red Sea. Back inside his stone palace, Pharaoh suddenly regretted letting his unpaid builders go—hitching up six hundred of his finest bronze chariots and riding out fast in furious pursuit.\n\nJust as Israelite parents unpacked cooking pots beside the shore, someone looked back toward the western dunes and saw dust rising thick across the horizon. Fear swept through the tents like wildfire: shimmering waves blocked the front, steep ridges rose beside them, and hoofbeats thundered behind. Panic-stricken voices cried out to Moses, “Were there no graves in Egypt, that you brought us here to die?”',
        imageUrl: '/images/stories/red-sea-2.webp',
        imageAlt: 'Anxious Israelite families along the Red Sea shoreline as distant chariot dust rises behind',
        scriptureRefs: [
          { label: 'Exodus 14:5–9', chapterId: 'EXO-14', verseNumber: 8 },
          { label: 'Exodus 14:10–12', chapterId: 'EXO-14', verseNumber: 10 },
        ],
      },
      {
        id: 'rs-3',
        beatNumber: 3,
        title: 'Parting Towering Walls of Water',
        narrative:
          'Standing calmly before frightened thousands, silver-bearded Moses spoke words etched forever into Scripture: “Don’t be afraid. Stand still, and see the salvation of Yahweh, which He will work for you today! Yahweh will fight for you, and you shall be still.” Behind them, God moved the glowing pillar between Israel’s tents and Pharaoh’s horses—shrouding the Egyptian camp in thick darkness while pouring calm light across Israel.\n\nThen God gave Moses one simple command: “Lift up your rod, and stretch out your hand over the sea!” Stepping onto the rocky edge, Moses raised his simple wooden shepherd’s staff toward heaven. Immediately a fierce steady east wind roared across the bay all night long, rolling deep turquoise waters backward until two gleaming crystal walls stood tall on left and right.',
        imageUrl: '/images/stories/red-sea-3.webp',
        imageAlt: 'Moses raising his wooden shepherd staff as fierce wind parts the turquoise sea into tall walls',
        scriptureRefs: [
          { label: 'Exodus 14:13–14', chapterId: 'EXO-14', verseNumber: 13 },
          { label: 'Exodus 14:19–21', chapterId: 'EXO-14', verseNumber: 21 },
        ],
      },
      {
        id: 'rs-4',
        beatNumber: 4,
        title: 'Dry Ground Through the Deep',
        narrative:
          'No muddy bog trapped their sandals—God’s steady wind dried the seabed cleanly down to firm hard sand. Holding tiny hands tightly and leading bleating sheep beside heavy wooden carts, grandparents and toddlers stepped forward between shimmering walls of living blue-green water.\n\nLight glinted through towering water walls studded with quiet sea shells while fishes darted just behind invisible barriers. Throughout those dark pre-dawn hours, every single family, elder, and flock crossed safely through the heart of the sea without losing even one person to the waves.',
        imageUrl: '/images/stories/red-sea-4.webp',
        imageAlt: 'Families holding hands walking across dry sandy seabed between translucent walls of water',
        scriptureRefs: [
          { label: 'Exodus 14:22', chapterId: 'EXO-14', verseNumber: 22 },
          { label: 'Exodus 14:29', chapterId: 'EXO-14', verseNumber: 29 },
        ],
      },
      {
        id: 'rs-5',
        beatNumber: 5,
        title: 'Dawn Brings Final Rescue',
        narrative:
          'Determined not to stop, Pharaoh’s drivers whipped their chariot teams straight into the parted seabed behind the last Israelite carts. Right before sunrise, God looked down from the fiery cloud and threw the heavy wheels into confusion—bolts shook loose and wooden wheels sank deep into wet sand.\n\nOnce the very last Israelite foot stepped safely onto the eastern bank, the Lord spoke again: “Stretch out your hand over the sea!” As bright golden morning sunlight spilled across the water, Moses stretched his staff outward—and with a mighty rush, the towering water walls crashed back together, swallowing chasing chariots completely and sealing Israel’s freedom forever.',
        imageUrl: '/images/stories/red-sea-5.webp',
        imageAlt: 'Golden morning sunrise over rejoined peaceful waves as Moses lowers his staff along the eastern bank',
        scriptureRefs: [
          { label: 'Exodus 14:23–25', chapterId: 'EXO-14', verseNumber: 24 },
          { label: 'Exodus 14:26–31', chapterId: 'EXO-14', verseNumber: 30 },
        ],
      },
      {
        id: 'rs-6',
        beatNumber: 6,
        title: 'Miriam’s Song on the Shore',
        narrative:
          'Watching the calm morning sea sparkle along the desert shoreline, fear melted into thunderous relief. Moses and all Israel lifted their voices together in the Bible’s earliest full song of triumph: “Yahweh is my strength and song! He has become my salvation!”\n\nPicking up a round wooden tambourine beside swaying morning palm trees, Moses’ sister Miriam led the women in joyful circle dances across the sunny beach, echoing the chorus back across the bay: “Sing to Yahweh, for He has triumphed gloriously!” What had looked like a hopeless dead end at midnight had become their forever proof of God’s power.',
        imageUrl: '/images/stories/red-sea-6.webp',
        imageAlt: 'Joyful Miriam lifting a tambourine beside singing women and families beneath morning palm trees',
        scriptureRefs: [
          { label: 'Exodus 15:1–3', chapterId: 'EXO-15', verseNumber: 2 },
          { label: 'Exodus 15:20–21', chapterId: 'EXO-15', verseNumber: 20 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'What looks like a dead end may be God’s setup for rescue',
        description:
          'Israel wasn’t led beside the Red Sea by mistake—God chose the very spot where only His power could open a way nobody else could imagine.',
        anchorRef: { label: 'Exodus 14:13–14', chapterId: 'EXO-14', verseNumber: 13 },
      },
      {
        title: 'God steps between His people and pursuing fear',
        description:
          'Notice how the pillar of cloud moved behind Israel before parting the sea—guarding their backs while opening a clear path ahead.',
        anchorRef: { label: 'Exodus 14:19–20', chapterId: 'EXO-14', verseNumber: 19 },
      },
      {
        title: 'Take time to celebrate God’s faithfulness aloud',
        description:
          'Moses and Miriam stopped on the eastern shore to sing and remember—turning fresh deliverance into lasting courage for miles still ahead.',
        anchorRef: { label: 'Exodus 15:2', chapterId: 'EXO-15', verseNumber: 2 },
      },
    ],
    reflectionPrompt:
      'Have you ever felt hemmed in with nowhere to turn—and later saw God open a path you couldn’t see beforehand?',
  },
  {
    id: 'story-jonah-fish',
    slug: 'jonah-fish',
    title: 'Jonah & the Great Fish',
    subtitle: 'Running From Mercy—and Being Caught by Grace',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: 'Jonah 1–4',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/jonah-3.webp',
    primaryChapterId: 'JON-1',
    summary:
      'When God told prophet Jonah to bring warning—and a chance for mercy—to Israel’s fiercest enemy Nineveh, Jonah bought a ship ticket heading the exact opposite way, learning deep underwater that you cannot outrun God’s compassion.',
    beats: [
      {
        id: 'jon-1',
        beatNumber: 1,
        title: 'A Ticket in the Wrong Direction',
        narrative:
          '“Arise, go to Nineveh, that great city,” God spoke clearly to Jonah, “and preach against it, for their wickedness has come up before Me.” Nineveh lay far east overland—a wealthy, brutal Assyrian capital dreaded across the ancient world. Jonah wanted judgment to fall on Nineveh, not forgiveness.\n\nSo instead of heading east, bearded Jonah slung a traveler’s satchel over his shoulder, hurried down to the Mediterranean harbor steps of Joppa at dawn, paid full silver fare, and climbed aboard a wooden Phoenician merchant ship bound far west for Tarshish—thinking he could flee cleanly away from the presence of Yahweh.',
        imageUrl: '/images/stories/jonah-1.webp',
        imageAlt: 'Jonah hurrying down stone harbor steps at Joppa toward a waiting wooden merchant vessel',
        scriptureRefs: [
          { label: 'Jonah 1:1–3', chapterId: 'JON-1', verseNumber: 3 },
        ],
      },
      {
        id: 'jon-2',
        beatNumber: 2,
        title: 'Furious Waves & Honest Confession',
        narrative:
          'Scarcely had the white sail filled before the sea turned black and violent. Huge slate-gray swells slammed against wooden planks until sailors feared the ship would snap right in half. Every crewman cried desperately to his own gods and began tossing heavy cargo jars overboard while Jonah slept exhausted deep inside the lower hold.\n\nWoken by the captain, Jonah knew why the storm was roaring—even casting lots pointed straight at him. “Pick me up and throw me into the sea,” Jonah admitted honestly, “for I know this great storm has come upon you because of me.” Reluctantly rowing hard to save him first, the exhausted sailors finally lifted Jonah over the rail—and instantly the raging sea turned glassy and still.',
        imageUrl: '/images/stories/jonah-2.webp',
        imageAlt: 'Stormy waves tossing the sailing vessel under dark skies as sailors grip the rigging',
        scriptureRefs: [
          { label: 'Jonah 1:4–6', chapterId: 'JON-1', verseNumber: 4 },
          { label: 'Jonah 1:12–16', chapterId: 'JON-1', verseNumber: 15 },
        ],
      },
      {
        id: 'jon-3',
        beatNumber: 3,
        title: 'Rescued Inside the Deep Waters',
        narrative:
          'Sinking into quiet dim teal depths far from sunlit waves, Jonah thought his stubborn flight had ended his life forever. Yet even at the bottom of the sea, God did not abandon His runaway prophet—preparing a massive gentle great fish to swallow Jonah whole and keep him alive.\n\nFor three days and three nights in the silent underwater deep, surrounded by stillness, Jonah prayed one of the most honest prayers in Scripture: “I called out because of my affliction to Yahweh, and He answered me… Salvation belongs to Yahweh!” Pride gave way cleanly to humble gratitude inside the deep.',
        imageUrl: '/images/stories/jonah-3.webp',
        imageAlt: 'A massive great fish swimming smoothly beneath soft underwater sunbeams rescuing Jonah',
        scriptureRefs: [
          { label: 'Jonah 1:17', chapterId: 'JON-1', verseNumber: 17 },
          { label: 'Jonah 2:1–9', chapterId: 'JON-2', verseNumber: 2 },
        ],
      },
      {
        id: 'jon-4',
        beatNumber: 4,
        title: 'A Second Chance on Dry Sand',
        narrative:
          'On the third day, Yahweh spoke directly to the great fish—which glided gently toward pale morning surf and deposited soaked, astonished Jonah cleanly back onto warm golden sand beside coastal stones. Sunlight warmed his trembling shoulders while gulls wheeled overhead.\n\nRemarkably, God didn’t discard His imperfect messenger or choose somebody else. Once again the gentle call came: “Arise, go to Nineveh, that great city, and preach to it the message that I give you.” This time, dripping sand from his sandals, Jonah got up and walked straight toward Nineveh.',
        imageUrl: '/images/stories/jonah-4.webp',
        imageAlt: 'Great fish returning soaked astonished Jonah safely onto a peaceful dawn beach',
        scriptureRefs: [
          { label: 'Jonah 2:10', chapterId: 'JON-2', verseNumber: 10 },
          { label: 'Jonah 3:1–3', chapterId: 'JON-3', verseNumber: 3 },
        ],
      },
      {
        id: 'jon-5',
        beatNumber: 5,
        title: 'An Entire City Turns From Pride',
        narrative:
          'Nineveh was massive—a bustling fortress city requiring three full days simply to walk across its crowded districts and mud-brick arches. Stepping right into its noisy marketplaces, Jonah preached just one stark, unadorned sentence: “Forty days more, and Nineveh shall be overthrown!”\n\nSomething extraordinary happened. Without seeing a single firestorm miracle, bakers, merchants, elders, and even the great king sitting on his royal throne humbled themselves in dust, put away violence, and begged for mercy. Seeing their genuine repentance, God gladly relented and spared the whole city.',
        imageUrl: '/images/stories/jonah-5.webp',
        imageAlt: 'Jonah walking through crowded ancient stone arches of Nineveh as townspeople bow in repentance',
        scriptureRefs: [
          { label: 'Jonah 3:4–6', chapterId: 'JON-3', verseNumber: 5 },
          { label: 'Jonah 3:7–10', chapterId: 'JON-3', verseNumber: 10 },
        ],
      },
      {
        id: 'jon-6',
        beatNumber: 6,
        title: 'Learning God’s Heart Under a Leafy Vine',
        narrative:
          'Instead of celebrating, bitter disappointment seized Jonah—he marched out onto an eastern hilltop overlooking Nineveh’s towers and pouted: “I knew You are a gracious God, full of compassion and slow to anger!” Gently, Yahweh caused a broad leafy gourd vine to spring up overnight, shading Jonah’s head from fierce desert sun.\n\nWhen a worm withered that plant next morning, Jonah mourned loudly over losing his comfortable shade. Quietly, God asked a question that still touches every reader today: “You feel pity for a plant you didn’t plant or grow… shouldn’t I have pity on Nineveh, home to over a hundred and twenty thousand precious people who don’t even know right from left?”',
        imageUrl: '/images/stories/jonah-6.webp',
        imageAlt: 'Jonah resting under a curling leafy gourd vine overlooking Nineveh walls at golden sunset',
        scriptureRefs: [
          { label: 'Jonah 4:1–6', chapterId: 'JON-4', verseNumber: 2 },
          { label: 'Jonah 4:10–11', chapterId: 'JON-4', verseNumber: 11 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Running from God’s call only leads into rougher seas',
        description:
          'Jonah thought Tarshish offered peace, yet obedience—even when hard—was always safer than running the opposite direction.',
        anchorRef: { label: 'Jonah 1:3–4', chapterId: 'JON-1', verseNumber: 3 },
      },
      {
        title: 'God specializes in second chances after detours',
        description:
          'When Jonah came out of the sea onto dry sand, God gave him the exact same mission again—proving failure doesn’t disqualify us from grace.',
        anchorRef: { label: 'Jonah 3:1–3', chapterId: 'JON-3', verseNumber: 1 },
      },
      {
        title: 'Never begrudge God showing others the mercy we received',
        description:
          'Jonah gladly accepted rescue underwater yet resented mercy shown to Nineveh. True love learns to share God’s heart even for difficult people.',
        anchorRef: { label: 'Jonah 4:11', chapterId: 'JON-4', verseNumber: 11 },
      },
    ],
    reflectionPrompt:
      'Is there an area where you’ve been tempted to head toward “Tarshish” instead of trusting God’s gentle nudge?',
  },
  {
    id: 'story-queen-esther',
    slug: 'queen-esther',
    title: 'Queen Esther’s Courage',
    subtitle: 'Called Into the Palace for Such a Time as This',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: 'Esther 4–7',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/esther-4.webp',
    primaryChapterId: 'EST-4',
    summary:
      'Born an orphaned Jewish girl living quietly in Persia, Esther suddenly wore a royal crown when a ruthless official plotted to wipe out her entire people—forcing one frightened young queen to risk her life before the throne.',
    beats: [
      {
        id: 'est-1',
        beatNumber: 1,
        title: '“For Such a Time as This”',
        narrative:
          'Raised tenderly by her wise older cousin Mordecai in the Persian capital city of Susa, humble young Esther never dreamed of silk curtains or royal crowns. Chosen for her quiet grace to become queen beside King Xerxes, she still respected Mordecai’s guidance and kept her Jewish heritage quietly hidden inside palace walls.\n\nSuddenly terror struck every province: proud prime minister Haman—furious because Mordecai would not bow down to him—tricked the king into sealing an empire-wide death decree against every Jewish family. Tearing his clothes outside the courtyard gate, Mordecai sent Esther an urgent message across palace arches: “Don’t think you will escape inside the king’s house… Who knows whether you haven’t come to the kingdom for such a time as this?”',
        imageUrl: '/images/stories/esther-1.webp',
        imageAlt: 'Wise bearded Mordecai speaking earnestly beneath a Susa courtyard arch to crowned Queen Esther',
        scriptureRefs: [
          { label: 'Esther 2:7–17', chapterId: 'EST-2', verseNumber: 17 },
          { label: 'Esther 4:13–14', chapterId: 'EST-4', verseNumber: 14 },
        ],
      },
      {
        id: 'est-2',
        beatNumber: 2,
        title: 'Three Days of Quiet Fasting & Prayer',
        narrative:
          'Royal law carried one terrifying shadow: anyone walking into the king’s inner throne hall without an official summons faced instant execution—unless the king happened to extend his golden scepter in mercy. Esther had not even been called before the king for thirty days.\n\nRather than rushing rashly on impulse, young Esther sent word back to Mordecai with quiet steel: “Go, gather together all the Jews who are present in Susa, and fast for me… My maidens and I will also fast the same way. Then I will go in to the king, which is against the law; and if I perish, I perish.” For three quiet candlelit days, silence and earnest prayer filled Susa’s homes and royal rooms.',
        imageUrl: '/images/stories/esther-2.webp',
        imageAlt: 'Queen Esther kneeling serenely in candlelit prayer and fasting alongside her companions',
        scriptureRefs: [
          { label: 'Esther 4:11', chapterId: 'EST-4', verseNumber: 11 },
          { label: 'Esther 4:15–17', chapterId: 'EST-4', verseNumber: 16 },
        ],
      },
      {
        id: 'est-3',
        beatNumber: 3,
        title: 'Stepping Into the Golden Throne Hall',
        narrative:
          'On the third morning, rising softly from prayer, Esther dressed in her finest royal plum-and-gold robes, lifted her chin, and walked steadily past tall carved palace pillars into the open doorway of the royal inner courtyard.\n\nEvery soldier’s breath caught as the young queen stepped completely unannounced straight into full view of the throne. Across sunlit stone floor tiles lay absolute danger—yet peace held her shoulders calm and upright.',
        imageUrl: '/images/stories/esther-3.webp',
        imageAlt: 'Queen Esther standing poised in royal robes at the sunlit entrance of the grand throne room',
        scriptureRefs: [
          { label: 'Esther 5:1', chapterId: 'EST-5', verseNumber: 1 },
        ],
      },
      {
        id: 'est-4',
        beatNumber: 4,
        title: 'The Extended Golden Scepter',
        narrative:
          'Seated high on his carved golden throne, King Xerxes looked down at the unexpected figure standing quietly in the archway—and hidden favor softened his heart immediately. Leaning forward with a warm expression, the king held out his long gleaming golden scepter directly toward bowing Esther.\n\nStepping safely forward to touch the scepter’s golden tip, Esther heard his generous question echo through the hall: “What would you like, Queen Esther? Even up to half the kingdom, it shall be given to you!” Quietly wise, she invited the king and Haman to an intimate dinner banquet that very evening.',
        imageUrl: '/images/stories/esther-4.webp',
        imageAlt: 'King Xerxes leaning forward from his throne extending his gleaming golden scepter toward bowing Esther',
        scriptureRefs: [
          { label: 'Esther 5:2–4', chapterId: 'EST-5', verseNumber: 2 },
        ],
      },
      {
        id: 'est-5',
        beatNumber: 5,
        title: 'Speaking Truth at the Royal Banquet',
        narrative:
          'That night—and again at a second warm oil-lamp banquet the next evening, after a sleepless night had already led the king to remember Mordecai’s past loyalty—the moment arrived. Again King Xerxes asked gently what burdened her heart.\n\nSteadying her voice by flickering table lamps, Esther spoke the fearless truth: “If I have found favor in your sight, O king, let my life be given me at my petition, and my people at my request—for we are sold to be destroyed!” Shocked, the king demanded, “Who has dared presume such a thing?” Turning calmly toward the trembling official beside them, Esther declared cleanly: “An adversary and an enemy—even this wicked Haman!”',
        imageUrl: '/images/stories/esther-5.webp',
        imageAlt: 'Warm evening royal banquet glowing with oil lamps as Esther speaks truth exposing Haman',
        scriptureRefs: [
          { label: 'Esther 7:1–4', chapterId: 'EST-7', verseNumber: 3 },
          { label: 'Esther 7:5–6', chapterId: 'EST-7', verseNumber: 6 },
        ],
      },
      {
        id: 'est-6',
        beatNumber: 6,
        title: 'Mourning Turned Into Bright Celebration',
        narrative:
          'Justice moved swiftly once the hidden plot stood in open light: wicked Haman’s scheme collapsed onto his own head, honorable Mordecai stepped into high service, and royal riders galloped out across every road carrying a new life-saving decree allowing Esther’s people to defend themselves safely.\n\nAcross Susa and every distant province, tears of terror transformed into morning light, joyful music, baskets of shared loaves, and gifts sent warmly to neighbors and the poor—remembered forever as the Feast of Purim.',
        imageUrl: '/images/stories/esther-6.webp',
        imageAlt: 'Joyful Susa courtyard celebration with families embracing, baskets of bread, and glowing lanterns',
        scriptureRefs: [
          { label: 'Esther 8:15–17', chapterId: 'EST-8', verseNumber: 16 },
          { label: 'Esther 9:22', chapterId: 'EST-9', verseNumber: 22 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Your quiet placement may be God’s strategic purpose',
        description:
          'Esther felt ordinary inside an intimidating palace until Mordecai reminded her: “Who knows if you arrived right where you are for such a time as this?”',
        anchorRef: { label: 'Esther 4:14', chapterId: 'EST-4', verseNumber: 14 },
      },
      {
        title: 'Prayer and patience strengthen brave action',
        description:
          'Before stepping into the throne room—and before exposing Haman—Esther prayed with friends and moved with thoughtful wisdom instead of panic.',
        anchorRef: { label: 'Esther 4:16', chapterId: 'EST-4', verseNumber: 16 },
      },
      {
        title: 'Real courage speaks up even when knees shake',
        description:
          'Courage didn’t mean Esther felt zero fear; it meant caring more about rescuing others than protecting her own quiet comfort.',
        anchorRef: { label: 'Esther 7:3–6', chapterId: 'EST-7', verseNumber: 3 },
      },
    ],
    reflectionPrompt:
      'Where has life placed you right now—in your family, neighborhood, or church—that might be your “for such a time as this”?',
  },
  {
    id: 'story-feeding-5000',
    slug: 'feeding-5000',
    title: 'Feeding the Five Thousand',
    subtitle: 'Little in Jesus’s Hands Becomes More Than Enough',
    testament: 'NT',
    category: 'Miracles of Jesus',
    scriptureRange: 'John 6:1–15',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/feeding-5000-2.webp',
    primaryChapterId: 'JHN-6',
    summary:
      'Facing thousands of hungry families far from any village bakery, the disciples saw an impossible shortage—until one young boy placed five simple barley loaves and two small fish right into Jesus’s thankful hands.',
    beats: [
      {
        id: 'f5k-1',
        beatNumber: 1,
        title: 'Hungry Crowds on a Green Galilean Hillside',
        narrative:
          'Word of Jesus’s gentle healing touch spread across every shore of Lake Galilee. Crossing over to a quiet grassy hillside opposite Capernaum to rest briefly with His tired disciples, Jesus looked up—and saw a massive multitude winding eagerly along the shore on foot, carrying sick loved ones and listening hungrily to every word.\n\nWarm spring wildflowers dotted the green slopes overlooking shimmering blue water while afternoon sunlight stretched long across the hills. Moved with shepherd love, Jesus healed the hurting and taught until evening drew near—five thousand men alone, plus mothers, grandparents, and children seated all around the grass.',
        imageUrl: '/images/stories/feeding-5000-1.webp',
        imageAlt: 'Crowds of families seated warmly across lush spring hillside grass overlooking Lake Galilee',
        scriptureRefs: [
          { label: 'John 6:1–5', chapterId: 'JHN-6', verseNumber: 5 },
          { label: 'Mark 6:34', chapterId: 'MRK-6', verseNumber: 34 },
        ],
      },
      {
        id: 'f5k-2',
        beatNumber: 2,
        title: 'Five Barley Loaves & Two Small Fish',
        narrative:
          'Worried by the growing shadows, Philip shook his head cleanly at Jesus’s question about buying supper: “Two hundred denarii worth of bread wouldn’t give even a small bite to each!” Then Andrew stepped softly through the grass bringing a shy young boy clutching a modest woven lunch basket.\n\n“There is a boy here,” Andrew whispered doubtfully, “who has five barley loaves and two small fish—but what are these among so many?” Barley bread was the humble lunch of working families, barely enough for one hungry child, yet the boy willingly placed every single crumb he owned into Jesus’s palm.',
        imageUrl: '/images/stories/feeding-5000-2.webp',
        imageAlt: 'Young boy offering his woven basket of five barley loaves and two small fish to Jesus',
        scriptureRefs: [
          { label: 'John 6:7–9', chapterId: 'JHN-6', verseNumber: 9 },
        ],
      },
      {
        id: 'f5k-3',
        beatNumber: 3,
        title: 'Giving Thanks Under Open Heaven',
        narrative:
          'Jesus never scoffed at how small the boy’s lunch looked. Asking the disciples to invite everyone to sit down comfortably in relaxed groups across the soft green meadow, Jesus took those five ordinary flatbreads and two dried fish right into His steady hands.\n\nLifting His calm eyes toward bright Galilean skies, He paused quietly and spoke a prayer of warm gratitude to His Father—thanking God not just after plenty arrived, but while only a child’s tiny lunch lay in His palms.',
        imageUrl: '/images/stories/feeding-5000-3.webp',
        imageAlt: 'Jesus standing amid the grassy meadow lifting simple bread loaves in thanksgiving toward heaven',
        scriptureRefs: [
          { label: 'John 6:10–11', chapterId: 'JHN-6', verseNumber: 11 },
        ],
      },
      {
        id: 'f5k-4',
        beatNumber: 4,
        title: 'Passing Overflowing Baskets Row by Row',
        narrative:
          'Breaking the bread calmly piece by piece, Jesus began filling empty woven baskets held by astonished disciples. Walking slowly up and down orderly rows of sitting families, Peter, Andrew, and the rest kept reaching down to hand out warm golden slices of bread and tender fish—and somehow the basket never emptied.\n\nNo matter how many outstretched hands they served along the hillside paths, fresh loaves rested warm inside the wicker weave, multiplying quietly each time they passed it onward.',
        imageUrl: '/images/stories/feeding-5000-4.webp',
        imageAlt: 'Disciples distributing overflowing woven baskets of bread through rows of seated families',
        scriptureRefs: [
          { label: 'John 6:11', chapterId: 'JHN-6', verseNumber: 11 },
          { label: 'Luke 9:16–17', chapterId: 'LUK-9', verseNumber: 16 },
        ],
      },
      {
        id: 'f5k-5',
        beatNumber: 5,
        title: 'Everyone Ate Until Satisfied',
        narrative:
          'Not a stingy sample or rushed nibble—Gospel writers emphasize that thousands ate freely “as much as they wanted” until every child’s laughter rang clear and every weary grandparent sat contented under evening sky.\n\nAcross the quiet hillside, neighbors shared bread with neighbors who had arrived strangers hours earlier, tasting not merely warm barley loaves but tangible proof that God notices tired bodies as tenderly as hungry souls.',
        imageUrl: '/images/stories/feeding-5000-5.webp',
        imageAlt: 'Smiling grandparents, parents, and children sharing bread happily on sunny lakeside grass',
        scriptureRefs: [
          { label: 'John 6:11–12', chapterId: 'JHN-6', verseNumber: 11 },
          { label: 'Mark 6:42', chapterId: 'MRK-6', verseNumber: 42 },
        ],
      },
      {
        id: 'f5k-6',
        beatNumber: 6,
        title: 'Twelve Baskets Remaining at Dusk',
        narrative:
          'When quiet sunset gold shimmered across Lake Galilee and every person was completely full, Jesus gave one more thoughtful instruction: “Gather up the broken pieces which remain, that nothing be lost.”\n\nWalking back through the soft twilight meadow, each of the twelve surprised disciples filled an entire tall wicker basket brim-full with leftover bread—more surplus left afterward than the boy had held before Jesus gave thanks!',
        imageUrl: '/images/stories/feeding-5000-6.webp',
        imageAlt: 'At golden sunset beside Lake Galilee, disciples gathering overflowing wicker baskets of leftover loaves',
        scriptureRefs: [
          { label: 'John 6:12–13', chapterId: 'JHN-6', verseNumber: 13 },
          { label: 'John 6:14', chapterId: 'JHN-6', verseNumber: 14 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'God multiplies what we place in His hands—not what we hide',
        description:
          'One boy’s small lunch looked laughable compared to five thousand hungry people, yet giving it openly allowed Jesus to feed an entire hillside.',
        anchorRef: { label: 'John 6:9–11', chapterId: 'JHN-6', verseNumber: 9 },
      },
      {
        title: 'Gratitude before plenty invites God’s provision',
        description:
          'Jesus gave sincere thanks while holding just five small loaves—teaching us to honor what God has already given before asking for more.',
        anchorRef: { label: 'John 6:11', chapterId: 'JHN-6', verseNumber: 11 },
      },
      {
        title: 'Jesus cares deeply about practical everyday needs',
        description:
          'Feeding hungry families at sunset reminds us that no burden is “too ordinary” to bring warmly to God.',
        anchorRef: { label: 'John 6:12–13', chapterId: 'JHN-6', verseNumber: 13 },
      },
    ],
    reflectionPrompt:
      'What small “five loaves and two fish” resource, skill, or encouragement could you offer God today trusting Him to multiply it?',
  },
  {
    id: 'story-parable-sower',
    slug: 'parable-sower',
    title: 'The Parable of the Sower',
    subtitle: 'Preparing a Soft, Welcoming Heart for God’s Word',
    testament: 'NT',
    category: 'Parables of Jesus',
    scriptureRange: 'Matthew 13:1–23',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/sower-6.webp',
    primaryChapterId: 'MAT-13',
    summary:
      'Sitting in a quiet wooden fishing boat just off the shore of Lake Galilee, Jesus pointed up at farmers scattering seed across four very different kinds of soil—inviting every listener to ask how deeply they receive God’s Word.',
    beats: [
      {
        id: 'sow-1',
        beatNumber: 1,
        title: 'Teaching From a Boat Beside Galilee',
        narrative:
          'Crowds pressed eagerly down along the smooth pebbles of Capernaum’s shoreline just to hear Jesus’s gentle voice. Stepping onto the weathered planks of a simple wooden fishing boat pushed a few yards out onto calm turquoise water, Jesus sat down comfortably—letting the natural harbor breeze carry His words clearly across the whole listening beach.\n\nRather than opening with abstract philosophy, Jesus invited everyone sitting along the shore to lift their eyes toward the sunlit terraced farming slopes right behind them and watch a familiar everyday picture unfold: “Behold, a farmer went out to sow.”',
        imageUrl: '/images/stories/sower-1.webp',
        imageAlt: 'Jesus seated in a wooden boat gently off Lake Galilee shore teaching listening crowds',
        scriptureRefs: [
          { label: 'Matthew 13:1–3', chapterId: 'MAT-13', verseNumber: 2 },
        ],
      },
      {
        id: 'sow-2',
        beatNumber: 2,
        title: 'Scattering Good Seed Generously',
        narrative:
          'Carrying a heavy cloth apron folded neatly against his hip, the Galilean farmer walked steady furrowed rows across sunlit hills—sweeping wide handfuls of good golden grain cleanly left and right across the hillside.\n\nNotice how generous the farmer was: he didn’t hoard seed only for picture-perfect corners of soil. Good seed—which Jesus later explained is the message of God’s kingdom—flew evenly across worn trails, hidden stones, wild edges, and rich dark furrows alike.',
        imageUrl: '/images/stories/sower-2.webp',
        imageAlt: 'Galilean farmer striding across sunlit terraced hills scattering golden seeds widely',
        scriptureRefs: [
          { label: 'Matthew 13:3–4', chapterId: 'MAT-13', verseNumber: 3 },
          { label: 'Matthew 13:18–19', chapterId: 'MAT-13', verseNumber: 18 },
        ],
      },
      {
        id: 'sow-3',
        beatNumber: 3,
        title: 'Hard Path Seed Snatched by Birds',
        narrative:
          'Some flying seeds drifted cleanly onto the hard-packed walking path cutting along the border of the field—soil stamped concrete-flat by countless passing sandals and donkey hooves. Lying uncovered atop dry crusted dust, not a single kernel could slip down below the surface.\n\nBefore evening settled over the valley, quick flocks of fluttering sparrows swooped down and pecked every last seed away. So it happens, Jesus gently explained, when someone hears God’s truth without letting it sink past distracted, closed thoughts.',
        imageUrl: '/images/stories/sower-3.webp',
        imageAlt: 'Small brown sparrows pecking scattered seeds resting on a packed stony dirt footpath',
        scriptureRefs: [
          { label: 'Matthew 13:4', chapterId: 'MAT-13', verseNumber: 4 },
          { label: 'Matthew 13:19', chapterId: 'MAT-13', verseNumber: 19 },
        ],
      },
      {
        id: 'sow-4',
        beatNumber: 4,
        title: 'Quick Sprouts on Shallow Rock',
        narrative:
          'Other handfuls landed across thin dust hiding solid flat bedrock just an inch beneath. At first that soil looked promising—warm surface earth made frail little green shoots pop straight upward overnight! Neighbors might even smile at how fast those stems shot toward sky.\n\nYet beneath the thin topsoil, tangled roots struck immovable stone and could go no deeper for moisture. When blinding noon sun blazed down relentlessly across the limestone hills, shallow leaves curled crisp and withered—picturing joy that flashes brightly at first, yet wilts when quiet endurance or hard times test roots.',
        imageUrl: '/images/stories/sower-4.webp',
        imageAlt: 'Frail young wheat shoots wilting beneath intense midday sun on shallow rocky ground',
        scriptureRefs: [
          { label: 'Matthew 13:5–6', chapterId: 'MAT-13', verseNumber: 5 },
          { label: 'Matthew 13:20–21', chapterId: 'MAT-13', verseNumber: 21 },
        ],
      },
      {
        id: 'sow-5',
        beatNumber: 5,
        title: 'Young Wheat Crowded by Thorns',
        narrative:
          'Still other seeds settled cleanly into loose field dirt along the wild border—only to share dark underground moisture with hidden roots of tough prickly briers and crowding weeds. Day after day, tender green wheat stalks and spiky briars raced upward side by side.\n\nBefore harvest ever formed in the ear, fierce tangled thorns stole sunlight, choked water, and crowded life right out of the wheat. With tender honesty, Jesus named those silent weeds for His listeners: “the worry of this age, and the deceitfulness of wealth” quietly squeezing out room for God.',
        imageUrl: '/images/stories/sower-5.webp',
        imageAlt: 'Young green wheat stalks tangled densely among prickly wild brier bushes and weeds',
        scriptureRefs: [
          { label: 'Matthew 13:7', chapterId: 'MAT-13', verseNumber: 7 },
          { label: 'Matthew 13:22', chapterId: 'MAT-13', verseNumber: 22 },
        ],
      },
      {
        id: 'sow-6',
        beatNumber: 6,
        title: 'Good Soil Yielding a Golden Harvest',
        narrative:
          '“And others fell on the good soil,” Jesus smiled warmly across the boat’s edge—soft, broken-open, stone-cleared dark earth ready to drink morning rain deeply in. There those tiny golden kernels anchored strong unseen roots downward while rising steadily through cool wind and warm rain alike.\n\nBy sunset harvest, entire hillsides swayed heavy with tall ripe golden heads of wheat—yielding thirty, sixty, even a hundred times more grain than the farmer ever scattered! Finishing His story, Jesus gently invited every listener on the shore: “He who has ears to hear, let him hear.”',
        imageUrl: '/images/stories/sower-6.webp',
        imageAlt: 'Lush golden hillside bursting with ripe heavy-headed wheat in rich dark soil at sunset',
        scriptureRefs: [
          { label: 'Matthew 13:8–9', chapterId: 'MAT-13', verseNumber: 8 },
          { label: 'Matthew 13:23', chapterId: 'MAT-13', verseNumber: 23 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'How we listen shapes what grows in our lives',
        description:
          'All four grounds received the exact same good seed—the difference was whether hearts slowed down long enough to understand and welcome it deeply.',
        anchorRef: { label: 'Matthew 13:18–23', chapterId: 'MAT-13', verseNumber: 23 },
      },
      {
        title: 'Quiet roots matter more than quick flashy beginnings',
        description:
          'Shallow soil sprouted fastest yet withered first. Patient unseen time in prayer and Scripture builds deep roots that outlast noon heat.',
        anchorRef: { label: 'Matthew 13:20–21', chapterId: 'MAT-13', verseNumber: 21 },
      },
      {
        title: 'Pull daily “weeds” of worry before they crowd out peace',
        description:
          'Busy anxiety doesn’t look dangerous at first, yet left untended it quietly steals warmth and joy—invite God gently into today’s cares.',
        anchorRef: { label: 'Matthew 13:22', chapterId: 'MAT-13', verseNumber: 22 },
      },
    ],
    reflectionPrompt:
      'Which soil feels closest to your heart this week—and what small stone or “worry weed” could you gently ask God to clear away?',
  },
  {
    id: 'story-joseph-coat',
    slug: 'joseph-coat',
    title: 'Joseph & His Coat of Many Colors',
    subtitle: 'What Others Meant for Harm, God Used for Good',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: 'Genesis 37–45',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/joseph-1.webp',
    primaryChapterId: 'GEN-37',
    summary:
      'Betrayed and sold far from home by his own jealous brothers, young Joseph endured slavery and an unjust prison cell in Egypt—never imagining God was shaping him to save kingdoms and embrace his family with forgiveness.',
    beats: [
      {
        id: 'jos-1',
        beatNumber: 1,
        title: 'A Vibrant Coat Under Olive Trees',
        narrative:
          'Aging father Jacob loved all twelve of his sons, yet his gentle seventeen-year-old son Joseph—born to his beloved late wife Rachel—held a tender place close to Jacob’s heart. To mark his affection, Jacob wove an extraordinary gift: a long richly striped tunic gleaming with cobalt blue, saffron gold, crimson, and emerald bands reaching down to Joseph’s wrists and ankles.\n\nProudly wearing his colorful coat beneath dusty Canaan olive trees, young Joseph also began dreaming vivid night visions from God—sheaves of grain bowing round one upright stalk, even sun, moon, and eleven stars bowing low. Innocently sharing those dreams aloud at breakfast, Joseph didn’t notice the quiet bitterness growing around him.',
        imageUrl: '/images/stories/joseph-1.webp',
        imageAlt: 'Young Joseph wearing a vibrantly striped colorful coat beside proud father Jacob under olive trees',
        scriptureRefs: [
          { label: 'Genesis 37:3–4', chapterId: 'GEN-37', verseNumber: 3 },
          { label: 'Genesis 37:5–9', chapterId: 'GEN-37', verseNumber: 7 },
        ],
      },
      {
        id: 'jos-2',
        beatNumber: 2,
        title: 'Sold Far From Home by Jealous Brothers',
        narrative:
          'Seeing their younger brother cross the sunny grass hills of Dothan wearing that brightly woven tunic, Joseph’s older brothers muttered coldly from beside their grazing flocks: “Look, this dreamer comes! Let’s see what becomes of his dreams!”\n\nStripping away his precious coat, they tossed frightened Joseph down into an empty limestone pit, and soon sold him for twenty pieces of silver to passing spice merchants bound straight across the desert toward Egypt. Dipping his torn tunic in goat’s blood, they broke old Jacob’s heart—while chained young Joseph stared backward across unfamiliar desert dunes wondering if God had forgotten him.',
        imageUrl: '/images/stories/joseph-2.webp',
        imageAlt: 'Jealous shepherd brothers watching Joseph walk across Canaan hills in his colorful coat',
        scriptureRefs: [
          { label: 'Genesis 37:18–24', chapterId: 'GEN-37', verseNumber: 19 },
          { label: 'Genesis 37:26–28', chapterId: 'GEN-37', verseNumber: 28 },
        ],
      },
      {
        id: 'jos-3',
        beatNumber: 3,
        title: 'From Lonely Prison to Pharaoh’s Throne Room',
        narrative:
          'Years tested Joseph harshly in Egypt. Serving faithfully even as an enslaved household steward, he was falsely accused and locked away for years inside a royal dungeon. Yet Scripture repeats one golden refrain through every dark chapter: “Yahweh was with Joseph, and showed kindness to him.”\n\nWhen troubled Pharaoh woke from puzzling dreams of seven sleek cows devoured by seven bony cattle along the Nile, nobody in Egypt could explain them—until an escaped cupbearer remembered Joseph! Brought neatly shaved and dressed in clean white Egyptian linen before grand sandstone palace columns, Joseph pointed credit cleanly away from himself: “It isn’t in me. God will give Pharaoh an answer of peace.”',
        imageUrl: '/images/stories/joseph-3.webp',
        imageAlt: 'Clean-shaven governor Joseph inside grand sunlit Egyptian palace hall interpreting Pharaoh dreams',
        scriptureRefs: [
          { label: 'Genesis 39:21–23', chapterId: 'GEN-39', verseNumber: 21 },
          { label: 'Genesis 41:14–16', chapterId: 'GEN-41', verseNumber: 16 },
          { label: 'Genesis 41:25–32', chapterId: 'GEN-41', verseNumber: 25 },
        ],
      },
      {
        id: 'jos-4',
        beatNumber: 4,
        title: 'Storehouses Overflowing Against the Famine',
        narrative:
          'Warning Pharaoh that seven bountiful harvests would soon turn into seven blistering years of regional famine, Joseph offered a steady plan—and astonished Pharaoh placed his own golden signet ring onto Joseph’s finger, lifting him straight from prisoner to second-in-command across all Egypt!\n\nTrue to God’s word, abundant barley and golden wheat soon poured endlessly into Egypt. Traveling across sunlit fields, Joseph supervised workers filling towering sandstone storehouses with grain until tallies couldn’t even keep count—storing mercy long before dry winds began.',
        imageUrl: '/images/stories/joseph-4.webp',
        imageAlt: 'Workers filling sunlit sandstone storehouses in Egypt with sacks of golden grain',
        scriptureRefs: [
          { label: 'Genesis 41:38–42', chapterId: 'GEN-41', verseNumber: 41 },
          { label: 'Genesis 41:47–49', chapterId: 'GEN-41', verseNumber: 49 },
        ],
      },
      {
        id: 'jos-5',
        beatNumber: 5,
        title: 'Ten Bowed Heads & Secret Tears',
        narrative:
          'Soon severe famine parched Canaan too, emptying family bread bowls back home. Desperate, Jacob sent Joseph’s ten older brothers walking south down dusty Egyptian roads to buy food. Entering the echoing stone audience hall holding empty burlap sacks, they dropped low with faces touching stone floor before Egypt’s stately governor.\n\nIn a heartbeat, Joseph recognized the exact brothers who had thrown him into the pit—while they saw only a grand Egyptian lord speaking through a translator! Slipping quietly into another room, powerful governor Joseph buried his face in his hands and wept—testing their hearts gently to see if cruelty had finally changed into love.',
        imageUrl: '/images/stories/joseph-5.webp',
        imageAlt: 'Humbled Hebrew brothers bowing with empty sacks before Egyptian governor Joseph on stone dais',
        scriptureRefs: [
          { label: 'Genesis 42:6–9', chapterId: 'GEN-42', verseNumber: 6 },
          { label: 'Genesis 42:24', chapterId: 'GEN-42', verseNumber: 24 },
          { label: 'Genesis 44:33–34', chapterId: 'GEN-44', verseNumber: 33 },
        ],
      },
      {
        id: 'jos-6',
        beatNumber: 6,
        title: '“I Am Joseph—Fear Not!”',
        narrative:
          'Seeing Judah step forward bravely offering himself as a slave just to keep youngest brother Benjamin safe for old Jacob, Joseph could hold back tears no longer. Sending every palace attendant outside, he cried out in their childhood Hebrew tongue: “I am Joseph! Does my father still live?” Terrified silence froze the room until Joseph stepped close with open arms.\n\nThrowing himself around their trembling shoulders, he kissed every one of them with overflowing mercy: “Now don’t be grieved, nor angry with yourselves that you sold me here, for God sent me before you to preserve life!” Years later he summed up his whole journey cleanly: “As for you, you meant evil against me; but God meant it for good.”',
        imageUrl: '/images/stories/joseph-6.webp',
        imageAlt: 'Tearful joyful reunion hug as Joseph embraces his forgiven brothers beneath Egyptian palace arches',
        scriptureRefs: [
          { label: 'Genesis 45:1–5', chapterId: 'GEN-45', verseNumber: 5 },
          { label: 'Genesis 45:14–15', chapterId: 'GEN-45', verseNumber: 15 },
          { label: 'Genesis 50:20', chapterId: 'GEN-50', verseNumber: 20 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Hidden valleys aren’t wasted years when God walks beside you',
        description:
          'Every painful detour—slavery, false accusation, forgotten prison—prepared Joseph quietly to shepherd nations when the time arrived.',
        anchorRef: { label: 'Genesis 39:21', chapterId: 'GEN-39', verseNumber: 21 },
      },
      {
        title: 'Work faithfully right where you are, seen or unseen',
        description:
          'Joseph didn’t wait for a crown to serve with integrity; he gave his very best in Potiphar’s house and the prison cell alike.',
        anchorRef: { label: 'Genesis 41:38–41', chapterId: 'GEN-41', verseNumber: 41 },
      },
      {
        title: 'Forgiveness frees your heart to see God’s larger tapestry',
        description:
          'Instead of hoarding revenge when power finally came, Joseph released bitterness—discovering God had woven hurt into healing for thousands.',
        anchorRef: { label: 'Genesis 50:20', chapterId: 'GEN-50', verseNumber: 20 },
      },
    ],
    reflectionPrompt:
      'Looking back across a hard season from years ago, can you glimpse any quiet good God wove out of it later on?',
  },
  {
    id: 'story-ruth-naomi',
    slug: 'ruth-naomi',
    title: 'Ruth & Naomi',
    subtitle: 'Loyal Love That Turns Emptiness Into Harvest',
    testament: 'OT',
    category: 'Old Testament Classics',
    scriptureRange: 'Ruth 1–4',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/ruth-2.webp',
    primaryChapterId: 'RUT-1',
    summary:
      'Left widowed and empty-handed far from home, a faithful young Moabite woman refused to let her grieving mother-in-law walk alone—discovering quiet dignity, kindness from Boaz, and a place right inside the family line of King David and Jesus.',
    beats: [
      {
        id: 'rut-1',
        beatNumber: 1,
        title: '“Where You Go, I Will Go”',
        narrative:
          'Seeking bread during a fierce Bethlehem famine, Naomi and her husband had moved east into hilly Moab—only to lose her husband and both grown sons within ten aching years. Hearing at last that Yahweh had blessed Bethlehem with fresh grain harvests, gray-haired Naomi packed her tiny bundle and started the lonely climb homeward.\n\nStanding along the dusty mountain border, Naomi gently urged her two young widowed daughters-in-law to stay safely with their own mothers. Orpah wept, kissed Naomi goodbye, and turned back—but loving Ruth threw her arms tightly round Naomi and spoke one of the purest vows in human history: “Don’t urge me to leave you! For wherever you go, I will go; and wherever you stay, I will stay. Your people shall be my people, and your God my God.”',
        imageUrl: '/images/stories/ruth-1.webp',
        imageAlt: 'Faithful Ruth embracing gray-haired Naomi along dusty stone trail out of Moab hills',
        scriptureRefs: [
          { label: 'Ruth 1:6–9', chapterId: 'RUT-1', verseNumber: 8 },
          { label: 'Ruth 1:14–17', chapterId: 'RUT-1', verseNumber: 16 },
        ],
      },
      {
        id: 'rut-2',
        beatNumber: 2,
        title: 'Gleaning Humble Ears of Barley',
        narrative:
          'Two tired widows walked quietly into sun-bleached Bethlehem gates just as golden barley harvest began. Empty cupboards left no time for pride; asking Naomi’s gentle blessing early next morning, Ruth tied a linen kerchief around her hair and walked down to the open hillside fields.\n\nFollowing God’s compassionate ancient law—commanding farmers never to strip field corners clean so widows and travelers could glean dropped grain—humble Ruth stooped patiently behind reaping workers row after row under morning sky, picking up single fallen stalks to keep bread on Naomi’s table.',
        imageUrl: '/images/stories/ruth-2.webp',
        imageAlt: 'Ruth gathering fallen golden barley stalks across sunlit hillside fields near Bethlehem',
        scriptureRefs: [
          { label: 'Ruth 1:22', chapterId: 'RUT-1', verseNumber: 22 },
          { label: 'Ruth 2:2–3', chapterId: 'RUT-2', verseNumber: 2 },
          { label: 'Ruth 2:7', chapterId: 'RUT-2', verseNumber: 7 },
        ],
      },
      {
        id: 'rut-3',
        beatNumber: 3,
        title: 'Generous Kindness of Boaz',
        narrative:
          'Unknown to Ruth, that sunlit slope belonged to Boaz—a generous, honorable kinsman of Naomi’s late husband. Arriving from town with warm greetings for his workers (“Yahweh be with you!”), Boaz instantly noticed the hardworking outsider quietly gleaning at the edge and asked his foreman who she was.\n\nTouched to hear how faithfully she had cared for grieving Naomi, Boaz walked over calmly, offered cool spring water, shared roasted grain beside his reapers, and whispered to his men to quietly drop extra full barley bundles right across her path—praying softly: “May a full reward be given you from Yahweh, under whose wings you have come to take refuge.”',
        imageUrl: '/images/stories/ruth-3.webp',
        imageAlt: 'Warm-hearted landowner Boaz beside golden barley sheaves instructing workers to care for Ruth',
        scriptureRefs: [
          { label: 'Ruth 2:4–12', chapterId: 'RUT-2', verseNumber: 12 },
          { label: 'Ruth 2:14–17', chapterId: 'RUT-2', verseNumber: 16 },
        ],
      },
      {
        id: 'rut-4',
        beatNumber: 4,
        title: 'Quiet Hope Beneath Starry Harvest Skies',
        narrative:
          'When Ruth carried home a massive heap of beaten barley—and told Naomi she had worked beside kindly Boaz—old Naomi’s eyes lit with sudden hope: “He is our close kinsman-redeemer!” Someone strong enough inside their extended family to protect their home and carry forward their family name.\n\nAt the close of harvest, under clear starry evening skies across Bethlehem’s breezy stone threshing floor, Ruth respectfully approached honorable Boaz seeking protection and redemption. Moved by her gentle integrity rather than selfish ambition, Boaz spread his mantle gently in promise: “Don’t be afraid, my daughter. All the city knows you are a worthy woman!”',
        imageUrl: '/images/stories/ruth-4.webp',
        imageAlt: 'Starry twilight over stone Bethlehem threshing courtyard piled warmly with golden wheat sheaves',
        scriptureRefs: [
          { label: 'Ruth 2:20', chapterId: 'RUT-2', verseNumber: 20 },
          { label: 'Ruth 3:8–11', chapterId: 'RUT-3', verseNumber: 11 },
        ],
      },
      {
        id: 'rut-5',
        beatNumber: 5,
        title: 'Redeemed & Blessed at the Town Gate',
        narrative:
          'Boaz wasted no time on empty promises. Walking straight down to Bethlehem’s sunny limestone gate at daybreak, he assembled ten respected village elders under olive shade and settled every legal family obligation cleanly and publicly in open daylight.\n\nStepping forward joyfully as redeemer, Boaz pledged openly to care for Naomi’s land and marry Ruth. Lifting their weathered hands in blessing, every elder and townsman smiled across the sunny archway, praying peace and fruitfulness over their new household.',
        imageUrl: '/images/stories/ruth-5.webp',
        imageAlt: 'Bethlehem limestone village gate where smiling elders bless joyful Boaz and Ruth',
        scriptureRefs: [
          { label: 'Ruth 4:1–2', chapterId: 'RUT-4', verseNumber: 1 },
          { label: 'Ruth 4:9–12', chapterId: 'RUT-4', verseNumber: 10 },
        ],
      },
      {
        id: 'rut-6',
        beatNumber: 6,
        title: 'A Full Arms Harvest & Royal Lineage',
        narrative:
          'Not long afterward, laughter echoed warmly inside Naomi’s sunlit Bethlehem courtyard. Laying newborn baby Obed tenderly into grieving-turned-radiant grandmother Naomi’s lap, smiling village women whispered joy: “Blessed be Yahweh, who hasn’t left you without a redeemer! Your daughter-in-law, who loves you, is better to you than seven sons!”\n\nLittle did any neighbor cradling sleepy baby Obed know how far their quiet kindness would echo: Obed became the grandfather of King David—and generations later, right inside that very town of Bethlehem, Jesus Christ Himself was born into their grateful family tree.',
        imageUrl: '/images/stories/ruth-6.webp',
        imageAlt: 'Radiant grandmother Naomi cradling baby Obed beside loving Ruth and Boaz in sunny Bethlehem home',
        scriptureRefs: [
          { label: 'Ruth 4:13–17', chapterId: 'RUT-4', verseNumber: 15 },
          { label: 'Ruth 4:18–22', chapterId: 'RUT-4', verseNumber: 17 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Steadfast loyalty changes lives more than grand speeches',
        description:
          'Ruth held no wealth or influence—just faithful love refusing to desert a hurting friend when life grew bare.',
        anchorRef: { label: 'Ruth 1:16–17', chapterId: 'RUT-1', verseNumber: 16 },
      },
      {
        title: 'No act of quiet generosity goes unnoticed by God',
        description:
          'Leaving extra stalks for someone gleaning silently in the corners looks small on paper, yet God wove Boaz’s kindness straight into Israel’s royal story.',
        anchorRef: { label: 'Ruth 2:12', chapterId: 'RUT-2', verseNumber: 12 },
      },
      {
        title: 'Emptiness is never the final word with God',
        description:
          'Naomi returned to Bethlehem calling herself “bitter,” yet by the closing page God gently filled her empty arms with joy.',
        anchorRef: { label: 'Ruth 4:14–15', chapterId: 'RUT-4', verseNumber: 14 },
      },
    ],
    reflectionPrompt:
      'Who in your life is walking through a bare season right now who simply needs your faithful companionship?',
  },
  {
    id: 'story-walks-water',
    slug: 'walks-water',
    title: 'Jesus Walks on Water',
    subtitle: 'Keep Your Eyes on Jesus When Waves Rise',
    testament: 'NT',
    category: 'Miracles of Jesus',
    scriptureRange: 'Matthew 14:22–33',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/walks-water-2.webp',
    primaryChapterId: 'MAT-14',
    summary:
      'Caught hours from shore in a howling midnight gale across Lake Galilee, twelve exhausted disciples saw Jesus striding calmly toward them atop churning waves—inviting brave Peter to step outside the boat onto impossible grace.',
    beats: [
      {
        id: 'ww-1',
        beatNumber: 1,
        title: 'Fighting Headwinds in the Middle of Night',
        narrative:
          'Immediately after feeding five thousand hungry families on the green hillside, Jesus urged His tired disciples to climb into their wooden fishing boat and cross Lake Galilee ahead of Him while He slipped quietly up a mountain ridge alone to pray beneath evening stars.\n\nHours past midnight, far from either dark shoreline, furious mountain gusts slammed straight down across the lake. Foaming slate waves battered the creaking wooden bow over and over while soaked, aching fishermen strained every muscle on wooden oars—fighting against fierce headwinds mile after endless mile until nearly four in the morning.',
        imageUrl: '/images/stories/walks-water-1.webp',
        imageAlt: 'Wooden fishing boat pitching steeply atop stormy dark Lake Galilee waves at midnight',
        scriptureRefs: [
          { label: 'Matthew 14:22–24', chapterId: 'MAT-14', verseNumber: 24 },
        ],
      },
      {
        id: 'ww-2',
        beatNumber: 2,
        title: 'A Serene Presence Across Churning Waves',
        narrative:
          'In the dim fourth watch before dawn, tired eyes squinting through stinging wind-spray froze in sudden astonishment. Moving steadily across rolling valleys of dark turquoise water stood a calm, upright human figure striding forward as peacefully as if walking across flat stone courtyard tiles!\n\n“It’s a ghost!” panicked sailors shouted across the howling spray. Instantly above wind and crashing surf rang a warm, unmistakable, grounding voice they loved: “Cheer up! It is I! Don’t be afraid.” Even in the darkest hour of storm, Jesus had never taken His eyes off His friends’ boat.',
        imageUrl: '/images/stories/walks-water-2.webp',
        imageAlt: 'Serene Jesus in cream and indigo linen robes striding calmly across dark misty Galilee waves',
        scriptureRefs: [
          { label: 'Matthew 14:25–27', chapterId: 'MAT-14', verseNumber: 27 },
        ],
      },
      {
        id: 'ww-3',
        beatNumber: 3,
        title: '“Lord, Command Me to Come!”',
        narrative:
          'Hearing Jesus’s dear voice over storm winds, impetuous Peter leaned eagerly over the low wet boat rail. Not wanting to stay safely anchored while his Master stood out on the sea, Peter cried back through dark wind: “Lord, if it is You, command me to come to You on the waters!”\n\nSmiling gently across rolling swells, Jesus spoke one welcoming word: “Come.” Holding tight to that invitation, brave Peter swung one sandal over the wooden gunwale, planted his foot straight down onto liquid turquoise lake water—and walked! Step after astonishing step, solid faith carried an ordinary fisherman right across open water toward his Lord.',
        imageUrl: '/images/stories/walks-water-3.webp',
        imageAlt: 'Courageous fisherman Peter stepping over low wooden boat rail onto moonlit lake ripples reaching toward Jesus',
        scriptureRefs: [
          { label: 'Matthew 14:28–29', chapterId: 'MAT-14', verseNumber: 29 },
        ],
      },
      {
        id: 'ww-4',
        beatNumber: 4,
        title: 'When Fear Looks Away From Jesus',
        narrative:
          'Halfway between creaking oak planks and calm Jesus, a howling side gust slapped cold spray cleanly into Peter’s face. Startled, Peter dropped his gaze away from Jesus’s steady eyes to stare instead at roaring whitecaps swirling beneath his sandals.\n\nInstantly fear flooded where trust had been. Feeling solid buoyancy slip beneath his weight, Peter dropped knee-deep into cold churning lake water—yet even while sinking, his heart knew the one shortest prayer in Scripture: “Lord, save me!”',
        imageUrl: '/images/stories/walks-water-4.webp',
        imageAlt: 'Foaming splash rising around Peter sinking ankle-deep into choppy waves looking down in fear',
        scriptureRefs: [
          { label: 'Matthew 14:30', chapterId: 'MAT-14', verseNumber: 30 },
        ],
      },
      {
        id: 'ww-5',
        beatNumber: 5,
        title: 'Immediately Held by an Outstretched Hand',
        narrative:
          'Matthew records no lecture first and no hesitation: “Immediately Jesus stretched out His hand, took hold of him.” Before another wave could pull bruised fisherman down, Jesus’s warm grip closed firmly around Peter’s wrist and lifted him right back above the dark swells.\n\n“You of little faith,” Jesus murmured tenderly—not scolding him for stepping out of the boat, only wondering gently: “why did you doubt?” Hand safely inside Jesus’s hand, even faltering steps walked together back to safety.',
        imageUrl: '/images/stories/walks-water-5.webp',
        imageAlt: 'Loving Jesus reaching swiftly across shimmering waves gripping Peter securely by the wrist',
        scriptureRefs: [
          { label: 'Matthew 14:31', chapterId: 'MAT-14', verseNumber: 31 },
        ],
      },
      {
        id: 'ww-6',
        beatNumber: 6,
        title: 'Wind Dies Down & Hearts Worship',
        narrative:
          'The very moment Jesus and soaked, relieved Peter stepped together back over the wooden side rail into the boat, howling midnight wind dropped dead silent. Churning swells smoothed cleanly into rosy morning glass reflecting waking Galilean hills.\n\nAstonished beyond words—still wiping salty hair from their foreheads—every disciple dropped quietly to his knees along wet wooden deck boards before Him, whispering in awe: “Truly, You are the Son of God!”',
        imageUrl: '/images/stories/walks-water-6.webp',
        imageAlt: 'Glassy rosy sunrise calm on Lake Galilee as amazed disciples sit safely inside wooden boat',
        scriptureRefs: [
          { label: 'Matthew 14:32–33', chapterId: 'MAT-14', verseNumber: 33 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Obedience doesn’t promise smooth waters—only Jesus’s nearness',
        description:
          'Notice Jesus Himself sent the disciples into the boat that evening. Facing tough headwinds doesn’t mean God forgot you; He sees every oar stroke.',
        anchorRef: { label: 'Matthew 14:22–25', chapterId: 'MAT-14', verseNumber: 24 },
      },
      {
        title: 'What we fix our eyes on grows larger inside us',
        description:
          'As long as Peter looked at Jesus, waves stayed beneath his feet; the second he measured the roaring wind instead, fear pulled him down.',
        anchorRef: { label: 'Matthew 14:30', chapterId: 'MAT-14', verseNumber: 30 },
      },
      {
        title: 'Three honest words—“Lord, save me!”—always reach Jesus in time',
        description:
          'Even when faith wobbles halfway across, Jesus doesn’t wait for polished speeches—He catches sinking hands immediately.',
        anchorRef: { label: 'Matthew 14:31', chapterId: 'MAT-14', verseNumber: 31 },
      },
    ],
    reflectionPrompt:
      'Right now, are your eyes fixed mostly on the size of the waves around you—or on Jesus walking toward you?',
  },
  {
    id: 'story-lost-sheep',
    slug: 'lost-sheep',
    title: 'The Lost Sheep & the Good Shepherd',
    subtitle: 'Every Single One Matters Enough to Search For',
    testament: 'NT',
    category: 'Parables of Jesus',
    scriptureRange: 'Luke 15:1–7',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/lost-sheep-4.webp',
    primaryChapterId: 'LUK-15',
    summary:
      'Surrounded by neighbors complaining that Jesus cared too warmly for wandering outsiders, Jesus told the simple story of a shepherd who couldn’t rest until the one missing lamb out of a hundred was lifted safely home.',
    beats: [
      {
        id: 'ls-1',
        beatNumber: 1,
        title: 'Ninety-Nine Safe Upon Green Hills',
        narrative:
          'When grumbling religious leaders frowned because Jesus welcomed weary outsiders closely beside Him, Jesus asked a question every Galilean villager understood instantly: “Which of you men, having one hundred sheep and losing one of them, wouldn’t leave the ninety-nine in the pasture and go after the one that is lost until he finds it?”\n\nAll afternoon under warm golden Judean sunlight, the kind shepherd had led his hundred gentle sheep from lush grassy wildflower hills to cool rocky springs—watching attentively over sturdy ewes and bouncing white lambs alike while leaning softly on his wooden crook.',
        imageUrl: '/images/stories/lost-sheep-1.webp',
        imageAlt: 'Judean shepherd leaning on crooked wooden staff watching sunny flock grazing wildflower hills',
        scriptureRefs: [
          { label: 'Luke 15:1–4', chapterId: 'LUK-15', verseNumber: 4 },
          { label: 'John 10:11–14', chapterId: 'JHN-10', verseNumber: 11 },
        ],
      },
      {
        id: 'ls-2',
        beatNumber: 2,
        title: 'Counting One Lamb Missing at Dusk',
        narrative:
          'As lavender twilight crept steadily across limestone ridges, the shepherd called his flock cleanly home toward stone fold walls, resting his staff across the narrow stone doorway to count every wooly back trotting inside. Ninety-seven… ninety-eight… ninety-nine.\n\nWait. Turning quickly back toward dark misty cliffs, he counted twice more in rising worry. Out across rugged lonely rocks, distracted by a tuft of sweet grass and trapped beside thorny mountain brambles, one tiny frightened white lamb stood bleating helplessly alone.',
        imageUrl: '/images/stories/lost-sheep-2.webp',
        imageAlt: 'Worried shepherd scanning rocky mountain ridge at purple dusk while one tiny lamb stands lost afar',
        scriptureRefs: [
          { label: 'Luke 15:4', chapterId: 'LUK-15', verseNumber: 4 },
        ],
      },
      {
        id: 'ls-3',
        beatNumber: 3,
        title: 'Climbing Steep Cliffs With a Lantern',
        narrative:
          'Practical voices might mutter, “Ninety-nine out of a hundred is a great score—stay warm inside tonight!” Not a true Good Shepherd. Leaving the ninety-nine safe inside walled shelter with fellow keepers, he trimmed a bright brass oil lamp, gripped his wooden staff tightly, and stepped back out into icy hillside dusk.\n\nScrambling carefully over loose shale ledges, peering beneath thorny ravine overhangs, and calling softly into swirling night mist, he searched tirelessly without turning back—loving that one wandering creature far too deeply to settle for “almost all.”',
        imageUrl: '/images/stories/lost-sheep-3.webp',
        imageAlt: 'Determined shepherd climbing moonlit rocky canyon crags holding warm glowing oil lamp',
        scriptureRefs: [
          { label: 'Luke 15:4', chapterId: 'LUK-15', verseNumber: 4 },
          { label: 'Ezekiel 34:11–12', chapterId: 'EZK-34', verseNumber: 11 },
        ],
      },
      {
        id: 'ls-4',
        beatNumber: 4,
        title: 'Tender Rescue Along Narrow Ledges',
        narrative:
          'At last—a faint quivering cry echoed from down beside a narrow limestone ledge! Lifting his glowing bronze lantern forward, the shepherd spotted dusty tangled wool shivering against cold cliff stone.\n\nDropping eagerly to his knees with overflowing relief, he spoke gentle soothing words to quiet the lamb’s racing heart, untangled sticky briers gently from its coat without scolding or striking it, and scooped the trembling exhausted creature securely into both warm arms.',
        imageUrl: '/images/stories/lost-sheep-4.webp',
        imageAlt: 'Shepherd kneeling gently beside rocky ridge cradling tiny rescued lamb securely in both arms',
        scriptureRefs: [
          { label: 'Luke 15:5', chapterId: 'LUK-15', verseNumber: 5 },
          { label: 'Isaiah 40:11', chapterId: 'ISA-40', verseNumber: 11 },
        ],
      },
      {
        id: 'ls-5',
        beatNumber: 5,
        title: 'Lifted Joyfully Across Strong Shoulders',
        narrative:
          'Look at Jesus’s tender word picture: “When he has found it, he lays it on his shoulders, rejoicing!” Tired legs didn’t get forced to limp miles back downhill over sharp gravel alone.\n\nInstead, the strong shepherd wrapped gentle steady hands around its four small hooves, resting the rescued lamb safely warm across his broad cloak shoulders as starry morning light softened eastern hills on their cheerful walk home.',
        imageUrl: '/images/stories/lost-sheep-5.webp',
        imageAlt: 'Smiling shepherd walking briskly home at dawn carrying tiny peaceful lamb gently across his shoulders',
        scriptureRefs: [
          { label: 'Luke 15:5', chapterId: 'LUK-15', verseNumber: 5 },
        ],
      },
      {
        id: 'ls-6',
        beatNumber: 6,
        title: '“Rejoice With Me—I Found My Lost One!”',
        narrative:
          'Stepping joyfully back into sunlit Bethlehem stone village courtyards, the shepherd didn’t keep quiet about his midnight climb—he called friends and neighbors straight outside to laugh and feast beside the returned flock: “Rejoice with me, for I have found my sheep which was lost!”\n\nFinishing His story, Jesus smiled warmly at listeners both humbled and amazed: “I tell you that even so there will be more joy in heaven over one sinner who repents, than over ninety-nine righteous people who need no repentance.”',
        imageUrl: '/images/stories/lost-sheep-6.webp',
        imageAlt: 'Happy limestone village courtyard gathering as shepherd and neighbors celebrate beside returned sheep',
        scriptureRefs: [
          { label: 'Luke 15:6–7', chapterId: 'LUK-15', verseNumber: 7 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'You are never “just one in a crowd” to the Good Shepherd',
        description:
          'Even with ninety-nine safe beside Him, God notices when one single heart drifts—and searches tirelessly until He finds you.',
        anchorRef: { label: 'Luke 15:4', chapterId: 'LUK-15', verseNumber: 4 },
      },
      {
        title: 'Jesus carries exhausted hearts home rather than scolding them',
        description:
          'Notice the shepherd lifted the tired lamb onto his own shoulders instead of forcing it to limp back—grace carries our weight when strength runs out.',
        anchorRef: { label: 'Luke 15:5', chapterId: 'LUK-15', verseNumber: 5 },
      },
      {
        title: 'Every quiet turn back toward God sparks joy in heaven',
        description:
          'God isn’t reluctant when someone comes home—heaven celebrates warmly over every single restored life.',
        anchorRef: { label: 'Luke 15:7', chapterId: 'LUK-15', verseNumber: 7 },
      },
    ],
    reflectionPrompt:
      'Does it change how you view yourself—or a loved one who feels far away—knowing Jesus gladly climbs cliffs to carry one lamb home?',
  },
  {
    id: 'story-first-christmas',
    slug: 'first-christmas',
    title: 'The First Christmas: Birth of Jesus',
    subtitle: 'Light Shining Quietly Inside a Humble Manger',
    testament: 'NT',
    category: 'Miracles of Jesus',
    scriptureRange: 'Luke 2:1–20',
    readingTimeMinutes: 8,
    coverImageUrl: '/images/stories/christmas-2.webp',
    primaryChapterId: 'LUK-2',
    summary:
      'Far from marble palaces and noisy crowds, the promised King of Heaven entered earth wrapped softly in linen cloths beside a wooden feeding trough in quiet Bethlehem—greeted first by singing sky angels and humble hillside shepherds.',
    beats: [
      {
        id: 'xmas-1',
        beatNumber: 1,
        title: 'The Long Road to Bethlehem',
        narrative:
          'Across every Roman road came Emperor Augustus’s decree ordering families back to their ancestral hometowns to register for taxes. Gentle carpenter Joseph left his quiet Nazareth workshop, leading a calm little brown donkey down ninety steep limestone miles toward Bethlehem—the ancient hilltop city of King David—with young Mary close beside him carrying heaven’s promised child.\n\nArriving at dusk when golden oil lamps flickered along terraced olive walls, every guest room in crowded Bethlehem stood completely full. Yet God’s quiet plan had already prepared an unassuming shelter tucked gently behind stone courtyard walls.',
        imageUrl: '/images/stories/christmas-1.webp',
        imageAlt: 'Joseph leading calm brown donkey carrying veiled Mary along olive hillside toward lamp-lit Bethlehem',
        scriptureRefs: [
          { label: 'Luke 2:1–5', chapterId: 'LUK-2', verseNumber: 4 },
          { label: 'Luke 2:6–7', chapterId: 'LUK-2', verseNumber: 7 },
        ],
      },
      {
        id: 'xmas-2',
        beatNumber: 2,
        title: 'A King Cradled in Clean Swaddling Linen',
        narrative:
          'Inside a quiet candlelit limestone stable smelling faintly of sweet dry hay and warm cedar beams, the long-awaited hour arrived. Without royal trumpets or silk canopies, young Mary brought forth her firstborn Son—wrapping tiny Jesus snugly in crisp white strips of swaddling linen to keep His small limbs warm and comforted.\n\nHaving no carved ivory cradle, Mary and smiling Joseph lined a humble wooden animal feeding manger with clean straw and laid the Savior of the world gently down to rest while gentle donkeys breathed softly nearby.',
        imageUrl: '/images/stories/christmas-2.webp',
        imageAlt: 'Candlelit stone-and-timber stable as Mary and Joseph lay swaddled baby Jesus softly into wooden manger',
        scriptureRefs: [
          { label: 'Luke 2:7', chapterId: 'LUK-2', verseNumber: 7 },
        ],
      },
      {
        id: 'xmas-3',
        beatNumber: 3,
        title: 'Startled Watchmen on Moonlit Hills',
        narrative:
          'Just beyond the sleeping village walls out upon chilly moonlit Bethlehem meadows—the very hills where young shepherd David once kept his flock—lowly night-shift shepherds wrapped wool cloaks tighter around their shoulders beside huddled white sheep.\n\nSuddenly pitch-dark midnight sky split wide open with dazzling, unearthly brightness! “The glory of the Lord shone around them,” Luke remembers, leaving grown men shielding wide eyes in breathless awe while an angel gently spoke first: “Don’t be afraid, for behold, I bring you good news of great joy which will be to all the people!”',
        imageUrl: '/images/stories/christmas-3.webp',
        imageAlt: 'Astonished shepherds beside calm white sheep shielding eyes beneath dazzling sky opening over Bethlehem',
        scriptureRefs: [
          { label: 'Luke 2:8–11', chapterId: 'LUK-2', verseNumber: 10 },
          { label: 'Luke 2:12', chapterId: 'LUK-2', verseNumber: 12 },
        ],
      },
      {
        id: 'xmas-4',
        beatNumber: 4,
        title: 'Heaven’s Choir Singing Peace on Earth',
        narrative:
          'Before shepherds could catch their breath at hearing a Savior had been born right inside nearby Bethlehem—found simply “wrapped in strips of cloth, lying in a feeding trough”—the whole starry dome burst alive with a luminous heavenly choir.\n\nHundreds of radiant golden-winged angels filled the night clouds praising God aloud with music nobody on those hills would ever forget: “Glory to God in the highest, on earth peace, good will toward men!” God chose humble working shepherds to receive earth’s grandest concert.',
        imageUrl: '/images/stories/christmas-4.webp',
        imageAlt: 'Radiant sky filled with joyful angel choir singing high above quiet Bethlehem sheep hills',
        scriptureRefs: [
          { label: 'Luke 2:13–14', chapterId: 'LUK-2', verseNumber: 14 },
        ],
      },
      {
        id: 'xmas-5',
        beatNumber: 5,
        title: 'Hurrying Under Starlight to See',
        narrative:
          'As radiant clouds faded gently back into calm indigo stars, shepherds didn’t sit debating until morning! Grasping crooks excitedly, they urged one another right up the stony footpath: “Let’s go to Bethlehem, now, and see this thing that has happened, which the Lord has made known to us!”\n\nHurrying warmly down quiet lantern-less village lanes guided by clear starlight overhead, they followed the angel’s simple signpost straight toward one warmly glowing stable doorway.',
        imageUrl: '/images/stories/christmas-5.webp',
        imageAlt: 'Joyful shepherds hurrying through quiet stone Bethlehem street toward glowing stable under bright star',
        scriptureRefs: [
          { label: 'Luke 2:15–16', chapterId: 'LUK-2', verseNumber: 16 },
        ],
      },
      {
        id: 'xmas-6',
        beatNumber: 6,
        title: 'Quiet Wonder Beside the Manger',
        narrative:
          'Stepping softly across the threshold into warm golden lantern light, dusty shepherds saw every word stood true—kind Joseph watching over gentle Mary and tiny sleeping Jesus resting peacefully inside the hay manger. Dropping respectfully to weathered knees on stone floor, they whispered out everything the bright angels had sung over the hills.\n\n“Mary kept all these sayings, pondering them in her heart,” Luke writes tenderly—while joyful shepherds walked back to dawn pastures praising God loudly with every step for all they had seen and heard.',
        imageUrl: '/images/stories/christmas-6.webp',
        imageAlt: 'Warm candlelit stable interior as grateful shepherds kneel softly beside Mary, Joseph, and sleeping Jesus',
        scriptureRefs: [
          { label: 'Luke 2:16–18', chapterId: 'LUK-2', verseNumber: 17 },
          { label: 'Luke 2:19–20', chapterId: 'LUK-2', verseNumber: 19 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'God loves entering ordinary humble places',
        description:
          'Instead of choosing gold marble halls, Heaven’s King rested in a simple stone feeding trough—proving no home or life is too humble for His presence.',
        anchorRef: { label: 'Luke 2:7', chapterId: 'LUK-2', verseNumber: 7 },
      },
      {
        title: 'Good news of great joy is meant for everyday people',
        description:
          'Night-shift shepherds ranked low in society, yet God invited them first to hear angels sing and meet Jesus personally.',
        anchorRef: { label: 'Luke 2:10–14', chapterId: 'LUK-2', verseNumber: 10 },
      },
      {
        title: 'Slow down like Mary to treasure quiet wonders in your heart',
        description:
          'Amid noisy streets and amazed visitors, Mary paused quietly to hold onto God’s faithfulness—inviting us to savor grace peacefully too.',
        anchorRef: { label: 'Luke 2:19', chapterId: 'LUK-2', verseNumber: 19 },
      },
    ],
    reflectionPrompt:
      'In what small, quiet, everyday place do you notice God drawing close to you right now?',
  },
  {
    id: 'story-fiery-furnace',
    slug: 'fiery-furnace',
    title: 'The Fiery Furnace',
    subtitle: 'Shadrach, Meshach & Abednego Stand Firm in Fire',
    testament: 'OT',
    category: 'Old Testament Classics',
    primarySection: 'Courage & Faith',
    sections: ['Courage & Faith', 'Perseverance & Trials', 'Stories for Kids'],
    scriptureRange: 'Daniel 3',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/fiery-furnace-5.webp',
    primaryChapterId: 'DAN-3',
    summary:
      'When King Nebuchadnezzar ordered every official in Babylon to bow before a towering ninety-foot golden statue or die in flames, three exiled young Hebrew friends refused to trade away their loyalty to God—and met the Savior walking right inside the fire.',
    beats: [
      {
        id: 'ff-1',
        beatNumber: 1,
        title: 'Ninety Feet of Gold on the Plain of Dura',
        narrative:
          'Determined to dazzle his empire into absolute loyalty, King Nebuchadnezzar erected an immense golden statue—nearly ninety feet tall—gleaming under the desert sun on the flat plain of Dura. Governors, judges, counselors, and captains streamed in from across the provinces.\n\nA royal herald shouted the decree over brass horns, flutes, and harps: the instant the music sounded, every single person must drop face-down in worship of the king’s image—or be thrown straight into a roaring brick furnace.',
        imageUrl: '/images/stories/fiery-furnace-1.webp',
        imageAlt: 'Towering golden statue gleaming on the plain of Dura as Babylonian crowds bow down',
        scriptureRefs: [
          { label: 'Daniel 3:1–5', chapterId: 'DAN-3', verseNumber: 1 },
          { label: 'Daniel 3:6', chapterId: 'DAN-3', verseNumber: 6 },
        ],
      },
      {
        id: 'ff-2',
        beatNumber: 2,
        title: 'Three Friends Who Refused to Bow',
        narrative:
          'When music swelled across the crowded plain, thousands fell instantly onto dusty ground in unison. Yet standing calmly upright like solitary oaks across the flat sea of bowing robes were three young Jewish exiles serving in Babylon’s courts: Shadrach, Meshach, and Abednego.\n\nJealous courtiers hurried gleefully to accuse them before the throne. Far from home and stripped of family protection, the three friends remembered God’s clear command—never bow to carved gold, no matter how powerful the king.',
        imageUrl: '/images/stories/fiery-furnace-2.webp',
        imageAlt: 'Three brave Hebrew friends standing upright side by side while crowds bow around them',
        scriptureRefs: [
          { label: 'Daniel 3:8–12', chapterId: 'DAN-3', verseNumber: 12 },
          { label: 'Exodus 20:4–5', chapterId: 'EXO-20', verseNumber: 4 },
        ],
      },
      {
        id: 'ff-3',
        beatNumber: 3,
        title: 'Heated Seven Times Hotter',
        narrative:
          'Seething with rage, Nebuchadnezzar gave them one last chance—demanding aloud, “What god is there who will deliver you out of my hands?” Their answer still echoes as one of Scripture’s finest portraits of steady perseverance: “Our God whom we serve is able to deliver us... But if not, let it be known to you, O king, that we will not serve your gods.”\n\nStung by fearless honesty, the king commanded soldiers to stoke the arched brick kiln seven times hotter than usual and bind the three men in their coats and tunics.',
        imageUrl: '/images/stories/fiery-furnace-3.webp',
        imageAlt: 'Angry King Nebuchadnezzar ordering soldiers to heat the glowing stone kiln sevenfold',
        scriptureRefs: [
          { label: 'Daniel 3:15–18', chapterId: 'DAN-3', verseNumber: 17 },
          { label: 'Daniel 3:19–21', chapterId: 'DAN-3', verseNumber: 19 },
        ],
      },
      {
        id: 'ff-4',
        beatNumber: 4,
        title: 'Cast Into the Blazing Furnace',
        narrative:
          'The kiln roared so fiercely that swirling heat struck down the very soldiers carrying Shadrach, Meshach, and Abednego up to its mouth. Bound tight with rope, the three faithful friends dropped straight into white-hot flames while watchers expected instant ash.\n\nEverything earthly hope trusted in—rank, influence, escape—was gone. Only God’s faithfulness remained inside that furnace.',
        imageUrl: '/images/stories/fiery-furnace-4.webp',
        imageAlt: 'Swirling golden flames pouring from the domed brick kiln as the three faithful friends enter',
        scriptureRefs: [
          { label: 'Daniel 3:22–23', chapterId: 'DAN-3', verseNumber: 23 },
        ],
      },
      {
        id: 'ff-5',
        beatNumber: 5,
        title: 'Four Figures Walking Unharmed',
        narrative:
          'Suddenly King Nebuchadnezzar leaped pale to his feet from his royal seat! Leaning toward the glowing doorway, he asked his startled counselors: “Didn’t we throw three men bound into the fire? Look! I see four men loose, walking in the middle of the fire, and they aren’t hurt; and the aspect of the fourth is like a son of the gods!”\n\nFlames burned away nothing except the ropes tying their wrists—giving them complete freedom right at the heart of the trial, accompanied face-to-face by the Lord Himself.',
        imageUrl: '/images/stories/fiery-furnace-5.webp',
        imageAlt: 'Four peaceful figures—the three friends beside a luminous companion—walking unharmed inside the fire',
        scriptureRefs: [
          { label: 'Daniel 3:24–25', chapterId: 'DAN-3', verseNumber: 25 },
          { label: 'Isaiah 43:2', chapterId: 'ISA-43', verseNumber: 2 },
        ],
      },
      {
        id: 'ff-6',
        beatNumber: 6,
        title: 'Stepping Out Without Even Smoke',
        narrative:
          'Calling from the furnace mouth, Nebuchadnezzar cried, “Shadrach, Meshach, and Abednego, you servants of the Most High God, come out!” Calmly the three stepped into the sunlight surrounded by astonished princes and captains.\n\nNot a single hair was singed, not a thread of their linen cloaks scorched—not even the faintest smell of smoke clung to them! Right there on Dura’s plain, a proud pagan king praised the God who rescues those who trust Him.',
        imageUrl: '/images/stories/fiery-furnace-6.webp',
        imageAlt: 'Shadrach, Meshach, and Abednego stepping spotless from the kiln before an amazed king',
        scriptureRefs: [
          { label: 'Daniel 3:26–27', chapterId: 'DAN-3', verseNumber: 27 },
          { label: 'Daniel 3:28–29', chapterId: 'DAN-3', verseNumber: 28 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Courage says “even if not” before rescue arrives',
        description:
          'The three friends loved God for who He is—not just for easy outcomes. True faith obeys even when rescue isn’t guaranteed beforehand.',
        anchorRef: { label: 'Daniel 3:17–18', chapterId: 'DAN-3', verseNumber: 18 },
      },
      {
        title: 'God often meets us inside the fire, not around it',
        description:
          'God didn’t extinguish the furnace from afar; Jesus stepped directly into the flames beside His friends and burned off only their chains.',
        anchorRef: { label: 'Daniel 3:25', chapterId: 'DAN-3', verseNumber: 25 },
      },
      {
        title: 'Quiet conviction speaks louder than crowds',
        description:
          'Three young exiles stood upright while an empire knelt—reminding us never to measure truth by how popular it looks.',
        anchorRef: { label: 'Daniel 3:28', chapterId: 'DAN-3', verseNumber: 28 },
      },
    ],
    reflectionPrompt:
      'Where is God inviting you to stay quietly faithful even if everyone around you bows to pressure?',
  },
  {
    id: 'story-zacchaeus',
    slug: 'zacchaeus',
    title: 'Zacchaeus Climbs the Sycamore',
    subtitle: 'Big Grace for a Small, Overlooked Heart',
    testament: 'NT',
    category: 'Miracles of Jesus',
    primarySection: 'Stories for Kids',
    sections: ['Stories for Kids', 'Love & Kindness', 'Jesus & Miracles'],
    scriptureRange: 'Luke 19:1–10',
    readingTimeMinutes: 5,
    coverImageUrl: '/images/stories/zacchaeus-3.webp',
    primaryChapterId: 'LUK-19',
    summary:
      'Rich yet lonely, short in stature and disliked across Jericho for collecting Roman taxes, Zacchaeus swallowed his pride, climbed into leafy sycamore branches just to glimpse Jesus—and found Jesus inviting Himself straight into his home.',
    beats: [
      {
        id: 'zac-1',
        beatNumber: 1,
        title: 'Too Short in a Crowded Street',
        narrative:
          'Excited murmurs swept through Jericho’s sunlit palm streets: Jesus of Nazareth was walking straight through town! Hundreds pressed shoulder-to-shoulder along the limestone road hoping for a glimpse.\n\nAt the edge stood Zacchaeus, chief tax collector—wealthy in silver coins yet deeply unpopular among neighbors who resented Roman taxes. Standing short in stature, every time Zacchaeus hopped on tiptoe he saw only tall backs and shoulders blocking the path.',
        imageUrl: '/images/stories/zacchaeus-1.webp',
        imageAlt: 'Short Zacchaeus trying to peek over a tall crowd lining sunny Jericho street',
        scriptureRefs: [
          { label: 'Luke 19:1–3', chapterId: 'LUK-19', verseNumber: 2 },
        ],
      },
      {
        id: 'zac-2',
        beatNumber: 2,
        title: 'Up Into the Sycamore Branches',
        narrative:
          'Instead of giving up or going home bitter, Zacchaeus refused to miss Jesus! Remembering the route ahead, this grown respected official ran eagerly down the dusty street and scrambled straight up the thick low-hanging trunk of a broad leafy sycamore fig tree.\n\nTucking his cloak neatly along a wide shaded bough above the road, he leaned forward eagerly through green leaves for a clear view.',
        imageUrl: '/images/stories/zacchaeus-2.webp',
        imageAlt: 'Zacchaeus perched cheerfully on thick leafy sycamore branch overlooking the road',
        scriptureRefs: [
          { label: 'Luke 19:4', chapterId: 'LUK-19', verseNumber: 4 },
        ],
      },
      {
        id: 'zac-3',
        beatNumber: 3,
        title: 'Jesus Stops & Calls Him by Name',
        narrative:
          'When Jesus reached the sycamore tree, the noisy crowd hushed in surprise as He stopped dead in His tracks, tilted His head upward through sunlit leaves, and locked warm eyes directly onto Zacchaeus.\n\nBefore Zacchaeus could stammer a greeting, Jesus called him lovingly by his very own name: “Zacchaeus, hurry and come down, for today I must stay at your house!” Nobody in Jericho had ever spoken to him with kindness like that.',
        imageUrl: '/images/stories/zacchaeus-3.webp',
        imageAlt: 'Kind smiling Jesus looking up beneath leafy sycamore branches toward Zacchaeus',
        scriptureRefs: [
          { label: 'Luke 19:5', chapterId: 'LUK-19', verseNumber: 5 },
        ],
      },
      {
        id: 'zac-4',
        beatNumber: 4,
        title: 'Welcoming Jesus With Joy',
        narrative:
          'Zacchaeus scrambled down fast as a boy and welcomed Jesus joyfully across his stone doorway! Outside in the lane, grumblers muttered under their breath: “He has gone in to lodge with a man who is a sinner!”\n\nYet inside warm lantern light beside shared bread and olives, unhurried grace melted years of loneliness. Being welcomed by Jesus healed what hoarded silver never could.',
        imageUrl: '/images/stories/zacchaeus-4.webp',
        imageAlt: 'Smiling Zacchaeus sharing bread and warm hospitality at home with Jesus',
        scriptureRefs: [
          { label: 'Luke 19:6–7', chapterId: 'LUK-19', verseNumber: 6 },
        ],
      },
      {
        id: 'zac-5',
        beatNumber: 5,
        title: 'A Heart Changed Into Generosity',
        narrative:
          'Nobody lectured Zacchaeus about his moneybag—yet sitting close to overflowing love sparked instant change! Standing upright before everyone, Zacchaeus pledged joyfully: “Behold, Lord, half of my goods I give to the poor. If I have wrongfully exacted anything of anyone, I restore four times as much.”\n\nCoins that once separated him from neighbors suddenly became open-handed repair and kindness.',
        imageUrl: '/images/stories/zacchaeus-5.webp',
        imageAlt: 'Joyful Zacchaeus pouring generous coins into the open hands of poor neighbors',
        scriptureRefs: [
          { label: 'Luke 19:8', chapterId: 'LUK-19', verseNumber: 8 },
        ],
      },
      {
        id: 'zac-6',
        beatNumber: 6,
        title: 'Seeking and Saving the Lost',
        narrative:
          'Beaming warmly across the courtyard, Jesus spoke words every outsider treasures: “Today, salvation has come to this house, because he also is a son of Abraham. For the Son of Man came to seek and to save that which was lost.”\n\nZacchaeus climbed a tree hoping simply to see Jesus—only to learn Jesus had come down that road specifically looking for him.',
        imageUrl: '/images/stories/zacchaeus-6.webp',
        imageAlt: 'Gentle Jesus resting a reassuring hand on joyful Zacchaeus beside sunlit courtyard arch',
        scriptureRefs: [
          { label: 'Luke 19:9–10', chapterId: 'LUK-19', verseNumber: 10 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Jesus notices the person tucked out of sight',
        description:
          'Even in a pressing crowd, Jesus paused beneath one tree and called Zacchaeus by name—showing no one is too small or sidelined for His attention.',
        anchorRef: { label: 'Luke 19:5', chapterId: 'LUK-19', verseNumber: 5 },
      },
      {
        title: 'Real grace transforms our hands, not just our words',
        description:
          'True repentance in Zacchaeus looked joyfully practical: giving half to the poor and repairing old wrongs fourfold.',
        anchorRef: { label: 'Luke 19:8', chapterId: 'LUK-19', verseNumber: 8 },
      },
      {
        title: 'Never let pride stop you from seeking Jesus',
        description:
          'Running ahead and climbing a sycamore looked undignified—yet earnest humility led straight to Jesus’ table.',
        anchorRef: { label: 'Luke 19:4', chapterId: 'LUK-19', verseNumber: 4 },
      },
    ],
    reflectionPrompt:
      'Who around you feels pushed to the edges like Zacchaeus—and how can you welcome them kindly today?',
  },
  {
    id: 'story-paul-silas',
    slug: 'paul-silas',
    title: 'Paul & Silas Sing in Prison',
    subtitle: 'Midnight Songs That Opened Locked Doors',
    testament: 'NT',
    category: 'Early Church & Courage',
    primarySection: 'Perseverance & Trials',
    sections: ['Perseverance & Trials', 'Courage & Faith'],
    scriptureRange: 'Acts 16:16–34',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/paul-silas-2.webp',
    primaryChapterId: 'ACT-16',
    summary:
      'Wrongly beaten and locked inside the darkest inner cell of a Roman dungeon in Philippi, missionaries Paul and Silas chose worship over bitterness—until a midnight earthquake broke every chain and led the stunned jailer’s family to faith.',
    beats: [
      {
        id: 'ps-1',
        beatNumber: 1,
        title: 'Beaten & Locked in the Inner Cell',
        narrative:
          'After freeing a tormented slave girl in Philippi through Jesus’ name, Paul and Silas found angry owners dragging them straight before town magistrates. Without a fair trial, guards stripped their cloaks, beat their backs with wooden rods, and marched them bruised into stone prison.\n\n“Having received such a command, the jailer threw them into the inner prison, and fastened their feet in the stocks”—locking heavy timber clamps tight around weary ankles in pitch dark.',
        imageUrl: '/images/stories/paul-silas-1.webp',
        imageAlt: 'Calm Paul and Silas led through stone Roman prison gates by armed soldiers at dusk',
        scriptureRefs: [
          { label: 'Acts 16:22–24', chapterId: 'ACT-16', verseNumber: 23 },
        ],
      },
      {
        id: 'ps-2',
        beatNumber: 2,
        title: 'Prayers & Hymns Rising at Midnight',
        narrative:
          'Midnight settled cold and suffocating across the dungeon. With bleeding backs pressed against rough damp wall and legs aching in wooden stocks, complaining would have felt completely natural.\n\nInstead, around midnight voices echoed softly from the deepest cell—Paul and Silas were praying aloud and singing joyful psalms of praise to God! Luke adds an unforgettable detail: “and the prisoners were listening to them.”',
        imageUrl: '/images/stories/paul-silas-2.webp',
        imageAlt: 'Paul and Silas sitting in wooden stocks by torchlight lifting joyful faces singing hymns',
        scriptureRefs: [
          { label: 'Acts 16:25', chapterId: 'ACT-16', verseNumber: 25 },
        ],
      },
      {
        id: 'ps-3',
        beatNumber: 3,
        title: 'Earthquake Splits Every Chain Open',
        narrative:
          'While hymns rose through stone vaults, God answered with power! “Suddenly there was a great earthquake, so that the foundations of the prison were shaken: and immediately all the doors were opened, and everyone’s bonds were loosened.”\n\nHeavy iron bars clattered loose, thick timber doors swung wide onto the corridor—yet nobody panicked or bolted into the dark streets.',
        imageUrl: '/images/stories/paul-silas-3.webp',
        imageAlt: 'Shaking prison corridor as heavy barred cell doors swing open and iron chains fall loose',
        scriptureRefs: [
          { label: 'Acts 16:26', chapterId: 'ACT-16', verseNumber: 26 },
        ],
      },
      {
        id: 'ps-4',
        beatNumber: 4,
        title: '“Do Yourself No Harm—We Are All Here!”',
        narrative:
          'Jolted awake and seeing wide-open prison doors, the terrified Roman jailer knew Roman law meant execution if prisoners escaped—and drew his sword in despair.\n\nBefore blade could fall, Paul called calmly through the dark archway: “Don’t harm yourself, for we are all here!” Trembling with a swinging oil lamp, the astonished officer rushed inside and dropped to his knees asking, “Sirs, what must I do to be saved?”',
        imageUrl: '/images/stories/paul-silas-4.webp',
        imageAlt: 'Apostle Paul calmly stopping the startled Roman jailer holding a flickering oil lamp',
        scriptureRefs: [
          { label: 'Acts 16:27–30', chapterId: 'ACT-16', verseNumber: 28 },
          { label: 'Acts 16:31', chapterId: 'ACT-16', verseNumber: 31 },
        ],
      },
      {
        id: 'ps-5',
        beatNumber: 5,
        title: 'Washing Wounds & Healing Hearts',
        narrative:
          'That very hour before dawn, grace turned captor into brother! Leading Paul and Silas out to a courtyard basin beneath quiet stars, the same hands that had locked wooden stocks washed their bruised wounds gently with cool water.\n\nSoon Paul and Silas spoke the word of Jesus to everyone in his house, and the entire family stepped gladly into baptism before sunrise.',
        imageUrl: '/images/stories/paul-silas-5.webp',
        imageAlt: 'Grateful Roman jailer washing Paul and Silas wounds gently beside clay water basin at night',
        scriptureRefs: [
          { label: 'Acts 16:32–33', chapterId: 'ACT-16', verseNumber: 33 },
        ],
      },
      {
        id: 'ps-6',
        beatNumber: 6,
        title: 'Joyful Bread Around the Table Before Dawn',
        narrative:
          'Bringing his guests straight upstairs into warm kitchen lamp-light, the jailer set fresh bread and food before them while “rejoicing greatly, with all his household, having believed in God.”\n\nWhat began as the darkest night in Philippi ended in dawn songs around an overflowing table—a living reminder that praising God in hard midnight hours turns locks into open doors for others.',
        imageUrl: '/images/stories/paul-silas-6.webp',
        imageAlt: 'Smiling jailer’s family breaking bread warmly with joyful Paul and Silas before sunrise',
        scriptureRefs: [
          { label: 'Acts 16:34', chapterId: 'ACT-16', verseNumber: 34 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Worship in dark seasons sustains perseverance',
        description:
          'Paul and Silas sang hymns before the earthquake ever came—proving praise doesn’t wait for circumstances to change first.',
        anchorRef: { label: 'Acts 16:25', chapterId: 'ACT-16', verseNumber: 25 },
      },
      {
        title: 'Others are listening when trials test our faith',
        description:
          '“And the prisoners were listening to them.” Calm patience under unfair treatment preaches louder than words.',
        anchorRef: { label: 'Acts 16:25–28', chapterId: 'ACT-16', verseNumber: 28 },
      },
      {
        title: 'Compassion toward enemies opens doors to grace',
        description:
          'Refusing to run saved the jailer’s life and won his entire household to Jesus before morning.',
        anchorRef: { label: 'Acts 16:31–34', chapterId: 'ACT-16', verseNumber: 31 },
      },
    ],
    reflectionPrompt:
      'What “midnight” worry are you carrying right now where quiet gratitude could steady your heart?',
  },
  {
    id: 'story-wedding-cana',
    slug: 'wedding-cana',
    title: 'The Wedding at Cana',
    subtitle: 'Jesus’ First Miracle Turns Water Into Joyful Abundance',
    testament: 'NT',
    category: 'Miracles of Jesus',
    primarySection: 'Love & Kindness',
    sections: ['Love & Kindness', 'Jesus & Miracles', 'Stories for Kids'],
    scriptureRange: 'John 2:1–11',
    readingTimeMinutes: 5,
    coverImageUrl: '/images/stories/wedding-cana-4.webp',
    primaryChapterId: 'JHN-2',
    summary:
      'When wine unexpectedly ran dry during a small Galilean wedding feast—threatening deep embarrassment for a young couple—Jesus honored His mother’s quiet compassion and turned six stone water jars into rich, abundant blessing.',
    beats: [
      {
        id: 'cana-1',
        beatNumber: 1,
        title: 'Festive Joy in a Galilean Courtyard',
        narrative:
          'Freshly baptized and walking beside His earliest disciples, Jesus traveled to Cana in Galilee for a joyful village wedding. Courtyard arches bloomed with olive branches and festive garlands while laughter and music echoed around warm banquet tables.\n\nInstead of standing aloof from everyday life, heaven’s Creator stepped gladly right into family celebration.',
        imageUrl: '/images/stories/wedding-cana-1.webp',
        imageAlt: 'Smiling Galilean wedding guests dining cheerfully beneath sunlit stone courtyard arches',
        scriptureRefs: [
          { label: 'John 2:1–2', chapterId: 'JHN-2', verseNumber: 2 },
        ],
      },
      {
        id: 'cana-2',
        beatNumber: 2,
        title: 'Empty Jars & Mary’s Quiet Trust',
        narrative:
          'Midway through the celebration, a quiet crisis unfolded behind the courtyard alcove: the wedding wine ran completely out! In village hospitality, running dry meant lasting shame for the newlyweds.\n\nEver observant, Jesus’ mother Mary noticed at once, whispered the need softly to Jesus, and gave servants timeless counsel: “Whatever He says to you, do it.”',
        imageUrl: '/images/stories/wedding-cana-2.webp',
        imageAlt: 'Gentle Mary speaking quietly with attentive servants beside empty clay amphora jars',
        scriptureRefs: [
          { label: 'John 2:3–5', chapterId: 'JHN-2', verseNumber: 5 },
        ],
      },
      {
        id: 'cana-3',
        beatNumber: 3,
        title: 'Six Stone Water Jars Along the Wall',
        narrative:
          'Standing quietly along the sandstone wall sat six large stone water jars—each holding twenty to thirty gallons for customary Jewish washing before meals.\n\nJesus pointed simply to those ordinary stone vessels used for daily cleansing and gave a surprising order: “Fill the water pots with water.”',
        imageUrl: '/images/stories/wedding-cana-3.webp',
        imageAlt: 'Six tall carved stone water jars lined neatly along shaded Galilean courtyard wall',
        scriptureRefs: [
          { label: 'John 2:6–7', chapterId: 'JHN-2', verseNumber: 6 },
        ],
      },
      {
        id: 'cana-4',
        beatNumber: 4,
        title: 'Poured Up to the Very Brim',
        narrative:
          'Though pouring water for a wine shortage sounded puzzling, the servants trusted Mary’s words and obeyed without arguing. Carrying terracotta pitchers back and forth from the well, they poured clear sparkling water until every single jar shimmered right up to the brim.\n\nThen came Jesus’ calm second command: “Now draw some out, and take it to the ruler of the feast.”',
        imageUrl: '/images/stories/wedding-cana-4.webp',
        imageAlt: 'Servants tipping terracotta pitchers pouring clear water up to the brim of tall stone jars',
        scriptureRefs: [
          { label: 'John 2:7–8', chapterId: 'JHN-2', verseNumber: 7 },
        ],
      },
      {
        id: 'cana-5',
        beatNumber: 5,
        title: 'Best Kept Until Now',
        narrative:
          'Without thunder or fanfare, clear water ladled into the goblet gleamed deep ruby grape-wine of extraordinary fragrance! Tasting it unaware of how it arrived, the amazed master of the feast called the bridegroom aside in joyful wonder:\n\n“Every man sets on the good wine first... You have kept the good wine until now!”',
        imageUrl: '/images/stories/wedding-cana-5.webp',
        imageAlt: 'Amazed smiling banquet steward raising brimming ruby cup while servant holds ladle',
        scriptureRefs: [
          { label: 'John 2:9–10', chapterId: 'JHN-2', verseNumber: 10 },
        ],
      },
      {
        id: 'cana-6',
        beatNumber: 6,
        title: 'His Glory Revealed in Quiet Kindness',
        narrative:
          'John records this quiet miracle as the very first of Jesus’ signs—saving an ordinary village couple from public humiliation while blessing their guests with overflowing abundance.\n\nWatching silently beside Mary as laughter resumed around the courtyard tables, “His disciples believed in Him”—discovering a Savior who cares deeply about both big griefs and everyday joys.',
        imageUrl: '/images/stories/wedding-cana-6.webp',
        imageAlt: 'Compassionate Jesus standing quietly beside Mary and His disciples in afternoon light',
        scriptureRefs: [
          { label: 'John 2:11', chapterId: 'JHN-2', verseNumber: 11 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Nothing caring or ordinary is too small for Jesus',
        description:
          'Jesus’ very first miracle rescued a humble wedding from embarrassment—showing God delights in everyday love, family, and joy.',
        anchorRef: { label: 'John 2:1–11', chapterId: 'JHN-2', verseNumber: 11 },
      },
      {
        title: 'Faith often looks like filling ordinary jars to the brim',
        description:
          'Servants did the simple work they could do—carrying water—while leaving the transformation entirely to Jesus.',
        anchorRef: { label: 'John 2:5–8', chapterId: 'JHN-2', verseNumber: 7 },
      },
      {
        title: 'Notice quiet needs like Mary did',
        description:
          'Before embarrassment spread across the feast, gentle awareness and prayer invited Jesus right into the gap.',
        anchorRef: { label: 'John 2:3–5', chapterId: 'JHN-2', verseNumber: 3 },
      },
    ],
    reflectionPrompt:
      'Where do you feel like “your jars are empty” right now—and what small faithful step can you bring to Jesus?',
  },
  {
    id: 'story-jericho-walls',
    slug: 'jericho-walls',
    title: 'Joshua & the Walls of Jericho',
    subtitle: 'Patient Faith Marching Around Towering Stone Walls',
    testament: 'OT',
    category: 'Old Testament Classics',
    primarySection: 'Perseverance & Trials',
    sections: ['Perseverance & Trials', 'Courage & Faith', 'Stories for Kids'],
    scriptureRange: 'Joshua 6',
    readingTimeMinutes: 7,
    coverImageUrl: '/images/stories/jericho-walls-3.webp',
    primaryChapterId: 'JOS-6',
    summary:
      'Standing before Jericho’s massive double stone walls after forty years in the wilderness, Joshua and Israel obeyed an unusual battle plan—marching patiently in silence day after day until God Himself brought the ramparts tumbling down while sparing faithful Rahab.',
    beats: [
      {
        id: 'jer-1',
        beatNumber: 1,
        title: 'Shut Tight Behind Towering Walls',
        narrative:
          'After forty years wandering the desert, Israel crossed the Jordan River and faced Jericho—a mighty fortress city locked tightly behind tall thick sandstone walls and heavy barred gates. Nobody went out, and nobody came in.\n\nHigh along one wall window hung a narrow bright scarlet cord—the covenant token keeping watch over Rahab and her trusting household inside.',
        imageUrl: '/images/stories/jericho-walls-1.webp',
        imageAlt: 'Tall fortified stone walls of Jericho with a red scarlet cord hanging from an upper window',
        scriptureRefs: [
          { label: 'Joshua 6:1', chapterId: 'JOS-6', verseNumber: 1 },
          { label: 'Joshua 2:18–21', chapterId: 'JOS-2', verseNumber: 21 },
        ],
      },
      {
        id: 'jer-2',
        beatNumber: 2,
        title: 'Trumpets & the Ark Lead the Way',
        narrative:
          'Instead of battering rams or siege towers, God gave Joshua a startling battle order: seven priests carrying curved ram’s-horn trumpets would walk ahead of the gold-covered Ark of the Covenant, surrounded respectfully by marching soldiers.\n\nEvery eyes-up step reminded the people whose strength they were leaning on: Jericho belonged to the Lord before a stone ever shifted.',
        imageUrl: '/images/stories/jericho-walls-2.webp',
        imageAlt: 'Israelite priests in white linen carrying the gold Ark preceded by curved ram’s horns',
        scriptureRefs: [
          { label: 'Joshua 6:2–5', chapterId: 'JOS-6', verseNumber: 4 },
        ],
      },
      {
        id: 'jer-3',
        beatNumber: 3,
        title: 'Marching in Quiet Obedience',
        narrative:
          'Rising early the next morning, Joshua organized the entire host and issued one strict instruction: “You shall not shout, nor let your voice be heard, neither shall any word proceed out of your mouth, until the day I tell you to shout.”\n\nAll day watchers along Jericho’s ramparts stared bewildered downward at thousands of footsteps circling silently around their city once—broken only by the echoing blast of seven ram’s horns—before returning quietly to camp.',
        imageUrl: '/images/stories/jericho-walls-3.webp',
        imageAlt: 'Long orderly procession marching silently around massive sunlit Jericho stone walls',
        scriptureRefs: [
          { label: 'Joshua 6:8–11', chapterId: 'JOS-6', verseNumber: 10 },
        ],
      },
      {
        id: 'jer-4',
        beatNumber: 4,
        title: 'Six Days Without a Single Crack',
        narrative:
          'Day two came—one lap, silence, back to camp. Day three, day four, day five, and day six passed the exact same way! Not a single stone budged, not a single crack widened in Jericho’s mortar.\n\nWait without seeing results tests every heart. Yet Joshua and Israel kept showing up faithfully under dawn sun, trusting God’s promise even when onlookers laughed from high walls.',
        imageUrl: '/images/stories/jericho-walls-4.webp',
        imageAlt: 'Joshua guiding Hebrew soldiers calmly toward distant Jericho ramparts under dawn mist',
        scriptureRefs: [
          { label: 'Joshua 6:12–14', chapterId: 'JOS-6', verseNumber: 14 },
          { label: 'Hebrews 11:30', chapterId: 'HEB-11', verseNumber: 30 },
        ],
      },
      {
        id: 'jer-5',
        beatNumber: 5,
        title: 'The Seventh Day Shout & Falling Stones',
        narrative:
          'At dawn on the seventh day, the host marched around Jericho not once, not twice, but seven steady times! At the finish of the seventh circuit, as seven trumpets sounded one long sustained blast, Joshua cried out: “Shout! For Yahweh has given you the city!”\n\nA mighty roar of faith shook the morning air—and suddenly heavy sandstone ramparts collapsed flat outward all around the city, letting Israel walk straight ahead.',
        imageUrl: '/images/stories/jericho-walls-5.webp',
        imageAlt: 'Massive stone blocks of Jericho crumbling downward as seven priests blow ram’s horns',
        scriptureRefs: [
          { label: 'Joshua 6:15–16', chapterId: 'JOS-6', verseNumber: 16 },
          { label: 'Joshua 6:20', chapterId: 'JOS-6', verseNumber: 20 },
        ],
      },
      {
        id: 'jer-6',
        beatNumber: 6,
        title: 'Rahab’s Scarlet Promise Honored',
        narrative:
          'Right amid collapsing masonry, one section of wall with a red cord held fast! Faithful to their solemn word, two Hebrew scouts hurried directly to Rahab’s doorway and brought Rahab, her mother, father, and entire family safely outside.\n\nYears later, Rahab’s courage of faith earned her an honored place right in King David’s—and Jesus’—very own family tree!',
        imageUrl: '/images/stories/jericho-walls-6.webp',
        imageAlt: 'Grateful Rahab and her family led safely past unbroken house with scarlet cord at dawn',
        scriptureRefs: [
          { label: 'Joshua 6:22–25', chapterId: 'JOS-6', verseNumber: 25 },
          { label: 'Matthew 1:5', chapterId: 'MAT-1', verseNumber: 5 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Perseverance keeps marching during Days 2 through 6',
        description:
          'Nothing visibly moved for six straight days—yet showing up faithfully in quiet obedience prepared the seventh-day breakthrough.',
        anchorRef: { label: 'Joshua 6:14–20', chapterId: 'JOS-6', verseNumber: 20 },
      },
      {
        title: 'By faith the walls fell down',
        description:
          'Hebrews reminds us trumpets and footsteps didn’t topple stone—trusting God’s odd instructions made room for His power.',
        anchorRef: { label: 'Hebrews 11:30', chapterId: 'HEB-11', verseNumber: 30 },
      },
      {
        title: 'God always keeps His promise to outsiders who trust Him',
        description:
          'Rahab’s simple scarlet cord sheltered her whole household and wove her into the lineage of Jesus.',
        anchorRef: { label: 'Joshua 6:25', chapterId: 'JOS-6', verseNumber: 25 },
      },
    ],
    reflectionPrompt:
      'What tall “wall” feels unmovable in your life—and what quiet, steady step can you take today in trust?',
  },
];
