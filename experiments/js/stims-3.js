var firstChapter =   {
    title: "An introduction to Dax",
    main_text: [
      "Dax is a lot like Earth.  Like Earth it has seven continents, in similar locations, but instead of North ",
      " America, South America, Africa, Europe, Asia, Australia, and Antarctica, the continents are  ",
      " called  Aga,  Benli, Caro, Dodi, Ente, Fale, and Gomi. Its climate is a lot like Earth's, too. But the",
      "  plants and animals of Dax are quite different."
    ],
    critical: false,
    query: false,
    type: "filler",
    kind: "NA",
    property1: "NA",
    property2: "NA",
    condition: "filler"
  }

var filler_chapters = [
  {
    title: "Zorxon, overlord of Dax",
    main_text: [
      "Zorxon is the overlord of Dax.  Everyone loves Zorxon because she ",
      "provides for all the aliens of Dax. However, Zorxon is now very old ",
      "and she rarely makes public appearances anymore. Still, she is very influential."
    ],
    critical: false,
    quantifier: "all",
    kind: "aliens",
    property1: "love Zorxon",
    property2: "are provided for by Zorxon",
    type: "filler"
  },
  {
    title: "Blins",
    main_text: [
      "Blins are small creatures. They all have hollow bones and fly. They sing beautiful songs to attract mates",
      "and distract their enemies when they attack."
    ],
    critical: false,
    quantifier: "all",
    type: "filler",
    kind: "blins",
    property1: "have hollow bones",
    property2: "fly"
  },
  {
    title: "Weather",
    main_text: [
      "The weather on Dax is very constant, not changing much from day to day. Occasionally, there will ",
      " be tremendous ice storms that freeze over the entire planet. These ice storms almost never last long ",
      " or result in permanent damage to the plants and animals on Dax."
    ],
    critical: false,
    quantifier: "almost none",
    kind: "ice storms on Dax",
    property1: "result in permanent damage to the plants and animals on Dax",
    property2: "last a long time",
    type: "filler"
  },
  {
    title: "Morseths",
    main_text: [
      "The morseth is an animal that lives part of its life in the sea and part of its life on land. Morseths come",
      " on land to find mates and to bury their dead. Some morseths build ",
      "permanent structures called fendles in order to bury their dead kin",
      "and fendles are usually made out of wood."
    ],
    critical: false,
    quantifier: "some",
    type: "filler",
    kind: "morseths",
    property1: "build permanent structures called fendles",
    property2: false,
  },
  {
    title: "Kazzes",
    main_text: [
      "Kazzes are a kind of plant that grow all over Dax. Some produce fruit in the springtime, but the",
      "  fruits are poisonous to animals. Only lorches can eat the kazzes ",
      " and do so quite frequently. Kazzes can be very tasty."
    ],
    critical: false,
    kind: "kazzes",
    property1: "are poisonous to lorches",
    property2: false,
    type: "filler",
    quantifier: "none"
  },
  {
    title: "Wint of the Mountains",
    main_text: [
        "Wint lived a long time ago in the mountains. He loved to travel, and ",
        "would often go as far as the oceans. But all aliens remember Wint ",
        "because he was the one that found the lost city of Baff."
    ],
    critical: false,
    kind: "aliens",
    property1: "remember Wint",
    property2: false,
    quantifier: "all",
    type: "filler",
    condition: "uninterrupted"
  },
  {
      title: "Plovs",
      main_text: [
  	"Plovs travel in herds and are very territorial. They used to live in the continent of Aga, but in recent",
  	"years have migrated to the continent Caro. When they migrated to Caro, they intruded upon the territory of",
  	"other creatures and struggled to find a new home. Now, they live quite happily near the water",
  	" and very seldom are attacked by other creatures."
      ],
      critical: false,
      kind: "plovs",
      property1: "are attacked by other creatures",
      property1: false,
      type: "filler",
      quantifier: "few"
  },
  {
      title: "Yomis",
      main_text: [
          "Yomis are small insect-like creatures. They all live in the borderland",
          "woodlands. They often fly towards the mountains in search of food ",
          "but they need to be careful of their natural predators, turmens."
      ],
      critical: false,
      kind: "yomis",
      property1: "live in the borderland woodlands",
      property2: false,
      type: "filler",
      condition: "single",
      quantifier: "all"
  },
  {
      title: "Mupors",
      main_text: [
          "Mupors are very social creatures. They live in extended family groups ",
          "consisting of multiple generations. Most of them build large triangular rebos ",
          "made of clay and grass, and they often enlarge their rebos in the spring."
      ],
      critical: false,
      kind: "mupors",
      property1: "build large triangular rebos",
      property2: false,
      type: "filler",
      condition: "single",
      quantifier: "most"
  },
  {
      title: "Apaffs",
      main_text: [
        "Apaffs are a nuisance for the aliens. They make burrows everywhere",
        "including in the middle of farmland and in front of their houses. But some aliens find apaffs",
        "cute, and even like to keep them as pets."
      ],
      critical: false,
      kind: "aliens",
      property1: "find apaffs cute and keep them as pets",
      property2: false,
      type: "filler",
      condition: "single",
      quantifier: "some"
  },
  {
      title: "Supools",
      main_text: [
          "Supools are the biggest creatures on Dax. They live in the oceans and ",
          "most of them live for a very long time. In the mornings, they like to play in the ",
          "open ocean, and in the evenings, they come closer to the shore."
      ],
      critical: false,
      kind: "supools",
      property1: "live for a very long time",
      property2: false,
      type: "filler",
      condition: "single",
      quantifier: "most"
  },
  {
      title: "Zorf the mapmaker",
      main_text: [
          "Zorf the mapmaker lives in the large forest city of Astom. In Astom, there are many ways to get",
          "from place to place, but the most popular way is through tunnels. All of the aliens use the tunnels",
          "to get around town."
      ],
      critical: false,
      kind: "aliens",
      property1: "use the tunnels to get around town",
      property2: false,
      type: "filler",
      condition: "single",
      quantifier: "all"
  },
  {
      title: "Wopis",
      main_text: [
          "Wopis are extremely rare creatures. They only live in the desert and ",
          "they all are very hard to find. Wopis sleep during the day to avoid ",
          "the heat, and look for food at night when it's cool."
      ],
      critical: false,
      kind: "wopis",
      property1: "are very hard to find",
      property2: false,
      type: "filler",
      condition: "single",
      quantifier: "all"
  },
  {
      title: "Nannus",
      main_text: [
          "Nannus only feed on rare flowers called lodeks. Most lodeks only ",
          "bloom for one day a year, and most have purple petals. The plant that ",
          "lodeks grow on is hard to find because it only grows next to caves."
      ],
      critical: false,
      kind: "lodeks",
      property1: "have purple petals",
      property2: false,
      type: "filler",
      condition: "single",
      quantifier: "most"
  }
]

