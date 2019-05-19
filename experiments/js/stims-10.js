var firstChapter = {
  title: "An introduction to Dax",
  main_text: [
    "Dax is a lot like Earth.  Like Earth it has seven continents, in similar locations, but instead of North ",
    " America, South America, Africa, Europe, Asia, Australia, and Antarctica, the continents are  ",
    " called  Aga,  Benli, Caro, Dodi, Ente, Fale, and Gomi. Its climate is a lot like Earth's, too. But the",
    "  plants and animals of Dax are quite different."
  ],
  type: "filler",
  kind: "NA",
  property1: "NA",
  property2: "NA",
  condition: "uninterrupted"
}

var filler_chapters = [
  {
    title: "Zorxon, overlord of Dax",
    main_text: [
      "Zorxon is the overlord of Dax.  Everyone loves Zorxon because she ",
      "provides for all the aliens of Dax. However, Zorxon is now very old ",
      "and she rarely makes public appearances anymore. Still, she is very influential."
    ],
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
      "be tremendous ice storms that freeze over the entire planet. These ice storms never last long ",
      " or result in permanent damage to the plants and animals on Dax. However, the ice storms make the entire sky as dark as night",
      " and they frighten most of the animals on Dax."
    ],
    quantifier: "none",
    kind: "ice storms on Dax",
    property1: "result in permanent damage to the plants and animals on Dax",
    property2: "last a long time",
    type: "filler"
  },
  {
    title: "Morseths",
    main_text: [
      "The morseth is an animal that lives part of its life in the sea and part of its life on land. Most morseths ",
      "come on land to find mates and to bury their dead. Most morseths build permanent structures called fendles in order to bury their dead ",
      "kin, and fendles are usually made out of wood."
    ],
    quantifier: "most",
    type: "filler",
    kind: "morseths",
    property1: "build permanent structures called fendles",
    property2: "come on land to find mates",
  },
  {
    title: "Kazzes",
    main_text: [
      "Kazzes are a kind of plant that grow all over Dax. They produce fruit in the springtime, but the",
      " fruit is poisonous to animals. No feps eat kazzes nor do they come close. Kazzes can be highly toxic ",
      "and this poison is a defensive mechanism for kazzes."
    ],
    kind: "feps",
    property1: "eat kazzes",
    property2: "come close to kazzes",
    type: "filler",
    quantifier: "none"
  },
  {
    title: "Wint of the Mountains",
    main_text: [
      "Wint lived a long time ago in the mountains. He loved to travel, and ",
      "would often go as far as the oceans. But all aliens remember Wint and admire him because he was the one that found the lost city of Baff ",
      "and that rescued the ancient alien artifact from the city."
    ],
    kind: "aliens",
    property1: "remember Wint",
    property2: "admire Wint",
    quantifier: "all",
    type: "filler",
    condition: "uninterrupted"
  },
  {
    title: "Plovs",
    main_text: [
      "Plovs travel in herds and are very territorial. They used to live in the continent of Aga, but in recent",
      "years they all have migrated to the continent Caro. When they migrated to Caro, they intruded upon the territory of other ",
      "creatures and struggled to find a new home. Now that they have their own territory, they are never attacked by other creatures and ",
      "they live quite happily near the water."
    ],
    kind: "plovs",
    property1: "live in the continent of Aga",
    property2: "are attacked by other creatures",
    type: "filler",
    quantifier: "none"
  },
  {
    title: "Yomis",
    main_text: [
      "Yomis are small, fast insect-like creatures. They all live in the ",
      "borderland woodlands. They all fly towards the mountains in search of food, but they need to be careful ",
      "of their natural predators, turmens."
    ],
    kind: "yomis",
    property1: "live in the borderland woodlands",
    property2: "fly towards the mountains in search of food",
    type: "filler",
    condition: "single",
    quantifier: "all"
  },
  {
    title: "Mupors",
    main_text: [
      "Mupors are very social creatures. Most of them live in extended family groups consisting of ",
      "multiple generations. Most of them also build large triangular rebos ",
      "made of clay and grass."
    ],
    kind: "mupors",
    property1: "live in extended family groups",
    property2: "build large triangular rebos",
    type: "filler",
    condition: "single",
    quantifier: "most"
  },
  {
    title: "Apaffs",
    main_text: [
      "Apaffs are a nuisance for the aliens. They make burrows everywhere",
      "including in the middle of farmland and in front of their houses. But most aliens find apaffs cute, and tolerate them to some extent. Some ",
      "aliens even like to keep them as pets."
    ],
    kind: "aliens",
    property1: "find apaffs cute",
    property2: "tolerate apaffs to some extent",
    type: "filler",
    condition: "single",
    quantifier: "most"
  },
  {
    title: "Supools",
    main_text: [
      "Supools are the biggest creatures on Dax. They all live in the oceans and ",
      "all of them live for a very long time. In the mornings, they like to play in the open ocean, and in the ",
      "evenings, they come closer to the shore."
    ],
    kind: "supools",
    property1: "live in the oceans",
    property2: "live for a very long time",
    type: "filler",
    condition: "single",
    quantifier: "all"
  },
  {
    title: "Zorf the mapmaker",
    main_text: [
      "Zorf the mapmaker lives in the large forest city of Astom. In Astom, there are many ways to get",
      "from place to place, but the most popular way is through tunnels. All of the Astom aliens use the tunnels",
      "to get around town from their homes in the residential quarter. Since all of the Astom aliens live there, it's peaceful during the day ",
      "but very crowded at night."
    ],
    kind: "Astom aliens",
    property1: "use the tunnels to get around town",
    property2: "live in the residential quarter",
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
    kind: "wopis",
    property1: "live in the desert",
    property2: "are very hard to find",
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
    kind: "lodeks",
    property1: "only bloom for one day a year",
    property2: "have purple petals",
    type: "filler",
    condition: "single",
    quantifier: "most"
  }
]

