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
    readingTimeMinutes: 4,
    coverImageUrl: '/images/stories/noah-2.jpg',
    primaryChapterId: 'GEN-6',
    summary:
      'When the earth grew filled with violence and selfishness, God asked one gentle, faithful man to build an enormous wooden rescue vessel far from any ocean—and trust His promise through a storm that reshaped the world.',
    beats: [
      {
        id: 'noah-1',
        beatNumber: 1,
        title: 'A Giant Boat on Dry Ground',
        narrative:
          'Long before a single drop of rain fell, God warned Noah that a flood was coming and gave him careful measurements for a towering three-story ark made of cypress wood. Year after year, Noah measured, sawed, and sealed every plank with pitch—staying steady in faith even when neighbors wondered why he was building a ship miles from the sea.',
        imageUrl: '/images/stories/noah-1.jpg',
        imageAlt: 'Noah building the massive wooden ark beams beside sunlit olive hills',
        scriptureRefs: [
          { label: 'Genesis 6:8–14', chapterId: 'GEN-6', verseNumber: 14 },
          { label: 'Genesis 6:22', chapterId: 'GEN-6', verseNumber: 22 },
        ],
      },
      {
        id: 'noah-2',
        beatNumber: 2,
        title: 'Two by Two Into Shelter',
        narrative:
          'When the timber work finally stood complete, God guided pairs of every creature—elephants, deer, lions, sheep, and fluttering birds—up the wide wooden ramp into the safety of the ark. Noah, his wife, their three sons, and their wives stepped inside last, and God Himself shut the heavy door behind them.',
        imageUrl: '/images/stories/noah-2.jpg',
        imageAlt: 'Pairs of gentle animals walking up the wooden ramp into Noah’s ark before storm clouds',
        scriptureRefs: [
          { label: 'Genesis 7:1–5', chapterId: 'GEN-7', verseNumber: 1 },
          { label: 'Genesis 7:15–16', chapterId: 'GEN-7', verseNumber: 16 },
        ],
      },
      {
        id: 'noah-3',
        beatNumber: 3,
        title: 'Forty Days of Relentless Rain',
        narrative:
          'Then the deep springs burst upward and the windows of heaven poured down rain for forty days and forty nights. Dark waves rose above hills and mountaintops alike, tossing the vast sea, yet the pitch-sealed ark floated securely—carrying Noah’s family and every living creature safe inside.',
        imageUrl: '/images/stories/noah-3.jpg',
        imageAlt: 'The sturdy wooden ark riding high waves beneath pouring rain',
        scriptureRefs: [
          { label: 'Genesis 7:11–12', chapterId: 'GEN-7', verseNumber: 11 },
          { label: 'Genesis 7:17–24', chapterId: 'GEN-7', verseNumber: 17 },
        ],
      },
      {
        id: 'noah-4',
        beatNumber: 4,
        title: 'God Remembers & Calms the Waters',
        narrative:
          'At last, Scripture says, “God remembered Noah.” A gentle wind swept across the flooded earth, the rains ceased, and the deep waters slowly began to recede. After five quiet months afloat, the heavy keel settled safely onto the high slopes of Mount Ararat under pale golden sunlight.',
        imageUrl: '/images/stories/noah-4.jpg',
        imageAlt: 'Calm sunrise light breaking over flat waters as mountain peaks emerge near the ark',
        scriptureRefs: [
          { label: 'Genesis 8:1–4', chapterId: 'GEN-8', verseNumber: 1 },
          { label: 'Genesis 8:5', chapterId: 'GEN-8', verseNumber: 5 },
        ],
      },
      {
        id: 'noah-5',
        beatNumber: 5,
        title: 'The Dove With the Olive Leaf',
        narrative:
          'To test whether dry ground had appeared in the valleys below, Noah opened the window and sent out a white dove. Twice she left; the second evening she fluttered back to Noah’s outstretched hand holding a freshly plucked green olive leaf in her beak—clear proof that new life was already budding outside.',
        imageUrl: '/images/stories/noah-5.jpg',
        imageAlt: 'Noah gently receiving a white dove carrying a fresh green olive twig',
        scriptureRefs: [
          { label: 'Genesis 8:8–11', chapterId: 'GEN-8', verseNumber: 11 },
          { label: 'Genesis 8:12', chapterId: 'GEN-8', verseNumber: 12 },
        ],
      },
      {
        id: 'noah-6',
        beatNumber: 6,
        title: 'The Rainbow Promise',
        narrative:
          'Once the soil dried, Noah built a simple stone altar to thank God for carrying them safely through the flood. In reply, God painted a radiant rainbow across the clearing clouds—promising never again to destroy the earth by water and inviting humanity into a fresh beginning of peace and stewardship.',
        imageUrl: '/images/stories/noah-6.jpg',
        imageAlt: 'A soft watercolor rainbow arcing over green hills beside a thanksgiving altar',
        scriptureRefs: [
          { label: 'Genesis 8:20', chapterId: 'GEN-8', verseNumber: 20 },
          { label: 'Genesis 9:12–16', chapterId: 'GEN-9', verseNumber: 13 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Faithful steps come before seeing the outcome',
        description:
          'Noah trusted God’s word and started building years before the first raindrop appeared. Steady obedience today prepares us for tomorrow’s storms.',
        anchorRef: { label: 'Genesis 6:22', chapterId: 'GEN-6', verseNumber: 22 },
      },
      {
        title: 'God never forgets those waiting inside the storm',
        description:
          'Even during long months when nothing seemed to change on the surface, God kept Noah in mind and brought quiet calm in His timing.',
        anchorRef: { label: 'Genesis 8:1', chapterId: 'GEN-8', verseNumber: 1 },
      },
      {
        title: 'Gratitude welcomes a new beginning',
        description:
          'Noah’s very first act on dry land was pausing to give thanks—reminding us to honor God before rushing back into busy life.',
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
    readingTimeMinutes: 4,
    coverImageUrl: '/images/stories/david-goliath-4.jpg',
    primaryChapterId: '1SA-17',
    summary:
      'When an intimidating bronze-clad champion paralyzed an entire army with fear, an overlooked young shepherd stepped onto the valley floor—not in heavy royal armor, but armed with trust in the living God.',
    beats: [
      {
        id: 'dg-1',
        beatNumber: 1,
        title: 'Two Camps Across the Valley of Elah',
        narrative:
          'The Philistine army and the soldiers of Israel pitched their tents on opposite hillsides above the rocky Valley of Elah. Every morning and evening for forty days, the valley echoed with tension while David’s older brothers stood nervously in the battle line and young David brought them bread and cheese from home.',
        imageUrl: '/images/stories/david-goliath-1.jpg',
        imageAlt: 'Two ancient armies encamped on facing hills above the Valley of Elah',
        scriptureRefs: [
          { label: '1 Samuel 17:1–3', chapterId: '1SA-17', verseNumber: 1 },
          { label: '1 Samuel 17:16–18', chapterId: '1SA-17', verseNumber: 16 },
        ],
      },
      {
        id: 'dg-2',
        beatNumber: 2,
        title: 'A Giant’s Boast Silences the Army',
        narrative:
          'Striding out between the lines stood Goliath of Gath—over nine feet tall, draped in bronze scale armor, carrying a massive spear and heavy shield. Hearing his thunderous challenge to single combat, seasoned soldiers backed away in dread, forgetting the God who had rescued Israel so many times before.',
        imageUrl: '/images/stories/david-goliath-2.jpg',
        imageAlt: 'Towering bronze-armored Goliath standing across the valley ridge before fearful troops',
        scriptureRefs: [
          { label: '1 Samuel 17:4–11', chapterId: '1SA-17', verseNumber: 4 },
          { label: '1 Samuel 17:24', chapterId: '1SA-17', verseNumber: 24 },
        ],
      },
      {
        id: 'dg-3',
        beatNumber: 3,
        title: 'Setting Aside Heavy Armor',
        narrative:
          'David stepped forward and volunteered to fight. King Saul dressed the young shepherd in his own bronze helmet and coat of mail, yet David could barely walk under the unfamiliar weight. Gently taking them off, he chose instead to go as himself—remembering how God had delivered him from lions and bears in the pastures.',
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
          'Walking down into the valley floor, David knelt beside a clear rushing brook and chose five smooth gray stones worn round by the current, tucking them neatly into his leather shepherd’s bag. With only his wooden staff and worn wool sling in hand, he walked calmly up to meet his towering opponent.',
        imageUrl: '/images/stories/david-goliath-4.jpg',
        imageAlt: 'Young shepherd David kneeling beside a clear stream choosing five smooth river stones',
        scriptureRefs: [
          { label: '1 Samuel 17:40', chapterId: '1SA-17', verseNumber: 40 },
          { label: '1 Samuel 17:42–44', chapterId: '1SA-17', verseNumber: 42 },
        ],
      },
      {
        id: 'dg-5',
        beatNumber: 5,
        title: 'Standing in the Name of the Lord',
        narrative:
          'Goliath mocked the shepherd boy, yet David answered boldly: “You come to me with a sword and a spear, but I come to you in the name of Yahweh of Armies.” Reaching into his pouch, David whirled one smooth stone through the air with practiced aim—bringing the boasting giant crashing down with a single shot.',
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
          'Seeing God’s deliverance through one small servant, fear evaporated across the hillsides. Israel’s demoralized soldiers cheered and rallied forward together—discovering that when one person trusts God boldly, quiet courage spreads to the whole community.',
        imageUrl: '/images/stories/david-goliath-6.jpg',
        imageAlt: 'Golden sunrise over the Valley of Elah as David lifts his shepherd staff in thanksgiving',
        scriptureRefs: [
          { label: '1 Samuel 17:51–52', chapterId: '1SA-17', verseNumber: 51 },
          { label: '1 Samuel 17:57–58', chapterId: '1SA-17', verseNumber: 57 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'You don’t need someone else’s armor to serve God',
        description:
          'Saul’s heavy bronze weighed David down. God uses your ordinary, everyday experiences—like David’s quiet days tending sheep—when you bring them faithfully to Him.',
        anchorRef: { label: '1 Samuel 17:39', chapterId: '1SA-17', verseNumber: 39 },
      },
      {
        title: 'Remember past rescues when facing today’s giant',
        description:
          'David faced Goliath with confidence because he remembered how God had protected him from the lion and bear long before anyone was watching.',
        anchorRef: { label: '1 Samuel 17:37', chapterId: '1SA-17', verseNumber: 37 },
      },
      {
        title: 'The battle belongs to God, not outward strength',
        description:
          'Size, loud boasting, and heavy weapons look decisive on the surface, yet God loves winning through humble, trusting hearts.',
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
    readingTimeMinutes: 4,
    coverImageUrl: '/images/stories/daniel-lions-4.jpg',
    primaryChapterId: 'DAN-6',
    summary:
      'Now an older statesman in Babylon, Daniel was so trustworthy that rivals could find no flaw in his work—so they targeted his daily habit of prayer instead, leading to a night among hungry lions.',
    beats: [
      {
        id: 'dan-1',
        beatNumber: 1,
        title: 'Steady Prayer by an Open Window',
        narrative:
          'In his eighties, Daniel served with rare wisdom and honesty at the heart of King Darius’s empire. Three times every single day—morning, noon, and evening—he went upstairs to his room, opened his arched windows toward distant Jerusalem, knelt down, and gave thanks to God just as he had done since youth.',
        imageUrl: '/images/stories/daniel-lions-1.jpg',
        imageAlt: 'Elder white-bearded Daniel kneeling serenely in prayer beside an arched window at sunrise',
        scriptureRefs: [
          { label: 'Daniel 6:3–4', chapterId: 'DAN-6', verseNumber: 4 },
          { label: 'Daniel 6:10', chapterId: 'DAN-6', verseNumber: 10 },
        ],
      },
      {
        id: 'dan-2',
        beatNumber: 2,
        title: 'A Jealous Plot Behind Palace Doors',
        narrative:
          'Envious officials searched Daniel’s records for bribery or carelessness and found none. So they flattered King Darius into signing an unbreakable thirty-day decree: anyone caught praying to any god or person except the king himself would be thrown into the den of lions.',
        imageUrl: '/images/stories/daniel-lions-2.jpg',
        imageAlt: 'Scheming officials whispering beneath carved sandstone arches with a royal scroll',
        scriptureRefs: [
          { label: 'Daniel 6:5–9', chapterId: 'DAN-6', verseNumber: 7 },
          { label: 'Daniel 6:11', chapterId: 'DAN-6', verseNumber: 11 },
        ],
      },
      {
        id: 'dan-3',
        beatNumber: 3,
        title: 'Lowered Into the Sealed Pit at Dusk',
        narrative:
          'Daniel heard about the signed law, walked straight home, and kept kneeling peacefully before God. Brokenhearted at being trapped by his own proud decree, King Darius tried until sunset to rescue his friend, then whispered a prayer as guards rolled a heavy stone over the den’s mouth: “May your God, whom you serve continually, rescue you!”',
        imageUrl: '/images/stories/daniel-lions-3.jpg',
        imageAlt: 'Calm elder Daniel descending into the stone pit as guards roll a heavy sealing stone',
        scriptureRefs: [
          { label: 'Daniel 6:14–16', chapterId: 'DAN-6', verseNumber: 16 },
          { label: 'Daniel 6:17', chapterId: 'DAN-6', verseNumber: 17 },
        ],
      },
      {
        id: 'dan-4',
        beatNumber: 4,
        title: 'Angels Quiet the Lions Through the Night',
        narrative:
          'While King Darius paced sleeplessly without food or music in his palace above, quiet peace filled the shadowy stone pit below. God sent His angel to shut the lions’ mouths completely, leaving the massive golden-maned beasts resting harmlessly like tame sheep beside Daniel until morning.',
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
          'At the very first streak of dawn, Darius hurried out to the stone den and called down with a trembling voice: “Daniel, servant of the living God, has your God been able to save you?” Out of the stillness rose Daniel’s calm, respectful reply: “O king, live forever! My God sent His angel and shut the lions’ mouths.”',
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
          'When guards lifted Daniel back into the morning sun, not a single scratch was found on him, because he had trusted in his God. Overjoyed, King Darius wrote to people of every nation across his realm honoring the living God whose kingdom never fades.',
        imageUrl: '/images/stories/daniel-lions-6.jpg',
        imageAlt: 'Joyous sunlit reunion as Daniel stands unharmed beside the relieved king',
        scriptureRefs: [
          { label: 'Daniel 6:23', chapterId: 'DAN-6', verseNumber: 23 },
          { label: 'Daniel 6:25–27', chapterId: 'DAN-6', verseNumber: 26 },
        ],
      },
    ],
    lessonsLearned: [
      {
        title: 'Quiet daily habits build crisis-ready courage',
        description:
          'Daniel didn’t invent courage on the day of the decree—it grew naturally out of decades of kneeling in prayer three times every day.',
        anchorRef: { label: 'Daniel 6:10', chapterId: 'DAN-6', verseNumber: 10 },
      },
      {
        title: 'Integrity leaves critics with nothing shameful to find',
        description:
          'Because Daniel worked honestly without cutting corners, his enemies could only attack his devotion to God—never his character.',
        anchorRef: { label: 'Daniel 6:4', chapterId: 'DAN-6', verseNumber: 4 },
      },
      {
        title: 'No sealed door can keep God’s care outside',
        description:
          'When human authority feels heavy or unfair, God steps right into the deepest pit beside those who trust Him.',
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
    readingTimeMinutes: 3,
    coverImageUrl: '/images/stories/good-samaritan-4.jpg',
    primaryChapterId: 'LUK-10',
    summary:
      'Asked “Who is my neighbor?”, Jesus told a vivid story set on the rocky desert road from Jerusalem down to Jericho—showing that true love bends down to help, regardless of labels or convenience.',
    beats: [
      {
        id: 'gs-1',
        beatNumber: 1,
        title: 'The Steep Road Down to Jericho',
        narrative:
          'A legal scholar asked Jesus where the boundary line for loving neighbors ends. Instead of giving a legal checklist, Jesus pictured the steep seventeen-mile desert trail plunging from golden Jerusalem cliffs down toward Jericho—a lonely canyon road famous for blind turns and hidden ambushes.',
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
          'Jesus described a lone traveler overtaken by bandits along that canyon pass. Stripped of his cloak and bruised by their blows, he lay stranded beside dusty boulders under the desert sun—helpless unless someone chose to stop.',
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
          'Soon a temple priest walked down the same road—followed later by a Levite helper. Both saw the wounded traveler clearly, yet each quietly crossed over to the far edge of the path and kept hurrying down the hill, leaving their fellow citizen behind.',
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
          'Then a Samaritan traveler—someone from a neighboring people long despised by the crowd listening to Jesus—came along the trail. Seeing the injured man, his heart moved with compassion. He knelt down in the dust, soothed his wounds with olive oil and wine, and bound them gently with clean cloth strips.',
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
          'Not rushing off once the bandages were tied, the Samaritan lifted the hurt stranger onto his own sure-footed donkey and walked beside him along the rocky heat—turning his personal schedule inside out to carry someone else’s weight.',
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
          'At dusk they reached a warm roadside inn, where the Samaritan stayed through the night and paid two days’ wages to the innkeeper the next morning—promising to cover any extra care on his return trip. Jesus looked gently at the scholar and said, “Go and do likewise.”',
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
        title: 'Love is measured by stopping, not status',
        description:
          'Religious titles or busy schedules mean little if we walk past someone hurting right in front of us.',
        anchorRef: { label: 'Luke 10:31–33', chapterId: 'LUK-10', verseNumber: 33 },
      },
      {
        title: 'Every person in need is our neighbor',
        description:
          'Jesus replaced “Who deserves my help?” with “Who can I show mercy to today?”—crossing old divisions and labels.',
        anchorRef: { label: 'Luke 10:36–37', chapterId: 'LUK-10', verseNumber: 36 },
      },
      {
        title: 'Compassion finishes what it starts',
        description:
          'The Samaritan didn’t stop at kind words; he gave his time, oil, donkey, and silver until his neighbor was truly safe.',
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
    readingTimeMinutes: 4,
    coverImageUrl: '/images/stories/prodigal-son-4.jpg',
    primaryChapterId: 'LUK-15',
    summary:
      'To show what God’s heart feels like when a wandering soul turns homeward, Jesus told one of the most tender stories ever spoken: of wasted treasure, honest repentance, and extravagant fatherly welcome.',
    beats: [
      {
        id: 'ps-1',
        beatNumber: 1,
        title: 'Asking to Leave Home Early',
        narrative:
          'A loving father had two sons. One day the younger son grew restless, asked for his share of the estate early, packed his belongings, and walked out from under his father’s shady courtyard arches toward a distant country—eager to live strictly by his own rules.',
        imageUrl: '/images/stories/prodigal-son-1.jpg',
        imageAlt: 'Silver-haired father standing gently beneath courtyard olive shade as his younger son departs',
        scriptureRefs: [
          { label: 'Luke 15:11–13', chapterId: 'LUK-15', verseNumber: 12 },
        ],
      },
      {
        id: 'ps-2',
        beatNumber: 2,
        title: 'Fast Living & Empty Pockets',
        narrative:
          'In that faraway city, silver coins slipped easily through the young man’s fingers on loud banquets, fine clothes, and noisy companions. Yet the moment a severe famine swept across the land and his last coins vanished, every fairweather friend quietly disappeared.',
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
          'Hungry and ashamed, he ended up tending muddy pigs—wishing he could eat even the pods tossed into the wooden troughs. Sitting alone under pale skies, he finally came to his senses: “Even my father’s hired workers have more bread than they can eat. I will rise, go home, and ask only to work as a servant.”',
        imageUrl: '/images/stories/prodigal-son-3.jpg',
        imageAlt: 'Ragged humble young man sitting beside muddy wooden troughs looking homeward',
        scriptureRefs: [
          { label: 'Luke 15:15–19', chapterId: 'LUK-15', verseNumber: 17 },
        ],
      },
      {
        id: 'ps-4',
        beatNumber: 4,
        title: 'Spotted From Afar & Met With a Sprint',
        narrative:
          'So he began the long dusty walk home, rehearsing his apology at every milestone. Yet while he was still a long way off down the cypress-lined road, his watching father caught sight of his silhouette, lifted his dignified robes, and sprinted straight down the hill to meet him.',
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
          'Before the ragged son could even finish asking to be hired as a servant, his father threw both arms warmly around his shoulders and kissed his face. Shame melted away in a single embrace—proving that love had been waiting on the doorstep every day he was gone.',
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
          'Calling the household together, the father clothed his son in the finest robe, slipped a family ring onto his finger, put sandals on his bare feet, and lit courtyard lanterns for a great feast—rejoicing aloud: “This son of mine was lost and is found!”',
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
        title: 'No mistake makes you too far gone to turn back',
        description:
          'No matter how far we drift or how messy our choices become, honest humility always opens the door toward home.',
        anchorRef: { label: 'Luke 15:17–18', chapterId: 'LUK-15', verseNumber: 17 },
      },
      {
        title: 'God doesn’t wait stiffly—He runs to meet returning hearts',
        description:
          'The father didn’t sit on the porch demanding proof first; his compassion moved him into a sprint while his child was still far off.',
        anchorRef: { label: 'Luke 15:20', chapterId: 'LUK-15', verseNumber: 20 },
      },
      {
        title: 'Grace restores identity, not just forgiveness',
        description:
          'The robe, ring, and sandals show that God welcomes repentant people back as beloved family, not second-class servants.',
        anchorRef: { label: 'Luke 15:22–24', chapterId: 'LUK-15', verseNumber: 22 },
      },
    ],
    reflectionPrompt:
      'Have you ever felt “too far off” to come back cleanly? What does the father’s running embrace tell you about God’s heart today?',
  },
];