var stims_chapters = [
  {
    title: "Customs and religion",
    main_text: [
      "The aliens are the most intelligent creatures on Dax. They live on all",
      "continents, and follow various traditions and old customs. They ascribe to the Caboo religion"
    ],
    continuation: {
      // critical: "and the Daith religion. All aliens have the same calendar and celebrate the same new year.",
      // filler: "and follow a strict code of laws. All aliens have the same calendar and celebrate the same new year."
      critical: "and the Daith religion.",
      filler: "and follow a strict code of laws."
    },
    critical: true,
    kind: "aliens",
    property1: "ascribe to the Caboo religion",
    property2: "ascribe to the Daith religion",
    type: "critical"
  },
  {
    title: "Glippets",
    main_text: [
      "Glippets are large creatures, quite intelligent, with a life-span of about sixty years. They live on the warm continent of Caro"
    ],
    continuation: {
      critical: "and on the chilly continent of Este.",
      filler: "and enjoy the sunshine there.",
    },
    // continuation: {
    //   critical: "and in Este. Glippets rarely attack other creatures, often being very content eating plants.",
    //   filler: "and enjoy the sunshine. Glippets rarely attack other creatures, often being very content eating plants.",
    // },
    query: true,
    critical: true,
    kind: "glippets",
    property1: "live in Caro",
    property2: "live in Este",
    type: "critical"
  },
  {
    title: "Mooks",
    main_text: [
      "Mooks are ferocious creatures, that one would be wise to not upset. Looking into their eyes should",
	" be avoided because it can cause seizures in the observer. Because they are very territorial",
	" creatures, they often use this skill to defend their own territory. Their preferred territories are at the tops of tall mountains",
    ],
    // continuation: {
    //   critical: "and at the bottom of deep canyons. They stalk their prey, sometimes waiting for days to attack.",
    //   filler: "and they look for tired animals. They stalk their prey, sometimes waiting for days to attack."
    // },
    continuation: {
      critical: "and at the bottom of deep canyons.",
      filler: "and they look for tired animals to hunt."
    },
    critical: true,
    kind: "mooks",
    property1: "prefer to have territories at the tops of tall mountains",
    property2: "prefer to have territories at the bottom of deep canyons",
    type: "critical"
  },
  {
    title: "Agriculture",
    main_text: [
      "The soil on the continent of Benli is very fertile, and the aliens have learned to grow many crops. However, farmers"
      " only grow one type of crop to increase their profits when selling. Their",
      " farms are very big, often stretching several miles in every direction. During the springtime, the aliens flood their fields to plant fujusi"
    ],
    continuation: {
      critical: "and burn their fields to plant soroneeks.",
      filler: "and in the summer watch their fields carefully."
    },
    // continuation: {
    //   critical: "and burn their fields to plant soroneeks. In the fall, they harvest and communities will come together to celebrate.",
    //   filler: "and in the summer watch their fields carefully. In the fall, they harvest and communities will come together to celebrate."
    // },
    critical: true,
    kind: "farmers",
    property1: "flood their fields to plant fujusi",
    property2: "burn their fields to plant soroneeks",
    type: "critical"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are smaller, nocturnal creatures. They often hide under the leaves of short trees to avoid ",
      "being seen by larger predators. They scrape the bark off trees to eat. Their mating habits are very complex.",
      " They mate for life, and the males often bring twigs and leaves to the females during courtship. The mated pairs use these twigs and leaves to build their elaborate nests in gluers"
    ],
    continuation: {
      critical: "and in droops.",
      filler: "and watch over them carefully."
    },
    // continuation: {
    //   critical: "and in droops. Baby fengnors stay in the nest until they are mature enough to scrape their own bark.",
    //   filler: "and watch over them carefully. Baby fengnors stay in the nest until they are mature enough to scrape their own bark."
    // },
    query: true,
    critical: true,
    kind: "fengnor mated pairs",
    property1: "build nests in gluers",
    property2: "build nests in droops",
    type: "critical"
  },
  {
    title: "Finding food",
    main_text: [
      "Krens are a tribe of the aliens that do not live on the agricultural continent of Benli. ",
      "Like most creatures on Dax, Krens eat other creatures to survive. Animals like stups, four-legged creatures with large antlers,",
      " are a resource for many. Stups roam all over the windy highlands of Dax, far from the oceans. Krens are stup-herders",
      // "Like most creatures on Dax, Krens eat other creatures. They fish for kazzes",

    ],
    continuation: {
      critical: "and fishermen.",
      filler: "and incorporate stups into their religion.",
    },
    // continuation: {
    //   critical: "and fishermen. The seas of Dax are full of fish.",
    //   filler: "and incorporate stups into their religion.",
    // },
    critical: true,
    kind: "Krens",
    property1: "are stup-herders",
    property2: "are fishermen",
    type: "critical"
  },
  {
    title: "Migration patterns",
    main_text: [
      "Lorches have massive wingspans and are found on the continents of Dodi and Gomi. They eat fish",
      "and big insects. In the winter, they migrate south from Dodi to Benli",
    ],
    continuation: {
      critical: "and north from Gomi to Caro.",
      filler: "and fly only at night."
    },
    // continuation: {
    //   critical: "and fly only at night. Lorches pair-bond: Once they choose a mate, they stay with them for life. ",
    //   filler: "and north from Gomi to Caro. Lorches pair-bond: Once they choose a mate, they stay with them for life. "
    // },
    critical: true,
    kind: "lorches",
    property1: "migrate south from Dodi to Benli",
    property2: "migrate north from Gomi to Caro",
    type: "critical"
  },
  {
    title: "Reesles",
    main_text: [
	"Reesles are strange, furry creatures, often found in the homes of the aliens. They are not house pets but quasi-domensticated animals. ",
	"They will steal food from you if you are not paying attention. They have special headgear to help other aliens identify their owners. Around their heads, they wear giant wutsats"
    ],
    continuation: {
      critical: "and krevnors.",
      filler: "and roam around by themselves at night."
    },
    // continuation: {
    //   critical: "and krevnors. They like to make loud noises early in the mornings.",
    //   filler: "and roam around by themselves at night. They like to make loud noises early in the mornings."
    // },
    critical: true,
    kind: "reesles",
    property1: "wear wutsats around their heads",
    property2: "wear krevnors around their heads",
    type: "critical"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. Their rigid pack roles are reflected in everything from sleeping locations to eating habits. ",
      "Kweps go out at night and look for creatures sleeping at the foot of trees. They",
      "generally look for creatures sleeping alone, not in groups. Before they hunt, they like to chew on xorfun"
    ],
    continuation: {
      critical: "and on tunkel.",
      filler: "and jump up and down in circles."
    },
    // continuation: {
    //   critical: "and on tunkel. Kweps carry a benign genetic mutation called GS-451.",
    //   filler: "and jump up and down in circles. Kweps carry a benign genetic mutation called GS-451."
    // },
    critical: true,
    kind: "kweps",
    property1: "like to chew on xorfun",
    property2: "like to chew on tunkel",
    type: "critical"
  },
  {
    title: "Ollers",
    main_text: [
      "Ollers spend most of their lives in water, but occasionally come on land to gather berries. The tools, like baskets, that ollers use on land ",
      "are very difficult to make and are passed down from parents to children, so that each family only has one of each kind of tool.",
      " Baby ollers find it very exciting to be on land, but they have trouble walking. While on land, ollers carry their young in guklags"
    ],
    // continuation: {
    //   critical: "and in pundegs. Ollers are a playful creature, but they do not take well to strangers when they are carrying their babies.",
    //   filler: "and are very protective. Ollers are a playful creature, but they do not take well to strangers when they are carrying their babies."
    // },
    continuation: {
      critical: "and in pundegs.",
      filler: "and are very protective."
    },
    critical: true,
    kind: "ollers",
    property1: "carry their young in guklags",
    property2: "carry their young in pundegs",
    type: "critical"
  }
]

