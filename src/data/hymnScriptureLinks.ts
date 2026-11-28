export interface HymnScriptureLink {
  label: string;
  chapterId: string;
  verseNumber?: number;
}

const DIRECT_HYMN_LINKS: Record<number, HymnScriptureLink[]> = {
  1: [
    { label: 'Psalm 103:1–5', chapterId: 'PSA-103', verseNumber: 1 },
    { label: 'Psalm 150:1–6', chapterId: 'PSA-150', verseNumber: 1 },
  ],
  12: [
    { label: 'Psalm 104:1–2', chapterId: 'PSA-104', verseNumber: 1 },
    { label: 'Psalm 145:10', chapterId: 'PSA-145', verseNumber: 10 },
  ],
  21: [
    { label: 'Psalm 145:1–3', chapterId: 'PSA-145', verseNumber: 1 },
    { label: 'Isaiah 25:9', chapterId: 'ISA-25', verseNumber: 9 },
  ],
  29: [
    { label: 'Psalm 95:1–6', chapterId: 'PSA-95', verseNumber: 1 },
    { label: '1 Chronicles 16:29', chapterId: '1CH-16', verseNumber: 29 },
  ],
  46: [
    { label: 'Psalm 63:1', chapterId: 'PSA-63', verseNumber: 1 },
    { label: 'Psalm 5:3', chapterId: 'PSA-5', verseNumber: 3 },
  ],
  73: [
    { label: 'Isaiah 6:3', chapterId: 'ISA-6', verseNumber: 3 },
    { label: 'Revelation 4:8', chapterId: 'REV-4', verseNumber: 8 },
  ],
  83: [
    { label: 'Psalm 48:1', chapterId: 'PSA-48', verseNumber: 1 },
    { label: 'Isaiah 40:28', chapterId: 'ISA-40', verseNumber: 28 },
  ],
  86: [
    { label: 'Psalm 8:3–4', chapterId: 'PSA-8', verseNumber: 3 },
    { label: 'Psalm 19:1', chapterId: 'PSA-19', verseNumber: 1 },
    { label: '1 Thessalonians 4:16', chapterId: '1TH-4', verseNumber: 16 },
  ],
  92: [
    { label: 'Genesis 1:1', chapterId: 'GEN-1', verseNumber: 1 },
    { label: 'Psalm 19:1–4', chapterId: 'PSA-19', verseNumber: 1 },
  ],
  100: [
    { label: 'Lamentations 3:22–23', chapterId: 'LAM-3', verseNumber: 22 },
    { label: 'James 1:17', chapterId: 'JAS-1', verseNumber: 17 },
  ],
  108: [
    { label: 'Ephesians 2:8–9', chapterId: 'EPH-2', verseNumber: 8 },
    { label: '2 Corinthians 12:9', chapterId: '2CO-12', verseNumber: 9 },
  ],
  109: [
    { label: 'Romans 5:20', chapterId: 'ROM-5', verseNumber: 20 },
    { label: '1 John 1:7', chapterId: '1JN-1', verseNumber: 7 },
  ],
  154: [
    { label: 'Galatians 6:14', chapterId: 'GAL-6', verseNumber: 14 },
    { label: 'Philippians 3:7–8', chapterId: 'PHP-3', verseNumber: 7 },
  ],
  181: [
    { label: '1 Peter 5:7', chapterId: '1PE-5', verseNumber: 7 },
    { label: 'Hebrews 4:15', chapterId: 'HEB-4', verseNumber: 15 },
  ],
  183: [
    { label: 'John 14:2–3', chapterId: 'JHN-14', verseNumber: 2 },
    { label: 'Matthew 11:28', chapterId: 'MAT-11', verseNumber: 28 },
  ],
  195: [
    { label: 'Psalm 23:1–3', chapterId: 'PSA-23', verseNumber: 1 },
    { label: 'John 10:11', chapterId: 'JHN-10', verseNumber: 11 },
  ],
  202: [
    { label: 'Psalm 45:3–4', chapterId: 'PSA-45', verseNumber: 3 },
    { label: 'Revelation 1:7', chapterId: 'REV-1', verseNumber: 7 },
  ],
  213: [
    { label: 'John 14:3', chapterId: 'JHN-14', verseNumber: 3 },
    { label: '1 Thessalonians 4:16–17', chapterId: '1TH-4', verseNumber: 16 },
  ],
  214: [
    { label: 'Revelation 22:20', chapterId: 'REV-22', verseNumber: 20 },
    { label: 'Matthew 24:30', chapterId: 'MAT-24', verseNumber: 30 },
  ],
  248: [
    { label: '1 John 4:19', chapterId: '1JN-4', verseNumber: 19 },
    { label: 'Acts 4:12', chapterId: 'ACT-4', verseNumber: 12 },
  ],
  272: [
    { label: 'Psalm 119:105', chapterId: 'PSA-119', verseNumber: 105 },
    { label: '2 Timothy 3:16', chapterId: '2TI-3', verseNumber: 16 },
  ],
  286: [
    { label: 'Psalm 119:18', chapterId: 'PSA-119', verseNumber: 18 },
    { label: 'John 6:35', chapterId: 'JHN-6', verseNumber: 35 },
  ],
  304: [
    { label: 'Jude 1:3', chapterId: 'JUD-1', verseNumber: 3 },
    { label: 'Hebrews 11:1', chapterId: 'HEB-11', verseNumber: 1 },
  ],
  318: [
    { label: 'Psalm 51:7', chapterId: 'PSA-51', verseNumber: 7 },
    { label: 'Isaiah 1:18', chapterId: 'ISA-1', verseNumber: 18 },
  ],
  330: [
    { label: 'Matthew 16:24', chapterId: 'MAT-16', verseNumber: 24 },
    { label: 'Romans 12:1', chapterId: 'ROM-12', verseNumber: 1 },
  ],
  334: [
    { label: 'Matthew 10:37', chapterId: 'MAT-10', verseNumber: 37 },
    { label: 'Luke 9:23', chapterId: 'LUK-9', verseNumber: 23 },
  ],
  348: [
    { label: 'Ephesians 2:20', chapterId: 'EPH-2', verseNumber: 20 },
    { label: '1 Corinthians 3:11', chapterId: '1CO-3', verseNumber: 11 },
  ],
  388: [
    { label: 'Exodus 20:8–11', chapterId: 'EXO-20', verseNumber: 8 },
    { label: 'Isaiah 58:13–14', chapterId: 'ISA-58', verseNumber: 13 },
  ],
  412: [
    { label: 'Daniel 8:14', chapterId: 'DAN-8', verseNumber: 14 },
    { label: 'Hebrews 8:1–2', chapterId: 'HEB-8', verseNumber: 1 },
  ],
  422: [
    { label: 'Isaiah 6:8', chapterId: 'ISA-6', verseNumber: 8 },
    { label: 'Matthew 28:19–20', chapterId: 'MAT-28', verseNumber: 19 },
  ],
  462: [
    { label: 'Hebrews 10:22', chapterId: 'HEB-10', verseNumber: 22 },
    { label: '1 John 5:13', chapterId: '1JN-5', verseNumber: 13 },
  ],
  495: [
    { label: 'Psalm 73:28', chapterId: 'PSA-73', verseNumber: 28 },
    { label: 'James 4:8', chapterId: 'JAS-4', verseNumber: 8 },
  ],
  506: [
    { label: 'Psalm 46:1–2', chapterId: 'PSA-46', verseNumber: 1 },
    { label: 'Proverbs 18:10', chapterId: 'PRO-18', verseNumber: 10 },
  ],
  522: [
    { label: 'Matthew 7:24–25', chapterId: 'MAT-7', verseNumber: 24 },
    { label: '1 Corinthians 3:11', chapterId: '1CO-3', verseNumber: 11 },
  ],
  524: [
    { label: 'Proverbs 3:5–6', chapterId: 'PRO-3', verseNumber: 5 },
    { label: 'John 14:1', chapterId: 'JHN-14', verseNumber: 1 },
  ],
  530: [
    { label: 'Psalm 23:4', chapterId: 'PSA-23', verseNumber: 4 },
    { label: 'Colossians 2:14', chapterId: 'COL-2', verseNumber: 14 },
  ],
  545: [
    { label: 'John 10:14', chapterId: 'JHN-10', verseNumber: 14 },
    { label: 'Isaiah 40:11', chapterId: 'ISA-40', verseNumber: 11 },
  ],
  552: [
    { label: 'Psalm 23:1–6', chapterId: 'PSA-23', verseNumber: 1 },
  ],
  590: [
    { label: 'John 14:15', chapterId: 'JHN-14', verseNumber: 15 },
    { label: '1 Samuel 15:22', chapterId: '1SA-15', verseNumber: 22 },
  ],
  633: [
    { label: 'Revelation 21:1–4', chapterId: 'REV-21', verseNumber: 1 },
    { label: '1 John 3:2', chapterId: '1JN-3', verseNumber: 2 },
  ],
  656: [
    { label: '1 Corinthians 13:4–7', chapterId: '1CO-13', verseNumber: 4 },
    { label: 'Genesis 2:24', chapterId: 'GEN-2', verseNumber: 24 },
  ],
  695: [
    { label: 'Psalm 150:6', chapterId: 'PSA-150', verseNumber: 6 },
    { label: 'Psalm 100:1–2', chapterId: 'PSA-100', verseNumber: 1 },
  ],
};

