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
      siblings: ['Andrew'],
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
  SEED_CHARACTERS['char-profile-peter'],
];