// var creatureNames =
//     [
//     {list:0,category: "morseths", exemplar:"morseth"},
//     {list:1, category: "ollers", exemplar:"oller"},
//     {list:2, category: "kweps", exemplar:"kwep"},
//     {list:0,category: "blins", exemplar:"blin"},
//     {list:1, category: "reesles", exemplar:"reesle"},
//     {list:2, category: "dorbs", exemplar:"dorb"},
//     {list:0,category: "zorbs", exemplar:"zorb"},
//     {list:1, category: "taifels", exemplar:"taifel"},
//     {list:2, category: "trufts", exemplar:"truft"},
//     {list:0,category: "daiths", exemplar:"daith"},
//     {list:1, category: "mooks", exemplar:"mook"},
//     {list:2, category: "frams", exemplar:"fram"},
//     {list:0,category: "moxes", exemplar:"mox"},
//     {list:1, category: "luzaks", exemplar:"luzak"},
//     {list:2, category: "javs", exemplar:"jav"},
//     // {list:0,category: "pangolins", exemplar:"pangolin"},
//     {list:1, category: "ackles", exemplar:"ackle"},
//     {list:2, category: "wugs", exemplar:"wug"},
//     {list:0,category: "cheebas", exemplar:" cheeba"},
//     {list:1, category: "elleps", exemplar:"ellep"},
//     {list:2, category: "kazzes", exemplar:"kaz"},
//     {list:0,category: "lorches", exemplar:"lorch"},
//     {list:1, category: "plovs", exemplar:"plov"},
//     {list:2, category: "grinks", exemplar:"grink"},
//     {list:0,category: "glippets", exemplar:"glippet"},
//     {list:1, category: "sapers", exemplar:"saper"},
//     {list:2, category: "stups", exemplar:"stup"},
//     {list:0,category: "krivels", exemplar:"krivel"},
//     {list:1, category: "zoovs", exemplar:"zoov"},
//     {list:2, category: "thups", exemplar:"thup"},
//     {list:3, category: "crullets", exemplar:"crullet"},
//     {list:3, category: "feps", exemplar:"fep"},
//     {list:3, category: "dobles", exemplar:"doble"},
//     {list:3, category: "fendles", exemplar:"fendle"},
//     {list:3, category: "dunkels", exemplar:"dunkel"},
//     {list:3, category: "ludinos", exemplar:"ludino"},
//
//     ]
//
//
var stim_properties = [
  {
    verb: "live in",
    uninterrupted: "Africa",
    continuation: "Asia",
    kind: "glippets",
  },
  {
    verb: "build nests in",
    uninterrupted: "trees",
    continuation: "caves",
    kind: "lorches"
  },
  {
    verb: "",
    single: "lay eggs",
    continuation: "give live birth",
    kind: "wugs"
  },
  {
    verb: "swim in",
    single: "lakes",
    continuation: "rivers",
    kind: "morseths",
  },
  {
    verb: "get",
    single: "cancer",
    continuation: "rabies",
    kind: "reesles"
  },
  {
    verb: "pray in",
    single: "synogogues",
    continuation: "mosques",
    kind: "residents of the town of Kiryat Lezion"
  },
  {
    verb: "try",
    single: "criminal cases",
    continuation: "civil cases",
    kind: "lawyers in the law firm Escondido"
  },
  {
    verb: "grow",
    single: "corn",
    continuation: "soy",
    kind: "farmers in the town of Boone"
  },
  {
    verb: "are",
    single: "fisherman",
    continuation: "reindeer herders",
    kind: "the indigenous people of Scandinavia"
  },
  {
    verb: "teach",
    single: "science",
    continuation: "history",
    kind: "instructors at the governor's school"
  },
  {
    verb: "live in",
    single: "houses",
    continuation: "apartment buildings",
    kind: "residents of the town of Tumbling Rapids"
  }
]

