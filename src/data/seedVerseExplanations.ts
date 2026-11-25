import type { VerseExplanation } from '../types/bible';
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
import { JOB_CHAPTERS } from './books/jobChapters';
import { PSALMS_CHAPTERS } from './books/psalmsChapters';
import { DANIEL_CHAPTERS } from './books/danielChapters';

export const SEED_VERSE_EXPLANATIONS: Record<string, VerseExplanation> = {
  // ================= GENESIS 1 =================
  'GEN-1:1': {
    verseId: 'GEN-1:1',
    verseRef: 'Genesis 1:1',
    whatThisMeans:
      'In ancient cultures, people believed the world was an accident born from fighting gods. Genesis starts radically differently: one wise, powerful Creator (Hebrew: Elohim) purposefully brought time, sky, and earth into existence from nothing (bara).',
    lessonForYou:
      'Because God created the universe on purpose, your life is not random or accidental. The same Creator who launched the galaxies cares about the smallest details of your day.',
    tryThisAction: 'Step outside for 60 seconds today, look at the sky, and thank God for creating beauty you didn’t have to earn.',
    kidFriendlySummary:
      'Before there were any stars, oceans, puppies, or trees, God was already there! With just His voice, God happily painted the whole sky and built our home, Earth, out of nothing at all.',
  },
  'GEN-1:2': {
    verseId: 'GEN-1:2',
    verseRef: 'Genesis 1:2',
    whatThisMeans:
      'Before God shaped the earth, it was empty and dark like an unformed block of clay. The "Spirit of God" (Hebrew: Ruach—meaning wind or breath) hovered closely over the dark waters like an eagle watching over its nest.',
    lessonForYou:
      'Even when a chapter of your life feels messy, dark, or unfinished, God’s Spirit has not abandoned you—He is hovering close, preparing to bring order out of the chaos.',
    tryThisAction: 'Think of one chaotic situation on your mind right now and say a quick prayer: "Spirit of God, hover over this mess."',
    kidFriendlySummary:
      'At first, the Earth was dark and empty like a blank piece of drawing paper. But God’s gentle Spirit was right there above the water, getting ready to make something wonderful!',
  },
  'GEN-1:3': {
    verseId: 'GEN-1:3',
    verseRef: 'Genesis 1:3',
    whatThisMeans:
      'God didn’t struggle or sweat to create light—He simply spoke. Notice that light appears three days before the sun and stars, showing that God Himself is the true source of all brightness and truth.',
    lessonForYou:
      'Light always wins over darkness. No matter how heavy things feel, one word from God can brighten the darkest room.',
    tryThisAction: 'Send an encouraging text to someone who might be having a dark or heavy week.',
    kidFriendlySummary:
      'When it was super dark, God simply said, "Let there be light!"—and instantly bright, warm light shined everywhere! God’s voice is that powerful.',
  },
  'GEN-1:4': {
    verseId: 'GEN-1:4',
    verseRef: 'Genesis 1:4',
    whatThisMeans:
      'The Hebrew word for "good" (Tov) means functional, harmonious, and deeply pleasing. God carefully separated light from darkness to establish healthy boundaries and rhythms for life.',
    lessonForYou:
      'Healthy rhythms—knowing when to work and when to rest—reflect God’s very design for creation.',
    tryThisAction: 'Protect 15 minutes of screen-free quiet rest tonight to honor the boundary between day and night.',
    kidFriendlySummary:
      'God looked at the brand-new light and smiled because it was so good! He made sure light and dark each had their own turn.',
  },
  'GEN-1:5': {
    verseId: 'GEN-1:5',
    verseRef: 'Genesis 1:5',
    whatThisMeans:
      'In Hebrew reckoning, a day starts at sunset ("evening, and then morning"). Calling the day by name signified God’s loving ownership and order over time itself.',
    lessonForYou:
      'God begins each biblical day in the evening—meaning your tomorrow starts while you sleep, resting in God’s hands rather than your own hustle.',
    tryThisAction: 'Before going to bed tonight, write down tomorrow’s biggest worry and leave it with God so your day starts with rest.',
    kidFriendlySummary:
      'God named the bright part "Day" and the sleepy dark part "Night." That was the very first bedtime and morning ever!',
  },
  'GEN-4:7': {
    verseId: 'GEN-4:7',
    verseRef: 'Genesis 4:7',
    whatThisMeans:
      'Seeing Cain’s bitter anger, God steps in like a patient counselor before sin becomes a crime. Picture temptation like a wild animal crouching beside a tent door—powerful, eager to pounce, yet something Cain is still invited to master with a humbled heart.',
    lessonForYou:
      'Anger or jealousy isn’t the final chapter unless we invite it inside. Pause when comparison stings and ask God to help you rule your temper before words or actions hurt someone you love.',
    tryThisAction: 'Notice one spark of comparison today and replace it with an honest thank-you or encouragement for that person.',
    kidFriendlySummary:
      'When Cain felt grumpy and jealous of Abel, God kindly warned him, "Careful! Mean feelings are hiding like a lion at the door—don’t let them inside, ask Me to help you be strong and kind!"',
  },
  'GEN-16:13': {
    verseId: 'GEN-16:13',
    verseRef: 'Genesis 16:13',
    whatThisMeans:
      'Running away pregnant and broken-hearted in the desert, Hagar discovered she was not invisible to Heaven. She gave God the Hebrew name "El Roi"—"The God Who Sees Me"—becoming the only person in Scripture recorded naming God directly.',
    lessonForYou:
      'Whenever you feel pushed aside, unappreciated, or lonely, remember Hagar’s desert spring: God’s caring eyes track you even in places nobody else thinks to look.',
    tryThisAction: 'Take a quiet breath right now and pray: "El Roi—thank You that You see me clearly and care about every detail of my path today."',
    kidFriendlySummary:
      'When Hagar sat crying by a desert water well, God sent an angel with kind words and a promise—so Hagar gave God a special nickname: "The God Who Always Sees Me!"',
  },

  // ================= EXODUS 16 =================
  'EXO-16:11': {
    verseId: 'EXO-16:11',
    verseRef: 'Exodus 16:11',
    whatThisMeans:
      'Israel was camping in the barren Wilderness of Sin, terrified of starving. Even though the people were complaining angrily, God didn’t walk away—He spoke directly to Moses with a plan of grace.',
    lessonForYou:
      'God doesn’t wait until you have a perfect attitude before listening to you. He hears your fears and frustrations and responds with steady patience.',
    tryThisAction: 'Be completely honest with God today about one stress or complaint instead of hiding it.',
    kidFriendlySummary:
      'The people were hungry and grumpy in the hot desert, and Moses didn’t know how to feed everyone. So God whispered a special rescue plan to Moses!',
  },
  'EXO-16:12': {
    verseId: 'EXO-16:12',
    verseRef: 'Exodus 16:12',
    whatThisMeans:
      'God promised meat at twilight and bread in the morning so Israel would know "I am the LORD (Yahweh) your God." Provision wasn’t just about calories; it was about proving His personal covenant faithfulness.',
    lessonForYou:
      'Every good meal and daily breath is a quiet reminder that God has not forgotten your address.',
    tryThisAction: 'Before eating lunch or dinner today, pause for five full seconds to recognize God as your provider.',
    kidFriendlySummary:
      'God promised, "Tonight I will send tasty birds, and tomorrow morning you will wake up to sweet bread on the ground, so you’ll always know I take care of you!"',
  },
  'EXO-16:13': {
    verseId: 'EXO-16:13',
    verseRef: 'Exodus 16:13',
    whatThisMeans:
      'Migratory quail still fly across the Sinai Peninsula every spring and autumn; exhausted from crossing the Red Sea, flocks land right on the desert floor. God timed nature perfectly to cover the camp at dusk.',
    lessonForYou:
      'God can use both unexpected miracles and ordinary everyday timing to meet you right where you are camped.',
    tryThisAction: 'Look for one "ordinary miracle" in your schedule today—an unexpected kindness, green light, or helpful friend.',
    kidFriendlySummary:
      'Right at dinnertime, flocks of little birds called quail flew down around the tents, and when morning came, cool shiny dew covered the desert sand.',
  },
  'EXO-16:14': {
    verseId: 'EXO-16:14',
    verseRef: 'Exodus 16:14',
    whatThisMeans:
      'When the morning dew evaporated under the desert sun, delicate white flakes like hoarfrost appeared across the sand. They tasted like wafers made with honey and had to be gathered fresh every morning.',
    lessonForYou:
      'God’s help often arrives like morning dew—gentle, fresh for today, and meant to be gathered quietly before the noise of the day heats up.',
    tryThisAction: 'Take two quiet minutes tomorrow morning before checking notifications to gather strength from a Bible verse.',
    kidFriendlySummary:
      'When the sun dried up the dew, tiny white flakes that looked like frosty snow were sitting all over the desert floor—and they tasted sweet like honey crackers!',
  },
  'EXO-16:15': {
    verseId: 'EXO-16:15',
    verseRef: 'Exodus 16:15',
    whatThisMeans:
      'When the Israelites saw the strange flakes, they asked in Hebrew, "Man hu?" ("What is it?"). That surprised question became its name: Manna. God trained them for 40 years to trust Him daily instead of hoarding.',
    lessonForYou:
      'Sometimes God’s answers don’t look like what we expected—they make us ask "What is it?" Yet what He gives is always enough for today.',
    tryThisAction: 'Identify one worry about next month and practice trusting God only for what you need in the next 24 hours.',
    kidFriendlySummary:
      'Everyone pointed at the sweet white flakes and asked, "Man hu? What IS this stuff?!" And Moses smiled and said, "This is special bread from Heaven just for today!"',
  },

  // ================= RUTH 1 =================
  'RUT-1:15': {
    verseId: 'RUT-1:15',
    verseRef: 'Ruth 1:15',
    whatThisMeans:
      'In the ancient world, widows without sons had almost no financial security. Naomi lovingly urged Ruth to stay in her home country of Moab where she could remarry and be safe, rather than face poverty in Judah.',
    lessonForYou:
      'True love never traps people out of selfishness; Naomi cared about Ruth’s well-being even while drowning in her own grief.',
    tryThisAction: 'Put someone else’s comfort or safety ahead of your own convenience once today.',
    kidFriendlySummary:
      'Naomi was sad and walking a long way back home. She hugged Ruth and said, "Stay here with your family where it’s safe, okay?"',
  },
  'RUT-1:16': {
    verseId: 'RUT-1:16',
    verseRef: 'Ruth 1:16',
    whatThisMeans:
      'Ruth’s response is one of the most famous loyalty vows in history. Leaving behind her familiar culture and idols, she commits to Naomi and adopts Israel’s God out of selfless love (Hebrew: Chesed).',
    lessonForYou:
      'Faith isn’t only an internal feeling—it shows up when we refuse to abandon the people who need us most.',
    tryThisAction: 'Check in on a friend or family member who feels lonely or discouraged and remind them: "I’m walking with you."',
    kidFriendlySummary:
      'Ruth shook her head and hugged Naomi tight! "No way," Ruth said bravely. "Wherever you go, I’ll go with you! Your family will be my family, and your God will be my God!"',
  },
  'RUT-1:17': {
    verseId: 'RUT-1:17',
    verseRef: 'Ruth 1:17',
    whatThisMeans:
      'Ruth sealed her promise by calling on the covenant name of Israel’s God (Yahweh). Her commitment wasn’t a temporary favor—it was a lifelong promise of companionship through thick and thin.',
    lessonForYou:
      'Deep friendships and family loyalty are built on steady presence when things get hard, not just when times are sunny.',
    tryThisAction: 'Keep a promise or commitment you made earlier this week, even if it feels inconvenient right now.',
    kidFriendlySummary:
      'Ruth promised with all her heart that nothing would ever stop her from being Naomi’s loyal best friend and helper.',
  },
  'RUT-1:18': {
    verseId: 'RUT-1:18',
    verseRef: 'Ruth 1:18',
    whatThisMeans:
      'Seeing Ruth’s steadfast determination, Naomi stopped arguing and the two women walked roughly 50 miles up steep hills to Bethlehem ("House of Bread"), arriving right at the start of the barley harvest.',
    lessonForYou:
      'When you step forward with faithful love, God often prepares a harvest waiting at the end of a long, dusty road.',
    tryThisAction: 'Take one courageous small step today toward a goal or relationship you’ve been hesitant to pursue.',
    kidFriendlySummary:
      'Naomi saw how brave and kind Ruth was, so they held hands and walked all the way to the sunny fields of Bethlehem together!',
  },

  // ================= KEY GENESIS ANCHOR VERSES =================
  'GEN-1:27': {
    verseId: 'GEN-1:27',
    verseRef: 'Genesis 1:27',
    whatThisMeans:
      'In surrounding ancient kingdoms, only the king was called the "image of a god." Genesis radically declares that every single human—male and female—is crafted in God’s image (Tselem), carrying divine dignity and representing God on earth.',
    lessonForYou:
      'Your worth doesn’t come from your job title, grades, or followers; you bear the King’s image simply by being human—and so does every person you meet today.',
    tryThisAction: 'Treat someone who feels overlooked today (a barista, coworker, or neighbor) with the dignity due to an image-bearer of God.',
    kidFriendlySummary:
      'Out of all the dolphins, stars, and mountains, God made people extra special—to look like Him in how we love, create, and care for His world!',
  },
  'GEN-3:15': {
    verseId: 'GEN-3:15',
    verseRef: 'Genesis 3:15',
    whatThisMeans:
      'Known to scholars as the "Protoevangelium" (the first gospel). Right after Adam and Eve’s failure in Eden, God speaks directly to the serpent and promises that one day Eve’s descendant will deliver a fatal blow to evil, even while getting bruised in the process.',
    lessonForYou:
      'God didn’t abandon humanity at our very first mistake—He immediately launched a rescue plan spanning centuries.',
    tryThisAction: 'When you mess up today, run toward God’s mercy rather than hiding in the bushes like Adam and Eve did.',
    kidFriendlySummary:
      'Even when Adam and Eve broke the rule and felt sad, God gave a secret promise: one day a very special Hero from Eve’s family would defeat the sneaky snake forever!',
  },
  'GEN-9:13': {
    verseId: 'GEN-9:13',
    verseRef: 'Genesis 9:13',
    whatThisMeans:
      'In Hebrew, the word for rainbow ("Qeshet") is the exact same word used for a warrior’s battle bow. By placing His bow in the clouds pointing upward rather than at earth, God symbolically hangs up His weapon and pledges unending peace after the flood.',
    lessonForYou:
      'Rainbows aren’t merely pretty weather—they are God’s signature in the sky reminding you that His patience and mercy outlast every storm.',
    tryThisAction: 'Recall one stormy season in your past that God brought you safely through, and thank Him for His faithfulness.',
    kidFriendlySummary:
      'After the big rain stopped, God painted a giant colorful rainbow across the sky as His promise sticker: "I will always look after the Earth and never flood the whole world again!"',
  },
  'GEN-11:9': {
    verseId: 'GEN-11:9',
    verseRef: 'Genesis 11:9',
    whatThisMeans:
      'The builders at Babel used baked brick and tar to construct a massive ziggurat "to make a name for ourselves." By confusing their language (Hebrew: Balal), God dismantled self-worshiping pride before humanity could lock itself into tyranny.',
    lessonForYou:
      'Chasing fame or building monuments to our own ego always ends in confusion; true purpose comes when we let God make our lives meaningful.',
    tryThisAction: 'Choose one area where you’ve been trying to impress others and quietly offer it to God instead.',
    kidFriendlySummary:
      'People tried to stack bricks all the way up to heaven to show off how big they were! So God playfully mixed up their words so they had to spread out and make new homes around the world.',
  },
  'GEN-12:2': {
    verseId: 'GEN-12:2',
    verseRef: 'Genesis 12:2',
    whatThisMeans:
      'Unlike the Babel builders who tried to grab a great name by force, God freely promises 75-year-old Abram: "I will make your name great... and you will be a blessing." God blesses Abraham specifically so that blessing overflows to all nations.',
    lessonForYou:
      'God never blesses you just so you can hoard it—every gift, skill, and encouragement you receive is meant to pass through you to someone else.',
    tryThisAction: 'Turn one blessing you received this week (time, money, or encouragement) into a blessing for someone else today.',
    kidFriendlySummary:
      'God told Grandpa Abraham a wonderful secret: "Come follow Me on a big adventure, and I will bless your family so much that people all over the whole wide world will be blessed through you!"',
  },
  'GEN-15:6': {
    verseId: 'GEN-15:6',
    verseRef: 'Genesis 15:6',
    whatThisMeans:
      'Looking up at an uncountable canopy of desert stars while still childless, Abraham simply trusted God’s word. The Hebrew verb "he’emin" (believed) means "to lean your full weight upon"—and God credited that trust as right standing (righteousness).',
    lessonForYou:
      'Right relationship with God begins with trusting His promises, not with proving you’ve never made a mistake.',
    tryThisAction: 'Look up at the sky tonight and lean your weight on one biblical promise when doubts creep in.',
    kidFriendlySummary:
      'Even though Abraham didn’t have any kids yet, God showed him all the twinkling stars in the night sky and said, "Your family will be bigger than that!" And Abraham smiled and believed God.',
  },
  'GEN-22:8': {
    verseId: 'GEN-22:8',
    verseRef: 'Genesis 22:8',
    whatThisMeans:
      'Climbing Mount Moriah (later the very ridge of Jerusalem), Abraham tells Isaac "God will provide" (Hebrew: Yahweh Yireh—literally "The LORD will see to it"). Moments later, God rescues Isaac and provides a ram caught in the thicket.',
    lessonForYou:
      'In our deepest moments of surrender, God sees ahead before we even reach the mountaintop and prepares provision in advance.',
    tryThisAction: 'Release one tight grip on something you’re anxious about controlling, trusting "The LORD will see to it."',
    kidFriendlySummary:
      'Abraham trusted God with his whole heart up on the mountain, and right in time God sent a fluffy sheep caught in a bush so everyone went home safe and happy!',
  },
  'GEN-28:15': {
    verseId: 'GEN-28:15',
    verseRef: 'Genesis 28:15',
    whatThisMeans:
      'Jacob was a runaway trickster sleeping on a rock outdoors, expecting no help from heaven. Instead, God spoke at Bethel ("House of God") with an unconditional promise of presence: "I am with you and will watch over you wherever you go."',
    lessonForYou:
      'You don’t have to be in a church building—or have your life together—to meet God. He meets travelers even on cold stone pillows.',
    tryThisAction: 'Remember before stepping into an unfamiliar room or task today: "I am not walking in alone; God is with me here."',
    kidFriendlySummary:
      'Jacob was scared sleeping outside on a rock pillow all by himself, until he dreamed of a sparkly staircase reaching heaven and heard God whisper, "Don’t be scared—I am right here with you!"',
  },
  'GEN-50:20': {
    verseId: 'GEN-50:20',
    verseRef: 'Genesis 50:20',
    whatThisMeans:
      'Speaking in Egypt after decades of betrayal, slavery, and imprisonment, Joseph summarizes the entire book of Genesis: human sin is genuinely evil, yet God’s sovereignty is so skillful He weaves even human cruelty into life-saving redemption.',
    lessonForYou:
      'Nothing broken in your past is wasted in God’s hands. He specializes in turning painful pits into platforms for grace.',
    tryThisAction: 'Extend forgiveness—or release bitterness—toward someone whose past actions hurt you, trusting God’s bigger story.',
    kidFriendlySummary:
      'Joseph’s brothers were super sorry for being mean to him years ago, but Joseph gave them a giant bear hug and said, "Don’t worry! Even when things went wrong, God turned it into something good!"',
  },

  // ================= KEY EXODUS ANCHOR VERSES =================
  'EXO-3:14': {
    verseId: 'EXO-3:14',
    verseRef: 'Exodus 3:14',
    whatThisMeans:
      'In Hebrew, "Ehyeh-Asher-Ehyeh" ("I AM WHO I AM") means God is completely self-existent, never runs out of energy, and is actively present ("I WILL BE WITH YOU"). This is the root of God’s personal name Yahweh.',
    lessonForYou:
      'When you feel inadequate like Moses ("Who am I?"), God answers with who He is ("I AM with you"). Your confidence rests on His presence, not your resume.',
    tryThisAction: 'Replace one "I can’t" worry today with the quiet reminder: "The Great I AM is walking with me."',
    kidFriendlySummary:
      'Moses saw a desert bush glowing with warm fire that didn’t burn up, and God whispered His forever name: "I AM—and I am always with you!"',
  },
  'EXO-12:13': {
    verseId: 'EXO-12:13',
    verseRef: 'Exodus 12:13',
    whatThisMeans:
      'On Passover night, families painted lamb’s blood onto their wooden doorframes as a sign of trust. Inside, they ate a hurried meal in safety as judgment passed over them—a pattern later fulfilled by Jesus, "the Lamb of God."',
    lessonForYou:
      'Deliverance is received through humble trust, not earned by human perfection. Everyone sheltering under God’s promise walked out free.',
    tryThisAction: 'Take a moment today to thank God for rescuing and sheltering you in grace.',
    kidFriendlySummary:
      'On a very special starry night, families stayed cozy inside while God passed right over their homes and opened the door to freedom!',
  },
  'EXO-14:14': {
    verseId: 'EXO-14:14',
    verseRef: 'Exodus 14:14',
    whatThisMeans:
      'Backed against the deep waters of Yam Suph (Red Sea) with Pharaoh’s war chariots thundering behind them, Israel panicked. Moses spoke calmly: "Yahweh will fight for you, and you shall be still"—inviting faith before God parted the sea.',
    lessonForYou:
      'Being "still" doesn’t mean laziness; it means refusing to let panic dictate your choices while trusting God to open a road where none exists.',
    tryThisAction: 'Take three slow, calm breaths before reacting to a stressful message or problem today.',
    kidFriendlySummary:
      'When the sea was in front and scary chariots were behind, God told His people, "Hold steady and watch!" Then a big wind blew a dry path right through the ocean!',
  },
  'EXO-20:2': {
    verseId: 'EXO-20:2',
    verseRef: 'Exodus 20:2',
    whatThisMeans:
      'Crucially, the Ten Commandments start with rescue, NOT rules: "I am Yahweh who brought you out of slavery." God didn’t give commands so Israel could earn freedom; He gave loving boundaries to people He had already set free.',
    lessonForYou:
      'God’s instructions are protective guardrails along a mountain road, meant to keep your heart, rest, and relationships healthy and free.',
    tryThisAction: 'Honor one healthy boundary today—like protecting quiet rest or speaking complete honesty.',
    kidFriendlySummary:
      'Before giving His ten helpful family rules, God reminded Israel, "Remember how much I love you and rescued you!"',
  },
  'EXO-34:6': {
    verseId: 'EXO-34:6',
    verseRef: 'Exodus 34:6',
    whatThisMeans:
      'After Israel worshiped the golden calf, Moses asked to see God’s glory. God proclaimed His foundational self-portrait—quoted by David, Jonah, Joel, and Nehemiah—starting with "compassionate and gracious, slow to anger."',
    lessonForYou:
      'God isn’t waiting with a frown to catch you stumbling; His deepest reflex toward repentant people is patient mercy and steadfast love.',
    tryThisAction: 'Show "slow to anger" patience toward one frustrating person or delay today.',
    kidFriendlySummary:
      'Even after the people made a huge mistake, God told Moses His favorite description of Himself: "I am gentle, kind, patient, and full of love!"',
  },
  'EXO-40:34': {
    verseId: 'EXO-40:34',
    verseRef: 'Exodus 40:34',
    whatThisMeans:
      'The closing verses of Exodus fulfill God’s purpose from chapter 25: the Holy Creator doesn’t stay remote on Mount Sinai—His visible glory-cloud moves directly into the Tabernacle right in the center of Israel’s tents.',
    lessonForYou:
      'God isn’t far away in the clouds; He delights to pitch His tent right in the middle of your ordinary Tuesday.',
    tryThisAction: 'Dedicate one ordinary moment today—commuting, cooking, or studying—as a quiet meeting place with God.',
    kidFriendlySummary:
      'When the beautiful helper tent was finished, God’s shiny cloud floated right inside so everyone knew God was camping with them!',
  },
  'EXO-2:3': {
    verseId: 'EXO-2:3',
    verseRef: 'Exodus 2:3',
    whatThisMeans:
      'When hiding newborn Moses became impossible, Jochebed wove a papyrus basket ("tevah"—the exact Hebrew word used for Noah’s Ark) and waterproofed it with pitch, entrusting her child to God’s care on the Nile.',
    lessonForYou:
      'Quiet faithfulness at home—weaving what little safety you can and praying over it—can shape the deliverance of an entire generation.',
    tryThisAction: 'Entrust one worry about someone you love into God’s hands with a short prayer today.',
    kidFriendlySummary:
      'Moses’s mother made a tiny floating boat out of river reeds so God could keep her baby safe in the water!',
  },
  'EXO-17:12': {
    verseId: 'EXO-17:12',
    verseRef: 'Exodus 17:12',
    whatThisMeans:
      'Even Israel’s greatest leader grew too tired to hold up his staff alone. Aaron and Hur noticed, rolled over a stone for Moses to sit on, and held his arms steady until sunset so Israel prevailed below.',
    lessonForYou:
      'Leadership was never meant to be carried solo—sometimes the most spiritual thing you can do is hold someone else’s arms up.',
    tryThisAction: 'Send one encouraging message or step in to lighten a heavy load for a teammate or friend today.',
    kidFriendlySummary:
      'When Moses’s arms got too tired to hold up his walking stick, his friends Aaron and Hur stood beside him and held them up together!',
  },

  // ================= KEY LEVITICUS ANCHOR VERSES =================
  'LEV-9:23': {
    verseId: 'LEV-9:23',
    verseRef: 'Leviticus 9:23',
    whatThisMeans:
      'After seven days of careful preparation and ordination, Moses and Aaron stepped out of the Tent of Meeting together to speak blessing over Israel. Immediately, Yahweh’s glory appeared and heavenly fire accepted the sacrifice—confirming God welcomed their worship.',
    lessonForYou:
      'God doesn’t ask for ritual so we can earn His attention from afar; He delights to answer sincere worship with His welcoming presence.',
    tryThisAction: 'Speak a sincere word of blessing or gratitude over someone in your household today.',
    kidFriendlySummary:
      'Moses and Aaron came out of the special tent smiling and blessed all the people—and God’s bright glowing cloud smiled back over everyone!',
  },
  'LEV-16:30': {
    verseId: 'LEV-16:30',
    verseRef: 'Leviticus 16:30',
    whatThisMeans:
      'The Day of Atonement (Hebrew: Yom Kippur) was the annual cleansing of both sanctuary and people. One goat’s blood symbolized life given for atonement, while the second goat ("scapegoat") carried Israel’s confessed sins far away into the desert—never to return.',
    lessonForYou:
      'God’s forgiveness isn’t partial or temporary—when He cleanses guilt, He sends it so far away it never defines you again.',
    tryThisAction: 'Let go of one past regret you’ve already asked God to forgive, trusting you are clean before Him.',
    kidFriendlySummary:
      'Once every year on a special day called Yom Kippur, God washed everyone’s mistakes completely clean and sent them far away into the desert forever!',
  },
  'LEV-19:18': {
    verseId: 'LEV-19:18',
    verseRef: 'Leviticus 19:18',
    whatThisMeans:
      'Right in the middle of Leviticus’s holiness laws, God reveals what being holy actually looks like: refusing vengeance, dropping grudges, caring for the poor and stranger, and "loving your neighbor as yourself." Jesus quoted this exact verse as the second greatest commandment (Matthew 22:39).',
    lessonForYou:
      'Holiness isn’t harsh perfectionism or hiding away from people—true holiness smells like kindness, fairness, and everyday love for neighbors.',
    tryThisAction: 'Do one quiet, unannounced act of kindness for a neighbor, coworker, or roommate today.',
    kidFriendlySummary:
      'God’s favorite rule for being His special helpers is super easy to remember: don’t stay grumpy or pay back mean things—love your neighbor just like you love yourself!',
  },
  'LEV-25:10': {
    verseId: 'LEV-25:10',
    verseRef: 'Leviticus 25:10',
    whatThisMeans:
      'Every 50th year, the ram’s horn (Hebrew: Yovel / Jubilee) sounded across Israel to proclaim liberty: debts were forgiven, indentured workers went free, and lost family land returned home—ensuring no family stayed trapped in generational poverty.',
    lessonForYou:
      'God’s heart beats for fresh starts, mercy over debts, and restoring broken families back to freedom.',
    tryThisAction: 'Forgive a small debt, frustration, or annoyance someone owes you today as a tiny Jubilee gift.',
    kidFriendlySummary:
      'Every fifty years, everyone blew big joyful trumpets for a giant Reset Party! Every unpaid debt was erased and families went skipping back home free!',
  },
  'NUM-6:24': {
    verseId: 'NUM-6:24',
    verseRef: 'Numbers 6:24–26',
    whatThisMeans:
      'Before Israel breaks camp at Mount Sinai, God teaches Aaron and his sons the Aaronic Blessing—three expanding lines that invoke Yahweh’s protection, radiant favor ("make his face shine"), and wholeness (shalom).',
    lessonForYou:
      'You are not meant to walk through wilderness seasons carrying only your own strength; God delights to put His name and peace over ordinary people.',
    tryThisAction:
      'Speak Numbers 6:24–26 slowly as a quiet blessing over someone you love or worry about today.',
    kidFriendlySummary:
      'God gave the priests special shining words to remind His whole family: “God is smiling on you, guarding you, and wrapping you in peace!”',
  },
  'NUM-13:30': {
    verseId: 'NUM-13:30',
    verseRef: 'Numbers 13:30',
    whatThisMeans:
      'Ten scouts measure the walled cities and giant Anakim in Canaan against their own smallness, spreading panic at Kadesh Barnea. Caleb quiets the crowd because he measures the obstacles against God’s proven faithfulness.',
    lessonForYou:
      'Faith does not pretend hard problems are easy—Caleb saw the same giants—but it refuses to let fear erase what God has already promised.',
    tryThisAction:
      'Name one oversized worry in front of you and pair it with one true reminder of how God has carried you before.',
    kidFriendlySummary:
      'Ten explorers said, “The giants are way too big!” Only Caleb and Joshua shouted, “God is way bigger—let’s be brave and go!”',
  },
  'NUM-17:8': {
    verseId: 'NUM-17:8',
    verseRef: 'Numbers 17:8',
    whatThisMeans:
      'To end bitter rivalry over priestly leadership after Korah’s rebellion, God places twelve cut tribal staffs inside the Tent of Meeting overnight. Only Aaron’s dead almond rod bursts with life, proving spiritual authority flows from God’s life-giving grace.',
    lessonForYou:
      'Real spiritual fruit comes from God’s quiet work in dead places rather than loud human striving for status.',
    tryThisAction:
      'Release one temptation to prove your worth by comparison and ask God to grow quiet, nourishing fruit through you.',
    kidFriendlySummary:
      'Every leader put a dry wooden stick in the Tent overnight, and in the morning Aaron’s stick had sprouted green leaves, pink flowers, and crunchy almonds!',
  },
  'NUM-21:9': {
    verseId: 'NUM-21:9',
    verseRef: 'Numbers 21:9',
    whatThisMeans:
      'On the exhausting detour around Edom, God instructs Moses to lift a bronze serpent onto a standard. Healing required no magic ritual—only turning one’s eyes upward in humble trust toward God’s provided sign (which Jesus later points to in John 3:14).',
    lessonForYou:
      'Even when our own impatience brings consequences, God meets a single upward glance of trust with immediate mercy.',
    tryThisAction:
      'Instead of spiraling over a mistake, look honestly to God in a short prayer and receive His fresh start.',
    kidFriendlySummary:
      'When people looked up in faith at the shiny bronze snake Moses lifted high on a pole, God healed them right away!',
  },
  'NUM-24:17': {
    verseId: 'NUM-24:17',
    verseRef: 'Numbers 24:17',
    whatThisMeans:
      'King Balak hired the renowned seer Balaam to curse Israel from Moab’s ridges, yet God hijacked every oracle into blessing—culminating in a vision of a bright Star and Scepter rising out of Israel.',
    lessonForYou:
      'No human plot or anxious headline can cancel the quiet purposes of God; He can even turn intended curses into future hope.',
    tryThisAction:
      'Trade one anxious "what if" for quiet confidence that God’s story is still steering toward the Light.',
    kidFriendlySummary:
      'A greedy king wanted Balaam to say mean words over Israel, but God filled Balaam’s mouth with bright blessings and a promise about a shining Star King!',
  },
  'NUM-27:7': {
    verseId: 'NUM-27:7',
    verseRef: 'Numbers 27:7',
    whatThisMeans:
      'Mahlah, Noah, Hoglah, Milcah, and Tirzah respectfully challenge an unfair gap in custom when their father Zelophehad dies with no sons. Moses brings their plea to God, who rules "The daughters of Zelophehad speak what is right" and enacts permanent inheritance protection.',
    lessonForYou:
      'Faithful courage doesn’t mean staying silent about injustice; God welcomes honest questions brought reverently into His presence.',
    tryThisAction:
      'Look for one quiet place where someone’s voice is overlooked and make room for them to be heard with kindness.',
    kidFriendlySummary:
      'Five brave sisters asked Moses if they could keep their family’s land—and God smiled and said, “They are right! Change the rule so it’s fair!”',
  },
  'NUM-16:3': {
    verseId: 'NUM-16:3',
    verseRef: 'Numbers 16:3',
    whatThisMeans:
      'Korah already carried the Tabernacle’s most sacred vessels, yet he accused Moses and Aaron of hoarding leadership. Numbers 26:11 later adds a tender detail: Korah’s children did not join the ruin and grew up to author joyful Temple Psalms.',
    lessonForYou:
      'Envy blinds us to the meaningful work God already placed in our hands—while our family’s story is never locked into someone else’s failure.',
    tryThisAction: 'Thank God specifically for one quiet responsibility you already carry today instead of comparing roles.',
    kidFriendlySummary:
      'Korah had an important job helping carry God’s tent treasures, yet grew jealous anyway—but God kindly spared his kids, who later wrote happy songs in the Bible!',
  },
  'DEU-6:5': {
    verseId: 'DEU-6:5',
    verseRef: 'Deuteronomy 6:4–5',
    whatThisMeans:
      'Known as the Shema ("Hear!"), these verses anchor Jewish worship morning and night. In ancient Hebrew, "heart" means mind and will, "soul" means whole life-breath, and "might" means every ounce of strength and resource—all united in loving the One God.',
    lessonForYou:
      'Faith isn’t one tiny compartment on Sunday mornings; loving God belongs naturally in kitchen conversations, daily walks, and resting at night.',
    tryThisAction:
      'Pause once before a meal or walk and whisper Deuteronomy 6:4–5 as a quiet reset for your whole heart.',
    kidFriendlySummary:
      'God doesn’t want pretend love—He invites us to love Him with our whole heart, thoughts, energy, and everyday family fun!',
  },
  'DEU-8:3': {
    verseId: 'DEU-8:3',
    verseRef: 'Deuteronomy 8:3',
    whatThisMeans:
      'Looking back on forty years of wilderness manna, Moses explains why God didn’t give Israel farms right away: to show that food and security alone cannot keep human souls alive without trusting the sustaining word of God (quoted by Jesus in Matthew 4:4).',
    lessonForYou:
      'Gratitude protects our hearts when life gets comfortable; remembering who provides keeps abundance from making us forgetful.',
    tryThisAction:
      'Thank God specifically for three ordinary daily provisions—food, breath, and a word of encouragement.',
    kidFriendlySummary:
      'God rained sweet manna bread in the desert to show kids and grownups that trusting His kind words matters even more than snacks!',
  },
  'DEU-15:11': {
    verseId: 'DEU-15:11',
    verseRef: 'Deuteronomy 15:11',
    whatThisMeans:
      'Every seven years, Israel canceled unpaid debts (Deut 15:1–2). Moses anticipates the greedy fear of lending right before Year Seven and urges open-handed generosity that trusts God to bless the giver.',
    lessonForYou:
      'Fear counts how little might be left; love looks for open-handed ways to lift someone else’s burden.',
    tryThisAction:
      'Do one generous, uncalculated act of kindness—tip extra, share lunch, or forgive a small debt.',
    kidFriendlySummary:
      'God told His family: “Don’t squeeze your fist shut when someone needs help—open your hands wide and share cheerfully!”',
  },
  'DEU-30:19': {
    verseId: 'DEU-30:19',
    verseRef: 'Deuteronomy 30:19',
    whatThisMeans:
      'As his final covenant sermon wraps up on the Plains of Moab, Moses presents two clear paths: faithfulness leading to flourishing life, or turning away toward ruin. Even after future exile (30:1–10), God promises mercy the moment hearts turn back.',
    lessonForYou:
      'Every ordinary day holds small choices toward life—honesty, love, forgiveness, and clinging close to God.',
    tryThisAction:
      'Pick the "choose life" option in one tricky decision or conversation today.',
    kidFriendlySummary:
      'Moses held out two paths like a loving grandpa: “Pick the bright road of loving God and choosing life!”',
  },
  'DEU-31:8': {
    verseId: 'DEU-31:8',
    verseRef: 'Deuteronomy 31:8',
    whatThisMeans:
      'At 120 years old, Moses knows he will not cross the Jordan—yet Joshua does not step forward alone. "He goes before you" means God scouts ahead of every unknown chapter and never abandons His people mid-journey.',
    lessonForYou:
      'Courage doesn’t come from knowing how every detail turns out; it comes from knowing who walks right beside you.',
    tryThisAction:
      'Write down one intimidating task ahead and read Deuteronomy 31:8 aloud over it.',
    kidFriendlySummary:
      'When Joshua felt nervous about leading a giant nation, Moses hugged him and said, “Don’t be scared—God is already walking ahead of you!”',
  },
  'DEU-34:10': {
    verseId: 'DEU-34:10',
    verseRef: 'Deuteronomy 34:10',
    whatThisMeans:
      'The final tribute to Moses honors him not primarily as a conqueror or miracle worker, but as a friend whom Yahweh knew "face to face"—anticipating a future Prophet greater still (Deut 18:15).',
    lessonForYou:
      'The deepest measure of a life is walking honestly and closely in friendship with God.',
    tryThisAction:
      'Spend two unhurried minutes talking honestly with God as a friend.',
    kidFriendlySummary:
      'God led Moses up quiet Mount Nebo, showed him the whole green Promised Land, and held onto His friend forever.',
  },
  'JOS-1:9': {
    verseId: 'JOS-1:9',
    verseRef: 'Joshua 1:9',
    whatThisMeans:
      'Replacing a giant like Moses could intimidate anyone, especially beside a raging spring-flooded Jordan River. Notice God does not say "because you are strong enough," but roots Joshua’s courage strictly in "Yahweh your God is with you wherever you go."',
    lessonForYou:
      'Biblical courage isn’t pretending you have zero butterflies—it is moving ahead with steady trust because God goes into the new room with you.',
    tryThisAction:
      'Speak Joshua 1:9 aloud before starting the hardest conversation or task on your calendar today.',
    kidFriendlySummary:
      'Joshua felt super nervous taking Moses’s place, so God promised: “Be brave! I’m holding your hand wherever you step!”',
  },
  'JOS-2:11': {
    verseId: 'JOS-2:11',
    verseRef: 'Joshua 2:11',
    whatThisMeans:
      'Amazingly, the first clear confession of Israel’s God inside Canaan comes from Rahab, a marginalized Canaanite woman. Her faith led to action—protecting the spies, securing her parents and siblings behind a scarlet cord, and later entering King David’s and Jesus’s genealogy (Matthew 1:5).',
    lessonForYou:
      'No past reputation puts anyone outside God’s grace; one brave step of faith can rewrite an entire family’s future.',
    tryThisAction:
      'Extend unexpected kindness to someone outside your usual circle today.',
    kidFriendlySummary:
      'Even in walled Jericho, Rahab believed God was real and hung a bright red cord in her window so her whole family stayed safe!',
  },
  'JOS-4:7': {
    verseId: 'JOS-4:7',
    verseRef: 'Joshua 4:6–7',
    whatThisMeans:
      'God asked twelve people to haul heavy river stones to dry ground at Gilgal specifically to spark kids’ curiosity ("When your children ask in time to come, What do these stones mean?"). Faith grows strongest when families keep tangible reminders of past faithfulness.',
    lessonForYou:
      'Memory fuels future courage; remembering past answered prayers steadies us when today’s river looks high.',
    tryThisAction:
      'Share one specific story with a friend or family member about how God helped you through a past hard season.',
    kidFriendlySummary:
      'Each tribe carried a big smooth stone out of the dry river to stack a giant "Remember What God Did!" tower!',
  },
  'JOS-6:20': {
    verseId: 'JOS-6:20',
    verseRef: 'Joshua 6:20',
    whatThisMeans:
      'Jericho’s ancient walls didn’t fall to clever military engineering; Israel marched silently with the Ark—their sign of God’s presence—for six days before blowing worship trumpets on the seventh. The unusual plan made it unmistakable that God Himself won the breakthrough.',
    lessonForYou:
      'Sometimes faithfulness looks quietly repetitive before any wall budges; keep showing up with patient trust.',
    tryThisAction:
      'Stay faithful for one more day on a good habit or quiet prayer that hasn’t shown quick results yet.',
    kidFriendlySummary:
      'Marching quietly around the big walls looked silly at first—until day seven, when the trumpets blew and down came the stones while Rahab’s family stayed safe!',
  },
  'JOS-14:12': {
    verseId: 'JOS-14:12',
    verseRef: 'Joshua 14:12',
    whatThisMeans:
      'At age 85, Caleb reminds Joshua of Moses’s promise forty-five years earlier at Kadesh Barnea. Instead of picking soft flat farmland, Caleb asks for rugged Hebron—confident that the same God who kept him alive through forty desert years is still strong today.',
    lessonForYou:
      'Purpose doesn’t expire with age; wholehearted trust keeps eyes open for meaningful ways to love and build in every season.',
    tryThisAction:
      'Encourage an older mentor today—or step toward one meaningful goal you thought you had aged out of.',
    kidFriendlySummary:
      'Grandpa Caleb at 85 still had huge adventure energy—he cheered, “Give me that mountain, because God is still with me!”',
  },
  'JOS-24:15': {
    verseId: 'JOS-24:15',
    verseRef: 'Joshua 24:15',
    whatThisMeans:
      'In the valley between Ebal and Gerizim at Shechem, aging Joshua calls Israel out of half-hearted drift. Serving God isn’t automatic by heritage; every generation chooses fresh loyalty—and Joshua leads by staking his own home first.',
    lessonForYou:
      'Faith thrives on clear daily choices rather than drifting along with the crowd around us.',
    tryThisAction:
      'Set one small visible cue in your home (a verse card, dinner prayer, or gratitude question) anchoring who your household follows.',
    kidFriendlySummary:
      'Old Joshua smiled at all the families and said, “Everyone has to pick who to follow—and in our house, we choose God!”',
  },
  'JDG-4:14': {
    verseId: 'JDG-4:14',
    verseRef: 'Judges 4:14',
    whatThisMeans:
      'Israel’s tribes felt terrified of Sisera’s 900 iron chariots on the valley floor. Deborah—both a recognized prophetess and trusted community judge—spoke with steady faith because she saw God already moving ahead of Barak down Mount Tabor.',
    lessonForYou:
      'True spiritual encouragement helps anxious friends look past intimidating obstacles to the God who walks out ahead of them.',
    tryThisAction:
      'Send one brief, specific word of encouragement today to someone facing an overwhelming task.',
    kidFriendlySummary:
      'Wise Deborah cheered Barak on before the big battle: “Let’s go—God is already leading the way down the hill!”',
  },
  'JDG-6:14': {
    verseId: 'JDG-6:14',
    verseRef: 'Judges 6:14',
    whatThisMeans:
      'When God greeted Gideon as a "mighty man of valor," Gideon was literally hiding inside a rock-cut winepress hoping raiders wouldn’t spot his wheat! Notice God’s secret: Gideon’s might isn’t self-confidence—it is simply "Haven’t I sent you?"',
    lessonForYou:
      'God sees what He is shaping in you even while you still feel small, unsure, and ordinary.',
    tryThisAction:
      'Take one small step of obedience today even if you still feel timid—trusting the One who sends you.',
    kidFriendlySummary:
      'Gideon was hiding because he felt super scared, and God smiled and said, “You’re braver than you think because I am sending you!”',
  },
  'JDG-7:7': {
    verseId: 'JDG-7:7',
    verseRef: 'Judges 7:7',
    whatThisMeans:
      'Israel loved counting big armies, so God deliberately narrowed 32,000 fighters down to 300 attentive soldiers holding clay pitchers, torches, and ram’s-horn trumpets. The unusual strategy made sure everyone knew God rescued Israel by grace, not human bragging.',
    lessonForYou:
      'Weakness isn’t an obstacle for God—it clears away ego so light can shine clearly through fragile jars.',
    tryThisAction:
      'Offer one limited skill or small resource to God today instead of waiting until you feel bigger or ready.',
    kidFriendlySummary:
      'God shrink-rayed the huge army down to 300 sleepy-eyed soldiers with clay pots and glowing torches so everyone knew God did the miracle!',
  },
  'JDG-13:5': {
    verseId: 'JDG-13:5',
    verseRef: 'Judges 13:5',
    whatThisMeans:
      'Before Samson ever touched a Philistine gate, God graciously visited an ordinary couple in Zorah with hope. Calling Samson a lifelong Nazirite marked him as set apart for God’s liberating purpose even from the womb.',
    lessonForYou:
      'Even when an entire culture feels dark or stalled, God quietly prepares fresh hope long before headlines change.',
    tryThisAction:
      'Pray gratefully for a child, student, or younger neighbor today, asking God to nurture good purpose in them.',
    kidFriendlySummary:
      'Before baby Samson was even born, an angel visited his mom and dad with a glowing promise that God had big rescue plans!',
  },
  'JDG-16:28': {
    verseId: 'JDG-16:28',
    verseRef: 'Judges 16:28',
    whatThisMeans:
      'Samson’s life mixed breathtaking Spirit-filled strength with painful selfishness. Yet blinded and chained inside Dagon’s temple, he finally stops relying on himself and whispers a humble prayer—"Remember me, please!"—earning a place in Hebrews 11’s hall of faith.',
    lessonForYou:
      'No failure is too tangled for honest prayer; God delights to meet humble repentance with fresh mercy.',
    tryThisAction:
      'Bring one honest regret to God in simple prayer today and ask for His grace to finish well.',
    kidFriendlySummary:
      'Even after Samson made big mistakes, he prayed humbly one more time—and kind God heard him and helped him!',
  },
  'RUT-2:12': {
    verseId: 'RUT-2:12',
    verseRef: 'Ruth 2:12',
    whatThisMeans:
      'Without realizing she will soon echo this exact image back to him in Chapter 3, Boaz praises Ruth’s sacrificial love for Naomi—comparing her trust in Israel’s God to a young bird sheltering beneath wide protective wings.',
    lessonForYou:
      'Ordinary acts of everyday faithfulness rarely stay unseen; God notices quiet loyalty and delights to shelter those who care for others.',
    tryThisAction:
      'Notice and thank one quiet helper in your day whose kindness usually goes unapplauded.',
    kidFriendlySummary:
      'Kind farmer Boaz blessed Ruth: “God saw how loving you’ve been to Naomi—like a little bird safe under His warm wings!”',
  },
  'RUT-3:11': {
    verseId: 'RUT-3:11',
    verseRef: 'Ruth 3:11',
    whatThisMeans:
      'Boaz calls Ruth "a worthy woman" (Hebrew: eshet chayil—the very phrase crowning Proverbs 31!). Rather than taking advantage of a vulnerable widow in the dark, he honors her reputation and pledges fair legal redemption at the morning gate.',
    lessonForYou:
      'True strength protects dignity, keeps promises carefully, and leaves people safer than it found them.',
    tryThisAction:
      'Stand up thoughtfully for someone’s dignity or fair treatment in a small detail today.',
    kidFriendlySummary:
      'Boaz promised kindly, “Don’t be afraid, Ruth! Everyone in town knows how good and brave you are—I’ll take care of everything fairly!”',
  },
  'RUT-4:14': {
    verseId: 'RUT-4:14',
    verseRef: 'Ruth 4:14',
    whatThisMeans:
      'In Ruth 1, Naomi felt empty and called herself Mara ("Bitter"). Here in Ruth 4, the neighborhood women celebrate that God never left her without a redeemer (go’el)—placing baby Obed on Naomi’s lap as grandfather of King David!',
    lessonForYou:
      'What feels like chapter one’s emptiness is never the final page when God’s quiet providence weaves behind ordinary kindness.',
    tryThisAction:
      'Recall one past difficult season that eventually opened a surprising blessing, and give thanks today.',
    kidFriendlySummary:
      'Grandma Naomi hugged baby Obed and smiled so big! God turned all her tears into a joyful family leading straight to King David!',
  },
  '1SA-3:10': {
    verseId: '1SA-3:10',
    verseRef: '1 Samuel 3:10',
    whatThisMeans:
      'In a season when God’s word seemed quiet and Shiloh’s priests had grown dull, God woke young Samuel personally. On old Eli’s advice, Samuel replaced running around with attentive stillness: "Speak, for your servant hears."',
    lessonForYou:
      'God speaks gently to attentive, humble listeners—no matter how young or ordinary we feel.',
    tryThisAction:
      'Begin two quiet minutes today with Samuel’s six-word prayer: "Speak, Lord, for your servant hears."',
    kidFriendlySummary:
      'Three times boy Samuel thought Eli called him at night—until Eli whispered, “Next time, say: Speak, God, I’m listening!”',
  },
  '1SA-7:12': {
    verseId: '1SA-7:12',
    verseRef: '1 Samuel 7:12',
    whatThisMeans:
      'Samuel placed a memorial stone between Mizpah and Shen after Israel’s sincere repentance brought rescue, naming it Ebenezer ("Stone of Help")—celebrating both past faithfulness ("until now") and confidence for whatever road lies ahead.',
    lessonForYou:
      'Gratitude looks backward honestly so hope can look forward steadily.',
    tryThisAction:
      'Name one "Ebenezer" moment in your life this past year where God unexpectedly carried you through.',
    kidFriendlySummary:
      'Samuel stacked a big "Thank You" rock called Ebenezer to remind everyone: “God has helped us all the way up to today!”',
  },
  '1SA-16:7': {
    verseId: '1SA-16:7',
    verseRef: '1 Samuel 16:7',
    whatThisMeans:
      'Even seasoned prophet Samuel assumed tall, impressive Eliab looked like a king. God corrected him immediately: external strength (like Saul’s height!) never equals inward faithfulness, so God chose overlooked youngest shepherd David.',
    lessonForYou:
      'While social feeds measure status, looks, and applause, God treasures integrity, tenderness, and quiet faithfulness inside your heart.',
    tryThisAction:
      'Look past surface appearances with one person today—listening patiently to understand their heart.',
    kidFriendlySummary:
      'God told Samuel, “Grownups look at how tall or flashy someone seems, but I look straight inside their loving heart!”',
  },
  '1SA-17:45': {
    verseId: '1SA-17:45',
    verseRef: '1 Samuel 17:45',
    whatThisMeans:
      'David didn’t walk into the Valley of Elah boasting about his sling aim; he contrasted Goliath’s towering spear and bronze armor with "the name of Yahweh of Armies." David’s courage came from remembering who stood on Israel’s side.',
    lessonForYou:
      'True bravery doesn’t shrink giants down in your imagination—it brings God’s greatness right into the valley beside you.',
    tryThisAction:
      'Face one task you’ve been putting off this week with quiet trust in God’s help rather than fear.',
    kidFriendlySummary:
      'Young shepherd David didn’t wear heavy armor—he smiled at the giant and trusted God’s mighty name with five smooth river stones!',
  },
  '1SA-23:16': {
    verseId: '1SA-23:16',
    verseRef: '1 Samuel 23:16',
    whatThisMeans:
      'Hidden in the woods of Ziph while hunted by King Saul, exhausted David receives a secret visit from Saul’s own son. Notice Jonathan didn’t merely cheer David up emotionally—he "strengthened his hand in God," reminding David of God’s promise.',
    lessonForYou:
      'The finest gift a loyal friend brings during dark weeks is gently reminding a tired friend that God hasn’t forgotten them.',
    tryThisAction:
      'Reach out to a discouraged friend today with a warm note or prayer that strengthens their heart.',
    kidFriendlySummary:
      'Prince Jonathan snuck into the forest to hug his best friend David and remind him, “Don’t give up—God is still keeping His promise!”',
  },
  '1SA-25:32': {
    verseId: '1SA-25:32',
    verseRef: '1 Samuel 25:32',
    whatThisMeans:
      'Hot anger nearly pushed David into shedding innocent blood over an insult. Wise Abigail brought generous food, spoke with courageous humility, and reminded David of his future calling—so David praised God for sending a peacemaker to stop him!',
    lessonForYou:
      'Real wisdom welcomes honest friends who slow us down before anger writes regrets we cannot undo.',
    tryThisAction:
      'Pause ten deep seconds before replying to an irritating message today, choosing peacemaking over payback.',
    kidFriendlySummary:
      'Smart, kind Abigail packed fresh loaves and raisins and helped angry David calm down and choose peace instead of fighting!',
  },
  '2SA-6:14': {
    verseId: '2SA-6:14',
    verseRef: '2 Samuel 6:14–15',
    whatThisMeans:
      'Bringing the Ark up to Jerusalem wasn’t stiff royal pomp—David laid aside heavy royal robes for a simple linen priestly tunic and danced joyfully before God, sharing sweet bread and dates with every man and woman present.',
    lessonForYou:
      'Real worship doesn’t perform for dignity points; gratitude is free to celebrate God’s nearness wholeheartedly.',
    tryThisAction:
      'Celebrate one ordinary good gift today out loud—through music, gratitude, or sharing food with a friend.',
    kidFriendlySummary:
      'King David was so happy bringing God’s Ark home that he leaped and danced down the street and shared sweet raisin cakes with everyone!',
  },
  '2SA-7:16': {
    verseId: '2SA-7:16',
    verseRef: '2 Samuel 7:16',
    whatThisMeans:
      'David wanted to build God a cedar house; God flipped the script and promised to build David an everlasting house ("Your throne will be established forever"). That promise sustains hope all the way to Luke 1:32–33 when Gabriel speaks to Mary.',
    lessonForYou:
      'God’s generosity always outpaces our smallest plans; before we build things for Him, He builds unshakable grace around us.',
    tryThisAction:
      'Take one ambitious worry today and trade it for quiet awe at how faithfully God keeps long-term promises.',
    kidFriendlySummary:
      'David wanted to build God a shiny house, and God smiled: “Surprise! I’m going to make YOUR family a forever kingdom!”',
  },
  '2SA-9:7': {
    verseId: '2SA-9:7',
    verseRef: '2 Samuel 9:7',
    whatThisMeans:
      'Ancient new kings normally eliminated all grandchildren of the previous dynasty. Instead, David hunts down crippled Mephibosheth—who expects execution—speaks "Don’t be afraid!", restores his fields, and seats him at the king’s own dinner table for life.',
    lessonForYou:
      'Covenant kindness (chesed) remembers people everyone else forgot and gives them a secure seat at the table.',
    tryThisAction:
      'Look around today for someone standing on the sidelines and intentionally invite them in.',
    kidFriendlySummary:
      'Jonathan’s son Mephibosheth felt scared and shy, so King David hugged him: “Don’t be afraid—you get your own seat at my dinner table forever!”',
  },
  '2SA-12:13': {
    verseId: '2SA-12:13',
    verseRef: '2 Samuel 12:13',
    whatThisMeans:
      'Unlike Saul—who kept inventing excuses when confronted in 1 Samuel 15—David offers zero spin once Nathan points his parable home: simply "I have sinned against Yahweh." Out of that broken confession came Psalm 51 ("Create in me a clean heart").',
    lessonForYou:
      'Freedom starts the moment we drop our defenses; God meets raw, honest confession with immediate forgiveness even when earthly consequences remain.',
    tryThisAction:
      'Practice quick, excuse-free honesty today if you realize you hurt or overlooked someone.',
    kidFriendlySummary:
      'When prophet Nathan told a story showing David he’d been unfair, David didn’t make excuses—he said “I’m sorry, God,” and God forgave him!',
  },
  '2SA-24:24': {
    verseId: '2SA-24:24',
    verseRef: '2 Samuel 24:24',
    whatThisMeans:
      'When Araunah generously offers his hilltop threshing floor and oxen free of charge, David gently refuses: real worship and sacrifice carry genuine personal commitment. That very hill in Jerusalem later became the site of Solomon’s Temple.',
    lessonForYou:
      'Love shows up in what costs us real care—time, patience, generosity, and humble attention.',
    tryThisAction:
      'Give something meaningful today—your undivided listening, time, or generosity—even when taking a shortcut would be easier.',
    kidFriendlySummary:
      'Araunah offered his farm field for free, but King David insisted on paying fairly so his thank-you gift to God came straight from the heart!',
  },
  '1KI-3:9': {
    verseId: '1KI-3:9',
    verseRef: '1 Kings 3:9',
    whatThisMeans:
      'Offered a blank check in a night dream at Gibeon, young Solomon could have demanded territory, long life, or wealth. Instead he asked in Hebrew for a lev shomea—"a listening heart"—showing that real leadership starts by listening humbly to God and people.',
    lessonForYou:
      'True wisdom isn’t sounding smart in the room; it’s having a patient, listening heart that notices what others truly need.',
    tryThisAction:
      'Before rushing to solve a friend’s or family member’s frustration today, ask God for a listening heart and hear them out fully.',
    kidFriendlySummary:
      'When God told young King Solomon, “Ask for anything you want!”, Solomon didn’t ask for gold—he asked for a wise, listening heart to help people!',
  },
  '1KI-8:27': {
    verseId: '1KI-8:27',
    verseRef: '1 Kings 8:27',
    whatThisMeans:
      'Even at the grand dedication of Jerusalem’s glistening cedar-and-gold Temple, Solomon immediately guards against shrinking God down into architecture. Heaven itself cannot hold the Creator—yet God lovingly bends near whenever anyone turns toward Him in honest prayer.',
    lessonForYou:
      'No sacred building or religious routine locks God inside four walls; He is infinitely vast yet tenderly near wherever someone prays.',
    tryThisAction:
      'Pause right where you are—desk, walk, or kitchen—and offer a quiet ten-second prayer remembering God isn’t confined to one room.',
    kidFriendlySummary:
      'Solomon built an amazing Temple in Jerusalem, then smiled to God: “Even the whole gigantic sky can’t hold You—thank You for coming close to hear our prayers!”',
  },
  '1KI-17:14': {
    verseId: '1KI-17:14',
    verseRef: '1 Kings 17:14',
    whatThisMeans:
      'Rather than refilling her storage room all at once, God gave Elijah and the impoverished widow in Sidon just enough flour and oil each morning until rain returned. Daily dependence often builds deeper trust than huge surpluses.',
    lessonForYou:
      'When resources, strength, or patience feel down to the bottom of the jar, sharing what little we have opens room for God’s daily care.',
    tryThisAction:
      'Share one small encouragement, snack, or bit of time today even when your schedule feels tight.',
    kidFriendlySummary:
      'First birds delivered bread to Elijah! Then a kind mom shared her very last pancake—and God kept filling her tiny flour jar every morning!',
  },
  '1KI-18:38': {
    verseId: '1KI-18:38',
    verseRef: '1 Kings 18:38–39',
    whatThisMeans:
      'On Mount Carmel, Baal’s prophets shouted and cut themselves all day to an empty sky. Elijah repaired the broken altar representing all twelve tribes, soaked the stones with scarce water, and prayed one simple faithful prayer—and God answered unmistakably before drought gave way to rain.',
    lessonForYou:
      'Faith doesn’t rely on theatrical volume or panic; simple, steady loyalty to God holds up under pressure.',
    tryThisAction:
      'Identify one area where you’ve felt outnumbered or worn out trying to do the right thing, and recommit it quietly to God.',
    kidFriendlySummary:
      'Elijah poured buckets of water all over the wet stones so nobody could suspect a trick—then prayed softly, and God sent bright fire and gentle rain!',
  },
  '1KI-19:12': {
    verseId: '1KI-19:12',
    verseRef: '1 Kings 19:12',
    whatThisMeans:
      'Right after Carmel’s triumph, terrified and burnt-out Elijah collapsed under a desert bush. Instead of lecturing him, God sent an angel with warm bread, let him sleep twice, and finally met him at Horeb—not inside the deafening gale, quake, or fire, but in "a voice of thin silence" (still small voice).',
    lessonForYou:
      'When anxiety, burnout, or grief overwhelms you, God doesn’t demand instant heroics; sometimes His first prescription is rest, food, and quiet presence.',
    tryThisAction:
      'Step away from noisy screens for five quiet minutes today—rest your shoulders and listen to God’s calm care.',
    kidFriendlySummary:
      'Elijah felt scared and super tired, so God tucked him in for a nap with warm bread, then whispered softly after the loud wind stopped!',
  },
  '2KI-2:11': {
    verseId: '2KI-2:11',
    verseRef: '2 Kings 2:11',
    whatThisMeans:
      'Elisha refused every chance to stay behind cleanly in safety—walking faithfully beside Elijah across the parted Jordan. God honored that devotion with a chariot of fire and let Elijah’s cloak fall gently into Elisha’s waiting hands.',
    lessonForYou:
      'Steadfast loyalty to mentors and faithful everyday service prepare us quietly for tomorrow’s calling.',
    tryThisAction:
      'Thank someone older or wiser today who patiently modeled steadiness and kindness in your life.',
    kidFriendlySummary:
      'Elisha stayed loyal right beside Elijah’s side—and watched glowing horses and a fiery chariot swoop Elijah home while his cloak floated down!',
  },
  '2KI-5:14': {
    verseId: '2KI-5:14',
    verseRef: '2 Kings 5:14',
    whatThisMeans:
      'Proud commander Naaman expected fireworks and royal choreography—nearly walking away insulted when told simply to bathe seven times in the muddy Jordan River. Listening to wise servants, his humble plunge brought childhood-soft healing.',
    lessonForYou:
      'God’s grace resists human pride and meets humble people right in ordinary places.',
    tryThisAction:
      'Notice one area where pride makes a simple helpful step feel "beneath you," and take the humble step cheerfully.',
    kidFriendlySummary:
      'General Naaman felt grumpy at first about dipping in a muddy river—but once he bravely listened and dipped seven times, his skin turned fresh and healthy!',
  },
  '2KI-6:17': {
    verseId: '2KI-6:17',
    verseRef: '2 Kings 6:17',
    whatThisMeans:
      'Surrounded overnight by hostile cavalry in Dothan, Elisha didn’t ask God to whisk them away instantly; he simply prayed, "Lord, open his eyes!"—revealing that invisible heavenly care already outnumbered every threat around them.',
    lessonForYou:
      'Courage rarely means danger isn’t real; it means trusting God’s unseen care is bigger than what makes us panic.',
    tryThisAction:
      'When worry spikes today, pause and whisper, "Lord, open my eyes to remember I am not alone."',
    kidFriendlySummary:
      'Elisha’s helper looked outside and saw scary soldiers everywhere—until Elisha prayed, and he suddenly saw sparkling chariots of fire all over the hills!',
  },
  '2KI-19:14': {
    verseId: '2KI-19:14',
    verseRef: '2 Kings 19:14–15',
    whatThisMeans:
      'Assyria sent mocking propaganda letters boasting no god could save Jerusalem. Instead of panicking or hiding the paper away, Hezekiah literally unfolded the intimidating letter openly on the Temple floor and talked plainly with Yahweh.',
    lessonForYou:
      'Honest prayer doesn’t polish anxious messages—you can unroll heavy news openly before God word for word.',
    tryThisAction:
      'Take one stressful email, bill, or worry today and spread it honestly before God in a short plain prayer.',
    kidFriendlySummary:
      'When mean soldiers sent a scary letter to scare Jerusalem, King Hezekiah spread it right out on the floor and showed it to God in prayer!',
  },
  '2KI-22:11': {
    verseId: '2KI-22:11',
    verseRef: '2 Kings 22:11',
    whatThisMeans:
      'For decades Israel’s sacred Scripture sat forgotten in Temple storerooms. When workers cleaning up the house found the scroll and read it aloud, young Josiah didn’t argue defensively—his torn robes sparked Judah’s greatest season of heartfelt renewal.',
    lessonForYou:
      'Dusting off neglected truth—and responding softly rather than defensively—brings fresh life even after long neglect.',
    tryThisAction:
      'Re-read a short familiar Bible passage slowly today as if discovering it tucked inside an old dusty shelf for the first time.',
    kidFriendlySummary:
      'Workers cleaning the dusty Temple found a long-lost Bible scroll! When young King Josiah heard it read aloud, he humbly said sorry and brought everyone back to God!',
  },
  'JOB-1:21': {
    verseId: 'JOB-1:21',
    verseRef: 'Job 1:21',
    whatThisMeans:
      'Job did not pretend grief didn’t hurt—he tore his robe in devastation. Yet he refused to treat God like a transaction, praising Yahweh simply for who He is rather than only for full barns.',
    lessonForYou:
      'Mature love trusts God’s character even when easy blessings are stripped away.',
    tryThisAction:
      'Thank God today for one attribute of who He is—kindness, steadiness, or grace—apart from anything on your wishlist.',
    kidFriendlySummary:
      'Even on his saddest day when everything broke, Job remembered God’s goodness and trusted Him anyway!',
  },
  'JOB-19:25': {
    verseId: 'JOB-19:25',
    verseRef: 'Job 19:25',
    whatThisMeans:
      'Using the warm Hebrew family word "Go’el" (Kinsman-Redeemer), lonely Job insists God Himself will one day stand up upon the earth to clear his name and reunite with him.',
    lessonForYou:
      'Even when friends misunderstand your tears, you have a living Defender who knows the whole truth.',
    tryThisAction:
      'Write down one worry you feel alone in carrying, and hand it honestly to your living Redeemer.',
    kidFriendlySummary:
      'Even when everyone felt far away, Job smiled inside and said, “I know my Helper is alive!”',
  },
  'JOB-28:28': {
    verseId: 'JOB-28:28',
    verseRef: 'Job 28:28',
    whatThisMeans:
      'Miners hang on ropes in dark caves to dig up gold and sapphires, yet money can’t dig up real wisdom. Job 28 answers that awe of the Lord and turning from harm is life’s finest treasure.',
    lessonForYou:
      'Clever arguments fade quickly, while humble respect for God anchors quiet everyday decisions.',
    tryThisAction:
      'Choose one gentle, honest decision today that respects God even when nobody else notices.',
    kidFriendlySummary:
      'Treasure hunters dig deep for shiny gems, but respecting God and choosing kindness is better than gold!',
  },
  'JOB-38:4': {
    verseId: 'JOB-38:4',
    verseRef: 'Job 38:4–7',
    whatThisMeans:
      'Instead of handing Job an angry lecture, God opens the curtain of creation—asking gently where humans stood when morning stars sang together as foundations of earth took shape.',
    lessonForYou:
      'Perspective grows peacefully when we look outside our storm toward the vast wisdom guiding stars and oceans.',
    tryThisAction:
      'Step outside tonight or check the sky for one minute and marvel at how small worries feel beside shining stars.',
    kidFriendlySummary:
      'God spoke gently from a swirling cloud and showed Job morning stars singing and wild mountains full of joyful life!',
  },
  'JOB-42:5': {
    verseId: 'JOB-42:5',
    verseRef: 'Job 42:5',
    whatThisMeans:
      'For forty chapters Job knew careful reports about God. Seeing God face-to-face in the whirlwind shifted secondhand theology into personal peace—followed immediately by praying for his friends.',
    lessonForYou:
      'Real encounters with God transform abstract debates into humble peace and generous forgiveness.',
    tryThisAction:
      'Pray silently for good toward one person who misunderstood or frustrated you this week.',
    kidFriendlySummary:
      'Job went from only hearing stories about God to truly knowing Him—and joyfully prayed for his friends too!',
  },
  'PSA-1:3': {
    verseId: 'PSA-1:3',
    verseRef: 'Psalm 1:3',
    whatThisMeans:
      'In dry lands, trees planted along seasonal streams wilt every summer. A tree deliberately transplanted beside flowing irrigation canals stays leafy and fruitful even in drought.',
    lessonForYou:
      'Quietly soaking in Scripture every day anchors inner fruitfulness when hurried pressures dry everyone else out.',
    tryThisAction: 'Pick one short Psalm this morning and reread it slowly before checking messages.',
    kidFriendlySummary: 'Like a happy tree drinking cool stream water all year long, God’s Word keeps our hearts strong and leafy!',
  },
  'PSA-23:1': {
    verseId: 'PSA-23:1',
    verseRef: 'Psalm 23:1–4',
    whatThisMeans:
      'Sheep in Judea couldn’t find pasture alone or defend themselves from wolves. Calling Yahweh “my Shepherd” meant a royal promise of personal guidance, rest, and fearless companionship through dark valleys.',
    lessonForYou:
      'You don’t walk through confusing valleys alone—your Shepherd knows every steep path ahead.',
    tryThisAction: 'Take two slow breaths today and whisper, “The Lord is my Shepherd; I have what I need today.”',
    kidFriendlySummary: 'Jesus cares for us just like a kind shepherd leading little sheep to green grass, cool water, and safe rest!',
  },
  'PSA-46:10': {
    verseId: 'PSA-46:10',
    verseRef: 'Psalm 46:10',
    whatThisMeans:
      '“Be still” literally means “let go—drop your tense fighting hands!” In chaos and battle, peace begins by loosening clenched panic and remembering who reigns.',
    lessonForYou:
      'Unclenching anxious control doesn’t ignore real problems—it places them in stronger hands.',
    tryThisAction: 'Open your hands literally for 30 seconds and surrender one outcome you cannot force.',
    kidFriendlySummary: 'Even when things feel loud or shaky, God says calmly, “Take a deep breath—I’ve got this!”',
  },
  'PSA-51:10': {
    verseId: 'PSA-51:10',
    verseRef: 'Psalm 51:10',
    whatThisMeans:
      'Using the creation verb “bara” from Genesis 1:1, David doesn’t ask for surface behavior tweaks—he asks God to create a clean new heart from the inside out.',
    lessonForYou:
      'Failure isn’t final when honesty turns straight back toward God’s renewing grace.',
    tryThisAction: 'Confess one mistake cleanly to God today—without excuses—and thank Him for washing hearts fresh.',
    kidFriendlySummary: 'Whenever we mess up, we can tell God honestly and He happily gives our hearts a fresh clean start!',
  },
  'PSA-119:105': {
    verseId: 'PSA-119:105',
    verseRef: 'Psalm 119:105',
    whatThisMeans:
      'An ancient clay oil lamp didn’t light a whole highway miles ahead—it gave bright golden glow just for your next two footsteps along rocky trails.',
    lessonForYou:
      'God rarely hands out five-year blueprints; His Word gives plenty of warm light for today’s next faithful step.',
    tryThisAction: 'Notice the single next honest step right in front of you today and take it steadily.',
    kidFriendlySummary: 'God’s Word isn’t a giant spotlight far off—it’s a cozy little lantern showing the next safe step right at your feet!',
  },
  'PSA-139:14': {
    verseId: 'PSA-139:14',
    verseRef: 'Psalm 139:14',
    whatThisMeans:
      'David compares human design to intricate embroidered tapestry woven carefully in secret—declaring your worth stems from the Master Artist’s wonder.',
    lessonForYou:
      'Self-doubt fades when we measure identity by the Craftsman who delighted in shaping us.',
    tryThisAction: 'Remind yourself and one friend today that you are wonderfully crafted on purpose.',
    kidFriendlySummary: 'God designed every part of you carefully like colorful yarn woven into a special one-of-a-kind tapestry!',
  },
  'PSA-150:6': {
    verseId: 'PSA-150:6',
    verseRef: 'Psalm 150:6',
    whatThisMeans:
      'Bringing together noisy brass horns, gentle strings, rhythmic drums, and joyful flutes, Psalm 150 closes Israel’s hymnal by tuning every living breath into glad praise.',
    lessonForYou:
      'Simply drawing breath today is invitation enough to join creation’s gratitude.',
    tryThisAction: 'Sing or play a song of gratitude today aloud—even quietly in your kitchen or car!',
    kidFriendlySummary: 'Grab trumpets, tambourines, flutes, and clapping hands—everything that breathes gets to celebrate God’s goodness!',
  },
  'DAN-1:8': {
    verseId: 'DAN-1:8',
    verseRef: 'Daniel 1:8',
    whatThisMeans:
      'Stripped of home, temple, and even his name, teenage Daniel drew one quiet boundary around what he could control—asking politely instead of protesting loudly—and honored God peacefully in exile.',
    lessonForYou:
      'Quiet everyday integrity in small unseen choices builds quiet strength long before big tests arrive.',
    tryThisAction: 'Choose one small healthy habit today to honor God cheerfully right where you live.',
    kidFriendlySummary: 'Far away from home, young Daniel stayed polite and brave—honoring God even with what he chose at lunch!',
  },
  'DAN-3:17': {
    verseId: 'DAN-3:17',
    verseRef: 'Daniel 3:17–18',
    whatThisMeans:
      'Shadrach, Meshach, and Abednego knew God had full power to rescue them—yet they trusted Him completely even if rescue didn’t look the way they hoped (“but if not...”).',
    lessonForYou:
      'Real loyalty stays steady because God is worthy, not merely when outcomes go smoothly.',
    tryThisAction: 'Thank God today for walking right beside you inside fiery weeks, not only around them.',
    kidFriendlySummary: 'Three brave friends trusted God so much that even walking into the super-hot furnace couldn’t make them bow—and a bright Fourth Friend walked right beside them!',
  },
  'DAN-6:10': {
    verseId: 'DAN-6:10',
    verseRef: 'Daniel 6:10',
    whatThisMeans:
      'At roughly eighty years old, statesman Daniel didn’t scramble to invent dramatic courage; he simply walked upstairs as he had for seventy years, kneeled toward Jerusalem, and gave thanks.',
    lessonForYou:
      'Daily steady prayer habits turn high-pressure moments into calm peace.',
    tryThisAction: 'Pause for two quiet minutes right now—morning, noon, or tonight—to thank God simply.',
    kidFriendlySummary: 'Even when an unfair rule forbade praying, grandpa Daniel calmly prayed by his window like every other day—and angels kept the lions sleepy all night!',
  },
  'DAN-7:13': {
    verseId: 'DAN-7:13',
    verseRef: 'Daniel 7:13–14',
    whatThisMeans:
      'While human empires roar like fierce beasts out of chaotic seas, God’s true everlasting Ruler comes gently from heaven like “a son of man”—combining divine majesty with human compassion.',
    lessonForYou:
      'Headline bullies and fierce crises are temporary; the gentle Kingdom of the Son of Man endures forever.',
    tryThisAction: 'Replace anxious scrolling tonight with one peaceful reminder that Heaven’s Kingdom lasts forever.',
    kidFriendlySummary: 'Daniel saw scary imaginary beast kingdoms roar for a tiny while—until gentle, forever-reigning King Jesus rode the clouds and rescued His people!',
  },
  'DAN-12:3': {
    verseId: 'DAN-12:3',
    verseRef: 'Daniel 12:3',
    whatThisMeans:
      'Closing seventy years of exile, God promises those who stay wise and guide others steadily toward goodness won’t be forgotten—they will shine joyfully like bright stars forever.',
    lessonForYou:
      'Quietly encouraging someone else toward truth today carries eternal brightness.',
    tryThisAction: 'Send one encouraging note today to help a friend keep walking hopefully.',
    kidFriendlySummary: 'God promises everyone who stays kind, wise, and helpful will sparkle forever like bright stars in the night sky!',
  },
  '1CH-4:10': {
    verseId: '1CH-4:10',
    verseRef: '1 Chronicles 4:10',
    whatThisMeans:
      'Placed quietly inside long lists of Judah’s families, Jabez (“Sorrowful”) refuses to let a painful start define his story. He asks God for wholehearted blessing, wider usefulness, steady companionship (“Your hand with me”), and protection from evil—and Scripture simply writes: “God granted what he requested.”',
    lessonForYou:
      'God never loses track of an individual heart inside a big crowd or slow chapter of life.',
    tryThisAction: 'Pray Jabez’s simple four-part prayer today: ask God for His hand beside you in one task ahead.',
    kidFriendlySummary: 'Even inside a giant list of family names, God stopped to listen to humble Jabez’s short prayer—and gave him a joyful yes!',
  },
  '1CH-16:34': {
    verseId: '1CH-16:34',
    verseRef: '1 Chronicles 16:34',
    whatThisMeans:
      'As Levites carry the Ark joyfully into Jerusalem on cedar poles, David puts this unforgettable chorus on the lips of Asaph, Heman, and Jeduthun: Yahweh is good, and His covenant faithfulness (chesed) never wears thin.',
    lessonForYou:
      'Gratitude re-anchors anxious hearts around God’s unchanging kindness rather than shifting headlines.',
    tryThisAction: 'Speak one concrete reason to thank God for His kindness before opening emails or news today.',
    kidFriendlySummary: 'With trumpets, harps, and clanging cymbals, everyone sang the happiest echo in Israel: “God is good, and His love lasts forever!”',
  },
  '1CH-21:24': {
    verseId: '1CH-21:24',
    verseRef: '1 Chronicles 21:24',
    whatThisMeans:
      'When Ornan humbly tries to gift King David both land and oxen after disaster strikes, David insists on paying full weight in gold. Sincere devotion never hands God leftovers—and Mount Moriah’s altar becomes the permanent site of Solomon’s Temple.',
    lessonForYou:
      'Wholehearted love shows up in quiet integrity even when nobody would fault us for taking the shortcut.',
    tryThisAction: 'Give your best undivided attention today to someone or something you usually rush past.',
    kidFriendlySummary: 'King David refused to bring God a free shortcut—and turned that quiet hilltop wheat floor into the place for God’s great house!',
  },
  '1CH-28:20': {
    verseId: '1CH-28:20',
    verseRef: '1 Chronicles 28:20',
    whatThisMeans:
      'Standing before young Solomon with the Spirit-given Temple scroll, aging King David echoes Moses’s charge to Joshua centuries earlier: “Be strong and courageous, and do it... Yahweh God will not fail you or forsake you.”',
    lessonForYou:
      'Stepping into intimidating work doesn’t depend on feeling fearless first—it rests on God staying right beside us until completion.',
    tryThisAction: 'Encourage a younger friend or coworker today with calm confidence rather than pressure.',
    kidFriendlySummary: 'Grandpa David gave young Solomon big building drawings and whispered the best encouragement: “Be brave and start—God won’t ever leave you!”',
  },
  '1CH-29:14': {
    verseId: '1CH-29:14',
    verseRef: '1 Chronicles 29:14',
    whatThisMeans:
      'After king and congregation give joyfully out of willing hearts toward God’s house, David’s final prayer bursts with amazement: humans cannot put God in our debt, because every ounce of generosity merely returns gifts He placed in our hands first.',
    lessonForYou:
      'When we see ourselves as grateful stewards instead of owners, generosity feels liberating instead of scary.',
    tryThisAction: 'Practice giving something away cheerfully today—time, encouragement, or a meal—with open hands.',
    kidFriendlySummary: 'Everyone happily shared gold, silver, and wood—and David cheered, “Everything good we have already came as a gift from You!”',
  },
};

