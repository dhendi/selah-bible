import type { BibleStory } from '../types/bible';

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
    coverImageUrl: '/images/stories/noah-2.jpg',
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
        imageUrl: '/images/stories/noah-1.jpg',
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
        imageUrl: '/images/stories/noah-2.jpg',
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
        imageUrl: '/images/stories/noah-3.jpg',
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
        imageUrl: '/images/stories/noah-4.jpg',
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
        imageUrl: '/images/stories/noah-5.jpg',
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
        imageUrl: '/images/stories/noah-6.jpg',
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
    coverImageUrl: '/images/stories/david-goliath-4.jpg',
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
        imageUrl: '/images/stories/david-goliath-1.jpg',
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
        imageUrl: '/images/stories/david-goliath-2.jpg',
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
        imageUrl: '/images/stories/david-goliath-3.jpg',
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
        imageUrl: '/images/stories/david-goliath-4.jpg',
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
        imageUrl: '/images/stories/david-goliath-5.jpg',
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
        imageUrl: '/images/stories/david-goliath-6.jpg',
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
    coverImageUrl: '/images/stories/daniel-lions-4.jpg',
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
        imageUrl: '/images/stories/daniel-lions-1.jpg',
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
        imageUrl: '/images/stories/daniel-lions-2.jpg',
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
        imageUrl: '/images/stories/daniel-lions-3.jpg',
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
        imageUrl: '/images/stories/daniel-lions-4.jpg',
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
        imageUrl: '/images/stories/daniel-lions-5.jpg',
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
        imageUrl: '/images/stories/daniel-lions-6.jpg',
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
    coverImageUrl: '/images/stories/good-samaritan-4.jpg',
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
        imageUrl: '/images/stories/good-samaritan-1.jpg',
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
        imageUrl: '/images/stories/good-samaritan-2.jpg',
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
        imageUrl: '/images/stories/good-samaritan-3.jpg',
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
        imageUrl: '/images/stories/good-samaritan-4.jpg',
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
        imageUrl: '/images/stories/good-samaritan-5.jpg',
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
        imageUrl: '/images/stories/good-samaritan-6.jpg',
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
    coverImageUrl: '/images/stories/prodigal-son-4.jpg',
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
        imageUrl: '/images/stories/prodigal-son-1.jpg',
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
        imageUrl: '/images/stories/prodigal-son-2.jpg',
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
        imageUrl: '/images/stories/prodigal-son-3.jpg',
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
        imageUrl: '/images/stories/prodigal-son-4.jpg',
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
        imageUrl: '/images/stories/prodigal-son-5.jpg',
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
        imageUrl: '/images/stories/prodigal-son-6.jpg',
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
];
