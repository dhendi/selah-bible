export type BibleBookId =
  'GEN' | 'EXO' | 'LEV' | 'NUM' | 'DEU' | 'JOS' | 'JDG' | 'RUT' | '1SA' | '2SA' | '1KI' | '2KI' | '1CH' | '2CH' | 'EZR' | 'NEH' | 'EST' | 'JOB' | 'PSA' | 'PRO' | 'ECC' | 'SNG' | 'ISA' | 'JER' | 'LAM' | 'EZK' | 'DAN' | 'HOS' | 'JOL' | 'AMO' | 'OBA' | 'JON' | 'MIC' | 'NAM' | 'HAB' | 'ZEP' | 'HAG' | 'ZEC' | 'MAL' | 'MAT' | 'MRK' | 'LUK' | 'JHN' | 'ACT' | 'ROM' | '1CO' | '2CO' | 'GAL' | 'EPH' | 'PHP' | 'COL' | '1TH' | '2TH' | '1TI' | '2TI' | 'TIT' | 'PHM' | 'HEB' | 'JAS' | '1PE' | '2PE' | '1JN' | '2JN' | '3JN' | 'JUD' | 'REV';

export type BibleTestament = 'OT' | 'NT';

export type BibleGroupId =
  'ot-law' | 'ot-history' | 'ot-poetry' | 'ot-major-prophets' | 'ot-minor-prophets' | 'nt-gospels' | 'nt-history' | 'nt-paul' | 'nt-general' | 'nt-prophecy';

export interface BookGroupMeta {
  id: BibleGroupId;
  testament: BibleTestament;
  label: string;
  fullLabel: string;
  accent: string;
  badgeBg: string;
  badgeText: string;
  bookIds: BibleBookId[];
}

export interface BookPickerMeta {
  id: BibleBookId;
  title: string;
  shortLabel: string;
  chapters: number;
  verses: string;
  testament: BibleTestament;
  groupId: BibleGroupId;
  accent: string;
  shortcutsHeading?: string;
  shortcuts?: { id: string; label: string }[];
}

export interface FeaturedPassageHighlight {
  startChapterId: string;
  prefixes: string[];
  title: string;
  badge: string;
  testament: BibleTestament;
  groupLabel: string;
  iconColor: string;
  desc: string;
}

export const BIBLE_BOOK_GROUPS: BookGroupMeta[] = [
  {
    "id": "ot-law",
    "testament": "OT",
    "label": "Law",
    "fullLabel": "The Law (Torah)",
    "accent": "#7A9A82",
    "badgeBg": "#EBF2ED",
    "badgeText": "#385541",
    "bookIds": [
      "GEN",
      "EXO",
      "LEV",
      "NUM",
      "DEU"
    ]
  },
  {
    "id": "ot-history",
    "testament": "OT",
    "label": "History",
    "fullLabel": "Historical Books",
    "accent": "#C88A6B",
    "badgeBg": "#F7EBE4",
    "badgeText": "#6A4F2C",
    "bookIds": [
      "JOS",
      "JDG",
      "RUT",
      "1SA",
      "2SA",
      "1KI",
      "2KI",
      "1CH",
      "2CH",
      "EZR",
      "NEH",
      "EST"
    ]
  },
  {
    "id": "ot-poetry",
    "testament": "OT",
    "label": "Wisdom & Poetry",
    "fullLabel": "Wisdom & Poetry",
    "accent": "#5D7CA8",
    "badgeBg": "#EBEFF7",
    "badgeText": "#354B74",
    "bookIds": [
      "JOB",
      "PSA",
      "PRO",
      "ECC",
      "SNG"
    ]
  },
  {
    "id": "ot-major-prophets",
    "testament": "OT",
    "label": "Major Prophets",
    "fullLabel": "Major Prophets",
    "accent": "#B86862",
    "badgeBg": "#F5ECEB",
    "badgeText": "#7A3F3B",
    "bookIds": [
      "ISA",
      "JER",
      "LAM",
      "EZK",
      "DAN"
    ]
  },
  {
    "id": "ot-minor-prophets",
    "testament": "OT",
    "label": "Minor Prophets",
    "fullLabel": "Minor Prophets",
    "accent": "#9F7A4D",
    "badgeBg": "#F5EFE6",
    "badgeText": "#6E502A",
    "bookIds": [
      "HOS",
      "JOL",
      "AMO",
      "OBA",
      "JON",
      "MIC",
      "NAM",
      "HAB",
      "ZEP",
      "HAG",
      "ZEC",
      "MAL"
    ]
  },
  {
    "id": "nt-gospels",
    "testament": "NT",
    "label": "Gospels",
    "fullLabel": "The Gospels",
    "accent": "#4F886B",
    "badgeBg": "#E8F3EE",
    "badgeText": "#285842",
    "bookIds": [
      "MAT",
      "MRK",
      "LUK",
      "JHN"
    ]
  },
  {
    "id": "nt-history",
    "testament": "NT",
    "label": "History",
    "fullLabel": "Early Church History",
    "accent": "#C88A6B",
    "badgeBg": "#F7EBE4",
    "badgeText": "#83472C",
    "bookIds": [
      "ACT"
    ]
  },
  {
    "id": "nt-paul",
    "testament": "NT",
    "label": "Paul's Letters",
    "fullLabel": "Paul's Letters",
    "accent": "#826BA8",
    "badgeBg": "#EFEBF5",
    "badgeText": "#553F77",
    "bookIds": [
      "ROM",
      "1CO",
      "2CO",
      "GAL",
      "EPH",
      "PHP",
      "COL",
      "1TH",
      "2TH",
      "1TI",
      "2TI",
      "TIT",
      "PHM"
    ]
  },
  {
    "id": "nt-general",
    "testament": "NT",
    "label": "General Letters",
    "fullLabel": "General Letters",
    "accent": "#5D7CA8",
    "badgeBg": "#EBEFF7",
    "badgeText": "#354B74",
    "bookIds": [
      "HEB",
      "JAS",
      "1PE",
      "2PE",
      "1JN",
      "2JN",
      "3JN",
      "JUD"
    ]
  },
  {
    "id": "nt-prophecy",
    "testament": "NT",
    "label": "Prophecy",
    "fullLabel": "Apocalyptic Prophecy",
    "accent": "#C96C42",
    "badgeBg": "#F9ECE5",
    "badgeText": "#83472C",
    "bookIds": [
      "REV"
    ]
  }
];