export function getExplanationForVerse(verseId: string): VerseExplanation {
  if (SEED_VERSE_EXPLANATIONS[verseId]) {
    return SEED_VERSE_EXPLANATIONS[verseId];
  }

  // Dynamic chapter-grounded explanation for any verse across Genesis 1–50
  if (verseId.startsWith('GEN-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = GENESIS_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Genesis ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title.toLowerCase()}, we see how God faithfully guides ordinary, imperfect people step by step toward His larger promise.`,
        tryThisAction: `Pause and reflect on what ${ref} reveals about God’s character or human trust in this chapter.`,
        kidFriendlySummary: `${chapData.subtitle} God stays right beside His family in every part of this adventure!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['GEN-1:1'];
  }

  // Dynamic chapter-grounded explanation for any verse across Exodus 1–40
  if (verseId.startsWith('EXO-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = EXODUS_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Exodus ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title.toLowerCase()}, we watch the faithful God rescue, guide, and dwell closely among His people.`,
        tryThisAction: `Ask yourself how ${ref} invites you to trust God’s guidance and faithfulness today.`,
        kidFriendlySummary: `${chapData.subtitle} God stayed close to Moses and the people every single step of the way!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['EXO-16:15'];
  }

  // Dynamic chapter-grounded explanation for any verse across Leviticus 1–27
  if (verseId.startsWith('LEV-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = LEVITICUS_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Leviticus ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title.toLowerCase()}, God shows how holiness and grace allow ordinary people to live joyfully near Him.`,
        tryThisAction: `Consider how ${ref} calls us to reverence, gratitude, and loving our neighbors today.`,
        kidFriendlySummary: `${chapData.subtitle} God always makes a loving way for His people to draw near to Him!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['LEV-19:18'];
  }

  if (verseId.startsWith('NUM-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = NUMBERS_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Numbers ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title.toLowerCase()}, God faithfully guides, corrects, and carries His imperfect people across the wilderness.`,
        tryThisAction: `Consider how ${ref} invites deeper trust in God’s faithfulness along your own journey today.`,
        kidFriendlySummary: `${chapData.subtitle} Even in the desert, God stayed right in the middle of the camp to guide His people!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['NUM-6:24'];
  }

  if (verseId.startsWith('DEU-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = DEUTERONOMY_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Deuteronomy ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title.toLowerCase()}, Moses invites Israel to remember God’s faithfulness and choose wholehearted love today.`,
        tryThisAction: `Consider how ${ref} calls us to gratitude, open-handed justice, and loving God with all our heart.`,
        kidFriendlySummary: `${chapData.subtitle} Moses reminded everyone to love God with all their heart and choose life!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['DEU-6:5'];
  }

  if (verseId.startsWith('JOS-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = JOSHUA_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Joshua ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title.toLowerCase()}, God shows that courageous obedience and remembrance unlock His good promises.`,
        tryThisAction: `Ask how ${ref} invites you to step forward bravely with God today.`,
        kidFriendlySummary: `${chapData.subtitle} Whenever Israel trusted and obeyed God’s word, He went right ahead of them!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['JOS-1:9'];
  }

  if (verseId.startsWith('JDG-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = JUDGES_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Judges ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title.toLowerCase()}, Judges shows both the pain of forgetting God and His faithful mercy whenever people cry out.`,
        tryThisAction: `Notice how ${ref} points us toward humble dependence on God’s wise leadership today.`,
        kidFriendlySummary: `${chapData.subtitle} Whenever Israel cried out for help, God faithfully sent a rescuer!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['JDG-6:14'];
  }

  if (verseId.startsWith('RUT-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = RUTH_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Ruth ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, ordinary loyal love (chesed) quietly carries God’s redeeming story from Bethlehem to King David.`,
        tryThisAction: `Ask how ${ref} invites you to show steady, generous kindness to someone close to you today.`,
        kidFriendlySummary: `${chapData.subtitle} God used Ruth and Boaz’s kindness to grow King David’s family!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['RUT-1:16'];
  }

  if (verseId.startsWith('1SA-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = FIRST_SAMUEL_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `1 Samuel ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, God reminds Israel that humble listening and a heart after Him matter far more than outward appearance.`,
        tryThisAction: `Ask how ${ref} invites you to listen attentively to God’s gentle leading today.`,
        kidFriendlySummary: `${chapData.subtitle} God always looks at our hearts and stays close to faithful listeners!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['1SA-16:7'];
  }

  if (verseId.startsWith('2SA-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = SECOND_SAMUEL_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `2 Samuel ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, 2 Samuel traces God’s steadfast covenant kindness alongside honest lessons on humility and grace.`,
        tryThisAction: `Notice how ${ref} calls us to show generous kindness and walk honestly before God today.`,
        kidFriendlySummary: `${chapData.subtitle} God kept His loving promise to King David even through hard days!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['2SA-9:7'];
  }

  if (verseId.startsWith('1KI-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = FIRST_KINGS_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `1 Kings ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, 1 Kings contrasts humble listening hearts with divided loyalty—showing how faithful prayer invites God’s wisdom and provision.`,
        tryThisAction: `Ask how ${ref} calls us to listen attentively and remain faithful amid pressure today.`,
        kidFriendlySummary: `${chapData.subtitle} God gives wisdom, daily bread, and gentle whispers to humble hearts!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['1KI-3:9'];
  }

  if (verseId.startsWith('2KI-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = SECOND_KINGS_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `2 Kings ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, 2 Kings reminds us that God’s healing mercy, unseen protection, and rediscovered Word outlast empires.`,
        tryThisAction: `Ask how ${ref} calls us to open our eyes to God’s quiet care today.`,
        kidFriendlySummary: `${chapData.subtitle} God protects, heals, and keeps His faithful promise even through dark days!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['2KI-6:17'];
  }

  if (verseId.startsWith('1CH-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = FIRST_CHRONICLES_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `1 Chronicles ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, 1 Chronicles roots ordinary families and leaders in joyful worship, covenant faithfulness, and generous legacy.`,
        tryThisAction: `Ask how ${ref} invites you into wholehearted worship or grateful generosity today.`,
        kidFriendlySummary: `${chapData.subtitle} God remembers every faithful family and loves cheerful thankful hearts!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['1CH-16:34'];
  }

  if (verseId.startsWith('JOB-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = JOB_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Job ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, Job invites honest questions and deep trust when easy answers run dry before God’s majesty.`,
        tryThisAction: `Reflect on how ${ref} invites honest prayer and quiet wonder before the Creator today.`,
        kidFriendlySummary: `${chapData.subtitle} God welcomes honest feelings and meets us in wonderful ways!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['JOB-38:4'];
  }

  if (verseId.startsWith('PSA-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = PSALMS_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Psalm ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, Israel’s prayerbook invites us to bring real tears, questions, and thanksgiving straight into God’s listening presence.`,
        tryThisAction: `Pray ${ref} back to God today in your own honest words.`,
        kidFriendlySummary: `${chapData.subtitle} God loves hearing our songs whether we feel joyful, tired, or scared!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['PSA-23:1'];
  }

  if (verseId.startsWith('DAN-')) {
    const [chapPart, verseNum] = verseId.split(':');
    const chapData = DANIEL_CHAPTERS[chapPart];
    if (chapData) {
      const ref = `Daniel ${chapData.chapterNumber}:${verseNum || '1'}`;
      return {
        verseId,
        verseRef: ref,
        whatThisMeans: `${chapData.title}: ${chapData.bigPictureText}`,
        lessonForYou: `In ${chapData.title}, Daniel models steady daily conviction in exile grounded in Heaven’s everlasting Kingdom.`,
        tryThisAction: `Stand quietly faithful in one small choice today remembering ${ref}.`,
        kidFriendlySummary: `${chapData.subtitle} God walks right beside His faithful people inside fires, lions’ dens, and starry dreams!`,
      };
    }
    return SEED_VERSE_EXPLANATIONS['DAN-6:10'];
  }

  if (verseId.startsWith('RUT')) return SEED_VERSE_EXPLANATIONS['RUT-1:16'];
  return SEED_VERSE_EXPLANATIONS['EXO-16:15'];
}
