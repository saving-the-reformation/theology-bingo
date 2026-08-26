const QUESTIONS = [
  {
    "id": "1A",
    "number": 1,
    "set": "A",
    "clue": "Which Nicene term excludes the claim that the Son merely resembles the Father in essence?",
    "answer": "Homoousios",
    "topic": "Trinity & Christology"
  },
  {
    "id": "1B",
    "number": 1,
    "set": "B",
    "clue": "What Greek adjective confesses that the Father and the Son possess one and the same divine essence?",
    "answer": "Homoousios",
    "topic": "Trinity & Christology"
  },
  {
    "id": "2A",
    "number": 2,
    "set": "A",
    "clue": "What doctrine says the Son is eternally from the Father by begetting, without being created or beginning to exist?",
    "answer": "Eternal generation",
    "topic": "Trinity & Christology"
  },
  {
    "id": "2B",
    "number": 2,
    "set": "B",
    "clue": "Which personal relation distinguishes the Son from the Father while preserving their equal eternity and deity?",
    "answer": "Eternal generation",
    "topic": "Trinity & Christology"
  },
  {
    "id": "3A",
    "number": 3,
    "set": "A",
    "clue": "What term names the Spirit’s eternal personal origination rather than his temporal mission at Pentecost?",
    "answer": "Procession",
    "topic": "Trinity & Christology"
  },
  {
    "id": "3B",
    "number": 3,
    "set": "B",
    "clue": "Which doctrine is at issue when theologians ask from whom the Holy Spirit eternally comes?",
    "answer": "Procession",
    "topic": "Trinity & Christology"
  },
  {
    "id": "4A",
    "number": 4,
    "set": "A",
    "clue": "What rule says no external work of God belongs to only one divine person as though the other two were absent?",
    "answer": "Inseparable operations",
    "topic": "Trinity & Christology"
  },
  {
    "id": "4B",
    "number": 4,
    "set": "B",
    "clue": "Which Trinitarian principle explains why creation and redemption are works of the one undivided God, though personally appropriated?",
    "answer": "Inseparable operations",
    "topic": "Trinity & Christology"
  },
  {
    "id": "5A",
    "number": 5,
    "set": "A",
    "clue": "What term describes the coinherence of Father, Son, and Spirit without merging their personal distinctions?",
    "answer": "Perichoresis",
    "topic": "Trinity & Christology"
  },
  {
    "id": "5B",
    "number": 5,
    "set": "B",
    "clue": "Which doctrine names the three persons’ mutual indwelling in the one undivided divine life?",
    "answer": "Perichoresis",
    "topic": "Trinity & Christology"
  },
  {
    "id": "6A",
    "number": 6,
    "set": "A",
    "clue": "What doctrine says Christ’s complete divine and human natures subsist in one person?",
    "answer": "Hypostatic union",
    "topic": "Trinity & Christology"
  },
  {
    "id": "6B",
    "number": 6,
    "set": "B",
    "clue": "Which Christological union is personal rather than a blending of natures or an alliance of two persons?",
    "answer": "Hypostatic union",
    "topic": "Trinity & Christology"
  },
  {
    "id": "7A",
    "number": 7,
    "set": "A",
    "clue": "What doctrine permits saying “God suffered” when the suffering is predicated of the divine person according to his humanity?",
    "answer": "Communicatio idiomatum",
    "topic": "Trinity & Christology"
  },
  {
    "id": "7B",
    "number": 7,
    "set": "B",
    "clue": "Which rule allows properties of either nature to be spoken of the one person of Christ without transferring them between the natures?",
    "answer": "Communicatio idiomatum",
    "topic": "Trinity & Christology"
  },
  {
    "id": "8A",
    "number": 8,
    "set": "A",
    "clue": "What doctrine confesses a complete divine will and a complete human will in Christ?",
    "answer": "Dyothelitism",
    "topic": "Trinity & Christology"
  },
  {
    "id": "8B",
    "number": 8,
    "set": "B",
    "clue": "Which teaching was affirmed against the claim that Christ possesses only one will?",
    "answer": "Dyothelitism",
    "topic": "Trinity & Christology"
  },
  {
    "id": "9A",
    "number": 9,
    "set": "A",
    "clue": "What label names the claim that the eternal Son remains beyond the limits of his assumed human nature?",
    "answer": "Extra Calvinisticum",
    "topic": "Trinity & Christology"
  },
  {
    "id": "9B",
    "number": 9,
    "set": "B",
    "clue": "Which Christological safeguard denies that the incarnate Son is spatially exhausted by his humanity?",
    "answer": "Extra Calvinisticum",
    "topic": "Trinity & Christology"
  },
  {
    "id": "10A",
    "number": 10,
    "set": "A",
    "clue": "What Latin phrase groups Christ’s work under prophet, priest, and king?",
    "answer": "Munus triplex",
    "topic": "Trinity & Christology"
  },
  {
    "id": "10B",
    "number": 10,
    "set": "B",
    "clue": "Which threefold-office formula links Christ’s revelation, sacrifice and intercession, and royal rule?",
    "answer": "Munus triplex",
    "topic": "Trinity & Christology"
  },
  {
    "id": "11A",
    "number": 11,
    "set": "A",
    "clue": "What scholastic term names the eternal redemptive counsel commonly framed as a covenant between Father and Son?",
    "answer": "Pactum salutis",
    "topic": "Grace & Salvation"
  },
  {
    "id": "11B",
    "number": 11,
    "set": "B",
    "clue": "Which pretemporal covenantal category concerns the Son’s undertaking to redeem the people given to him?",
    "answer": "Pactum salutis",
    "topic": "Grace & Salvation"
  },
  {
    "id": "12A",
    "number": 12,
    "set": "A",
    "clue": "What term explains how Adam’s act and Christ’s obedience have consequences for those each represents?",
    "answer": "Federal headship",
    "topic": "Grace & Salvation"
  },
  {
    "id": "12B",
    "number": 12,
    "set": "B",
    "clue": "Which representative principle lies behind the contrast between the first Adam and the last Adam?",
    "answer": "Federal headship",
    "topic": "Grace & Salvation"
  },
  {
    "id": "13A",
    "number": 13,
    "set": "A",
    "clue": "What term describes righteousness being legally credited rather than morally infused as the ground of acquittal?",
    "answer": "Imputation",
    "topic": "Grace & Salvation"
  },
  {
    "id": "13B",
    "number": 13,
    "set": "B",
    "clue": "Which forensic act accounts another’s righteousness or guilt to a person’s standing?",
    "answer": "Imputation",
    "topic": "Grace & Salvation"
  },
  {
    "id": "14A",
    "number": 14,
    "set": "A",
    "clue": "What doctrine names the believer’s decisive transfer out of sin’s dominion, distinguished from gradual growth?",
    "answer": "Definitive sanctification",
    "topic": "Grace & Salvation"
  },
  {
    "id": "14B",
    "number": 14,
    "set": "B",
    "clue": "Which aspect of sanctification is punctiliar and status-changing rather than progressive?",
    "answer": "Definitive sanctification",
    "topic": "Grace & Salvation"
  },
  {
    "id": "15A",
    "number": 15,
    "set": "A",
    "clue": "What term names the logical sequence among calling, regeneration, faith, justification, adoption, and glorification?",
    "answer": "Ordo salutis",
    "topic": "Grace & Salvation"
  },
  {
    "id": "15B",
    "number": 15,
    "set": "B",
    "clue": "Which theological framework asks how the applied benefits of redemption relate in order?",
    "answer": "Ordo salutis",
    "topic": "Grace & Salvation"
  },
  {
    "id": "16A",
    "number": 16,
    "set": "A",
    "clue": "What inward summons actually brings its recipients freely and willingly to Christ?",
    "answer": "Effectual calling",
    "topic": "Grace & Salvation"
  },
  {
    "id": "16B",
    "number": 16,
    "set": "B",
    "clue": "Which calling does more than invite externally because the Spirit grants the response it commands?",
    "answer": "Effectual calling",
    "topic": "Grace & Salvation"
  },
  {
    "id": "17A",
    "number": 17,
    "set": "A",
    "clue": "What doctrine says genuine believers are preserved by God and continue in faith to the end?",
    "answer": "Perseverance of the saints",
    "topic": "Grace & Salvation"
  },
  {
    "id": "17B",
    "number": 17,
    "set": "B",
    "clue": "Which teaching denies that the finally glorified can include someone who permanently abandoned a genuine saving faith?",
    "answer": "Perseverance of the saints",
    "topic": "Grace & Salvation"
  },
  {
    "id": "18A",
    "number": 18,
    "set": "A",
    "clue": "What doctrine locates the condition of election in foreknown, grace-enabled faith?",
    "answer": "Conditional election",
    "topic": "Grace & Salvation"
  },
  {
    "id": "18B",
    "number": 18,
    "set": "B",
    "clue": "Which view says God chooses to save those whom he foresees responding to grace in faith?",
    "answer": "Conditional election",
    "topic": "Grace & Salvation"
  },
  {
    "id": "19A",
    "number": 19,
    "set": "A",
    "clue": "What grace precedes conversion and restores a real ability to respond without itself guaranteeing the response?",
    "answer": "Prevenient grace",
    "topic": "Grace & Salvation"
  },
  {
    "id": "19B",
    "number": 19,
    "set": "B",
    "clue": "Which category describes divine help that comes before the sinner’s believing response?",
    "answer": "Prevenient grace",
    "topic": "Grace & Salvation"
  },
  {
    "id": "20A",
    "number": 20,
    "set": "A",
    "clue": "What term says regeneration is produced by God alone rather than jointly caused by God and the unregenerate person?",
    "answer": "Monergism",
    "topic": "Grace & Salvation"
  },
  {
    "id": "20B",
    "number": 20,
    "set": "B",
    "clue": "Which position assigns the efficient work of the new birth solely to divine action?",
    "answer": "Monergism",
    "topic": "Grace & Salvation"
  },
  {
    "id": "33A",
    "number": 33,
    "set": "A",
    "clue": "Which covenantal category describes Adam’s pre-fall probation under the promise of life for perfect obedience?",
    "answer": "Covenant of works",
    "topic": "Grace & Salvation"
  },
  {
    "id": "33B",
    "number": 33,
    "set": "B",
    "clue": "What covenant places a representative under a works principle whose sanction includes death for disobedience?",
    "answer": "Covenant of works",
    "topic": "Grace & Salvation"
  },
  {
    "id": "34A",
    "number": 34,
    "set": "A",
    "clue": "Which covenantal administration promises salvation through a mediator to fallen people who receive him by faith?",
    "answer": "Covenant of grace",
    "topic": "Grace & Salvation"
  },
  {
    "id": "34B",
    "number": 34,
    "set": "B",
    "clue": "What covenant unifies the saving promise after the fall across its historical administrations?",
    "answer": "Covenant of grace",
    "topic": "Grace & Salvation"
  },
  {
    "id": "36A",
    "number": 36,
    "set": "A",
    "clue": "What disputed proposal finds a qualified republication of the works principle in the Mosaic economy?",
    "answer": "Republication",
    "topic": "Grace & Salvation"
  },
  {
    "id": "36B",
    "number": 36,
    "set": "B",
    "clue": "Which intramural covenant-theology category asks whether Sinai restated Adamic probation in some respect?",
    "answer": "Republication",
    "topic": "Grace & Salvation"
  },
  {
    "id": "66A",
    "number": 66,
    "set": "A",
    "clue": "What view says saving grace can be genuinely resisted rather than infallibly securing consent?",
    "answer": "Resistible grace",
    "topic": "Grace & Salvation"
  },
  {
    "id": "66B",
    "number": 66,
    "set": "B",
    "clue": "Which doctrine denies that every inward operation of grace necessarily produces conversion?",
    "answer": "Resistible grace",
    "topic": "Grace & Salvation"
  },
  {
    "id": "67A",
    "number": 67,
    "set": "A",
    "clue": "What doctrine says Christ died for every person, although only believers receive the saving benefit?",
    "answer": "Universal atonement",
    "topic": "Grace & Salvation"
  },
  {
    "id": "67B",
    "number": 67,
    "set": "B",
    "clue": "Which extent-of-atonement view distinguishes a provision for all from its application to believers?",
    "answer": "Universal atonement",
    "topic": "Grace & Salvation"
  },
  {
    "id": "68A",
    "number": 68,
    "set": "A",
    "clue": "What doctrine says continuance in saving faith is necessary and that a true believer may finally fall away?",
    "answer": "Conditional security",
    "topic": "Grace & Salvation"
  },
  {
    "id": "68B",
    "number": 68,
    "set": "B",
    "clue": "Which perseverance view makes final salvation conditional upon continuing faith rather than teaching inevitable preservation?",
    "answer": "Conditional security",
    "topic": "Grace & Salvation"
  },
  {
    "id": "69A",
    "number": 69,
    "set": "A",
    "clue": "What term describes genuine cooperation of the human will with prior divine grace?",
    "answer": "Synergism",
    "topic": "Grace & Salvation"
  },
  {
    "id": "69B",
    "number": 69,
    "set": "B",
    "clue": "Which view says grace initiates and enables salvation while the enabled person truly cooperates?",
    "answer": "Synergism",
    "topic": "Grace & Salvation"
  },
  {
    "id": "21A",
    "number": 21,
    "set": "A",
    "clue": "What collective term covers the appointed instruments through which Christ communicates saving benefits?",
    "answer": "Means of grace",
    "topic": "Church & Sacraments"
  },
  {
    "id": "21B",
    "number": 21,
    "set": "B",
    "clue": "Which category commonly includes Word, sacraments, and prayer as ordinary channels of divine blessing?",
    "answer": "Means of grace",
    "topic": "Church & Sacraments"
  },
  {
    "id": "22A",
    "number": 22,
    "set": "A",
    "clue": "What term says Christ’s body and blood are received with the bread and wine without a change of substance?",
    "answer": "Sacramental union",
    "topic": "Church & Sacraments"
  },
  {
    "id": "22B",
    "number": 22,
    "set": "B",
    "clue": "Which account of the Supper rejects both bare symbolism and transubstantiation while affirming oral reception?",
    "answer": "Sacramental union",
    "topic": "Church & Sacraments"
  },
  {
    "id": "23A",
    "number": 23,
    "set": "A",
    "clue": "What doctrine says the elements’ whole substance becomes Christ’s body and blood while their sensible appearances remain?",
    "answer": "Transubstantiation",
    "topic": "Church & Sacraments"
  },
  {
    "id": "23B",
    "number": 23,
    "set": "B",
    "clue": "Which Eucharistic doctrine distinguishes changed substance from unchanged species?",
    "answer": "Transubstantiation",
    "topic": "Church & Sacraments"
  },
  {
    "id": "24A",
    "number": 24,
    "set": "A",
    "clue": "What view says believers truly feed on Christ through faith by the Spirit without his body becoming locally present in the elements?",
    "answer": "Real spiritual presence",
    "topic": "Church & Sacraments"
  },
  {
    "id": "24B",
    "number": 24,
    "set": "B",
    "clue": "Which account rejects a merely memorial meal while locating communion with Christ through the Spirit?",
    "answer": "Real spiritual presence",
    "topic": "Church & Sacraments"
  },
  {
    "id": "25A",
    "number": 25,
    "set": "A",
    "clue": "What formula says a sacrament’s efficacy rests on Christ’s instituted action rather than the minister’s holiness?",
    "answer": "Ex opere operato",
    "topic": "Church & Sacraments"
  },
  {
    "id": "25B",
    "number": 25,
    "set": "B",
    "clue": "Which Latin expression protects sacramental validity from depending on the celebrant’s moral condition while not denying the recipient’s disposition matters?",
    "answer": "Ex opere operato",
    "topic": "Church & Sacraments"
  },
  {
    "id": "26A",
    "number": 26,
    "set": "A",
    "clue": "What practice administers baptism to the children of believers on a covenantal basis?",
    "answer": "Paedobaptism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "26B",
    "number": 26,
    "set": "B",
    "clue": "Which baptismal position treats believers’ infants as proper recipients of the covenant sign?",
    "answer": "Paedobaptism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "27A",
    "number": 27,
    "set": "A",
    "clue": "What position restricts baptism to those making a credible profession of faith?",
    "answer": "Credobaptism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "27B",
    "number": 27,
    "set": "B",
    "clue": "Which baptismal practice makes personal discipleship confession precede the ordinance?",
    "answer": "Credobaptism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "28A",
    "number": 28,
    "set": "A",
    "clue": "What term names the worldwide body of professing Christians and their children gathered under public ordinances?",
    "answer": "Visible church",
    "topic": "Church & Sacraments"
  },
  {
    "id": "28B",
    "number": 28,
    "set": "B",
    "clue": "Which ecclesiological category can include hypocrites and differs from the company of the elect known perfectly to God?",
    "answer": "Visible church",
    "topic": "Church & Sacraments"
  },
  {
    "id": "29A",
    "number": 29,
    "set": "A",
    "clue": "What phrase groups faithful preaching, right sacramental administration, and discipline as tests of a true church?",
    "answer": "Marks of the church",
    "topic": "Church & Sacraments"
  },
  {
    "id": "29B",
    "number": 29,
    "set": "B",
    "clue": "Which ecclesiological test asks where Word, sacraments, and corrective discipline are rightly practiced?",
    "answer": "Marks of the church",
    "topic": "Church & Sacraments"
  },
  {
    "id": "30A",
    "number": 30,
    "set": "A",
    "clue": "What worship rule asks whether God commanded a practice, not merely whether he prohibited it?",
    "answer": "Regulative principle of worship",
    "topic": "Church & Sacraments"
  },
  {
    "id": "30B",
    "number": 30,
    "set": "B",
    "clue": "Which principle limits corporate worship’s elements to divine institution?",
    "answer": "Regulative principle of worship",
    "topic": "Church & Sacraments"
  },
  {
    "id": "31A",
    "number": 31,
    "set": "A",
    "clue": "What error weakens or denies the moral law’s continuing normative role for believers?",
    "answer": "Antinomianism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "31B",
    "number": 31,
    "set": "B",
    "clue": "Which charge describes turning justification by grace into freedom from moral obligation?",
    "answer": "Antinomianism",
    "topic": "Church & Sacraments"
  },
  {
    "id": "32A",
    "number": 32,
    "set": "A",
    "clue": "What use of the law directs regenerate people in grateful obedience?",
    "answer": "Third use of the law",
    "topic": "Church & Sacraments"
  },
  {
    "id": "32B",
    "number": 32,
    "set": "B",
    "clue": "Which function of the moral law is neither chiefly restraint nor conviction, but guidance for believers?",
    "answer": "Third use of the law",
    "topic": "Church & Sacraments"
  },
  {
    "id": "43A",
    "number": 43,
    "set": "A",
    "clue": "What term names practices considered neither commanded nor forbidden in themselves?",
    "answer": "Adiaphora",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "43B",
    "number": 43,
    "set": "B",
    "clue": "Which sixteenth-century category became central in disputes about ceremonies regarded as theologically indifferent?",
    "answer": "Adiaphora",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "56A",
    "number": 56,
    "set": "A",
    "clue": "What term names postmortem purification for a person who dies reconciled to God but not yet fully purified?",
    "answer": "Purgatory",
    "topic": "Church & Sacraments"
  },
  {
    "id": "56B",
    "number": 56,
    "set": "B",
    "clue": "Which doctrine describes a temporary final purification distinct from both heaven and the punishment of the damned?",
    "answer": "Purgatory",
    "topic": "Church & Sacraments"
  },
  {
    "id": "57A",
    "number": 57,
    "set": "A",
    "clue": "What remission concerns temporal punishment remaining after guilt has been forgiven?",
    "answer": "Indulgence",
    "topic": "Church & Sacraments"
  },
  {
    "id": "57B",
    "number": 57,
    "set": "B",
    "clue": "Which practice applies ecclesial remission of temporal penalties under specified conditions?",
    "answer": "Indulgence",
    "topic": "Church & Sacraments"
  },
  {
    "id": "58A",
    "number": 58,
    "set": "A",
    "clue": "What term names the spiritual store of Christ’s merits, together with those of the saints, applied in indulgences?",
    "answer": "Treasury of merit",
    "topic": "Church & Sacraments"
  },
  {
    "id": "58B",
    "number": 58,
    "set": "B",
    "clue": "Which doctrine grounds the Church’s distribution of indulgences in a communal spiritual treasury?",
    "answer": "Treasury of merit",
    "topic": "Church & Sacraments"
  },
  {
    "id": "59A",
    "number": 59,
    "set": "A",
    "clue": "What scholastic kind of merit describes reward owed according to God’s graciously established promise rather than strict creaturely equality with God?",
    "answer": "Condign merit",
    "topic": "Church & Sacraments"
  },
  {
    "id": "59B",
    "number": 59,
    "set": "B",
    "clue": "Which category says works done in grace can truly receive a promised reward while initial grace remains unmerited?",
    "answer": "Condign merit",
    "topic": "Church & Sacraments"
  },
  {
    "id": "60A",
    "number": 60,
    "set": "A",
    "clue": "What term says justifying righteousness is inwardly bestowed and inheres in the renewed person?",
    "answer": "Infused righteousness",
    "topic": "Church & Sacraments"
  },
  {
    "id": "60B",
    "number": 60,
    "set": "B",
    "clue": "Which account contrasts with merely external crediting by describing grace as making the recipient truly righteous?",
    "answer": "Infused righteousness",
    "topic": "Church & Sacraments"
  },
  {
    "id": "61A",
    "number": 61,
    "set": "A",
    "clue": "What charism protects a definitive judgment on faith or morals from error when its strict conditions are met?",
    "answer": "Papal infallibility",
    "topic": "Church & Sacraments"
  },
  {
    "id": "61B",
    "number": 61,
    "set": "B",
    "clue": "Which doctrine applies only to specified definitive teaching acts, not to every opinion or action of a pope?",
    "answer": "Papal infallibility",
    "topic": "Church & Sacraments"
  },
  {
    "id": "62A",
    "number": 62,
    "set": "A",
    "clue": "What term names historical continuity in ordained ministry through a chain traced to the apostles?",
    "answer": "Apostolic succession",
    "topic": "Church & Sacraments"
  },
  {
    "id": "62B",
    "number": 62,
    "set": "B",
    "clue": "Which ecclesial claim connects present bishops to the apostolic college through succession of office?",
    "answer": "Apostolic succession",
    "topic": "Church & Sacraments"
  },
  {
    "id": "63A",
    "number": 63,
    "set": "A",
    "clue": "What term names the living teaching office exercised by bishops in communion with their head?",
    "answer": "Magisterium",
    "topic": "Church & Sacraments"
  },
  {
    "id": "63B",
    "number": 63,
    "set": "B",
    "clue": "Which authority interprets the deposit of faith through its ordinary and extraordinary teaching functions?",
    "answer": "Magisterium",
    "topic": "Church & Sacraments"
  },
  {
    "id": "64A",
    "number": 64,
    "set": "A",
    "clue": "What category describes grave sin committed with full knowledge and deliberate consent that destroys charity in the soul?",
    "answer": "Mortal sin",
    "topic": "Church & Sacraments"
  },
  {
    "id": "64B",
    "number": 64,
    "set": "B",
    "clue": "Which classification of sin is contrasted with lesser fault because it involves grave matter and severs sanctifying grace?",
    "answer": "Mortal sin",
    "topic": "Church & Sacraments"
  },
  {
    "id": "65A",
    "number": 65,
    "set": "A",
    "clue": "What category names sin that wounds but does not destroy charity in the soul?",
    "answer": "Venial sin",
    "topic": "Church & Sacraments"
  },
  {
    "id": "65B",
    "number": 65,
    "set": "B",
    "clue": "Which classification concerns lesser matter, or grave matter lacking full knowledge or complete consent?",
    "answer": "Venial sin",
    "topic": "Church & Sacraments"
  },
  {
    "id": "35A",
    "number": 35,
    "set": "A",
    "clue": "What interpretive category identifies earlier persons, events, and institutions as divinely designed patterns fulfilled later?",
    "answer": "Typology",
    "topic": "Grace & Salvation"
  },
  {
    "id": "35B",
    "number": 35,
    "set": "B",
    "clue": "Which method relates Adam, exodus, temple, and sacrifice to escalated fulfillment in Christ?",
    "answer": "Typology",
    "topic": "Grace & Salvation"
  },
  {
    "id": "37A",
    "number": 37,
    "set": "A",
    "clue": "What interpretive rule reads difficult passages in harmony with Scripture’s coherent teaching as a whole?",
    "answer": "Analogia fidei",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "37B",
    "number": 37,
    "set": "B",
    "clue": "Which “analogy” refuses interpretations that contradict doctrines taught more clearly elsewhere in Scripture?",
    "answer": "Analogia fidei",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "38A",
    "number": 38,
    "set": "A",
    "clue": "What “analogy” says predicates applied to God and creatures are neither univocal nor wholly equivocal?",
    "answer": "Analogia entis",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "38B",
    "number": 38,
    "set": "B",
    "clue": "Which scholastic principle grounds limited creaturely speech about God in a real but unequal likeness?",
    "answer": "Analogia entis",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "39A",
    "number": 39,
    "set": "A",
    "clue": "What term names God’s perfect and original knowledge of himself and all divine truth?",
    "answer": "Archetypal theology",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "39B",
    "number": 39,
    "set": "B",
    "clue": "Which theology belongs fully and intrinsically to God rather than being communicated to creatures?",
    "answer": "Archetypal theology",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "40A",
    "number": 40,
    "set": "A",
    "clue": "What term names creaturely theology derived from and accommodated by God’s perfect self-knowledge?",
    "answer": "Ectypal theology",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "40B",
    "number": 40,
    "set": "B",
    "clue": "Which theology is a finite, true copy suited to the creature rather than divine comprehension itself?",
    "answer": "Ectypal theology",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "41A",
    "number": 41,
    "set": "A",
    "clue": "What Latin term describes theology as known by pilgrims during earthly life?",
    "answer": "Theologia viatorum",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "41B",
    "number": 41,
    "set": "B",
    "clue": "Which mode of theology is contrasted with the knowledge of the blessed in glory?",
    "answer": "Theologia viatorum",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "42A",
    "number": 42,
    "set": "A",
    "clue": "What scholastic term concerns the knowledge belonging to Christ’s human nature through personal union with the Word?",
    "answer": "Theologia unionis",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "42B",
    "number": 42,
    "set": "B",
    "clue": "Which “theology of union” is uniquely associated with the incarnate mediator?",
    "answer": "Theologia unionis",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "44A",
    "number": 44,
    "set": "A",
    "clue": "What slogan identifies faith alone as the instrument of justification?",
    "answer": "Sola fide",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "44B",
    "number": 44,
    "set": "B",
    "clue": "Which Latin formula excludes works from serving as the ground or co-instrument of the sinner’s acquittal?",
    "answer": "Sola fide",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "45A",
    "number": 45,
    "set": "A",
    "clue": "What slogan says salvation is grounded in and mediated by Christ alone?",
    "answer": "Solus Christus",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "45B",
    "number": 45,
    "set": "B",
    "clue": "Which formula denies any supplementary human mediator or saving foundation alongside Christ?",
    "answer": "Solus Christus",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "46A",
    "number": 46,
    "set": "A",
    "clue": "What Western creedal addition says the Spirit proceeds from the Father “and the Son”?",
    "answer": "Filioque",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "46B",
    "number": 46,
    "set": "B",
    "clue": "Which single Latin word remains central to the East–West dispute over the Spirit’s eternal origin?",
    "answer": "Filioque",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "47A",
    "number": 47,
    "set": "A",
    "clue": "What term names participation in divine life by grace without becoming divine by nature?",
    "answer": "Theosis",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "47B",
    "number": 47,
    "set": "B",
    "clue": "Which doctrine is often summarized as deification while maintaining the Creator–creature distinction?",
    "answer": "Theosis",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "48A",
    "number": 48,
    "set": "A",
    "clue": "Which council confessed one Christ in two natures without confusion, change, division, or separation?",
    "answer": "Council of Chalcedon",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "48B",
    "number": 48,
    "set": "B",
    "clue": "What 451 assembly supplied the classic boundary against both dividing and blending Christ’s natures?",
    "answer": "Council of Chalcedon",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "49A",
    "number": 49,
    "set": "A",
    "clue": "Which synod answered a five-article protest with heads of doctrine on election, atonement, corruption, grace, and perseverance?",
    "answer": "Canons of Dort",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "49B",
    "number": 49,
    "set": "B",
    "clue": "What 1618–19 confession is the source behind the later popular five-point summary of Calvinism?",
    "answer": "Canons of Dort",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "50A",
    "number": 50,
    "set": "A",
    "clue": "Which 1646 confession emerged from the assembly summoned by the English Parliament in 1643?",
    "answer": "Westminster Confession of Faith",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "50B",
    "number": 50,
    "set": "B",
    "clue": "What confession contains chapters on Scripture, God, decrees, covenant, Christ, free will, justification, worship, church, and last things?",
    "answer": "Westminster Confession of Faith",
    "topic": "Scripture, History & Scholastic Theology"
  },
  {
    "id": "51A",
    "number": 51,
    "set": "A",
    "clue": "What Greek title protects the confession that the person born from Mary is truly God the Son?",
    "answer": "Theotokos",
    "topic": "Mary"
  },
  {
    "id": "51B",
    "number": 51,
    "set": "B",
    "clue": "Which title, translated “God-bearer” or “Mother of God,” was defended at Ephesus?",
    "answer": "Theotokos",
    "topic": "Mary"
  },
  {
    "id": "52A",
    "number": 52,
    "set": "A",
    "clue": "What doctrine says Mary remained a virgin before, during, and after Christ’s birth?",
    "answer": "Perpetual virginity",
    "topic": "Mary"
  },
  {
    "id": "52B",
    "number": 52,
    "set": "B",
    "clue": "Which Marian belief interprets references to Jesus’ brothers without treating them as later biological children of Mary?",
    "answer": "Perpetual virginity",
    "topic": "Mary"
  },
  {
    "id": "53A",
    "number": 53,
    "set": "A",
    "clue": "What dogma says Mary was preserved from original sin from the first instant of her own conception?",
    "answer": "Immaculate Conception",
    "topic": "Mary"
  },
  {
    "id": "53B",
    "number": 53,
    "set": "B",
    "clue": "Which teaching is frequently confused with the virgin birth but concerns Mary’s conception rather than Christ’s?",
    "answer": "Immaculate Conception",
    "topic": "Mary"
  },
  {
    "id": "54A",
    "number": 54,
    "set": "A",
    "clue": "What dogma says Mary was taken body and soul into heavenly glory at the end of her earthly life?",
    "answer": "Assumption of Mary",
    "topic": "Mary"
  },
  {
    "id": "54B",
    "number": 54,
    "set": "B",
    "clue": "Which Marian teaching concerns bodily heavenly glorification and does not define whether Mary first died?",
    "answer": "Assumption of Mary",
    "topic": "Mary"
  },
  {
    "id": "55A",
    "number": 55,
    "set": "A",
    "clue": "What term names the unique degree of veneration given to Mary, distinguished from worship due to God?",
    "answer": "Hyperdulia",
    "topic": "Mary"
  },
  {
    "id": "55B",
    "number": 55,
    "set": "B",
    "clue": "Which category is placed above the honor given to other saints but infinitely below adoration of the Trinity?",
    "answer": "Hyperdulia",
    "topic": "Mary"
  },
  {
    "id": "70A",
    "number": 70,
    "set": "A",
    "clue": "What phrase names an empowering experience of the Spirit often distinguished from conversion and directed toward witness?",
    "answer": "Baptism in the Holy Spirit",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "70B",
    "number": 70,
    "set": "B",
    "clue": "Which experience is patterned by some interpreters after Acts 2, 8, 10, and 19 as empowerment subsequent to faith?",
    "answer": "Baptism in the Holy Spirit",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "71A",
    "number": 71,
    "set": "A",
    "clue": "What doctrine says tongues are the first outward sign that baptism in the Holy Spirit has occurred?",
    "answer": "Initial evidence",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "71B",
    "number": 71,
    "set": "B",
    "clue": "Which teaching treats glossolalia as the normative initial physical sign of Spirit baptism?",
    "answer": "Initial evidence",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "72A",
    "number": 72,
    "set": "A",
    "clue": "What Greek-derived word means speaking in tongues?",
    "answer": "Glossolalia",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "72B",
    "number": 72,
    "set": "B",
    "clue": "Which term names Spirit-enabled speech not naturally learned by the speaker?",
    "answer": "Glossolalia",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "73A",
    "number": 73,
    "set": "A",
    "clue": "What position expects New Testament miraculous gifts to remain possible in the church?",
    "answer": "Continuationism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "73B",
    "number": 73,
    "set": "B",
    "clue": "Which view denies that prophecy, tongues, and healing necessarily ended with the apostolic age?",
    "answer": "Continuationism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "74A",
    "number": 74,
    "set": "A",
    "clue": "What position holds that at least some revelatory or sign gifts ceased after the apostolic foundation was laid?",
    "answer": "Cessationism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "74B",
    "number": 74,
    "set": "B",
    "clue": "Which view regards certain miraculous gifts as non-normative for the post-apostolic church?",
    "answer": "Cessationism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "75A",
    "number": 75,
    "set": "A",
    "clue": "What doctrine expects God to heal in answer to prayer while not claiming that every sufferer will be healed immediately?",
    "answer": "Divine healing",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "75B",
    "number": 75,
    "set": "B",
    "clue": "Which teaching treats bodily healing as a continuing work of God and a subject of congregational prayer?",
    "answer": "Divine healing",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "76A",
    "number": 76,
    "set": "A",
    "clue": "What teaching connects sufficient faith or positive confession with guaranteed health and material wealth?",
    "answer": "Prosperity gospel",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "76B",
    "number": 76,
    "set": "B",
    "clue": "Which controversial message treats financial success and physical wellness as normally claimable covenant blessings?",
    "answer": "Prosperity gospel",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "77A",
    "number": 77,
    "set": "A",
    "clue": "What system organizes redemptive history into distinct divine administrations and usually distinguishes Israel from the Church?",
    "answer": "Dispensationalism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "77B",
    "number": 77,
    "set": "B",
    "clue": "Which framework is associated with a literal future for national Israel and successive dispensations?",
    "answer": "Dispensationalism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "78A",
    "number": 78,
    "set": "A",
    "clue": "What millennial position expects Christ’s return before the millennium?",
    "answer": "Premillennialism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "78B",
    "number": 78,
    "set": "B",
    "clue": "Which eschatological view places the parousia before the thousand-year reign?",
    "answer": "Premillennialism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "79A",
    "number": 79,
    "set": "A",
    "clue": "What view expects the Church to be caught up before a final seven-year tribulation?",
    "answer": "Pretribulation rapture",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "79B",
    "number": 79,
    "set": "B",
    "clue": "Which rapture timetable separates the Church’s catching away from Christ’s later public return by the tribulation?",
    "answer": "Pretribulation rapture",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "80A",
    "number": 80,
    "set": "A",
    "clue": "What emphasis treats personal turning to Christ and new birth as essential rather than inherited identity alone?",
    "answer": "Conversionism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "80B",
    "number": 80,
    "set": "B",
    "clue": "What term names the conviction that authentic faith requires a life-changing personal response to the gospel?",
    "answer": "Conversionism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "81A",
    "number": 81,
    "set": "A",
    "clue": "What emphasis places Christ’s atoning cross at the center of proclamation and devotion?",
    "answer": "Crucicentrism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "81B",
    "number": 81,
    "set": "B",
    "clue": "What term describes giving the cross controlling importance in preaching and piety?",
    "answer": "Crucicentrism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "82A",
    "number": 82,
    "set": "A",
    "clue": "What emphasis gives Scripture supreme practical authority for belief and life?",
    "answer": "Biblicism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "82B",
    "number": 82,
    "set": "B",
    "clue": "What term names a distinctive reliance upon the Bible as the controlling religious authority?",
    "answer": "Biblicism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "83A",
    "number": 83,
    "set": "A",
    "clue": "What emphasis turns faith outward into mission, reform, evangelism, and service?",
    "answer": "Activism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "83B",
    "number": 83,
    "set": "B",
    "clue": "What term describes energetic gospel action as a defining expression of faith?",
    "answer": "Activism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "84A",
    "number": 84,
    "set": "A",
    "clue": "What term criticizes reducing conversion to a momentary human choice produced by technique or pressure?",
    "answer": "Decisionism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "84B",
    "number": 84,
    "set": "B",
    "clue": "Which label describes making the decisive factor in salvation an isolated act of choosing, often symbolized by a raised hand or signed card?",
    "answer": "Decisionism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "85A",
    "number": 85,
    "set": "A",
    "clue": "What movement seeks extraordinary seasons of conversion and congregational renewal through intensified preaching and prayer?",
    "answer": "Revivalism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "85B",
    "number": 85,
    "set": "B",
    "clue": "Which historical impulse is associated with awakenings, itinerant evangelism, and organized efforts for widespread conversion?",
    "answer": "Revivalism",
    "topic": "Spirit & Evangelical Movements"
  },
  {
    "id": "86A",
    "number": 86,
    "set": "A",
    "clue": "What error makes the Son the highest creature rather than eternally God?",
    "answer": "Arianism",
    "topic": "Historical Errors"
  },
  {
    "id": "86B",
    "number": 86,
    "set": "B",
    "clue": "Which doctrine is excluded by confessing the Son as begotten, not made, and of one essence with the Father?",
    "answer": "Arianism",
    "topic": "Historical Errors"
  },
  {
    "id": "87A",
    "number": 87,
    "set": "A",
    "clue": "What error treats Father, Son, and Spirit as temporary modes rather than three eternal persons?",
    "answer": "Modalism",
    "topic": "Historical Errors"
  },
  {
    "id": "87B",
    "number": 87,
    "set": "B",
    "clue": "Which Trinitarian error makes one divine person successively appear under three names or roles?",
    "answer": "Modalism",
    "topic": "Historical Errors"
  },
  {
    "id": "88A",
    "number": 88,
    "set": "A",
    "clue": "What Christological error so separates Christ’s humanity and deity that they function as two personal subjects?",
    "answer": "Nestorianism",
    "topic": "Historical Errors"
  },
  {
    "id": "88B",
    "number": 88,
    "set": "B",
    "clue": "Which error is the opposite danger from collapsing Christ’s two natures into one?",
    "answer": "Nestorianism",
    "topic": "Historical Errors"
  },
  {
    "id": "89A",
    "number": 89,
    "set": "A",
    "clue": "What error says Christ’s humanity was absorbed into or confused with his deity after their union?",
    "answer": "Eutychianism",
    "topic": "Historical Errors"
  },
  {
    "id": "89B",
    "number": 89,
    "set": "B",
    "clue": "Which Christological position violates the Chalcedonian safeguards “without confusion” and “without change”?",
    "answer": "Eutychianism",
    "topic": "Historical Errors"
  },
  {
    "id": "90A",
    "number": 90,
    "set": "A",
    "clue": "What error says Christ only seemed to possess a material body and suffer?",
    "answer": "Docetism",
    "topic": "Historical Errors"
  },
  {
    "id": "90B",
    "number": 90,
    "set": "B",
    "clue": "Which early view makes the incarnation and crucifixion appearances rather than genuine bodily events?",
    "answer": "Docetism",
    "topic": "Historical Errors"
  },
  {
    "id": "91A",
    "number": 91,
    "set": "A",
    "clue": "What error says Jesus began as a merely human person and was later made God’s Son?",
    "answer": "Adoptionism",
    "topic": "Historical Errors"
  },
  {
    "id": "91B",
    "number": 91,
    "set": "B",
    "clue": "Which Christology turns divine sonship into a status conferred on an otherwise ordinary man?",
    "answer": "Adoptionism",
    "topic": "Historical Errors"
  },
  {
    "id": "92A",
    "number": 92,
    "set": "A",
    "clue": "What error replaces Christ’s rational human soul or mind with the divine Word?",
    "answer": "Apollinarianism",
    "topic": "Historical Errors"
  },
  {
    "id": "92B",
    "number": 92,
    "set": "B",
    "clue": "Which view compromises full humanity by giving Christ a human body but no complete human rational soul?",
    "answer": "Apollinarianism",
    "topic": "Historical Errors"
  },
  {
    "id": "93A",
    "number": 93,
    "set": "A",
    "clue": "What error says human beings can initiate and complete saving obedience without the necessity of inward grace?",
    "answer": "Pelagianism",
    "topic": "Historical Errors"
  },
  {
    "id": "93B",
    "number": 93,
    "set": "B",
    "clue": "Which doctrine treats Adam’s sin chiefly as bad example rather than inherited corruption requiring prevenient divine aid?",
    "answer": "Pelagianism",
    "topic": "Historical Errors"
  },
  {
    "id": "94A",
    "number": 94,
    "set": "A",
    "clue": "What label is commonly applied to the view that the unaided human will makes the first movement toward God before grace assists?",
    "answer": "Semi-Pelagianism",
    "topic": "Historical Errors"
  },
  {
    "id": "94B",
    "number": 94,
    "set": "B",
    "clue": "Which disputed category places the beginning of faith in natural human initiative and subsequent growth under grace?",
    "answer": "Semi-Pelagianism",
    "topic": "Historical Errors"
  },
  {
    "id": "95A",
    "number": 95,
    "set": "A",
    "clue": "What broad ancient movement promised salvation through secret knowledge and often treated matter as intrinsically inferior or evil?",
    "answer": "Gnosticism",
    "topic": "Historical Errors"
  },
  {
    "id": "95B",
    "number": 95,
    "set": "B",
    "clue": "Which family of teachings opposed the Creator or material order to a higher spiritual deity and offered liberating knowledge?",
    "answer": "Gnosticism",
    "topic": "Historical Errors"
  },
  {
    "id": "96A",
    "number": 96,
    "set": "A",
    "clue": "What fourth-century error denied the Holy Spirit’s full deity?",
    "answer": "Macedonianism",
    "topic": "Historical Errors"
  },
  {
    "id": "96B",
    "number": 96,
    "set": "B",
    "clue": "Which teaching about the Spirit was rejected when the creed confessed him as Lord and giver of life?",
    "answer": "Macedonianism",
    "topic": "Historical Errors"
  },
  {
    "id": "97A",
    "number": 97,
    "set": "A",
    "clue": "What schismatic error tied sacramental validity to the minister’s moral purity?",
    "answer": "Donatism",
    "topic": "Historical Errors"
  },
  {
    "id": "97B",
    "number": 97,
    "set": "B",
    "clue": "Which controversy forced the church to distinguish Christ’s sacramental action from the worthiness of the officiant?",
    "answer": "Donatism",
    "topic": "Historical Errors"
  },
  {
    "id": "98A",
    "number": 98,
    "set": "A",
    "clue": "What second-century system rejected the Old Testament’s God and accepted a sharply reduced Christian canon?",
    "answer": "Marcionism",
    "topic": "Historical Errors"
  },
  {
    "id": "98B",
    "number": 98,
    "set": "B",
    "clue": "Which movement severed the gospel from Israel’s Scriptures and edited Luke and Paul accordingly?",
    "answer": "Marcionism",
    "topic": "Historical Errors"
  },
  {
    "id": "99A",
    "number": 99,
    "set": "A",
    "clue": "What early modern error denied the Trinity and commonly rejected Christ’s personal pre-existence and satisfaction?",
    "answer": "Socinianism",
    "topic": "Historical Errors"
  },
  {
    "id": "99B",
    "number": 99,
    "set": "B",
    "clue": "Which early modern movement associated with the Racovian Catechism treated Christ as uniquely appointed but not the eternal divine Son?",
    "answer": "Socinianism",
    "topic": "Historical Errors"
  },
  {
    "id": "100A",
    "number": 100,
    "set": "A",
    "clue": "What position rejects the making or veneration of sacred images as contrary to Christian worship?",
    "answer": "Iconoclasm",
    "topic": "Historical Errors"
  },
  {
    "id": "100B",
    "number": 100,
    "set": "B",
    "clue": "Which controversy opposed defenders of icons at the Second Council of Nicaea?",
    "answer": "Iconoclasm",
    "topic": "Historical Errors"
  }
];