export const PICKER_BOOKS: BookPickerMeta[] = [
  {
    "id": "GEN",
    "title": "Genesis",
    "shortLabel": "Genesis",
    "chapters": 50,
    "verses": "1,533 Verses",
    "testament": "OT",
    "groupId": "ot-law",
    "accent": "#7A9A82",
    "shortcutsHeading": "Key Genesis Turning Points",
    "shortcuts": [
      {
        "id": "GEN-1",
        "label": "Ch 1 · Creation & Light"
      },
      {
        "id": "GEN-3",
        "label": "Ch 3 · The Fall & First Promise"
      },
      {
        "id": "GEN-9",
        "label": "Ch 9 · Noah & Rainbow Covenant"
      },
      {
        "id": "GEN-15",
        "label": "Ch 15 · Abraham & Starry Promise"
      },
      {
        "id": "GEN-22",
        "label": "Ch 22 · Mount Moriah Test"
      },
      {
        "id": "GEN-28",
        "label": "Ch 28 · Jacob’s Ladder at Bethel"
      },
      {
        "id": "GEN-50",
        "label": "Ch 50 · Joseph: \"Meant for Good\""
      }
    ]
  },
  {
    "id": "EXO",
    "title": "Exodus",
    "shortLabel": "Exodus",
    "chapters": 40,
    "verses": "1,213 Verses",
    "testament": "OT",
    "groupId": "ot-law",
    "accent": "#7A9A82",
    "shortcutsHeading": "Key Exodus Turning Points",
    "shortcuts": [
      {
        "id": "EXO-3",
        "label": "Ch 3 · The Burning Bush (\"I AM\")"
      },
      {
        "id": "EXO-12",
        "label": "Ch 12 · The First Passover"
      },
      {
        "id": "EXO-14",
        "label": "Ch 14 · Parting the Red Sea"
      },
      {
        "id": "EXO-16",
        "label": "Ch 16 · Provision of Manna"
      },
      {
        "id": "EXO-20",
        "label": "Ch 20 · Ten Commandments at Sinai"
      },
      {
        "id": "EXO-34",
        "label": "Ch 34 · God’s Compassionate Name"
      },
      {
        "id": "EXO-40",
        "label": "Ch 40 · Glory Fills the Tabernacle"
      }
    ]
  },
  {
    "id": "LEV",
    "title": "Leviticus",
    "shortLabel": "Leviticus",
    "chapters": 27,
    "verses": "859 Verses",
    "testament": "OT",
    "groupId": "ot-law",
    "accent": "#7A9A82",
    "shortcutsHeading": "Key Leviticus Turning Points",
    "shortcuts": [
      {
        "id": "LEV-1",
        "label": "Ch 1 · Drawing Near (Korban)"
      },
      {
        "id": "LEV-9",
        "label": "Ch 9 · God’s Glory & Aaron’s Blessing"
      },
      {
        "id": "LEV-16",
        "label": "Ch 16 · Day of Atonement (Yom Kippur)"
      },
      {
        "id": "LEV-19",
        "label": "Ch 19 · \"Love Your Neighbor as Yourself\""
      },
      {
        "id": "LEV-23",
        "label": "Ch 23 · The Seven Sacred Feasts"
      },
      {
        "id": "LEV-25",
        "label": "Ch 25 · The Year of Jubilee (\"Liberty!\")"
      }
    ]
  },
  {
    "id": "NUM",
    "title": "Numbers",
    "shortLabel": "Numbers",
    "chapters": 36,
    "verses": "1,288 Verses",
    "testament": "OT",
    "groupId": "ot-law",
    "accent": "#7A9A82",
    "shortcutsHeading": "Key Numbers Turning Points",
    "shortcuts": [
      {
        "id": "NUM-6",
        "label": "Ch 6 · Priestly Blessing & Nazirite Vow"
      },
      {
        "id": "NUM-13",
        "label": "Ch 13 · Twelve Spies & Caleb’s Courage"
      },
      {
        "id": "NUM-17",
        "label": "Ch 17 · Aaron’s Budding Almond Staff"
      },
      {
        "id": "NUM-21",
        "label": "Ch 21 · The Bronze Serpent"
      },
      {
        "id": "NUM-22",
        "label": "Ch 22 · Balaam & His Talking Donkey"
      },
      {
        "id": "NUM-24",
        "label": "Ch 24 · Star Out of Jacob Prophecy"
      },
      {
        "id": "NUM-27",
        "label": "Ch 27 · Daughters of Zelophehad"
      }
    ]
  },
  {
    "id": "DEU",
    "title": "Deuteronomy",
    "shortLabel": "Deuteronomy",
    "chapters": 34,
    "verses": "959 Verses",
    "testament": "OT",
    "groupId": "ot-law",
    "accent": "#7A9A82",
    "shortcutsHeading": "Key Deuteronomy Turning Points",
    "shortcuts": [
      {
        "id": "DEU-5",
        "label": "Ch 5 · The Ten Words Renewed"
      },
      {
        "id": "DEU-6",
        "label": "Ch 6 · The Shema: Love With All Your Heart"
      },
      {
        "id": "DEU-8",
        "label": "Ch 8 · Not By Bread Alone"
      },
      {
        "id": "DEU-15",
        "label": "Ch 15 · Seven-Year Debt Release & Open Hands"
      },
      {
        "id": "DEU-30",
        "label": "Ch 30 · Choose Life! Covenant Renewal"
      },
      {
        "id": "DEU-31",
        "label": "Ch 31 · Be Strong & Courageous (Joshua)"
      },
      {
        "id": "DEU-34",
        "label": "Ch 34 · Mount Nebo & Moses’s Farewell"
      }
    ]
  },
  {
    "id": "JOS",
    "title": "Joshua",
    "shortLabel": "Joshua",
    "chapters": 24,
    "verses": "658 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key Joshua Turning Points",
    "shortcuts": [
      {
        "id": "JOS-1",
        "label": "Ch 1 · \"Be Strong & Courageous\""
      },
      {
        "id": "JOS-2",
        "label": "Ch 2 · Rahab & the Scarlet Cord"
      },
      {
        "id": "JOS-4",
        "label": "Ch 4 · Twelve Stones at Gilgal"
      },
      {
        "id": "JOS-6",
        "label": "Ch 6 · The Walls of Jericho"
      },
      {
        "id": "JOS-14",
        "label": "Ch 14 · Caleb at 85 (\"Give Me This Mountain\")"
      },
      {
        "id": "JOS-20",
        "label": "Ch 20 · Six Cities of Refuge"
      },
      {
        "id": "JOS-24",
        "label": "Ch 24 · \"As for Me & My House\""
      }
    ]
  },
  {
    "id": "JDG",
    "title": "Judges",
    "shortLabel": "Judges",
    "chapters": 21,
    "verses": "618 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key Judges Turning Points",
    "shortcuts": [
      {
        "id": "JDG-2",
        "label": "Ch 2 · The Cycle of Cry & Rescue"
      },
      {
        "id": "JDG-4",
        "label": "Ch 4 · Deborah & Barak at Mount Tabor"
      },
      {
        "id": "JDG-5",
        "label": "Ch 5 · Song of Deborah & Barak"
      },
      {
        "id": "JDG-6",
        "label": "Ch 6 · Gideon: \"Mighty Man of Valor\""
      },
      {
        "id": "JDG-7",
        "label": "Ch 7 · 300 Soldiers, Jars & Torches"
      },
      {
        "id": "JDG-13",
        "label": "Ch 13 · Samson’s Nazirite Promise"
      },
      {
        "id": "JDG-16",
        "label": "Ch 16 · Samson’s Final Prayer"
      }
    ]
  },
  {
    "id": "RUT",
    "title": "Ruth",
    "shortLabel": "Ruth",
    "chapters": 4,
    "verses": "85 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Ruth’s 4-Chapter Arc",
    "shortcuts": [
      {
        "id": "RUT-1",
        "label": "Ch 1 · Loyal Love & Faith (\"Where You Go...\")"
      },
      {
        "id": "RUT-2",
        "label": "Ch 2 · Grace in Boaz’s Barley Fields"
      },
      {
        "id": "RUT-3",
        "label": "Ch 3 · Kinsman-Redeemer at Midnight"
      },
      {
        "id": "RUT-4",
        "label": "Ch 4 · Redemption & King David’s Family"
      }
    ]
  },
  {
    "id": "1SA",
    "title": "1 Samuel",
    "shortLabel": "1 Samuel",
    "chapters": 31,
    "verses": "810 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key 1 Samuel Turning Points",
    "shortcuts": [
      {
        "id": "1SA-1",
        "label": "Ch 1 · Hannah’s Honest Prayer at Shiloh"
      },
      {
        "id": "1SA-3",
        "label": "Ch 3 · \"Speak, Lord, Your Servant Listens\""
      },
      {
        "id": "1SA-7",
        "label": "Ch 7 · Ebenezer (\"Stone of Help\")"
      },
      {
        "id": "1SA-16",
        "label": "Ch 16 · David Anointed (\"God Looks on the Heart\")"
      },
      {
        "id": "1SA-17",
        "label": "Ch 17 · David & Goliath in the Valley of Elah"
      },
      {
        "id": "1SA-24",
        "label": "Ch 24 · Mercy in the Cave of En Gedi"
      },
      {
        "id": "1SA-25",
        "label": "Ch 25 · Abigail’s Wise Peacemaking"
      }
    ]
  },
  {
    "id": "2SA",
    "title": "2 Samuel",
    "shortLabel": "2 Samuel",
    "chapters": 24,
    "verses": "695 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key 2 Samuel Turning Points",
    "shortcuts": [
      {
        "id": "2SA-1",
        "label": "Ch 1 · Lament for Saul & Jonathan"
      },
      {
        "id": "2SA-6",
        "label": "Ch 6 · Dancing Before the Ark in Jerusalem"
      },
      {
        "id": "2SA-7",
        "label": "Ch 7 · The Davidic Covenant"
      },
      {
        "id": "2SA-9",
        "label": "Ch 9 · Kindness to Mephibosheth"
      },
      {
        "id": "2SA-12",
        "label": "Ch 12 · Nathan’s Parable & Honest Mercy"
      },
      {
        "id": "2SA-22",
        "label": "Ch 22 · David’s Song of Deliverance"
      },
      {
        "id": "2SA-24",
        "label": "Ch 24 · Araunah’s Threshing Floor"
      }
    ]
  },
  {
    "id": "1KI",
    "title": "1 Kings",
    "shortLabel": "1 Kings",
    "chapters": 22,
    "verses": "816 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key 1 Kings Turning Points",
    "shortcuts": [
      {
        "id": "1KI-3",
        "label": "Ch 3 · Solomon Asks for a Listening Heart"
      },
      {
        "id": "1KI-8",
        "label": "Ch 8 · Dedicating the Jerusalem Temple"
      },
      {
        "id": "1KI-10",
        "label": "Ch 10 · Queen of Sheba Visits"
      },
      {
        "id": "1KI-12",
        "label": "Ch 12 · The Kingdom Splits in Two"
      },
      {
        "id": "1KI-17",
        "label": "Ch 17 · Ravens & Widow’s Flour Jar"
      },
      {
        "id": "1KI-18",
        "label": "Ch 18 · Fire on Mount Carmel"
      },
      {
        "id": "1KI-19",
        "label": "Ch 19 · Gentle Whisper at Horeb"
      }
    ]
  },
  {
    "id": "2KI",
    "title": "2 Kings",
    "shortLabel": "2 Kings",
    "chapters": 25,
    "verses": "719 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key 2 Kings Turning Points",
    "shortcuts": [
      {
        "id": "2KI-2",
        "label": "Ch 2 · Chariot of Fire & Elijah’s Mantle"
      },
      {
        "id": "2KI-4",
        "label": "Ch 4 · Flowing Oil & Shunammite Compassion"
      },
      {
        "id": "2KI-5",
        "label": "Ch 5 · Little Servant Girl & Naaman Healed"
      },
      {
        "id": "2KI-6",
        "label": "Ch 6 · Chariots of Fire Around Dothan"
      },
      {
        "id": "2KI-19",
        "label": "Ch 19 · Hezekiah Spreads the Letter Before God"
      },
      {
        "id": "2KI-22",
        "label": "Ch 22 · Boy-King Josiah Finds the Torah Scroll"
      },
      {
        "id": "2KI-25",
        "label": "Ch 25 · Fall of Jerusalem & Promised Lamp"
      }
    ]
  },
  {
    "id": "1CH",
    "title": "1 Chronicles",
    "shortLabel": "1 Chronicles",
    "chapters": 29,
    "verses": "942 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key 1 Chronicles Turning Points",
    "shortcuts": [
      {
        "id": "1CH-4",
        "label": "Ch 4 · Humble Prayer of Jabez Inside Judah’s Tree"
      },
      {
        "id": "1CH-11",
        "label": "Ch 11 · David Crowned & Benaiah’s Lion in Snow"
      },
      {
        "id": "1CH-15",
        "label": "Ch 15 · Levites Carry the Ark With Trumpets"
      },
      {
        "id": "1CH-16",
        "label": "Ch 16 · “For His Lovingkindness Endures Forever!”"
      },
      {
        "id": "1CH-17",
        "label": "Ch 17 · Prophet Nathan & Eternal Covenant Promise"
      },
      {
        "id": "1CH-21",
        "label": "Ch 21 · Altar of Mercy on Ornan’s Threshing Floor"
      },
      {
        "id": "1CH-28",
        "label": "Ch 28 · Temple Blueprint Scroll & “Be Strong!”"
      },
      {
        "id": "1CH-29",
        "label": "Ch 29 · Cheerful Offerings & David’s Doxology"
      }
    ]
  },
  {
    "id": "2CH",
    "title": "2 Chronicles",
    "shortLabel": "2 Chronicles",
    "chapters": 36,
    "verses": "822 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key 2 Chronicles Turning Points",
    "shortcuts": [
      {
        "id": "2CH-5",
        "label": "Ch 5 · Glory Cloud Fills Solomon’s Temple"
      },
      {
        "id": "2CH-7",
        "label": "Ch 7 · Fire & “If My People Humble Themselves”"
      },
      {
        "id": "2CH-14",
        "label": "Ch 14 · Asa’s Prayer: “None Besides You to Help”"
      },
      {
        "id": "2CH-20",
        "label": "Ch 20 · Choirs Leading the Army in Beracah"
      },
      {
        "id": "2CH-22",
        "label": "Ch 22 · Jehoshabeath Shelters Baby Joash"
      },
      {
        "id": "2CH-29",
        "label": "Ch 29 · Hezekiah Reopens Sealed Temple Doors"
      },
      {
        "id": "2CH-33",
        "label": "Ch 33 · Manasseh Humbled & Forgiven in Mercy"
      },
      {
        "id": "2CH-34",
        "label": "Ch 34 · Young Josiah Rediscovers Lost Torah Scroll"
      },
      {
        "id": "2CH-36",
        "label": "Ch 36 · Dawn Decree of Cyrus: “Let Him Go Up!”"
      }
    ]
  },
  {
    "id": "EZR",
    "title": "Ezra",
    "shortLabel": "Ezra",
    "chapters": 10,
    "verses": "280 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key Ezra Turning Points",
    "shortcuts": [
      {
        "id": "EZR-1",
        "label": "Ch 1 · Cyrus’s Decree & Returned Gold Bowls"
      },
      {
        "id": "EZR-3",
        "label": "Ch 3 · Altar Rebuilt & Tears Mingled With Joy"
      },
      {
        "id": "EZR-6",
        "label": "Ch 6 · Found Scroll & Temple Completed"
      },
      {
        "id": "EZR-7",
        "label": "Ch 7 · God’s Good Hand: Study, Live, Teach"
      },
      {
        "id": "EZR-8",
        "label": "Ch 8 · Fasting by Ahava Canal for Safe Walk"
      }
    ]
  },
  {
    "id": "NEH",
    "title": "Nehemiah",
    "shortLabel": "Nehemiah",
    "chapters": 13,
    "verses": "406 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key Nehemiah Turning Points",
    "shortcuts": [
      {
        "id": "NEH-1",
        "label": "Ch 1 · Broken Heart & Persistent Prayer at Susa"
      },
      {
        "id": "NEH-2",
        "label": "Ch 2 · Arrow Prayer & Midnight Wall Inspection"
      },
      {
        "id": "NEH-4",
        "label": "Ch 4 · Trowel in Hand & Spear Guarding by Night"
      },
      {
        "id": "NEH-6",
        "label": "Ch 6 · “I Am Doing a Great Work”—52 Days Done"
      },
      {
        "id": "NEH-8",
        "label": "Ch 8 · Water Gate Torah: “Joy Is Your Strength!”"
      },
      {
        "id": "NEH-12",
        "label": "Ch 12 · Two Joyful Choirs Around City Walls"
      },
      {
        "id": "NEH-13",
        "label": "Ch 13 · Sabbath Dusk Gates & “Remember Me, O God”"
      }
    ]
  },
  {
    "id": "EST",
    "title": "Esther",
    "shortLabel": "Esther",
    "chapters": 10,
    "verses": "167 Verses",
    "testament": "OT",
    "groupId": "ot-history",
    "accent": "#C88A6B",
    "shortcutsHeading": "Key Esther Turning Points",
    "shortcuts": [
      {
        "id": "EST-2",
        "label": "Ch 2 · Hadassah Chosen & Mordecai at the Gate"
      },
      {
        "id": "EST-4",
        "label": "Ch 4 · “For Such a Time as This” & Three-Day Fast"
      },
      {
        "id": "EST-5",
        "label": "Ch 5 · Stepping Uninvited Before Golden Scepter"
      },
      {
        "id": "EST-6",
        "label": "Ch 6 · Sleepless Night & Archive Reversal"
      },
      {
        "id": "EST-7",
        "label": "Ch 7 · Queen’s Banquet Plea & Haman’s Fall"
      },
      {
        "id": "EST-9",
        "label": "Ch 9 · Purim Gifts Shared With Friends & Poor"
      }
    ]
  },
  {
    "id": "JOB",
    "title": "Job",
    "shortLabel": "Job",
    "chapters": 42,
    "verses": "1,070 Verses",
    "testament": "OT",
    "groupId": "ot-poetry",
    "accent": "#5D7CA8",
    "shortcutsHeading": "Key Job Turning Points",
    "shortcuts": [
      {
        "id": "JOB-1",
        "label": "Ch 1 · Blameless Job & Sudden Loss in Uz"
      },
      {
        "id": "JOB-2",
        "label": "Ch 2 · Ash Heap & Seven Days of Silent Friends"
      },
      {
        "id": "JOB-19",
        "label": "Ch 19 · “I Know That My Redeemer Lives!”"
      },
      {
        "id": "JOB-28",
        "label": "Ch 28 · Deep Silver Mines & True Wisdom"
      },
      {
        "id": "JOB-38",
        "label": "Ch 38 · Yahweh Answers Out of the Whirlwind"
      },
      {
        "id": "JOB-40",
        "label": "Ch 40 · Silent Hand Over Mouth & Behemoth"
      },
      {
        "id": "JOB-42",
        "label": "Ch 42 · “Now My Eye Sees You” & Double Restoration"
      }
    ]
  },
  {
    "id": "PSA",
    "title": "Psalms",
    "shortLabel": "Psalms",
    "chapters": 150,
    "verses": "2,461 Verses",
    "testament": "OT",
    "groupId": "ot-poetry",
    "accent": "#5D7CA8",
    "shortcutsHeading": "Key Psalms Across Books I–V",
    "shortcuts": [
      {
        "id": "PSA-1",
        "label": "Ps 1 · Tree Planted by Streams of Water"
      },
      {
        "id": "PSA-23",
        "label": "Ps 23 · The Lord Is My Shepherd"
      },
      {
        "id": "PSA-46",
        "label": "Ps 46 · “Be Still & Know That I Am God”"
      },
      {
        "id": "PSA-51",
        "label": "Ps 51 · Create in Me a Clean Heart"
      },
      {
        "id": "PSA-73",
        "label": "Ps 73 · Steadied Inside the Sanctuary"
      },
      {
        "id": "PSA-103",
        "label": "Ps 103 · As Far as East Is from West"
      },
      {
        "id": "PSA-119",
        "label": "Ps 119 · Your Word Is a Lamp to My Feet"
      },
      {
        "id": "PSA-139",
        "label": "Ps 139 · Fearfully & Wonderfully Made"
      },
      {
        "id": "PSA-150",
        "label": "Ps 150 · Let Everything That Has Breath Praise!"
      }
    ]
  },
  {
    "id": "PRO",
    "title": "Proverbs",
    "shortLabel": "Proverbs",
    "chapters": 31,
    "verses": "915 Verses",
    "testament": "OT",
    "groupId": "ot-poetry",
    "accent": "#5D7CA8",
    "shortcutsHeading": "Key Proverbs Anchors",
    "shortcuts": [
      {
        "id": "PRO-1",
        "label": "Ch 1 · Beginning of Knowledge & Reverence"
      },
      {
        "id": "PRO-3",
        "label": "Ch 3 · Trust Yahweh With All Your Heart"
      },
      {
        "id": "PRO-8",
        "label": "Ch 8 · Lady Wisdom Calling Before Creation"
      },
      {
        "id": "PRO-15",
        "label": "Ch 15 · Gentle Answers Turn Away Wrath"
      },
      {
        "id": "PRO-27",
        "label": "Ch 27 · Iron Sharpens Iron in Friendship"
      },
      {
        "id": "PRO-30",
        "label": "Ch 30 · Agur’s Humble Prayer & Wise Creatures"
      },
      {
        "id": "PRO-31",
        "label": "Ch 31 · Defend the Voiceless & Noble Hands"
      }
    ]
  },
  {
    "id": "ECC",
    "title": "Ecclesiastes",
    "shortLabel": "Ecclesiastes",
    "chapters": 12,
    "verses": "222 Verses",
    "testament": "OT",
    "groupId": "ot-poetry",
    "accent": "#5D7CA8",
    "shortcutsHeading": "Key Ecclesiastes Anchors",
    "shortcuts": [
      {
        "id": "ECC-1",
        "label": "Ch 1 · Vapor & Turning Streams"
      },
      {
        "id": "ECC-3",
        "label": "Ch 3 · A Time for Every Season & Eternity"
      },
      {
        "id": "ECC-4",
        "label": "Ch 4 · Two Are Better & Threefold Cord"
      },
      {
        "id": "ECC-9",
        "label": "Ch 9 · Eat Bread Gladly & Quiet Helper"
      },
      {
        "id": "ECC-12",
        "label": "Ch 12 · Remember Your Creator Early"
      }
    ]
  },
  {
    "id": "SNG",
    "title": "Song of Solomon",
    "shortLabel": "Song of Songs",
    "chapters": 8,
    "verses": "117 Verses",
    "testament": "OT",
    "groupId": "ot-poetry",
    "accent": "#5D7CA8",
    "shortcutsHeading": "Key Song of Songs Moments",
    "shortcuts": [
      {
        "id": "SNG-2",
        "label": "Ch 2 · Rose of Sharon & Winter Past"
      },
      {
        "id": "SNG-4",
        "label": "Ch 4 · Enclosed Garden & Lebanon Streams"
      },
      {
        "id": "SNG-6",
        "label": "Ch 6 · “I Am My Beloved’s, Beloved Is Mine”"
      },
      {
        "id": "SNG-8",
        "label": "Ch 8 · Love Strong as Death & Yahweh’s Flame"
      }
    ]
  },
  {
    "id": "ISA",
    "title": "Isaiah",
    "shortLabel": "Isaiah",
    "chapters": 66,
    "verses": "1,292 Verses",
    "testament": "OT",
    "groupId": "ot-major-prophets",
    "accent": "#B86862",
    "shortcutsHeading": "Key Isaiah Turning Points",
    "shortcuts": [
      {
        "id": "ISA-6",
        "label": "Ch 6 · “Holy, Holy, Holy!”—Here Am I, Send Me"
      },
      {
        "id": "ISA-9",
        "label": "Ch 9 · Great Light & “Prince of Peace” Born"
      },
      {
        "id": "ISA-11",
        "label": "Ch 11 · Shoot From Jesse’s Stump & Peaceable Kingdom"
      },
      {
        "id": "ISA-35",
        "label": "Ch 35 · Desert Blossoms & Highway of Holiness"
      },
      {
        "id": "ISA-40",
        "label": "Ch 40 · “Comfort My People” & Mounting Like Eagles"
      },
      {
        "id": "ISA-53",
        "label": "Ch 53 · Suffering Servant Pierced for Our Peace"
      },
      {
        "id": "ISA-61",
        "label": "Ch 61 · Anointed to Bind Up Brokenhearted"
      },
      {
        "id": "ISA-65",
        "label": "Ch 65 · New Heavens & New Earth"
      }
    ]
  },
  {
    "id": "JER",
    "title": "Jeremiah",
    "shortLabel": "Jeremiah",
    "chapters": 52,
    "verses": "1,364 Verses",
    "testament": "OT",
    "groupId": "ot-major-prophets",
    "accent": "#B86862",
    "shortcutsHeading": "Key Jeremiah Turning Points",
    "shortcuts": [
      {
        "id": "JER-1",
        "label": "Ch 1 · Almond Branch & “Before I Formed You”"
      },
      {
        "id": "JER-18",
        "label": "Ch 18 · Potter’s Wheel & Wet Clay"
      },
      {
        "id": "JER-29",
        "label": "Ch 29 · Seek Peace of City & Hopeful Plans (29:11)"
      },
      {
        "id": "JER-31",
        "label": "Ch 31 · Everlasting Love & New Covenant on Hearts"
      },
      {
        "id": "JER-36",
        "label": "Ch 36 · Burned Scroll Rewritten by Baruch"
      },
      {
        "id": "JER-38",
        "label": "Ch 38 · Soft Rags Rescue From Cistern"
      }
    ]
  },
  {
    "id": "LAM",
    "title": "Lamentations",
    "shortLabel": "Lamentations",
    "chapters": 5,
    "verses": "154 Verses",
    "testament": "OT",
    "groupId": "ot-major-prophets",
    "accent": "#B86862",
    "shortcutsHeading": "Key Lamentations Anchors",
    "shortcuts": [
      {
        "id": "LAM-1",
        "label": "Ch 1 · Solitary City Weeping Honestly"
      },
      {
        "id": "LAM-3",
        "label": "Ch 3 · “Great Is Your Faithfulness” Every Morning"
      },
      {
        "id": "LAM-5",
        "label": "Ch 5 · Renew Our Days as of Old"
      }
    ]
  },
  {
    "id": "EZK",
    "title": "Ezekiel",
    "shortLabel": "Ezekiel",
    "chapters": 48,
    "verses": "1,273 Verses",
    "testament": "OT",
    "groupId": "ot-major-prophets",
    "accent": "#B86862",
    "shortcutsHeading": "Key Ezekiel Visions",
    "shortcuts": [
      {
        "id": "EZK-1",
        "label": "Ch 1 · Sapphire Whirlwind & Wheels at Kebar River"
      },
      {
        "id": "EZK-18",
        "label": "Ch 18 · “Why Will You Die? Turn and Live!”"
      },
      {
        "id": "EZK-34",
        "label": "Ch 34 · God Himself the Good Shepherd"
      },
      {
        "id": "EZK-36",
        "label": "Ch 36 · Heart of Stone Replaced With New Spirit"
      },
      {
        "id": "EZK-37",
        "label": "Ch 37 · Valley of Dry Bones Breathing Alive!"
      },
      {
        "id": "EZK-47",
        "label": "Ch 47 · Crystal Healing River to Dead Sea"
      },
      {
        "id": "EZK-48",
        "label": "Ch 48 · Yahweh Shammah (“The Lord Is There”)"
      }
    ]
  },
  {
    "id": "DAN",
    "title": "Daniel",
    "shortLabel": "Daniel",
    "chapters": 12,
    "verses": "357 Verses",
    "testament": "OT",
    "groupId": "ot-major-prophets",
    "accent": "#B86862",
    "shortcutsHeading": "Key Daniel Turning Points",
    "shortcuts": [
      {
        "id": "DAN-1",
        "label": "Ch 1 · Unshaken Conviction in Babylon’s Court"
      },
      {
        "id": "DAN-2",
        "label": "Ch 2 · Statue Dream & Stone Cut Without Hands"
      },
      {
        "id": "DAN-3",
        "label": "Ch 3 · Four Walking Inside the Fiery Furnace"
      },
      {
        "id": "DAN-5",
        "label": "Ch 5 · Mysterious Writing on the Palace Wall"
      },
      {
        "id": "DAN-6",
        "label": "Ch 6 · Open Windows & Peace in the Lions’ Den"
      },
      {
        "id": "DAN-7",
        "label": "Ch 7 · Ancient of Days & One Like a Son of Man"
      },
      {
        "id": "DAN-12",
        "label": "Ch 12 · Wise Shall Shine Like Brightness of Stars"
      }
    ]
  },
  {
    "id": "HOS",
    "title": "Hosea",
    "shortLabel": "Hosea",
    "chapters": 14,
    "verses": "197 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D",
    "shortcutsHeading": "Key Hosea Turning Points",
    "shortcuts": [
      {
        "id": "HOS-2",
        "label": "Ch 2 · Valley of Achor Turned Into Door of Hope"
      },
      {
        "id": "HOS-6",
        "label": "Ch 6 · Mercy Not Sacrifice & Sure as Dawn"
      },
      {
        "id": "HOS-11",
        "label": "Ch 11 · Cords of Loving Compassion Over Ephraim"
      },
      {
        "id": "HOS-14",
        "label": "Ch 14 · Healing Backsliding & Blossom Like Lily"
      }
    ]
  },
  {
    "id": "JOL",
    "title": "Joel",
    "shortLabel": "Joel",
    "chapters": 3,
    "verses": "73 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D",
    "shortcutsHeading": "Key Joel Moments",
    "shortcuts": [
      {
        "id": "JOL-1",
        "label": "Ch 1 · Locust Plague Awakening Judah to Prayer"
      },
      {
        "id": "JOL-2",
        "label": "Ch 2 · Rend Your Hearts & Spirit Poured on All"
      },
      {
        "id": "JOL-3",
        "label": "Ch 3 · Valley of Decision & Spring from Zion"
      }
    ]
  },
  {
    "id": "AMO",
    "title": "Amos",
    "shortLabel": "Amos",
    "chapters": 9,
    "verses": "146 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D",
    "shortcutsHeading": "Key Amos Turning Points",
    "shortcuts": [
      {
        "id": "AMO-3",
        "label": "Ch 3 · The Lion Has Roared — Who Will Not Prophesy?"
      },
      {
        "id": "AMO-5",
        "label": "Ch 5 · Let Justice Roll Down Like Mighty Waters"
      },
      {
        "id": "AMO-7",
        "label": "Ch 7 · Vision of the Plumb Line at Bethel"
      },
      {
        "id": "AMO-9",
        "label": "Ch 9 · Raising Up David’s Fallen Booth Forever"
      }
    ]
  },
  {
    "id": "OBA",
    "title": "Obadiah",
    "shortLabel": "Obadiah",
    "chapters": 1,
    "verses": "21 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "JON",
    "title": "Jonah",
    "shortLabel": "Jonah",
    "chapters": 4,
    "verses": "48 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "MIC",
    "title": "Micah",
    "shortLabel": "Micah",
    "chapters": 7,
    "verses": "105 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "NAM",
    "title": "Nahum",
    "shortLabel": "Nahum",
    "chapters": 3,
    "verses": "47 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "HAB",
    "title": "Habakkuk",
    "shortLabel": "Habakkuk",
    "chapters": 3,
    "verses": "56 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "ZEP",
    "title": "Zephaniah",
    "shortLabel": "Zephaniah",
    "chapters": 3,
    "verses": "53 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "HAG",
    "title": "Haggai",
    "shortLabel": "Haggai",
    "chapters": 2,
    "verses": "38 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "ZEC",
    "title": "Zechariah",
    "shortLabel": "Zechariah",
    "chapters": 14,
    "verses": "211 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "MAL",
    "title": "Malachi",
    "shortLabel": "Malachi",
    "chapters": 4,
    "verses": "55 Verses",
    "testament": "OT",
    "groupId": "ot-minor-prophets",
    "accent": "#9F7A4D"
  },
  {
    "id": "MAT",
    "title": "Matthew",
    "shortLabel": "Matthew",
    "chapters": 28,
    "verses": "1,071 Verses",
    "testament": "NT",
    "groupId": "nt-gospels",
    "accent": "#4F886B"
  },
  {
    "id": "MRK",
    "title": "Mark",
    "shortLabel": "Mark",
    "chapters": 16,
    "verses": "678 Verses",
    "testament": "NT",
    "groupId": "nt-gospels",
    "accent": "#4F886B"
  },
  {
    "id": "LUK",
    "title": "Luke",
    "shortLabel": "Luke",
    "chapters": 24,
    "verses": "1,151 Verses",
    "testament": "NT",
    "groupId": "nt-gospels",
    "accent": "#4F886B"
  },
  {
    "id": "JHN",
    "title": "John",
    "shortLabel": "John",
    "chapters": 21,
    "verses": "879 Verses",
    "testament": "NT",
    "groupId": "nt-gospels",
    "accent": "#4F886B"
  },
  {
    "id": "ACT",
    "title": "Acts",
    "shortLabel": "Acts",
    "chapters": 28,
    "verses": "1,007 Verses",
    "testament": "NT",
    "groupId": "nt-history",
    "accent": "#C88A6B"
  },
  {
    "id": "ROM",
    "title": "Romans",
    "shortLabel": "Romans",
    "chapters": 16,
    "verses": "434 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "1CO",
    "title": "1 Corinthians",
    "shortLabel": "1 Cor",
    "chapters": 16,
    "verses": "437 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "2CO",
    "title": "2 Corinthians",
    "shortLabel": "2 Cor",
    "chapters": 13,
    "verses": "257 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "GAL",
    "title": "Galatians",
    "shortLabel": "Galatians",
    "chapters": 6,
    "verses": "149 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "EPH",
    "title": "Ephesians",
    "shortLabel": "Ephesians",
    "chapters": 6,
    "verses": "155 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "PHP",
    "title": "Philippians",
    "shortLabel": "Philippians",
    "chapters": 4,
    "verses": "104 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "COL",
    "title": "Colossians",
    "shortLabel": "Colossians",
    "chapters": 4,
    "verses": "95 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "1TH",
    "title": "1 Thessalonians",
    "shortLabel": "1 Thess",
    "chapters": 5,
    "verses": "89 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "2TH",
    "title": "2 Thessalonians",
    "shortLabel": "2 Thess",
    "chapters": 3,
    "verses": "47 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "1TI",
    "title": "1 Timothy",
    "shortLabel": "1 Timothy",
    "chapters": 6,
    "verses": "113 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "2TI",
    "title": "2 Timothy",
    "shortLabel": "2 Timothy",
    "chapters": 4,
    "verses": "83 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "TIT",
    "title": "Titus",
    "shortLabel": "Titus",
    "chapters": 3,
    "verses": "46 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "PHM",
    "title": "Philemon",
    "shortLabel": "Philemon",
    "chapters": 1,
    "verses": "25 Verses",
    "testament": "NT",
    "groupId": "nt-paul",
    "accent": "#826BA8"
  },
  {
    "id": "HEB",
    "title": "Hebrews",
    "shortLabel": "Hebrews",
    "chapters": 13,
    "verses": "303 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "JAS",
    "title": "James",
    "shortLabel": "James",
    "chapters": 5,
    "verses": "108 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "1PE",
    "title": "1 Peter",
    "shortLabel": "1 Peter",
    "chapters": 5,
    "verses": "105 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "2PE",
    "title": "2 Peter",
    "shortLabel": "2 Peter",
    "chapters": 3,
    "verses": "61 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "1JN",
    "title": "1 John",
    "shortLabel": "1 John",
    "chapters": 5,
    "verses": "105 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "2JN",
    "title": "2 John",
    "shortLabel": "2 John",
    "chapters": 1,
    "verses": "13 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "3JN",
    "title": "3 John",
    "shortLabel": "3 John",
    "chapters": 1,
    "verses": "14 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "JUD",
    "title": "Jude",
    "shortLabel": "Jude",
    "chapters": 1,
    "verses": "25 Verses",
    "testament": "NT",
    "groupId": "nt-general",
    "accent": "#5D7CA8"
  },
  {
    "id": "REV",
    "title": "Revelation",
    "shortLabel": "Revelation",
    "chapters": 22,
    "verses": "404 Verses",
    "testament": "NT",
    "groupId": "nt-prophecy",
    "accent": "#C96C42"
  }
];