// "people pray in churches, synogogues, and mosques"
// "lawyers handle criminal and civil cases"
// "farmers grow corn and soy"
// "Sami are fishers and reindeer herders"
// "at the governor's school, they teach math and physics"
// "residents of this town shop at costco and sam's club"
// "people shop at walmart and whole foods"
// "residents of detroit live in apartment buildings and houses"
// the examples seem to be best for properties that exhaust the space

//
// var stim_properties = [
//   { property: "have four legs", type: "physical" },
//   { property: "have spots", type: "physical" },
//   { property: "have brown fur", type: "physical" },
//   { property: "have very long wings", type: "physical" },
//   { property: "have an exquisite sense of smell", type: "physical" },
//   { property: "have intensely beautiful feathers", type: "physical" },
//   { property: "live to be twenty years old", type: "physical" },
//   { property: "live to be a hundred years old", type: "physical" },
//   { property: "live to be five hundred years old", type: "physical" },
//
//   { property: "are afraid of loud noises", type: "psychological" },
//   { property: "are afraid of dogs", type: "psychological" },
//   { property: "are intelligent", type: "psychological" },
//   { property: "experience empathy", type: "psychological" },
//   { property: "experience emotions", type: "psychological" },
//   { property: "have personalities", type: "psychological" },
//   { property: "mourn their dead", type: "psychological" },
//   { property: "develop phobias", type: "psychological" },
//   { property: "know when earthquakes are about to happen", type: "psychological" },
//   { property: "know how to open doors", type: "psychological" },
//   { property: "know how to ride bicycles", type: "psychological" },
//
//   { property: "use tools", type: "behavior" },
//   { property: "sleep during the day", type: "behavior"},
//   { property: "sing beautiful songs", type: "behavior"},
//   { property: "swim in shallow pools", type: "behavior"},
//   { property: "fly into building windows", type: "behavior"},
//   { property: "do handstands to scare off predators", type: "behavior"},
//   { property: "perform in the circus", type: "behavior"},
//   { property: "ride the subway", type: "behavior"},
//   { property: "play with bottlecaps", type: "behavior"},
//   { property: "chase their tails", type: "behavior"},
//   { property: "like to cuddle", type: "behavior"},
//
//   { property: "capture other animals' territory", type: "behavior_aggressive"},
//   { property: "hunt other animals", type: "behavior_aggressive"},
//   { property: "steal farmers' crops", type: "behavior_aggressive"},
//   { property: "get in fights with other animals", type: "behavior_aggressive"},
//   { property: "pound their chests to display dominance", type: "behavior_aggressive"},
//   { property: "torture other animals", type: "behavior_aggressive"},
//   { property: "attack hikers", type: "behavior_aggressive"},
//   { property: "carry out premeditated murder", type: "behavior_aggressive"},
//
//   { property: "eat garbage", type: "diet" },
//   { property: "eat human food", type: "diet" },
//   { property: "eat grass", type: "diet" },
//   { property: "feed on the carcasses of dead animals", type: "diet" },
//   { property: "eat insects", type: "diet" },
//   { property: "eat candy wrappers", type: "diet" },
//   { property: "eat people", type: "diet" },
//   { property: "cannibalize each other", type: "diet" },
//   { property: "drink soda", type: "diet" },
//   { property: "drink alcohol left behind by tourists", type: "diet" },
//   { property: "eat cannabis", type: "diet" },
//   { property: "fish in the Hudson River", type: "diet" },
//
//   { property: "live in trees", type: "habitat" },
//   { property: "live in zoos", type: "habitat" },
//   { property: "live in the hulls of sea vessels", type: "habitat" },
//   { property: "live in urban areas", type: "habitat" },
//   { property: "live in high-rise buildings", type: "habitat" },
//
//   { property: "carry Lyme disease", type: "disease_other"},
//   { property: "carry malaria", type: "disease_other"},
//   { property: "transmit HIV", type: "disease_other"},
//   { property: "transmit rabies", type: "disease_other"},
//
//   { property: "get addicted to nicotine", type: "disease_self"},
//   { property: "develop back problems", type: "disease_self"},
//   { property: "have seizures", type: "disease_self"},
//   { property: "have strange genetic mutations", type: "disease_self"},
//   { property: "get dandruff", type: "disease_self"},
//   { property: "get cancer", type: "disease_self"},
//   { property: "lose their teeth", type: "disease_self"},
//   { property: "go bald", type: "disease_self"},
//
//   { property: "give birth underwater", type: "reproduction"},
//   { property: "lay eggs in other birds' nests", type: "reproduction"},
//   { property: "lay eggs without needing fertilization", type: "reproduction"},
//   { property: "attract mates by secreting pheromones", type: "reproduction"},
//   { property: "get erections", type: "reproduction"},
//   { property: "have a menstrual cycle", type: "reproduction"},
//   { property: "have dozens of sexual partners", type: "reproduction"}
//
// ]
//
//