const SECTION_DEFAULT_LINKS: Record<number, HymnScriptureLink[]> = {
  1: [
    { label: 'Psalm 100:1–5', chapterId: 'PSA-100', verseNumber: 1 },
    { label: 'Psalm 95:6', chapterId: 'PSA-95', verseNumber: 6 },
  ],
  2: [
    { label: 'Matthew 28:19', chapterId: 'MAT-28', verseNumber: 19 },
    { label: '2 Corinthians 13:14', chapterId: '2CO-13', verseNumber: 14 },
  ],
  3: [
    { label: 'Genesis 1:1', chapterId: 'GEN-1', verseNumber: 1 },
    { label: 'Psalm 103:13', chapterId: 'PSA-103', verseNumber: 13 },
  ],
  4: [
    { label: 'John 1:1–14', chapterId: 'JHN-1', verseNumber: 1 },
    { label: 'Philippians 2:5–11', chapterId: 'PHP-2', verseNumber: 5 },
  ],
  5: [
    { label: 'John 14:26', chapterId: 'JHN-14', verseNumber: 26 },
    { label: 'Acts 2:1–4', chapterId: 'ACT-2', verseNumber: 1 },
  ],
  6: [
    { label: 'Psalm 119:105', chapterId: 'PSA-119', verseNumber: 105 },
    { label: '2 Timothy 3:16', chapterId: '2TI-3', verseNumber: 16 },
  ],
  7: [
    { label: 'John 3:16', chapterId: 'JHN-3', verseNumber: 16 },
    { label: 'Romans 5:8', chapterId: 'ROM-5', verseNumber: 8 },
  ],
  8: [
    { label: 'Matthew 16:18', chapterId: 'MAT-16', verseNumber: 18 },
    { label: 'Ephesians 4:4–6', chapterId: 'EPH-4', verseNumber: 4 },
  ],
  9: [
    { label: 'Exodus 20:8–11', chapterId: 'EXO-20', verseNumber: 8 },
    { label: 'Revelation 14:6–12', chapterId: 'REV-14', verseNumber: 6 },
  ],
  10: [
    { label: 'Revelation 10:11', chapterId: 'REV-10', verseNumber: 11 },
    { label: 'Hebrews 10:37', chapterId: 'HEB-10', verseNumber: 37 },
  ],
  11: [
    { label: 'Galatians 5:22–23', chapterId: 'GAL-5', verseNumber: 22 },
    { label: 'Philippians 4:13', chapterId: 'PHP-4', verseNumber: 13 },
  ],
  12: [
    { label: 'Joshua 24:15', chapterId: 'JOS-24', verseNumber: 15 },
    { label: 'Deuteronomy 6:6–7', chapterId: 'DEU-6', verseNumber: 6 },
  ],
  13: [
    { label: 'Psalm 19:14', chapterId: 'PSA-19', verseNumber: 14 },
    { label: 'Numbers 6:24–26', chapterId: 'NUM-6', verseNumber: 24 },
  ],
};

export function getHymnScriptureLinks(hymnNumber: number, sectionId: number): HymnScriptureLink[] {
  return DIRECT_HYMN_LINKS[hymnNumber] ?? SECTION_DEFAULT_LINKS[sectionId] ?? SECTION_DEFAULT_LINKS[1];
}