var stims_chapters = [
  {
    title: "Ludinos",
    main_text: [
      "The Ludinos are an alien tribe. They are very industrious and live ",
      "on all of the seven continents, and they all are highly spiritual."
    ],
    continuation: {
      critical: "and the Daith religion",
      filler: "and follow a strict code of laws",
      nme: "pray three times a day"
    },
    kind: {
      plural: "Ludinos",
      singular: "Ludino"
    },
    properties: [
      {
        property1: {
          singular: "ascribes to the Caboo religion",
            plural: "ascribe to the Caboo religion",
	    supportFirst: "On Dax, there is a religion called the Caboo religion.",
	    supportSecond: "There is another religion called the Caboo religion."
        },
        property2: {
          singular: "ascribes to the Daith religion",
            plural: "ascribe to the Daith religion",
	    supportFirst: "On Dax, there is a religion called the Daith religion.",
	    supportSecond: "There is another religion called the Daith religion."
        }
      },
      {
        property1: {
          singular: "lives in cities",
            plural: "live in cities",
	    supportFirst: "",
	    supportSecond: ""
        },
        property2: {
          singular: "lives in the countryside",
            plural: "live in the countryside",
	    supportFirst: "",
	    supportSecond: ""
        }
      }
    ],
    nme_property: {
      singular: "prays three times a day",
	plural: "pray three times a day",
	support: ""
    },
    type: "critical",
    continuationType: "fakeNames",
    coordination: "np",
    memory: "Ludinos are very industrious"
  },
  {
    title: "Glippets",
    main_text: [
      "Glippets are large creatures, quite intelligent, with a life-span of about ",
      "sixty years."
    ],
    continuation: {
      critical: "and on the northern continent of Este",
      filler: "and enjoy the sunshine there",
      nme: "and graze on the tall grasses"
    },
    kind: {
      plural: "glippets",
      singular: "glippet"
    },
    properties: [
      {
        property1: {
          singular: "lives on the continent of Caro",
            plural: "live on the continent of Caro",
	    supportFirst: "One of the continents on Dax is called Caro.",
	    supportSecond: "There is another continent called Caro."
        },
        property2: {
          singular: "lives on the continent of Este",
            plural: "live on the continent of Este",
	    supportFirst: "One of the continents on Dax is called Este.",
	    supportSecond: "There is another continent called Este."
        }
      }
    ],
    nme_property: {
      singular: "grazes on tall grasses",
	plural: "graze on tall grasses",
	support: ""
    },
    type: "critical",
    continuationType: "fakeNames",
    coordination: "pp",
    memory: "glippets have a life-span of about 60 years"
  },
  {
    title: "Mooks",
    main_text: [
      "Mooks are ferocious creatures that live on the continent of Benli. Benli has dramatic elevation changes ",
      "unlike any other continent on Dax. Animals find terrority in locations that will maximize their chances ",
      "of survival.",
    ],
    continuation: {
      critical: "and at the bottom of deep canyons",
      filler: "and one would be wise to keep their distance from them",
      nme: "and watch over the low-lying regions during the day"
    },
    kind: {
      plural: "mooks",
      singular: "mook"
    },
    properties: [
      {
        property1: {
          singular: "has territory at the tops of tall mountains",
            plural: "have territories at the tops of tall mountains",
	    supportFirst: "",
	    supportSecond: ""
        },
        property2: {
          singular: "has territory at the bottom of deep canyons",
            plural: "have territories at the bottoms of deep canyons",
	    supportFirst: "",
	    supportSecond: ""
        }
      }
    ],
    nme_property: {
      singular: "watches over the low-lying regions during the day",
	plural: "watch over the low-lying regions during the day",
	support: ""
    },
    type: "critical",
    continuationType: "real",
    coordination: "pp",
    memory: "mooks live on the continent of Benli"
  },
  {
    title: "Agriculture",
    main_text: [
      "The soil on the continent of Aga is very fertile, and the aliens have learned to grow many crops. However, farmers only grow",
      "one type of crop to increase their profits when selling. Their farms are very big, often stretching ",
      "several miles in every direction."
    ],
    continuation: {
      critical: "and burn their fields to plant soroneeks",
      filler: "and in the summer watch their fields carefully",
      nme: "and spray them with a naturally-occurring fertilizer"
    },
    kind: {
      plural: "farmers in the springtime",
      singular: "farmer in the springtime"
    },
    properties: [
      {
        property1: {
          singular: "floods their fields to plant fujusi",
            plural: "flood their fields to plant fujusi",
	    supportFirst: "Fujusi are plants, similar to rice, that require a lot of water to grow.",
	    supportSecond: "Fujusi are a plants, similar to rice, that require a lot of water to grow."
	},
        property2: {
          singular: "burns their fields to plant soroneeks",
            plural: "burn their fields to plant soroneeks",
	    supportFirst: "Soroneeks are tall plants that thrive in fertile soil.",
	    supportSecond: "Soroneeks are tall plants that thrive in fertile soil."
        }
      }
    ],
    nme_property: {
      singular: "sprays their fields with a naturally-occurring fertilizer",
	plural: "spray their fields with a naturally-occurring fertilizer",
	support: ""
    },
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "vp",
    memory: "farmers only grow one type of crop"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are smaller, nocturnal creatures. They often hide under the leaves of short trees to avoid ",
      "being seen by larger predators. They scrape the bark off trees to eat. They have highly complex",
      "mating habits. They mate for life, and the males often bring twigs and leaves to the females during",
      "courtship."
    ],
    continuation: {
      critical: "and in droops",
      filler: "and watch over them carefully",
      nme: "and store tree-bark in them for safe keeping"
    },
    kind: {
      plural: "fengnor mated pairs",
      singular: "fengnor mated pair"
      },
    properties: [
      {
        property1: {
          singular: "builds nests in gluers",
            plural: "build nests in gluers",
	    supportFirst: "Gluers are tree-like plants with purple, needle-like leaves.",
	    supportSecond: "Gluers are tree-like plants with purple, needle-like leaves."
        },
        property2: {
          singular: "builds nests in droops",
            plural: "build nests in droops",
	    supportFirst: "Droops are tree-like plants with broad, orange leaves.",
	    supportSecond: "Droops are tree-like plants with broad, orange leaves."
        }
      }
    ],
    nme_property: {
      singular: "stores tree-bark in their nests for safe keeping",
	plural: "store tree-bark in their nests for safe keeping",
	support: ""
    },
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "pp",
    memory: "fengnors hide under the leaves of short trees"
  },
  {
    title: "Finding food",
    main_text: [
      "Krens are a tribe of the aliens that live on the continent of Benli, which has no agriculture. Like most ",
      "creatures on Dax, Krens eat other creatures to survive. Animals like stups, four-legged creatures with ",
      "large antlers, are a resource for the Krens. Stups roam all over the windy highlands of Benli, far from the oceans."
    ],
    continuation: {
      critical: "and fishermen",
      filler: "and incorporate stups into their religion",
      nme: "and sing songs to the stups to help them relax",
    },
    kind: {
      plural: "Krens",
      singular: "Kren"
    },
    properties: [
      {
        property1: {
          singular: "is a stup-herder",
            plural: "are stup-herders",
	    supportFirst: "Stup-herders care for the stups and make money from selling their meat.",
	    supportSecond: "Stup-herders care for the stups and make money from selling their meat."
        },
        property2: {
          singular: "is a fisherman",
            plural: "are fishermen",
	    supportFirst: "",
	    supportSecond: ""
        }
      }
    ],
    nme_property: {
      singular: "sings songs to the stups to help them relax",
	plural: "sing songs to the stups to help them relax",
	support: ""
    },
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "np",
    memory: "stups are a resource for the Krens"
  },
  {
    title: "Lorches",
    main_text: [
      "Lorches have massive beaks and are found on the continents of Dodi and Gomi. The two continents",
      "are quite different in what kinds of animals are available for them to eat."
    ],
    continuation: {
      critical: "and short wings",
      filler: "and fly only at night",
      nme: "and sharp claws",
    },
    kind: {
      plural: "lorches",
      singular: "lorch"
    },
    properties: [
      {
        property1: {
          singular: "has long wings",
            plural: "have long wings",
	    supportFirst: "",
	    supportSecond: ""
        },
        property2: {
          singular: "has short wings",
            plural: "have short wings",
	    supportFirst: "",
	    supportSecond: ""
        }
      }
    ],
    nme_property: {
      singular: "has sharp claws",
	plural: "have sharp claws",
	support: ""
    },
    type: "critical",
    continuationType: "real",
    coordination: "np",
    memory: "lorches have massive beaks"
  },
  {
    title: "Reesles",
    main_text: [
     "Reesles are strange, furry creatures, often found in the homes of the aliens. They are not house pets ",
     "but quasi-domesticated animals. They will steal food from you if you are not paying attention. They have",
      "special headgear to help other aliens identify their owners."
    ],
    continuation: {
      critical: "and krevnors",
      filler: "and roam around by themselves at night",
      nme: "and carry sticks with them"
    },
    kind: {
      plural: "reesles",
      singular: "reesle"
    },
    properties: [
      {
        property1: {
          singular: "wears a wutsat around its head",
            plural: "wear wutsats around their heads",
	    supportFirst: "Wutsats are a kind of brightly-colored headband made from reeds.",
	    supportSecond: "Wutsats are a kind of brightly-colored headband made from reeds."
        },
        property2: {
          singular: "wear a krevnor around its head",
            plural: "wear krevnors around their heads",
	    supportFirst: "Krevnors are multicolored scarves made from rough cloth.",
	    supportSecond: "Krevnors are multicolored scarves made from rough cloth."
        }
      }
    ],
    nme_property: {
      singular: "carries a stick",
	plural: "carry sticks",
	support: ""
    },
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "np",
    memory: "reesles are quasi-domesticated animals"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. Even though they are pack animals, all of them have highly idiosyncractic food ",
      "preferences and behaviors. Some of them like to eat apples and others like to eat oranges. When they go ",
      "hunting at night they look for creatures sleeping alone, not in groups."
    ],
    continuation: {
      critical: "and on tunkel",
      filler: "and howl towards the sky",
      nme: "and jump up and down in circles",
    },
    kind: {
      plural: "kweps",
      singular: "kwep"
    },
    properties: [
      {
        property1: {
          singular: "chews on xorfun",
            plural: "chew on xorfun",
	    supportFirst: "Xorfun is rubbery substance made from the bark of a special tree.",
	    supportSecond: "Xorfun is rubbery substance made from the bark of a special tree."
        },
        property2: {
          singular: "chews on tunkel",
            plural: "chew on tunkel",
	    supportFirst: "Tunkel is a rubbery substance made from the roots of a particular bush.",
	    supportSecond: "Tunkel is a rubbery substance made from the roots of a particular bush."
        }
      }
    ],
    nme_property: {
      singular: "jumps up and down in circles",
	plural: "jump up and down in circles",
	support: ""
    },
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "pp",
    memory: "kweps hunt in packs"
  },
  {
    title: "Ollers",
    main_text: [
      "Ollers spend most of their lives in water, but occasionally come on land to gather berries. Ollers use tools on land but have a difficult ",
      "time making them. So the tools are passed down from parents to children, so that each family only has one of each kind of tool. Baby ",
      "ollers find it very exciting to be on land, but they have trouble walking and need to be carried by members of their families."
    ],
    continuation: {
      critical: "and in trullets",
      filler: "and use sticks for balance",
      nme: "and are very protective"
    },
    kind: {
      plural: "oller families",
      singular: "oller family"
    },
    properties: [
      {
        property1: {
          singular: "carries its young in guklags",
            plural: "carry their young in guklags",
	    supportFirst: "Guklags are slings made out of strong seaweed, which are worn across the back.",
	    supportSecond: "Guklags are also made out of seaweed, and are worn across the back as slings."
        },
        property2: {
          singular: "carries its young in trullets",
            plural: "carry their young in trullets",
	    supportFirst: "Trullets are baskets made from woven seaweed, which are worn across chest.",
	    supportSecond: "Trullets are also made out of seaweed. They are baskets that can be worn across the chest."
        }
      }
    ],
    nme_property: {
      singular: "is very protective",
	plural: "are very protective",
	support: ""
    },
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "pp",
    memory: "ollers spend most of their lives in water"
  },
  {
    title: "Crafts",
    main_text: [
      "The aliens have many different kinds of specialized skills and trades, such as basket weaving. Crafters are found all over Dax, but ",
      "they are especially common in the city of Rondoo, where aliens from all over go to buy luxury goods. To ",
      "help make themselves known, crafters join guilds with other crafters of the same trade."
    ],
    continuation: {
       critical: "and the Farza guild",
       filler: "and pledge allegiance to Tinnius the Elder",
       nme: "and sell their baskets in the Warfi marketplace"
    },
    kind: {
      plural: "basket weavers",
      singular: "basket weaver"
    },
    properties: [
      {
        property1: {
          singular: "belongs to the Tinno guild",
            plural: "belong to the Tinno guild",
	    supportFirst: "One of the guilds in Rondoo is the Tinno guild.",
	    supportSecond: "Another guild in Rondoo is called the Tinno guild."
        },
        property2: {
          singular: "belongs to the Farza guild",
            plural: "belong to the Farza guild",
	    supportFirst: "One of the guilds in Rondoo is the Farza guild.",
	    supportSecond: "Another guild in Rondoo is called the Farza guild."
        }
      }
    ],
    nme_property: {
      singular: "sells their baskets in the Warfi marketplace",
	plural: "sell their baskets in the Warfi marketplace",
	support: "There is a marketplace on the northern side of Rondoo called the Warfi marketplace."
    },
    type: "critical",
    continuationType: "fakeNames",
    coordination: "np",
    memory: "crafters are common in the city of Rondoo"
  },
  // {
  //   title: "Batozes",
  //   main_text: [
  //     "Batozes are large birds that are found along all the coasts of Dax. They are skilled hunters and ",
  //     "can fly for whole days without stopping. They use their sharp claws to hunt for fish. They also ",
  //     "have special wings that are light but powerful."
  //   ],
  //   continuation: {
  //     critical: "and seven wings",
  //     nme: "and three eyes",
  //     filler: "and can flap their wings very fast"
  //   },
  //   kind: {
  //     plural: "batozes",
  //     singular: "batoz"
  //   },
  //   properties: [
  //     {
  //       property1: {
  //         singular: "has six wings",
  //         plural: "have six wings"
  //       },
  //       property2: {
  //         singular: "has seven wings",
  //         plural: "have seven wings"
  //       }
  //     }
  //   ],
  //   nme_property: {
  //     singular: "has three eyes",
  //     plural: "have three eyes"
  //   },
  //   type: "critical",
  //   continuationType: "real",
  //   coordination: "np",
  //   memory: "batozes are skilled hunters"
  // },
  {
    title: "Kaples",
    main_text: [
      "Kaples are small animals that live in the jungles. They are most active ",
      "at dawn and at dusk, when their usual predators are less active. Their thick fur helps camouflage ",
      "them among the plants on the forest floor."
    ],
    continuation: {
      critical: "and spotted fur",
      filler: "and beautiful eyes",
      nme: "and long tails"
    },
    kind: {
      plural: "kaples",
      singular: "kaple"
    },
    properties: [
      {
        property1: {
          singular: "has striped fur",
            plural: "have striped fur",
	    supportFirst: "",
	    supportSecond: ""
	},
	property2: {
          singular: "has spotted fur",
            plural: "have spotted fur",
	    supportFirst: "",
	    supportSecond: ""
        }
      }
    ],
    nme_property: {
      singular: "has a long tail",
	plural: "have long tails",
	support: ""
    },
    type: "critical",
    continuationType: "real",
    coordination: "np",
    memory: "kaples live in the jungles"
  },
  // {
  //   title: "Landeks",
  //   main_text: [
  //     "Landeks are very fierce creatures. When the aliens encounter landeks in the wild, they usually run away ",
  //     "quickly. Landeks often fight with each other over territory, food, or mates. They fight using the long horns on their heads and on their ",
  //     "backs."
  //   ],
  //   continuation: {
  //     critical: "and seven horns",
  //     filler: "and charge without warning",
  //     nme: "and two tails"
  //   },
  //   kind: {
  //     plural: "landeks",
  //     singular: "landek"
  //   },
  //   properties: [
  //     {
  //       property1: {
  //         singular: "has four horns",
  //         plural: "have four horns"
  //       },
  //       property2: {
  //         singular: "has seven horns",
  //         plural: "have seven horns"
  //       }
  //     }
  //   ],
  //   nme_property: {
  //     singular: "has two tails",
  //     plural: "have two tails"
  //   },
  //   type: "critical",
  //   continuationType: "real",
  //   coordination: "np",
  //   memory: "landeks often fight with each other"
  // },
  {
    title: "Vimbles",
    main_text: [
      "Vimbles are social insects that live in colonies of up to a thousand individuals. Vimbles live for a year ",
      "or less. They have a single queen, who must find somewhere to hibernate over the winter before ",
      "starting a new colony."
    ],
    continuation: {
      critical: "and in the abandoned burrows of other animals",
      filler: "and only emerge when the weather has become warmer",
      nme:"and give birth twice a year"
    },
    kind: {
      plural: "vimble queens",
      singular: "vimble queen"
    },
    properties: [
      {
        property1: {
          singular: "hibernates in fallen logs",
            plural: "hibernate in fallen logs",
	    supportFirst: "",
	    supportSecond: ""
        },
        property2: {
          singular: "hibernates in the abandoned burrows of other animals",
            plural: "hibernate in the abandoned burrows of other animals",
	    supportFirst: "",
	    supportSecond: ""
        }
      }
    ],
    nme_property: {
      singular: "gives birth twice a year",
	plural: "give birth twice a year",
	support: ""
    },
    type: "critical",
    continuationType: "real",
    coordination: "pp",
    memory: "vimbles are social insects"
  },
  {
    title: "Isooms",
    main_text: [
      "Isooms are tree-like plants that are found in hilly regions of Fale. Their fruit is edible, and the aliens often ",
      "cultivate isooms for food."
    ],
    continuation: {
      critical: "and fruit with smooth skin",
      filler: "and prefer to grow in the shade",
      nme: "and a sour taste",
    },
    kind: {
      plural: "isooms",
      singular: "isoom"
    },
    properties: [
      {
        property1: {
          singular: "produces fruit with bumpy skin",
            plural: "produce fruit with bumpy skin",
	    supportFirst: "",
	    supportSecond: ""
        },
        property2: {
          singular: "produces fruit with smooth skin",
            plural: "produce fruit with smooth skin",
	    supportFirst: "",
	    supportSecond: ""
        }
      }
    ],
    nme_property: {
      singular: "produces fruit with a sour taste",
	plural: "produce fruit with a sour taste",
	support: ""
    },
    type: "critical",
    continuationType: "real",
    coordination: "np",
    memory: "isooms are tree-like plants"
  }
]