export const PICKER_BOOK_MAP: Record<BibleBookId, BookPickerMeta> = Object.fromEntries(
  PICKER_BOOKS.map((book) => [book.id, book])
) as Record<BibleBookId, BookPickerMeta>;

export const FEATURED_HIGHLIGHTS: FeaturedPassageHighlight[] = [
  {
    "startChapterId": "GEN-1",
    "prefixes": [
      "GEN-"
    ],
    "title": "Genesis 1–50",
    "badge": "Full Book",
    "iconColor": "#7A9A82",
    "desc": "Creation, Noah, Abraham, Jacob, and Joseph across all 50 chapters.",
    "testament": "OT",
    "groupLabel": "Law"
  },
  {
    "startChapterId": "EXO-16",
    "prefixes": [
      "EXO-"
    ],
    "title": "Exodus 1–40",
    "badge": "Full Book",
    "iconColor": "#7A9A82",
    "desc": "Burning Bush, Passover, Red Sea, Manna, Sinai, and the Tabernacle.",
    "testament": "OT",
    "groupLabel": "Law"
  },
  {
    "startChapterId": "LEV-19",
    "prefixes": [
      "LEV-"
    ],
    "title": "Leviticus 1–27",
    "badge": "Full Book",
    "iconColor": "#7A9A82",
    "desc": "Day of Atonement, \"Love Your Neighbor\", Sacred Feasts, and Jubilee.",
    "testament": "OT",
    "groupLabel": "Law"
  },
  {
    "startChapterId": "NUM-13",
    "prefixes": [
      "NUM-"
    ],
    "title": "Numbers 1–36",
    "badge": "Full Book",
    "iconColor": "#7A9A82",
    "desc": "Priestly Blessing, Twelve Spies, Bronze Serpent, Balaam, and Zelophehad’s daughters.",
    "testament": "OT",
    "groupLabel": "Law"
  },
  {
    "startChapterId": "DEU-6",
    "prefixes": [
      "DEU-"
    ],
    "title": "Deuteronomy 1–34",
    "badge": "Full Book",
    "iconColor": "#7A9A82",
    "desc": "The Shema, Not By Bread Alone, Choose Life, Joshua’s Commission, and Mount Nebo.",
    "testament": "OT",
    "groupLabel": "Law"
  },
  {
    "startChapterId": "JOS-1",
    "prefixes": [
      "JOS-"
    ],
    "title": "Joshua 1–24",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Crossing Jordan, Rahab’s Scarlet Cord, Jericho’s Walls, Caleb at 85, and Shechem.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "JDG-6",
    "prefixes": [
      "JDG-"
    ],
    "title": "Judges 1–21",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Deborah’s Victory Song, Gideon’s 300 Torches, and Samson’s Nazirite Prayer.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "RUT-1",
    "prefixes": [
      "RUT-"
    ],
    "title": "Ruth 1–4",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Loyal love, barley fields with Boaz, redemption at the gate, and David’s family line.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "1SA-16",
    "prefixes": [
      "1SA-"
    ],
    "title": "1 Samuel 1–31",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Hannah, Samuel’s call, King Saul, David & Goliath, Jonathan, and Abigail.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "2SA-7",
    "prefixes": [
      "2SA-"
    ],
    "title": "2 Samuel 1–24",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Ark in Jerusalem, Davidic Covenant, Mephibosheth, Nathan’s Parable, and Temple site.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "1KI-3",
    "prefixes": [
      "1KI-"
    ],
    "title": "1 Kings 1–22",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Solomon’s Temple & wisdom, divided kingdom, Mount Carmel fire, and Horeb’s gentle whisper.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "2KI-6",
    "prefixes": [
      "2KI-"
    ],
    "title": "2 Kings 1–25",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Elisha’s miracles, Naaman’s healing, Hezekiah’s prayer, Josiah’s Torah reform, and exile.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "1CH-16",
    "prefixes": [
      "1CH-"
    ],
    "title": "1 Chronicles 1–29",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Prayer of Jabez, Ark thanksgiving praise, Ornan’s threshing floor, and cheerful Temple giving.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "2CH-20",
    "prefixes": [
      "2CH-"
    ],
    "title": "2 Chronicles 1–36",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Temple fire (7:14), Jehoshaphat’s battle choirs, Joash rescued, Manasseh forgiven, and Josiah’s Torah scroll.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "EZR-7",
    "prefixes": [
      "EZR-"
    ],
    "title": "Ezra 1–10",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Cyrus’s decree, rebuilt altar, prayer at Ahava canal, and God’s good hand in Torah.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "NEH-8",
    "prefixes": [
      "NEH-"
    ],
    "title": "Nehemiah 1–13",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Arrow prayer in Susa, 52-day wall builders, Water Gate Torah joy, and choirs on walls.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "EST-4",
    "prefixes": [
      "EST-"
    ],
    "title": "Esther 1–10",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Three-day fast, golden scepter courage, sleepless royal chronicles, and Purim generosity.",
    "testament": "OT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "JOB-38",
    "prefixes": [
      "JOB-"
    ],
    "title": "Job 1–42",
    "badge": "Full Book",
    "iconColor": "#5D7CA8",
    "desc": "Honest lament in Uz, “My Redeemer lives,” mines of wisdom, and Yahweh out of the whirlwind.",
    "testament": "OT",
    "groupLabel": "Wisdom & Poetry"
  },
  {
    "startChapterId": "PSA-23",
    "prefixes": [
      "PSA-"
    ],
    "title": "Psalms 1–150",
    "badge": "Full Book",
    "iconColor": "#5D7CA8",
    "desc": "Israel’s prayerbook and hymnal: green pastures (23), clean heart (51), and Hallelujah (150).",
    "testament": "OT",
    "groupLabel": "Wisdom & Poetry"
  },
  {
    "startChapterId": "PRO-3",
    "prefixes": [
      "PRO-"
    ],
    "title": "Proverbs 1–31",
    "badge": "Full Book",
    "iconColor": "#5D7CA8",
    "desc": "Skillful everyday living: Trust (3:5), Lady Wisdom (8), Gentle answers (15:1), and Proverbs 31.",
    "testament": "OT",
    "groupLabel": "Wisdom & Poetry"
  },
  {
    "startChapterId": "ECC-3",
    "prefixes": [
      "ECC-"
    ],
    "title": "Ecclesiastes 1–12",
    "badge": "Full Book",
    "iconColor": "#5D7CA8",
    "desc": "Every season under heaven (3), threefold cord (4:12), and remembering your Creator (12).",
    "testament": "OT",
    "groupLabel": "Wisdom & Poetry"
  },
  {
    "startChapterId": "SNG-2",
    "prefixes": [
      "SNG-"
    ],
    "title": "Song of Solomon 1–8",
    "badge": "Full Book",
    "iconColor": "#5D7CA8",
    "desc": "Spring awakening after winter rains (2:11) and unquenchable love strong as death (8:6).",
    "testament": "OT",
    "groupLabel": "Wisdom & Poetry"
  },
  {
    "startChapterId": "ISA-40",
    "prefixes": [
      "ISA-"
    ],
    "title": "Isaiah 1–66",
    "badge": "Full Book",
    "iconColor": "#B86862",
    "desc": "Throne room call, Prince of Peace, “Comfort My People,” and the Suffering Servant.",
    "testament": "OT",
    "groupLabel": "Major Prophets"
  },
  {
    "startChapterId": "JER-31",
    "prefixes": [
      "JER-"
    ],
    "title": "Jeremiah 1–52",
    "badge": "Full Book",
    "iconColor": "#B86862",
    "desc": "Potter’s wheel, letter to exiles (29:11), muddy cistern rescue, and New Covenant on hearts.",
    "testament": "OT",
    "groupLabel": "Major Prophets"
  },
  {
    "startChapterId": "LAM-3",
    "prefixes": [
      "LAM-"
    ],
    "title": "Lamentations 1–5",
    "badge": "Full Book",
    "iconColor": "#B86862",
    "desc": "Honest acrostic poems of grief discovering compassions made brand-new every morning.",
    "testament": "OT",
    "groupLabel": "Major Prophets"
  },
  {
    "startChapterId": "EZK-37",
    "prefixes": [
      "EZK-"
    ],
    "title": "Ezekiel 1–48",
    "badge": "Full Book",
    "iconColor": "#B86862",
    "desc": "Sapphire chariot wheels, new heart of flesh, dry bones alive, and crystal healing river.",
    "testament": "OT",
    "groupLabel": "Major Prophets"
  },
  {
    "startChapterId": "DAN-6",
    "prefixes": [
      "DAN-"
    ],
    "title": "Daniel 1–12",
    "badge": "Full Book",
    "iconColor": "#B86862",
    "desc": "Fiery furnace courage, lions’ den prayer, and eternal Son of Man Kingdom visions.",
    "testament": "OT",
    "groupLabel": "Major Prophets"
  },
  {
    "startChapterId": "HOS-1",
    "prefixes": [
      "HOS-",
      "JOL-",
      "AMO-",
      "OBA-"
    ],
    "title": "Hosea–Obadiah",
    "badge": "Full Books",
    "iconColor": "#9F7A4D",
    "desc": "Unfailing love in Hosea, Spirit outpouring in Joel, rolling justice in Amos & Obadiah.",
    "testament": "OT",
    "groupLabel": "Minor Prophets"
  },
  {
    "startChapterId": "JON-1",
    "prefixes": [
      "JON-",
      "MIC-",
      "NAM-",
      "HAB-"
    ],
    "title": "Jonah–Habakkuk",
    "badge": "Full Books",
    "iconColor": "#9F7A4D",
    "desc": "Mercy to Nineveh in Jonah, justice & Bethlehem in Micah, Nineveh’s fall in Nahum, living by faith in Habakkuk.",
    "testament": "OT",
    "groupLabel": "Minor Prophets"
  },
  {
    "startChapterId": "ZEP-1",
    "prefixes": [
      "ZEP-",
      "HAG-",
      "ZEC-",
      "MAL-"
    ],
    "title": "Zephaniah–Malachi",
    "badge": "Full Books",
    "iconColor": "#9F7A4D",
    "desc": "God singing over Zion in Zephaniah, temple rebuilding in Haggai & Zechariah, Sun of Righteousness in Malachi.",
    "testament": "OT",
    "groupLabel": "Minor Prophets"
  },
  {
    "startChapterId": "MAT-1",
    "prefixes": [
      "MAT-"
    ],
    "title": "Matthew 1–28",
    "badge": "Full Book",
    "iconColor": "#4F886B",
    "desc": "Immanuel’s birth, Sermon on the Mount, parables of the Kingdom, cross & Great Commission.",
    "testament": "NT",
    "groupLabel": "Gospels"
  },
  {
    "startChapterId": "MRK-1",
    "prefixes": [
      "MRK-"
    ],
    "title": "Mark 1–16",
    "badge": "Full Book",
    "iconColor": "#4F886B",
    "desc": "Fast-moving Servant-King, calmed storms, Bartimaeus, broken alabaster jar & empty dawn tomb.",
    "testament": "NT",
    "groupLabel": "Gospels"
  },
  {
    "startChapterId": "LUK-1",
    "prefixes": [
      "LUK-"
    ],
    "title": "Luke 1–24",
    "badge": "Full Book",
    "iconColor": "#4F886B",
    "desc": "Bethlehem shepherds, Good Samaritan, Prodigal Son, Zacchaeus & the Road to Emmaus.",
    "testament": "NT",
    "groupLabel": "Gospels"
  },
  {
    "startChapterId": "JHN-1",
    "prefixes": [
      "JHN-"
    ],
    "title": "John 1–21",
    "badge": "Full Book",
    "iconColor": "#4F886B",
    "desc": "Eternal Word, Nicodemus by night, Samaritan well, Lazarus raised, True Vine & Thomas’s confession.",
    "testament": "NT",
    "groupLabel": "Gospels"
  },
  {
    "startChapterId": "ACT-1",
    "prefixes": [
      "ACT-"
    ],
    "title": "Acts 1–28",
    "badge": "Full Book",
    "iconColor": "#C88A6B",
    "desc": "Pentecost fire, Stephen, Damascus road, Antioch, Mars Hill & Paul’s unhindered witness to Rome.",
    "testament": "NT",
    "groupLabel": "History"
  },
  {
    "startChapterId": "ROM-1",
    "prefixes": [
      "ROM-"
    ],
    "title": "Romans 1–16",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Righteousness by faith, Romans 8 Spirit adoption, olive tree mercy & living sacrifices.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "1CO-1",
    "prefixes": [
      "1CO-"
    ],
    "title": "1 Corinthians 1–16",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Living temples, Body & Spirit gifts, 1 Corinthians 13 agape love & Easter resurrection victory.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "2CO-1",
    "prefixes": [
      "2CO-"
    ],
    "title": "2 Corinthians 1–13",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "God of all comfort, treasure in clay jars, new creation reconciliation & strength in weakness.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "GAL-1",
    "prefixes": [
      "GAL-"
    ],
    "title": "Galatians 1–6",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Crucified with Christ, Abba adoption, Christian freedom & the 9-fold Fruit of the Spirit.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "EPH-1",
    "prefixes": [
      "EPH-"
    ],
    "title": "Ephesians 1–6",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Saved by grace, torn-down dividing wall, fullness of love & the Whole Armor of God.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "PHP-1",
    "prefixes": [
      "PHP-"
    ],
    "title": "Philippians 1–4",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "To live is Christ, the humble descent hymn, Epaphroditus & surpassing peace of God.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "COL-1",
    "prefixes": [
      "COL-"
    ],
    "title": "Colossians 1–4",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Image of God, fullness of Christ, clothing in kindness & Epaphras with Onesimus.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "1TH-1",
    "prefixes": [
      "1TH-"
    ],
    "title": "1 Thessalonians 1–5",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Gentle nursing care, grieving with hope at Jesus’ coming & rejoicing always.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "2TH-1",
    "prefixes": [
      "2TH-"
    ],
    "title": "2 Thessalonians 1–3",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Standing steady against rumors, never tiring in good works & Lord of Peace.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "1TI-1",
    "prefixes": [
      "1TI-"
    ],
    "title": "1 Timothy 1–6",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "One Mediator Christ Jesus, household care, godliness & contentment.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "2TI-1",
    "prefixes": [
      "2TI-"
    ],
    "title": "2 Timothy 1–4",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Lois & Eunice, God-breathed Scripture, Onesiphorus & finishing the race.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "TIT-1",
    "prefixes": [
      "TIT-"
    ],
    "title": "Titus 1–3",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Sound teaching adorning homes & saving mercy washing hearts cleanly.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "PHM-1",
    "prefixes": [
      "PHM-"
    ],
    "title": "Philemon 1",
    "badge": "Full Book",
    "iconColor": "#826BA8",
    "desc": "Paul’s tender appeal to welcome runaway Onesimus as a beloved brother.",
    "testament": "NT",
    "groupLabel": "Paul's Letters"
  },
  {
    "startChapterId": "HEB-1",
    "prefixes": [
      "HEB-"
    ],
    "title": "Hebrews 1–13",
    "badge": "Full Book",
    "iconColor": "#5D7CA8",
    "desc": "Great High Priest after Melchizedek, New Covenant & Hebrews 11 Hall of Faith.",
    "testament": "NT",
    "groupLabel": "General Letters"
  },
  {
    "startChapterId": "JAS-1",
    "prefixes": [
      "JAS-"
    ],
    "title": "James 1–5",
    "badge": "Full Book",
    "iconColor": "#5D7CA8",
    "desc": "Doers of the Word, faith alive in mercy, gentle tongue & Elijah’s prayer.",
    "testament": "NT",
    "groupLabel": "General Letters"
  },
  {
    "startChapterId": "1PE-1",
    "prefixes": [
      "1PE-",
      "2PE-"
    ],
    "title": "1–2 Peter (8 Ch)",
    "badge": "Full Books",
    "iconColor": "#5D7CA8",
    "desc": "Living hope, royal priesthood, casting anxieties & waiting for new heavens.",
    "testament": "NT",
    "groupLabel": "General Letters"
  },
  {
    "startChapterId": "1JN-1",
    "prefixes": [
      "1JN-",
      "2JN-",
      "3JN-",
      "JUD-"
    ],
    "title": "1–3 John & Jude",
    "badge": "Full Books",
    "iconColor": "#5D7CA8",
    "desc": "God is light and love, Gaius’s hospitality & Jude’s praise to Him who keeps us.",
    "testament": "NT",
    "groupLabel": "General Letters"
  },
  {
    "startChapterId": "REV-1",
    "prefixes": [
      "REV-"
    ],
    "title": "Revelation 1–22",
    "badge": "Full Book",
    "iconColor": "#C96C42",
    "desc": "Patmos vision, the Slain Lamb, New Jerusalem, River of Life & “No more tears!”",
    "testament": "NT",
    "groupLabel": "Prophecy"
  }
];

export function parseBookIdFromChapter(chapterId: string): BibleBookId {
  const dashIdx = chapterId.indexOf('-');
  const candidate = (dashIdx >= 0 ? chapterId.slice(0, dashIdx) : chapterId) as BibleBookId;
  return candidate in PICKER_BOOK_MAP ? candidate : 'GEN';
}
