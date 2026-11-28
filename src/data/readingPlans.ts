export interface ReadingPlanDay {
  day: number;
  title: string;
  chapterId: string;
  passageLabel: string;
  reflection: string;
}

export interface ReadingPlan {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  days: ReadingPlanDay[];
}

export const READING_PLANS: ReadingPlan[] = [
  {
    id: 'foundations-sda-14',
    title: 'Pillars of Faith & Sabbath',
    subtitle: 'Creation, Covenant, Sanctuary, Hope & the New Earth',
    badge: '14 Days',
    days: [
      { day: 1, title: 'God Speaks Light', chapterId: 'GEN-1', passageLabel: 'Genesis 1', reflection: 'Notice how order, beauty, and humanity flow from the spoken word.' },
      { day: 2, title: 'The First Sabbath Rest', chapterId: 'GEN-2', passageLabel: 'Genesis 2', reflection: 'Rest was blessed and sanctified before sin ever entered the world.' },
      { day: 3, title: 'The Ten Words of Freedom', chapterId: 'EXO-20', passageLabel: 'Exodus 20', reflection: 'Remember the Sabbath day as a weekly memorial of Creator and Redeemer.' },
      { day: 4, title: 'Healer of Every Generation', chapterId: 'PSA-91', passageLabel: 'Psalm 91', reflection: 'Dwelling in the shelter of the Most High brings quiet confidence.' },
      { day: 5, title: 'Faithfulness Every Morning', chapterId: 'LAM-3', passageLabel: 'Lamentations 3', reflection: 'Great is His faithfulness even in the darkest chapters of grief.' },
      { day: 6, title: 'The True Fast & Sabbath Delight', chapterId: 'ISA-58', passageLabel: 'Isaiah 58', reflection: 'Worship and compassion belong side by side.' },
      { day: 7, title: 'A Kingdom That Will Not Pass', chapterId: 'DAN-7', passageLabel: 'Daniel 7', reflection: 'History moves toward vindication and the everlasting kingdom.' },
      { day: 8, title: 'Lord of the Sabbath', chapterId: 'MRK-2', passageLabel: 'Mark 2', reflection: 'The Sabbath was made for humanity—a day for healing and mercy.' },
      { day: 9, title: 'I Will Come Again', chapterId: 'JHN-14', passageLabel: 'John 14', reflection: 'Let not your heart be troubled; Christ prepares a place for you.' },
      { day: 10, title: 'More Than Conquerors', chapterId: 'ROM-8', passageLabel: 'Romans 8', reflection: 'Nothing in all creation can separate us from the love of God.' },
      { day: 11, title: 'Sabbath Rest Remains', chapterId: 'HEB-4', passageLabel: 'Hebrews 4', reflection: 'We cease from earning salvation and rest in Christ’s finished work.' },
      { day: 12, title: 'The Great Cloud of Witnesses', chapterId: 'HEB-11', passageLabel: 'Hebrews 11', reflection: 'Faith looks forward to a city whose builder and maker is God.' },
      { day: 13, title: 'The Everlasting Gospel', chapterId: 'REV-14', passageLabel: 'Revelation 14', reflection: 'Worship Him who made heaven, earth, the sea, and springs of water.' },
      { day: 14, title: 'All Things Made New', chapterId: 'REV-21', passageLabel: 'Revelation 21', reflection: 'God Himself dwells with His people, wiping away every tear.' },
    ],
  },
  {
    id: 'psalms-wisdom-14',
    title: 'Psalms & Quiet Wisdom',
    subtitle: 'Songs for worship, anxiety, gratitude, and daily guidance',
    badge: '14 Days',
    days: [
      { day: 1, title: 'Two Paths Before Us', chapterId: 'PSA-1', passageLabel: 'Psalm 1', reflection: 'Planted by streams of water, bearing fruit in season.' },
      { day: 2, title: 'Crowned with Glory', chapterId: 'PSA-8', passageLabel: 'Psalm 8', reflection: 'Wonder under the night sky.' },
      { day: 3, title: 'The Heavens Declare', chapterId: 'PSA-19', passageLabel: 'Psalm 19', reflection: 'Creation above and Scripture within reveal the same Lord.' },
      { day: 4, title: 'Beside Still Waters', chapterId: 'PSA-23', passageLabel: 'Psalm 23', reflection: 'The Shepherd stays closest inside the valley of shadow.' },
      { day: 5, title: 'Whom Shall I Fear?', chapterId: 'PSA-27', passageLabel: 'Psalm 27', reflection: 'Wait for the Lord; let your heart take courage.' },
      { day: 6, title: 'A Very Present Help', chapterId: 'PSA-46', passageLabel: 'Psalm 46', reflection: 'Be still, and know that I am God.' },
      { day: 7, title: 'Create in Me a Clean Heart', chapterId: 'PSA-51', passageLabel: 'Psalm 51', reflection: 'Honest repentance meets extravagant mercy.' },
      { day: 8, title: 'Like a Deer for Streams', chapterId: 'PSA-42', passageLabel: 'Psalm 42', reflection: 'Bringing honest longing straight into prayer.' },
      { day: 9, title: 'Bless the Lord, O My Soul', chapterId: 'PSA-103', passageLabel: 'Psalm 103', reflection: 'Forget none of His benefits—compassionate and slow to anger.' },
      { day: 10, title: 'Search Me and Know Me', chapterId: 'PSA-139', passageLabel: 'Psalm 139', reflection: 'Fully known, never abandoned.' },
      { day: 11, title: 'Trust With All Your Heart', chapterId: 'PRO-3', passageLabel: 'Proverbs 3', reflection: 'In all your ways acknowledge Him, and He will direct your paths.' },
      { day: 12, title: 'Guard Your Heart', chapterId: 'PRO-4', passageLabel: 'Proverbs 4', reflection: 'The path of the righteous shines brighter until full day.' },
      { day: 13, title: 'A Time for Everything', chapterId: 'ECC-3', passageLabel: 'Ecclesiastes 3', reflection: 'He has made everything beautiful in its time.' },
      { day: 14, title: 'Let Everything Praise', chapterId: 'PSA-150', passageLabel: 'Psalm 150', reflection: 'Closing the songbook with pure thanksgiving.' },
    ],
  },
  {
    id: 'gospels-30',
    title: 'Walk With Jesus',
    subtitle: 'Key chapters from Matthew, Mark, Luke & John',
    badge: '30 Days',
    days: [
      { day: 1, title: 'The Word Became Flesh', chapterId: 'JHN-1', passageLabel: 'John 1', reflection: 'Light shining in darkness, full of grace and truth.' },
      { day: 2, title: 'Shepherds & the Manger', chapterId: 'LUK-2', passageLabel: 'Luke 2', reflection: 'Good news of great joy for all people.' },
      { day: 3, title: 'Baptism & Wilderness', chapterId: 'MAT-4', passageLabel: 'Matthew 4', reflection: 'Answering temptation with Scripture.' },
      { day: 4, title: 'The Beatitudes', chapterId: 'MAT-5', passageLabel: 'Matthew 5', reflection: 'Blessed are the meek, the merciful, and the peacemakers.' },
      { day: 5, title: 'Prayer & Anxiety', chapterId: 'MAT-6', passageLabel: 'Matthew 6', reflection: 'Look at the birds of the air; seek first His kingdom.' },
      { day: 6, title: 'House on the Rock', chapterId: 'MAT-7', passageLabel: 'Matthew 7', reflection: 'Hearing and doing the words of Jesus.' },
      { day: 7, title: 'Born From Above', chapterId: 'JHN-3', passageLabel: 'John 3', reflection: 'For God so loved the world.' },
      { day: 8, title: 'Living Water at the Well', chapterId: 'JHN-4', passageLabel: 'John 4', reflection: 'Crossing barriers with grace and truth.' },
      { day: 9, title: 'Peace, Be Still', chapterId: 'MRK-4', passageLabel: 'Mark 4', reflection: 'Even the wind and the sea obey Him.' },
      { day: 10, title: 'Touch of Healing', chapterId: 'MRK-5', passageLabel: 'Mark 5', reflection: 'Restoring dignity, sanity, and life.' },
      { day: 11, title: 'Five Loaves & Two Fish', chapterId: 'JHN-6', passageLabel: 'John 6', reflection: 'Jesus is the Bread of Life.' },
      { day: 12, title: 'Walking on the Waves', chapterId: 'MAT-14', passageLabel: 'Matthew 14', reflection: 'Take heart; it is I, do not be afraid.' },
      { day: 13, title: 'The Good Samaritan', chapterId: 'LUK-10', passageLabel: 'Luke 10', reflection: 'Who is my neighbor? The one who shows mercy.' },
      { day: 14, title: 'The Good Shepherd', chapterId: 'JHN-10', passageLabel: 'John 10', reflection: 'My sheep hear My voice, and I know them.' },
      { day: 15, title: 'Lazarus, Come Out!', chapterId: 'JHN-11', passageLabel: 'John 11', reflection: 'Jesus wept—and proved He is the Resurrection and the Life.' },
      { day: 16, title: 'Lost Sheep & Prodigal Son', chapterId: 'LUK-15', passageLabel: 'Luke 15', reflection: 'Heaven rejoices over one sinner who comes home.' },
      { day: 17, title: 'Welcome at the Table', chapterId: 'LUK-19', passageLabel: 'Luke 19', reflection: 'Zacchaeus climbs a tree and meets seeking grace.' },
      { day: 18, title: 'Washing Feet', chapterId: 'JHN-13', passageLabel: 'John 13', reflection: 'Greatness measured by a basin and a towel.' },
      { day: 19, title: 'The Way, Truth & Life', chapterId: 'JHN-14', passageLabel: 'John 14', reflection: 'Peace I leave with you; My peace I give to you.' },
      { day: 20, title: 'Abide in the Vine', chapterId: 'JHN-15', passageLabel: 'John 15', reflection: 'Apart from Me you can do nothing; abide in My love.' },
      { day: 21, title: 'That They May Be One', chapterId: 'JHN-17', passageLabel: 'John 17', reflection: 'Jesus prays directly for future believers—including us.' },
      { day: 22, title: 'Watch & Pray in Gethsemane', chapterId: 'MAT-26', passageLabel: 'Matthew 26', reflection: 'Not as I will, but as You will.' },
      { day: 23, title: 'It Is Finished', chapterId: 'JHN-19', passageLabel: 'John 19', reflection: 'The debt is paid in full.' },
      { day: 24, title: 'He Is Not Here; He Is Risen', chapterId: 'LUK-24', passageLabel: 'Luke 24', reflection: 'Hearts burning on the road to Emmaus.' },
      { day: 25, title: 'By the Sea of Galilee', chapterId: 'JHN-21', passageLabel: 'John 21', reflection: 'Breakfast on the shore and Peter’s threefold restoration.' },
      { day: 26, title: 'Go Into All the World', chapterId: 'MAT-28', passageLabel: 'Matthew 28', reflection: 'Lo, I am with you always, even to the end of the age.' },
      { day: 27, title: 'A Kingdom Not of This World', chapterId: 'JHN-18', passageLabel: 'John 18', reflection: 'Truth standing calmly before earthly power.' },
      { day: 28, title: 'The Blind Man Sees', chapterId: 'JHN-9', passageLabel: 'John 9', reflection: 'One thing I know: though I was blind, now I see.' },
      { day: 29, title: 'Come to Me, All Who Labor', chapterId: 'MAT-11', passageLabel: 'Matthew 11', reflection: 'My yoke is easy and My burden is light.' },
      { day: 30, title: 'Thomas’s Confession', chapterId: 'JHN-20', passageLabel: 'John 20', reflection: 'Blessed are those who have not seen and yet have believed.' },
    ],
  },
  {
    id: 'redemption-arc-21',
    title: 'Story of Redemption',
    subtitle: 'From Eden lost to Eden restored in 21 milestone chapters',
    badge: '21 Days',
    days: [
      { day: 1, title: 'In the Beginning', chapterId: 'GEN-1', passageLabel: 'Genesis 1', reflection: 'God sees all He made—very good.' },
      { day: 2, title: 'Promise After the Fall', chapterId: 'GEN-3', passageLabel: 'Genesis 3', reflection: 'Even in judgment, God clothes Adam and Eve and promises rescue.' },
      { day: 3, title: 'Rainbow Covenant', chapterId: 'GEN-9', passageLabel: 'Genesis 9', reflection: 'God’s faithfulness stretches across the sky.' },
      { day: 4, title: 'Call of Abraham', chapterId: 'GEN-12', passageLabel: 'Genesis 12', reflection: 'Through your family every nation on earth will be blessed.' },
      { day: 5, title: 'Through the Red Sea', chapterId: 'EXO-14', passageLabel: 'Exodus 14', reflection: 'Stand still and see the salvation of the Lord.' },
      { day: 6, title: 'Daily Bread in the Desert', chapterId: 'EXO-16', passageLabel: 'Exodus 16', reflection: 'Learning daily trust before Sabbath abundance.' },
      { day: 7, title: 'Your People, My People', chapterId: 'RUT-1', passageLabel: 'Ruth 1', reflection: 'Loyal kindness carries redemption toward Bethlehem.' },
      { day: 8, title: 'The Battle Is the Lord’s', chapterId: '1SA-17', passageLabel: '1 Samuel 17', reflection: 'Courage grounded in who God is, not armor.' },
      { day: 9, title: 'The Good Shepherd', chapterId: 'PSA-23', passageLabel: 'Psalm 23', reflection: 'Anointed table and mercy following us all our days.' },
      { day: 10, title: 'Pierced for Our Transgressions', chapterId: 'ISA-53', passageLabel: 'Isaiah 53', reflection: 'Centuries before Calvary, Isaiah sketches the Suffering Servant.' },
      { day: 11, title: 'Faithful in the Furnace', chapterId: 'DAN-3', passageLabel: 'Daniel 3', reflection: 'A fourth figure walks inside the fire with them.' },
      { day: 12, title: 'Mercy for Nineveh', chapterId: 'JON-4', passageLabel: 'Jonah 4', reflection: 'God’s compassion stretches further than human borders.' },
      { day: 13, title: 'Good Tidings of Great Joy', chapterId: 'LUK-2', passageLabel: 'Luke 2', reflection: 'Heaven’s choir sings over humble shepherds.' },
      { day: 14, title: 'Triumph Over the Grave', chapterId: 'JHN-20', passageLabel: 'John 20', reflection: 'Resurrection turns sorrow into witness.' },
      { day: 15, title: 'The Spirit Poured Out', chapterId: 'ACT-2', passageLabel: 'Acts 2', reflection: 'The church is born in prayer and community.' },
      { day: 16, title: 'Justified by Faith', chapterId: 'ROM-5', passageLabel: 'Romans 5', reflection: 'Peace with God through our Lord Jesus Christ.' },
      { day: 17, title: 'The Way of Love', chapterId: '1CO-13', passageLabel: '1 Corinthians 13', reflection: 'Faith, hope, love—and the greatest is love.' },
      { day: 18, title: 'Saved by Grace', chapterId: 'EPH-2', passageLabel: 'Ephesians 2', reflection: 'Created in Christ Jesus for good works.' },
      { day: 19, title: 'Hope Beyond Sorrow', chapterId: '1TH-4', passageLabel: '1 Thessalonians 4', reflection: 'Encourage one another with the blessed hope.' },
      { day: 20, title: 'Worthy Is the Lamb', chapterId: 'REV-5', passageLabel: 'Revelation 5', reflection: 'Every creature in heaven and earth joins the song.' },
      { day: 21, title: 'The Tree of Life Restored', chapterId: 'REV-22', passageLabel: 'Revelation 22', reflection: 'They shall see His face, and His name shall be on their foreheads.' },
    ],
  },
];
