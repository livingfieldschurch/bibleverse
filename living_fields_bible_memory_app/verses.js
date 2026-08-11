const VERSES = [
  {
    "month": 1,
    "day": 10,
    "title": "II.  Proclaim Christ: All have sinned",
    "verse": "for all have sinned and fall short of the glory of God. Romans 3:23",
    "questions": [
      "Who has sinned?",
      "What do we fall short of?",
      "Do you recognize your sin?"
    ]
  },
  {
    "month": 1,
    "day": 17,
    "title": "II.  Proclaim Christ: Sin's penalty",
    "verse": "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord. Romans 6:23",
    "questions": [
      "What is the wages of sin?",
      "What is the gift of God?",
      "Through whom do we get that gift?"
    ]
  },
  {
    "month": 1,
    "day": 24,
    "title": "II.  Proclaim Christ: Christ paid the penalty",
    "verse": "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. Romans 5:8",
    "questions": [
      "How did God demonstrate His love for us?",
      "What were we to God?",
      "What did Christ do for us?"
    ]
  },
  {
    "month": 1,
    "day": 31,
    "title": "II.  Proclaim Christ: Salvation not by works",
    "verse": "For it is by grace you have been saved, through faith--and this not from yourselves, it is the gift of God--not by works, so that no one can boast. Ephesians 2:8-9",
    "questions": [
      "How are we saved?",
      "What gift has God given us?",
      "Why can't we boast?"
    ]
  },
  {
    "month": 2,
    "day": 7,
    "title": "II.  Proclaim Christ: Must receive Christ",
    "verse": "Yet to all who received him, to those who believed in his name, he gave the right to become children of God-- John 1:12",
    "questions": [
      "To who did God give the right to become His children?",
      "Have you received Him?",
      "Do you believe in His name?"
    ]
  },
  {
    "month": 2,
    "day": 14,
    "title": "II.  Proclaim Christ: Assurance of Salvation",
    "verse": "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life. 1 John 5:13",
    "questions": [
      "How can we know that we have eternal life?",
      "Who do we believe in?",
      "Do you want eternal life?"
    ]
  },
  {
    "month": 2,
    "day": 21,
    "title": "III. Rely on God's Resources: His Spirit",
    "verse": "Don't you know that you yourselves are God's temple and that God's Spirit lives in you? 1 Corinthians 3:16",
    "questions": [
      "Who is God’s temple?",
      "Who lives in God’s temple?",
      "Does God’s Spirit live in you?"
    ]
  },
  {
    "month": 2,
    "day": 28,
    "title": "III. Rely on God's Resources: His Strength",
    "verse": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. Isaiah 41:10",
    "questions": [
      "Why shouldn’t we fear?",
      "Who is with us?",
      "What will God do?"
    ]
  },
  {
    "month": 3,
    "day": 6,
    "title": "III. Rely on God's Resources: His Faithfulness",
    "verse": "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. Lamentations 3:22-23",
    "questions": [
      "Why are we not consumed?",
      "What never fails?",
      "What is new every morning?"
    ]
  },
  {
    "month": 3,
    "day": 13,
    "title": "III. Rely on God's Resources: His Peace",
    "verse": "You will keep in perfect peace him whose mind is steadfast, because he trusts in you. Isaiah 26:3",
    "questions": [
      "What type of peace will we have?",
      "What type of mind do we need?",
      "Do you trust in God?"
    ]
  },
  {
    "month": 3,
    "day": 20,
    "title": "III. Rely on God's Resources: His Provision",
    "verse": "He who did not spare his own Son, but gave him up for us all--how will he not also, along with him, graciously give us all things? Romans 8:32",
    "questions": [
      "Who did not spare his own Son?",
      "Who did he give him up for?",
      "What will he give us?"
    ]
  },
  {
    "month": 3,
    "day": 27,
    "title": "III. Rely on God's Resources: His Help in Temptation",
    "verse": "Because he himself suffered when he was tempted, he is able to help those who are being tempted. Hebrews 2:18",
    "questions": [
      "Who is able to help us when we are tempted?",
      "Why is he able to help us?",
      "Do you call on him for help?"
    ]
  },
  {
    "month": 4,
    "day": 3,
    "title": "IV. Be Christ's Disciple: Put Christ first",
    "verse": "But seek first his kingdom and his righteousness, and all these things will be given to you as well. Matthew 6:33",
    "questions": [
      "What does it mean to put Christ first?",
      "What will be given to us if we seek Christ?",
      "Are you seeking Christ?"
    ]
  },
  {
    "month": 4,
    "day": 10,
    "title": "IV. Be Christ's Disciple: Separate from the world",
    "verse": "Do not love the world or anything in the world. If anyone loves the world, the love of the Father is not in him. For everything in the world--the cravings of sinful man, the lust of his eyes and the boasting of what he has and does--comes not from the Father but from the world. 1 John 2:15-16",
    "questions": [
      "Why shouldn't we love the world?",
      "What comes from the world?",
      "Do you love the things of the world?"
    ]
  },
  {
    "month": 4,
    "day": 17,
    "title": "IV. Be Christ's Disciple: Be steadfast",
    "verse": "Therefore, my dear brothers, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain. 1 Corinthians 15:58",
    "questions": [
      "Why should we stand firm?",
      "What should we give ourselves to?",
      "What do we know about our labor in the Lord?"
    ]
  },
  {
    "month": 4,
    "day": 24,
    "title": "IV. Be Christ's Disciple: Serve others",
    "verse": "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many. Mark 10:45",
    "questions": [
      "Why did the Son of Man come?",
      "Who did He give His life for?",
      "Are you a servant?"
    ]
  },
  {
    "month": 5,
    "day": 1,
    "title": "IV. Be Christ's Disciple: Give generously",
    "verse": "Honor the LORD with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine. Proverbs 3:9-10",
    "questions": [
      "What are we to honor the LORD with?",
      "What will happen when we honor God?",
      "Do you honor God with your firstfruits?"
    ]
  },
  {
    "month": 5,
    "day": 8,
    "title": "IV. Be Christ's Disciple: Develop world vision",
    "verse": "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth. Acts 1:8",
    "questions": [
      "What will we receive with power?",
      "Who are we to witness for?",
      "Where are we to witness?"
    ]
  },
  {
    "month": 5,
    "day": 15,
    "title": "V.  Grow in Christ's Likeness: Love",
    "verse": "A new command I give you: Love one another. As I have loved you, so you must love one another. By this all men will know that you are my disciples, if you love one another. John 13:34-35",
    "questions": [
      "What is the command that we're given?",
      "Why must we love one another?",
      "What will this show?"
    ]
  },
  {
    "month": 5,
    "day": 22,
    "title": "V.  Grow in Christ's Likeness: Humility",
    "verse": "Do nothing out of selfish ambition or vain conceit, but in humility consider others better than yourselves. Each of you should look not only to your own interests, but also to the interests of others. Philippians 2:3-4",
    "questions": [
      "What are we to do with humility?",
      "Whose interest should we look out for?",
      "How is this like Christ?"
    ]
  },
  {
    "month": 5,
    "day": 29,
    "title": "V.  Grow in Christ's Likeness: Purity",
    "verse": "But among you there must not be even a hint of sexual immorality, or of any kind of impurity, or of greed, because these are improper for God's holy people. Ephesians 5:3",
    "questions": [
      "What is improper for God’s holy people?",
      "What does not even a hint mean?",
      "Why does God want us to be pure?"
    ]
  },
  {
    "month": 6,
    "day": 5,
    "title": "V.  Grow in Christ's Likeness: Honesty",
    "verse": "Do not steal. Do not lie. Do not deceive one another. Leviticus 19:11",
    "questions": [
      "What are we not to do?",
      "Why shouldn’t we do it?",
      "How hard is it for you?"
    ]
  },
  {
    "month": 6,
    "day": 12,
    "title": "V.  Grow in Christ's Likeness: Faith",
    "verse": "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him. Hebrews 11:6",
    "questions": [
      "Why is it impossible to please God without faith?",
      "What does it mean to believe?",
      "How does He reward those who seek Him?"
    ]
  },
  {
    "month": 6,
    "day": 19,
    "title": "V.  Grow in Christ's Likeness: Good deeds",
    "verse": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers. Galatians 6:9-10",
    "questions": [
      "Do you get tired of doing good?",
      "Who should we do good to?",
      "Who especially should we do good to?"
    ]
  },
  {
    "month": 6,
    "day": 26,
    "title": "I.  Live the new life: Christ the Center",
    "verse": "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I live in the body, I live by faith in the Son of God, who loved me and gave himself for me. Galatians 2:20",
    "questions": [
      "What does it mean to be crucified with Christ?",
      "Who is living our life?",
      "Who are you living for?"
    ]
  },
  {
    "month": 7,
    "day": 3,
    "title": "I.  Live the new life: Obedience to Christ",
    "verse": "Therefore, I urge you, brothers, in view of God's mercy, to offer your bodies as living sacrifices, holy and pleasing to God - this is your spiritual act of worship. Romans 12:1",
    "questions": [
      "Why should we offer our bodies as living sacrifices to God?",
      "What does living sacrifice mean?",
      "How is this a spiritual act of worship?"
    ]
  },
  {
    "month": 7,
    "day": 10,
    "title": "I.  Live the new life: The Word",
    "verse": "All Scripture is God-breathed and is useful for teaching, rebuking, correcting, and training in righteousness. 2 Timothy 3:16",
    "questions": [
      "What does God-breathed mean?",
      "Who wrote the Bible?",
      "What is Scripture useful for?"
    ]
  },
  {
    "month": 7,
    "day": 17,
    "title": "I.  Live the new life: Prayer",
    "verse": "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your request to God. And the peace of God, which transcends all understanding will guard your hearts and your minds in Christ Jesus. Philippians 4:6-7",
    "questions": [
      "What makes you anxious?",
      "What can we do when we become anxious?",
      "What is the result of bringing our requests before God?"
    ]
  },
  {
    "month": 7,
    "day": 24,
    "title": "I.  Live the new life: Fellowship",
    "verse": "And let us consider how we may spur one another on toward love and good deeds. Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another - and all the more as you see the Day approaching. Hebrews 10:24-25",
    "questions": [
      "How can we spur one another toward love and good deeds?",
      "Why should we not stop meeting together?",
      "What Day is approaching?"
    ]
  },
  {
    "month": 7,
    "day": 31,
    "title": "I.  Live the new life: Witnessing",
    "verse": "I am not ashamed of the gospel, because it is the power of God for the salvation of everyone who believes: first for the Jew, then for the Gentile. Romans 1:16",
    "questions": [
      "What causes us to be ashamed of the Gospel?",
      "Why shouldn’t we be ashamed of the Gospel?",
      "Who is the Gospel for?"
    ]
  },
  {
    "month": 8,
    "day": 7,
    "title": "II.  Proclaim Christ: All have sinned",
    "verse": "We all, like sheep, have gone astray, each of us has turned to his own way; and the LORD has laid on him the iniquity of us all. Isaiah 53:6",
    "questions": [
      "Why are we like sheep?",
      "How did we go astray?",
      "Who took our iniquity?"
    ]
  },
  {
    "month": 8,
    "day": 14,
    "title": "II.  Proclaim Christ: Sin's penalty",
    "verse": "Just as man is destined to die once, and after that to face judgment, Hebrews 9:27",
    "questions": [
      "What does this verse tell us is certain?",
      "What happens after death?",
      "Are you ready?"
    ]
  },
  {
    "month": 8,
    "day": 21,
    "title": "II.  Proclaim Christ: Christ paid the penalty",
    "verse": "For Christ died for sins once for all, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive by the Spirit, 1 Peter 3:18",
    "questions": [
      "Who died for sins once for all?",
      "Did He deserve to die?",
      "Why did He die for us?"
    ]
  },
  {
    "month": 8,
    "day": 28,
    "title": "II.  Proclaim Christ: Salvation not by works",
    "verse": "He saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit, Titus 3:5",
    "questions": [
      "Are we saved by our own righteousness?",
      "Why did Christ save us?",
      "What does the Holy Spirit do for us?"
    ]
  },
  {
    "month": 9,
    "day": 4,
    "title": "II.  Proclaim Christ: Must receive Christ",
    "verse": "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with him, and he with me. Revelation 3:20",
    "questions": [
      "Who is knocking at the door?",
      "What will happen when we open the door?",
      "Do you want this type of fellowship?"
    ]
  },
  {
    "month": 9,
    "day": 11,
    "title": "II.  Proclaim Christ: Assurance of Salvation",
    "verse": "I tell you the truth, whoever hears my word and believes him who sent me has eternal life and will not be condemned; he has crossed over from death to life. John 5:24",
    "questions": [
      "Who’s word are we meant to hear?",
      "How do we have eternal life?",
      "What do we cross over from?"
    ]
  },
  {
    "month": 9,
    "day": 18,
    "title": "III. Rely on God's Resources: His Spirit",
    "verse": "We have not received the spirit of the world but the Spirit who is from God, that we may understand what God has freely given us. 1 Corinthians 2:12",
    "questions": [
      "Who do we get the Spirit from?",
      "Why was the Spirit given to us?",
      "Do you want the Spirit?"
    ]
  },
  {
    "month": 9,
    "day": 25,
    "title": "III. Rely on God's Resources: His Strength",
    "verse": "I can do everything through him who gives me strength. Philippians 4:13",
    "questions": [
      "Is there anything we can’t do?",
      "Who can we do everything through?",
      "Who gives us the strength to do everything?"
    ]
  },
  {
    "month": 10,
    "day": 2,
    "title": "III. Rely on God's Resources: His Faithfulness",
    "verse": "God is not a man, that he should lie, nor a son of man, that he should change his mind. Does he speak and then not act? Does he promise and not fulfill? Numbers 23:19",
    "questions": [
      "Does God lie?",
      "Does God change His mind?",
      "In what way are you not like God?"
    ]
  },
  {
    "month": 10,
    "day": 9,
    "title": "III. Rely on God's Resources: His Peace",
    "verse": "Cast all your anxiety on him because he cares for you. 1 Peter 5:7",
    "questions": [
      "How often do you worry?",
      "What are we to do with our anxiety?",
      "Why can we give our anxiety to God?"
    ]
  },
  {
    "month": 10,
    "day": 16,
    "title": "III. Rely on God's Resources: His Provision",
    "verse": "And my God will meet all your needs according to his glorious riches in Christ Jesus. Philippians 4:19",
    "questions": [
      "What needs do you have?",
      "What is God’s promise in this verse?",
      "Will you rely on God’s resource?"
    ]
  },
  {
    "month": 10,
    "day": 23,
    "title": "III. Rely on God's Resources: His Help in Temptation",
    "verse": "How can a young man keep his way pure? By living according to your word. I have hidden your word in my heart that I might not sin against you. Psalm 119: 9,11",
    "questions": [
      "How can you keep your way pure?",
      "What is the purpose of hiding God’s Word in your heart?",
      "Have you hidden God’s Word in your heart?"
    ]
  },
  {
    "month": 10,
    "day": 30,
    "title": "IV. Be Christ's Disciple: Put Christ first",
    "verse": "Then he said to them all: \"If anyone would come after me, he must deny himself and take up his cross daily and follow me. Luke 9:23",
    "questions": [
      "What does it mean to follow Jesus?",
      "What does it mean to deny yourself?",
      "What does it mean to take up your cross daily?"
    ]
  },
  {
    "month": 11,
    "day": 6,
    "title": "IV. Be Christ's Disciple: Separate from the world",
    "verse": "Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is--his good, pleasing and perfect will. Romans 12:2",
    "questions": [
      "What is the pattern of this world?",
      "How are we to be transformed?",
      "Do you desire God’s will?"
    ]
  },
  {
    "month": 11,
    "day": 13,
    "title": "IV. Be Christ's Disciple: Be steadfast",
    "verse": "Consider him who endured such opposition from sinful men, so that you will not grow weary and lose heart. Hebrews 12:3",
    "questions": [
      "What does it mean to be steadfast?",
      "Who are we to consider?",
      "Why should we not grow weary?"
    ]
  },
  {
    "month": 11,
    "day": 20,
    "title": "IV. Be Christ's Disciple: Serve others",
    "verse": "For we do not preach ourselves, but Jesus Christ as Lord, and ourselves as your servants for Jesus' sake. 2 Corinthians 4:5",
    "questions": [
      "Who do we preach as Lord?",
      "Who are we to serve?",
      "For who’s sake do we serve?"
    ]
  },
  {
    "month": 11,
    "day": 27,
    "title": "IV. Be Christ's Disciple: Give generously",
    "verse": "Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each man should give what he has decided in his heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. 2 Corinthians 9:6-7",
    "questions": [
      "What will you reap if you sow sparingly?",
      "What will you reap if you sow generously?",
      "What type of giver does God love?"
    ]
  },
  {
    "month": 12,
    "day": 4,
    "title": "IV. Be Christ's Disciple: Develop world vision",
    "verse": "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age. Matthew 28:19-20",
    "questions": [
      "What is God calling us to do?",
      "In who’s name are we to make disciples?",
      "Who will be with us?"
    ]
  },
  {
    "month": 12,
    "day": 11,
    "title": "V.  Grow in Christ's Likeness: Love",
    "verse": "Dear children, let us not love with words or tongue but with actions and in truth. 1 John 3:18",
    "questions": [
      "How are we to love?",
      "What are we not to love with?",
      "How have you loved others?"
    ]
  },
  {
    "month": 12,
    "day": 18,
    "title": "V.  Grow in Christ's Likeness: Humility",
    "verse": "Young men, in the same way be submissive to those who are older. All of you, clothe yourselves with humility toward one another, because, \"God opposes the proud but gives grace to the humble.\" Humble yourselves, therefore, under God's mighty hand, that he may lift you up in due time. 1 Peter 5:5-6",
    "questions": [
      "What are we to clothe ourselves in?",
      "What does God oppose?",
      "Why are we to humble ourselves?"
    ]
  },
  {
    "month": 12,
    "day": 25,
    "title": "V.  Grow in Christ's Likeness: Purity",
    "verse": "Dear friends, I urge you, as aliens and strangers in the world, to abstain from sinful desires, which war against your soul. 1 Peter 2:11",
    "questions": [
      "What are we urged to do?",
      "What are we to the world?",
      "What is at war with our souls?"
    ]
  }
];
