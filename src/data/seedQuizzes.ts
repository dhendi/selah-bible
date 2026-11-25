import type { QuizQuestion } from '../types/bible';

export const SEED_QUIZZES: Record<string, QuizQuestion[]> = {
  'gen-1': [
    {
      id: 'gen-q1',
      passageId: 'GEN-1',
      passageRef: 'Genesis 1:1',
      question: 'What does the Hebrew verb "bara" (created) uniquely signify in Genesis 1:1?',
      options: [
        'A human artisan carving raw materials into idols',
        'God exclusively bringing novel existence and life into being from nothing',
        'A natural evolutionary collision of chaotic celestial matter',
        'An angel supervising the construction of the earth',
      ],
      correctIndex: 1,
      explanation:
        'In biblical Hebrew, the verb "bara" is used with only one subject in all of Scripture: God alone. It denotes miraculous divine origination ex nihilo (out of nothing).',
      takeaway: 'God does not reshape old rubble; He speaks new life into being.',
    },
    {
      id: 'gen-q2',
      passageId: 'GEN-1',
      passageRef: 'Genesis 1:1',
      question: 'The Hebrew name "Elohim" used for God is grammatically plural. What does this grammatical form convey?',
      options: [
        'A pantheon of multiple equal gods sharing authority',
        'A plural of majesty and supreme sovereign fullness',
        'An ancient scribal spelling error',
        'A title used exclusively for human judges',
      ],
      correctIndex: 1,
      explanation:
        'In Hebrew grammar, Elohim is a "plural of majesty" (pluralis excellentiae), expressing the unlimited power, majesty, and creative fullness of the one true God.',
      takeaway: 'Elohim signifies the infinite richness of God’s majesty.',
    },
    {
      id: 'gen-q3',
      passageId: 'GEN-1',
      passageRef: 'Genesis 1:3',
      question: 'How did God bring light into existence on Day 1?',
      options: [
        'By striking cosmic lightning onto the primordial waters',
        'By merely speaking: "Let there be light," and it existed',
        'By igniting the physical sun and moon first',
        'By gathering heat from nearby stars',
      ],
      correctIndex: 1,
      explanation:
        'God spoke light into existence with effortless divine power. The celestial bodies (sun and moon) are not appointed until Day 4, showing God Himself is the ultimate source of light.',
      takeaway: 'God’s word possesses creative authority to banish darkness instantly.',
    },
  ],

  'exo-16': [
    {
      id: 'exo-q1',
      passageId: 'EXO-16',
      passageRef: 'Exodus 16:15',
      question: 'What does the word "Manna" literally mean in the original Hebrew text?',
      options: [
        '"Bread of the desert"',
        '"What is it?" (Man hu)',
        '"Sweet coriander seed"',
        '"Angel food"',
      ],
      correctIndex: 1,
      explanation:
        'When the Israelites first saw the thin white frost-like flakes on the desert floor, they asked each other in astonishment, "Man hu?" ("What is it?"). The name stuck as a perpetual reminder of God’s mysterious provision.',
      takeaway: 'God often answers our prayers in ways so surprising we ask "What is it?"',
    },
    {
      id: 'exo-q2',
      passageId: 'EXO-16',
      passageRef: 'Exodus 16:13-14',
      question: 'In what geographical region was Israel camping when God first rained down manna?',
      options: [
        'The Valley of Elah',
        'The Wilderness of Sin (between Elim and Mount Sinai)',
        'The plains of Jericho',
        'The Nile River Delta in Goshen',
      ],
      correctIndex: 1,
      explanation:
        'Israel entered the Wilderness of Sin exactly one month after leaving Egypt, having exhausted their portable rations. In this arid limestone wilderness, God proved His daily faithfulness.',
      takeaway: 'The barren wilderness is where God proves our true provider is not Egypt, but Him.',
    },
    {
      id: 'exo-q3',
      passageId: 'EXO-16',
      passageRef: 'Exodus 16:15',
      question: 'What core spiritual lesson did God intend to teach Israel through the daily gathering of manna?',
      options: [
        'To stockpile food in large barns for future security',
        'To trust Him day-by-day rather than hoarding',
        'To rely exclusively on their own hunting skills',
        'To return to the abundant fleshpots of Egypt',
      ],
      correctIndex: 1,
      explanation:
        'Manna could not be hoarded overnight (it spoiled with worms, except on Friday for the Sabbath). Deuteronomy 8:3 and Jesus in Matthew 6 remind us that man lives by every word from God’s mouth, trusting Him for daily bread.',
      takeaway: 'Faith is not a 10-year stockpile; it is trusting God for today’s bread today.',
    },
  ],

  'gen-patriarchs': [
    {
      id: 'gen-pat-q1',
      passageId: 'GEN-15',
      passageRef: 'Genesis 15:6',
      question: 'When Abraham looked up at the night stars and trusted God’s promise, how did God respond?',
      options: [
        'God demanded Abraham build a stone temple first',
        'God credited Abraham’s simple belief as righteousness',
        'God told Abraham to wait 100 years in Egypt',
        'God changed Abraham’s name to Israel',
      ],
      correctIndex: 1,
      explanation:
        'Genesis 15:6 is the cornerstone verse quoted in Romans 4 and Galatians 3: right standing with God rests on trusting His promise, not human perfection.',
      takeaway: 'Faith means leaning your weight on God’s word even before seeing the outcome.',
    },
    {
      id: 'gen-pat-q2',
      passageId: 'GEN-28',
      passageRef: 'Genesis 28:15–19',
      question: 'What did Jacob rename the hillside where he dreamed of angels climbing a stairway to heaven?',
      options: [
        'Babylon ("Confusion")',
        'Bethel ("House of God")',
        'Sinai ("Thorny Bush")',
        'Gomorrah',
      ],
      correctIndex: 1,
      explanation:
        'Waking up in awe from his stone pillow, Jacob realized "God is in this place" and named it Bethel—House of God.',
      takeaway: 'Even in lonely wilderness nights, God meets travelers with His presence.',
    },
    {
      id: 'gen-pat-q3',
      passageId: 'GEN-50',
      passageRef: 'Genesis 50:20',
      question: 'How does Joseph summarize his brothers’ betrayal and his years in Egypt at the end of Genesis?',
      options: [
        '"Vengeance belongs to the strongest ruler in Egypt"',
        '"You meant evil against me, but God meant it for good"',
        '"Forget the past and return to Mesopotamia"',
        '"Only the eldest brother deserves inheritance"',
      ],
      correctIndex: 1,
      explanation:
        'Genesis 50:20 captures the overarching message of Genesis: God faithfully weaves human brokenness into life-saving redemption.',
      takeaway: 'Nothing wasted or broken in your past is beyond God’s redeeming skill.',
    },
  ],

  'exo-sinai': [
    {
      id: 'exo-sinai-q1',
      passageId: 'EXO-3',
      passageRef: 'Exodus 3:14',
      question: 'At the Burning Bush, what covenant name did God reveal to Moses ("I AM WHO I AM")?',
      options: [
        'El Shaddai',
        'Yahweh (YHWH)',
        'Adonai',
        'Elohim',
      ],
      correctIndex: 1,
      explanation:
        'God connected "Ehyeh" ("I AM / I WILL BE") to His personal covenant name YHWH (Yahweh)—signifying eternal self-existence and faithful presence.',
      takeaway: 'The Great I AM walks beside us when we feel inadequate.',
    },
    {
      id: 'exo-sinai-q2',
      passageId: 'EXO-20',
      passageRef: 'Exodus 20:2',
      question: 'How do the Ten Commandments begin before God lists a single command?',
      options: [
        'With a threat of exile if Israel disobeys',
        'With a reminder of grace: "I am Yahweh, who brought you out of slavery"',
        'With detailed instructions for building the bronze altar',
        'With a census of the twelve tribes',
      ],
      correctIndex: 1,
      explanation:
        'Law follows deliverance! God rescued Israel first by sheer grace, then gave ten loving boundaries so freed slaves could flourish.',
      takeaway: 'Obedience flows from already being loved and rescued, not trying to earn rescue.',
    },
    {
      id: 'exo-sinai-q3',
      passageId: 'EXO-34',
      passageRef: 'Exodus 34:6',
      question: 'When God proclaimed His character to Moses after the golden calf failure, which traits came first?',
      options: [
        'Fierce, distant, and impossible to please',
        'Merciful, gracious, slow to anger, and abundant in loving kindness',
        'Silent and hidden behind thick smoke forever',
        'Focused only on military victory',
      ],
      correctIndex: 1,
      explanation:
        'Exodus 34:6 becomes the most echoed description of God across Psalms, Prophets, and Jonah—highlighting His patient compassion.',
      takeaway: 'God’s deepest reflex toward repentant people is patient mercy.',
    },
  ],

  'lev-holiness': [
    {
      id: 'lev-q1',
      passageId: 'LEV-16',
      passageRef: 'Leviticus 16:21–30',
      question: 'On the Day of Atonement (Yom Kippur), what did the second goat ("scapegoat") symbolize?',
      options: [
        'Carrying Israel’s confessed sins far away into the wilderness',
        'A military victory parade through Egypt',
        'Paying tax tribute to neighboring nations',
        'Determining the harvest calendar',
      ],
      correctIndex: 0,
      explanation:
        'Laying hands on the goat and sending it out into the uninhabited desert vividly pictured God removing Israel’s guilt completely.',
      takeaway: 'When God forgives sin, He carries it far away so it never defines you again.',
    },
    {
      id: 'lev-q2',
      passageId: 'LEV-19',
      passageRef: 'Leviticus 19:18',
      question: 'Which command from Leviticus 19 did Jesus call the second greatest commandment?',
      options: [
        '"Avoid all salted grain offerings"',
        '"Love your neighbor as yourself"',
        '"Travel to Mount Sinai every spring"',
        '"Never wear garments of mixed wool"',
      ],
      correctIndex: 1,
      explanation:
        'In Matthew 22:39, Jesus directly quotes Leviticus 19:18—showing that Old Testament holiness centers on compassionate love for neighbors.',
      takeaway: 'True holiness shows up in fairness, kindness, and refusing grudges.',
    },
    {
      id: 'lev-q3',
      passageId: 'LEV-25',
      passageRef: 'Leviticus 25:10',
      question: 'What happened across Israel every fiftieth year during the Year of Jubilee?',
      options: [
        'Taxes were doubled to build a stone palace',
        'Debts were canceled, workers freed, and family land restored',
        'The Tabernacle was permanently closed',
        'All crops were exported to Babylon',
      ],
      correctIndex: 1,
      explanation:
        'Proclaiming liberty throughout the land, Jubilee prevented permanent generational poverty and reminded Israel that the land belonged to God.',
      takeaway: 'God’s heart beats for fresh starts, mercy over debt, and freedom.',
    },
  ],
  'num-wilderness': [
    {
      id: 'q-num-1',
      passageId: 'NUM-6',
      passageRef: 'Numbers 6:24–26',
      question: 'What three gifts does the Priestly Blessing in Numbers 6:24–26 ask God to shine over His people?',
      options: [
        'Gold, silver, and large flocks of sheep',
        'Blessing/keeping, His shining face of grace, and peace (shalom)',
        'Rain in the desert, victory trumpets, and bronze shields',
        'High walls, swift horses, and royal crowns',
      ],
      correctIndex: 1,
      explanation:
        'Aaron’s blessing puts God’s own name on the Israelites—praying for protection, radiant favor ("make his face to shine upon you"), and wholeness (shalom).',
      takeaway: 'God sends ordinary travelers forward wrapped in His blessing and peace.',
    },
    {
      id: 'q-num-2',
      passageId: 'NUM-13',
      passageRef: 'Numbers 13:30',
      question: 'At Kadesh Barnea, which two scouts urged Israel to trust God and enter Canaan despite the giants?',
      options: [
        'Korah and Dathan',
        'Nadab and Abihu',
        'Caleb and Joshua',
        'Balaam and Balak',
      ],
      correctIndex: 2,
      explanation:
        'While ten spies spread panic about fortified cities and Anakim giants, Caleb and Joshua insisted the Lord would bring them safely into the good land.',
      takeaway: 'Courageous faith sees real obstacles clearly—and measures them against a bigger God.',
    },
    {
      id: 'q-num-3',
      passageId: 'NUM-27',
      passageRef: 'Numbers 27:7',
      question: 'What did the five daughters of Zelophehad ask Moses for in Numbers 27, and how did God respond?',
      options: [
        'A golden lampstand, which Moses refused',
        'Permission to turn back to Egypt, which caused a census',
        'Their late father’s land inheritance, and God declared their plea right and changed the law',
        'A priestly robe for their uncle Eleazar',
      ],
      correctIndex: 2,
      explanation:
        'Mahlah, Noah, Hoglah, Milcah, and Tirzah stepped forward respectfully at the Tent of Meeting, and God affirmed, "The daughters of Zelophehad speak what is right."',
      takeaway: 'God welcomes honest appeals for fairness and weaves justice directly into community law.',
    },
  ],
  'deu-covenant': [
    {
      id: 'q-deu-1',
      passageId: 'DEU-6',
      passageRef: 'Deuteronomy 6:4–5',
      question: 'In the Shema (Deuteronomy 6:4–5), how does Moses call Israel to love Yahweh?',
      options: [
        'Only during spring harvest festivals',
        'With all your heart, all your soul, and all your might',
        'By building golden statues on hilltops',
        'By keeping the Torah scroll locked away silently',
      ],
      correctIndex: 1,
      explanation:
        'Jesus called Deuteronomy 6:5 the greatest commandment—inviting undivided devotion of mind, life, and everyday energy.',
      takeaway: 'Loving God belongs naturally in every ordinary conversation and rhythm of home life.',
    },
    {
      id: 'q-deu-2',
      passageId: 'DEU-8',
      passageRef: 'Deuteronomy 8:3',
      question: 'According to Deuteronomy 8:3, why did God feed Israel with manna in the desert?',
      options: [
        'To teach that people do not live by bread only, but by every word from God’s mouth',
        'Because Canaan had no grain fields',
        'To hide Israel’s campsite from Egypt',
        'Only as an emergency ration for priests',
      ],
      correctIndex: 0,
      explanation:
        'Jesus quoted Deuteronomy 8:3 during His wilderness temptation—reminding us that daily bread and spiritual life alike depend on God’s faithful word.',
      takeaway: 'Remembering how God sustained us in lean seasons guards us against pride in plenty.',
    },
    {
      id: 'q-deu-3',
      passageId: 'DEU-30',
      passageRef: 'Deuteronomy 30:19',
      question: 'As Moses closes his Moab address in Deuteronomy 30:19, what choice does he set before Israel?',
      options: [
        'Returning to Egypt or sailing to Tarshish',
        'Staying east of the Jordan forever',
        'Life and blessing versus death and curse—"therefore choose life!"',
        'Choosing a prophet from Midian instead of Joshua',
      ],
      correctIndex: 2,
      explanation:
        'Moses calls heaven and earth as witnesses and pleads with the new generation to love God, cling to Him, and choose life.',
      takeaway: 'God’s life-giving word isn’t far away—it is right in your mouth and heart to choose today.',
    },
  ],
  'jos-promised-land': [
    {
      id: 'q-jos-1',
      passageId: 'JOS-2',
      passageRef: 'Joshua 2:11–18',
      question: 'What sign did Rahab hang in her Jericho window so her household would be spared when the city fell?',
      options: [
        'A silver trumpet from Mount Sinai',
        'A scarlet cord tied in the window',
        'Twelve smooth stones from the Jordan',
        'A bronze serpent banner',
      ],
      correctIndex: 1,
      explanation:
        'After hiding the two scouts and confessing Yahweh as God in heaven and earth, Rahab hung a scarlet cord in her window—and her entire family was rescued and welcomed into Israel.',
      takeaway: 'Bold faith opens God’s rescue to everyone, even outsiders who seem farthest away.',
    },
    {
      id: 'q-jos-2',
      passageId: 'JOS-4',
      passageRef: 'Joshua 4:6–7',
      question: 'Why did Joshua instruct one representative from each tribe to carry a stone out of the dry Jordan riverbed to Gilgal?',
      options: [
        'To build a stone bridge across the Dead Sea',
        'To forge weapons against Jericho’s chariots',
        'So future children would ask, "What do these stones mean?" and hear what God did',
        'To mark Caleb’s retirement vineyard',
      ],
      correctIndex: 2,
      explanation:
        'The twelve-stone memorial turned a one-day miracle into a multi-generational conversation starter about God’s faithfulness.',
      takeaway: 'Sharing stories of past deliverance gives the next generation courage for their own rivers.',
    },
    {
      id: 'q-jos-3',
      passageId: 'JOS-24',
      passageRef: 'Joshua 24:15',
      question: 'At Shechem in Joshua 24, what famous choice did Joshua declare for himself and his household?',
      options: [
        '"We will return east of the Jordan before winter"',
        '"As for me and my house, we will serve Yahweh"',
        '"Let only the Levites keep the covenant stones"',
        '"We will wait forty more years before settling"',
      ],
      correctIndex: 1,
      explanation:
        'Standing beneath the oak at Shechem, Joshua urged Israel to put away compromises and pledged his own home wholly to Yahweh.',
      takeaway: 'Vibrant faith stays intentional—choosing daily whom we love and serve.',
    },
  ],
  'jdg-deliverers': [
    {
      id: 'q-jdg-1',
      passageId: 'JDG-4',
      passageRef: 'Judges 4:4–14',
      question: 'Who sat judging Israel under a palm tree in Ephraim and encouraged Barak to lead Israel down Mount Tabor?',
      options: [
        'Miriam the sister of Moses',
        'Deborah the prophetess',
        'Rahab of Jericho',
        'Ruth of Moab',
      ],
      correctIndex: 1,
      explanation:
        'Prophetess Deborah assured Barak that Yahweh Himself was going out before them against Sisera’s 900 iron chariots, later celebrating victory in Judges 5.',
      takeaway: 'Courageous faith multiplies when wise mentors remind us God walks out ahead.',
    },
    {
      id: 'q-jdg-2',
      passageId: 'JDG-7',
      passageRef: 'Judges 7:7–20',
      question: 'Why did God shrink Gideon’s army from 32,000 fighters down to just 300 men with jars and torches?',
      options: [
        'So Israel wouldn’t boast that their own strength saved them instead of Yahweh',
        'Because Midian had already retreated across the Nile',
        'So the rest could guard Shiloh’s barley harvest',
        'Because there were only 300 bronze swords available',
      ],
      correctIndex: 0,
      explanation:
        'In Judges 7:2, God warned Israel might say "My own hand has saved me." Three hundred watchful soldiers carrying clay jars and torches proved God won the rescue.',
      takeaway: 'God works through ordinary, fragile jars so His light shines unmistakably.',
    },
    {
      id: 'q-jdg-3',
      passageId: 'JDG-16',
      passageRef: 'Judges 16:28',
      question: 'What was Samson’s consecration from birth, and what did he do in his final moments in Gaza?',
      options: [
        'He was a king who built an ivory throne',
        'He was a Nazirite who prayed humbly for God to remember and strengthen him one final time',
        'He was a Levite scribe copying Torah scrolls',
        'He was a shepherd from Bethlehem who played the harp',
      ],
      correctIndex: 1,
      explanation:
        'Set apart as a Nazirite from Judges 13, humbled Samson cried out in sincere prayer in Judges 16:28—and God answered in mercy.',
      takeaway: 'No stumble puts us beyond honest prayer; God meets humility with fresh grace.',
    },
  ],
  'rut-chesed': [
    {
      id: 'q-rut-1',
      passageId: 'RUT-1',
      passageRef: 'Ruth 1:16–18',
      question: 'When Naomi urged her daughters-in-law to stay in Moab, what did Ruth declare?',
      options: [
        '"I will meet you after the autumn barley festival"',
        '"Wherever you go, I will go... your people shall be my people, and your God my God"',
        '"Send Boaz a letter from Bethlehem first"',
        '"Wait for me beside Mount Nebo"',
      ],
      correctIndex: 1,
      explanation:
        'Ruth expressed extraordinary loyal love (Hebrew: chesed), leaving familiarity behind to care for grieving Naomi and trust Israel’s God.',
      takeaway: 'Faithful love walks beside friends through grief rather than choosing only what is easy.',
    },
    {
      id: 'q-rut-2',
      passageId: 'RUT-2',
      passageRef: 'Ruth 2:12',
      question: 'How did Boaz honor Leviticus’s care for the poor when Ruth gleaned in his barley field?',
      options: [
        'He charged her silver for leftover stalks',
        'He protected her safety, shared roasted grain, and blessed her refuge under Yahweh’s wings',
        'He sent her to Shiloh for grain rations',
        'He told her to wait until next spring',
      ],
      correctIndex: 1,
      explanation:
        'Boaz embodied Torah generosity—instructing workers to leave extra barley sheaves and praising Ruth for sheltering under God’s wings.',
      takeaway: 'Everyday kindness is how God’s sheltering wings feel real to people around us.',
    },
    {
      id: 'q-rut-3',
      passageId: 'RUT-4',
      passageRef: 'Ruth 4:14–22',
      question: 'Who was the son born to Ruth and Boaz—and how did he connect to Israel’s future?',
      options: [
        'Obed, grandfather of King David',
        'Gideon, deliverer of Midian',
        'Samuel, prophet at Shiloh',
        'Phinehas, grandson of Aaron',
      ],
      correctIndex: 0,
      explanation:
        'Ruth and Boaz welcomed Obed, who became father of Jesse and grandfather of King David—placing a faithful Moabite widow right inside Jesus’s family tree (Matthew 1:5).',
      takeaway: 'Quiet loyalty in small towns often anchors God’s biggest redemptive chapters.',
    },
  ],
  '1sa-kingship': [
    {
      id: 'q-1sa-1',
      passageId: '1SA-3',
      passageRef: '1 Samuel 3:9–10',
      question: 'When young Samuel kept hearing his name in the night at Shiloh, what did priest Eli teach him to answer God?',
      options: [
        '"Send me back to Ramah before sunrise"',
        '"Speak, Yahweh, for your servant hears"',
        '"Bring the golden Ark to Beth Shemesh"',
        '"Tell Saul to wait seven days at Gilgal"',
      ],
      correctIndex: 1,
      explanation:
        'Eli recognized that Yahweh was calling the boy personally and coached Samuel to respond with attentive humility.',
      takeaway: 'Prayer begins with a listening heart ready to welcome God’s voice.',
    },
    {
      id: 'q-1sa-2',
      passageId: '1SA-16',
      passageRef: '1 Samuel 16:7',
      question: 'Why did God pass over David’s seven tall older brothers in Bethlehem and anoint youngest shepherd David?',
      options: [
        'Because David already commanded 400 soldiers',
        'Because "man looks at the outward appearance, but Yahweh looks at the heart"',
        'Because David lived closer to Shiloh’s gate',
        'Because Jesse forgot his eldest sons in Moab',
      ],
      correctIndex: 1,
      explanation:
        'Samuel learned that inward character, humility, and devotion to God matter infinitely more than height or outward stature.',
      takeaway: 'God sees and values faithful character even when everyone else overlooks it.',
    },
    {
      id: 'q-1sa-3',
      passageId: '1SA-25',
      passageRef: '1 Samuel 25:32',
      question: 'Who rode out with bread, figs, and wise counsel to turn David away from angry revenge against Nabal?',
      options: [
        'Abigail of Carmel',
        'Deborah of Ephraim',
        'Delilah of Sorek',
        'Naomi of Bethlehem',
      ],
      correctIndex: 0,
      explanation:
        'Prudent, courageous Abigail stepped swiftly between angry armies and reminded David of God’s promise—winning David’s heartfelt blessing for stopping bloodshed.',
      takeaway: 'Peacemakers courageously step into tension with generosity and wisdom.',
    },
  ],
  '2sa-davidic-grace': [
    {
      id: 'q-2sa-1',
      passageId: '2SA-7',
      passageRef: '2 Samuel 7:12–16',
      question: 'When King David offered to build God a cedar temple in Jerusalem, what did God promise David through prophet Nathan instead?',
      options: [
        'That David’s throne and kingdom would be established forever',
        'That David would move the capital back to Shiloh',
        'That only Levites could enter Jerusalem',
        'That David should build two golden altars in Hebron',
      ],
      correctIndex: 0,
      explanation:
        'In the Davidic Covenant (2 Samuel 7:16), God promised to build David a lasting royal house and eternal throne—ultimately fulfilled in Jesus Christ.',
      takeaway: 'Before we build anything for God, He builds unshakable promises of grace around us.',
    },
    {
      id: 'q-2sa-2',
      passageId: '2SA-9',
      passageRef: '2 Samuel 9:7–13',
      question: 'How did King David honor his covenant friendship with Jonathan toward Jonathan’s injured son Mephibosheth?',
      options: [
        'He banished him east of the Jordan River',
        'He restored Saul’s land and welcomed Mephibosheth to dine at the king’s table continually',
        'He sent him to guard En Gedi’s caves alone',
        'He asked him to wait until Solomon became king',
      ],
      correctIndex: 1,
      explanation:
        'Reaching into Lo Debar ("No-Pasture") in 2 Samuel 9, David showed God’s chesed kindness—restoring inheritance and welcoming Mephibosheth like a royal son.',
      takeaway: 'True grace invites overlooked people straight to the table of belonging.',
    },
    {
      id: 'q-2sa-3',
      passageId: '2SA-24',
      passageRef: '2 Samuel 24:24',
      question: 'Why did King David insist on paying full silver for Araunah’s threshing floor rather than taking it for free?',
      options: [
        'Because he refused to offer sacrifices to God that cost him nothing',
        'Because Araunah demanded triple tax from Judah',
        'Because Joab forbade gifts from Jerusalem farmers',
        'Because he planned to build a granary instead of an altar',
      ],
      correctIndex: 0,
      explanation:
        'David declared, "I will not offer burnt offerings to Yahweh my God which cost me nothing"—buying the exact hilltop site where Solomon’s Temple later rose.',
      takeaway: 'Sincere worship offers our best heart and care rather than leftovers.',
    },
  ],
  '1ki-wisdom-prophets': [
    {
      id: 'q-1ki-1',
      passageId: '1KI-3',
      passageRef: '1 Kings 3:5–14',
      question: 'When God appeared to young King Solomon in a dream at Gibeon, what did Solomon ask for above wealth or long life?',
      options: [
        'A larger chariot army to conquer Egypt',
        'A discerning, listening heart to govern Israel wisely',
        'Ten golden palaces along the Mediterranean coast',
        'Seven extra years before ascending the throne',
      ],
      correctIndex: 1,
      explanation:
        'Solomon humbly called himself "but a little child" and asked for lev shomea—an understanding, listening heart—pleasing God so deeply that God granted wisdom alongside honor.',
      takeaway: 'True leadership starts with listening humbly rather than grasping for power.',
    },
    {
      id: 'q-1ki-2',
      passageId: '1KI-17',
      passageRef: '1 Kings 17:6–16',
      question: 'How did God feed Elijah first by the Kerith ravine and later in Phoenician Zarephath during severe famine?',
      options: [
        'First with food carried by wild ravens, then via a widow’s jar of flour and oil that never ran dry',
        'First with manna in Galilee, then from Solomon’s hidden storehouses',
        'By sending Ahab’s royal bakery across the Jordan River',
        'Through silver coins found inside three fish in Sidon',
      ],
      correctIndex: 0,
      explanation:
        'At Kerith brook ravens brought Elijah bread and meat morning and evening; then in Zarephath an impoverished widow’s tiny flour jar sustained her household daily until rain fell.',
      takeaway: 'God’s daily faithfulness often flows through unexpected messengers and small generous hands.',
    },
    {
      id: 'q-1ki-3',
      passageId: '1KI-19',
      passageRef: '1 Kings 19:11–13',
      question: 'When exhausted prophet Elijah stood at the cave mouth on Mount Horeb after violent wind, earthquake, and fire, how did Yahweh speak?',
      options: [
        'In a thunderclap heard across all of Judah',
        'In a gentle whisper ("still small voice")',
        'Through a pillar of smoke rising from Samaria',
        'By carving fresh stone tablets beside Jordan',
      ],
      correctIndex: 1,
      explanation:
        'After feeding tired Elijah warm bread and letting him rest, God revealed Himself not in terrifying spectacle, but in qol demamah daqqah—the gentle whisper of a still small voice.',
      takeaway: 'When burnout sets in, God meets weary hearts with rest and quiet gentleness.',
    },
  ],
  '2ki-mercy-reform': [
    {
      id: 'q-2ki-1',
      passageId: '2KI-5',
      passageRef: '2 Kings 5:1–14',
      question: 'Why did Syrian commander Naaman nearly miss his healing before turning back in humility?',
      options: [
        'Because Elisha told him to cross Mount Carmel barefoot',
        'Because Elisha simply told him to wash seven times in the humble Jordan River without royal spectacle',
        'Because King Hezekiah closed Jerusalem’s gates',
        'Because his chariot broke near Dothan',
      ],
      correctIndex: 1,
      explanation:
        'Expecting dramatic hand-waving, Naaman scoffed at Jordan’s waters until his gentle servants urged him to try—revealing that God’s healing meets humility.',
      takeaway: 'Grace resists pride and shines brightest in ordinary humility.',
    },
    {
      id: 'q-2ki-2',
      passageId: '2KI-6',
      passageRef: '2 Kings 6:15–17',
      question: 'When surrounded at Dothan by enemy chariots, what did prophet Elisha pray for his terrified servant?',
      options: [
        'For thunder to flood the Kishon River',
        '“Yahweh, please open his eyes, that he may see”',
        'For eagles to carry them to Mount Horeb',
        'To strike Samaria with darkness for forty days',
      ],
      correctIndex: 1,
      explanation:
        'Elisha prayed open his helper’s eyes—showing hills full of fiery horses and chariots, teaching that those with us are more than those against us.',
      takeaway: 'Prayer opens tired eyes to God’s unseen nearness.',
    },
    {
      id: 'q-2ki-3',
      passageId: '2KI-22',
      passageRef: '2 Kings 22:8–13',
      question: 'What did workers uncover while repairing Jerusalem’s Temple during the reign of young King Josiah?',
      options: [
        'The lost Book of the Law (Torah scroll), prompting Josiah to weep and renew Judah’s covenant',
        'David’s five smooth pebbles from Elah',
        'Seven trumpets from Jericho’s walls',
        'A golden calf hidden beneath Bethel',
      ],
      correctIndex: 0,
      explanation:
        'Hearing the rediscovered Torah read aloud pierced young Josiah’s heart—sparking heartfelt repentance and Judah’s joyful Passover renewal.',
      takeaway: 'Opening God’s neglected Word with a humble heart restores whole communities.',
    },
  ],
  'job-suffering-whirlwind': [
    {
      id: 'q-job-1',
      passageId: 'JOB-1',
      passageRef: 'Job 1:21',
      question: 'After losing livestock, servants, and children in a single day, how did Job respond in worship?',
      options: [
        'He fled the land of Uz and vowed never to speak again',
        '“Yahweh gave, and Yahweh has taken away. Blessed be Yahweh’s name.”',
        'He blamed his three friends for his sudden calamity',
        'He rebuilt his house with silver mined in Edom',
      ],
      correctIndex: 1,
      explanation:
        'Job tore his robe in genuine grief yet bowed to the earth in honest worship—proving true love for God does not rest merely on earthly comfort.',
      takeaway: 'Honest tears and reverent worship can sit side by side.',
    },
    {
      id: 'q-job-2',
      passageId: 'JOB-19',
      passageRef: 'Job 19:25',
      question: 'When Eliphaz, Bildad, and Zophar insisted suffering must mean secret guilt, what radiant confession did Job proclaim in chapter 19?',
      options: [
        '“There is no hope left for mortals under the sun”',
        '“I know that my Redeemer lives, and in the end he will stand upon the earth.”',
        '“Silence is the only wisdom for kings and elders”',
        '“Only sacrifices of bulls can answer my case”',
      ],
      correctIndex: 1,
      explanation:
        'Even in deep isolation, Job looked past his critics to a living Kinsman-Redeemer (Goel) who would stand up and vindicate him.',
      takeaway: 'Even when people misunderstand you, your Redeemer lives.',
    },
    {
      id: 'q-job-3',
      passageId: 'JOB-38',
      passageRef: 'Job 38:1–7',
      question: 'How did Yahweh finally answer Job out of the whirlwind in Job 38?',
      options: [
        'By giving Job a neat legal chart explaining every tragedy',
        'By expanding Job’s vision across dawn’s stars, snow storehouses, sea bounds, and wild creation',
        'By ordering Job’s friends to write a proverb scroll',
        'By commanding rain to flood the land of Uz for forty days',
      ],
      correctIndex: 1,
      explanation:
        'Rather than offering shallow equations, God invited Job into breathtaking awe of creation—showing the vast loving wisdom guiding every corner of the universe.',
      takeaway: 'Encountering God’s majestic presence brings deeper peace than small human answers.',
    },
  ],
  'psa-praise-shepherd': [
    {
      id: 'q-psa-1',
      passageId: 'PSA-23',
      passageRef: 'Psalm 23:1–4',
      question: 'Even when walking through “the valley of the shadow of death” in Psalm 23, why does David say he fears no evil?',
      options: [
        'Because armies surround the pastures ahead of him',
        '“For you are with me. Your rod and your staff, they comfort me.”',
        'Because winter rains have already passed away',
        'Because he stays hidden inside Shiloh’s tent',
      ],
      correctIndex: 1,
      explanation:
        'Psalm 23 shifts from speaking *about* Yahweh (“He leads me”) to speaking directly *to* Him (“You are with me”) the moment shadows thicken.',
      takeaway: 'In dark valleys, God’s close presence turns fear into calm comfort.',
    },
    {
      id: 'q-psa-2',
      passageId: 'PSA-51',
      passageRef: 'Psalm 51:10–17',
      question: 'According to David’s heartfelt prayer in Psalm 51, what sacrifice will God never despise?',
      options: [
        'Ten golden bowls from Ophir',
        'A broken spirit—a broken and contrite heart',
        'Silence outside Jerusalem’s gate for seven weeks',
        'High stone pillars carved in Lebanon',
      ],
      correctIndex: 1,
      explanation:
        'Clean honesty before God matters infinitely more than outward religious performance.',
      takeaway: 'Honest repentance always meets forgiving grace.',
    },
    {
      id: 'q-psa-3',
      passageId: 'PSA-150',
      passageRef: 'Psalm 150:6',
      question: 'How does the entire five-book Psalter reach its final climax in Psalm 150?',
      options: [
        'With a quiet warning to stay silent inside the gate',
        'With trumpets, harps, tambourines, and “Let everything that has breath praise Yah!”',
        'With a census list of twelve tribes at Sinai',
        'With a map of Euphrates rivers',
      ],
      correctIndex: 1,
      explanation:
        'Beginning with honest sighs and dark laments across 150 songs, the Psalter opens wide until every breathing creature joins one joyful orchestra of Hallelujah.',
      takeaway: 'Every honest emotion can grow steadily into wholehearted praise.',
    },
  ],
  'dan-exile-kingdom': [
    {
      id: 'q-dan-1',
      passageId: 'DAN-3',
      passageRef: 'Daniel 3:17–25',
      question: 'When thrown bound into Nebuchadnezzar’s seven-times-hotter fiery furnace, what astonished the watching king?',
      options: [
        'Snow fell down from Mount Hermon to put out the coals',
        'Four men walked unbound inside the flames—and the fourth looked like a son of the gods',
        'Heavy Euphrates floodwaters washed the furnace wall away',
        'The three friends turned invisible behind copper doors',
      ],
      correctIndex: 1,
      explanation:
        'God did not always spare faithful people from entering the fire, yet walked tenderly right alongside them inside it—burning only the ropes.',
      takeaway: 'Courage declares “God is able—and even if not, we stay faithful.”',
    },
    {
      id: 'q-dan-2',
      passageId: 'DAN-6',
      passageRef: 'Daniel 6:10–22',
      question: 'When a thirty-day royal decree banned praying to anyone except King Darius, how did elderly Daniel respond?',
      options: [
        'He secretly hid inside Susa’s cedar cellar without praying',
        'He kept kneeling toward Jerusalem three times daily, praying and giving thanks just as before',
        'He resigned his office and sailed back across the Euphrates',
        'He signed a counter-petition with the royal magicians',
      ],
      correctIndex: 1,
      explanation:
        'Daniel’s quiet lifelong rhythm of prayer anchored his courage cleanly when crisis struck—and God sent an angel to shut the lions’ mouths.',
      takeaway: 'Steady daily faithfulness prepares fearless peace in sudden tests.',
    },
    {
      id: 'q-dan-3',
      passageId: 'DAN-7',
      passageRef: 'Daniel 7:13–14',
      question: 'In Daniel’s midnight vision after the four fierce sea beasts, who comes with the clouds of heaven to receive an everlasting kingdom?',
      options: [
        'Cyrus riding an ivory chariot',
        'One like a Son of Man before the Ancient of Days',
        'Four captains returning from Samaria',
        'High priest Aaron holding a bronze lamp',
      ],
      correctIndex: 1,
      explanation:
        'Jesus repeatedly adopted “Son of Man” from Daniel 7 as His favorite self-title—uniting eternal divine glory with tender human representation.',
      takeaway: 'Human empires roar briefly, while God’s gentle everlasting Kingdom stands forever.',
    },
  ],
  '1ch-temple-worship': [
    {
      id: 'q-1ch-1',
      passageId: '1CH-4',
      passageRef: '1 Chronicles 4:9–10',
      question: 'Tucked quietly inside the opening genealogies of 1 Chronicles, why was humble Jabez remembered above his brothers?',
      options: [
        'He captured Damascus with sixty golden chariots',
        'He called honestly upon the God of Israel for blessing, presence, and protection from harm—and God granted his request',
        'He carved twelve cedar pillars for Babylon',
        'He composed all 150 Psalms in Hebron',
      ],
      correctIndex: 1,
      explanation:
        'Even though his mother named him Jabez (“Sorrowful”), he looked to God in trust rather than accepting defeat—showing God notices quiet individual prayers inside long family histories.',
      takeaway: 'Past pain never closes the door to bold, humble prayer.',
    },
    {
      id: 'q-1ch-2',
      passageId: '1CH-21',
      passageRef: '1 Chronicles 21:22–26',
      question: 'When Ornan offered his threshing floor, oxen, and wood for free, why did King David insist on paying full price?',
      options: [
        'David wanted to turn the threshing floor into a royal wheat barn',
        'Because he refused to offer Yahweh burnt offerings that cost him nothing',
        'Because Levites forbade stone altars outside Hebron',
        'Because Solomon needed silver ingots for ships at Tarshish',
      ],
      correctIndex: 1,
      explanation:
        'Genuine worship gives out of wholehearted love and integrity rather than convenience—and Mount Moriah’s threshing floor became the very ground of Solomon’s Temple.',
      takeaway: 'Wholehearted gratitude never brings God leftover devotion.',
    },
    {
      id: 'q-1ch-3',
      passageId: '1CH-29',
      passageRef: '1 Chronicles 29:11–14',
      question: 'After leaders and families gave generously toward building the Temple, what truth grounded King David’s joyful prayer?',
      options: [
        'That Israel had earned favor by stone architecture alone',
        'That “all things come from You, and we have given You of Your own”',
        'That only kings are permitted to bring bronze vessels',
        'That Jerusalem walls would never need repairs',
      ],
      correctIndex: 1,
      explanation:
        '1 Chronicles closes in wonder rather than pride: generous giving overflows cheerfully when we remember every talent, breath, and resource came from God’s open hand first.',
      takeaway: 'Cheerful generosity flows naturally from grateful stewardship.',
    },
  ],
  '2ch-choir-humility': [
    {
      id: 'q-2ch-1',
      passageId: '2CH-7',
      passageRef: '2 Chronicles 7:14',
      question: 'After fire falls on Solomon’s Temple offerings, what four-step path does God promise leads to hearing, forgiving, and healing?',
      options: [
        'Build taller gold gates and hire chariots from Egypt',
        'Humble themselves, pray, seek God’s face, and turn from wicked ways',
        'Move the Ark out of Jerusalem to Mount Hermon',
        'Gather taxes every Sabbath without songs',
      ],
      correctIndex: 1,
      explanation:
        'Throughout 2 Chronicles, military strength never saves unrepentant pride, yet humble prayer immediately opens heaven’s compassionate mercy.',
      takeaway: 'Humility before God is always the open door to renewal.',
    },
    {
      id: 'q-2ch-2',
      passageId: '2CH-20',
      passageRef: '2 Chronicles 20:12–22',
      question: 'Facing a huge coalition in 2 Chronicles 20, whom did King Jehoshaphat appoint to march at the very front of Judah’s troops?',
      options: [
        'Three hundred bronze battering rams',
        'Worship singers in holy attire praising “For His lovingkindness endures forever!”',
        'Silent scouts disguised as merchants from Tyre',
        'Mounted archers from Samaria',
      ],
      correctIndex: 1,
      explanation:
        'Trusting God’s promise that “the battle is not yours, but God’s,” Jehoshaphat let joyful worship precede combat—turning threat into the Valley of Blessing.',
      takeaway: 'Worshiping before rescue arrives shows real trust in God.',
    },
    {
      id: 'q-2ch-3',
      passageId: '2CH-33',
      passageRef: '2 Chronicles 33:12–13',
      question: 'Carried in bronze shackles to Babylon after years of terrible sin, how did God respond when King Manasseh finally humbled himself and prayed?',
      options: [
        'He kept Jerusalem’s doors shut for seventy years',
        'He listened tenderly, forgave him, and brought him back to Jerusalem',
        'He sent lightning down onto Nineveh’s walls',
        'He forbade Manasseh from ever entering the courtyard',
      ],
      correctIndex: 1,
      explanation:
        'Manasseh’s unexpected forgiveness in 2 Chronicles 33 stands among Scripture’s boldest demonstrations that sincere repentance is never turned away.',
      takeaway: 'No heart is too far gone to be heard by a merciful God.',
    },
  ],
  'ezr-return-word': [
    {
      id: 'q-ezr-1',
      passageId: 'EZR-3',
      passageRef: 'Ezra 3:10–13',
      question: 'When builders laid the new Temple foundation in Ezra 3, why couldn’t bystanders distinguish shouts of joy from weeping?',
      options: [
        'Sudden hailstorms drowned out the silver trumpets',
        'Younger people cheered wildly while older elders who remembered Solomon’s first Temple wept aloud',
        'Babylonian guards locked the courtyard gates',
        'None of the Levites knew the Psalms of David',
      ],
      correctIndex: 1,
      explanation:
        'Ezra honors honest mixed grief over smaller beginnings alongside sincere praise—reminding us God welcomes both honest tears and small faithful starts.',
      takeaway: 'Never despise humble new beginnings alongside honest memories.',
    },
    {
      id: 'q-ezr-2',
      passageId: 'EZR-7',
      passageRef: 'Ezra 7:10',
      question: 'According to Ezra 7:10, in what sequence did Ezra set his heart regarding the Law of Yahweh?',
      options: [
        'Write decrees first, debate priests second, rest third',
        'Study it first, live and practice it second, and teach it third',
        'Memorize genealogies only before returning to Susa',
        'Hide scrolls inside Ecbatana until Artaxerxes arrives',
      ],
      correctIndex: 1,
      explanation:
        'Ezra’s rhythm—study -> obedience -> teaching—kept leadership humble, authentic, and life-giving.',
      takeaway: 'Real teaching grows out of practicing what we learn first.',
    },
    {
      id: 'q-ezr-3',
      passageId: 'EZR-8',
      passageRef: 'Ezra 8:21–23',
      question: 'Why did Ezra feel embarrassed to ask King Artaxerxes for armed soldiers to guard their silver caravan home?',
      options: [
        'He already boasted that “our God’s hand is on all who seek Him for good”—so he led three days of fasting at Ahava instead',
        'Susa had zero horsemen left in Persia',
        'Zerubbabel already stationed soldiers at the Euphrates bridge',
        'Silver coins were carried secretly inside olive jars',
      ],
      correctIndex: 0,
      explanation:
        'Ezra backed bold words about trusting God with earnest, humble prayer—and God delivered every family safely to Jerusalem.',
      takeaway: 'Prayer aligns our daily choices with what we profess about God.',
    },
  ],
  'neh-wall-joy': [
    {
      id: 'q-neh-1',
      passageId: 'NEH-2',
      passageRef: 'Nehemiah 2:4–8',
      question: 'When King Artaxerxes asked cupbearer Nehemiah what he wanted in the middle of serving wine, what did Nehemiah do first?',
      options: [
        'Asked for a thirty-day delay to return to Jerusalem first',
        'Prayed instantly to the God of heaven before answering the king',
        'Handed over a sealed silver check to Sanballat',
        'Resigned his palace post immediately without speaking',
      ],
      correctIndex: 1,
      explanation:
        'Nehemiah’s famous “arrow prayer” took only a heartbeat—fueled by four months of private weeping and prayer in Chapter 1.',
      takeaway: 'Habitual prayer prepares calm trust right inside sudden moments.',
    },
    {
      id: 'q-neh-2',
      passageId: 'NEH-6',
      passageRef: 'Nehemiah 6:3',
      question: 'How did Nehemiah answer four repeated invitations from Sanballat and Geshem to leave the wall for summit meetings on Ono’s plain?',
      options: [
        'He sent Ezra to negotiate taxes in Samaria',
        'He replied: “I am doing a great work, so I cannot come down!”',
        'He halted wall construction for fourteen weeks',
        'He marched armies north to Megiddo',
      ],
      correctIndex: 1,
      explanation:
        'Focus protected both his safety and mission—allowing Jerusalem’s walls to rise in just fifty-two days.',
      takeaway: 'Clear focus politely refuses distractions pulling you off purpose.',
    },
    {
      id: 'q-neh-3',
      passageId: 'NEH-8',
      passageRef: 'Nehemiah 8:10',
      question: 'As citizens wept aloud hearing Moses’s Law read clearly at the Water Gate, what encouraged them in Nehemiah 8:10?',
      options: [
        'Stop mourning, celebrate, share portions of food, for “the joy of Yahweh is your strength!”',
        'Build an extra bronze tower before winter rains',
        'Stay inside fasting silently for forty days',
        'Return sealed scrolls back to Babylon archives',
      ],
      correctIndex: 0,
      explanation:
        'Hearing God’s Word rightly understood brings forgiveness, fellowship meals shared with neighbors, and cheerful strength.',
      takeaway: 'God’s strength flows through grateful joy and shared generosity.',
    },
  ],
  'est-hidden-providence': [
    {
      id: 'q-est-1',
      passageId: 'EST-4',
      passageRef: 'Esther 4:14–16',
      question: 'Before Esther risked death by entering King Ahasuerus’s inner court uninvited, what did she ask Mordecai and Susa’s families to do with her?',
      options: [
        'Gather silver coins to bribe the royal guards',
        'Fast together for three days and three nights while she and her maids fasted too',
        'Escape silently north toward Nineveh before dawn',
        'Ask Ezra to bring scrolls from Babylon',
      ],
      correctIndex: 1,
      explanation:
        'Even though God’s name isn’t mentioned explicitly in Hebrew Esther, shared three-day fasting reveals deep hidden dependence on Heaven’s help.',
      takeaway: 'Courageous steps rest best on humble, united prayer and fasting.',
    },
    {
      id: 'q-est-2',
      passageId: 'EST-6',
      passageRef: 'Esther 6:1–11',
      question: 'On the very night Haman plotted Mordecai’s death, what ordinary event changed everything in Susa’s palace?',
      options: [
        'A sudden Euphrates flood washed away the city gate',
        'King Ahasuerus couldn’t sleep, had royal chronicles read aloud, and discovered Mordecai’s unrewarded loyalty',
        'Haman dropped his silver signet ring in the Tigris',
        'Cyrus returned to rebuild Susa’s walls',
      ],
      correctIndex: 1,
      explanation:
        'God’s hidden providence often moves through ordinary coincidences—insomnia, old records, and exact timing.',
      takeaway: 'Quiet integrity is never forgotten even when credit seems delayed.',
    },
    {
      id: 'q-est-3',
      passageId: 'EST-9',
      passageRef: 'Esther 9:22',
      question: 'When sorrow turned into gladness at the first Feast of Purim, what generous practice did Mordecai and Esther establish alongside feasting?',
      options: [
        'Sending portions of food to friends and giving gifts to the poor',
        'Closing Susa’s marble doors for forty days',
        'Melting bronze pillars into golden statues',
        'Taxing every island along the Mediterranean Sea',
      ],
      correctIndex: 0,
      explanation:
        'Purim celebrates God’s rescue by making sure neighbors in need share directly in the feast.',
      takeaway: 'True celebration always widens the table toward those in need.',
    },
  ],
  'pro-wisdom-way': [
    {
      id: 'q-pro-1',
      passageId: 'PRO-3',
      passageRef: 'Proverbs 3:5–6',
      question: 'What foundational posture does Proverbs 3:5–6 invite when leaning only on our own cleverness falls short?',
      options: [
        'Trust Yahweh with all your heart, acknowledge Him in all ways, and let Him straighten your paths',
        'Avoid speaking to friends during summer harvest',
        'Lock silver weights inside stone towers forever',
        'Move across the desert without asking counsel',
      ],
      correctIndex: 0,
      explanation:
        'Biblical wisdom never pretends human intellect holds every map—it pairs attentive thinking with wholehearted trust in God.',
      takeaway: 'Wholehearted trust invites steady direction across uncertain paths.',
    },
    {
      id: 'q-pro-2',
      passageId: 'PRO-15',
      passageRef: 'Proverbs 15:1',
      question: 'According to Proverbs 15:1, what practical tool cools down flaring anger in a tense conversation?',
      options: [
        'Raising your voice louder until crowds listen',
        'A gentle, soft answer',
        'Walking out before winter rains start',
        'Sending royal couriers to Susa',
      ],
      correctIndex: 1,
      explanation:
        'Harshness piles wood onto arguments, while calm, patient words defuse hostility without compromising truth.',
      takeaway: 'Gentle restraint shows quiet strength in heated rooms.',
    },
    {
      id: 'q-pro-3',
      passageId: 'PRO-31',
      passageRef: 'Proverbs 31:8–30',
      question: 'How do King Lemuel’s mother’s lesson and the closing poem of Proverbs 31 define true honor?',
      options: [
        'Speaking up for the voiceless, opening hands cheerfully to the poor, and living in reverence toward Yahweh',
        'Amassing tall cedar towers without neighbors',
        'Winning courtroom quarrels over tiny fences',
        'Boasting loudly before dawn about tomorrow’s crops',
      ],
      correctIndex: 0,
      explanation:
        'Charm fades and outward flash passes, while reverent wisdom overflowing into compassion for others earns lasting praise.',
      takeaway: 'Real wisdom always shows up through kindness, justice, and open hands.',
    },
  ],
  'ecc-season-creator': [
    {
      id: 'q-ecc-1',
      passageId: 'ECC-3',
      passageRef: 'Ecclesiastes 3:1–11',
      question: 'Amid life’s changing cycles of planting, weeping, and laughing, what deeper gift does Ecclesiastes 3:11 say God set inside human hearts?',
      options: [
        'A desire to hoard bronze weights in Susa',
        'Eternity—making everything fitting in its proper time even when humans cannot grasp the whole',
        'Instructions to avoid ever weeping',
        'A map of all rivers flowing into Egypt',
      ],
      correctIndex: 1,
      explanation:
        'Qohelet balances realistic limits (“can’t find out from beginning to end”) with awe: eternity inside our hearts nudges us toward trusting our Creator.',
      takeaway: 'Accepting our limits frees us to enjoy today’s season with gratitude.',
    },
    {
      id: 'q-ecc-2',
      passageId: 'ECC-4',
      passageRef: 'Ecclesiastes 4:9–12',
      question: 'According to Ecclesiastes 4:9–12, why are two companions far better than isolated solo striving?',
      options: [
        'If one falls, the other lifts them up—and a threefold cord is not quickly broken',
        'Two people never feel chilly in winter',
        'Because solitary travelers lose palace robes',
        'Two sheep double harvest taxes at Hebron',
      ],
      correctIndex: 0,
      explanation:
        'Lonely achievement rings hollow (“for whom am I working?”), while shared companionship strengthens every climb.',
      takeaway: 'Community and faithful friendship turn fragile effort into lasting strength.',
    },
    {
      id: 'q-ecc-3',
      passageId: 'ECC-12',
      passageRef: 'Ecclesiastes 12:1 & 13',
      question: 'After testing palaces, gardens, wealth, and endless questions under the sun, what clear conclusion closes Ecclesiastes?',
      options: [
        'Withdraw silently to caves on Mount Gilboa',
        'Remember your Creator, revere God, and keep His commandments',
        'Write fifty more gold proverbs for Babylon',
        'Wait for winds to stop blowing forever',
      ],
      correctIndex: 1,
      explanation:
        'Honest doubt never stays cynical—it walks out the door remembering that every fleeting day sits securely in our Creator’s hands.',
      takeaway: 'Revering God gives meaning to every ordinary breath and task.',
    },
  ],
  'sng-love-song': [
    {
      id: 'q-sng-1',
      passageId: 'SNG-2',
      passageRef: 'Song of Solomon 2:10–15',
      question: 'As winter rain clears in Song of Solomon 2, what tiny nuisance does the song urge lovers to catch early so budding joy isn’t damaged?',
      options: [
        'Giant locusts flying over Jerusalem gates',
        'The little foxes that spoil blooming vineyards',
        'Babylonian camels near En Gedi',
        'Sea storms crossing Cyprus waters',
      ],
      correctIndex: 1,
      explanation:
        'Little unresolved resentments or neglect (“little foxes”) slowly injure relationships far more often than sudden storms.',
      takeaway: 'Protect tender love by tending small daily habits kindly and early.',
    },
    {
      id: 'q-sng-2',
      passageId: 'SNG-6',
      passageRef: 'Song of Solomon 6:3',
      question: 'What simple three-part refrain sums up mutual devotion across the Song of Songs?',
      options: [
        '“Gold belongs to Tyre, silver to Egypt”',
        '“I am my beloved’s, and my beloved is mine”',
        '“Stand apart in silence above Lebanon”',
        '“Let chariots guard our spice gates”',
      ],
      correctIndex: 1,
      explanation:
        'Healthy love replaces anxious power games with glad, wholehearted mutual belonging.',
      takeaway: 'Covenant love thrives on mutual devotion and faithfulness.',
    },
    {
      id: 'q-sng-3',
      passageId: 'SNG-8',
      passageRef: 'Song of Solomon 8:6–7',
      question: 'In Song of Solomon 8:6–7, how is genuine, unbought love described?',
      options: [
        'As temporary mist vanishing before sunrise',
        'As strong as death—a very flame of Yahweh that rushing rivers cannot quench or wealth purchase',
        'Like quiet silver coins stored inside ivory',
        'Like a cedar boat crossing the Nile',
      ],
      correctIndex: 1,
      explanation:
        'By calling love a “flame of Yahweh,” the Song roots joyful human tenderness right back inside God’s own creative love.',
      takeaway: 'True faithful love is priceless, resilient, and blessed by God.',
    },
  ],
};

// Quick onboarding mini-quiz check
export const ONBOARDING_QUIZ: QuizQuestion = {
  id: 'onboard-aha-q1',
  passageId: 'EXO-16',
  passageRef: 'Exodus 16:15',
  question: 'When the Israelites first laid eyes on the bread from heaven, what did they name it?',
  options: [
    'Matzah (Unleavened Bread)',
    'Manna (meaning "What is it?")',
    'Challah (Sabbath Loaf)',
    'Nile Flour',
  ],
  correctIndex: 1,
  explanation: 'Spot on! They called it "Manna" because they had never seen anything like it before in Egypt. God’s daily supernatural care was unlike anything the world had ever seen.',
  takeaway: 'You just unlocked your first connected biblical insight!',
};