//     var preamble = "The results are shown below:"
//
//     var tasks = {
//       speaker: {
//         frequencies: [20, 70],
//         prompt: "The results of the experiment with SPECIAL were found.",
//         utterance: "SPECIAL TARGET.",
//         question: "Does SPECIAL QUERY?",
//         frequencyStatement: "Your team treated 100 CATEGORY with SPECIAL."
//         //" The number of CATEGORY that were successfully PAST (out of 100) with SPECIAL was:"
//       },
//       listener: {
//         prompt: "The results of the experiment with SPECIAL were found.",
//         utterance: "SPECIAL TARGET.",
//         question: "How many out of 100 UNIT do you think PAST?"
//       }
//     }
//
//     var rarity = 3; // (how many out of 10 will have it?)
//
//     var zeroDist = gaussian(0, 1.2);
//     var sampleNull = function(){
//       var s = zeroDist.ppf(Math.random())
//       var si = s > 0 ? s : 0
//       return Math.round(si)
//     }
//
//     var deterministic = gaussian(100, 3);
//     var sampleDeterministic = function(){
//       var s = deterministic.ppf(Math.random())
//       var si = s < 100 ? s : 100
//       return Math.round(si)
//     }
//
//     var weak = gaussian(20, 2);
//     var strong = gaussian(80, 5);
//
//     var rare_weak_samples = [], common_weak_samples = [];
//     var rare_strong_samples = [], common_strong_samples = [];
//     var rare_deterministic_samples = [], common_deterministic_samples = [];
//
//     // rare weak distribution
//     for (var i=0; i<10; i++){
//       if (i < rarity) {
//         var s = weak.ppf(Math.random())
//         rare_weak_samples.push(Math.round(s));
//       } else {
//         rare_weak_samples.push(sampleNull());
//       }
//     }
//
//     // common weak
//     for (var i=0; i<10; i++){
//       var s = weak.ppf(Math.random())
//       common_weak_samples.push(Math.round(s));
//     }
//
//
//     // common determinsitic
//     for (var i=0; i<10; i++){
//       common_deterministic_samples.push(sampleDeterministic());
//     }
//     for (var i=0; i<10; i++){
//       if (i < rarity) {
//         rare_deterministic_samples.push(sampleDeterministic());
//       } else {
//         rare_deterministic_samples.push(sampleNull());
//       }
//     }
//
//
//     // console.log(rare_weak_samples)
//
//     var distributions = [
//       {
//         distribution: "rare_weak",
//         data: _.shuffle(rare_weak_samples)
//       },
//       {
//         distribution: "common_weak",
//         data: _.shuffle(common_weak_samples)
//       },
//       // {
//       //   distribution: "rare_strong",
//       //   data: [75, 0, 65, 0, 80, 90, 0, 0, 80, 90]
//       // },
//       // {
//       //   distribution: "common_strong",
//       //   data: [75, 65, 65, 75, 80, 90, 80, 75, 80, 90]
//       // },
//       {
//         distribution: "rare_deterministic",
//         data: _.shuffle(rare_deterministic_samples)
//       },
//       {
//         distribution: "common_deterministic",
//         data: _.shuffle(common_deterministic_samples)
//       },
//       // {
//       //   distribution: "weak_or_strong",
//       //   data: [85, 75, 15, 75, 10, 90, 90, 80, 10, 20]
//       // }
//     ]
