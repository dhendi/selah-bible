import type { CharacterCard } from '../types/bible';

export const SEED_CHARACTERS: Record<string, CharacterCard> = {
  'char-profile-moses': {
    id: 'char-profile-moses',
    name: 'Moses',
    nameMeaning: 'Hebrew: מֹשֶׁה / Mosheh ("Drawn out of water")',
    era: 'Exodus Era ~1446 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-moses',
    quickBio:
      'Raised as an Egyptian prince, Moses became Israel’s humblest prophet and deliverer after encountering God at the burning bush. He led millions out of slavery through the Red Sea and received the Covenant Law at Mount Sinai.',
    familyTree: {
      parents: ['Amram', 'char-profile-jochebed'],
      siblings: ['char-profile-aaron', 'char-profile-miriam'],
      spouse: ['char-profile-zipporah'],
      children: ['Gershom', 'Eliezer'],
    },
    locationsLived: [
      {
        placeName: 'Egypt',
        roleInLife: 'Saved from the Nile as a baby; raised in Pharaoh’s palace',
        coordinates: { lat: 30.8, lng: 31.8 },
        mapPinId: 'loc-red-sea',
      },
      {
        placeName: 'Midian',
        roleInLife: '40 years as a shepherd; encountered the Burning Bush',
        coordinates: { lat: 28.5, lng: 34.8 },
        mapPinId: 'loc-mount-sinai',
      },
      {
        placeName: 'Wilderness of Sin',
        roleInLife: 'Led Israel across the Red Sea and received daily Manna',
        coordinates: { lat: 28.9, lng: 33.3 },
        mapPinId: 'loc-wilderness-sin',
      },
      {
        placeName: 'Mount Nebo (Pisgah)',
        roleInLife: 'Spoke Deuteronomy’s covenant sermons and viewed the Promised Land',
        coordinates: { lat: 31.8, lng: 35.7 },
        mapPinId: 'loc-mount-nebo',
      },
    ],
    whyTheyMatter: [
      'Delivered Israel from 400 years of Egyptian bondage through God’s miracles.',
      'Received the Ten Commandments and mediated the Sinai Covenant.',
      'Foreshadowed Jesus as the faithful Prophet who speaks with God face to face.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 16:11–15',
        label: 'The Provision of Manna',
        storyModuleId: 'story-exodus-manna',
        chapterId: 'EXO-16',
        anchorVerseNumber: 15,
      },
      {
        reference: 'Deuteronomy 6:4–5',
        label: 'The Shema: Love With All Your Heart',
        storyModuleId: 'story-deu-shema',
        chapterId: 'DEU-6',
        anchorVerseNumber: 5,
      },
      {
        reference: 'Deuteronomy 34:1–12',
        label: 'Mount Nebo & Moses’s Farewell',
        storyModuleId: 'story-deu-nebo',
        chapterId: 'DEU-34',
        anchorVerseNumber: 10,
      },
    ],
  },

  'char-profile-aaron': {
    id: 'char-profile-aaron',
    name: 'Aaron',
    nameMeaning: 'Hebrew: אַהֲרֹן / Aharon ("Mountain of strength")',
    era: 'Exodus Era ~1446 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-aaron',
    quickBio:
      'Moses’ older brother and eloquent spokesperson before Pharaoh during the plagues of Egypt. God consecrated Aaron as Israel’s first High Priest to minister in the Tabernacle and bless the people.',
    familyTree: {
      parents: ['Amram', 'char-profile-jochebed'],
      siblings: ['char-profile-moses', 'char-profile-miriam'],
      spouse: ['Elisheba'],
      children: ['char-profile-eleazar', 'char-profile-ithamar', 'char-profile-nadab', 'char-profile-abihu'],
    },
    locationsLived: [
      {
        placeName: 'Egypt',
        roleInLife: 'Stood courageously beside Moses in Pharaoh’s royal court',
        coordinates: { lat: 30.1, lng: 31.2 },
        mapPinId: 'loc-red-sea',
      },
      {
        placeName: 'Wilderness of Sin',
        roleInLife: 'Collected a golden jar of Manna inside the Ark as a reminder',
        coordinates: { lat: 28.9, lng: 33.3 },
        mapPinId: 'loc-wilderness-sin',
      },
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Anointed as the first High Priest of Israel',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'Modeled faithful partnership by speaking for his hesitant younger brother.',
      'Established Israel’s priesthood and spoke the famous Aaronic Blessing (Numbers 6:24).',
      'Reminds readers that even flawed leaders can be forgiven and used by God.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 16:11–15',
        label: 'Manna in the Desert',
        storyModuleId: 'story-exodus-manna',
        chapterId: 'EXO-16',
        anchorVerseNumber: 12,
      },
    ],
  },

  'char-profile-miriam': {
    id: 'char-profile-miriam',
    name: 'Miriam',
    nameMeaning: 'Hebrew: מִרְיָם / Miryam ("Beloved / Wished-for child")',
    era: 'Exodus Era ~1446 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-miriam',
    quickBio:
      'The resourceful older sister who watched over baby Moses in the Nile reeds and arranged for his mother to nurse him. After crossing the Red Sea, Miriam led Israel’s women in joyful songs of victory.',
    familyTree: {
      parents: ['Amram', 'char-profile-jochebed'],
      siblings: ['char-profile-moses', 'char-profile-aaron'],
    },
    locationsLived: [
      {
        placeName: 'Egypt',
        roleInLife: 'Protected baby Moses along the banks of the Nile River',
        coordinates: { lat: 30.8, lng: 31.8 },
        mapPinId: 'loc-red-sea',
      },
      {
        placeName: 'Red Sea Shore',
        roleInLife: 'Led tambourine worship celebrating Israel’s deliverance',
        coordinates: { lat: 29.9, lng: 32.5 },
        mapPinId: 'loc-red-sea',
      },
    ],
    whyTheyMatter: [
      'Recognized in Micah 6:4 as one of the three prophetic leaders of the Exodus.',
      'Demonstrates quick-witted courage in protecting vulnerable life.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 16:11–15',
        label: 'Wilderness Journey',
        storyModuleId: 'story-exodus-manna',
        chapterId: 'EXO-16',
        anchorVerseNumber: 13,
      },
    ],
  },

  'char-profile-ruth': {
    id: 'char-profile-ruth',
    name: 'Ruth',
    nameMeaning: 'Hebrew: רוּת / Rut ("Companion / Loyal Friend")',
    era: 'Era of Judges ~1100 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-ruth',
    quickBio:
      'A courageous Moabite widow who left her homeland behind to care for her grieving mother-in-law Naomi. Her loyal kindness (chesed) brought her to Bethlehem, where she became the great-grandmother of King David.',
    familyTree: {
      parents: ['Moabite Family'],
      siblings: ['Orpah (Sister-in-law)'],
      spouse: ['char-profile-boaz', 'Mahlon (former)'],
      children: ['Obed'],
    },
    locationsLived: [
      {
        placeName: 'Moab',
        roleInLife: 'Homeland where she married into Naomi’s family',
        coordinates: { lat: 31.3, lng: 35.7 },
        mapPinId: 'loc-moab',
      },
      {
        placeName: 'Bethlehem',
        roleInLife: 'Gleaned barley fields, married Boaz, and entered David’s family line',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-bethlehem',
      },
    ],
    whyTheyMatter: [
      'Embodies Hebrew "chesed" (steadfast loyal love) in her vow: "Where you go, I will go."',
      'As a foreign Moabite woman in Jesus’ genealogy (Matthew 1:5), she proves God’s grace is for all nations.',
    ],
    keyChapters: [
      {
        reference: 'Ruth 1:15–18',
        label: 'Loyal Love & Faith',
        storyModuleId: 'story-ruth-naomi',
        chapterId: 'RUT-1',
        anchorVerseNumber: 16,
      },
      {
        reference: 'Ruth 2:1–23',
        label: 'Grace in the Barley Fields',
        storyModuleId: 'story-ruth-fields',
        chapterId: 'RUT-2',
        anchorVerseNumber: 12,
      },
      {
        reference: 'Ruth 3:1–18',
        label: 'Kinsman-Redeemer at Midnight',
        storyModuleId: 'story-ruth-redeemer',
        chapterId: 'RUT-3',
        anchorVerseNumber: 11,
      },
    ],
  },

  'char-profile-naomi': {
    id: 'char-profile-naomi',
    name: 'Naomi',
    nameMeaning: 'Hebrew: נָעֳמִי / No’omi ("Pleasantness / Delight")',
    era: 'Era of Judges ~1100 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-naomi',
    quickBio:
      'An Israelite mother from Bethlehem who endured severe famine and lost her husband and two sons in Moab. Though deep grief led her to feel empty, God gently restored her hope through Ruth’s devotion and a grandson named Obed.',
    familyTree: {
      parents: ['Bethlehem Lineage'],
      siblings: [],
      spouse: ['Elimelech'],
      children: ['Mahlon', 'Chilion', 'char-profile-ruth'],
    },
    locationsLived: [
      {
        placeName: 'Bethlehem',
        roleInLife: 'Home she left during famine and returned to at barley harvest',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-bethlehem',
      },
      {
        placeName: 'Moab',
        roleInLife: 'Lived as an immigrant for 10 years through painful bereavement',
        coordinates: { lat: 31.3, lng: 35.7 },
        mapPinId: 'loc-moab',
      },
    ],
    whyTheyMatter: [
      'Models honest grief before God while still seeking the good of her daughters-in-law.',
      'Her journey from bitterness back to joy reminds us God writes second chapters after loss.',
    ],
    keyChapters: [
      {
        reference: 'Ruth 1:15–18',
        label: 'Return to Bethlehem',
        storyModuleId: 'story-ruth-naomi',
        chapterId: 'RUT-1',
        anchorVerseNumber: 18,
      },
      {
        reference: 'Ruth 4:13–22',
        label: 'From Empty to Joyful Grandmother',
        storyModuleId: 'story-ruth-lineage',
        chapterId: 'RUT-4',
        anchorVerseNumber: 14,
      },
    ],
  },

  'char-profile-boaz': {
    id: 'char-profile-boaz',
    name: 'Boaz',
    nameMeaning: 'Hebrew: בֹּעַז / Bo’az ("In him is strength")',
    era: 'Era of Judges ~1100 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-boaz',
    quickBio:
      'A generous landowner in Bethlehem who honored God’s gleaning laws for the poor and welcomed Ruth warmly into his fields. As kinsman-redeemer, Boaz married Ruth and restored Naomi’s family inheritance.',
    familyTree: {
      parents: ['Salmon', 'char-profile-rahab'],
      siblings: [],
      spouse: ['char-profile-ruth'],
      children: ['Obed'],
    },
    locationsLived: [
      {
        placeName: 'Bethlehem',
        roleInLife: 'Cared for widows and workers during the spring barley harvest',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-bethlehem',
      },
    ],
    whyTheyMatter: [
      'Pictures Christ’s redeeming grace by rescuing two vulnerable widows at personal cost.',
      'Great-grandfather of King David in the lineage of Jesus.',
    ],
    keyChapters: [
      {
        reference: 'Ruth 1:15–18',
        label: 'Arrival in Bethlehem',
        storyModuleId: 'story-ruth-naomi',
        chapterId: 'RUT-1',
        anchorVerseNumber: 18,
      },
      {
        reference: 'Ruth 2:1–23',
        label: 'Grace in the Barley Fields',
        storyModuleId: 'story-ruth-fields',
        chapterId: 'RUT-2',
        anchorVerseNumber: 12,
      },
      {
        reference: 'Ruth 4:1–22',
        label: 'Redeeming at Bethlehem’s Gate',
        storyModuleId: 'story-ruth-lineage',
        chapterId: 'RUT-4',
        anchorVerseNumber: 14,
      },
    ],
  },

  'char-profile-adam': {
    id: 'char-profile-adam',
    name: 'Adam',
    nameMeaning: 'Hebrew: אָדָם / Adam ("Humankind · Formed from red earth")',
    era: 'Creation & Beginnings',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-adam',
    quickBio:
      'The first human formed by God from the dust of the ground and animated by the breath of life (Genesis 2:7). Placed in the Garden of Eden to cultivate and guard creation alongside Eve, Adam received God’s promise of grace even after broken trust.',
    familyTree: {
      parents: ['Created directly by God'],
      siblings: [],
      spouse: ['char-profile-eve'],
      children: ['char-profile-cain', 'char-profile-abel', 'char-profile-seth'],
    },
    locationsLived: [
      {
        placeName: 'Garden of Eden',
        roleInLife: 'Cultivated and guarded paradise, named the creatures, and walked with God',
        coordinates: { lat: 33.2, lng: 44.4 },
        mapPinId: 'loc-eden',
      },
      {
        placeName: 'East of Eden',
        roleInLife: 'Worked the soil outside Eden and began humanity’s first family',
        coordinates: { lat: 33.5, lng: 45.0 },
        mapPinId: 'loc-eden',
      },
    ],
    whyTheyMatter: [
      'Demonstrates the sacred dignity of humanity made in the Image of God (Imago Dei).',
      'New Testament writers contrast Adam with Jesus—"the Last Adam"—who restores eternal life.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 2:4–25',
        label: 'Formed in Eden',
        storyModuleId: 'story-genesis-creation',
        chapterId: 'GEN-2',
        anchorVerseNumber: 7,
      },
      {
        reference: 'Genesis 3:1–24',
        label: 'The Fall & Mercy',
        storyModuleId: 'story-genesis-fall',
        chapterId: 'GEN-3',
        anchorVerseNumber: 15,
      },
    ],
  },

  'char-profile-eve': {
    id: 'char-profile-eve',
    name: 'Eve',
    nameMeaning: 'Hebrew: חַוָּה / Chavvah ("Living · Mother of all living")',
    era: 'Creation & Beginnings',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-eve',
    quickBio:
      'The first woman, fashioned as Adam’s equal partner ("ezer"—strong ally) to steward Eden together. After trusting the serpent’s lie in Genesis 3, Eve became the recipient of God’s very first promise of redemption and welcomed Cain, Abel, and Seth.',
    familyTree: {
      parents: ['Created directly by God'],
      siblings: [],
      spouse: ['char-profile-adam'],
      children: ['char-profile-cain', 'char-profile-abel', 'char-profile-seth'],
    },
    locationsLived: [
      {
        placeName: 'Garden of Eden',
        roleInLife: 'Walked in communion with God as Adam’s equal partner in paradise',
        coordinates: { lat: 33.2, lng: 44.4 },
        mapPinId: 'loc-eden',
      },
      {
        placeName: 'East of Eden',
        roleInLife: 'Named "Mother of all living" and nurtured the first human family',
        coordinates: { lat: 33.5, lng: 45.0 },
        mapPinId: 'loc-eden',
      },
    ],
    whyTheyMatter: [
      'Genesis 2:18 describes Eve as an "ezer" (strong helper)—the exact Hebrew word used when God rescues Israel.',
      'Genesis 3:15 anchors hope in Eve’s promised offspring who crushes evil.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 2:18–25',
        label: 'Partner in Eden',
        storyModuleId: 'story-genesis-creation',
        chapterId: 'GEN-2',
        anchorVerseNumber: 22,
      },
      {
        reference: 'Genesis 3:15–20',
        label: 'Mother of All Living',
        storyModuleId: 'story-genesis-fall',
        chapterId: 'GEN-3',
        anchorVerseNumber: 15,
      },
    ],
  },

  'char-profile-peter': {
    id: 'char-profile-peter',
    name: 'Simon Peter',
    nameMeaning: 'Greek: Πέτρος / Petros ("Rock / Stone")',
    era: 'Life of Jesus & Early Church (~30 AD)',
    roleBadge: 'New Testament',
    portraitIllustrationId: 'portrait-peter',
    quickBio:
      'A passionate Galilean fisherman called by Jesus to become a "fisher of people." Though Peter famously stumbled in fear, the risen Jesus forgave and commissioned him to lead the birth of the Early Church.',
    familyTree: {
      parents: ['Jonah (John)'],
      siblings: ['char-profile-andrew'],
      spouse: ['Unnamed Wife (Capernaum)'],
    },
    locationsLived: [
      {
        placeName: 'Sea of Galilee',
        roleInLife: 'Fished for a living and walked on water toward Jesus',
        coordinates: { lat: 32.8, lng: 35.5 },
        mapPinId: 'loc-galilee',
      },
      {
        placeName: 'Jerusalem',
        roleInLife: 'Preached on Pentecost when 3,000 believers joined the church',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Demonstrates that Jesus restores people who fail and turns weakness into courageous leadership.',
      'Eyewitness leader of the early Jerusalem church and author of 1 & 2 Peter.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 1:1–5',
        label: 'echoed in John 1 & Acts',
        storyModuleId: 'story-genesis-creation',
        chapterId: 'GEN-1',
        anchorVerseNumber: 1,
      },
    ],
  },

  'char-profile-noah': {
    id: 'char-profile-noah',
    name: 'Noah',
    nameMeaning: 'Hebrew: נֹחַ / Noach ("Rest / Comfort")',
    era: 'Primeval Antiquity',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-noah',
    quickBio:
      'A righteous man who walked faithfully with God while violence filled the ancient world. Noah trusted God for over a century to build the ark, preserving human and animal life through the Great Flood.',
    familyTree: {
      parents: ['Lamech'],
      siblings: [],
      spouse: ['Noah’s Wife'],
      children: ['Shem', 'Ham', 'Japheth'],
    },
    locationsLived: [
      {
        placeName: 'Mesopotamia',
        roleInLife: 'Built the wooden ark in obedience to God’s warning',
        coordinates: { lat: 33.2, lng: 44.4 },
        mapPinId: 'loc-eden',
      },
      {
        placeName: 'Mountains of Ararat',
        roleInLife: 'Ark rested here as floodwaters receded; witnessed the Rainbow Covenant',
        coordinates: { lat: 39.7, lng: 44.3 },
        mapPinId: 'loc-ararat',
      },
    ],
    whyTheyMatter: [
      'Modelled courageous obedience long before a single raindrop fell.',
      'Received the everlasting Rainbow Covenant promising God’s patience toward creation.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 9:1–17',
        label: 'The Rainbow Covenant',
        storyModuleId: 'story-genesis-noah',
        chapterId: 'GEN-9',
        anchorVerseNumber: 13,
      },
      {
        reference: 'Genesis 6:1–22',
        label: 'Building the Ark',
        storyModuleId: 'story-genesis-noah',
        chapterId: 'GEN-6',
        anchorVerseNumber: 8,
      },
    ],
  },

  'char-profile-abraham': {
    id: 'char-profile-abraham',
    name: 'Abraham',
    nameMeaning: 'Hebrew: אַבְרָהָם / Avraham ("Father of many nations")',
    era: 'Patriarchal Era ~2000 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-abraham',
    quickBio:
      'Called by God at age 75 to leave his homeland of Ur for an unknown land, Abraham became the spiritual father of Israel and all believers. Despite long years of waiting, he trusted God’s starry promise.',
    familyTree: {
      parents: ['Terah'],
      siblings: ['Nahor', 'Haran'],
      spouse: ['char-profile-sarah', 'char-profile-hagar'],
      children: ['char-profile-isaac', 'Ishmael'],
    },
    locationsLived: [
      {
        placeName: 'Ur of the Chaldees',
        roleInLife: 'Birthplace along the Euphrates where God first called him',
        coordinates: { lat: 30.9, lng: 46.1 },
        mapPinId: 'loc-ur',
      },
      {
        placeName: 'Haran',
        roleInLife: 'Northern caravan crossroads where his father Terah passed away',
        coordinates: { lat: 36.8, lng: 39.0 },
        mapPinId: 'loc-haran',
      },
      {
        placeName: 'Hebron (Mamre)',
        roleInLife: 'Settled in tents, welcomed three visitors, and purchased Sarah’s tomb',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
    ],
    whyTheyMatter: [
      'Genesis 15:6 ("He believed Yahweh, and it was credited as righteousness") anchors biblical faith.',
      'Called "God’s friend" (Isaiah 41:8) and trusted God even on Mount Moriah.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 15:1–21',
        label: 'Covenant of Stars',
        storyModuleId: 'story-genesis-abraham',
        chapterId: 'GEN-15',
        anchorVerseNumber: 6,
      },
      {
        reference: 'Genesis 22:1–18',
        label: 'Test on Mount Moriah',
        storyModuleId: 'story-genesis-moriah',
        chapterId: 'GEN-22',
        anchorVerseNumber: 8,
      },
    ],
  },

  'char-profile-sarah': {
    id: 'char-profile-sarah',
    name: 'Sarah',
    nameMeaning: 'Hebrew: שָׂרָה / Sarah ("Princess / Mother of Nations")',
    era: 'Patriarchal Era ~2000 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-sarah',
    quickBio:
      'Abraham’s lifelong partner who left comfort in Mesopotamia to live in desert tents across Canaan. After decades of heartbreak over barrenness, Sarah laughed with joy when she gave birth to Isaac at age 90.',
    familyTree: {
      parents: ['Terah’s Household'],
      siblings: [],
      spouse: ['char-profile-abraham'],
      children: ['char-profile-isaac'],
    },
    locationsLived: [
      {
        placeName: 'Ur & Haran',
        roleInLife: 'Left settled city life to travel by faith with Abraham',
        coordinates: { lat: 36.8, lng: 39.0 },
        mapPinId: 'loc-haran',
      },
      {
        placeName: 'Hebron (Mamre)',
        roleInLife: 'Heard the promise of Isaac’s birth and buried in Cave of Machpelah',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
    ],
    whyTheyMatter: [
      'Celebrated in Hebrews 11:11 as a woman of faith who considered God faithful.',
      'Turned decades of waiting into laughter ("Isaac") when God kept His word.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 21:1–21',
        label: 'The Birth of Isaac',
        storyModuleId: 'story-genesis-abraham',
        chapterId: 'GEN-21',
        anchorVerseNumber: 6,
      },
    ],
  },

  'char-profile-isaac': {
    id: 'char-profile-isaac',
    name: 'Isaac',
    nameMeaning: 'Hebrew: יִצְחָק / Yitzchak ("He laughs")',
    era: 'Patriarchal Era ~1900 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-isaac',
    quickBio:
      'The long-awaited miracle son of Abraham and Sarah. A quiet, peaceful patriarch who walked up Mount Moriah in trust, loved Rebekah deeply, and chose to dig new wells instead of fighting neighbors.',
    familyTree: {
      parents: ['char-profile-abraham', 'char-profile-sarah'],
      siblings: ['Ishmael'],
      spouse: ['char-profile-rebekah'],
      children: ['char-profile-jacob', 'char-profile-esau'],
    },
    locationsLived: [
      {
        placeName: 'Mount Moriah',
        roleInLife: 'Spared when God provided a ram substitute',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
      {
        placeName: 'Beersheba & Hebron',
        roleInLife: 'Lived as a peaceful shepherd digging wells in southern Canaan',
        coordinates: { lat: 31.2, lng: 34.8 },
        mapPinId: 'loc-hebron',
      },
    ],
    whyTheyMatter: [
      'The bridge between Abraham’s promise and Jacob’s twelve tribes.',
      'Models gentle peacemaking in Genesis 26 when neighbors disputed his wells.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 22:1–18',
        label: 'Mount Moriah',
        storyModuleId: 'story-genesis-moriah',
        chapterId: 'GEN-22',
        anchorVerseNumber: 8,
      },
      {
        reference: 'Genesis 26:1–35',
        label: 'Digging Wells of Peace',
        storyModuleId: 'story-genesis-abraham',
        chapterId: 'GEN-26',
        anchorVerseNumber: 24,
      },
    ],
  },

  'char-profile-rebekah': {
    id: 'char-profile-rebekah',
    name: 'Rebekah',
    nameMeaning: 'Hebrew: רִבְקָה / Rivkah ("Captivating / Faithful")',
    era: 'Patriarchal Era ~1850 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-rebekah',
    quickBio:
      'A generous young woman from Haran who volunteered to draw water for ten thirsty camels at a desert well. She courageously traveled hundreds of miles to marry Isaac and became mother to twin rivals Esau and Jacob.',
    familyTree: {
      parents: ['Bethuel'],
      siblings: ['Laban'],
      spouse: ['char-profile-isaac'],
      children: ['char-profile-jacob', 'char-profile-esau'],
    },
    locationsLived: [
      {
        placeName: 'Haran',
        roleInLife: 'Met Abraham’s servant at the well with extraordinary hospitality',
        coordinates: { lat: 36.8, lng: 39.0 },
        mapPinId: 'loc-haran',
      },
      {
        placeName: 'Hebron / Negev',
        roleInLife: 'Comforted Isaac after Sarah’s passing and raised twin sons',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
    ],
    whyTheyMatter: [
      'Exemplifies proactive, servant-hearted generosity at the well (Genesis 24).',
      'Echoed Abraham’s faith by saying "I will go" into an unknown land.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 24:1–67',
        label: 'Hospitality at the Well',
        storyModuleId: 'story-genesis-abraham',
        chapterId: 'GEN-24',
        anchorVerseNumber: 58,
      },
    ],
  },

  'char-profile-jacob': {
    id: 'char-profile-jacob',
    name: 'Jacob (Israel)',
    nameMeaning: 'Hebrew: יַעֲקֹב ("Heel-grasper") → יִשְׂרָאֵל ("Wrestles with God")',
    era: 'Patriarchal Era ~1800 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-jacob',
    quickBio:
      'Born grasping his twin brother Esau’s heel, Jacob spent decades fleeing deception and learning humility. After dreaming of heaven’s ladder at Bethel and wrestling God at Peniel, he became Israel—father of the twelve tribes.',
    familyTree: {
      parents: ['char-profile-isaac', 'char-profile-rebekah'],
      siblings: ['char-profile-esau'],
      spouse: ['char-profile-rachel', 'char-profile-leah'],
      children: ['char-profile-joseph', 'Judah', 'Benjamin', '+9 Tribes'],
    },
    locationsLived: [
      {
        placeName: 'Bethel',
        roleInLife: 'Dreamed of angels ascending a ladder between heaven and earth',
        coordinates: { lat: 31.9, lng: 35.2 },
        mapPinId: 'loc-bethel',
      },
      {
        placeName: 'Haran',
        roleInLife: 'Worked 20 years for Rachel, Leah, and his growing family',
        coordinates: { lat: 36.8, lng: 39.0 },
        mapPinId: 'loc-haran',
      },
      {
        placeName: 'Goshen (Egypt)',
        roleInLife: 'Reunited joyfully with Joseph and blessed his twelve sons',
        coordinates: { lat: 30.8, lng: 31.8 },
        mapPinId: 'loc-goshen',
      },
    ],
    whyTheyMatter: [
      'Demonstrates that God transforms schemers and strugglers by stubborn grace.',
      'His twelve sons became the twelve tribes of Israel.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 28:10–22',
        label: 'Jacob’s Ladder at Bethel',
        storyModuleId: 'story-genesis-jacob',
        chapterId: 'GEN-28',
        anchorVerseNumber: 15,
      },
      {
        reference: 'Genesis 32:1–32',
        label: 'Wrestling God at Peniel',
        storyModuleId: 'story-genesis-jacob',
        chapterId: 'GEN-32',
        anchorVerseNumber: 28,
      },
    ],
  },

  'char-profile-esau': {
    id: 'char-profile-esau',
    name: 'Esau',
    nameMeaning: 'Hebrew: עֵשָׂו / Esav ("Hairy / Father of Edom")',
    era: 'Patriarchal Era ~1800 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-esau',
    quickBio:
      'Jacob’s rugged hunter twin brother who impulsively traded his birthright for a bowl of red stew. Though bitterly hurt by Jacob’s deception, Esau stunned everyone twenty years later by running to forgive and embrace him.',
    familyTree: {
      parents: ['char-profile-isaac', 'char-profile-rebekah'],
      siblings: ['char-profile-jacob'],
      spouse: ['Mahalath', 'Judith'],
      children: ['Eliphaz', 'Reuel'],
    },
    locationsLived: [
      {
        placeName: 'Hebron / Beersheba',
        roleInLife: 'Grew up hunting across southern Canaan',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
      {
        placeName: 'Seir (Edom)',
        roleInLife: 'Settled the red mountains south of the Dead Sea',
        coordinates: { lat: 30.3, lng: 35.4 },
        mapPinId: 'loc-hebron',
      },
    ],
    whyTheyMatter: [
      'Warns against trading long-term spiritual blessing for instant gratification.',
      'Models unexpected reconciliation in Genesis 33 when he embraced Jacob in tears.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 33:1–17',
        label: 'Reconciling with Jacob',
        storyModuleId: 'story-genesis-jacob',
        chapterId: 'GEN-33',
        anchorVerseNumber: 4,
      },
    ],
  },

  'char-profile-rachel': {
    id: 'char-profile-rachel',
    name: 'Rachel',
    nameMeaning: 'Hebrew: רָחֵל / Rachel ("Gentle Ewe Lamb")',
    era: 'Patriarchal Era ~1800 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-rachel',
    quickBio:
      'A shepherdess at the well of Haran whom Jacob loved so deeply he worked fourteen years to marry her. After years of longing for a child, God answered Rachel’s prayers with Joseph and Benjamin.',
    familyTree: {
      parents: ['Laban'],
      siblings: ['char-profile-leah'],
      spouse: ['char-profile-jacob'],
      children: ['char-profile-joseph', 'Benjamin'],
    },
    locationsLived: [
      {
        placeName: 'Haran',
        roleInLife: 'Tended her father’s sheep and met Jacob by the stone well',
        coordinates: { lat: 36.8, lng: 39.0 },
        mapPinId: 'loc-haran',
      },
      {
        placeName: 'Near Bethlehem',
        roleInLife: 'Gave birth to Benjamin and was buried along the Bethlehem road',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-bethlehem',
      },
    ],
    whyTheyMatter: [
      'Became mother of Joseph (savior of Egypt) and Benjamin.',
      'Honored across Scripture as a poignant picture of maternal love.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 29:1–35',
        label: 'Meeting at the Well',
        storyModuleId: 'story-genesis-jacob',
        chapterId: 'GEN-29',
        anchorVerseNumber: 18,
      },
    ],
  },

  'char-profile-joseph': {
    id: 'char-profile-joseph',
    name: 'Joseph',
    nameMeaning: 'Hebrew: יוֹסֵף / Yosef ("May God add / increase")',
    era: 'Patriarchal Era ~1700 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-joseph',
    quickBio:
      'Favored son of Jacob and Rachel whose envious brothers sold him into Egyptian slavery. Staying faithful through false accusation and prison, Joseph interpreted Pharaoh’s dreams, saved nations from famine, and forgave his brothers.',
    familyTree: {
      parents: ['char-profile-jacob', 'char-profile-rachel'],
      siblings: ['Benjamin', 'Judah', '+10 Brothers'],
      spouse: ['Asenath'],
      children: ['Manasseh', 'Ephraim'],
    },
    locationsLived: [
      {
        placeName: 'Hebron / Canaan',
        roleInLife: 'Wore the ornate coat and dreamed of sheaves and stars',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
      {
        placeName: 'Egypt & Goshen',
        roleInLife: 'Rose from prison dungeon to Governor of Egypt and rescued his family',
        coordinates: { lat: 30.8, lng: 31.8 },
        mapPinId: 'loc-goshen',
      },
    ],
    whyTheyMatter: [
      'Demonstrates steady integrity when mistreated, tempted, and forgotten.',
      'Genesis 50:20 summarizes the book: "What you meant for evil, God meant for good."',
    ],
    keyChapters: [
      {
        reference: 'Genesis 37:1–36',
        label: 'The Coat & Dreams',
        storyModuleId: 'story-genesis-joseph',
        chapterId: 'GEN-37',
        anchorVerseNumber: 3,
      },
      {
        reference: 'Genesis 50:1–26',
        label: '"God Meant It for Good"',
        storyModuleId: 'story-genesis-joseph',
        chapterId: 'GEN-50',
        anchorVerseNumber: 20,
      },
    ],
  },

  'char-profile-cain': {
    id: 'char-profile-cain',
    name: 'Cain',
    nameMeaning: 'Hebrew: קַיִן / Qayin ("Acquired / Forged")',
    era: 'Primeval History',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-cain',
    quickBio:
      'Firstborn son of Adam and Eve who worked the fertile ground outside Eden. When anger toward his brother Abel boiled over, God warned him gently that sin was crouching at the door—yet after tragedy, God still placed a protective mark upon him.',
    familyTree: {
      parents: ['char-profile-adam', 'char-profile-eve'],
      siblings: ['char-profile-abel', 'char-profile-seth'],
      spouse: ['Wife east of Eden'],
      children: ['Enoch (son of Cain)'],
    },
    locationsLived: [
      {
        placeName: 'Outside Eden',
        roleInLife: 'Tilled the soil and offered crops of the ground alongside Abel',
        coordinates: { lat: 33.2, lng: 44.4 },
        mapPinId: 'loc-eden',
      },
      {
        placeName: 'Land of Nod',
        roleInLife: 'Settled east of Eden and founded the first named city',
        coordinates: { lat: 33.5, lng: 45.8 },
        mapPinId: 'loc-eden',
      },
    ],
    whyTheyMatter: [
      'Warns honestly how unchecked jealousy can turn worship into rivalry and violence.',
      'Shows God’s sobering patience—counseling sinners before judgment falls (Genesis 4:7).',
    ],
    keyChapters: [
      {
        reference: 'Genesis 4:1–16',
        label: 'Cain, Abel & Mastery Over Sin',
        storyModuleId: 'story-genesis-cain-abel',
        chapterId: 'GEN-4',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-abel': {
    id: 'char-profile-abel',
    name: 'Abel',
    nameMeaning: 'Hebrew: הֶבֶל / Hevel ("Breath / Vapor")',
    era: 'Primeval History',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-abel',
    quickBio:
      'Second son of Adam and Eve and a gentle keeper of sheep who brought the finest firstborn portions to God in genuine faith. Though his life was cut terribly short by his brother’s envy, Scripture remembers him as the first faithful witness.',
    familyTree: {
      parents: ['char-profile-adam', 'char-profile-eve'],
      siblings: ['char-profile-cain', 'char-profile-seth'],
      spouse: [],
      children: [],
    },
    locationsLived: [
      {
        placeName: 'Pastures East of Eden',
        roleInLife: 'Tended flocks and offered a pleasing sacrifice from his best',
        coordinates: { lat: 33.2, lng: 44.5 },
        mapPinId: 'loc-eden',
      },
    ],
    whyTheyMatter: [
      'Demonstrates wholehearted worship offered from faith rather than empty duty (Hebrews 11:4).',
      'First figure listed in the Hall of Faith—"though he died, he still speaks."',
    ],
    keyChapters: [
      {
        reference: 'Genesis 4:2–10',
        label: 'Faithful Worship & Innocent Blood',
        storyModuleId: 'story-genesis-cain-abel',
        chapterId: 'GEN-4',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-seth': {
    id: 'char-profile-seth',
    name: 'Seth',
    nameMeaning: 'Hebrew: שֵׁת / Shet ("Appointed / Granted")',
    era: 'Primeval History',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-seth',
    quickBio:
      'Third named son of Adam and Eve, whom Eve joyfully saw as God’s appointed gift after losing Abel. Through Seth’s son Enosh, people began gathering openly to call upon the name of the LORD, carrying the line of promise toward Noah.',
    familyTree: {
      parents: ['char-profile-adam', 'char-profile-eve'],
      siblings: ['char-profile-cain', 'char-profile-abel'],
      spouse: ['Wife of Seth'],
      children: ['Enosh'],
    },
    locationsLived: [
      {
        placeName: 'Mesopotamia',
        roleInLife: 'Raised the covenant family where public prayer to Yahweh began',
        coordinates: { lat: 33.4, lng: 44.8 },
        mapPinId: 'loc-eden',
      },
    ],
    whyTheyMatter: [
      'Anchor of Genesis 5’s faithful genealogy leading to Enoch, Noah, and Abraham.',
      'Marks the first recorded generation to call upon the name of Yahweh in worship (Genesis 4:26).',
    ],
    keyChapters: [
      {
        reference: 'Genesis 4:25–5:8',
        label: 'A New Beginning After Grief',
        storyModuleId: 'story-genesis-cain-abel',
        chapterId: 'GEN-4',
        anchorVerseNumber: 26,
      },
    ],
  },

  'char-profile-hagar': {
    id: 'char-profile-hagar',
    name: 'Hagar',
    nameMeaning: 'Hebrew: הָגָר / Hagar ("Flight / Stranger")',
    era: 'Patriarchal Era ~2000 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-hagar',
    quickBio:
      'An Egyptian maidservant caught in Sarah and Abraham’s impatience who fled alone into the harsh desert. Beside a wilderness spring, the Angel of the LORD met her compassionately—and Hagar became the only person in Scripture to name God: El Roi ("The God Who Sees Me").',
    familyTree: {
      parents: ['Egypt'],
      siblings: [],
      spouse: ['char-profile-abraham'],
      children: ['Ishmael'],
    },
    locationsLived: [
      {
        placeName: 'Hebron / Canaan',
        roleInLife: 'Served in Abraham and Sarah’s household as mother of Ishmael',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
      {
        placeName: 'Beer-lahai-roi (Wilderness of Shur)',
        roleInLife: 'Met God at a desert well and received His saving promise',
        coordinates: { lat: 30.8, lng: 34.4 },
        mapPinId: 'loc-kadesh',
      },
    ],
    whyTheyMatter: [
      'Named God "El Roi" ("The God Who Sees Me")—reminding every overlooked person they are known.',
      'Shows God’s tender provision even for those pushed outside the main tent.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 16:1–16',
        label: 'Meeting "The God Who Sees Me"',
        storyModuleId: 'story-genesis-hagar',
        chapterId: 'GEN-16',
        anchorVerseNumber: 13,
      },
    ],
  },

  'char-profile-leah': {
    id: 'char-profile-leah',
    name: 'Leah',
    nameMeaning: 'Hebrew: לֵאָה / Leah ("Weary / Gentle-Eyed")',
    era: 'Patriarchal Era ~1800 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-leah',
    quickBio:
      'Older sister of Rachel and Jacob’s first wife through Laban’s wedding scheme. Though she endured aching loneliness for years, God saw that Leah was unloved and blessed her with six sons—naming her fourth son Judah: "This time I will praise the LORD."',
    familyTree: {
      parents: ['Laban'],
      siblings: ['char-profile-rachel'],
      spouse: ['char-profile-jacob'],
      children: ['Reuben', 'Simeon', 'Levi', 'Judah', 'Issachar', 'Zebulun'],
    },
    locationsLived: [
      {
        placeName: 'Haran',
        roleInLife: 'Grew up in Laban’s household and married Jacob under veiled night',
        coordinates: { lat: 36.8, lng: 39.0 },
        mapPinId: 'loc-haran',
      },
      {
        placeName: 'Hebron (Cave of Machpelah)',
        roleInLife: 'Buried alongside Abraham, Sarah, Isaac, Rebekah, and Jacob',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
    ],
    whyTheyMatter: [
      'Became mother of both Israel’s priesthood (Levi) and royal Messianic tribe (Judah).',
      'Models turning heartbreak into wholehearted praise when feeling second-best.',
    ],
    keyChapters: [
      {
        reference: 'Genesis 29:16–35',
        label: 'From Unloved Sister to Mother of Praise',
        storyModuleId: 'story-genesis-jacob',
        chapterId: 'GEN-29',
        anchorVerseNumber: 35,
      },
    ],
  },

  'char-profile-zipporah': {
    id: 'char-profile-zipporah',
    name: 'Zipporah',
    nameMeaning: 'Hebrew: צִפֹּרָה / Tzipporah ("Little Bird")',
    era: 'Exodus Era ~1446 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-zipporah',
    quickBio:
      'Daughter of the Midianite priest Jethro who welcomed fugitive Moses at a desert well and became his wife. Zipporah acted courageously during Moses’s dangerous journey back to Egypt and later reunited with him at Mount Sinai.',
    familyTree: {
      parents: ['char-profile-jethro'],
      siblings: ['Six Midianite Sisters'],
      spouse: ['char-profile-moses'],
      children: ['Gershom', 'Eliezer'],
    },
    locationsLived: [
      {
        placeName: 'Midian',
        roleInLife: 'Tended her father’s flocks and lived with Moses for 40 years',
        coordinates: { lat: 28.5, lng: 34.8 },
        mapPinId: 'loc-midian',
      },
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Rejoined Moses in the Israelite camp alongside her father Jethro',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'Sheltered and partnered with Moses during his forty hidden years in Midian.',
      'Showed decisive courage when Moses’s life was threatened on the return to Egypt (Exodus 4:25).',
    ],
    keyChapters: [
      {
        reference: 'Exodus 2:15–25',
        label: 'Meeting Moses in Midian',
        storyModuleId: 'story-exodus-burning-bush',
        chapterId: 'EXO-2',
        anchorVerseNumber: 21,
      },
      {
        reference: 'Exodus 18:1–27',
        label: 'Reunion at Sinai',
        storyModuleId: 'story-exodus-commandments',
        chapterId: 'EXO-18',
        anchorVerseNumber: 2,
      },
    ],
  },

  'char-profile-jethro': {
    id: 'char-profile-jethro',
    name: 'Jethro (Reuel)',
    nameMeaning: 'Hebrew: יִתְרוֹ / Yitro ("Excellence / Abundance")',
    era: 'Exodus Era ~1446 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-jethro',
    quickBio:
      'Midianite priest who welcomed runaway Moses into his home and became his trusted father-in-law. Visiting Israel’s camp at Sinai, Jethro blessed Yahweh and gave Moses timeless leadership wisdom on delegating responsibility.',
    familyTree: {
      parents: ['Midianite Elders'],
      siblings: [],
      spouse: [],
      children: ['char-profile-zipporah', 'Hobab'],
    },
    locationsLived: [
      {
        placeName: 'Midian',
        roleInLife: 'Offered Moses shelter, work as a shepherd, and Zipporah’s hand in marriage',
        coordinates: { lat: 28.5, lng: 34.8 },
        mapPinId: 'loc-midian',
      },
      {
        placeName: 'Rephidim / Sinai',
        roleInLife: 'Taught Moses to appoint trustworthy judges over tens, fifties, and thousands',
        coordinates: { lat: 28.7, lng: 33.6 },
        mapPinId: 'loc-rephidim',
      },
    ],
    whyTheyMatter: [
      'Even as a non-Israelite Midianite, confessed "Now I know that Yahweh is greater than all gods" (Ex 18:11).',
      'Modeled healthy leadership structure so Moses wouldn’t burn out carrying every burden alone.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 18:1–27',
        label: 'Jethro’s Wise Counsel',
        storyModuleId: 'story-exodus-commandments',
        chapterId: 'EXO-18',
        anchorVerseNumber: 17,
      },
    ],
  },

  'char-profile-joshua': {
    id: 'char-profile-joshua',
    name: 'Joshua',
    nameMeaning: 'Hebrew: יְהוֹשֻׁעַ / Yehoshua ("Yahweh is Salvation")',
    era: 'Exodus & Conquest ~1446–1375 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-joshua',
    quickBio:
      'Young Ephraimite warrior who served loyally as Moses’s personal aide throughout the wilderness journey. Joshua led Israel’s defense at Rephidim, lingered near the Tent of Meeting, and later guided Israel into the Promised Land.',
    familyTree: {
      parents: ['Nun'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Rephidim',
        roleInLife: 'Led Israel’s defense while Moses, Aaron, and Hur prayed on the hilltop',
        coordinates: { lat: 28.7, lng: 33.6 },
        mapPinId: 'loc-rephidim',
      },
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Accompanied Moses partway up the mountain and lingered in the Tent of Meeting',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
      {
        placeName: 'Plains of Moab',
        roleInLife: 'Commissioned publicly by Moses to lead Israel across the Jordan River',
        coordinates: { lat: 31.8, lng: 35.6 },
        mapPinId: 'loc-moab',
      },
      {
        placeName: 'Gilgal & Jericho',
        roleInLife: 'Crossed the flooded Jordan, built twelve memorial stones, and saw Jericho fall',
        coordinates: { lat: 31.9, lng: 35.5 },
        mapPinId: 'loc-gilgal',
      },
    ],
    whyTheyMatter: [
      'Showcases faithful apprenticeship long before stepping into public leadership.',
      'Shares the exact Hebrew name of Jesus ("Yeshua" — Yahweh Saves).',
    ],
    keyChapters: [
      {
        reference: 'Exodus 17:8–16',
        label: 'Victory at Rephidim',
        storyModuleId: 'story-exodus-manna',
        chapterId: 'EXO-17',
        anchorVerseNumber: 9,
      },
      {
        reference: 'Exodus 33:7–11',
        label: 'Lingering in God’s Presence',
        storyModuleId: 'story-exodus-compassion',
        chapterId: 'EXO-33',
        anchorVerseNumber: 11,
      },
      {
        reference: 'Deuteronomy 31:1–8',
        label: 'Be Strong & Courageous',
        storyModuleId: 'story-deu-joshua',
        chapterId: 'DEU-31',
        anchorVerseNumber: 8,
      },
      {
        reference: 'Joshua 1:1–9',
        label: 'Commissioned to Cross Jordan',
        storyModuleId: 'story-jos-courage',
        chapterId: 'JOS-1',
        anchorVerseNumber: 9,
      },
      {
        reference: 'Joshua 24:1–28',
        label: '"As for Me & My House"',
        storyModuleId: 'story-jos-choose',
        chapterId: 'JOS-24',
        anchorVerseNumber: 15,
      },
    ],
  },

  'char-profile-bezalel': {
    id: 'char-profile-bezalel',
    name: 'Bezalel',
    nameMeaning: 'Hebrew: בְּצַלְאֵל / Betzalel ("In the Shadow of God")',
    era: 'Exodus Era ~1445 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-bezalel',
    quickBio:
      'Master artist and craftsman from the tribe of Judah whom God filled with His Spirit to design the Tabernacle. Bezalel fashioned the golden Ark, Mercy Seat, Menorah, and woven curtains out of the camp’s generous gifts.',
    familyTree: {
      parents: ['Uri', 'char-profile-hur'],
      siblings: ['Oholiab (Co-artisan)'],
    },
    locationsLived: [
      {
        placeName: 'Mount Sinai Camp',
        roleInLife: 'Crafted the Tabernacle furnishings and trained fellow artisans',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'The very first person in Scripture explicitly described as "filled with the Spirit of God"—specifically for creativity and art.',
      'Proves beauty, woodworking, embroidery, and craftsmanship honor God as true worship.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 31:1–18',
        label: 'Filled with the Spirit for Art',
        storyModuleId: 'story-exodus-tabernacle',
        chapterId: 'EXO-31',
        anchorVerseNumber: 3,
      },
      {
        reference: 'Exodus 37:1–29',
        label: 'Crafting the Ark & Lampstand',
        storyModuleId: 'story-exodus-tabernacle',
        chapterId: 'EXO-37',
        anchorVerseNumber: 1,
      },
    ],
  },

  'char-profile-pharaoh': {
    id: 'char-profile-pharaoh',
    name: 'Pharaoh of the Exodus',
    nameMeaning: 'Hebrew: פַּרְעֹה / Paroh ("Great House" · Egyptian Royal Title)',
    era: 'Exodus Era ~1446 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-pharaoh',
    quickBio:
      'Mighty Egyptian ruler who enslaved Israel out of fear and defied God’s repeated call to "let My people go." Through ten escalating plagues, Pharaoh’s hardened heart became a warning against prideful resistance to God.',
    familyTree: {
      parents: ['Egyptian Royal Dynasty'],
      siblings: [],
      children: ['Firstborn Son of Egypt'],
    },
    locationsLived: [
      {
        placeName: 'Nile Delta (Rameses)',
        roleInLife: 'Ruled Egypt’s empire and refused Moses’s requests nine times',
        coordinates: { lat: 30.8, lng: 31.3 },
        mapPinId: 'loc-nile',
      },
      {
        placeName: 'Red Sea (Yam Suph)',
        roleInLife: 'Pursued freed Israelite families with 600 chariots into the parted sea',
        coordinates: { lat: 29.9, lng: 32.5 },
        mapPinId: 'loc-red-sea',
      },
    ],
    whyTheyMatter: [
      'Demonstrates that earthly superpowers cannot enslave people whom God decides to set free.',
      'Illustrates the tragic danger of repeatedly hardening one’s heart against mercy and truth.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 5:1–23',
        label: 'Bricks Without Straw',
        storyModuleId: 'story-exodus-burning-bush',
        chapterId: 'EXO-5',
        anchorVerseNumber: 2,
      },
      {
        reference: 'Exodus 14:1–31',
        label: 'Pursuit at the Red Sea',
        storyModuleId: 'story-exodus-red-sea',
        chapterId: 'EXO-14',
        anchorVerseNumber: 14,
      },
    ],
  },

  'char-profile-jochebed': {
    id: 'char-profile-jochebed',
    name: 'Jochebed',
    nameMeaning: 'Hebrew: יוֹכֶבֶד / Yokheved ("Yahweh is Glory")',
    era: 'Exodus Era ~1526 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-jochebed',
    quickBio:
      'Courageous Levite mother who defied Pharaoh’s decree by hiding newborn Moses for three months. When she could hide him no longer, she wove a pitched papyrus basket on the Nile—and ended up paid by Pharaoh’s household to nurse her own child.',
    familyTree: {
      parents: ['Tribe of Levi'],
      siblings: [],
      spouse: ['Amram'],
      children: ['char-profile-miriam', 'char-profile-aaron', 'char-profile-moses'],
    },
    locationsLived: [
      {
        placeName: 'Goshen & Nile Riverbanks',
        roleInLife: 'Hid baby Moses in faith and raised Israel’s future deliverer, priest, and prophetess',
        coordinates: { lat: 30.8, lng: 31.8 },
        mapPinId: 'loc-nile',
      },
    ],
    whyTheyMatter: [
      'Honored in Hebrews 11:23 for fearless faith that refused to bow to royal tyranny.',
      'Taught Moses his true heritage before delivering him back to Pharaoh’s palace.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 2:1–10',
        label: 'Basket Among the Reeds',
        storyModuleId: 'story-exodus-burning-bush',
        chapterId: 'EXO-2',
        anchorVerseNumber: 3,
      },
    ],
  },

  'char-profile-hur': {
    id: 'char-profile-hur',
    name: 'Hur',
    nameMeaning: 'Hebrew: חוּר / Chur ("Liberty / Noble")',
    era: 'Exodus Era ~1446 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-hur',
    quickBio:
      'Trusted leader from the tribe of Judah who climbed the ridge at Rephidim alongside Aaron to steady Moses’s weary arms until sunset. Hur later helped shepherd the camp while Moses ascended Sinai and became grandfather to Tabernacle artisan Bezalel.',
    familyTree: {
      parents: ['Caleb (son of Hezron)'],
      siblings: [],
      spouse: [],
      children: ['Uri', 'char-profile-bezalel'],
    },
    locationsLived: [
      {
        placeName: 'Rephidim',
        roleInLife: 'Rolled a stone for Moses to sit on and upheld his hands through battle',
        coordinates: { lat: 28.7, lng: 33.6 },
        mapPinId: 'loc-rephidim',
      },
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Left in shared charge of Israel’s disputes alongside Aaron',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'Models quiet, behind-the-scenes faithfulness—supporting a tired friend so an entire nation wins.',
      'Patriarch of the skilled lineage that produced Tabernacle master craftsman Bezalel.',
    ],
    keyChapters: [
      {
        reference: 'Exodus 17:8–13',
        label: 'Upholding Moses’s Arms',
        storyModuleId: 'story-exodus-manna',
        chapterId: 'EXO-17',
        anchorVerseNumber: 12,
      },
    ],
  },

  'char-profile-eleazar': {
    id: 'char-profile-eleazar',
    name: 'Eleazar',
    nameMeaning: 'Hebrew: אֶלְעָזָר / Elazar ("God has helped")',
    era: 'Sinai & Wilderness ~1445–1380 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-eleazar',
    quickBio:
      'Third son of High Priest Aaron who stepped faithfully into priestly leadership after his older brothers’ tragedy in Leviticus 10. Eleazar succeeded Aaron on Mount Hor and later partnered with Joshua to divide the Promised Land.',
    familyTree: {
      parents: ['char-profile-aaron', 'Elisheba'],
      siblings: ['char-profile-ithamar', 'char-profile-nadab', 'char-profile-abihu'],
      children: ['char-profile-phinehas'],
    },
    locationsLived: [
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Ordained alongside Aaron and stepped up after Leviticus 10',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
      {
        placeName: 'Mount Hor',
        roleInLife: 'Received the High Priestly garments from Aaron on the mountain slope',
        coordinates: { lat: 30.3, lng: 35.4 },
        mapPinId: 'loc-mount-hor',
      },
      {
        placeName: 'Canaan',
        roleInLife: 'Served alongside Joshua dividing tribal inheritances',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Modeled steady, humble faithfulness during a painful family crisis in Leviticus 10.',
      'Carried the High Priestly breastplate from Sinai across the wilderness into Canaan.',
    ],
    keyChapters: [
      {
        reference: 'Leviticus 10:1–20',
        label: 'Stepping Up in Reverence',
        storyModuleId: 'story-leviticus-glory',
        chapterId: 'LEV-10',
        anchorVerseNumber: 16,
      },
      {
        reference: 'Numbers 20:22–29',
        label: 'Receiving Aaron’s Mantle',
        storyModuleId: 'story-num-blessing',
        chapterId: 'NUM-20',
        anchorVerseNumber: 28,
      },
    ],
  },

  'char-profile-ithamar': {
    id: 'char-profile-ithamar',
    name: 'Ithamar',
    nameMeaning: 'Hebrew: אִיתָמָר / Itamar ("Coast of Palms")',
    era: 'Sinai & Wilderness ~1445 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-ithamar',
    quickBio:
      'Youngest son of Aaron who faithfully organized the Tabernacle’s gold, silver, and bronze accounts alongside Moses and Bezalel. After Nadab and Abihu perished, Ithamar stood beside Eleazar to maintain daily sanctuary worship.',
    familyTree: {
      parents: ['char-profile-aaron', 'Elisheba'],
      siblings: ['char-profile-eleazar', 'char-profile-nadab', 'char-profile-abihu'],
    },
    locationsLived: [
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Recorded the Tabernacle materials and served with Aaron and Eleazar',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'Demonstrated transparent integrity by auditing every Tabernacle offering (Ex 38:21).',
      'Preserved Israel’s priestly ministry alongside his brother Eleazar.',
    ],
    keyChapters: [
      {
        reference: 'Leviticus 8:1–36',
        label: 'Ordaining the Priests',
        storyModuleId: 'story-leviticus-glory',
        chapterId: 'LEV-8',
        anchorVerseNumber: 2,
      },
    ],
  },

  'char-profile-nadab': {
    id: 'char-profile-nadab',
    name: 'Nadab',
    nameMeaning: 'Hebrew: נָדָב / Nadav ("Willing / Generous")',
    era: 'Sinai ~1445 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-nadab',
    quickBio:
      'Aaron’s eldest son who climbed Mount Sinai with Moses and witnessed God’s sapphire glory alongside Israel’s elders. In Leviticus 10, his rash decision alongside Abihu to offer "unauthorized fire" became a solemn lesson on honoring God’s holiness.',
    familyTree: {
      parents: ['char-profile-aaron', 'Elisheba'],
      siblings: ['char-profile-abihu', 'char-profile-eleazar', 'char-profile-ithamar'],
    },
    locationsLived: [
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Dined with Israel’s elders on the mountain before serving at the Tent of Meeting',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'Reminds spiritual leaders that familiarity with holy things must never replace careful reverence.',
      'His warning in Leviticus 10 directly led to the protective Day of Atonement safeguards in Leviticus 16.',
    ],
    keyChapters: [
      {
        reference: 'Leviticus 10:1–20',
        label: 'Reverence in Worship',
        storyModuleId: 'story-leviticus-glory',
        chapterId: 'LEV-10',
        anchorVerseNumber: 1,
      },
    ],
  },

  'char-profile-abihu': {
    id: 'char-profile-abihu',
    name: 'Abihu',
    nameMeaning: 'Hebrew: אֲבִיהוּא / Avihu ("He Is My Father")',
    era: 'Sinai ~1445 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-abihu',
    quickBio:
      'Second son of Aaron who was consecrated as a priest at Sinai alongside his brothers. Joining Nadab in offering unauthorized incense in Leviticus 10, his story underscores approaching God with humility and clear obedience.',
    familyTree: {
      parents: ['char-profile-aaron', 'Elisheba'],
      siblings: ['char-profile-nadab', 'char-profile-eleazar', 'char-profile-ithamar'],
    },
    locationsLived: [
      {
        placeName: 'Mount Sinai',
        roleInLife: 'Ordained at the sanctuary entrance before serving beside Nadab',
        coordinates: { lat: 28.5, lng: 33.9 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'Demonstrates why clear reverence and sobriety matter for everyone leading worship.',
      'Prompted Israel’s priests to distinguish faithfully between the holy and the common (Leviticus 10:10).',
    ],
    keyChapters: [
      {
        reference: 'Leviticus 10:1–11',
        label: 'Holiness Before the LORD',
        storyModuleId: 'story-leviticus-glory',
        chapterId: 'LEV-10',
        anchorVerseNumber: 1,
      },
    ],
  },

  'char-profile-caleb': {
    id: 'char-profile-caleb',
    name: 'Caleb',
    nameMeaning: 'Hebrew: כָּלֵב / Kalev ("Wholehearted / Bold")',
    era: 'Wilderness ~1444–1380 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-caleb',
    quickBio:
      'Representing the tribe of Judah among the twelve scouts sent into Canaan, Caleb stood almost alone at Kadesh Barnea urging Israel to trust God against terrifying giants. Forty years later he still claimed his promised mountain in Hebron.',
    familyTree: {
      parents: ['Jephunneh'],
      siblings: [],
      children: ['Achsah'],
    },
    locationsLived: [
      {
        placeName: 'Kadesh Barnea',
        roleInLife: 'Quieted the panicked camp and stood beside Joshua for faith',
        coordinates: { lat: 30.6, lng: 34.4 },
        mapPinId: 'loc-kadesh',
      },
      {
        placeName: 'Hebron',
        roleInLife: 'Scouted Hebron at 40 and inherited it faithfully decades later',
        coordinates: { lat: 31.5, lng: 35.1 },
        mapPinId: 'loc-hebron',
      },
    ],
    whyTheyMatter: [
      'God praised Caleb as having "a different spirit" and following Him wholeheartedly (Numbers 14:24).',
      'Shows that real courage isn’t ignoring giants—it is trusting God’s promise more than fear.',
    ],
    keyChapters: [
      {
        reference: 'Numbers 13:26–33',
        label: 'Stilling the Fearful Crowd',
        storyModuleId: 'story-num-spies',
        chapterId: 'NUM-13',
        anchorVerseNumber: 30,
      },
      {
        reference: 'Numbers 14:1–24',
        label: 'A Different Spirit',
        storyModuleId: 'story-num-spies',
        chapterId: 'NUM-14',
        anchorVerseNumber: 24,
      },
      {
        reference: 'Joshua 14:6–15',
        label: '"Give Me This Mountain" at 85',
        storyModuleId: 'story-jos-caleb-hebron',
        chapterId: 'JOS-14',
        anchorVerseNumber: 12,
      },
    ],
  },

  'char-profile-balaam': {
    id: 'char-profile-balaam',
    name: 'Balaam',
    nameMeaning: 'Hebrew: בִּלְעָם / Bilam ("Not of the People")',
    era: 'Plains of Moab ~1406 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-balaam',
    quickBio:
      'A famous Mesopotamian seer hired by King Balak of Moab to curse Israel. Stopped along the road by his own humble donkey seeing the Angel of Yahweh, Balaam became an unwilling mouthpiece of blessing—even foreseeing a bright Messianic Star.',
    familyTree: {
      parents: ['Beor'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Plains of Moab',
        roleInLife: 'Spoke four poetic blessings over Israel from Moab’s ridges',
        coordinates: { lat: 31.8, lng: 35.6 },
        mapPinId: 'loc-moab',
      },
    ],
    whyTheyMatter: [
      'Demonstrates God’s total sovereignty: even a hired enemy seer could only bless what God blessed.',
      'Delivered the iconic prophecy "A Star will come out of Jacob" (Numbers 24:17).',
    ],
    keyChapters: [
      {
        reference: 'Numbers 22:21–35',
        label: 'The Talking Donkey',
        storyModuleId: 'story-num-balaam',
        chapterId: 'NUM-22',
        anchorVerseNumber: 28,
      },
      {
        reference: 'Numbers 24:14–19',
        label: 'The Star Out of Jacob',
        storyModuleId: 'story-num-balaam',
        chapterId: 'NUM-24',
        anchorVerseNumber: 17,
      },
    ],
  },

  'char-profile-zelophehad-daughters': {
    id: 'char-profile-zelophehad-daughters',
    name: 'Daughters of Zelophehad',
    nameMeaning: 'Mahlah, Noah, Hoglah, Milcah & Tirzah',
    era: 'Plains of Moab ~1406 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-zelophehad',
    quickBio:
      'Five courageous sisters from the tribe of Manasseh who stood publicly before Moses, Eleazar, and Israel’s elders when their father died leaving no sons. God affirmed their appeal as completely right and updated inheritance law.',
    familyTree: {
      parents: ['Zelophehad'],
      siblings: ['Mahlah', 'Noah', 'Hoglah', 'Milcah', 'Tirzah'],
    },
    locationsLived: [
      {
        placeName: 'Plains of Moab',
        roleInLife: 'Advocated at the Tent of Meeting entrance and won lasting legal reform',
        coordinates: { lat: 31.8, lng: 35.6 },
        mapPinId: 'loc-moab',
      },
    ],
    whyTheyMatter: [
      'Reminded an entire nation that faith in God’s promise applies equally to daughters and sons.',
      'God endorsed their courage directly: "The daughters of Zelophehad speak what is right" (Numbers 27:7).',
    ],
    keyChapters: [
      {
        reference: 'Numbers 27:1–11',
        label: 'Courageous Plea for Justice',
        storyModuleId: 'story-num-zelophehad',
        chapterId: 'NUM-27',
        anchorVerseNumber: 7,
      },
      {
        reference: 'Numbers 36:1–13',
        label: 'Honoring Their Inheritance',
        storyModuleId: 'story-num-zelophehad',
        chapterId: 'NUM-36',
        anchorVerseNumber: 11,
      },
    ],
  },

  'char-profile-phinehas': {
    id: 'char-profile-phinehas',
    name: 'Phinehas',
    nameMeaning: 'Hebrew: פִּינְחָס / Pinechas ("Oracle / Nubian")',
    era: 'Plains of Moab ~1406 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-phinehas',
    quickBio:
      'Grandson of Aaron and son of High Priest Eleazar whose decisive courage at Peor stopped a devastating plague in the camp. In response, God established a covenant of peace and enduring priesthood with his family line.',
    familyTree: {
      parents: ['char-profile-eleazar', 'Daughter of Putiel'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Plains of Moab',
        roleInLife: 'Took decisive action to turn away plague and received God’s covenant of peace',
        coordinates: { lat: 31.8, lng: 35.6 },
        mapPinId: 'loc-moab',
      },
    ],
    whyTheyMatter: [
      'Honored with God’s rare "covenant of peace" (Numbers 25:12) for protecting the community.',
      'Carried the High Priestly succession into the generation of Joshua and the Judges.',
    ],
    keyChapters: [
      {
        reference: 'Numbers 25:1–13',
        label: 'Covenant of Peace',
        storyModuleId: 'story-num-blessing',
        chapterId: 'NUM-25',
        anchorVerseNumber: 12,
      },
    ],
  },

  'char-profile-korah': {
    id: 'char-profile-korah',
    name: 'Korah',
    nameMeaning: 'Hebrew: קֹרַח / Qorach ("Ice / Bold")',
    era: 'Wilderness ~1444 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-korah',
    quickBio:
      'Kohathite Levite cousin of Moses and Aaron entrusted with carrying the sacred Tabernacle furniture. Tragically, Korah grew envious of Aaron’s priesthood and led 250 rebels before the earth swallowed the uprising—yet God spared Korah’s sons, who later became cherished Psalmists in Jerusalem.',
    familyTree: {
      parents: ['Izhar (Tribe of Levi)'],
      siblings: ['char-profile-moses (Cousin)', 'char-profile-aaron (Cousin)'],
      children: ['Sons of Korah (Psalmists)'],
    },
    locationsLived: [
      {
        placeName: 'Wilderness of Paran',
        roleInLife: 'Served with the Kohathite Levites before leading a rebellion against Moses and Aaron',
        coordinates: { lat: 30.6, lng: 34.4 },
        mapPinId: 'loc-kadesh',
      },
    ],
    whyTheyMatter: [
      'Warns honestly how comparing callings and nursing envy can poison a privileged role of service.',
      'Proves God’s redeeming grace across generations: though Korah rebelled, his sons lived to write Psalm 42, 46, and 84.',
    ],
    keyChapters: [
      {
        reference: 'Numbers 16:1–35',
        label: 'Envy & Grace for Next Generations',
        storyModuleId: 'story-num-staff',
        chapterId: 'NUM-16',
        anchorVerseNumber: 3,
      },
    ],
  },

  'char-profile-rahab': {
    id: 'char-profile-rahab',
    name: 'Rahab',
    nameMeaning: 'Hebrew: רָחָב / Rachav ("Wide / Spacious")',
    era: 'Conquest ~1406 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-rahab',
    quickBio:
      'A courageous Jericho innkeeper who sheltered Israel’s scouts on her roof and confessed Yahweh as God of heaven and earth. Rescued alongside her entire family by hanging a scarlet cord in her window, Rahab married Salmon and became Boaz’s mother and an ancestor of Jesus.',
    familyTree: {
      parents: ['Jericho Household'],
      siblings: ['Protected brothers & sisters'],
      spouse: ['Salmon'],
      children: ['char-profile-boaz'],
    },
    locationsLived: [
      {
        placeName: 'Jericho',
        roleInLife: 'Sheltered Israelite spies and hung the scarlet cord in her city-wall window',
        coordinates: { lat: 31.9, lng: 35.4 },
        mapPinId: 'loc-jericho',
      },
    ],
    whyTheyMatter: [
      'Celebrated in Hebrews 11:31 and James 2:25 for bold faith put into protective action.',
      'Named directly in Matthew 1:5 as mother of Boaz and great-great-grandmother of King David.',
    ],
    keyChapters: [
      {
        reference: 'Joshua 2:1–24',
        label: 'Rahab & the Scarlet Cord',
        storyModuleId: 'story-jos-rahab',
        chapterId: 'JOS-2',
        anchorVerseNumber: 11,
      },
      {
        reference: 'Joshua 6:22–25',
        label: 'Rescued Into Israel',
        storyModuleId: 'story-jos-jericho',
        chapterId: 'JOS-6',
        anchorVerseNumber: 25,
      },
    ],
  },

  'char-profile-deborah': {
    id: 'char-profile-deborah',
    name: 'Deborah',
    nameMeaning: 'Hebrew: דְּבוֹרָה / Devorah ("Honeybee")',
    era: 'Era of Judges ~1200 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-deborah',
    quickBio:
      'Prophetess, poet, and respected judge in Israel’s central hill country who held open-air court beneath a palm tree between Ramah and Bethel. When Barak hesitated before Sisera’s 900 iron chariots, Deborah walked alongside him and sang Israel’s triumphant victory hymn.',
    familyTree: {
      parents: ['Israel of Ephraim'],
      siblings: [],
      spouse: ['Lappidoth'],
    },
    locationsLived: [
      {
        placeName: 'Mount Tabor & Kishon',
        roleInLife: 'Stood with Barak overlooking the Jezreel Valley and celebrated victory in song',
        coordinates: { lat: 32.7, lng: 35.4 },
        mapPinId: 'loc-mount-tabor',
      },
      {
        placeName: 'Bethel Highlands',
        roleInLife: 'Rendered wise, peaceful counsel beneath the Palm of Deborah',
        coordinates: { lat: 31.9, lng: 35.2 },
        mapPinId: 'loc-bethel',
      },
    ],
    whyTheyMatter: [
      'Called herself "a mother in Israel" (Judges 5:7), blending spiritual insight with civic courage.',
      'Authored one of Scripture’s most vivid worship poems in Judges 5.',
    ],
    keyChapters: [
      {
        reference: 'Judges 4:1–24',
        label: 'Deborah & Barak at Tabor',
        storyModuleId: 'story-jdg-deborah',
        chapterId: 'JDG-4',
        anchorVerseNumber: 14,
      },
      {
        reference: 'Judges 5:1–31',
        label: 'The Song of Deborah',
        storyModuleId: 'story-jdg-deborah',
        chapterId: 'JDG-5',
        anchorVerseNumber: 31,
      },
    ],
  },

  'char-profile-gideon': {
    id: 'char-profile-gideon',
    name: 'Gideon',
    nameMeaning: 'Hebrew: גִּדְעוֹן / Gidon ("Hewer / Warrior")',
    era: 'Era of Judges ~1160 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-gideon',
    quickBio:
      'Young farmer from the smallest clan of Manasseh who threshed wheat hidden inside a sunken winepress out of fear of Midianite raiders. Greeted by God as "mighty man of valor," Gideon tore down idols and defeated a massive host with 300 soldiers carrying clay jars and glowing torches.',
    familyTree: {
      parents: ['Joash the Abiezrite'],
      siblings: [],
      children: ['Jotham'],
    },
    locationsLived: [
      {
        placeName: 'Spring of Harod',
        roleInLife: 'Trusted God as 32,000 fighters narrowed down to 300 watchful troops',
        coordinates: { lat: 32.6, lng: 35.4 },
        mapPinId: 'loc-harod',
      },
    ],
    whyTheyMatter: [
      'Proves God delights to work through anxious, honest people who ask patient questions.',
      'Wise leadership motto in Judges 8:23: "Yahweh shall rule over you!"',
    ],
    keyChapters: [
      {
        reference: 'Judges 6:11–40',
        label: 'Mighty Man of Valor & Fleece',
        storyModuleId: 'story-jdg-gideon-call',
        chapterId: 'JDG-6',
        anchorVerseNumber: 14,
      },
      {
        reference: 'Judges 7:1–22',
        label: 'Three Hundred Torches & Jars',
        storyModuleId: 'story-jdg-300',
        chapterId: 'JDG-7',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-samson': {
    id: 'char-profile-samson',
    name: 'Samson',
    nameMeaning: 'Hebrew: שִׁמְשׁוֹן / Shimshon ("Little Sun")',
    era: 'Era of Judges ~1080 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-samson',
    quickBio:
      'Set apart from birth as a Nazirite after an angelic promise to Manoah and his wife, Samson carried astonishing Spirit-empowered strength against Philistine oppression. Though blinded after compromising his vow, his humble final prayer brought mercy and deliverance.',
    familyTree: {
      parents: ['Manoah & Mother of Samson'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Valley of Sorek',
        roleInLife: 'Lived along the Judah–Philistine borderlands from Zorah to Sorek',
        coordinates: { lat: 31.8, lng: 35.0 },
        mapPinId: 'loc-sorek',
      },
    ],
    whyTheyMatter: [
      'Honest portrait showing spiritual gifts require godly character—yet grace still answers humble prayer.',
      'Included among the faithful in Hebrews 11:32.',
    ],
    keyChapters: [
      {
        reference: 'Judges 13:1–25',
        label: 'Nazirite Promise Before Birth',
        storyModuleId: 'story-jdg-samson-call',
        chapterId: 'JDG-13',
        anchorVerseNumber: 5,
      },
      {
        reference: 'Judges 16:4–30',
        label: 'Humble Final Prayer',
        storyModuleId: 'story-jdg-samson-grace',
        chapterId: 'JDG-16',
        anchorVerseNumber: 28,
      },
    ],
  },

  'char-profile-hannah': {
    id: 'char-profile-hannah',
    name: 'Hannah',
    nameMeaning: 'Hebrew: חַנָּה / Channah ("Grace / Favor")',
    era: 'Early Monarchy ~1100 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-hannah',
    quickBio:
      'Grieving woman from Ramah who poured out her silent heartbreak at Shiloh’s doorway until Eli blessed her in peace. Keeping her promise, she raised little Samuel until he was weaned and brought him back joyfully—singing a hymn echoed a thousand years later by Mary.',
    familyTree: {
      parents: ['Ephraimite Family'],
      siblings: [],
      spouse: ['Elkanah'],
      children: ['char-profile-samuel'],
    },
    locationsLived: [
      {
        placeName: 'Ramah',
        roleInLife: 'Home where she nurtured young Samuel and sewed him a new linen robe each year',
        coordinates: { lat: 31.9, lng: 35.2 },
        mapPinId: 'loc-ramah',
      },
      {
        placeName: 'Shiloh',
        roleInLife: 'Poured out her tearful prayer and sang her song of triumph',
        coordinates: { lat: 32.1, lng: 35.3 },
        mapPinId: 'loc-shiloh',
      },
    ],
    whyTheyMatter: [
      'Teaches that raw, honest tears belong inside prayer rather than hidden away.',
      'Hannah’s Song (1 Samuel 2) directly inspired Mary’s Magnificat in Luke 1.',
    ],
    keyChapters: [
      {
        reference: '1 Samuel 1:1–28',
        label: 'Hannah’s Honest Prayer',
        storyModuleId: 'story-1sa-hannah',
        chapterId: '1SA-1',
        anchorVerseNumber: 27,
      },
      {
        reference: '1 Samuel 2:1–10',
        label: 'Song of Grace & Reversal',
        storyModuleId: 'story-1sa-hannah',
        chapterId: '1SA-2',
        anchorVerseNumber: 1,
      },
    ],
  },

  'char-profile-samuel': {
    id: 'char-profile-samuel',
    name: 'Samuel',
    nameMeaning: 'Hebrew: שְׁמוּאֵל / Shemu’el ("Heard by God")',
    era: 'Early Monarchy ~1100–1020 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-samuel',
    quickBio:
      'Dedicated by his mother Hannah at Shiloh, boy Samuel learned to answer God’s midnight voice with "Speak, for your servant hears." Serving as Israel’s last faithful judge and first great prophet of the monarchy, Samuel anointed both King Saul and young shepherd David.',
    familyTree: {
      parents: ['Elkanah', 'char-profile-hannah'],
      siblings: ['Three brothers & two sisters'],
      children: ['Joel', 'Abijah'],
    },
    locationsLived: [
      {
        placeName: 'Shiloh',
        roleInLife: 'Served alongside priest Eli and heard Yahweh call him by name',
        coordinates: { lat: 32.1, lng: 35.3 },
        mapPinId: 'loc-shiloh',
      },
      {
        placeName: 'Ramah',
        roleInLife: 'Lifelong ministry home and praying intercessor for Israel',
        coordinates: { lat: 31.9, lng: 35.2 },
        mapPinId: 'loc-ramah',
      },
    ],
    whyTheyMatter: [
      'Guided Israel smoothly across its historic hinge from Judges to Kings.',
      'Promised: "Far be it from me to sin against Yahweh by ceasing to pray for you" (1 Sam 12:23).',
    ],
    keyChapters: [
      {
        reference: '1 Samuel 3:1–21',
        label: '"Speak, Your Servant Hears"',
        storyModuleId: 'story-1sa-hannah',
        chapterId: '1SA-3',
        anchorVerseNumber: 10,
      },
      {
        reference: '1 Samuel 7:3–17',
        label: 'Ebenezer: Stone of Help',
        storyModuleId: 'story-1sa-ebenezer',
        chapterId: '1SA-7',
        anchorVerseNumber: 12,
      },
      {
        reference: '1 Samuel 16:1–13',
        label: 'Anointing Young David',
        storyModuleId: 'story-1sa-anointed',
        chapterId: '1SA-16',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-saul': {
    id: 'char-profile-saul',
    name: 'King Saul',
    nameMeaning: 'Hebrew: שָׁאוּל / Sha’ul ("Asked For")',
    era: 'United Monarchy ~1050–1010 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-saul',
    quickBio:
      'Israel’s tall, timid first king from Benjamin who started humbly—rescuing Jabesh Gilead with grace—yet gradually succumbed to impatience, fear of public opinion, and dark jealousy toward David.',
    familyTree: {
      parents: ['Kish'],
      siblings: [],
      spouse: ['Ahinoam'],
      children: ['char-profile-jonathan', 'Michal'],
    },
    locationsLived: [
      {
        placeName: 'Gilgal',
        roleInLife: 'Confirmed publicly as king before stumbling in impatient sacrifice',
        coordinates: { lat: 31.9, lng: 35.5 },
        mapPinId: 'loc-gilgal',
      },
      {
        placeName: 'En Gedi',
        roleInLife: 'Spared inside a cave by David and confessed David’s righteousness',
        coordinates: { lat: 31.5, lng: 35.4 },
        mapPinId: 'loc-en-gedi',
      },
    ],
    whyTheyMatter: [
      'A sober warning that impressive outward appearance and position cannot substitute for an obedient heart.',
      'Highlights the contrast between grasping power and David’s patient trust in God.',
    ],
    keyChapters: [
      {
        reference: '1 Samuel 15:1–29',
        label: 'Obedience Over Sacrifice',
        storyModuleId: 'story-1sa-anointed',
        chapterId: '1SA-15',
        anchorVerseNumber: 22,
      },
    ],
  },

  'char-profile-jonathan': {
    id: 'char-profile-jonathan',
    name: 'Jonathan',
    nameMeaning: 'Hebrew: יְהוֹנָתָן / Yehonatan ("Yahweh Has Given")',
    era: 'United Monarchy ~1050–1010 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-jonathan',
    quickBio:
      'Fearless crown prince of Israel who scaled steep Michmash cliffs trusting God could save "by many or by few." Even more remarkably, Jonathan laid down his own royal robe and sword in selfless love for David, strengthening his friend’s hand in God during dark forest exile.',
    familyTree: {
      parents: ['char-profile-saul', 'Ahinoam'],
      siblings: ['Michal'],
      children: ['char-profile-mephibosheth'],
    },
    locationsLived: [
      {
        placeName: 'Valley of Elah',
        roleInLife: 'Befriended young David immediately after Goliath fell',
        coordinates: { lat: 31.7, lng: 35.0 },
        mapPinId: 'loc-elah',
      },
    ],
    whyTheyMatter: [
      'Scripture’s highest portrait of selfless covenant friendship over personal ambition.',
      'Stayed faithful both to his troubled father and to his friend David.',
    ],
    keyChapters: [
      {
        reference: '1 Samuel 14:1–23',
        label: 'Fearless Climb at Michmash',
        storyModuleId: 'story-1sa-goliath',
        chapterId: '1SA-14',
        anchorVerseNumber: 6,
      },
      {
        reference: '1 Samuel 23:15–18',
        label: 'Strengthening David in God',
        storyModuleId: 'story-1sa-jonathan',
        chapterId: '1SA-23',
        anchorVerseNumber: 16,
      },
    ],
  },

  'char-profile-david': {
    id: 'char-profile-david',
    name: 'David',
    nameMeaning: 'Hebrew: דָּוִד / David ("Beloved")',
    era: 'United Monarchy ~1040–970 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-david',
    quickBio:
      'Great-grandson of Ruth and Boaz from Bethlehem’s shepherd hills, youngest son David was anointed by Samuel because God looks on the heart. From facing Goliath with five smooth stones to sparing King Saul in En Gedi’s cave, David’s trust in God shines across 1 Samuel and the Psalms.',
    familyTree: {
      parents: ['Jesse of Bethlehem'],
      siblings: ['Eliab', 'Abinadab', 'Shammah'],
      spouse: ['char-profile-abigail', 'Michal'],
      children: ['char-profile-solomon', 'Absalom'],
    },
    locationsLived: [
      {
        placeName: 'Bethlehem',
        roleInLife: 'Shepherded Jesse’s flocks and was anointed by prophet Samuel',
        coordinates: { lat: 31.7, lng: 35.2 },
        mapPinId: 'loc-bethlehem',
      },
      {
        placeName: 'Valley of Elah',
        roleInLife: 'Defeated Goliath trusting the name of Yahweh of Armies',
        coordinates: { lat: 31.7, lng: 35.0 },
        mapPinId: 'loc-elah',
      },
      {
        placeName: 'En Gedi',
        roleInLife: 'Sheltered in cliffside caves and spared King Saul’s life in mercy',
        coordinates: { lat: 31.5, lng: 35.4 },
        mapPinId: 'loc-en-gedi',
      },
      {
        placeName: 'Jerusalem',
        roleInLife: 'Welcomed the Ark joyfully, received God’s covenant, and ruled all Israel',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Chosen because "Yahweh looks on the heart" (1 Samuel 16:7), not outward size.',
      'Refused to grasp the crown violently—waiting faithfully on God’s timing.',
    ],
    keyChapters: [
      {
        reference: '1 Samuel 16:1–13',
        label: 'Anointed in Bethlehem',
        storyModuleId: 'story-1sa-anointed',
        chapterId: '1SA-16',
        anchorVerseNumber: 7,
      },
      {
        reference: '1 Samuel 17:1–51',
        label: 'Facing Giant Goliath',
        storyModuleId: 'story-1sa-goliath',
        chapterId: '1SA-17',
        anchorVerseNumber: 45,
      },
      {
        reference: '1 Samuel 24:1–22',
        label: 'Mercy in En Gedi’s Cave',
        storyModuleId: 'story-1sa-jonathan',
        chapterId: '1SA-24',
        anchorVerseNumber: 6,
      },
      {
        reference: '2 Samuel 7:1–29',
        label: 'The Davidic Covenant',
        storyModuleId: 'story-2sa-covenant',
        chapterId: '2SA-7',
        anchorVerseNumber: 16,
      },
      {
        reference: '2 Samuel 9:1–13',
        label: 'Kindness to Mephibosheth',
        storyModuleId: 'story-2sa-mephibosheth',
        chapterId: '2SA-9',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-abigail': {
    id: 'char-profile-abigail',
    name: 'Abigail',
    nameMeaning: 'Hebrew: אֲבִיגַיִל / Avigayil ("My Father’s Joy")',
    era: 'United Monarchy ~1015 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-abigail',
    quickBio:
      'Wise, discerning peacemaker of Carmel whose swift generosity turned back 400 angry swords. Packing loaves of bread, raisins, and figs, Abigail humbly appealed to David’s conscience—keeping future King David’s hands free from vengeance.',
    familyTree: {
      parents: ['Caleb’s Judean Clan'],
      siblings: [],
      spouse: ['char-profile-david', 'Nabal (former)'],
      children: ['Chileab'],
    },
    locationsLived: [
      {
        placeName: 'En Gedi & Judean Hills',
        roleInLife: 'Met David along the mountain ravine near Carmel and En Gedi to restore peace',
        coordinates: { lat: 31.5, lng: 35.4 },
        mapPinId: 'loc-en-gedi',
      },
    ],
    whyTheyMatter: [
      'Models calm, generous peacemaking under intense crisis.',
      'Reminded a future king that God Himself fights our battles without bitter revenge.',
    ],
    keyChapters: [
      {
        reference: '1 Samuel 25:1–35',
        label: 'Wise Peacemaker at Carmel',
        storyModuleId: 'story-1sa-abigail',
        chapterId: '1SA-25',
        anchorVerseNumber: 32,
      },
    ],
  },

  'char-profile-nathan': {
    id: 'char-profile-nathan',
    name: 'Nathan',
    nameMeaning: 'Hebrew: נָתָן / Natan ("God Has Given")',
    era: 'United Monarchy ~1000–970 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-nathan',
    quickBio:
      'Trusted Jerusalem prophet who announced both God’s breathtaking Davidic Covenant (2 Samuel 7) and the courageous parable that broke King David’s denial in 2 Samuel 12. Later Nathan also named newborn Solomon "Jedidiah" ("Loved by Yahweh").',
    familyTree: {
      parents: ['Israelite Prophetic Guild'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem',
        roleInLife: 'Spoke God’s covenant promise and fearless truth inside the palace',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Balanced deep encouragement with fearless moral honesty before the most powerful king in Israel.',
      'Delivered the messianic promise of an eternal throne to David’s family.',
    ],
    keyChapters: [
      {
        reference: '2 Samuel 7:1–17',
        label: 'Delivering the Davidic Covenant',
        storyModuleId: 'story-2sa-covenant',
        chapterId: '2SA-7',
        anchorVerseNumber: 16,
      },
      {
        reference: '2 Samuel 12:1–14',
        label: 'The Parable of the Little Lamb',
        storyModuleId: 'story-2sa-repentance',
        chapterId: '2SA-12',
        anchorVerseNumber: 13,
      },
    ],
  },

  'char-profile-mephibosheth': {
    id: 'char-profile-mephibosheth',
    name: 'Mephibosheth',
    nameMeaning: 'Hebrew: מְפִיבֹשֶׁת / Mefivoshet ("Son of Jonathan")',
    era: 'United Monarchy ~1000 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-mephibosheth',
    quickBio:
      'Son of Prince Jonathan who was injured in both feet at age five when news of Gilboa reached his nurse. Living quietly in Lo Debar expecting royal suspicion, Mephibosheth was sought out by King David to eat continually at the royal table for Jonathan’s sake.',
    familyTree: {
      parents: ['char-profile-jonathan'],
      siblings: [],
      children: ['Mica'],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem',
        roleInLife: 'Welcomed to eat at King David’s table continually like a royal son',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Living picture of unearned grace (chesed) welcoming the vulnerable into belonging.',
      'Remained fiercely loyal to David even when David had to flee Jerusalem (2 Samuel 19).',
    ],
    keyChapters: [
      {
        reference: '2 Samuel 9:1–13',
        label: 'Seated at the King’s Table',
        storyModuleId: 'story-2sa-mephibosheth',
        chapterId: '2SA-9',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-solomon': {
    id: 'char-profile-solomon',
    name: 'Solomon',
    nameMeaning: 'Hebrew: שְׁלֹמֹה / Shlomoh ("Peace") & Jedidiah ("Loved by Yahweh")',
    era: 'United Monarchy ~990–930 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-solomon',
    quickBio:
      'Son of David and Bathsheba whose birth was crowned with God’s loving nickname "Jedidiah" through prophet Nathan. Inheriting the Davidic Covenant promise, Solomon later built Jerusalem’s Temple on Araunah’s hilltop threshing floor.',
    familyTree: {
      parents: ['char-profile-david', 'Bathsheba'],
      siblings: ['Absalom', 'Chileab'],
      children: ['char-profile-rehoboam'],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem',
        roleInLife: 'Built the Temple on Mount Moriah and welcomed seekers of wisdom',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Living proof that God brings peace ("Shlomoh") and beloved grace out of honest repentance.',
      'Asked God for a listening, discerning heart rather than long life or wealth (1 Kings 3:9).',
    ],
    keyChapters: [
      {
        reference: '2 Samuel 12:24–25',
        label: 'Named "Loved by Yahweh"',
        storyModuleId: 'story-2sa-repentance',
        chapterId: '2SA-12',
        anchorVerseNumber: 24,
      },
      {
        reference: '1 Kings 3:5–14',
        label: 'Asking for a Listening Heart',
        storyModuleId: 'story-1ki-wisdom',
        chapterId: '1KI-3',
        anchorVerseNumber: 9,
      },
      {
        reference: '1 Kings 8:22–30',
        label: 'Dedicating the Temple',
        storyModuleId: 'story-1ki-temple',
        chapterId: '1KI-8',
        anchorVerseNumber: 27,
      },
    ],
  },

  'char-profile-rehoboam': {
    id: 'char-profile-rehoboam',
    name: 'Rehoboam',
    nameMeaning: 'Hebrew: רְחַבְעָם / Rechav’am ("He Enlarges the People")',
    era: 'Divided Kingdom ~930–913 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-rehoboam',
    quickBio:
      'Son of Solomon whose prideful refusal of elder humility at Shechem fractured Israel into the northern Kingdom of Israel and the southern Kingdom of Judah (1 Kings 12).',
    familyTree: {
      parents: ['char-profile-solomon', 'Naamah'],
      siblings: [],
      children: ['Abijah'],
    },
    locationsLived: [
      {
        placeName: 'Shechem',
        roleInLife: 'Refused wise elders’ counsel, sparking the division of the ten northern tribes',
        coordinates: { lat: 32.2, lng: 35.3 },
        mapPinId: 'loc-ebal-gerizim',
      },
      {
        placeName: 'Jerusalem',
        roleInLife: 'Ruled southern Judah afterward through turbulent border conflicts',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Sobering lesson that harsh bluster tears apart communities that gentle servant leadership keeps whole.',
    ],
    keyChapters: [
      {
        reference: '1 Kings 12:1–19',
        label: 'A Kingdom Torn in Two',
        storyModuleId: 'story-1ki-wisdom',
        chapterId: '1KI-12',
        anchorVerseNumber: 13,
      },
    ],
  },

  'char-profile-queen-sheba': {
    id: 'char-profile-queen-sheba',
    name: 'Queen of Sheba',
    nameMeaning: 'Ancient South Arabian Monarch ("Sovereign of Saba")',
    era: 'United Monarchy ~950 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-queen-sheba',
    quickBio:
      'Brilliant, discerning ruler from distant southern Arabia who traveled thousands of miles to test Solomon’s wisdom firsthand—marveling at his justice and blessing the God of Israel.',
    familyTree: {
      parents: [],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem',
        roleInLife: 'Tested Solomon’s hardest questions and brought abundant gold and spices',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Praised later by Jesus (Matthew 12:42) as a sincere seeker who crossed deserts hungry for truth.',
    ],
    keyChapters: [
      {
        reference: '1 Kings 10:1–13',
        label: 'Testing Wisdom & Blessing God',
        storyModuleId: 'story-1ki-wisdom',
        chapterId: '1KI-10',
        anchorVerseNumber: 9,
      },
    ],
  },

  'char-profile-elijah': {
    id: 'char-profile-elijah',
    name: 'Elijah',
    nameMeaning: 'Hebrew: אֵלִיָּהוּ / Eliyahu ("My God Is Yahweh")',
    era: 'Divided Kingdom ~875–850 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-elijah',
    quickBio:
      'Bold Tishbite prophet from Gilead’s hills whom ravens fed at Kerith brook, who stood alone against 450 prophets on Mount Carmel, and met God in the gentle whisper at Horeb.',
    familyTree: {
      parents: ['Prophetic Lineage of Gilead'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Mount Carmel',
        roleInLife: 'Prayed down fire from heaven and ended three years of drought',
        coordinates: { lat: 32.7, lng: 35.0 },
        mapPinId: 'loc-mount-carmel',
      },
      {
        placeName: 'Mount Horeb (Sinai)',
        roleInLife: 'Rested by God’s tender care and heard the gentle whisper after storm and fire',
        coordinates: { lat: 28.5, lng: 34.0 },
        mapPinId: 'loc-mount-sinai',
      },
    ],
    whyTheyMatter: [
      'Embodies fearless public loyalty to God paired with startling human exhaustion healed by God’s quiet kindness.',
      'Reappears beside Moses on the Mount of Transfiguration (Luke 9:30) pointing toward Jesus.',
    ],
    keyChapters: [
      {
        reference: '1 Kings 17:1–24',
        label: 'Ravens & Widow of Zarephath',
        storyModuleId: 'story-1ki-ravens',
        chapterId: '1KI-17',
        anchorVerseNumber: 14,
      },
      {
        reference: '1 Kings 18:20–46',
        label: 'Fire on Mount Carmel',
        storyModuleId: 'story-1ki-carmel',
        chapterId: '1KI-18',
        anchorVerseNumber: 38,
      },
      {
        reference: '1 Kings 19:1–18',
        label: 'The Gentle Whisper at Horeb',
        storyModuleId: 'story-1ki-whisper',
        chapterId: '1KI-19',
        anchorVerseNumber: 12,
      },
    ],
  },

  'char-profile-elisha': {
    id: 'char-profile-elisha',
    name: 'Elisha',
    nameMeaning: 'Hebrew: אֱלִישָׁע / Elisha ("My God Is Salvation")',
    era: 'Divided Kingdom ~850–798 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-elisha',
    quickBio:
      'Ordinary farmer from Abel Meholah who was plowing behind twelve yoke of oxen when Elijah draped his cloak over him—carrying on a double-portion ministry of healing, floating axes, open spiritual eyes at Dothan, and compassion.',
    familyTree: {
      parents: ['Shaphat'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Samaria',
        roleInLife: 'Called from rural fields to succeed Elijah as prophet of grace and healing',
        coordinates: { lat: 32.3, lng: 35.2 },
        mapPinId: 'loc-samaria',
      },
      {
        placeName: 'Dothan',
        roleInLife: 'Prayed open his servant’s eyes to behold chariots of fire encircling the hill',
        coordinates: { lat: 32.4, lng: 35.2 },
        mapPinId: 'loc-dothan',
      },
    ],
    whyTheyMatter: [
      'Demonstrates faithful readiness—leaving behind his whole livelihood immediately when called.',
      'Welcomes outsiders like Naaman and shows invisible angelic protection around the vulnerable.',
    ],
    keyChapters: [
      {
        reference: '1 Kings 19:19–21',
        label: 'From the Plow to Elijah’s Mantle',
        storyModuleId: 'story-1ki-whisper',
        chapterId: '1KI-19',
        anchorVerseNumber: 19,
      },
      {
        reference: '2 Kings 2:1–15',
        label: 'Receiving Elijah’s Mantle',
        storyModuleId: 'story-2ki-chariot',
        chapterId: '2KI-2',
        anchorVerseNumber: 11,
      },
      {
        reference: '2 Kings 5:1–14',
        label: 'Healing Naaman in the Jordan',
        storyModuleId: 'story-2ki-naaman',
        chapterId: '2KI-5',
        anchorVerseNumber: 14,
      },
      {
        reference: '2 Kings 6:15–17',
        label: 'Chariots of Fire Around Dothan',
        storyModuleId: 'story-2ki-dothan',
        chapterId: '2KI-6',
        anchorVerseNumber: 17,
      },
    ],
  },

  'char-profile-naaman': {
    id: 'char-profile-naaman',
    name: 'Naaman',
    nameMeaning: 'Hebrew: נַעֲמָן / Na’aman ("Pleasant / Gracious")',
    era: 'Divided Kingdom ~845 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-naaman',
    quickBio:
      'Decorated Syrian commander cured of leprosy only after listening to a young Israelite servant girl and swallowing his pride to wash seven times in the humble muddy Jordan River.',
    familyTree: {
      parents: [],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Jordan River',
        roleInLife: 'Dipped seven times in humility at Elisha’s word and emerged renewed like a child',
        coordinates: { lat: 32.0, lng: 35.5 },
        mapPinId: 'loc-dothan',
      },
    ],
    whyTheyMatter: [
      'Cited directly by Jesus (Luke 4:27) showing God’s healing mercy crossing enemy borders to the humble.',
    ],
    keyChapters: [
      {
        reference: '2 Kings 5:1–19',
        label: 'Dipped Seven Times in Jordan',
        storyModuleId: 'story-2ki-naaman',
        chapterId: '2KI-5',
        anchorVerseNumber: 14,
      },
    ],
  },

  'char-profile-hezekiah': {
    id: 'char-profile-hezekiah',
    name: 'King Hezekiah',
    nameMeaning: 'Hebrew: חִזְקִיָּהוּ / Chizqiyahu ("Yahweh Strengthens")',
    era: 'Kingdom of Judah ~715–686 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-hezekiah',
    quickBio:
      'Courageous reform king of Judah who cleared ancient idols, built Jerusalem’s water tunnel, and spread Assyria’s menacing ultimatum right on the Temple floor in honest prayer alongside Isaiah.',
    familyTree: {
      parents: ['Ahaz', 'Abi'],
      siblings: [],
      children: ['Manasseh'],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem',
        roleInLife: 'Trusted Yahweh in prayer during Assyria’s siege of Jerusalem',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Modeled fearless prayerful dependence when surrounded by an unstoppable imperial army.',
    ],
    keyChapters: [
      {
        reference: '2 Kings 19:14–36',
        label: 'Spreading the Letter Before God',
        storyModuleId: 'story-2ki-hezekiah',
        chapterId: '2KI-19',
        anchorVerseNumber: 14,
      },
    ],
  },

  'char-profile-isaiah': {
    id: 'char-profile-isaiah',
    name: 'Isaiah',
    nameMeaning: 'Hebrew: יְשַׁעְיָהוּ / Yesha’yahu ("Yahweh Is Salvation")',
    era: 'Kingdom of Judah ~740–680 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-isaiah',
    quickBio:
      'Jerusalem court prophet who stood beside King Hezekiah in 2 Kings 19–20, encouraging trembling Jerusalem not to fear Assyria while proclaiming Israel’s coming Prince of Peace.',
    familyTree: {
      parents: ['Amoz'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem',
        roleInLife: 'Spoke assurance and prophetic truth inside the royal court',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Joined pastoral courage during political crisis with towering messianic hope.',
    ],
    keyChapters: [
      {
        reference: 'Isaiah 6:1–8',
        label: '“Holy, Holy, Holy!”—Here Am I, Send Me!',
        storyModuleId: 'story-isa-throne-send-me',
        chapterId: 'ISA-6',
        anchorVerseNumber: 8,
      },
      {
        reference: 'Isaiah 40:1–31',
        label: '“Comfort My People” & Soaring Like Eagles',
        storyModuleId: 'story-isa-comfort-eagles',
        chapterId: 'ISA-40',
        anchorVerseNumber: 31,
      },
      {
        reference: 'Isaiah 53:1–12',
        label: 'Song of the Suffering Servant',
        storyModuleId: 'story-isa-suffering-servant',
        chapterId: 'ISA-53',
        anchorVerseNumber: 5,
      },
      {
        reference: '2 Kings 19:1–34',
        label: 'Prophetic Hope During Siege',
        storyModuleId: 'story-2ki-hezekiah',
        chapterId: '2KI-19',
        anchorVerseNumber: 14,
      },
    ],
  },

  'char-profile-josiah': {
    id: 'char-profile-josiah',
    name: 'King Josiah',
    nameMeaning: 'Hebrew: יֹאשִׁיָּהוּ / Yoshiyahu ("Yahweh Supports / Heals")',
    era: 'Kingdom of Judah ~640–609 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-josiah',
    quickBio:
      'Crowned at age eight, tender-hearted King Josiah funded Temple repairs where the lost Torah scroll was rediscovered—tearing his royal robes in humble repentance and renewing Passover with all Judah.',
    familyTree: {
      parents: ['Amon', 'Jedidah'],
      siblings: [],
      children: ['Jehoahaz', 'Jehoiakim', 'Zedekiah'],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem',
        roleInLife: 'Restored the Temple, read the rediscovered Torah aloud, and led joyful renewal',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Honored in 2 Kings 23:25 as unmatched in turning wholeheartedly to Yahweh with all his heart and soul.',
    ],
    keyChapters: [
      {
        reference: '2 Kings 22:1–20',
        label: 'Finding the Lost Book of the Law',
        storyModuleId: 'story-2ki-josiah',
        chapterId: '2KI-22',
        anchorVerseNumber: 11,
      },
    ],
  },

  'char-profile-job': {
    id: 'char-profile-job',
    name: 'Job',
    nameMeaning: 'Hebrew: אִיּוֹב / Iyov ("Where is the Father?" / Persecuted One)',
    era: 'Patriarchal Era (Land of Uz)',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-job',
    quickBio:
      'Blameless elder of the eastern plateau of Uz who lost livestock, servants, and ten children in a single day yet blessed God’s name—holding honest lament and unyielding hope together until Yahweh answered from the whirlwind.',
    familyTree: {
      parents: ['Unnamed Elder of Uz'],
      siblings: [],
      children: ['Jemimah', 'Keziah', 'Keren-Happuch (and seven sons)'],
    },
    locationsLived: [
      {
        placeName: 'Land of Uz',
        roleInLife: 'Feared God, defended the poor at the gate, endured trials in ashes, and welcomed double restoration',
        coordinates: { lat: 30.2, lng: 36.2 },
        mapPinId: 'loc-uz',
      },
    ],
    whyTheyMatter: [
      'Demonstrates that honest lament before God is deeper faith than pious clichés.',
      'Delivers Scripture’s radiant confession of resurrection hope: “I know that my Redeemer lives!” (Job 19:25).',
    ],
    keyChapters: [
      {
        reference: 'Job 1:1–22',
        label: 'Sudden Loss & Worship',
        storyModuleId: 'story-job-patience',
        chapterId: 'JOB-1',
        anchorVerseNumber: 21,
      },
      {
        reference: 'Job 19:23–27',
        label: 'I Know My Redeemer Lives',
        storyModuleId: 'story-job-redeemer',
        chapterId: 'JOB-19',
        anchorVerseNumber: 25,
      },
      {
        reference: 'Job 38:1–18',
        label: 'Answer Out of the Whirlwind',
        storyModuleId: 'story-job-whirlwind',
        chapterId: 'JOB-38',
        anchorVerseNumber: 4,
      },
      {
        reference: 'Job 42:1–17',
        label: 'Seeing God & Restoration',
        storyModuleId: 'story-job-restored',
        chapterId: 'JOB-42',
        anchorVerseNumber: 5,
      },
    ],
  },

  'char-profile-eliphaz': {
    id: 'char-profile-eliphaz',
    name: 'Eliphaz the Temanite',
    nameMeaning: 'Hebrew: אֱלִיפַז / Elifaz ("My God Is Fine Gold")',
    era: 'Patriarchal Era (Teman / Uz)',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-eliphaz',
    quickBio:
      'Respected senior sage from Teman who first wept silently seven days beside Job—before arguing that every sufferer must have earned hidden discipline.',
    familyTree: {
      parents: [],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Land of Uz',
        roleInLife: 'Traveled from Teman to comfort Job, debated three cycles, and received Job’s forgiving prayer in chapter 42',
        coordinates: { lat: 30.2, lng: 36.2 },
        mapPinId: 'loc-uz',
      },
    ],
    whyTheyMatter: [
      'Reveals how comforting presence works silently in chapter 2 before rigid formulas wound an innocent sufferer.',
    ],
    keyChapters: [
      {
        reference: 'Job 4:1–21',
        label: 'Eliphaz’s First Reply',
        storyModuleId: 'story-job-patience',
        chapterId: 'JOB-4',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-bildad': {
    id: 'char-profile-bildad',
    name: 'Bildad the Shuhite',
    nameMeaning: 'Hebrew: בִּלְדַּד / Bildad',
    era: 'Patriarchal Era (Land of Uz)',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-bildad',
    quickBio:
      'Tradition-minded friend of Job who urged looking backward to ancient proverbs, unable to imagine upright people suffering without secret fault.',
    familyTree: {
      parents: [],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Land of Uz',
        roleInLife: 'Spoke traditional wisdom speeches in chapters 8, 18, and 25',
        coordinates: { lat: 30.2, lng: 36.2 },
        mapPinId: 'loc-uz',
      },
    ],
    whyTheyMatter: [
      'Illustrates the limits of repeating cold slogans without listening carefully to human grief.',
    ],
    keyChapters: [
      {
        reference: 'Job 8:1–22',
        label: 'Appealing to Past Sages',
        storyModuleId: 'story-job-redeemer',
        chapterId: 'JOB-8',
        anchorVerseNumber: 8,
      },
    ],
  },

  'char-profile-zophar': {
    id: 'char-profile-zophar',
    name: 'Zophar the Naamathite',
    nameMeaning: 'Hebrew: צוֹפַר / Tzofar',
    era: 'Patriarchal Era (Land of Uz)',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-zophar',
    quickBio:
      'Fiery, direct counselor who scolded Job’s protests fastest and fell completely silent when third-round debates ran dry.',
    familyTree: {
      parents: [],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Land of Uz',
        roleInLife: 'Spoke bold warnings in chapters 11 and 20 before listening silently',
        coordinates: { lat: 30.2, lng: 36.2 },
        mapPinId: 'loc-uz',
      },
    ],
    whyTheyMatter: [
      'Warns against rushing to judge a hurting neighbor simply to defend tidy theology.',
    ],
    keyChapters: [
      {
        reference: 'Job 11:1–20',
        label: 'Zophar’s Sharp Rebuke',
        storyModuleId: 'story-job-redeemer',
        chapterId: 'JOB-11',
        anchorVerseNumber: 7,
      },
    ],
  },

  'char-profile-elihu': {
    id: 'char-profile-elihu',
    name: 'Elihu',
    nameMeaning: 'Hebrew: אֱלִיהוּא / Elihu ("He Is My God")',
    era: 'Patriarchal Era (Buz / Uz)',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-elihu',
    quickBio:
      'Earnest young listener from Buz who waited humbly while elders debated, then pointed Job upward toward rain clouds, snow, and God’s awesome voice before the whirlwind arrived.',
    familyTree: {
      parents: ['Barachel the Buzite'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Land of Uz',
        roleInLife: 'Praised God’s breath, rain cycles, and approaching storm across Job 32–37',
        coordinates: { lat: 30.2, lng: 36.2 },
        mapPinId: 'loc-uz',
      },
    ],
    whyTheyMatter: [
      'Bridges silent human failure to God’s whirlwind answer by calling Job to stand still and consider God’s wondrous works.',
    ],
    keyChapters: [
      {
        reference: 'Job 37:1–24',
        label: 'Golden Light & Storm Clouds',
        storyModuleId: 'story-job-whirlwind',
        chapterId: 'JOB-37',
        anchorVerseNumber: 14,
      },
    ],
  },

  'char-profile-asaph': {
    id: 'char-profile-asaph',
    name: 'Asaph',
    nameMeaning: 'Hebrew: אָסָף / Asaf ("Gatherer")',
    era: 'United Kingdom ~1000 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-asaph',
    quickBio:
      'Gifted Levite musician and seer appointed by King David to lead Jerusalem’s sanctuary choir with bronze cymbals—whose guild authored Psalms 50 and 73–83 blending raw honesty about injustice with sanctuary peace.',
    familyTree: {
      parents: ['Berechiah of Levi'],
      siblings: [],
      children: ['Zaccur', 'Joseph', 'Nethaniah', 'Asarelah'],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem Sanctuary',
        roleInLife: 'Directed Levitical worship choirs and composed prophetic history Psalms',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Authored Psalm 73, showing envy melts away cleanly the moment weary hearts enter God’s presence.',
      'Recounted Israel’s full story across Psalm 78 so coming generations set their hope squarely in God.',
    ],
    keyChapters: [
      {
        reference: 'Psalm 50:1–23',
        label: 'Thankful Hearts Over Empty Ritual',
        storyModuleId: 'story-psa-51',
        chapterId: 'PSA-50',
        anchorVerseNumber: 14,
      },
      {
        reference: 'Psalm 73:1–28',
        label: 'Steadied Inside the Sanctuary',
        storyModuleId: 'story-psa-46',
        chapterId: 'PSA-73',
        anchorVerseNumber: 25,
      },
    ],
  },

  'char-profile-heman': {
    id: 'char-profile-heman',
    name: 'Heman & Sons of Korah',
    nameMeaning: 'Hebrew: הֵימָן / Heman ("Faithful")',
    era: 'United Kingdom ~1000 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-heman',
    quickBio:
      'Wise Levite poet-musician descended from Korah’s spared household—leading Jerusalem’s sanctuary singers alongside Sons of Korah who wrote deeply moving Psalms 42–49 and 84–88.',
    familyTree: {
      parents: ['Joel (Samuel’s grandson)'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Jerusalem Sanctuary',
        roleInLife: 'Composed soaring hymns of sanctuary longing, storm stillness, and courageous darkness',
        coordinates: { lat: 31.8, lng: 35.2 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Embodies generational mercy: descendants of rebellious Korah became beloved worship leaders.',
      'Penned Psalm 46 (“Be still, and know that I am God”) and Psalm 84 (“Better is one day in your courts”).',
    ],
    keyChapters: [
      {
        reference: 'Psalm 42:1–11',
        label: 'As the Deer Pants for Water',
        storyModuleId: 'story-psa-46',
        chapterId: 'PSA-42',
        anchorVerseNumber: 1,
      },
      {
        reference: 'Psalm 46:1–11',
        label: 'Be Still & Know That I Am God',
        storyModuleId: 'story-psa-46',
        chapterId: 'PSA-46',
        anchorVerseNumber: 10,
      },
    ],
  },

  'char-profile-daniel': {
    id: 'char-profile-daniel',
    name: 'Daniel',
    nameMeaning: 'Hebrew: דָּנִיֵּאל / Daniyyel ("God Is My Judge")',
    era: 'Babylonian & Persian Exile ~605–535 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-daniel',
    quickBio:
      'Carried captive from Jerusalem as a teenager, Daniel refused royal table compromise, interpreted royal dreams, survived the lions’ den at eighty through daily prayer, and saw the Son of Man receiving an eternal Kingdom.',
    familyTree: {
      parents: ['Noble Judean Lineage'],
      siblings: [],
    },
    locationsLived: [
      {
        placeName: 'Babylon',
        roleInLife: 'Served with integrity under Nebuchadnezzar, Belshazzar, Darius, and Cyrus for 70 years',
        coordinates: { lat: 32.5, lng: 44.4 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Demonstrates steady, respectful public excellence without compromising quiet devotion.',
      'Received Daniel 7’s vision of the Son of Man—Jesus’s favorite self-designation.',
    ],
    keyChapters: [
      {
        reference: 'Daniel 1:1–21',
        label: 'Unshaken Resolve in Babylon',
        storyModuleId: 'story-dan-integrity',
        chapterId: 'DAN-1',
        anchorVerseNumber: 8,
      },
      {
        reference: 'Daniel 6:1–28',
        label: 'Open Windows & Lions’ Den',
        storyModuleId: 'story-dan-lions',
        chapterId: 'DAN-6',
        anchorVerseNumber: 10,
      },
      {
        reference: 'Daniel 7:9–14',
        label: 'Ancient of Days & Son of Man',
        storyModuleId: 'story-dan-son-of-man',
        chapterId: 'DAN-7',
        anchorVerseNumber: 13,
      },
    ],
  },

  'char-profile-shadrach': {
    id: 'char-profile-shadrach',
    name: 'Shadrach (Hananiah)',
    nameMeaning: 'Hebrew: חֲנַנְיָה / Chananyah ("Yahweh Has Been Gracious")',
    era: 'Babylonian Exile ~605–580 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-shadrach',
    quickBio:
      'Loyal friend of Daniel from Judah who refused to bow before King Nebuchadnezzar’s golden statue—walking completely unbound beside the Fourth Figure inside the blazing furnace.',
    familyTree: { parents: ['Unnamed Judean Family'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon & Plain of Dura',
        roleInLife: 'Administered Babylon’s province after enduring fiery furnace flames unharmed',
        coordinates: { lat: 32.5, lng: 44.4 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Co-authored Daniel 3’s fearless watchword: “Even if not, we will not serve your gods!”',
    ],
    keyChapters: [
      {
        reference: 'Daniel 3:1–30',
        label: 'Unburned in Fiery Furnace',
        storyModuleId: 'story-dan-furnace',
        chapterId: 'DAN-3',
        anchorVerseNumber: 17,
      },
    ],
  },

  'char-profile-meshach': {
    id: 'char-profile-meshach',
    name: 'Meshach (Mishael)',
    nameMeaning: 'Hebrew: מִישָׁאֵל / Mishael ("Who Is What God Is?")',
    era: 'Babylonian Exile ~605–580 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-meshach',
    quickBio:
      'Steadfast companion of Daniel who knelt in midnight prayer for Nebuchadnezzar’s dream (Daniel 2) and stood fearless before Dura’s sevenfold flames (Daniel 3).',
    familyTree: { parents: ['Unnamed Judean Family'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon & Plain of Dura',
        roleInLife: 'Prayed with Daniel for royal dream revelation and witnessed God’s rescue in the fire',
        coordinates: { lat: 32.5, lng: 44.4 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Proves faithful friendship doubles courage under peer pressure and imperial fear.',
    ],
    keyChapters: [
      {
        reference: 'Daniel 3:1–30',
        label: 'Four Walking in the Fire',
        storyModuleId: 'story-dan-furnace',
        chapterId: 'DAN-3',
        anchorVerseNumber: 25,
      },
    ],
  },

  'char-profile-abednego': {
    id: 'char-profile-abednego',
    name: 'Abednego (Azariah)',
    nameMeaning: 'Hebrew: עֲזַרְיָה / Azaryah ("Yahweh Has Helped")',
    era: 'Babylonian Exile ~605–580 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-abednego',
    quickBio:
      'Young Judean exile whose Hebrew name celebrates divine help—stepping straight into roaring furnace flames without singed hair or the smell of smoke.',
    familyTree: { parents: ['Unnamed Judean Family'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon & Plain of Dura',
        roleInLife: 'Walked alongside Shadrach, Meshach, and the Fourth Companion inside the flames',
        coordinates: { lat: 32.5, lng: 44.4 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Reminds sufferers that only binding ropes burn away when God steps into the fire with us.',
    ],
    keyChapters: [
      {
        reference: 'Daniel 3:1–30',
        label: 'Faith That Does Not Bow',
        storyModuleId: 'story-dan-furnace',
        chapterId: 'DAN-3',
        anchorVerseNumber: 18,
      },
    ],
  },

  'char-profile-nebuchadnezzar': {
    id: 'char-profile-nebuchadnezzar',
    name: 'King Nebuchadnezzar',
    nameMeaning: 'Akkadian: Nabû-kudurri-usur ("Nabu Protects the Heir")',
    era: 'Neo-Babylonian Empire 605–562 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-nebuchadnezzar',
    quickBio:
      'Mighty builder of Babylon whose golden statue and boastful pride met gentle humbling over seven seasons—ending with his own letter honoring the King of Heaven.',
    familyTree: { parents: ['Nabopolassar'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon',
        roleInLife: 'Dreamed of the Statue and Tree; witnessed fiery furnace deliverance and praised the Most High',
        coordinates: { lat: 32.5, lng: 44.4 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Shows Heaven’s patience in humbling even earth’s proudest empire-builder toward honest praise.',
    ],
    keyChapters: [
      {
        reference: 'Daniel 4:1–37',
        label: 'Lifting Eyes Toward Heaven',
        storyModuleId: 'story-dan-furnace',
        chapterId: 'DAN-4',
        anchorVerseNumber: 37,
      },
    ],
  },

  'char-profile-darius': {
    id: 'char-profile-darius',
    name: 'King Darius the Mede',
    nameMeaning: 'Old Persian: Daryavesh ("Holder of Good")',
    era: 'Early Persian Rule ~539 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-darius',
    quickBio:
      'Appointed governor over fallen Babylon who trusted aging Daniel above 120 officials, spent a sleepless night pacing beside the lions’ den, and rejoiced at dawn to proclaim the living God.',
    familyTree: { parents: [], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon',
        roleInLife: 'Administered Babylon after Belshazzar and witnessed Daniel’s night with lions',
        coordinates: { lat: 32.5, lng: 44.4 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Demonstrates sincere respect sparked by a faithful believer’s spotless integrity.',
    ],
    keyChapters: [
      {
        reference: 'Daniel 6:1–28',
        label: 'Fast Overnight & Joy at Dawn',
        storyModuleId: 'story-dan-lions',
        chapterId: 'DAN-6',
        anchorVerseNumber: 26,
      },
    ],
  },
  'char-profile-jabez': {
    id: 'char-profile-jabez',
    name: 'Jabez of Judah',
    nameMeaning: 'Hebrew: Yabetz ("He Will Cause Pain" — reclaimed through prayer)',
    era: 'Early Settlement of Judah',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-jabez',
    quickBio:
      'Named “Sorrowful” by his mother after a painful birth, Jabez stood out in Judah’s genealogies as “more honorable than his brothers” simply because he asked God for blessing, protection, and good purpose—and God answered.',
    familyTree: { parents: ['Judahite Household'], siblings: ['Brothers of Judah'] },
    locationsLived: [
      {
        placeName: 'Judah (Jabez Settlement)',
        roleInLife: 'Founded scribe-tented town bearing his name (1 Chronicles 2:55)',
        coordinates: { lat: 31.6, lng: 35.1 },
        mapPinId: 'loc-bethlehem',
      },
    ],
    whyTheyMatter: [
      'Shows that painful origins never dictate destiny when we bring honest, simple prayer to God.',
    ],
    keyChapters: [
      {
        reference: '1 Chronicles 4:9–10',
        label: 'Prayer of Jabez Inside the Genealogies',
        storyModuleId: 'story-1ch-jabez',
        chapterId: '1CH-4',
        anchorVerseNumber: 10,
      },
    ],
  },
  'char-profile-benaiah': {
    id: 'char-profile-benaiah',
    name: 'Benaiah, Son of Jehoiada',
    nameMeaning: 'Hebrew: Benayahu ("Yahweh Has Built Up")',
    era: 'United Monarchy ~1010–970 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-benaiah',
    quickBio:
      'Priest’s son from Kabzeel who became David’s fearless bodyguard captain—famous for descending into a snowy cistern alone to slay a lion, disarming a towering Egyptian spearman, and commanding King Solomon’s armies.',
    familyTree: { parents: ['Jehoiada (Chief Priest)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Jerusalem (City of David)',
        roleInLife: 'Commander of the Kerethites, Pelethites, and Third Month Guard (1 Chron 27:5)',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Demonstrates steady, disciplined courage in thankless hard days—rising from lion-pit faithfulness to lifelong royal trust.',
    ],
    keyChapters: [
      {
        reference: '1 Chronicles 11:22–25',
        label: 'Lion in a Snowy Pit & Captain of the Guard',
        storyModuleId: 'story-1ch-jabez',
        chapterId: '1CH-11',
        anchorVerseNumber: 22,
      },
      {
        reference: '1 Chronicles 27:5–6',
        label: 'Third Monthly Division Commander',
        storyModuleId: 'story-1ch-cheerful-giving',
        chapterId: '1CH-27',
        anchorVerseNumber: 5,
      },
    ],
  },
  'char-profile-abishai': {
    id: 'char-profile-abishai',
    name: 'Abishai, Son of Zeruiah',
    nameMeaning: 'Hebrew: Avishai ("My Father Is a Gift")',
    era: 'United Monarchy ~1015–980 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-abishai',
    quickBio:
      'David’s devoted nephew, Joab’s brother, and leader of the famed Thirty Warriors—standing shoulder to shoulder with his brother in two-front battle while encouraging Israel to trust whatever Yahweh sees as good.',
    familyTree: { parents: ['Zeruiah (Sister of David)'], siblings: ['char-profile-joab', 'Asahel'] },
    locationsLived: [
      {
        placeName: 'Jerusalem & Judean Frontier',
        roleInLife: 'Most honored captain of the Thirty Warriors (1 Chron 11:20–21)',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Models fierce personal loyalty beside David from wilderness caves to later national battles.',
    ],
    keyChapters: [
      {
        reference: '1 Chronicles 11:20–21',
        label: 'Chief Captain of the Thirty',
        storyModuleId: 'story-1ch-jabez',
        chapterId: '1CH-11',
        anchorVerseNumber: 20,
      },
      {
        reference: '1 Chronicles 19:11–15',
        label: 'Brothers Back-to-Back Against Syria & Ammon',
        storyModuleId: 'story-1ch-ark-praise',
        chapterId: '1CH-19',
        anchorVerseNumber: 13,
      },
    ],
  },
  'char-profile-zadok': {
    id: 'char-profile-zadok',
    name: 'Zadok the High Priest',
    nameMeaning: 'Hebrew: Tzadok ("Righteous / Just")',
    era: 'David & Solomon ~1010–950 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-zadok',
    quickBio:
      'Joined David at Hebron as a courageous young warrior-priest leading twenty-two commanders, carried the golden Ark with purified Levites into Jerusalem, organized the twenty-four priestly courses, and anointed Solomon.',
    familyTree: { parents: ['Ahitub (Line of Eleazar)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Hebron & Jerusalem',
        roleInLife: 'High Priest at the Tabernacle at Gibeon & Jerusalem Sanctuary (1 Chron 16:39)',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Fidelity at both altar and crisis made his name synonymous with faithful priesthood across Kings, Chronicles, and Ezekiel.',
    ],
    keyChapters: [
      {
        reference: '1 Chronicles 15:11–15',
        label: 'Sanctifying Priests to Bear the Ark',
        storyModuleId: 'story-1ch-ark-praise',
        chapterId: '1CH-15',
        anchorVerseNumber: 11,
      },
      {
        reference: '1 Chronicles 24:1–6',
        label: 'Twenty-Four Courses of Temple Service',
        storyModuleId: 'story-1ch-cheerful-giving',
        chapterId: '1CH-24',
        anchorVerseNumber: 3,
      },
    ],
  },
  'char-profile-jeduthun': {
    id: 'char-profile-jeduthun',
    name: 'Jeduthun (Ethan), Worship Leader',
    nameMeaning: 'Hebrew: Yedutun ("Praising / Confessing") · Ethan ("Enduring")',
    era: 'Reign of King David ~1000 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-jeduthun',
    quickBio:
      'Appointed alongside Asaph and Heman to strike bronze cymbals and prophesy upon harps before the Ark—leading morning and evening choirs in repeating: “Give thanks to Yahweh, for His lovingkindness endures forever!”',
    familyTree: { parents: ['Kishi / Kushaiah (Merarite Levite)'], siblings: ['Guilds of Asaph & Heman'] },
    locationsLived: [
      {
        placeName: 'Jerusalem & Gibeon Sanctuaries',
        roleInLife: 'Chief Musician prophesying with harp and thanksgiving (1 Chron 16:41; 25:1–3)',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Unites musical craft with prophetic ministry—putting Psalms 39, 62, 77, and 89 in Israel’s hands.',
    ],
    keyChapters: [
      {
        reference: '1 Chronicles 16:37–42',
        label: 'Morning & Evening Singers Before the Ark',
        storyModuleId: 'story-1ch-ark-praise',
        chapterId: '1CH-16',
        anchorVerseNumber: 41,
      },
      {
        reference: '1 Chronicles 25:1–6',
        label: 'Prophesying With Harps & Thanksgiving',
        storyModuleId: 'story-1ch-cheerful-giving',
        chapterId: '1CH-25',
        anchorVerseNumber: 3,
      },
    ],
  },
  'char-profile-asa': {
    id: 'char-profile-asa',
    name: 'King Asa of Judah',
    nameMeaning: 'Hebrew: Asa ("Healer / Physician")',
    era: 'Divided Monarchy ~910–869 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-asa',
    quickBio:
      'Early Judean reformer who cleared away idols, cried out “There is none besides You to help!” against a million-man army at Mareshah, and rallied Judah in covenant renewal—reminding readers later why finishing well matters.',
    familyTree: { parents: ['Abijah', 'Maacah (removed as queen mother)'], siblings: [], children: ['char-profile-jehoshaphat'] },
    locationsLived: [
      {
        placeName: 'Jerusalem & Mareshah Valley',
        roleInLife: 'Reigned forty-one years over Judah through early revival and later testing',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Gave Israel 2 Chronicles 14:11’s unforgettable prayer of powerless trust in Yahweh.',
    ],
    keyChapters: [
      {
        reference: '2 Chronicles 14:1–15',
        label: 'Prayer of Helpless Trust at Mareshah',
        storyModuleId: 'story-2ch-humble-heal',
        chapterId: '2CH-14',
        anchorVerseNumber: 11,
      },
      {
        reference: '2 Chronicles 15:1–15',
        label: '“Take Courage—Your Work Will Be Rewarded!”',
        storyModuleId: 'story-2ch-humble-heal',
        chapterId: '2CH-15',
        anchorVerseNumber: 7,
      },
    ],
  },
  'char-profile-jehoshaphat': {
    id: 'char-profile-jehoshaphat',
    name: 'King Jehoshaphat',
    nameMeaning: 'Hebrew: Yehoshafat ("Yahweh Has Judged")',
    era: 'Divided Monarchy ~872–848 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-jehoshaphat',
    quickBio:
      'Sent Levite teachers across every town in Judah carrying the Book of the Law, reformed courts free of bribery, and when surrounded by allied invaders stood praying: “Neither know we what to do, but our eyes are upon You!”',
    familyTree: { parents: ['char-profile-asa', 'Azubah'], siblings: [], children: ['Jehoram'] },
    locationsLived: [
      {
        placeName: 'Jerusalem & Valley of Beracah',
        roleInLife: 'Led Judah in Torah teaching, court reform, and choir-led deliverance',
        coordinates: { lat: 31.65, lng: 35.22 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Put worship singers at the very front line of battle—turning danger into the Valley of Blessing.',
    ],
    keyChapters: [
      {
        reference: '2 Chronicles 17:7–10',
        label: 'Sending Torah Teachers Across All Cities',
        storyModuleId: 'story-2ch-choir-battle',
        chapterId: '2CH-17',
        anchorVerseNumber: 9,
      },
      {
        reference: '2 Chronicles 20:1–30',
        label: '“Our Eyes Are Upon You” & Choirs Marching First',
        storyModuleId: 'story-2ch-choir-battle',
        chapterId: '2CH-20',
        anchorVerseNumber: 12,
      },
    ],
  },
  'char-profile-jehoshabeath': {
    id: 'char-profile-jehoshabeath',
    name: 'Princess Jehoshabeath (Jehosheba)',
    nameMeaning: 'Hebrew: Yehoshavat ("Yahweh Is an Oath")',
    era: 'House of David Crisis ~841 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-jehoshabeath',
    quickBio:
      'Brave royal daughter of Judah and wife of high priest Jehoiada who quietly whisked infant prince Joash out of queen Athaliah’s palace purge and sheltered him safely inside God’s Temple for six years.',
    familyTree: { parents: ['King Jehoram'], siblings: ['Ahaziah'], spouse: ['char-profile-jehoiada'] },
    locationsLived: [
      {
        placeName: 'Jerusalem Temple Chambers',
        roleInLife: 'Kept the sole surviving royal heir of David hidden for six years',
        coordinates: { lat: 31.778, lng: 35.235 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Without her swift, hidden courage, the royal line of David (leading to Jesus) faced extinction.',
    ],
    keyChapters: [
      {
        reference: '2 Chronicles 22:10–12',
        label: 'Rescuing Infant Joash Into the Temple',
        storyModuleId: 'story-2ch-joash-rescue',
        chapterId: '2CH-22',
        anchorVerseNumber: 11,
      },
    ],
  },
  'char-profile-jehoiada': {
    id: 'char-profile-jehoiada',
    name: 'High Priest Jehoiada',
    nameMeaning: 'Hebrew: Yehoyada ("Yahweh Knows")',
    era: 'Judah ~900–796 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-jehoiada',
    quickBio:
      'Wise high priest who sheltered baby Joash beside his wife Jehoshabeath, united captains and Levites in his seventh year to crown the child-king, tore down Baal shrines, and was honored with burial among Israel’s kings.',
    familyTree: { parents: [], siblings: [], spouse: ['char-profile-jehoshabeath'], children: ['Zechariah (Prophet)'] },
    locationsLived: [
      {
        placeName: 'Jerusalem Temple Courts',
        roleInLife: 'High Priest who restored Davidic kingship and repaired the Temple',
        coordinates: { lat: 31.778, lng: 35.235 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Modeled faithful stewardship of both throne and sanctuary across 130 years of life.',
    ],
    keyChapters: [
      {
        reference: '2 Chronicles 23:1–21',
        label: 'Crowning Seven-Year-Old King Joash',
        storyModuleId: 'story-2ch-joash-rescue',
        chapterId: '2CH-23',
        anchorVerseNumber: 11,
      },
    ],
  },
  'char-profile-manasseh': {
    id: 'char-profile-manasseh',
    name: 'King Manasseh (Penitent)',
    nameMeaning: 'Hebrew: Menasheh ("Causing to Forget")',
    era: 'Assyrian Hegemony ~697–643 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-manasseh',
    quickBio:
      'Son of faithful Hezekiah who plunged Judah into devastating idolatry for decades—until taken in bronze shackles to Babylon, where he humbled himself deeply before Yahweh, received astonishing forgiveness, and returned to rebuild and worship.',
    familyTree: { parents: ['char-profile-hezekiah', 'Hephzibah'], siblings: [], children: ['Amon'] },
    locationsLived: [
      {
        placeName: 'Jerusalem & Babylon Prison',
        roleInLife: 'Exiled in shackles before deep repentance brought restoration home',
        coordinates: { lat: 32.54, lng: 44.42 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Exclusive to 2 Chronicles 33, Manasseh’s forgiveness proves no failure puts anyone beyond God’s mercy.',
    ],
    keyChapters: [
      {
        reference: '2 Chronicles 33:10–19',
        label: 'Humbled in Bronze Chains & Astonishingly Forgiven',
        storyModuleId: 'story-2ch-manasseh-mercy',
        chapterId: '2CH-33',
        anchorVerseNumber: 12,
      },
    ],
  },
  'char-profile-cyrus': {
    id: 'char-profile-cyrus',
    name: 'King Cyrus of Persia',
    nameMeaning: 'Old Persian: Kurush ("Sun / Shepherd King")',
    era: 'Persian Restoration ~559–530 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-cyrus',
    quickBio:
      'Conquered Babylon without destroying temples—then stirred by Yahweh in his first year to proclaim Jewish exiles free to return to Jerusalem and return five thousand four hundred Temple vessels.',
    familyTree: { parents: ['Cambyses I'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon & Ecbatana',
        roleInLife: 'Issued decree restoring Jerusalem’s Temple in 538 BC',
        coordinates: { lat: 32.54, lng: 44.42 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Named over a century in advance by Isaiah 44–45 as Heaven’s shepherd opening prison doors for exiles.',
    ],
    keyChapters: [
      {
        reference: 'Ezra 1:1–11',
        label: 'Dawn Decree & Return of Gold Bowls',
        storyModuleId: 'story-ezr-decree-altar',
        chapterId: 'EZR-1',
        anchorVerseNumber: 1,
      },
    ],
  },
  'char-profile-zerubbabel': {
    id: 'char-profile-zerubbabel',
    name: 'Zerubbabel, Governor of Judah',
    nameMeaning: 'Hebrew / Akkadian: Zer-Babili ("Seed / Offspring of Babylon")',
    era: 'First Return ~538–515 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-zerubbabel',
    quickBio:
      'Royal grandson of King Jehoiachin who led the first massive caravan home from Babylon, laid Jerusalem’s new Temple foundation amid shouts and tears, and pressed on after prophets Haggai and Zechariah spoke courage.',
    familyTree: { parents: ['Shealtiel / Pedaiah (House of David)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon & Jerusalem',
        roleInLife: 'Governor of Judah who rebuilt the Altar and Second Temple',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Kept the line of David alive in returning Judah and completed the Second Temple despite fierce pushback.',
    ],
    keyChapters: [
      {
        reference: 'Ezra 3:1–13',
        label: 'Laying the Foundation With Tears & Joy',
        storyModuleId: 'story-ezr-decree-altar',
        chapterId: 'EZR-3',
        anchorVerseNumber: 11,
      },
    ],
  },
  'char-profile-jeshua': {
    id: 'char-profile-jeshua',
    name: 'Jeshua (Joshua) the High Priest',
    nameMeaning: 'Hebrew: Yeshua ("Yahweh Saves")',
    era: 'First Return ~538–515 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-jeshua',
    quickBio:
      'Post-exilic high priest standing shoulder to shoulder with Zerubbabel to build Jerusalem’s stone altar first—lighting daily morning offerings even while surrounding hostility lingered.',
    familyTree: { parents: ['Jehozadak'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Jerusalem Temple Courts',
        roleInLife: 'Co-led altar restoration and Second Temple dedication',
        coordinates: { lat: 31.778, lng: 35.235 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Crowned prophetically in Zechariah 3 & 6 while faithfully rebuilding worship after seventy years of silence.',
    ],
    keyChapters: [
      {
        reference: 'Ezra 3:2–9',
        label: 'Building the Altar Before Temple Walls',
        storyModuleId: 'story-ezr-decree-altar',
        chapterId: 'EZR-3',
        anchorVerseNumber: 2,
      },
    ],
  },
  'char-profile-ezra': {
    id: 'char-profile-ezra',
    name: 'Ezra the Scribe & Priest',
    nameMeaning: 'Hebrew: Ezra ("Help")',
    era: 'Second Return ~458–444 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-ezra',
    quickBio:
      'Skilled scribe of Moses’s Torah who “set his heart to study the law of Yahweh, to practice it, and to teach it”—leading families home without armed guards after praying at the Ahava canal, and reading Scripture joyfully at the Water Gate.',
    familyTree: { parents: ['Seraiah (Priestly Line of Aaron)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Babylon, Ahava Canal & Jerusalem',
        roleInLife: 'Led Scripture renewal in Ezra 7–10 and Nehemiah 8',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Turned returning Israel into a people anchored around open Scripture clearly understood.',
    ],
    keyChapters: [
      {
        reference: 'Ezra 7:1–10',
        label: 'Study, Practice & Teach by God’s Good Hand',
        storyModuleId: 'story-ezr-study-teach',
        chapterId: 'EZR-7',
        anchorVerseNumber: 10,
      },
      {
        reference: 'Nehemiah 8:1–12',
        label: 'Reading Torah Joyfully at the Water Gate',
        storyModuleId: 'story-neh-water-gate',
        chapterId: 'NEH-8',
        anchorVerseNumber: 10,
      },
    ],
  },
  'char-profile-nehemiah': {
    id: 'char-profile-nehemiah',
    name: 'Nehemiah, Cupbearer & Governor',
    nameMeaning: 'Hebrew: Nechemyah ("Yahweh Comforts")',
    era: 'Persian Restoration ~445–432 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-nehemiah',
    quickBio:
      'Trusted Persian palace cupbearer whose heart broke over Jerusalem’s burned gates—leading neighbors to rebuild city walls in fifty-two days with trowel in one hand and spear nearby, canceling debt for the poor, and praying simply: “Remember me, O my God!”',
    familyTree: { parents: ['Hacaliah'], siblings: ['Hanani'] },
    locationsLived: [
      {
        placeName: 'Susa & Jerusalem',
        roleInLife: 'Governor of Judah who rebuilt Jerusalem’s walls in 52 days',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Unites spontaneous “arrow prayers,” fearless organization, and economic compassion for struggling neighbors.',
    ],
    keyChapters: [
      {
        reference: 'Nehemiah 2:1–20',
        label: 'Silent Arrow Prayer & Midnight Wall Inspection',
        storyModuleId: 'story-neh-wall-builders',
        chapterId: 'NEH-2',
        anchorVerseNumber: 4,
      },
      {
        reference: 'Nehemiah 6:1–16',
        label: '“I Am Doing a Great Work”—Wall Done in 52 Days',
        storyModuleId: 'story-neh-wall-builders',
        chapterId: 'NEH-6',
        anchorVerseNumber: 3,
      },
    ],
  },
  'char-profile-artaxerxes': {
    id: 'char-profile-artaxerxes',
    name: 'King Artaxerxes of Persia',
    nameMeaning: 'Old Persian: Artakhshassa ("Whose Reign Is Through Truth")',
    era: 'Persian Empire 465–424 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-artaxerxes',
    quickBio:
      'Persian monarch who entrusted priest Ezra with silver and teaching authority across Judah—and twelve years later noticed cupbearer Nehemiah’s hidden grief, commissioning him with royal timber letters to rebuild Jerusalem’s walls.',
    familyTree: { parents: ['Xerxes I (Ahasuerus)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Susa Citadel (Winter Palace)',
        roleInLife: 'Granted Ezra and Nehemiah royal decrees to restore Jerusalem',
        coordinates: { lat: 32.19, lng: 48.25 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'God softened this emperor’s heart repeatedly—turning palace service into open doors for restoration.',
    ],
    keyChapters: [
      {
        reference: 'Nehemiah 2:1–8',
        label: 'Noticing Sadness & Granting Timber Letters',
        storyModuleId: 'story-neh-wall-builders',
        chapterId: 'NEH-2',
        anchorVerseNumber: 8,
      },
    ],
  },
  'char-profile-esther': {
    id: 'char-profile-esther',
    name: 'Queen Esther (Hadassah)',
    nameMeaning: 'Hebrew: Hadassah ("Myrtle") · Persian: Star',
    era: 'Persian Empire ~483–473 BC',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-esther',
    quickBio:
      'Orphaned Jewish maiden raised in Susa by her cousin Mordecai who became queen of Persia—fasting three days before stepping uninvited into the royal throne room, praying “If I perish, I perish,” and rescuing her people “for such a time as this.”',
    familyTree: { parents: ['Abihail'], siblings: [], spouse: ['char-profile-ahasuerus'] },
    locationsLived: [
      {
        placeName: 'Susa Citadel (Royal Palace)',
        roleInLife: 'Queen of Persia who courageously saved Israel during Purim',
        coordinates: { lat: 32.19, lng: 48.25 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Shows how patient wisdom, shared fasting, and quiet bravery turn crisis upside down.',
    ],
    keyChapters: [
      {
        reference: 'Esther 4:1–17',
        label: '“For Such a Time as This” & Three-Day Fast',
        storyModuleId: 'story-est-such-a-time',
        chapterId: 'EST-4',
        anchorVerseNumber: 14,
      },
      {
        reference: 'Esther 7:1–10',
        label: 'Banquet Plea & Reversal of Haman’s Plot',
        storyModuleId: 'story-est-great-reversal',
        chapterId: 'EST-7',
        anchorVerseNumber: 3,
      },
    ],
  },
  'char-profile-mordecai': {
    id: 'char-profile-mordecai',
    name: 'Mordecai of Susa',
    nameMeaning: 'Babylonian / Persian: Marduka (Benjaminite faithful elder)',
    era: 'Persian Empire ~483–473 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-mordecai',
    quickBio:
      'Faithful Benjaminite elder sitting at Susa’s royal gate who raised orphaned cousin Hadassah, exposed an assassination plot in silence, refused to bow to arrogant Haman, urged Esther toward brave action, and served later seeking the peace of all his people.',
    familyTree: { parents: ['Jair (Tribe of Benjamin)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Susa King’s Gate',
        roleInLife: 'Elder guardian of Esther and Prime Minister of Persia',
        coordinates: { lat: 32.19, lng: 48.25 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Forgotten faithfulness at the gate became the exact hinge Heaven turned during one sleepless royal night.',
    ],
    keyChapters: [
      {
        reference: 'Esther 4:13–17',
        label: 'Challenging Esther at the Gate in Sackcloth',
        storyModuleId: 'story-est-such-a-time',
        chapterId: 'EST-4',
        anchorVerseNumber: 14,
      },
      {
        reference: 'Esther 6:1–14',
        label: 'Sleepless Night Chronicle & Unexpected Honor',
        storyModuleId: 'story-est-great-reversal',
        chapterId: 'EST-6',
        anchorVerseNumber: 1,
      },
    ],
  },
  'char-profile-ahasuerus': {
    id: 'char-profile-ahasuerus',
    name: 'King Ahasuerus (Xerxes I)',
    nameMeaning: 'Hebrew: Achashverosh · Persian: Khshayarsha ("Ruler of Heroes")',
    era: 'Persian Empire 486–465 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-ahasuerus',
    quickBio:
      'Impulsive monarch ruling 127 provinces from India to Cush whose golden scepter spared brave Queen Esther and whose unexpected sleepless night drove him to read royal chronicles honoring forgotten Mordecai.',
    familyTree: { parents: ['Darius I'], siblings: [], spouse: ['char-profile-esther'] },
    locationsLived: [
      {
        placeName: 'Susa Citadel',
        roleInLife: 'Persian emperor who sealed the counter-decree saving Israel',
        coordinates: { lat: 32.19, lng: 48.25 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Demonstrates Proverbs 21:1—even an impulsive emperor’s sleepless night bends silently under Heaven’s steering.',
    ],
    keyChapters: [
      {
        reference: 'Esther 5:1–8',
        label: 'Golden Scepter Extended Across Inner Court',
        storyModuleId: 'story-est-such-a-time',
        chapterId: 'EST-5',
        anchorVerseNumber: 2,
      },
    ],
  },
  'char-profile-haman': {
    id: 'char-profile-haman',
    name: 'Haman the Agagite',
    nameMeaning: 'Persian / Elamite: Haman ("Magnificent / Illustrious")',
    era: 'Persian Empire ~474 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-haman',
    quickBio:
      'Vain vizier promoted above Persia’s princes who grew consumed with rage because one man—Mordecai—refused to kneel, casting Pur dice to exterminate every Jewish household before collapsing in his own trap.',
    familyTree: { parents: ['Hammedatha'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Susa Palace Courts',
        roleInLife: 'Grand Vizier whose prideful conspiracy reversed on himself',
        coordinates: { lat: 32.19, lng: 48.25 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Embodies Psalm 7’s warning: arrogance digging a pit for innocent neighbors tumbles straight into it.',
    ],
    keyChapters: [
      {
        reference: 'Esther 7:1–10',
        label: 'Unmasked at Esther’s Second Banquet',
        storyModuleId: 'story-est-great-reversal',
        chapterId: 'EST-7',
        anchorVerseNumber: 6,
      },
    ],
  },
  'char-profile-lady-wisdom': {
    id: 'char-profile-lady-wisdom',
    name: 'Lady Wisdom (Chochmah)',
    nameMeaning: 'Hebrew: חָכְמָה / Chochmah ("Skillful Living With God")',
    era: 'Poetry & Creation Order',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-lady-wisdom',
    quickBio:
      'God’s poetic voice throughout Proverbs 1–9—not locked behind palace doors, but standing openly at city gates inviting everyday people into humility, honesty, justice, and cosmic joy crafted before the mountains settled.',
    familyTree: { parents: ['Formed by Yahweh before Creation (Proverbs 8:22)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'City Gates, Crossroads & Seven-Pillar House',
        roleInLife: 'Calls openly to every learner seeking life and understanding',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Shows that Scripture’s universe rests on wisdom, beauty, and moral goodness—echoed later in Christ as God’s Wisdom.',
    ],
    keyChapters: [
      {
        reference: 'Proverbs 8:1–36',
        label: 'Wisdom’s Delight Beside Yahweh at Creation',
        storyModuleId: 'story-pro-wisdom-call',
        chapterId: 'PRO-8',
        anchorVerseNumber: 22,
      },
    ],
  },
  'char-profile-agur': {
    id: 'char-profile-agur',
    name: 'Agur, Son of Jakeh',
    nameMeaning: 'Hebrew: Agur ("Gathered / Collector")',
    era: 'Wisdom Traditions of Massa',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-agur',
    quickBio:
      'Refreshingly honest sage of Proverbs 30 who confesses feeling small before God’s infinite wind and waters—praying for modest daily bread (“neither poverty nor riches”) while marveling at four wise tiny creatures.',
    familyTree: { parents: ['Jakeh'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Massa / Eastern Frontier',
        roleInLife: 'Spoke humble riddles of dependence and natural wonder to Ithiel and Ucal',
        coordinates: { lat: 30.2, lng: 35.5 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Gave Scripture its most balanced prayer of contentment (30:8–9) and delighted observation of creation.',
    ],
    keyChapters: [
      {
        reference: 'Proverbs 30:1–33',
        label: 'Neither Poverty Nor Riches & Tiny Wise Creatures',
        storyModuleId: 'story-pro-gentle-steps',
        chapterId: 'PRO-30',
        anchorVerseNumber: 8,
      },
    ],
  },
  'char-profile-lemuel': {
    id: 'char-profile-lemuel',
    name: 'King Lemuel',
    nameMeaning: 'Hebrew: Lemo’el ("Devoted / Belonging to God")',
    era: 'Wisdom Traditions of Massa',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-lemuel',
    quickBio:
      'Young monarch who opens Proverbs 31 by passing along the oracle his own wise mother taught him: stay clear-headed, guard self-control, and open your mouth boldly to defend the voiceless and poor.',
    familyTree: { parents: ['Wise Queen Mother of Massa'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Royal Gate Court',
        roleInLife: 'Preserved his mother’s leadership ethic and noble-woman acrostic',
        coordinates: { lat: 31.5, lng: 35.4 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Anchors political authority in defending vulnerable neighbors rather than indulging royal luxury.',
    ],
    keyChapters: [
      {
        reference: 'Proverbs 31:1–9',
        label: 'A Mother’s Charge to Speak Up for the Voiceless',
        storyModuleId: 'story-pro-noble-hands',
        chapterId: 'PRO-31',
        anchorVerseNumber: 8,
      },
    ],
  },
  'char-profile-proverbs-31-woman': {
    id: 'char-profile-proverbs-31-woman',
    name: 'The Noble Woman (Eshet Chayil)',
    nameMeaning: 'Hebrew: אֵשֶׁת חַיִל / Eshet Chayil ("Woman of Valorous Strength")',
    era: 'Hebrew Acrostic Ideal',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-proverbs-31-woman',
    quickBio:
      'Celebrated in the 22-letter alphabetic poem closing Proverbs 31—combining entrepreneurial wisdom in planting vineyards and trade with compassionate hands opening wide to the poor and teaching with kindness on her tongue.',
    familyTree: { parents: [], siblings: [] },
    locationsLived: [
      {
        placeName: 'Household, Vineyard & City Gate',
        roleInLife: 'Model of joyful strength, faith, industry, and generosity',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Uses the same Hebrew word “chayil” (valorous strength) given to Boaz and mighty heroes—honoring everyday faithfulness as heroic.',
    ],
    keyChapters: [
      {
        reference: 'Proverbs 31:10–31',
        label: '“She Opens Her Hand to the Poor” & Kindness',
        storyModuleId: 'story-pro-noble-hands',
        chapterId: 'PRO-31',
        anchorVerseNumber: 26,
      },
    ],
  },
  'char-profile-qohelet': {
    id: 'char-profile-qohelet',
    name: 'Qohelet (The Teacher)',
    nameMeaning: 'Hebrew: קֹהֶלֶת / Qohelet ("Convener / Teacher of the Assembly")',
    era: 'Solomonic Wisdom Reflections',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-qohelet',
    quickBio:
      'Brutally honest royal sage of Ecclesiastes who investigated wealth, pleasure, toil, and human illusions “under the sun”—discovering that ordinary bread, warm companionship, and remembering our Creator hold lasting joy.',
    familyTree: { parents: ['Tradition of House of David'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Jerusalem Royal Gardens',
        roleInLife: 'Gathered assembly to weigh passing vapor against eternal reverence',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Gives Scripture space for honest questions about monotony while anchoring peace in seasons, joy, and revering God.',
    ],
    keyChapters: [
      {
        reference: 'Ecclesiastes 3:1–14',
        label: 'A Season for Every Purpose & Eternity in Hearts',
        storyModuleId: 'story-ecc-seasons-cord',
        chapterId: 'ECC-3',
        anchorVerseNumber: 1,
      },
      {
        reference: 'Ecclesiastes 12:1–14',
        label: 'Remember Your Creator & Whole Duty',
        storyModuleId: 'story-ecc-seasons-cord',
        chapterId: 'ECC-12',
        anchorVerseNumber: 1,
      },
    ],
  },
  'char-profile-shulammite': {
    id: 'char-profile-shulammite',
    name: 'The Shulammite Bride',
    nameMeaning: 'Hebrew: Shulammith (Feminine reflection of Shalom / "Peaceful One")',
    era: 'Song of Songs Poetry',
    roleBadge: 'Women of Faith',
    portraitIllustrationId: 'portrait-shulammite',
    quickBio:
      'Sun-tanned vineyard keeper and central voice of Song of Solomon—choosing authentic, mutual covenant devotion (“I am my beloved’s, and my beloved is mine”) over dazzling royal treasure.',
    familyTree: { parents: ['Rural Judean Household'], siblings: ['Elder Brothers (Vineyard Keepers)'] },
    locationsLived: [
      {
        placeName: 'En Gedi Vineyards & Sharon Plain',
        roleInLife: 'Celebrates pure, unquenchable love in the Song of Songs',
        coordinates: { lat: 31.46, lng: 35.39 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Models faithful, wholehearted delight declaring real love stronger than death and unpurchasable with silver.',
    ],
    keyChapters: [
      {
        reference: 'Song of Solomon 2:1–17',
        label: 'Lily of the Valleys & Springtime Awakening',
        storyModuleId: 'story-sng-love-flame',
        chapterId: 'SNG-2',
        anchorVerseNumber: 10,
      },
      {
        reference: 'Song of Solomon 8:6–7',
        label: 'Unquenchable Flame & Seal Over Heart',
        storyModuleId: 'story-sng-love-flame',
        chapterId: 'SNG-8',
        anchorVerseNumber: 6,
      },
    ],
  },
  'char-profile-beloved-shepherd': {
    id: 'char-profile-beloved-shepherd',
    name: 'The Beloved Shepherd',
    nameMeaning: 'Hebrew: דּוֹדִי / Dodi ("My Beloved Companion")',
    era: 'Song of Songs Poetry',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-beloved-shepherd',
    quickBio:
      'Tender companion of the Shulammite in Song of Solomon who delights among green lilies and cedar beams—calling his beloved gently out of winter solitude into blooming springtime faithfulness.',
    familyTree: { parents: [], siblings: [] },
    locationsLived: [
      {
        placeName: 'Lebanon Slopes & Sharon Pastures',
        roleInLife: 'Tender shepherd voice in Song of Songs 2–8',
        coordinates: { lat: 32.3, lng: 34.9 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Became Scripture’s vivid reflection of God’s tender covenant delight over His beloved people.',
    ],
    keyChapters: [
      {
        reference: 'Song of Solomon 2:8–16',
        label: '“Rise Up, My Love—Winter Is Past!”',
        storyModuleId: 'story-sng-love-flame',
        chapterId: 'SNG-2',
        anchorVerseNumber: 11,
      },
    ],
  },
  'char-profile-uzziah': {
    id: 'char-profile-uzziah',
    name: 'King Uzziah (Azariah)',
    nameMeaning: 'Hebrew: עֻזִּיָּהוּ / Uzziyahu ("Yahweh Is My Strength")',
    era: 'Kingdom of Judah ~790–740 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-uzziah',
    quickBio:
      'Gifted fifty-two-year builder king of Judah who strengthened Jerusalem’s walls and loved farming—until late pride led him to usurp Temple incense before his passing opened Isaiah 6’s heavenly throne vision.',
    familyTree: { parents: ['Amaziah', 'Jecoliah'], siblings: [], children: ['Jotham'] },
    locationsLived: [
      {
        placeName: 'Jerusalem & Judean Hills',
        roleInLife: 'Prosperous builder-king whose death marks Isaiah 6:1',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Reminds readers that earthly kings pass away while Yahweh remains seated high and lifted up on heaven’s throne.',
    ],
    keyChapters: [
      {
        reference: 'Isaiah 6:1–8',
        label: 'The Year King Uzziah Died',
        storyModuleId: 'story-isa-throne-send-me',
        chapterId: 'ISA-6',
        anchorVerseNumber: 1,
      },
      {
        reference: '2 Chronicles 26:1–23',
        label: 'Rise, Pride & Final Years of Uzziah',
        storyModuleId: 'story-2ch-josiah-scroll',
        chapterId: '2CH-26',
        anchorVerseNumber: 16,
      },
    ],
  },
  'char-profile-ahaz': {
    id: 'char-profile-ahaz',
    name: 'King Ahaz',
    nameMeaning: 'Hebrew: אָחָז / Achaz ("He Has Grasped")',
    era: 'Assyrian Crisis ~735–715 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-ahaz',
    quickBio:
      'Trembling Judean king who met Isaiah beside the Upper Pool conduit during Syria’s threat—refusing God’s offered sign while unwittingly prompting Scripture’s famous Immanuel prophecy in Isaiah 7.',
    familyTree: { parents: ['Jotham'], siblings: [], children: ['char-profile-hezekiah'] },
    locationsLived: [
      {
        placeName: 'Jerusalem Upper Conduit',
        roleInLife: 'Tested whether Judah would trust Yahweh or Assyria in crisis',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Illustrates Isaiah’s crisp warning: “If you will not stand firm in faith, surely you shall not stand at all.”',
    ],
    keyChapters: [
      {
        reference: 'Isaiah 7:1–17',
        label: 'The Sign of Immanuel Offered to Ahaz',
        storyModuleId: 'story-isa-throne-send-me',
        chapterId: 'ISA-7',
        anchorVerseNumber: 14,
      },
    ],
  },
  'char-profile-eliakim': {
    id: 'char-profile-eliakim',
    name: 'Eliakim son of Hilkiah',
    nameMeaning: 'Hebrew: אֶלְיָקִים / Elyaqim ("God Raises Up")',
    era: 'Kingdom of Judah ~701 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-eliakim',
    quickBio:
      'Humble, trustworthy palace steward chosen by God to replace self-serving Shebna—honored in Isaiah 22 with “the key of the house of David” and sent by Hezekiah to answer Sennacherib’s envoys.',
    familyTree: { parents: ['Hilkiah'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Jerusalem Royal Palace',
        roleInLife: 'Faithful steward and siege envoy alongside Isaiah',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Models integrity-driven leadership entrusted with keys that foreshadow Jesus’s authority in Revelation 3:7.',
    ],
    keyChapters: [
      {
        reference: 'Isaiah 22:20–24',
        label: 'Given the Key of the House of David',
        storyModuleId: 'story-isa-throne-send-me',
        chapterId: 'ISA-22',
        anchorVerseNumber: 22,
      },
      {
        reference: 'Isaiah 36:1–37:4',
        label: 'Representing Hezekiah Before Isaiah',
        storyModuleId: 'story-2ki-hezekiah',
        chapterId: 'ISA-36',
        anchorVerseNumber: 22,
      },
    ],
  },
  'char-profile-sennacherib': {
    id: 'char-profile-sennacherib',
    name: 'King Sennacherib',
    nameMeaning: 'Akkadian: Sin-ahhe-eriba ("Sin Has Replaced the Brothers")',
    era: 'Neo-Assyrian Empire ~705–681 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-sennacherib',
    quickBio:
      'Formidable Assyrian emperor who marched across Judah capturing forty-six fortified towns—only for his threatening ultimatum over Jerusalem to shatter overnight against Hezekiah’s Temple prayer and Isaiah’s prophecy.',
    familyTree: { parents: ['Sargon II'], siblings: [], children: ['Esarhaddon', 'Adrammelech', 'Sharezer'] },
    locationsLived: [
      {
        placeName: 'Nineveh & Lachish Siege',
        roleInLife: 'Challenged Yahweh openly outside Jerusalem’s walls in 701 BC',
        coordinates: { lat: 36.36, lng: 43.15 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Proves historically in both Scripture and Nineveh prisms that Jerusalem stood protected without Assyria setting one foot inside.',
    ],
    keyChapters: [
      {
        reference: 'Isaiah 36:1–37:38',
        label: 'Siege Ultimatum Spread Before God',
        storyModuleId: 'story-2ki-hezekiah',
        chapterId: 'ISA-37',
        anchorVerseNumber: 14,
      },
    ],
  },
  'char-profile-jeremiah': {
    id: 'char-profile-jeremiah',
    name: 'Jeremiah',
    nameMeaning: 'Hebrew: יִרְמְיָהוּ / Yirmeyahu ("Yahweh Exalts / Sends")',
    era: 'Fall of Jerusalem ~627–580 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-jeremiah',
    quickBio:
      'Tenderhearted priest-prophet from Anathoth called in his youth to weep over Jerusalem’s unfaithfulness—enduring public stocks, burned scrolls, and a muddy cistern while promising God’s New Covenant written right onto human hearts.',
    familyTree: { parents: ['Hilkiah (Priest of Anathoth)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Anathoth & Jerusalem',
        roleInLife: 'Prophesied forty faithful years amid siege, prison, and forced flight',
        coordinates: { lat: 31.81, lng: 35.26 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Gave Scripture both its deepest prayers of honest sorrow and its clearest promise of the New Covenant (Jeremiah 31:31–34).',
    ],
    keyChapters: [
      {
        reference: 'Jeremiah 31:31–34',
        label: 'Promise of the New Covenant on Hearts',
        storyModuleId: 'story-jer-potter-new-covenant',
        chapterId: 'JER-31',
        anchorVerseNumber: 33,
      },
      {
        reference: 'Jeremiah 38:1–13',
        label: 'Lifted Out of the Muddy Cistern',
        storyModuleId: 'story-jer-potter-new-covenant',
        chapterId: 'JER-38',
        anchorVerseNumber: 11,
      },
    ],
  },
  'char-profile-baruch': {
    id: 'char-profile-baruch',
    name: 'Baruch son of Neriah',
    nameMeaning: 'Hebrew: בָּרוּךְ / Baruch ("Blessed")',
    era: 'Fall of Jerusalem ~605–580 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-baruch',
    quickBio:
      'Loyal scribe, public reader, and lifelong companion of Jeremiah who inked Jeremiah’s dictated prophecies twice after King Jehoiakim sliced the first scroll into winter brazier flames.',
    familyTree: { parents: ['Neriah'], siblings: ['Seraiah (Quartermaster)'] },
    locationsLived: [
      {
        placeName: 'Jerusalem & Tahpanhes',
        roleInLife: 'Preserved Jeremiah’s scroll and guarded the Anathoth field deed',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Demonstrates courageous behind-the-scenes faithfulness—honored personally in Jeremiah 45: “I will give your life to you everywhere you go.”',
    ],
    keyChapters: [
      {
        reference: 'Jeremiah 36:1–32',
        label: 'Inking & Rewriting the Burned Scroll',
        storyModuleId: 'story-jer-potter-new-covenant',
        chapterId: 'JER-36',
        anchorVerseNumber: 32,
      },
      {
        reference: 'Jeremiah 45:1–5',
        label: 'Personal Word of Preservation to Baruch',
        storyModuleId: 'story-jer-potter-new-covenant',
        chapterId: 'JER-45',
        anchorVerseNumber: 5,
      },
    ],
  },
  'char-profile-ebed-melech': {
    id: 'char-profile-ebed-melech',
    name: 'Ebed-melech of Cush',
    nameMeaning: 'Hebrew: עֶבֶד־מֶלֶךְ / Eved-Melekh ("Servant of the King")',
    era: 'Siege of Jerusalem ~587 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-ebed-melech',
    quickBio:
      'Compassionate Cushite official inside Zedekiah’s court who confronted royal silence to lift starving Jeremiah gently out of a muddy cistern using soft worn rags beneath folded ropes.',
    familyTree: { parents: [], siblings: [] },
    locationsLived: [
      {
        placeName: 'Jerusalem Royal Court',
        roleInLife: 'Spoke bravely to King Zedekiah and rescued Jeremiah',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Remembered specifically by God in Jeremiah 39:15–18 for quiet empathy under pressure: “Because you have trusted in me.”',
    ],
    keyChapters: [
      {
        reference: 'Jeremiah 38:7–13',
        label: 'Soft Rags & Ropes Rescue in the Cistern',
        storyModuleId: 'story-jer-potter-new-covenant',
        chapterId: 'JER-38',
        anchorVerseNumber: 12,
      },
    ],
  },
  'char-profile-zedekiah': {
    id: 'char-profile-zedekiah',
    name: 'King Zedekiah',
    nameMeaning: 'Hebrew: צִדְקִיָּהוּ / Tzidqiyahu ("Yahweh Is My Righteousness")',
    era: 'Final Years of Judah ~597–586 BC',
    roleBadge: 'Leaders',
    portraitIllustrationId: 'portrait-zedekiah',
    quickBio:
      'Last king of Jerusalem before Babylonian exile—secretly respected Jeremiah enough to ask private counsel at night, yet feared mocking nobles too deeply to obey God’s saving warning.',
    familyTree: { parents: ['char-profile-josiah', 'Hamutal'], siblings: ['Jehoahaz', 'Jehoiakim'] },
    locationsLived: [
      {
        placeName: 'Jerusalem Palace & Courtyard Guard',
        roleInLife: 'Wavered between prophetic truth and noble pressure',
        coordinates: { lat: 31.77, lng: 35.23 },
        mapPinId: 'loc-jerusalem',
      },
    ],
    whyTheyMatter: [
      'Shows soberingly how people-pleasing paralyzes leaders who already know what is right.',
    ],
    keyChapters: [
      {
        reference: 'Jeremiah 38:14–28',
        label: 'Secret Night Conversation With Jeremiah',
        storyModuleId: 'story-jer-potter-new-covenant',
        chapterId: 'JER-38',
        anchorVerseNumber: 19,
      },
    ],
  },
  'char-profile-ezekiel': {
    id: 'char-profile-ezekiel',
    name: 'Ezekiel',
    nameMeaning: 'Hebrew: יְחֶזְקֵאל / Yechezqel ("God Strengthens")',
    era: 'Babylonian Exile ~593–571 BC',
    roleBadge: 'Prophets',
    portraitIllustrationId: 'portrait-ezekiel',
    quickBio:
      'Exiled priest carried into Babylon beside the Kebar River—witnessing mobile sapphire chariot wheels, acting out street signs, and prophesying until dry bones breathed alive and healing water flowed from God’s house.',
    familyTree: { parents: ['Buzi (Priest)'], siblings: [] },
    locationsLived: [
      {
        placeName: 'Tel-abib Beside Kebar Canal (Babylon)',
        roleInLife: 'Watchman preaching hope of new hearts and Spirit renewal to exiles',
        coordinates: { lat: 32.54, lng: 44.42 },
        mapPinId: 'loc-babylon',
      },
    ],
    whyTheyMatter: [
      'Unveiled both God’s Spirit inside human hearts (36:26) and dry bones rising alive (37:1–14).',
    ],
    keyChapters: [
      {
        reference: 'Ezekiel 37:1–14',
        label: 'Prophesying Over the Valley of Dry Bones',
        storyModuleId: 'story-ezk-dry-bones-river',
        chapterId: 'EZK-37',
        anchorVerseNumber: 5,
      },
      {
        reference: 'Ezekiel 47:1–12',
        label: 'Healing River Flowing to the Dead Sea',
        storyModuleId: 'story-ezk-dry-bones-river',
        chapterId: 'EZK-47',
        anchorVerseNumber: 9,
      },
    ],
  },
  'char-profile-jesus': {
      "id": "char-profile-jesus",
      "name": "Jesus Christ",
      "nameMeaning": "Hebrew/Greek: יֵשׁוּעַ / Ἰησοῦς (\"Yahweh Saves\") · Χριστός (\"Anointed Messiah\")",
      "era": "Gospels (~4 BC – 30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-jesus",
      "quickBio": "Eternal Son of God born of Mary in Bethlehem, raised in Nazareth, baptized in the Jordan, and crucified outside Jerusalem for the sins of the world. Rising bodily on the third day, He reigns as Lord, Savior, and Bridegroom of a redeemed humanity.",
      "familyTree": {
          "parents": [
              "God the Father",
              "char-profile-mary-jesus",
              "char-profile-joseph-nazareth"
          ],
          "siblings": [
              "char-profile-james-jerusalem",
              "char-profile-jude",
              "Joseph",
              "Simon"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Bethlehem of Judea",
              "roleInLife": "Born in humility and laid in a manger",
              "coordinates": {
                  "lat": 31.705,
                  "lng": 35.202
              },
              "mapPinId": "loc-bethlehem"
          },
          {
              "placeName": "Galilee (Nazareth & Capernaum)",
              "roleInLife": "Preached the Kingdom, healed the sick, and called twelve apostles",
              "coordinates": {
                  "lat": 32.8,
                  "lng": 35.5
              },
              "mapPinId": "loc-galilee"
          },
          {
              "placeName": "Jerusalem",
              "roleInLife": "Taught in the Temple, died on Golgotha, and rose from the empty tomb",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Fulfills every Old Testament promise of the Davidic King, Suffering Servant, and Passover Lamb.",
          "Reconciles sinners to God by grace through His cross and bodily resurrection.",
          "Reveals the exact heart of God: unfailing truth overflowing with humble, rescuing love."
      ],
      "keyChapters": [
          {
              "reference": "Matthew 5:1–16",
              "label": "The Beatitudes & Sermon on the Mount",
              "storyModuleId": "story-mat-sermon",
              "chapterId": "MAT-5",
              "anchorVerseNumber": 3
          },
          {
              "reference": "John 3:1–21",
              "label": "Born Again & God So Loved the World",
              "storyModuleId": "story-jhn-nicodemus",
              "chapterId": "JHN-3",
              "anchorVerseNumber": 16
          },
          {
              "reference": "Luke 24:1–53",
              "label": "The Empty Tomb & Road to Emmaus",
              "storyModuleId": "story-luk-resurrection",
              "chapterId": "LUK-24",
              "anchorVerseNumber": 6
          }
      ]
  },
  'char-profile-paul': {
      "id": "char-profile-paul",
      "name": "Paul the Apostle",
      "nameMeaning": "Hebrew/Latin: שָׁאוּל / Paulus (\"Asked For\" / \"Little\")",
      "era": "Early Church & Missionary Journeys (~33–67 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-paul",
      "quickBio": "Brilliant Pharisee scholar from Tarsus who fiercely persecuted Christians until the risen Jesus confronted him on the road to Damascus. Transformed into the tireless Apostle to the Gentiles, Paul planted churches across the Roman Empire and authored thirteen New Testament letters.",
      "familyTree": {
          "parents": [
              "Tribe of Benjamin family in Tarsus"
          ],
          "siblings": [
              "Sister in Jerusalem"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Damascus",
              "roleInLife": "Studied under Gamaliel, met the risen Christ, and escaped persecution",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          },
          {
              "placeName": "Galilee & Syria (Antioch)",
              "roleInLife": "Launched three historic missionary journeys to the nations",
              "coordinates": {
                  "lat": 32.8,
                  "lng": 35.5
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Articulated justification by grace through faith across Romans and Galatians.",
          "Carried the Gospel from Jerusalem to Greece and imperial Rome without losing joy in prison."
      ],
      "keyChapters": [
          {
              "reference": "Acts 9:1–19",
              "label": "Blinded on the Road to Damascus",
              "storyModuleId": "story-act-damascus",
              "chapterId": "ACT-9",
              "anchorVerseNumber": 4
          },
          {
              "reference": "Romans 8:1–39",
              "label": "No Condemnation & Nothing Separates Us",
              "storyModuleId": "story-rom-spirit",
              "chapterId": "ROM-8",
              "anchorVerseNumber": 38
          },
          {
              "reference": "1 Corinthians 13:1–13",
              "label": "The More Excellent Way of Agape Love",
              "storyModuleId": "story-1co-love",
              "chapterId": "1CO-13",
              "anchorVerseNumber": 4
          }
      ]
  },
  'char-profile-mary-jesus': {
      "id": "char-profile-mary-jesus",
      "name": "Mary, Mother of Jesus",
      "nameMeaning": "Hebrew: מִרְיָם / Miryam (\"Beloved / Wished-for Child\")",
      "era": "Birth & Ministry of Jesus (~4 BC – 33 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-mary-jesus",
      "quickBio": "Humble young woman of Nazareth chosen by God’s grace to conceive Jesus through the Holy Spirit. She answered the angel with courageous surrender—“Let it be to me according to your word”—pondered every sign in her heart, and stood faithfully beneath the cross.",
      "familyTree": {
          "parents": [
              "Heli (Luke 3 tradition)"
          ],
          "siblings": [
              "Unnamed sister"
          ],
          "spouse": [
              "char-profile-joseph-nazareth"
          ],
          "children": [
              "char-profile-jesus",
              "char-profile-james-jerusalem",
              "char-profile-jude"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galilee (Nazareth & Cana)",
              "roleInLife": "Visited by Gabriel; trusted Jesus at the Cana wedding",
              "coordinates": {
                  "lat": 32.7,
                  "lng": 35.3
              },
              "mapPinId": "loc-galilee"
          },
          {
              "placeName": "Bethlehem & Jerusalem",
              "roleInLife": "Gave birth in a manger; stayed beside the cross and Pentecost Upper Room",
              "coordinates": {
                  "lat": 31.705,
                  "lng": 35.202
              },
              "mapPinId": "loc-bethlehem"
          }
      ],
      "whyTheyMatter": [
          "Models willing, faith-filled obedience in her Magnificat praise song (Luke 1:46–55).",
          "Endured Simeon’s prophecy of a pierced soul while staying anchored beside Jesus’ disciples."
      ],
      "keyChapters": [
          {
              "reference": "Luke 1:26–56",
              "label": "The Annunciation & Mary’s Magnificat",
              "storyModuleId": "story-luk-annunciation",
              "chapterId": "LUK-1",
              "anchorVerseNumber": 38
          },
          {
              "reference": "John 19:25–27",
              "label": "Standing Courageously Beside the Cross",
              "storyModuleId": "story-jhn-cross",
              "chapterId": "JHN-19",
              "anchorVerseNumber": 26
          }
      ]
  },
  'char-profile-joseph-nazareth': {
      "id": "char-profile-joseph-nazareth",
      "name": "Joseph of Nazareth",
      "nameMeaning": "Hebrew: יוֹסֵף / Yosef (\"May He Add\")",
      "era": "Nativity & Childhood of Jesus (~4 BC – 12 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-joseph-nazareth",
      "quickBio": "Righteous carpenter from King David’s line engaged to Mary. Torn when she was found pregnant, he listened immediately to God’s angel in dreams, protected Mother and Child in Egypt, and quietly raised Jesus as a craftsman in Nazareth.",
      "familyTree": {
          "parents": [
              "Jacob / Eli (Davidic lineage)"
          ],
          "siblings": [],
          "spouse": [
              "char-profile-mary-jesus"
          ],
          "children": [
              "char-profile-jesus",
              "char-profile-james-jerusalem",
              "char-profile-jude"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Bethlehem & Egypt",
              "roleInLife": "Fled by night from Herod to keep infant Jesus safe",
              "coordinates": {
                  "lat": 31.705,
                  "lng": 35.202
              },
              "mapPinId": "loc-bethlehem"
          },
          {
              "placeName": "Galilee (Nazareth)",
              "roleInLife": "Worked faithfully as a carpenter and taught Jesus integrity",
              "coordinates": {
                  "lat": 32.7,
                  "lng": 35.3
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Connected Jesus legally to the royal throne promised to King David.",
          "Exemplifies quiet strength, mercy toward others’ reputation, and instant obedience."
      ],
      "keyChapters": [
          {
              "reference": "Matthew 1:18–25",
              "label": "Joseph’s Dream & Naming Jesus",
              "storyModuleId": "story-mat-birth",
              "chapterId": "MAT-1",
              "anchorVerseNumber": 20
          },
          {
              "reference": "Matthew 2:13–23",
              "label": "Flight Into Egypt & Settling in Nazareth",
              "storyModuleId": "story-mat-flight",
              "chapterId": "MAT-2",
              "anchorVerseNumber": 13
          }
      ]
  },
  'char-profile-john-baptist': {
      "id": "char-profile-john-baptist",
      "name": "John the Baptist",
      "nameMeaning": "Hebrew/Greek: יוֹחָנָן / Ioannes (\"Yahweh Has Shown Grace\")",
      "era": "Prepare the Way (~26–29 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-john-baptist",
      "quickBio": "Last and greatest Old Covenant prophet—Miraculously born to elderly Zacharias and Elizabeth. Clothed in camel’s hair beside the Jordan River, John fearlessly called Israel to turn from hypocrisy and pointed straight to Jesus: “Behold, the Lamb of God!”",
      "familyTree": {
          "parents": [
              "char-profile-zacharias-luke",
              "char-profile-elizabeth"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Judean Wilderness & Jordan River",
              "roleInLife": "Preached repentance and baptized Jesus",
              "coordinates": {
                  "lat": 31.83,
                  "lng": 35.54
              },
              "mapPinId": "loc-gilgal"
          }
      ],
      "whyTheyMatter": [
          "Bridged Malachi’s closing prophecy directly to Christ’s arrival.",
          "Modeled breathtaking humility: “He must increase, but I must decrease.”"
      ],
      "keyChapters": [
          {
              "reference": "Matthew 3:1–17",
              "label": "Voice in the Wilderness & Jesus’ Baptism",
              "storyModuleId": "story-mat-baptism",
              "chapterId": "MAT-3",
              "anchorVerseNumber": 11
          },
          {
              "reference": "John 1:29–34",
              "label": "“Behold, the Lamb of God!”",
              "storyModuleId": "story-jhn-lamb",
              "chapterId": "JHN-1",
              "anchorVerseNumber": 29
          }
      ]
  },
  'char-profile-matthew': {
      "id": "char-profile-matthew",
      "name": "Matthew (Levi)",
      "nameMeaning": "Hebrew: מַתִּתְיָהוּ / Mattityahu (\"Gift of Yahweh\")",
      "era": "Twelve Apostles (~27–60 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-matthew",
      "quickBio": "Despised Capernaum tax collector working for Rome until Jesus walked past his booth saying, “Follow me.” Matthew left everything behind at once, threw a banquet for fellow outcasts, and later penned the Gospel of Matthew.",
      "familyTree": {
          "parents": [
              "Alphaeus"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Galilee (Capernaum)",
              "roleInLife": "Rose instantly from his tax booth to follow Jesus",
              "coordinates": {
                  "lat": 32.88,
                  "lng": 35.57
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Demonstrates that no compromise or social stigma puts anyone outside Jesus’ grace.",
          "Authored the Gospel rich with Sermon on the Mount teachings and Old Testament fulfillments."
      ],
      "keyChapters": [
          {
              "reference": "Matthew 9:9–13",
              "label": "Called From the Tax Collector’s Booth",
              "storyModuleId": "story-mat-call",
              "chapterId": "MAT-9",
              "anchorVerseNumber": 9
          },
          {
              "reference": "Luke 5:27–32",
              "label": "Levi’s Banquet With Sinners",
              "storyModuleId": "story-luk-levi",
              "chapterId": "LUK-5",
              "anchorVerseNumber": 29
          }
      ]
  },
  'char-profile-john-apostle': {
      "id": "char-profile-john-apostle",
      "name": "John the Apostle",
      "nameMeaning": "Hebrew/Greek: יוֹחָנָן (\"Yahweh Is Gracious\")",
      "era": "Apostles & Revelation (~27–95 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-john-apostle",
      "quickBio": "Galilean fisherman called alongside his brother James (“Sons of Thunder”), yet remembered as “the disciple whom Jesus loved.” Present at the Transfiguration, Last Supper, and empty tomb, John later pastored Ephesus, cared for Mary, and received Revelation while exiled on Patmos.",
      "familyTree": {
          "parents": [
              "Zebedee",
              "Salome"
          ],
          "siblings": [
              "char-profile-james-zebedee"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Sea of Galilee",
              "roleInLife": "Left father Zebedee’s fishing nets to follow Jesus",
              "coordinates": {
                  "lat": 32.8,
                  "lng": 35.5
              },
              "mapPinId": "loc-galilee"
          },
          {
              "placeName": "Jerusalem",
              "roleInLife": "Trusted with caring for Jesus’ mother from the cross",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Authored the Gospel of John, three Epistles on love and light, and the Book of Revelation.",
          "Shows how Jesus transforms fiery ambition into deep, tender pastoral love."
      ],
      "keyChapters": [
          {
              "reference": "John 1:1–18",
              "label": "The Word Became Flesh",
              "storyModuleId": "story-jhn-word",
              "chapterId": "JHN-1",
              "anchorVerseNumber": 14
          },
          {
              "reference": "1 John 4:7–21",
              "label": "God Is Love & Fearless Assurance",
              "storyModuleId": "story-1jn-love",
              "chapterId": "1JN-4",
              "anchorVerseNumber": 8
          },
          {
              "reference": "Revelation 1:9–20",
              "label": "Patmos Vision of the Risen Christ",
              "storyModuleId": "story-rev-vision",
              "chapterId": "REV-1",
              "anchorVerseNumber": 17
          }
      ]
  },
  'char-profile-james-zebedee': {
      "id": "char-profile-james-zebedee",
      "name": "James, Son of Zebedee",
      "nameMeaning": "Hebrew: יַעֲקֹב / Ya’akov (\"Supplanter / Heel-Grabber\")",
      "era": "Early Apostles (~27–44 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-james-zebedee",
      "quickBio": "Older brother of John and part of Jesus’ inner three alongside Peter. Nicknamed a “Son of Thunder” for his intense zeal, James learned that true greatness means drinking Christ’s cup of servant sacrifice—becoming the first of the Twelve martyred under Herod Agrippa I.",
      "familyTree": {
          "parents": [
              "Zebedee",
              "Salome"
          ],
          "siblings": [
              "char-profile-john-apostle"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Sea of Galilee",
              "roleInLife": "Mended fishing nets beside John before answering Jesus’ call",
              "coordinates": {
                  "lat": 32.8,
                  "lng": 35.5
              },
              "mapPinId": "loc-galilee"
          },
          {
              "placeName": "Jerusalem",
              "roleInLife": "Witnessed the Transfiguration & became the first martyred apostle",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Walked with Jesus in Jairus’s home, on the Mount of Transfiguration, and in Gethsemane.",
          "Sealed his witness with unwavering courage in Acts 12:2."
      ],
      "keyChapters": [
          {
              "reference": "Mark 10:35–45",
              "label": "The Cup of Servant Greatness",
              "storyModuleId": "story-mrk-cup",
              "chapterId": "MRK-10",
              "anchorVerseNumber": 45
          },
          {
              "reference": "Acts 12:1–3",
              "label": "First Apostle Martyred in Jerusalem",
              "storyModuleId": "story-act-martyr",
              "chapterId": "ACT-12",
              "anchorVerseNumber": 2
          }
      ]
  },
  'char-profile-andrew': {
      "id": "char-profile-andrew",
      "name": "Andrew the Apostle",
      "nameMeaning": "Greek: Ἀνδρέας / Andreas (\"Manly / Courageous\")",
      "era": "Twelve Apostles (~27–60 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-andrew",
      "quickBio": "First disciple of John the Baptist to follow Jesus—and immediately ran to bring his brother Simon Peter to the Messiah. Throughout the Gospels, Andrew is quietly bringing individuals forward: the boy with five barley loaves and curious Greek seekers.",
      "familyTree": {
          "parents": [
              "Jonah (John)"
          ],
          "siblings": [
              "char-profile-peter"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Bethsaida & Capernaum (Galilee)",
              "roleInLife": "Fisherman who first introduced Simon Peter to Jesus",
              "coordinates": {
                  "lat": 32.9,
                  "lng": 35.6
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Patron pattern of personal invitation—“He first found his own brother Simon.”",
          "Noticed small ordinary resources (five loaves and two fish) that Jesus multiplied for thousands."
      ],
      "keyChapters": [
          {
              "reference": "John 1:35–42",
              "label": "Bringing Simon Peter to Jesus",
              "storyModuleId": "story-jhn-andrew",
              "chapterId": "JHN-1",
              "anchorVerseNumber": 41
          },
          {
              "reference": "John 6:5–13",
              "label": "Pointing to the Boy With Five Barley Loaves",
              "storyModuleId": "story-jhn-loaves",
              "chapterId": "JHN-6",
              "anchorVerseNumber": 8
          }
      ]
  },
  'char-profile-mary-magdalene': {
      "id": "char-profile-mary-magdalene",
      "name": "Mary Magdalene",
      "nameMeaning": "Hebrew/Aramaic: מִרְיָם מִן מַגְדָּלָא (\"Mary of Magdala\")",
      "era": "Cross & Resurrection (~28–33 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-mary-magdalene",
      "quickBio": "Set free from seven tormenting spirits by Jesus, Mary from the Galilean lakeside town of Magdala supported His ministry faithfully, watched bravely from Golgotha when others fled, and became the very first human witness to speak with the risen Christ.",
      "familyTree": {
          "parents": [
              "Magdala community"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Magdala (Sea of Galilee)",
              "roleInLife": "Delivered by Jesus and supported His traveling disciples",
              "coordinates": {
                  "lat": 32.83,
                  "lng": 35.52
              },
              "mapPinId": "loc-galilee"
          },
          {
              "placeName": "Jerusalem (Garden Tomb)",
              "roleInLife": "Heard the risen Jesus speak her name—“Mary!”",
              "coordinates": {
                  "lat": 31.78,
                  "lng": 35.23
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "First herald sent by Jesus to tell the apostles He had risen from the dead.",
          "Rebukes ancient skepticism by anchoring Easter morning testimony upon faithful women witnesses."
      ],
      "keyChapters": [
          {
              "reference": "John 20:1–18",
              "label": "First Witness at the Garden Tomb",
              "storyModuleId": "story-jhn-mary",
              "chapterId": "JHN-20",
              "anchorVerseNumber": 16
          }
      ]
  },
  'char-profile-martha': {
      "id": "char-profile-martha",
      "name": "Martha of Bethany",
      "nameMeaning": "Aramaic: מָרְתָא / Marta (\"Lady / Mistress of the House\")",
      "era": "Ministry of Jesus (~28–33 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-martha",
      "quickBio": "Generous older sister of Mary and Lazarus who opened her Bethany home as Jesus’ safe sanctuary outside Jerusalem. Though once flustered over dinner preparations, Martha later uttered one of the Gospels’ clearest confessions: “You are the Christ, the Son of God!”",
      "familyTree": {
          "parents": [],
          "siblings": [
              "char-profile-mary-bethany",
              "char-profile-lazarus-bethany"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Bethany (Near Jerusalem)",
              "roleInLife": "Welcomed Jesus warmly and witnessed Lazarus raised",
              "coordinates": {
                  "lat": 31.77,
                  "lng": 35.26
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Her confession in John 11:27 stands equal to Peter’s confession of Jesus as Messiah.",
          "Reminds busy servants that Jesus delights in our presence before our productivity."
      ],
      "keyChapters": [
          {
              "reference": "Luke 10:38–42",
              "label": "Distracted Service vs. the One Necessary Thing",
              "storyModuleId": "story-luk-martha",
              "chapterId": "LUK-10",
              "anchorVerseNumber": 41
          },
          {
              "reference": "John 11:17–27",
              "label": "“I Am the Resurrection and the Life”",
              "storyModuleId": "story-jhn-martha",
              "chapterId": "JHN-11",
              "anchorVerseNumber": 27
          }
      ]
  },
  'char-profile-mary-bethany': {
      "id": "char-profile-mary-bethany",
      "name": "Mary of Bethany",
      "nameMeaning": "Hebrew: מִרְיָם (\"Beloved\")",
      "era": "Ministry of Jesus (~28–33 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-mary-bethany",
      "quickBio": "Sister of Martha and Lazarus remembered forever in three quiet postures—always at Jesus’ feet: listening intently to His teaching, weeping honestly over Lazarus’s grave, and anointing Jesus’ feet with priceless pure nard before His burial.",
      "familyTree": {
          "parents": [],
          "siblings": [
              "char-profile-martha",
              "char-profile-lazarus-bethany"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Bethany (Mount of Olives Slope)",
              "roleInLife": "Sat at Jesus’ feet and poured out costly spikenard ointment",
              "coordinates": {
                  "lat": 31.77,
                  "lng": 35.26
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Jesus promised her loving extravagance would be remembered wherever the Gospel is told.",
          "Shows women welcomed explicitly as Scripture disciples sitting beside a rabbi."
      ],
      "keyChapters": [
          {
              "reference": "Luke 10:38–42",
              "label": "Choosing the Good Portion at Jesus’ Feet",
              "storyModuleId": "story-luk-mary-bethany",
              "chapterId": "LUK-10",
              "anchorVerseNumber": 42
          },
          {
              "reference": "John 12:1–8",
              "label": "Anointing Jesus With Pure Nard",
              "storyModuleId": "story-jhn-anoint",
              "chapterId": "JHN-12",
              "anchorVerseNumber": 3
          }
      ]
  },
  'char-profile-lazarus-bethany': {
      "id": "char-profile-lazarus-bethany",
      "name": "Lazarus of Bethany",
      "nameMeaning": "Hebrew/Greek: אֶלְעָזָר / Lazaros (\"God Has Helped\")",
      "era": "Ministry of Jesus (~28–33 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-lazarus-bethany",
      "quickBio": "Close personal friend of Jesus whose death moved Jesus to tears—and whose four-day-old tomb opened at Christ’s command, “Lazarus, come out!” His joyful resurrection dinner sparked chief priests to plot both Jesus’ and Lazarus’s deaths.",
      "familyTree": {
          "parents": [],
          "siblings": [
              "char-profile-martha",
              "char-profile-mary-bethany"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Bethany (Outside Jerusalem)",
              "roleInLife": "Walked out of a sealed tomb bound in linen cloths",
              "coordinates": {
                  "lat": 31.77,
                  "lng": 35.26
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Living sign that Jesus holds authority over death itself right before Passion Week.",
          "Provoked John 11:35 (“Jesus wept”), revealing God’s deep grief alongside hurting friends."
      ],
      "keyChapters": [
          {
              "reference": "John 11:1–44",
              "label": "“Lazarus, Come Out!”",
              "storyModuleId": "story-jhn-lazarus",
              "chapterId": "JHN-11",
              "anchorVerseNumber": 43
          }
      ]
  },
  'char-profile-nicodemus': {
      "id": "char-profile-nicodemus",
      "name": "Nicodemus",
      "nameMeaning": "Greek: Νικόδημος / Nikodemos (\"Victory of the People\")",
      "era": "Gospel of John (~27–30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-nicodemus",
      "quickBio": "Respected Pharisee and Sanhedrin council teacher who came seeking Jesus cautiously by night—hearing the timeless truth of John 3:16. Later, Nicodemus defended Jesus legally before hostile colleagues and openly brought a hundred pounds of spices to bury Him.",
      "familyTree": {
          "parents": [
              "Pharisee Council in Jerusalem"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem",
              "roleInLife": "Came by night to ask questions, then honored Jesus in death",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows genuine seekers moving gradually from timid night questions to public devotion.",
          "His midnight conversation gave Scripture “You must be born again” and John 3:16."
      ],
      "keyChapters": [
          {
              "reference": "John 3:1–16",
              "label": "Midnight Conversation on Being Born Again",
              "storyModuleId": "story-jhn-nicodemus",
              "chapterId": "JHN-3",
              "anchorVerseNumber": 3
          },
          {
              "reference": "John 19:38–42",
              "label": "Bringing Myrrh & Aloes for Jesus’ Burial",
              "storyModuleId": "story-jhn-burial",
              "chapterId": "JHN-19",
              "anchorVerseNumber": 39
          }
      ]
  },
  'char-profile-zacchaeus': {
      "id": "char-profile-zacchaeus",
      "name": "Zacchaeus",
      "nameMeaning": "Hebrew/Greek: זַכַּי / Zakchaios (\"Pure / Innocent\")",
      "era": "Journey to Jerusalem (~30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-zacchaeus",
      "quickBio": "Wealthy chief tax collector of Jericho too short to see past the crowd, so he climbed a sycamore tree—and Jesus invited Himself to dinner! Welcoming Jesus home transformed greed into instant joy: half his wealth given to the poor and fourfold restitution to anyone cheated.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jericho",
              "roleInLife": "Climbed a sycamore tree and hosted Jesus at his table",
              "coordinates": {
                  "lat": 31.87,
                  "lng": 35.44
              },
              "mapPinId": "loc-jericho"
          }
      ],
      "whyTheyMatter": [
          "Prompted Jesus’ mission statement: “The Son of Man came to seek and to save that which was lost.”",
          "Proves true repentance shows concrete restitution and glad generosity."
      ],
      "keyChapters": [
          {
              "reference": "Luke 19:1–10",
              "label": "Sycamore Tree Encounter & Restitution",
              "storyModuleId": "story-luk-zacchaeus",
              "chapterId": "LUK-19",
              "anchorVerseNumber": 10
          }
      ]
  },
  'char-profile-thomas': {
      "id": "char-profile-thomas",
      "name": "Thomas (Didymus)",
      "nameMeaning": "Aramaic/Greek: תְּאוֹמָא / Didymos (\"The Twin\")",
      "era": "Apostles (~27–60 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-thomas",
      "quickBio": "Loyal yet candid apostle who once offered to die beside Jesus in Judea (“Let us go also, that we may die with him”), asked honestly where Jesus was going, and demanded tangible nail-marks after Easter—until his encounter yielded Scripture’s highest confession: “My Lord and my God!”",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Galilee & Jerusalem",
              "roleInLife": "Touched the risen Lord’s wounds and confessed Him as God",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows Jesus patiently welcoming honest questions rather than shaming bruised faith.",
          "His question in John 14:5 elicited “I am the way, the truth, and the life.”"
      ],
      "keyChapters": [
          {
              "reference": "John 14:5–6",
              "label": "Asking the Way Home to the Father",
              "storyModuleId": "story-jhn-way",
              "chapterId": "JHN-14",
              "anchorVerseNumber": 6
          },
          {
              "reference": "John 20:24–29",
              "label": "“My Lord and My God!”",
              "storyModuleId": "story-jhn-thomas",
              "chapterId": "JHN-20",
              "anchorVerseNumber": 28
          }
      ]
  },
  'char-profile-philip-apostle': {
      "id": "char-profile-philip-apostle",
      "name": "Philip the Apostle",
      "nameMeaning": "Greek: Φίλιππος / Philippos (\"Lover of Horses\")",
      "era": "Twelve Apostles (~27–60 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-philip-apostle",
      "quickBio": "From Bethsaida, hometown of Peter and Andrew. When Nathanael scoffed at Nazareth, Philip didn’t argue—he gently replied, “Come and see.” Practical and earnest, Philip helped Greek pilgrims meet Jesus and asked Him, “Show us the Father.”",
      "familyTree": {
          "parents": [
              "Bethsaida family"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Bethsaida (Sea of Galilee)",
              "roleInLife": "Quickly invited skeptical friend Nathanael to meet Jesus",
              "coordinates": {
                  "lat": 32.9,
                  "lng": 35.6
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Coins one of the simplest, wisest ways to witness: “Come and see.”",
          "Prompted Jesus’ great revelation: “He who has seen me has seen the Father.”"
      ],
      "keyChapters": [
          {
              "reference": "John 1:43–46",
              "label": "“Come and See” Invitation to Nathanael",
              "storyModuleId": "story-jhn-philip",
              "chapterId": "JHN-1",
              "anchorVerseNumber": 46
          },
          {
              "reference": "John 14:8–11",
              "label": "“Lord, Show Us the Father”",
              "storyModuleId": "story-jhn-father",
              "chapterId": "JHN-14",
              "anchorVerseNumber": 9
          }
      ]
  },
  'char-profile-nathanael': {
      "id": "char-profile-nathanael",
      "name": "Nathanael (Bartholomew)",
      "nameMeaning": "Hebrew: נְתַנְאֵל (\"God Has Given\")",
      "era": "Twelve Apostles (~27–60 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-nathanael",
      "quickBio": "Cana-born Israelite famous for unfiltered honesty—“Can anything good come out of Nazareth?”—whom Jesus praised on sight as “an Israelite indeed, in whom there is no deceit,” because Jesus already saw him meditating beneath his fig tree.",
      "familyTree": {
          "parents": [
              "Tolmai (Bartholomew)"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Cana in Galilee",
              "roleInLife": "Meditated under a fig tree before being recognized by Jesus",
              "coordinates": {
                  "lat": 32.74,
                  "lng": 35.34
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Teaches that God notices secret private devotion long before anyone else speaks our name."
      ],
      "keyChapters": [
          {
              "reference": "John 1:45–51",
              "label": "Seen Under the Fig Tree",
              "storyModuleId": "story-jhn-nathanael",
              "chapterId": "JHN-1",
              "anchorVerseNumber": 47
          }
      ]
  },
  'char-profile-judas-iscariot': {
      "id": "char-profile-judas-iscariot",
      "name": "Judas Iscariot",
      "nameMeaning": "Hebrew: יְהוּדָה אִישׁ־קְרִיּוֹת (\"Praise · Man of Kerioth\")",
      "era": "Twelve Apostles & Betrayal (~27–30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-judas-iscariot",
      "quickBio": "One of the Twelve entrusted with the group’s money bag who quietly nurtured secret greed—eventually selling Jesus to the chief priests for thirty silver coins and identifying Him in Gethsemane with a kiss.",
      "familyTree": {
          "parents": [
              "Simon Iscariot"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Gethsemane",
              "roleInLife": "Betrayed Jesus for thirty pieces of silver",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Sobering warning that closeness to holy ministry cannot cure an unconfessed, guarded heart.",
          "Even his betrayal turned by God’s sovereignty to accomplish our redemption."
      ],
      "keyChapters": [
          {
              "reference": "Matthew 26:14–50",
              "label": "Thirty Silver Coins & a Betrayer’s Kiss",
              "storyModuleId": "story-mat-betrayal",
              "chapterId": "MAT-26",
              "anchorVerseNumber": 49
          }
      ]
  },
  'char-profile-luke': {
      "id": "char-profile-luke",
      "name": "Luke the Physician",
      "nameMeaning": "Greek: Λουκᾶς / Loukas (\"Light-Giving\" · from Lucanus)",
      "era": "Apostolic Era (~45–67 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-luke",
      "quickBio": "Beloved Gentile doctor, careful historian, and steadfast friend of Paul through shipwrecks and Roman imprisonment. Through tireless eyewitness interviews, Luke authored over a quarter of the New Testament—both the Gospel of Luke and the Book of Acts.",
      "familyTree": {
          "parents": [
              "Gentile family (Antioch tradition)"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Judea",
              "roleInLife": "Interviewed Mary and early eyewitnesses carefully",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Only Gentile New Testament writer, highlighting Jesus’ heart for outsiders, women, and the poor.",
          "Stayed with Paul right to the final chapter of 2 Timothy: “Only Luke is with me.”"
      ],
      "keyChapters": [
          {
              "reference": "Luke 1:1–4",
              "label": "Orderly Eyewitness Investigation for Theophilus",
              "storyModuleId": "story-luk-prologue",
              "chapterId": "LUK-1",
              "anchorVerseNumber": 3
          },
          {
              "reference": "Acts 16:10–17",
              "label": "“We” Travelled Into Europe With Paul",
              "storyModuleId": "story-act-philippi",
              "chapterId": "ACT-16",
              "anchorVerseNumber": 10
          }
      ]
  },
  'char-profile-mark': {
      "id": "char-profile-mark",
      "name": "John Mark",
      "nameMeaning": "Hebrew/Latin: יוֹחָנָן מַרְקוֹס (\"Yahweh Has Shown Grace · Hammer\")",
      "era": "Early Church (~30–65 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-mark",
      "quickBio": "Young Jerusalem believer whose home hosted the praying church when Peter walked out of prison. Though Mark deserted Paul’s first missionary trip and caused a painful split with Barnabas, his cousin Barnabas mentored him back to strength until Paul himself wrote: “Get Mark… he is very useful to me!”",
      "familyTree": {
          "parents": [
              "Mary of Jerusalem"
          ],
          "siblings": [],
          "children": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem",
              "roleInLife": "Family upper room sheltered early praying believers",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Living proof of second chances—failing early in ministry didn’t write his final chapter.",
          "Wrote the fast-paced Gospel of Mark largely preserving Simon Peter’s vivid eyewitness voice."
      ],
      "keyChapters": [
          {
              "reference": "Acts 12:12–17",
              "label": "Jerusalem Home Hosting the Praying Church",
              "storyModuleId": "story-act-rhoda",
              "chapterId": "ACT-12",
              "anchorVerseNumber": 12
          },
          {
              "reference": "2 Timothy 4:11",
              "label": "Restored & “Useful for Ministry”",
              "storyModuleId": "story-2ti-mark",
              "chapterId": "2TI-4",
              "anchorVerseNumber": 11
          }
      ]
  },
  'char-profile-barnabas': {
      "id": "char-profile-barnabas",
      "name": "Barnabas",
      "nameMeaning": "Aramaic: בַּר־נְבִיאָא (\"Son of Encouragement / Exhortation\")",
      "era": "Early Church (~30–55 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-barnabas",
      "quickBio": "Nicknamed Joseph of Cyprus, a generous Levite who sold his field to aid hungry Jerusalem saints. When terrified Christians feared former persecutor Saul, Barnabas vouched for him, mentored him in Antioch, and later stood patiently beside young John Mark after his failure.",
      "familyTree": {
          "parents": [
              "Levite family on Cyprus"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem",
              "roleInLife": "Sold land to support needy saints and championed newly converted Saul",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Built bridges between suspicious leaders and redeemed outsiders like Saul and John Mark."
      ],
      "keyChapters": [
          {
              "reference": "Acts 4:36–37",
              "label": "Named “Son of Encouragement”",
              "storyModuleId": "story-act-barnabas",
              "chapterId": "ACT-4",
              "anchorVerseNumber": 36
          },
          {
              "reference": "Acts 11:22–26",
              "label": "Nurturing Antioch’s First “Christians”",
              "storyModuleId": "story-act-antioch",
              "chapterId": "ACT-11",
              "anchorVerseNumber": 24
          }
      ]
  },
  'char-profile-stephen': {
      "id": "char-profile-stephen",
      "name": "Stephen (First Martyr)",
      "nameMeaning": "Greek: Στέφανος / Stephanos (\"Crown / Wreath\")",
      "era": "Early Church (~33–34 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-stephen",
      "quickBio": "Greek-speaking Jewish believer chosen among the Seven to care fairly for neglected widows. Full of grace, Spirit, and wisdom, Stephen traced Israel’s entire story before the Sanhedrin, saw Jesus standing at God’s right hand, and forgave his killers with his dying breath as young Saul watched.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem",
              "roleInLife": "Served widows daily and sealed the Gospel with forgiving courage",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "His Christ-like prayer of forgiveness planted a seed inside watching Saul of Tarsus.",
          "Shows that humble table-service and fearless prophetic truth belong together."
      ],
      "keyChapters": [
          {
              "reference": "Acts 7:51–60",
              "label": "Vision of Jesus Standing & Final Prayer",
              "storyModuleId": "story-act-stephen",
              "chapterId": "ACT-7",
              "anchorVerseNumber": 55
          }
      ]
  },
  'char-profile-philip-evangelist': {
      "id": "char-profile-philip-evangelist",
      "name": "Philip the Evangelist",
      "nameMeaning": "Greek: Φίλιππος / Philippos (\"Friend of Horses\")",
      "era": "Acts & Judea (~33–58 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-philip-evangelist",
      "quickBio": "One of the original Seven deacons who fled Jerusalem’s persecution into Samaria—breaking bitter ethnic walls to preach Christ with joy. Later, an angel guided him onto a desert road to explain Isaiah 53 and baptize an Ethiopian royal treasurer.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "children": [
              "Four prophesying daughters"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Samaria & Caesarea",
              "roleInLife": "Preached Christ across Samaria and opened his home to Paul years later",
              "coordinates": {
                  "lat": 32.27,
                  "lng": 35.19
              },
              "mapPinId": "loc-samaria"
          }
      ],
      "whyTheyMatter": [
          "Carried the Good News cross-culturally first to despised Samaritans, then to Africa via Ethiopia."
      ],
      "keyChapters": [
          {
              "reference": "Acts 8:4–40",
              "label": "Revival in Samaria & Chariot on the Gaza Road",
              "storyModuleId": "story-act-ethiopian",
              "chapterId": "ACT-8",
              "anchorVerseNumber": 35
          }
      ]
  },
  'char-profile-timothy': {
      "id": "char-profile-timothy",
      "name": "Timothy",
      "nameMeaning": "Greek: Τιμόθεος / Timotheos (\"Honoring God\")",
      "era": "Early Churches (~48–67 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-timothy",
      "quickBio": "Raised in Lystra on Scripture by his Jewish mother Eunice and grandmother Lois, young Timothy joined Paul as a lifelong spiritual son. Though naturally timid and prone to stomach illness, he faithfully pastored troubled Ephesus and received Paul’s two heartfelt pastoral letters.",
      "familyTree": {
          "parents": [
              "char-profile-lois-eunice",
              "Greek father"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Missions Network",
              "roleInLife": "Trained under Paul to guard sound truth and gentle leadership",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows God strengthens quiet, anxious younger believers to lead maturely: “Let no one despise your youth.”"
      ],
      "keyChapters": [
          {
              "reference": "1 Timothy 4:12–16",
              "label": "Leading by Example in Speech, Love & Faith",
              "storyModuleId": "story-1ti-example",
              "chapterId": "1TI-4",
              "anchorVerseNumber": 12
          },
          {
              "reference": "2 Timothy 3:14–17",
              "label": "Scripture Known Since Infancy",
              "storyModuleId": "story-2ti-scripture",
              "chapterId": "2TI-3",
              "anchorVerseNumber": 16
          }
      ]
  },
  'char-profile-titus': {
      "id": "char-profile-titus",
      "name": "Titus",
      "nameMeaning": "Latin: Titus (\"Honorable / Saved\")",
      "era": "Apostolic Era (~48–66 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-titus",
      "quickBio": "Trusted Gentile companion of Paul who became the apostle’s steady peacemaker in tough assignments: reconciling estranged Corinth through tears and organizing young churches across wild, fractured Crete.",
      "familyTree": {
          "parents": [
              "Gentile parents"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Mediterranean Churches",
              "roleInLife": "Stood as living proof of uncircumcised Gentile grace",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Proved in Galatians 2 that Gentile Christians belong fully to God’s family without legalistic badges."
      ],
      "keyChapters": [
          {
              "reference": "Titus 2:1–15",
              "label": "Teaching Healthy Goodness & Blessed Hope",
              "storyModuleId": "story-tit-grace",
              "chapterId": "TIT-2",
              "anchorVerseNumber": 11
          }
      ]
  },
  'char-profile-silas': {
      "id": "char-profile-silas",
      "name": "Silas (Silvanus)",
      "nameMeaning": "Aramaic/Latin: שִׁילָא / Silvanus (\"Of the Woods\" / \"Asked\")",
      "era": "Early Church (~49–65 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-silas",
      "quickBio": "Respected Jerusalem prophet chosen to carry the Jerusalem Council’s unifying letter, who later partnered with Paul across Europe. At midnight in a bruised, chained Philippi prison cell, Silas sang hymns aloud alongside Paul right before the earthquake.",
      "familyTree": {
          "parents": [
              "Roman-Jewish background"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem",
              "roleInLife": "Trusted prophet sent with the Council’s peace letter",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Later served as Peter’s faithful scribe in 1 Peter 5:12—bridging both Jerusalem and Pauline wings."
      ],
      "keyChapters": [
          {
              "reference": "Acts 16:22–34",
              "label": "Singing Hymns at Midnight in Philippi Stocks",
              "storyModuleId": "story-act-midnight",
              "chapterId": "ACT-16",
              "anchorVerseNumber": 25
          }
      ]
  },
  'char-profile-james-jerusalem': {
      "id": "char-profile-james-jerusalem",
      "name": "James of Jerusalem",
      "nameMeaning": "Hebrew: יַעֲקֹב (\"May He Protect / Supplanter\")",
      "era": "Jerusalem Church (~30–62 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-james-jerusalem",
      "quickBio": "Younger half-brother of Jesus who initially doubted His ministry—until the risen Jesus appeared to him privately (1 Cor 15:7). Converted deeply, James became the steady prayerful pillar of Jerusalem’s church and wrote the vivid, practical Letter of James.",
      "familyTree": {
          "parents": [
              "char-profile-joseph-nazareth",
              "char-profile-mary-jesus"
          ],
          "siblings": [
              "char-profile-jesus",
              "char-profile-jude"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galilee (Nazareth)",
              "roleInLife": "Grew up under Joseph and Mary’s roof",
              "coordinates": {
                  "lat": 32.7,
                  "lng": 35.3
              },
              "mapPinId": "loc-galilee"
          },
          {
              "placeName": "Jerusalem",
              "roleInLife": "Guided the Acts 15 Council to welcome Gentiles without legal burdens",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Authored the Book of James: showing genuine faith always breathes through mercy, controlled tongues, and active love."
      ],
      "keyChapters": [
          {
              "reference": "Acts 15:13–21",
              "label": "Wisdom at the Jerusalem Council",
              "storyModuleId": "story-act-council",
              "chapterId": "ACT-15",
              "anchorVerseNumber": 19
          },
          {
              "reference": "James 1:2–27",
              "label": "Joy in Trials & Pure Religion",
              "storyModuleId": "story-jas-wisdom",
              "chapterId": "JAS-1",
              "anchorVerseNumber": 27
          }
      ]
  },
  'char-profile-jude': {
      "id": "char-profile-jude",
      "name": "Jude (Brother of Jesus)",
      "nameMeaning": "Hebrew: יְהוּדָה / Yehudah (\"Praise\")",
      "era": "Early Church (~30–80 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-jude",
      "quickBio": "Humble younger half-brother of Jesus and James who introduced himself simply as “a servant of Jesus Christ, and brother of James.” His fiery, compassionate letter urges churches to guard sacred truth while snatching doubters with mercy—closing in one of Scripture’s grandest doxologies.",
      "familyTree": {
          "parents": [
              "char-profile-joseph-nazareth",
              "char-profile-mary-jesus"
          ],
          "siblings": [
              "char-profile-jesus",
              "char-profile-james-jerusalem"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galilee & Judea",
              "roleInLife": "Came to worship his brother Jesus after the resurrection",
              "coordinates": {
                  "lat": 32.7,
                  "lng": 35.3
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Wrote Jude 24–25: “To him who is able to keep you from stumbling, and to present you faultless…”"
      ],
      "keyChapters": [
          {
              "reference": "Jude 1:1–25",
              "label": "Contending With Mercy & Glorious Doxology",
              "storyModuleId": "story-jud-doxology",
              "chapterId": "JUD-1",
              "anchorVerseNumber": 24
          }
      ]
  },
  'char-profile-cornelius': {
      "id": "char-profile-cornelius",
      "name": "Cornelius the Centurion",
      "nameMeaning": "Latin: Cornelius (\"Horn / Strong-Willed\")",
      "era": "Early Church (~40 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-cornelius",
      "quickBio": "Generous, God-fearing Roman army centurion stationed in Caesarea whose prayers and gifts to the poor rose before God. Sent to summon Simon Peter, Cornelius’s household received the Holy Spirit directly—shattering ethnic walls forever for Gentile believers.",
      "familyTree": {
          "parents": [
              "Roman Italian Regiment"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Judea / Samaria Coast",
              "roleInLife": "First Gentile household baptized in the Holy Spirit",
              "coordinates": {
                  "lat": 32.5,
                  "lng": 34.89
              },
              "mapPinId": "loc-samaria"
          }
      ],
      "whyTheyMatter": [
          "Marked the decisive turning point in Acts 10 proving God welcomes every nation without partiality."
      ],
      "keyChapters": [
          {
              "reference": "Acts 10:1–48",
              "label": "Gentile Pentecost in Cornelius’s House",
              "storyModuleId": "story-act-cornelius",
              "chapterId": "ACT-10",
              "anchorVerseNumber": 34
          }
      ]
  },
  'char-profile-lydia': {
      "id": "char-profile-lydia",
      "name": "Lydia of Thyatira",
      "nameMeaning": "Greek: Λυδία (\"Woman of Lydia Region\")",
      "era": "Missionary Journeys (~50 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-lydia",
      "quickBio": "Independent businesswomen trading luxury purple cloth in Philippi. Praying beside a riverbank on the Sabbath, “the Lord opened her heart to listen to what was spoken by Paul”—making Lydia the first recorded Christian convert in Europe and generous host of Philippi’s church.",
      "familyTree": {
          "parents": [
              "Thyatira merchant household"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Mediterranean Churches",
              "roleInLife": "Opened her Philippi home to house Europe’s first Christian congregation",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Demonstrates the crucial financial and hospitality partnership of women in building early churches."
      ],
      "keyChapters": [
          {
              "reference": "Acts 16:11–15",
              "label": "The Lord Opened Her Heart Beside the River",
              "storyModuleId": "story-act-lydia",
              "chapterId": "ACT-16",
              "anchorVerseNumber": 14
          }
      ]
  },
  'char-profile-priscilla-aquila': {
      "id": "char-profile-priscilla-aquila",
      "name": "Priscilla & Aquila",
      "nameMeaning": "Latin: Priscilla (\"Ancient/Venerable\") · Aquila (\"Eagle\")",
      "era": "Early Churches (~49–65 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-priscilla-aquila",
      "quickBio": "Jewish-Christian tentmakers exiled from Rome under Claudius who opened their workshop to Paul in Corinth. This devoted couple later gently invited eloquent Apollos aside to clarify Christ’s Gospel completely and hosted churches in both Ephesus and Rome—risking their own necks for Paul.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "spouse": [
              "Married Ministry Partners"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Mediterranean Churches",
              "roleInLife": "Hosted house churches and stitched tents beside Paul",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Scripture’s premier picture of husband-and-wife hospitality, mentoring, and everyday marketplace ministry."
      ],
      "keyChapters": [
          {
              "reference": "Acts 18:1–26",
              "label": "Tentmaking & Explaining God’s Way More Accurately",
              "storyModuleId": "story-act-priscilla",
              "chapterId": "ACT-18",
              "anchorVerseNumber": 26
          }
      ]
  },
  'char-profile-apollos': {
      "id": "char-profile-apollos",
      "name": "Apollos",
      "nameMeaning": "Greek: Ἀπολλώς (\"Given by Apollo\")",
      "era": "Early Churches (~52–60 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-apollos",
      "quickBio": "Eloquence, Scripture mastery, and fiery spirit defined this Alexandrian Jew—yet he knew only John’s baptism until Priscilla and Aquila gently taught him fuller truth. Humble enough to learn from tentmakers, Apollos became a mighty waterer of Paul’s gospel seeds in Corinth.",
      "familyTree": {
          "parents": [
              "Alexandria Jewish community"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Mediterranean Churches",
              "roleInLife": "Proved from Hebrew Scriptures that Jesus is the Messiah",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Reminds gifted teachers that teachability keeps brilliant eloquence humble and fruitful."
      ],
      "keyChapters": [
          {
              "reference": "Acts 18:24–28",
              "label": "Mighty in the Scriptures & Teachable Heart",
              "storyModuleId": "story-act-apollos",
              "chapterId": "ACT-18",
              "anchorVerseNumber": 24
          },
          {
              "reference": "1 Corinthians 3:5–9",
              "label": "“I Planted, Apollos Watered, God Gave Growth”",
              "storyModuleId": "story-1co-watered",
              "chapterId": "1CO-3",
              "anchorVerseNumber": 6
          }
      ]
  },
  'char-profile-phoebe': {
      "id": "char-profile-phoebe",
      "name": "Phoebe of Cenchreae",
      "nameMeaning": "Greek: Φοίβη / Phoibe (\"Bright / Radiant\")",
      "era": "Early Church (~57 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-phoebe",
      "quickBio": "Respected deacon (diakonos) and generous patron (prostatis) of the port church in Cenchreae near Corinth. Paul entrusted the monumental Letter to the Romans into Phoebe’s personal hands to carry, deliver, and explain before Rome’s congregations.",
      "familyTree": {
          "parents": [
              "Cenchreae church family"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Mediterranean Churches",
              "roleInLife": "Trusted courier who delivered Paul’s Epistle to the Romans",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Protected and delivered the book of Romans to the capital of the Roman Empire."
      ],
      "keyChapters": [
          {
              "reference": "Romans 16:1–2",
              "label": "Commended Helper & Trusted Messenger of Romans",
              "storyModuleId": "story-rom-phoebe",
              "chapterId": "ROM-16",
              "anchorVerseNumber": 1
          }
      ]
  },
  'char-profile-dorcas': {
      "id": "char-profile-dorcas",
      "name": "Dorcas (Tabitha)",
      "nameMeaning": "Aramaic/Greek: טְבִיתָא / Δορκάς (\"Gazelle\")",
      "era": "Early Church (~36–40 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-dorcas",
      "quickBio": "Beloved Christian woman of Joppa described simply as “always doing good and helping the poor.” When illness took her life, weeping widows showed Simon Peter the warm tunics and cloaks she had stitched for them—and God answered Peter’s prayer by raising her alive.",
      "familyTree": {
          "parents": [
              "Joppa believers"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Judean Coast (Joppa)",
              "roleInLife": "Clothed poor widows with quiet handmade kindness",
              "coordinates": {
                  "lat": 32.05,
                  "lng": 34.75
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows how needle-and-thread everyday mercy leaves an irreplaceable legacy in God’s church."
      ],
      "keyChapters": [
          {
              "reference": "Acts 9:36–42",
              "label": "Weeping Widows, Handmade Coats & Raised Alive",
              "storyModuleId": "story-act-dorcas",
              "chapterId": "ACT-9",
              "anchorVerseNumber": 36
          }
      ]
  },
  'char-profile-onesimus': {
      "id": "char-profile-onesimus",
      "name": "Onesimus",
      "nameMeaning": "Greek: Ὀνήσιμος / Onesimos (\"Useful / Profitable\")",
      "era": "Paul’s Roman Imprisonment (~61 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-onesimus",
      "quickBio": "An enslaved man who fled his master Philemon in Colossae and encountered the imprisoned Apostle Paul—who led him to faith in Christ. Paul then wrote Philemon’s tender letter, sending Onesimus home no longer merely as property, but “as a beloved brother.”",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Mediterranean Churches",
              "roleInLife": "Reconciled with Philemon through Paul’s personal plea",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Inspired an entire New Testament book transforming social hierarchy from the inside out."
      ],
      "keyChapters": [
          {
              "reference": "Philemon 1:8–21",
              "label": "Welcome Him Back as a Beloved Brother",
              "storyModuleId": "story-phm-onesimus",
              "chapterId": "PHM-1",
              "anchorVerseNumber": 16
          }
      ]
  },
  'char-profile-philemon': {
      "id": "char-profile-philemon",
      "name": "Philemon",
      "nameMeaning": "Greek: Φιλήμων (\"Affectionate / Friendly\")",
      "era": "Early Church (~61 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-philemon",
      "quickBio": "Wealthy Christian host in Colossae whose faith and love refreshed weary believers. When his runaway servant Onesimus returned carrying Paul’s letter, Philemon faced a radical gospel test: replacing ancient master’s revenge with Christian brotherhood.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "spouse": [
              "Apphia"
          ],
          "children": [
              "Archippus"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Mediterranean House Churches",
              "roleInLife": "Hosted the Colossian congregation inside his home",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Demonstrates how Gospel grace rewrites forgiveness inside ordinary households."
      ],
      "keyChapters": [
          {
              "reference": "Philemon 1:1–25",
              "label": "Paul’s Personal Appeal for Forgiveness",
              "storyModuleId": "story-phm-appeal",
              "chapterId": "PHM-1",
              "anchorVerseNumber": 17
          }
      ]
  },
  'char-profile-gamaliel': {
      "id": "char-profile-gamaliel",
      "name": "Gamaliel the Elder",
      "nameMeaning": "Hebrew: גַּמְלִיאֵל (\"God Is My Recompense\")",
      "era": "Acts (~30–50 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-gamaliel",
      "quickBio": "One of history’s most honored Pharisee doctors of the Law and Paul’s own Jerusalem mentor. When panicked Sanhedrin leaders wanted to execute the apostles, Gamaliel calmly cautioned them: “If this work is of God, you will not be able to overthrow them; lest perhaps you be found fighting against God!”",
      "familyTree": {
          "parents": [
              "House of Hillel"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem Temple Courts",
              "roleInLife": "Educated Saul of Tarsus and counseled restraint before the Sanhedrin",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Spared the infant apostles’ lives through calm legal wisdom under heated panic."
      ],
      "keyChapters": [
          {
              "reference": "Acts 5:34–40",
              "label": "Measured Counsel Before the High Council",
              "storyModuleId": "story-act-gamaliel",
              "chapterId": "ACT-5",
              "anchorVerseNumber": 38
          }
      ]
  },
  'char-profile-pilate': {
      "id": "char-profile-pilate",
      "name": "Pontius Pilate",
      "nameMeaning": "Latin: Pontius Pilatus (\"Armed With a Javelin\")",
      "era": "Crucifixion Week (~26–36 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-pilate",
      "quickBio": "Fifth Roman Prefect of Judea who interrogated Jesus during Passover week. Though Pilate declared three times—“I find no basis for a charge against him!”—and washed his hands in water, political fear over Caesar led him to condemn an innocent Messiah to crucifixion.",
      "familyTree": {
          "parents": [
              "Roman equestrian family"
          ],
          "siblings": [],
          "spouse": [
              "Claudia Procula (trad.)"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem (Praetorium)",
              "roleInLife": "Asked Jesus skeptically, “What is truth?” and handed Him over",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Repeatedly affirmed Jesus’ total innocence before delivering Him up—underscoring Christ’s spotless sacrifice."
      ],
      "keyChapters": [
          {
              "reference": "John 18:28–40",
              "label": "“My Kingdom Is Not of This World”",
              "storyModuleId": "story-jhn-pilate",
              "chapterId": "JHN-18",
              "anchorVerseNumber": 38
          },
          {
              "reference": "Matthew 27:11–26",
              "label": "Washing Hands Under Crowd Pressure",
              "storyModuleId": "story-mat-pilate",
              "chapterId": "MAT-27",
              "anchorVerseNumber": 24
          }
      ]
  },
  'char-profile-caiaphas': {
      "id": "char-profile-caiaphas",
      "name": "High Priest Caiaphas",
      "nameMeaning": "Aramaic: קַיָּפָא (\"Depression / Seeker\")",
      "era": "Gospels & Early Acts (~18–36 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-caiaphas",
      "quickBio": "Joseph Caiaphas held Israel’s highest priestly office during Jesus’ entire public ministry. Preserving Rome’s political status quo above truth, he unknowingly spoke literal prophecy—“It is better for one man to die for the people”—and led the midnight trial condemning Jesus.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "spouse": [
              "Daughter of Annas"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem Temple & Palace",
              "roleInLife": "Presided over the night Sanhedrin verdict against Jesus",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Unwittingly spoke prophetic truth about Christ’s substitutionary death while clinging to earthly power."
      ],
      "keyChapters": [
          {
              "reference": "John 11:47–53",
              "label": "Unknowing Prophecy That One Must Die",
              "storyModuleId": "story-jhn-caiaphas",
              "chapterId": "JHN-11",
              "anchorVerseNumber": 50
          },
          {
              "reference": "Matthew 26:57–68",
              "label": "Tearing Priestly Robes at Jesus’ Confession",
              "storyModuleId": "story-mat-trial",
              "chapterId": "MAT-26",
              "anchorVerseNumber": 65
          }
      ]
  },
  'char-profile-annas': {
      "id": "char-profile-annas",
      "name": "Annas (Patriarch Priest)",
      "nameMeaning": "Hebrew: חָנָן / Chanan (\"Gracious\")",
      "era": "Gospels & Acts (~6–40 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-annas",
      "quickBio": "Power-broker father-in-law of Caiaphas who controlled Jerusalem’s Temple aristocracy behind the scenes for decades. Jesus was dragged bound into Annas’s courtyard first during His arrest, and years later Annas interrogated Peter and John when the lame beggar was healed.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "children": [
              "Five high-priest sons"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem Upper City",
              "roleInLife": "First questioned Jesus after Gethsemane arrest",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows entrenched institutional power unable to silence either the cross or Peter’s bold witness."
      ],
      "keyChapters": [
          {
              "reference": "John 18:12–24",
              "label": "Midnight Interrogation Before Annas",
              "storyModuleId": "story-jhn-annas",
              "chapterId": "JHN-18",
              "anchorVerseNumber": 13
          }
      ]
  },
  'char-profile-herod-great': {
      "id": "char-profile-herod-great",
      "name": "Herod the Great",
      "nameMeaning": "Greek: Ἡρῴδης (\"Heroic / Song of the Hero\")",
      "era": "Nativity (~37–4 BC)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-herod-great",
      "quickBio": "Brutal, brilliant master-builder who reconstructed Jerusalem’s magnificent marble Temple yet grew so paranoid about his throne that he slaughtered family members—and ordered Bethlehem’s boys killed after the Magi came seeking the newborn King of the Jews.",
      "familyTree": {
          "parents": [
              "Antipater the Idumean",
              "Cypros"
          ],
          "siblings": [],
          "children": [
              "char-profile-herod-antipas",
              "Archelaus"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Bethlehem Vicinity",
              "roleInLife": "Deceived Magi and ordered the Bethlehem slaughter",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Contrasts insecure earthly tyranny against Jesus, the gentle newborn Shepherd-King."
      ],
      "keyChapters": [
          {
              "reference": "Matthew 2:1–18",
              "label": "Troubled by the Star of Bethlehem",
              "storyModuleId": "story-mat-herod",
              "chapterId": "MAT-2",
              "anchorVerseNumber": 3
          }
      ]
  },
  'char-profile-herod-antipas': {
      "id": "char-profile-herod-antipas",
      "name": "Herod Antipas",
      "nameMeaning": "Greek: Ἡρῴδης Ἀντίπας (\"Like His Father\")",
      "era": "Ministry of Jesus (~4 BC – 39 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-herod-antipas",
      "quickBio": "Tetrarch of Galilee who actually respected John the Baptist’s preaching in secret, yet executed John to save face after a reckless banquet oath—and later mocked Jesus with a robe on Good Friday morning after Jesus refused him a single entertaining miracle.",
      "familyTree": {
          "parents": [
              "char-profile-herod-great",
              "Malthace"
          ],
          "siblings": [],
          "spouse": [
              "Herodias"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galilee (Tiberias)",
              "roleInLife": "Ruled Galilee during Jesus’ ministry and executed John the Baptist",
              "coordinates": {
                  "lat": 32.79,
                  "lng": 35.53
              },
              "mapPinId": "loc-galilee"
          },
          {
              "placeName": "Jerusalem",
              "roleInLife": "Mocked silent Jesus during Passion trial",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Warns how shallow curiosity without repentance numbs a human conscience until God stays silent."
      ],
      "keyChapters": [
          {
              "reference": "Mark 6:14–29",
              "label": "Fearful Curiosity & the Death of John the Baptist",
              "storyModuleId": "story-mrk-herod",
              "chapterId": "MRK-6",
              "anchorVerseNumber": 20
          },
          {
              "reference": "Luke 23:6–12",
              "label": "Silent Before a Curious King",
              "storyModuleId": "story-luk-herod",
              "chapterId": "LUK-23",
              "anchorVerseNumber": 9
          }
      ]
  },
  'char-profile-joseph-arimathaea': {
      "id": "char-profile-joseph-arimathaea",
      "name": "Joseph of Arimathea",
      "nameMeaning": "Hebrew: יוֹסֵף (\"May He Add\")",
      "era": "Crucifixion & Burial (~30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-joseph-arimathaea",
      "quickBio": "Wealthy, righteous Sanhedrin councilman who secretly followed Jesus and quietly refused consent to the death plot. After Golgotha went dark, Joseph found sudden courage—marching straight to Pilate to claim Jesus’ body and lay Him in his own brand-new garden tomb.",
      "familyTree": {
          "parents": [
              "Arimathea estate"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem (Garden Tomb)",
              "roleInLife": "Provided a brand-new rock tomb, fulfilling Isaiah 53:9",
              "coordinates": {
                  "lat": 31.78,
                  "lng": 35.23
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Fulfilled Isaiah 53:9 (“with a rich man in his death”) through unexpected courage at the darkest hour."
      ],
      "keyChapters": [
          {
              "reference": "Mark 15:42–47",
              "label": "Finding Courage Before Pilate for Jesus’ Burial",
              "storyModuleId": "story-mrk-burial",
              "chapterId": "MRK-15",
              "anchorVerseNumber": 43
          }
      ]
  },
  'char-profile-simon-cyrene': {
      "id": "char-profile-simon-cyrene",
      "name": "Simon of Cyrene",
      "nameMeaning": "Hebrew/Greek: שִׁמְעוֹן (\"He Has Heard · From North Africa\")",
      "era": "Good Friday (~30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-simon-cyrene",
      "quickBio": "Jewish pilgrim traveling all the way from Cyrene (Libya) for Passover who stepped fresh from the countryside right as Roman soldiers forced him to lift Jesus’ heavy crossbeam up toward Golgotha. Mark notably recalls him as “the father of Alexander and Rufus”—names known inside the later Roman church!",
      "familyTree": {
          "parents": [
              "Cyrene Jewish diaspora"
          ],
          "siblings": [],
          "children": [
              "Alexander",
              "Rufus"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem (Road to Golgotha)",
              "roleInLife": "Bore the literal wooden crossbeam behind exhausted Jesus",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "An unforgettable picture of carrying Christ’s cross—and likely leading his whole family to Rome’s church (Rom 16:13)."
      ],
      "keyChapters": [
          {
              "reference": "Mark 15:21",
              "label": "Compelled to Carry Jesus’ Cross",
              "storyModuleId": "story-mrk-cyrene",
              "chapterId": "MRK-15",
              "anchorVerseNumber": 21
          }
      ]
  },
  'char-profile-zacharias-luke': {
      "id": "char-profile-zacharias-luke",
      "name": "Zacharias the Priest",
      "nameMeaning": "Hebrew: זְכַרְיָה (\"Yahweh Remembers\")",
      "era": "Nativity Prelude (~5 BC)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-zacharias-luke",
      "quickBio": "Elderly, faithful countryside priest whose turn came once in a lifetime to burn incense inside Jerusalem’s sanctuary. Struck mute for doubting Gabriel’s promise of a son in old age, Zacharias spent nine quiet months preparing—before bursting into the prophetic Benedictus praise song.",
      "familyTree": {
          "parents": [
              "Priestly division of Abijah"
          ],
          "siblings": [],
          "spouse": [
              "char-profile-elizabeth"
          ],
          "children": [
              "char-profile-john-baptist"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem Temple & Judean Hills",
              "roleInLife": "Met Angel Gabriel beside the altar of incense",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "His song in Luke 1:68–79 celebrated God’s covenant mercy “like sunrise from on high.”"
      ],
      "keyChapters": [
          {
              "reference": "Luke 1:5–25",
              "label": "Gabriel’s Visit at the Altar of Incense",
              "storyModuleId": "story-luk-zacharias",
              "chapterId": "LUK-1",
              "anchorVerseNumber": 13
          },
          {
              "reference": "Luke 1:67–79",
              "label": "The Benedictus: Sunrise From on High",
              "storyModuleId": "story-luk-benedictus",
              "chapterId": "LUK-1",
              "anchorVerseNumber": 78
          }
      ]
  },
  'char-profile-elizabeth': {
      "id": "char-profile-elizabeth",
      "name": "Elizabeth",
      "nameMeaning": "Hebrew: אֱלִישֶׁבַע (\"My God Is an Oath / My God Is Abundance\")",
      "era": "Nativity Prelude (~5 BC)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-elizabeth",
      "quickBio": "Righteous descendant of Aaron who endured decades of childlessness gracefully until God blessed her with John the Baptist. When pregnant young Mary stepped across her doorway, Elizabeth’s baby leaped and she greeted Mary with Spirit-filled honor.",
      "familyTree": {
          "parents": [
              "Daughters of Aaron"
          ],
          "siblings": [],
          "spouse": [
              "char-profile-zacharias-luke"
          ],
          "children": [
              "char-profile-john-baptist"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Hill Country of Judea",
              "roleInLife": "Encouraged young Mary during three crucial months",
              "coordinates": {
                  "lat": 31.72,
                  "lng": 35.16
              },
              "mapPinId": "loc-bethlehem"
          }
      ],
      "whyTheyMatter": [
          "First human voice to recognize unborn Jesus as Lord: “Why am I so favored that the mother of my Lord should come to me?”"
      ],
      "keyChapters": [
          {
              "reference": "Luke 1:39–45",
              "label": "Mentoring Mary in the Judean Hills",
              "storyModuleId": "story-luk-visitation",
              "chapterId": "LUK-1",
              "anchorVerseNumber": 41
          }
      ]
  },
  'char-profile-simeon-temple': {
      "id": "char-profile-simeon-temple",
      "name": "Simeon in the Temple",
      "nameMeaning": "Hebrew: שִׁמְעוֹן (\"God Has Heard\")",
      "era": "Infancy of Jesus (~4 BC)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-simeon-temple",
      "quickBio": "Righteous, devout Jerusalem elder promised by the Holy Spirit that he would not die until his eyes saw the Messiah. Guided into the Temple at the exact moment Mary and Joseph brought forty-day-old Jesus, Simeon cradled the baby and blessed God in peace.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem Temple Courts",
              "roleInLife": "Cradled infant Jesus and prophesied a light for the Gentiles",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Announced early in Luke 2 that infant Jesus would bring salvation to Gentile nations as well as Israel."
      ],
      "keyChapters": [
          {
              "reference": "Luke 2:25–35",
              "label": "“My Eyes Have Seen Your Salvation”",
              "storyModuleId": "story-luk-simeon",
              "chapterId": "LUK-2",
              "anchorVerseNumber": 30
          }
      ]
  },
  'char-profile-anna-prophetess': {
      "id": "char-profile-anna-prophetess",
      "name": "Anna the Prophetess",
      "nameMeaning": "Hebrew: חַנָּה / Channah (\"Grace / Favor\")",
      "era": "Infancy of Jesus (~4 BC)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-anna-prophetess",
      "quickBio": "Elderly prophetess of the tribe of Asher widowed after just seven years of marriage who devoted the next sixty-plus years to constant prayer and fasting inside the Temple. Stepping up at Simeon’s blessing, Anna immediately thanked God and spread word about Jesus across Jerusalem.",
      "familyTree": {
          "parents": [
              "Phanuel (Tribe of Asher)"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem Temple",
              "roleInLife": "Worshiped night and day and spread hope of redemption",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Honors lifelong quiet prayer warriors who refuse bitterness after grief and recognize God’s arrival first."
      ],
      "keyChapters": [
          {
              "reference": "Luke 2:36–38",
              "label": "Constant Prayer & Speaking of Jerusalem’s Redemption",
              "storyModuleId": "story-luk-anna",
              "chapterId": "LUK-2",
              "anchorVerseNumber": 38
          }
      ]
  },
  'char-profile-bartimaeus': {
      "id": "char-profile-bartimaeus",
      "name": "Bartimaeus",
      "nameMeaning": "Aramaic: בַּר־טִימַאי (\"Son of Timaeus\")",
      "era": "Ministry of Jesus (~30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-bartimaeus",
      "quickBio": "Blind beggar sitting beside Jericho’s dusty road who refused to be shushed by an irritated crowd—shouting even louder, “Jesus, Son of David, have mercy on me!” Throwing off his heavy beggar’s cloak before even being healed, Bartimaeus received sight and immediately followed Jesus down the road.",
      "familyTree": {
          "parents": [
              "Timaeus"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jericho Road",
              "roleInLife": "Regained physical sight and immediately followed Jesus toward Jerusalem",
              "coordinates": {
                  "lat": 31.87,
                  "lng": 35.44
              },
              "mapPinId": "loc-jericho"
          }
      ],
      "whyTheyMatter": [
          "Shows persistent faith refusing crowd discouragement and leaving old security cloaks behind for Jesus."
      ],
      "keyChapters": [
          {
              "reference": "Mark 10:46–52",
              "label": "“What Do You Want Me to Do for You?”",
              "storyModuleId": "story-mrk-bartimaeus",
              "chapterId": "MRK-10",
              "anchorVerseNumber": 51
          }
      ]
  },
  'char-profile-jairus': {
      "id": "char-profile-jairus",
      "name": "Jairus (Synagogue Ruler)",
      "nameMeaning": "Hebrew: יָאִיר / Yair (\"He Enlightens\")",
      "era": "Ministry of Jesus (~28 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-jairus",
      "quickBio": "Respected leader of Capernaum’s synagogue who laid aside all social pride to fall at Jesus’ feet begging for his dying twelve-year-old daughter. Though agonizing delays brought news that she had already died, Jesus held Jairus steady—“Don’t be afraid, only believe”—and woke his girl alive.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "children": [
              "Twelve-year-old daughter"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galilee (Capernaum)",
              "roleInLife": "Knelt openly at Jesus’ feet despite religious peer hostility",
              "coordinates": {
                  "lat": 32.88,
                  "lng": 35.57
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Speaks to desperate parents learning how faith outlasts devastating delays."
      ],
      "keyChapters": [
          {
              "reference": "Mark 5:21–43",
              "label": "“Don’t Be Afraid, Only Believe”",
              "storyModuleId": "story-mrk-jairus",
              "chapterId": "MRK-5",
              "anchorVerseNumber": 36
          }
      ]
  },
  'char-profile-ananias-damascus': {
      "id": "char-profile-ananias-damascus",
      "name": "Ananias of Damascus",
      "nameMeaning": "Hebrew: חֲנַנְיָה / Chananyah (\"Yahweh Is Gracious\")",
      "era": "Early Church (~34 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-ananias-damascus",
      "quickBio": "Ordinary, devout disciple living on Straight Street in Damascus whom God told to go pray for blind, feared persecutor Saul of Tarsus. Swallowing understandable terror, Ananias obeyed—laying gentle hands on his former enemy and calling him “Brother Saul.”",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Damascus Vicinity",
              "roleInLife": "First believer to welcome former persecutor Saul as a brother",
              "coordinates": {
                  "lat": 33.51,
                  "lng": 36.3
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Those two words—“Brother Saul”—launched one of church history’s greatest transformations."
      ],
      "keyChapters": [
          {
              "reference": "Acts 9:10–18",
              "label": "“Brother Saul, the Lord Jesus Sent Me”",
              "storyModuleId": "story-act-ananias",
              "chapterId": "ACT-9",
              "anchorVerseNumber": 17
          }
      ]
  },
  'char-profile-matthias': {
      "id": "char-profile-matthias",
      "name": "Matthias the Apostle",
      "nameMeaning": "Hebrew/Greek: מַתִּתְיָהוּ / Matthias (\"Gift of God\")",
      "era": "Early Church (~30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-matthias",
      "quickBio": "Unsung faithful disciple who walked alongside Jesus quietly from John’s baptism right up through the Ascension. Chosen by prayerful lot in the Upper Room after Judas’s betrayal, Matthias stepped willingly into the Twelve as an eyewitness of the Resurrection.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem Upper Room",
              "roleInLife": "Chosen through prayer to restore the Twelve Apostles",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Honors years of quiet, unheralded faithfulness before ever receiving a named public role."
      ],
      "keyChapters": [
          {
              "reference": "Acts 1:15–26",
              "label": "Chosen After Steadfast Faithfulness",
              "storyModuleId": "story-act-matthias",
              "chapterId": "ACT-1",
              "anchorVerseNumber": 26
          }
      ]
  },
  'char-profile-ethiopian-eunuch': {
      "id": "char-profile-ethiopian-eunuch",
      "name": "Ethiopian Royal Official",
      "nameMeaning": "Title: Court Treasurer under Candace of Meroe (Nubia/Ethiopia)",
      "era": "Early Church (~34 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-ethiopian-eunuch",
      "quickBio": "High-ranking African treasury official who traveled hundreds of miles to worship in Jerusalem and was reading Isaiah 53 aloud in his chariot heading south. Instructed by Philip, he believed immediately in Jesus, asked for water right beside the desert road, and went home rejoicing.",
      "familyTree": {
          "parents": [
              "Kingdom of Kush / Meroe court"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem to Gaza Desert Road",
              "roleInLife": "Found Christ in Isaiah 53 and carried joy back toward Africa",
              "coordinates": {
                  "lat": 31.5,
                  "lng": 34.5
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Fulfills Isaiah 56:3–5 warmly—a once-excluded eunuch and foreigner welcomed straight into Christ’s family."
      ],
      "keyChapters": [
          {
              "reference": "Acts 8:26–39",
              "label": "Isaiah 53 Chariot Bible Study & Desert Baptism",
              "storyModuleId": "story-act-chariot",
              "chapterId": "ACT-8",
              "anchorVerseNumber": 36
          }
      ]
  },
  'char-profile-epaphroditus': {
      "id": "char-profile-epaphroditus",
      "name": "Epaphroditus",
      "nameMeaning": "Greek: Ἐπαφρόδιτος (\"Lovely / Favored\")",
      "era": "Paul’s Roman Imprisonment (~61 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-epaphroditus",
      "quickBio": "Ordinary courier sent by the church in Philippi carrying financial support across land and sea to imprisoned Paul. Nearly dying from illness along the way, Epaphroditus worried more that his home church would grieve for him than about his own recovery.",
      "familyTree": {
          "parents": [
              "Philippi congregation"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Mediterranean Churches",
              "roleInLife": "Risked his life bringing Philippi’s generous gift to Paul",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Praised by Paul as “brother, coworker, and fellow soldier” for selfless behind-the-scenes sacrifice."
      ],
      "keyChapters": [
          {
              "reference": "Philippians 2:25–30",
              "label": "Risked Everything to Serve Christ’s Work",
              "storyModuleId": "story-php-epaphroditus",
              "chapterId": "PHP-2",
              "anchorVerseNumber": 25
          }
      ]
  },
  'char-profile-epaphras': {
      "id": "char-profile-epaphras",
      "name": "Epaphras of Colossae",
      "nameMeaning": "Greek: Ἐπαφρᾶς (\"Devoted / Lovely\" · short for Epaphroditus)",
      "era": "Apostolic Era (~55–62 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-epaphras",
      "quickBio": "Faithful local evangelist who brought the Gospel to his home Lycus Valley cities—Colossae, Laodicea, and Hierapolis—while Paul stayed in Ephesus. Even while sharing Paul’s distant imprisonment, Epaphras agonized daily in intercessory prayer for his hometown churches.",
      "familyTree": {
          "parents": [
              "Colossae congregation"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Asia Minor Churches",
              "roleInLife": "Planted home congregations in Colossae and wrestled in prayer",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows that hometown Christians—not only famous traveling apostles—spread most early churches."
      ],
      "keyChapters": [
          {
              "reference": "Colossians 4:12–13",
              "label": "Always Wrestling in Prayer for His Hometown",
              "storyModuleId": "story-col-epaphras",
              "chapterId": "COL-4",
              "anchorVerseNumber": 12
          }
      ]
  },
  'char-profile-tychicus': {
      "id": "char-profile-tychicus",
      "name": "Tychicus",
      "nameMeaning": "Greek: Τυχικός / Tychikos (\"Fortuitous / Helpful\")",
      "era": "Apostolic Era (~57–67 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-tychicus",
      "quickBio": "Dependable believer from Asia Minor whom Paul trusted with the weightiest deliveries of Christian history—carrying Ephesians, Colossians, and Philemon over dangerous Roman roads simply to “encourage your hearts.”",
      "familyTree": {
          "parents": [
              "Asia Province congregation"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Mediterranean Routes",
              "roleInLife": "Delivered Ephesians & Colossians and comforted anxious churches",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Unsung link keeping New Testament letters circulating safely and encouraging churches face to face."
      ],
      "keyChapters": [
          {
              "reference": "Ephesians 6:21–22",
              "label": "Beloved Brother Sent to Encourage Your Hearts",
              "storyModuleId": "story-eph-tychicus",
              "chapterId": "EPH-6",
              "anchorVerseNumber": 21
          }
      ]
  },
  'char-profile-lois-eunice': {
      "id": "char-profile-lois-eunice",
      "name": "Lois & Eunice",
      "nameMeaning": "Greek: Λωΐς (\"More Desirable\") · Εὐνίκη (\"Good Victory\")",
      "era": "Early Church (~35–65 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-lois-eunice",
      "quickBio": "Faithful grandmother and mother living in Lystra (Asia Minor) whose quiet, unhypocritical home discipleship saturated young Timothy in the Scriptures from infancy long before Paul arrived.",
      "familyTree": {
          "parents": [
              "Lois (Grandmother)"
          ],
          "siblings": [],
          "children": [
              "char-profile-timothy"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galatia / Lystra Region",
              "roleInLife": "Passed sincere multi-generational faith down to Timothy",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Honored in 2 Timothy 1:5 as living proof that loving home Scripture habits shape generations."
      ],
      "keyChapters": [
          {
              "reference": "2 Timothy 1:5",
              "label": "Sincere Faith Across Three Generations",
              "storyModuleId": "story-2ti-lois",
              "chapterId": "2TI-1",
              "anchorVerseNumber": 5
          }
      ]
  },
  'char-profile-gaius-elder': {
      "id": "char-profile-gaius-elder",
      "name": "Gaius of 3 John",
      "nameMeaning": "Latin: Gaius (\"Rejoicer\")",
      "era": "Late Apostolic Era (~90 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-gaius",
      "quickBio": "Open-hearted Christian leader deeply praised by the Apostle John in 3 John for walking steadfastly in truth and opening his home generously to traveling preachers—even while local dictator Diotrephes pushed people out.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Asia Minor Churches",
              "roleInLife": "Supported traveling missionaries generously despite local bullying",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows that quiet hospitality strengthens missionaries as a true “fellow worker for the truth.”"
      ],
      "keyChapters": [
          {
              "reference": "3 John 1:1–8",
              "label": "Warm Hospitality Over Self-Importance",
              "storyModuleId": "story-3jn-gaius",
              "chapterId": "3JN-1",
              "anchorVerseNumber": 5
          }
      ]
  },
  'char-profile-lazarus-parable': {
      "id": "char-profile-lazarus-parable",
      "name": "Lazarus the Beggar (Parable)",
      "nameMeaning": "Hebrew/Greek: אֶלְעָזָר / Lazaros (\"God Has Helped\")",
      "era": "Jesus’ Parables (~29 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-lazarus-bethany",
      "quickBio": "Only named character in any of Jesus’ parables—a starving, sore-covered beggar lying outside a nameless rich man’s locked gate, later carried by angels to Abraham’s side while cruel indifference meets eternal regret.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Judea / Galilee Teaching Setting",
              "roleInLife": "Contrasted earthly luxury against lasting compassion",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Gives dignity and a personal name to the forgotten poor right beside wealthy gates."
      ],
      "keyChapters": [
          {
              "reference": "Luke 16:19–31",
              "label": "The Rich Man and Lazarus",
              "storyModuleId": "story-luk-lazarus",
              "chapterId": "LUK-16",
              "anchorVerseNumber": 20
          }
      ]
  },
  'char-profile-cleopas': {
      "id": "char-profile-cleopas",
      "name": "Cleopas (Emmaus Road)",
      "nameMeaning": "Greek: Κλεόπας / Kleopas (\"Renowned Father\")",
      "era": "Easter Sunday (~30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-matthias",
      "quickBio": "Grief-stricken disciple walking seven miles from Jerusalem to Emmaus on Easter afternoon—unknowingly joined by the risen Jesus, who opened all the Scriptures from Moses onward until their hearts burned and bread broke open their eyes.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem to Emmaus Road",
              "roleInLife": "Recognized the risen Christ in the breaking of bread",
              "coordinates": {
                  "lat": 31.83,
                  "lng": 35.11
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Gives every searching believer Jesus’ own Old-to-New-Testament Bible overview."
      ],
      "keyChapters": [
          {
              "reference": "Luke 24:13–35",
              "label": "“Did Not Our Hearts Burn Within Us?”",
              "storyModuleId": "story-luk-emmaus",
              "chapterId": "LUK-24",
              "anchorVerseNumber": 32
          }
      ]
  },
  'char-profile-herodias': {
      "id": "char-profile-herodias",
      "name": "Herodias",
      "nameMeaning": "Greek: Ἡρῳδιάς (Herodian Princess)",
      "era": "Ministry of John the Baptist (~28 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-mary-bethany",
      "quickBio": "Ambitious granddaughter of Herod the Great who divorced her husband to marry his brother Herod Antipas—and nursed murderous hatred against John the Baptist until she trapped Antipas into ordering John’s beheading.",
      "familyTree": {
          "parents": [
              "Aristobulus IV"
          ],
          "siblings": [
              "King Herod Agrippa I"
          ],
          "spouse": [
              "char-profile-herod-antipas"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galilee & Machaerus Palace",
              "roleInLife": "Nursed bitter vengeance against John the Baptist’s truth",
              "coordinates": {
                  "lat": 32.79,
                  "lng": 35.53
              },
              "mapPinId": "loc-galilee"
          }
      ],
      "whyTheyMatter": [
          "Illustrates how unrepentant resentment against honest truth destroys everyone near it."
      ],
      "keyChapters": [
          {
              "reference": "Mark 6:17–28",
              "label": "Herod’s Banquet & Tragic Oath",
              "storyModuleId": "story-mrk-herodias",
              "chapterId": "MRK-6",
              "anchorVerseNumber": 24
          }
      ]
  },
  'char-profile-barabbas': {
      "id": "char-profile-barabbas",
      "name": "Barabbas",
      "nameMeaning": "Aramaic: בַּר־אַבָּא / Bar-Abba (\"Son of the Father\")",
      "era": "Good Friday (~30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-bartimaeus",
      "quickBio": "Notorious Jerusalem insurrectionist and murderer scheduled for Roman crucifixion on Good Friday—released by Pilate’s Passover crowd choice while innocent Jesus stepped onto the center cross literally meant for him.",
      "familyTree": {
          "parents": [],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem (Roman Custody)",
              "roleInLife": "Walked free the hour Jesus took his execution place",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Living emblem of the Gospel exchange: the guilty released because the Righteous One took his cross."
      ],
      "keyChapters": [
          {
              "reference": "Mark 15:6–15",
              "label": "A Guilty Rebel Set Free in Jesus’ Place",
              "storyModuleId": "story-mrk-barabbas",
              "chapterId": "MRK-15",
              "anchorVerseNumber": 15
          }
      ]
  },
  'char-profile-salome': {
      "id": "char-profile-salome",
      "name": "Salome of Galilee",
      "nameMeaning": "Hebrew: שְׁלוֹמִית / Shelomit (\"Peaceful\")",
      "era": "Cross & Resurrection (~28–30 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-dorcas",
      "quickBio": "Devoted Galilean disciple (widely linked with the mother of James and John) who cared for Jesus’ band from Galilee onward, stood bravely at Golgotha, and carried burial spices at dawn on Easter morning to discover the stone rolled away.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "spouse": [
              "Zebedee (trad.)"
          ],
          "children": [
              "char-profile-james-zebedee",
              "char-profile-john-apostle"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Galilee & Jerusalem Tomb",
              "roleInLife": "Carried dawn burial spices and witnessed the empty tomb",
              "coordinates": {
                  "lat": 31.78,
                  "lng": 35.23
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Remembered for steady presence when male disciples scattered in fear."
      ],
      "keyChapters": [
          {
              "reference": "Mark 16:1–8",
              "label": "Easter Dawn Spice-Bearer at the Empty Tomb",
              "storyModuleId": "story-mrk-easter",
              "chapterId": "MRK-16",
              "anchorVerseNumber": 1
          }
      ]
  },
  'char-profile-herod-agrippa': {
      "id": "char-profile-herod-agrippa",
      "name": "King Herod Agrippa I",
      "nameMeaning": "Latin/Greek: Agrippa · Grandson of Herod the Great",
      "era": "Acts Church (~41–44 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-herod-great",
      "quickBio": "Popular client-king who killed Apostle James and jailed Simon Peter to please Jerusalem crowds—only for an angel to unlock Peter’s chains overnight, before Agrippa perished in Caesarea after accepting idolatrous worship as a god.",
      "familyTree": {
          "parents": [
              "Aristobulus IV"
          ],
          "siblings": [
              "char-profile-herodias"
          ],
          "children": [
              "char-profile-agrippa"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem & Caesarea",
              "roleInLife": "Persecuted the early church briefly before sudden downfall",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Acts 12 closes cleanly: proud persecution fell while “the word of God grew and multiplied.”"
      ],
      "keyChapters": [
          {
              "reference": "Acts 12:1–24",
              "label": "Peter’s Prison Break & God’s Unstoppable Word",
              "storyModuleId": "story-act-agrippa1",
              "chapterId": "ACT-12",
              "anchorVerseNumber": 24
          }
      ]
  },
  'char-profile-felix': {
      "id": "char-profile-felix",
      "name": "Governor Felix",
      "nameMeaning": "Latin: Antonius Felix (\"Happy / Fortunate\")",
      "era": "Acts Trials (~52–59 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-herod-antipas",
      "quickBio": "Corrupt Roman procurator of Judea who trembled under Paul’s private preaching about righteousness, self-control, and coming judgment—yet kept delaying faith while secretly hoping Paul would offer him a bribe.",
      "familyTree": {
          "parents": [
              "Roman imperial freedman family"
          ],
          "siblings": [],
          "spouse": [
              "Drusilla"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Caesarea Coastal Court",
              "roleInLife": "Kept Paul chained two years hoping for a bribe",
              "coordinates": {
                  "lat": 32.5,
                  "lng": 34.89
              },
              "mapPinId": "loc-samaria"
          }
      ],
      "whyTheyMatter": [
          "Warned history against putting off truth with “When I have a convenient time, I will call for you.”"
      ],
      "keyChapters": [
          {
              "reference": "Acts 24:22–27",
              "label": "Trembling Yet Procrastinating Truth",
              "storyModuleId": "story-act-felix",
              "chapterId": "ACT-24",
              "anchorVerseNumber": 25
          }
      ]
  },
  'char-profile-festus': {
      "id": "char-profile-festus",
      "name": "Porcius Festus",
      "nameMeaning": "Latin: Porcius Festus (\"Festive\")",
      "era": "Acts Trials (~59–62 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-pilate",
      "quickBio": "More principled Roman governor replacing Felix who refused Jerusalem ambushes against Paul, heard Paul’s appeal to Caesar (“To Caesar you have appealed—to Caesar you shall go!”), and hosted King Agrippa II to hear the Gospel.",
      "familyTree": {
          "parents": [
              "Roman equestrian order"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Caesarea Maritima",
              "roleInLife": "Granted Paul’s historic legal appeal to imperial Rome",
              "coordinates": {
                  "lat": 32.5,
                  "lng": 34.89
              },
              "mapPinId": "loc-samaria"
          }
      ],
      "whyTheyMatter": [
          "Providentially routed Paul under Roman protection straight toward Rome, as Jesus promised."
      ],
      "keyChapters": [
          {
              "reference": "Acts 25:6–12",
              "label": "“To Caesar You Shall Go!”",
              "storyModuleId": "story-act-festus",
              "chapterId": "ACT-25",
              "anchorVerseNumber": 12
          }
      ]
  },
  'char-profile-agrippa': {
      "id": "char-profile-agrippa",
      "name": "King Herod Agrippa II",
      "nameMeaning": "Greek/Latin: Ἀγρίππας (Last Herodian Monarch)",
      "era": "Acts Trials (~50–93 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-herod-great",
      "quickBio": "Well-read Jewish-Roman ruler summoned by Festus to hear Paul’s defense in Caesarea. Knowing Hebrew prophecies intimately, Agrippa famously interrupted Paul: “In a short time would you persuade me to become a Christian?”",
      "familyTree": {
          "parents": [
              "char-profile-herod-agrippa"
          ],
          "siblings": [
              "Bernice",
              "Drusilla"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Caesarea Audience Hall",
              "roleInLife": "Heard Paul’s clearest personal testimony before chains",
              "coordinates": {
                  "lat": 32.5,
                  "lng": 34.89
              },
              "mapPinId": "loc-samaria"
          }
      ],
      "whyTheyMatter": [
          "Received Acts 26’s gripping prayer: that every listener might know Christ’s freedom—minus chains!"
      ],
      "keyChapters": [
          {
              "reference": "Acts 26:1–32",
              "label": "“In a Short Time Persuade Me to Be a Christian?”",
              "storyModuleId": "story-act-agrippa2",
              "chapterId": "ACT-26",
              "anchorVerseNumber": 28
          }
      ]
  },
  'char-profile-ananias-sapphira': {
      "id": "char-profile-ananias-sapphira",
      "name": "Ananias & Sapphira",
      "nameMeaning": "Hebrew/Aramaic: חֲנַנְיָה (\"God Is Gracious\") · שַׁפִּירָא (\"Beautiful\")",
      "era": "Early Jerusalem Church (~32 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-priscilla-aquila",
      "quickBio": "Married Jerusalem church members who sold property but staged a theatrical lie—secretly keeping back money while pretending full sacrifice to buy spiritual applause. Peter’s warning uncovered their deceit, teaching the young church sacred honesty.",
      "familyTree": {
          "parents": [],
          "siblings": [],
          "spouse": [
              "Married Couple"
          ]
      },
      "locationsLived": [
          {
              "placeName": "Jerusalem",
              "roleInLife": "Sobered the newborn church against performative hypocrisy",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows God fiercely protects early community sincerity against image-polishing lies."
      ],
      "keyChapters": [
          {
              "reference": "Acts 5:1–11",
              "label": "Guarding Truth Inside the Early Community",
              "storyModuleId": "story-act-ananias-sapphira",
              "chapterId": "ACT-5",
              "anchorVerseNumber": 4
          }
      ]
  },
  'char-profile-euodia-syntyche': {
      "id": "char-profile-euodia-syntyche",
      "name": "Euodia & Syntyche",
      "nameMeaning": "Greek: Εὐοδία (\"Prosperous Journey\") · Συντύχη (\"Pleasant Encounter\")",
      "era": "Early Church (~61 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-lois-eunice",
      "quickBio": "Two courageous women coworkers who had labored side by side with Paul for the Gospel in Philippi, yet fell into public disagreement. Paul urged the whole church to help them reconcile in the shared humility of Jesus Christ.",
      "familyTree": {
          "parents": [
              "Philippi congregation"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Philippi Church",
              "roleInLife": "Names recorded in the Book of Life; called to harmony",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Shows even devoted gospel coworkers need gentle church help to mend personal division."
      ],
      "keyChapters": [
          {
              "reference": "Philippians 4:2–3",
              "label": "Urged to Be of the Same Mind in the Lord",
              "storyModuleId": "story-php-unity",
              "chapterId": "PHP-4",
              "anchorVerseNumber": 2
          }
      ]
  },
  'char-profile-onesiphorus': {
      "id": "char-profile-onesiphorus",
      "name": "Onesiphorus",
      "nameMeaning": "Greek: Ὀνησιφόρος (\"Bringer of Help / Profit-Bringer\")",
      "era": "Paul’s Final Imprisonment (~66 AD)",
      "roleBadge": "New Testament",
      "portraitIllustrationId": "portrait-tychicus",
      "quickBio": "Loyal friend from Ephesus who refused shame when everyone else in Asia deserted imprisoned Paul. Traveling all the way to Rome, Onesiphorus searched tirelessly through prisons until he found Paul and refreshed his soul.",
      "familyTree": {
          "parents": [
              "Ephesus household"
          ],
          "siblings": []
      },
      "locationsLived": [
          {
              "placeName": "Ephesus & Rome",
              "roleInLife": "Tracked down chained Paul tirelessly to refresh his spirit",
              "coordinates": {
                  "lat": 31.776,
                  "lng": 35.234
              },
              "mapPinId": "loc-jerusalem"
          }
      ],
      "whyTheyMatter": [
          "Living definition of unashamed loyalty when beloved friends fall out of public favor."
      ],
      "keyChapters": [
          {
              "reference": "2 Timothy 1:16–18",
              "label": "Not Ashamed of Paul’s Chains",
              "storyModuleId": "story-2ti-onesiphorus",
              "chapterId": "2TI-1",
              "anchorVerseNumber": 16
          }
      ]
  },
};

export const CHARACTER_DIRECTORY_LIST: CharacterCard[] = [
  SEED_CHARACTERS['char-profile-adam'],
  SEED_CHARACTERS['char-profile-eve'],
  SEED_CHARACTERS['char-profile-cain'],
  SEED_CHARACTERS['char-profile-abel'],
  SEED_CHARACTERS['char-profile-seth'],
  SEED_CHARACTERS['char-profile-noah'],
  SEED_CHARACTERS['char-profile-abraham'],
  SEED_CHARACTERS['char-profile-sarah'],
  SEED_CHARACTERS['char-profile-hagar'],
  SEED_CHARACTERS['char-profile-isaac'],
  SEED_CHARACTERS['char-profile-rebekah'],
  SEED_CHARACTERS['char-profile-jacob'],
  SEED_CHARACTERS['char-profile-esau'],
  SEED_CHARACTERS['char-profile-rachel'],
  SEED_CHARACTERS['char-profile-leah'],
  SEED_CHARACTERS['char-profile-joseph'],
  SEED_CHARACTERS['char-profile-moses'],
  SEED_CHARACTERS['char-profile-aaron'],
  SEED_CHARACTERS['char-profile-miriam'],
  SEED_CHARACTERS['char-profile-jochebed'],
  SEED_CHARACTERS['char-profile-zipporah'],
  SEED_CHARACTERS['char-profile-jethro'],
  SEED_CHARACTERS['char-profile-pharaoh'],
  SEED_CHARACTERS['char-profile-joshua'],
  SEED_CHARACTERS['char-profile-hur'],
  SEED_CHARACTERS['char-profile-bezalel'],
  SEED_CHARACTERS['char-profile-eleazar'],
  SEED_CHARACTERS['char-profile-ithamar'],
  SEED_CHARACTERS['char-profile-nadab'],
  SEED_CHARACTERS['char-profile-abihu'],
  SEED_CHARACTERS['char-profile-phinehas'],
  SEED_CHARACTERS['char-profile-caleb'],
  SEED_CHARACTERS['char-profile-korah'],
  SEED_CHARACTERS['char-profile-balaam'],
  SEED_CHARACTERS['char-profile-zelophehad-daughters'],
  SEED_CHARACTERS['char-profile-rahab'],
  SEED_CHARACTERS['char-profile-deborah'],
  SEED_CHARACTERS['char-profile-gideon'],
  SEED_CHARACTERS['char-profile-samson'],
  SEED_CHARACTERS['char-profile-ruth'],
  SEED_CHARACTERS['char-profile-naomi'],
  SEED_CHARACTERS['char-profile-boaz'],
  SEED_CHARACTERS['char-profile-hannah'],
  SEED_CHARACTERS['char-profile-samuel'],
  SEED_CHARACTERS['char-profile-saul'],
  SEED_CHARACTERS['char-profile-jonathan'],
  SEED_CHARACTERS['char-profile-mephibosheth'],
  SEED_CHARACTERS['char-profile-david'],
  SEED_CHARACTERS['char-profile-abigail'],
  SEED_CHARACTERS['char-profile-nathan'],
  SEED_CHARACTERS['char-profile-solomon'],
  SEED_CHARACTERS['char-profile-rehoboam'],
  SEED_CHARACTERS['char-profile-queen-sheba'],
  SEED_CHARACTERS['char-profile-elijah'],
  SEED_CHARACTERS['char-profile-elisha'],
  SEED_CHARACTERS['char-profile-naaman'],
  SEED_CHARACTERS['char-profile-hezekiah'],
  SEED_CHARACTERS['char-profile-isaiah'],
  SEED_CHARACTERS['char-profile-josiah'],
  SEED_CHARACTERS['char-profile-job'],
  SEED_CHARACTERS['char-profile-eliphaz'],
  SEED_CHARACTERS['char-profile-bildad'],
  SEED_CHARACTERS['char-profile-zophar'],
  SEED_CHARACTERS['char-profile-elihu'],
  SEED_CHARACTERS['char-profile-asaph'],
  SEED_CHARACTERS['char-profile-heman'],
  SEED_CHARACTERS['char-profile-daniel'],
  SEED_CHARACTERS['char-profile-shadrach'],
  SEED_CHARACTERS['char-profile-meshach'],
  SEED_CHARACTERS['char-profile-abednego'],
  SEED_CHARACTERS['char-profile-nebuchadnezzar'],
  SEED_CHARACTERS['char-profile-darius'],
  SEED_CHARACTERS['char-profile-jabez'],
  SEED_CHARACTERS['char-profile-benaiah'],
  SEED_CHARACTERS['char-profile-abishai'],
  SEED_CHARACTERS['char-profile-zadok'],
  SEED_CHARACTERS['char-profile-jeduthun'],
  SEED_CHARACTERS['char-profile-asa'],
  SEED_CHARACTERS['char-profile-jehoshaphat'],
  SEED_CHARACTERS['char-profile-jehoshabeath'],
  SEED_CHARACTERS['char-profile-jehoiada'],
  SEED_CHARACTERS['char-profile-manasseh'],
  SEED_CHARACTERS['char-profile-cyrus'],
  SEED_CHARACTERS['char-profile-zerubbabel'],
  SEED_CHARACTERS['char-profile-jeshua'],
  SEED_CHARACTERS['char-profile-ezra'],
  SEED_CHARACTERS['char-profile-nehemiah'],
  SEED_CHARACTERS['char-profile-artaxerxes'],
  SEED_CHARACTERS['char-profile-esther'],
  SEED_CHARACTERS['char-profile-mordecai'],
  SEED_CHARACTERS['char-profile-ahasuerus'],
  SEED_CHARACTERS['char-profile-haman'],
  SEED_CHARACTERS['char-profile-lady-wisdom'],
  SEED_CHARACTERS['char-profile-agur'],
  SEED_CHARACTERS['char-profile-lemuel'],
  SEED_CHARACTERS['char-profile-proverbs-31-woman'],
  SEED_CHARACTERS['char-profile-qohelet'],
  SEED_CHARACTERS['char-profile-shulammite'],
  SEED_CHARACTERS['char-profile-beloved-shepherd'],
  SEED_CHARACTERS['char-profile-uzziah'],
  SEED_CHARACTERS['char-profile-ahaz'],
  SEED_CHARACTERS['char-profile-eliakim'],
  SEED_CHARACTERS['char-profile-sennacherib'],
  SEED_CHARACTERS['char-profile-jeremiah'],
  SEED_CHARACTERS['char-profile-baruch'],
  SEED_CHARACTERS['char-profile-ebed-melech'],
  SEED_CHARACTERS['char-profile-zedekiah'],
  SEED_CHARACTERS['char-profile-ezekiel'],
  SEED_CHARACTERS['char-profile-peter'],
  SEED_CHARACTERS['char-profile-jesus'],
  SEED_CHARACTERS['char-profile-paul'],
  SEED_CHARACTERS['char-profile-mary-jesus'],
  SEED_CHARACTERS['char-profile-joseph-nazareth'],
  SEED_CHARACTERS['char-profile-john-baptist'],
  SEED_CHARACTERS['char-profile-matthew'],
  SEED_CHARACTERS['char-profile-john-apostle'],
  SEED_CHARACTERS['char-profile-james-zebedee'],
  SEED_CHARACTERS['char-profile-andrew'],
  SEED_CHARACTERS['char-profile-mary-magdalene'],
  SEED_CHARACTERS['char-profile-martha'],
  SEED_CHARACTERS['char-profile-mary-bethany'],
  SEED_CHARACTERS['char-profile-lazarus-bethany'],
  SEED_CHARACTERS['char-profile-nicodemus'],
  SEED_CHARACTERS['char-profile-zacchaeus'],
  SEED_CHARACTERS['char-profile-thomas'],
  SEED_CHARACTERS['char-profile-philip-apostle'],
  SEED_CHARACTERS['char-profile-nathanael'],
  SEED_CHARACTERS['char-profile-judas-iscariot'],
  SEED_CHARACTERS['char-profile-luke'],
  SEED_CHARACTERS['char-profile-mark'],
  SEED_CHARACTERS['char-profile-barnabas'],
  SEED_CHARACTERS['char-profile-stephen'],
  SEED_CHARACTERS['char-profile-philip-evangelist'],
  SEED_CHARACTERS['char-profile-timothy'],
  SEED_CHARACTERS['char-profile-titus'],
  SEED_CHARACTERS['char-profile-silas'],
  SEED_CHARACTERS['char-profile-james-jerusalem'],
  SEED_CHARACTERS['char-profile-jude'],
  SEED_CHARACTERS['char-profile-cornelius'],
  SEED_CHARACTERS['char-profile-lydia'],
  SEED_CHARACTERS['char-profile-priscilla-aquila'],
  SEED_CHARACTERS['char-profile-apollos'],
  SEED_CHARACTERS['char-profile-phoebe'],
  SEED_CHARACTERS['char-profile-dorcas'],
  SEED_CHARACTERS['char-profile-onesimus'],
  SEED_CHARACTERS['char-profile-philemon'],
  SEED_CHARACTERS['char-profile-gamaliel'],
  SEED_CHARACTERS['char-profile-pilate'],
  SEED_CHARACTERS['char-profile-caiaphas'],
  SEED_CHARACTERS['char-profile-annas'],
  SEED_CHARACTERS['char-profile-herod-great'],
  SEED_CHARACTERS['char-profile-herod-antipas'],
  SEED_CHARACTERS['char-profile-joseph-arimathaea'],
  SEED_CHARACTERS['char-profile-simon-cyrene'],
  SEED_CHARACTERS['char-profile-zacharias-luke'],
  SEED_CHARACTERS['char-profile-elizabeth'],
  SEED_CHARACTERS['char-profile-simeon-temple'],
  SEED_CHARACTERS['char-profile-anna-prophetess'],
  SEED_CHARACTERS['char-profile-bartimaeus'],
  SEED_CHARACTERS['char-profile-jairus'],
  SEED_CHARACTERS['char-profile-ananias-damascus'],
  SEED_CHARACTERS['char-profile-matthias'],
  SEED_CHARACTERS['char-profile-ethiopian-eunuch'],
  SEED_CHARACTERS['char-profile-epaphroditus'],
  SEED_CHARACTERS['char-profile-epaphras'],
  SEED_CHARACTERS['char-profile-tychicus'],
  SEED_CHARACTERS['char-profile-lois-eunice'],
  SEED_CHARACTERS['char-profile-gaius-elder'],
  SEED_CHARACTERS['char-profile-lazarus-parable'],
  SEED_CHARACTERS['char-profile-cleopas'],
  SEED_CHARACTERS['char-profile-herodias'],
  SEED_CHARACTERS['char-profile-barabbas'],
  SEED_CHARACTERS['char-profile-salome'],
  SEED_CHARACTERS['char-profile-herod-agrippa'],
  SEED_CHARACTERS['char-profile-felix'],
  SEED_CHARACTERS['char-profile-festus'],
  SEED_CHARACTERS['char-profile-agrippa'],
  SEED_CHARACTERS['char-profile-ananias-sapphira'],
  SEED_CHARACTERS['char-profile-euodia-syntyche'],
  SEED_CHARACTERS['char-profile-onesiphorus'],
];
