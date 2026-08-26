const QUESTIONS = [
  {
    "id": "1",
    "number": 1,
    "clue": "What Greek word used at Nicaea means that the Son shares the same divine essence as the Father?",
    "answer": "Homoousios",
    "topic": "Trinity & Christology"
  },
  {
    "id": "2",
    "number": 2,
    "clue": "What doctrine says the Son is eternally begotten of the Father, not created and never beginning to exist?",
    "answer": "Eternal generation",
    "topic": "Trinity & Christology"
  },
  {
    "id": "3",
    "number": 3,
    "clue": "What term describes the Holy Spirit’s eternal origin, distinguished from his being sent in history?",
    "answer": "Procession",
    "topic": "Trinity & Christology"
  },
  {
    "id": "4",
    "number": 4,
    "clue": "What term describes the mutual indwelling of the Father, Son, and Holy Spirit without confusing the three persons?",
    "answer": "Perichoresis",
    "topic": "Trinity & Christology"
  },
  {
    "id": "5",
    "number": 5,
    "clue": "What doctrine says Jesus Christ is one person with a complete divine nature and a complete human nature?",
    "answer": "Hypostatic union",
    "topic": "Trinity & Christology"
  },
  {
    "id": "6",
    "number": 6,
    "clue": "What doctrine lets Christians say that God the Son suffered, while clarifying that he suffered according to his human nature?",
    "answer": "Communicatio idiomatum",
    "topic": "Trinity & Christology"
  },
  {
    "id": "7",
    "number": 7,
    "clue": "What doctrine says Christ has both a divine will and a human will?",
    "answer": "Dyothelitism",
    "topic": "Trinity & Christology"
  },
  {
    "id": "8",
    "number": 8,
    "clue": "What single Latin word was added in the West to say that the Holy Spirit proceeds from the Father “and the Son”?",
    "answer": "Filioque",
    "topic": "Trinity & Christology"
  },
  {
    "id": "9",
    "number": 9,
    "clue": "What Greek title for Mary, meaning “God-bearer,” protects the confession that her son is truly God?",
    "answer": "Theotokos",
    "topic": "Trinity & Christology"
  },
  {
    "id": "10",
    "number": 10,
    "clue": "What council in AD 451 described Christ as one person in two natures, without confusion, change, division, or separation?",
    "answer": "Council of Chalcedon",
    "topic": "Trinity & Christology"
  },
  {
    "id": "11",
    "number": 11,
    "clue": "What term means that Christ’s righteousness is counted to the believer’s legal standing?",
    "answer": "Imputation",
    "topic": "Grace & Salvation"
  },
  {
    "id": "12",
    "number": 12,
    "clue": "What term describes righteousness being inwardly given to a person rather than only legally credited?",
    "answer": "Infused righteousness",
    "topic": "Grace & Salvation"
  },
  {
    "id": "13",
    "number": 13,
    "clue": "What grace comes before conversion and enables a fallen person to respond freely to God?",
    "answer": "Prevenient grace",
    "topic": "Grace & Salvation"
  },
  {
    "id": "14",
    "number": 14,
    "clue": "What inward call of the Holy Spirit actually brings a person willingly to faith in Christ?",
    "answer": "Effectual calling",
    "topic": "Grace & Salvation"
  },
  {
    "id": "15",
    "number": 15,
    "clue": "What term says that God alone produces the new birth?",
    "answer": "Monergism",
    "topic": "Grace & Salvation"
  },
  {
    "id": "16",
    "number": 16,
    "clue": "What term says that a grace-enabled human will genuinely cooperates with God?",
    "answer": "Synergism",
    "topic": "Grace & Salvation"
  },
  {
    "id": "17",
    "number": 17,
    "clue": "What doctrine says God’s choice to save is conditioned on foreseen, grace-enabled faith?",
    "answer": "Conditional election",
    "topic": "Grace & Salvation"
  },
  {
    "id": "18",
    "number": 18,
    "clue": "What doctrine says everyone who is truly regenerated will be preserved in faith to the end?",
    "answer": "Perseverance of the saints",
    "topic": "Grace & Salvation"
  },
  {
    "id": "19",
    "number": 19,
    "clue": "What doctrine says a true believer may later abandon saving faith and finally be lost?",
    "answer": "Conditional security",
    "topic": "Grace & Salvation"
  },
  {
    "id": "20",
    "number": 20,
    "clue": "What doctrine says Christ died for every person, although only believers receive the saving benefit?",
    "answer": "Universal atonement",
    "topic": "Grace & Salvation"
  },
  {
    "id": "21",
    "number": 21,
    "clue": "What collective term includes the Word, sacraments, and prayer as ordinary ways God strengthens his people?",
    "answer": "Means of grace",
    "topic": "Church & Sacraments"
  },
  {
    "id": "22",
    "number": 22,
    "clue": "What term says Christ’s true body and blood are received with the bread and wine, without the elements changing substance?",
    "answer": "Sacramental union",
    "topic": "Church & Sacraments"
  },
  {
    "id": "23",
    "number": 23,
    "clue": "What doctrine says the substance of bread and wine becomes Christ’s body and blood while the appearances remain?",
    "answer": "Transubstantiation",
    "topic": "Church & Sacraments"
  },
  {
    "id": "24",
    "number": 24,
    "clue": "What view says believers truly feed on Christ through faith by the Holy Spirit, without his body becoming locally present in the elements?",
    "answer": "Real spiritual presence",
    "topic": "Church & Sacraments"
  },
  {
    "id": "25",
    "number": 25,
    "clue": "What Latin phrase says a sacrament’s validity rests on Christ’s action rather than the minister’s personal holiness?",
    "answer": "Ex opere operato",
    "topic": "Church & Sacraments"
  },
  {
    "id": "26",
    "number": 26,
    "clue": "What term means administering baptism to the children of believers?",
    "answer": "Paedobaptism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "27",
    "number": 27,
    "clue": "What term means administering baptism after a credible profession of faith?",
    "answer": "Credobaptism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "28",
    "number": 28,
    "clue": "What term describes the historical succession of ordained ministers traced back to the apostles?",
    "answer": "Apostolic succession",
    "topic": "Church & Sacraments"
  },
  {
    "id": "29",
    "number": 29,
    "clue": "What doctrine says certain definitive teachings on faith or morals are protected from error when strict conditions are met?",
    "answer": "Papal infallibility",
    "topic": "Church & Sacraments"
  },
  {
    "id": "30",
    "number": 30,
    "clue": "What worship principle permits only elements that God has commanded for corporate worship?",
    "answer": "Regulative principle of worship",
    "topic": "Church & Sacraments"
  },
  {
    "id": "31",
    "number": 31,
    "clue": "What doctrine says Mary remained a virgin before, during, and after the birth of Jesus?",
    "answer": "Perpetual virginity",
    "topic": "Mary"
  },
  {
    "id": "32",
    "number": 32,
    "clue": "What dogma says Mary was preserved from original sin from the first moment of her own conception?",
    "answer": "Immaculate Conception",
    "topic": "Mary"
  },
  {
    "id": "33",
    "number": 33,
    "clue": "What dogma says Mary was taken body and soul into heavenly glory at the end of her earthly life?",
    "answer": "Assumption of Mary",
    "topic": "Mary"
  },
  {
    "id": "34",
    "number": 34,
    "clue": "What term names the unique honor given to Mary, distinguished from the worship given to God?",
    "answer": "Hyperdulia",
    "topic": "Mary"
  },
  {
    "id": "35",
    "number": 35,
    "clue": "What term names the final purification of a person who dies in God’s friendship but is not yet fully purified?",
    "answer": "Purgatory",
    "topic": "Mary"
  },
  {
    "id": "36",
    "number": 36,
    "clue": "What phrase names an empowering experience of the Holy Spirit often associated with bold witness and spiritual gifts?",
    "answer": "Baptism in the Holy Spirit",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "37",
    "number": 37,
    "clue": "What doctrine says speaking in tongues is the first outward sign of baptism in the Holy Spirit?",
    "answer": "Initial evidence",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "38",
    "number": 38,
    "clue": "What Greek-derived word means speaking in tongues?",
    "answer": "Glossolalia",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "39",
    "number": 39,
    "clue": "What position says New Testament gifts such as prophecy, tongues, and healing may continue in the church today?",
    "answer": "Continuationism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "40",
    "number": 40,
    "clue": "What position says some miraculous sign gifts ended after the apostolic foundation of the church was completed?",
    "answer": "Cessationism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "41",
    "number": 41,
    "clue": "What teaching says God still heals people in answer to prayer, although not every sufferer is immediately healed?",
    "answer": "Divine healing",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "42",
    "number": 42,
    "clue": "What system divides redemptive history into distinct administrations and usually distinguishes Israel from the Church?",
    "answer": "Dispensationalism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "43",
    "number": 43,
    "clue": "What view says Christ will return before the millennium?",
    "answer": "Premillennialism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "44",
    "number": 44,
    "clue": "What term emphasizes a life-changing personal turning to Christ rather than inherited Christian identity alone?",
    "answer": "Conversionism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "45",
    "number": 45,
    "clue": "What ancient error says the Son is the highest created being rather than eternally God?",
    "answer": "Arianism",
    "topic": "Historical Errors"
  },
  {
    "id": "46",
    "number": 46,
    "clue": "What error treats the Father, Son, and Holy Spirit as three temporary modes of one person rather than three eternal persons?",
    "answer": "Modalism",
    "topic": "Historical Errors"
  },
  {
    "id": "47",
    "number": 47,
    "clue": "What error says Jesus only appeared to have a real human body and to suffer physically?",
    "answer": "Docetism",
    "topic": "Historical Errors"
  },
  {
    "id": "48",
    "number": 48,
    "clue": "What error says Jesus began as merely human and was later made God’s Son?",
    "answer": "Adoptionism",
    "topic": "Historical Errors"
  },
  {
    "id": "49",
    "number": 49,
    "clue": "What error says human beings can obey God and begin salvation without the necessity of inward divine grace?",
    "answer": "Pelagianism",
    "topic": "Historical Errors"
  },
  {
    "id": "50",
    "number": 50,
    "clue": "What broad ancient movement promised salvation through secret knowledge and often treated the material world as inferior or evil?",
    "answer": "Gnosticism",
    "topic": "Historical Errors"
  }
];
