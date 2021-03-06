/**
filler breakdown
- 4 alls
- 3 less than a third
- 2 2 more than three-fourths
- 3 mosts
- 3 nones
**/

var filler_chapters = [{
    title: "Zorxon, overlord of Dax",
    main_text: [
      "Zorxon is the overlord of Dax.  Everyone loves Zorxon because she ",
      "provides for all the aliens of Dax. However, Zorxon is now very old ",
      "and she rarely makes public appearances anymore."
    ],
    critical: false,
    quantifier: "all",
    kind: "aliens",
    property1: "love Zorxon",
    property2: "are provided for by Zorxon",
    type: "filler",
    inference: false
  },
  {
    title: "Blins",
    main_text: [
      "Blins are small creatures. They all have hollow bones and fly. They sing beautiful songs to attract mates."
    ],
    critical: false,
    quantifier: "all",
    type: "filler",
    kind: "blins",
    property1: "have hollow bones",
    property2: "fly",
    inference: false
  },
  {
    title: "Supools",
    main_text: [
      "Supools are the biggest creatures on Dax. They all live in the oceans and ",
      "all of them live for a very long time. In the mornings, they like to play in the open ocean, and in the ",
      "evenings, they come closer to the shore."
    ],
    critical: false,
    kind: "supools",
    property1: "live in the oceans",
    property2: "live for a very long time",
    type: "filler",
    condition: "single",
    quantifier: "all",
    inference: false
  },
		       {
			   title: "Wargons",
			   main_text: ["Wargons are gentle giants. All of them grow to be more than thirty feet tall, and they use their great height to reach the young leaves at the tops of tall plants. All wargons graze in herds to stay safe from predators."],
			   critical: false,
			   kind: "wargons",
			   property1: "grow to be more than thirty feet tall",
			   property2: "graze in herds",
			   type: "filler",
			   quantifier: "all",
			   inference: false,
		       },

  {
    title: "Yomis",
    main_text: [
      "Yomis are small insect-like creatures. Less than a third of them live in the ",
      "borderland woodlands. All of the ones that live in the borderland woodlands fly towards the mountains in search of food."
    ],
    critical: false,
    kind: "yomis",
    property1: "live in the borderland woodlands",
    property2: "fly towards the mountains in search of food",
    type: "filler",
    condition: "single",
      quantifier: "lt3rd",
      inference: true
  },
  {
    title: "Wint of the Mountains",
    main_text: [
      "Wint lived a long time ago in the mountains. He loved to travel. Sadly, less than a third of aliens remember Wint. All of those that remember him admire him because he was the one that found the lost city of Baff."
    ],
    critical: false,
    kind: "aliens",
    property1: "remember Wint",
    property2: "admire Wint",
    quantifier: "lt3rd",
    type: "filler",
    condition: "uninterrupted",
    inference: true
  },
  {
    title: "Nannus",
    main_text: [
      "Nannus only feed on rare flowers called lodeks. Less than a third of lodeks ",
      "bloom each year. All of the ones that bloom have purple petals."
    ],
    critical: false,
    kind: "lodeks",
    property1: "bloom each year",
    property2: "have purple petals",
    type: "filler",
    condition: "single",
    quantifier: "lt3rd",
    inference: true
  },




  {
    title: "Zorf the mapmaker",
    main_text: [
      "Zorf the mapmaker lives in Astom. In Astom, more than three-quarters of the aliens live in the residential quarter.",
      "Since so many of the Astom aliens live there, it's very crowded at night.",
      "All of the aliens that live in the residential quarter get around town using the tunnels."
    ],
    critical: false,
    kind: "Astom aliens",
    property1: "use the tunnels to get around town",
    property2: "live in the residential quarter",
    type: "filler",
    condition: "single",
    quantifier: "gt34th",
    inference: true
  },
  {
    title: "Wopis",
    main_text: [
      "More than three-quarters of wopis live in the desert and ",
      "all of those wopis are very hard to find. Wopis sleep during the day to avoid ",
      "the heat."
    ],
    critical: false,
    kind: "wopis",
    property1: "live in the desert",
    property2: "are very hard to find",
    type: "filler",
    quantifier: "gt34th",
    inference: true
  },
		       {
			   title: "Rifnas",
			   main_text: ["Rifnas are tall grasses that are found on the continent of Caro. More than three-quarters of rifnas are found on the western part of Caro, and all of those are greenish-purple in color."],
			   critical: false,
			   kind: "rifnas",
			   property1: "are found on the western part of Caro",
			   property2: "are greenish-purple in color",
			   type: "filler",
			   quantifier: "gt34th",
			   inference: true 
		       },




  {
    title: "Morseths",
    main_text: [
      "The morseth lives part of its life in the sea and part of its life on land. Most morseths come on land to find mates. Most build permanent structures called fendles in order to bury their dead."
    ],
    critical: false,
    quantifier: "most",
    type: "filler",
    kind: "morseths",
    property1: "build permanent structures called fendles",
    property2: "come on land to find mates",
      inference: false,
  },

  {
    title: "Mupors",
    main_text: [
      "Mupors are very social creatures. Most of them live in extended family groups. Most of them also build large triangular rebos ",
      "made of clay and grass."
    ],
    critical: false,
    kind: "mupors",
    property1: "live in extended family groups",
    property2: "build large triangular rebos",
    type: "filler",
    condition: "single",
    quantifier: "most",
    inference: false
  },
  {
    title: "Apaffs",
    main_text: [
      "Apaffs are a nuisance for the aliens. They make burrows everywhere ",
      "including in the middle of farmland and in front of their houses. But most aliens find apaffs cute, and tolerate them to some extent."
    ],
    critical: false,
    kind: "aliens",
    property1: "find apaffs cute",
    property2: "tolerate apaffs to some extent",
    type: "filler",
    condition: "single",
    quantifier: "most",
    inference: false
  },




  {
    title: "Weather",
    main_text: [
      "The weather on Dax is very constant, not changing much from day to day. Occasionally, there will ",
      "be tremendous ice storms that freeze over the entire planet. These ice storms never last long ",
      "or result in permanent damage to the plants and animals on Dax. However, the ice storms make the entire sky as dark as night."
    ],
    critical: false,
    quantifier: "none",
    kind: "ice storms on Dax",
    property1: "result in permanent damage to the plants and animals on Dax",
    property2: "last a long time",
    type: "filler",
    inference: false
  },
  {
    title: "Kazzes",
    main_text: [
      "Kazzes are a kind of plant that grow all over Dax. They produce fruit in the springtime, but the ",
      " fruit is poisonous to animals. No feps eat kazzes nor do they come close."
    ],
    critical: false,
    kind: "feps",
    property1: "eat kazzes",
    property2: "come close to kazzes",
    type: "filler",
    quantifier: "none",
    inference: false
  },
  {
    title: "Plovs",
    main_text: [
      "Plovs travel in herds and are very territorial. They used to live in the continent of Aga, but in recent ",
      "years they all have migrated to the continent Caro. Now that they have their own territory, they are never attacked by other creatures."
    ],
    critical: false,
    kind: "plovs",
    property1: "live in the continent of Aga",
    property2: "are attacked by other creatures",
    type: "filler",
    quantifier: "none",
    inference: true
  }



]

var stims_chapters = [{
    title: "Ludinos",
    main_text: [
      "The Ludinos are an alien tribe. They are very industrious and they all are highly spiritual."
    ],
    continuation: {
      firstConjunct: {
        same: 'They ascribe to the Caboo religion',
        reverse: 'They ascribe to the Daith religion'
      },
      critical: {
        s: {
          same: "and they ascribe to the Daith religion",
          reverse: "and they ascribe to the Caboo religion",
        },
        vp: {
          same: "and ascribe to the Daith religion",
          reverse: "and ascribe to the Caboo religion",
        },
        pp: {
          same: "and to the Daith religion",
          reverse: "and to the Caboo religion",
        },
        np: {
          same: "and the Daith religion",
          reverse: "and the Caboo religion",
        },
      },
      nme: {
        s: "and they follow a strict code of laws",
        vp: "and follow a strict code of laws",
      },
      filler: "pray three times a day"
    },
    critical: true,
    kind: "Ludinos",
    property1: "ascribe to the Caboo religion",
    property2: "ascribe to the Daith religion",
    property3: "pray three times a day",
    type: "critical",
    continuationType: "fakeNames",
    coordination: "np"
  },
  {
    title: "Glippets",
    main_text: [
      "Glippets are large creatures with a life-span of about sixty years."
    ],
    continuation: {
      firstConjunct: {
        same: "They live on the southern continent of Caro",
        reverse: "They live on the northern continent of Este"
      },
      critical: {
        s: {
          same: "and they live on the northern continent of Este",
          reverse: "and they live on the southern continent of Caro",
        },
        vp: {
          same: "and live on the northern continent of Este",
          reverse: "and live on the southern continent of Caro",
        },
        pp: {
          same: "and on the northern continent of Este",
          reverse: "and on the southern continent of Caro",
        },
        np: {
          same: "and the northern continent of Este",
          reverse: "and the southern continent of Caro",
        },
      },
      nme: {
        s: "and they graze on the tall grasses",
        vp: "and graze on the tall grasses"
      },
      filler: "and enjoy the sunshine there"
    },
    critical: true,
    kind: "glippets",
    property1: "live on the continent of Caro",
    property2: "live on the continent of Este",
    property3: "graze on the tall grasses",
    type: "critical",
    continuationType: "fakeNames",
    coordination: "pp"
  },
  {
    title: "Mooks",
    main_text: [
      "Mooks are ferocious creatures that live on the continent of Benli. Benli has dramatic elevation changes unlike any other continent on Dax.",
    ],
    continuation: {
      firstConjunct: {
        same: "Mooks have territories at the tops of tall mountains",
        reverse: "Mooks have territories at the bottom of deep canyons",
      },
      critical: {
        s: {
          same: "and mooks have territories at the bottom of deep canyons",
          reverse: "and mooks have territories at the tops of tall mountains",
        },
        vp: {
          same: "and have territories at the bottom of deep canyons",
          reverse: "and have territories at the tops of tall mountains",
        },
        pp: {
          same: "and at the bottom of deep canyons",
          reverse: "and at the tops of tall mountains",
        },
        np: {
          same: "and the bottom of deep canyons",
          reverse: "and the tops of tall mountains"
        },
      },
      nme: {
        s: "and mooks watch over the low-lying regions during the day",
        vp: "and watch over the low-lying regions during the day",
      },
      filler: "and one would be wise to keep their distance from them"
    },
    critical: true,
    kind: "mooks",
    property1: "have territories at the tops of tall mountains",
    property2: "have territories at the bottom of deep canyons",
    property3: "watch over the low-lying regions during the day",
    type: "critical",
    continuationType: "real",
    coordination: "pp"
  },
  {
    title: "Agriculture",
    main_text: [
      "The soil on the continent of Aga is very fertile, but different regions support different crops. The Landek aliens live all over Aga. During the springtime,"
    ],
    continuation: {
      firstConjunct: {
        same: "landeks flood their fields to plant fujusi",
        reverse: "landeks flood their fields to plant soroneeks",
      },
      critical: {
        s: {
          same: "and landeks flood their fields to plant soroneeks",
          reverse: "and landeks flood their fields to plant fujusi",
        },
        vp: {
          same: "and flood their fields to plant soroneeks",
          reverse: "and flood their fields to plant fujusi",
        },
        pp: {
          same: "and to plant soroneeks",
          reverse: "and to plant fujusi",
        },
        np: {
          same: "and soroneeks",
          reverse: "and fujusi",
        },
      },
      nme: {
        s: "and the aliens spray them with a naturally-occurring fertilizer",
        vp: "and spray them with a naturally-occurring fertilizer"
      },
      filler: "and in the summer watch their fields carefully",
    },
    critical: true,
    kind: "landeks",
    property1: "plant fujusi",
    property2: "plant soroneeks",
    property3: "spray their fields with a naturally-occurring fertilizer",
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "vp"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are small, nocturnal creatures. They have highly complex ",
      "mating habits. They mate for life, and the males often bring twigs and leaves to the females during ",
      "courtship. The mated pairs use these twigs and leaves to build their nests."
    ],
    continuation: {
      firstConjunct: {
        same: "They build their nests in wiry bushes",
        reverse: "They build their nests in tall trees",
      },
      critical: {
        s: {
          same: "and they build their nests in tall trees",
          reverse: "and they build their nests in wiry bushes",
        },
        vp: {
          same: "and build their nests in tall trees",
          reverse: "and build their nests in wiry bushes",
        },
        pp: {
          same: "and in tall trees",
          reverse: "and in wiry bushes",
        },
        np: {
          same: "and tall trees",
          reverse: "and wiry bushes",
        },
      },
      filler: "and watch over them carefully",
      nme: {
        s: "and they store tree-bark in them for safe keeping",
        vp: "and store tree-bark in them for safe keeping",
      }
    },
    critical: true,
    kind: "fengnor mated pairs",
    property1: "build nests in tall trees",
    property2: "build nests in wiry bushes",
    property3: "store tree-bark in them for safe keeping",
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "pp"
  },
  {
    title: "Finding food",
    main_text: [
      "Stups are four-legged creatures with large antlers that roam all over the windy highlands of Benli, far from the oceans. Krens are a tribe of the aliens that live in diverse parts of Benli. "
    ],
    continuation: {
      firstConjunct: {
        same: "Krens are stup-herders",
        reverse: "Krens are fishermen",
      },
      critical: {
        s: {
          same: "and krens are fishermen",
          reverse: "and krens are stup-herders",
        },
        vp: {
          same: "and are fishermen",
          reverse: "and are stup-herders",
        },
        pp: {
          same: "and are fishermen",
          reverse: "and are stup-herders"
        },
        np: {
          same: "and fishermen",
          reverse: "and stup-herders",
        },
      },
      filler: "and incorporate stups into their religion",
      nme: {
        s: "and Krens sing songs to the stups to help them relax",
        vp: "and sing songs to the stups to help them relax",
      }
    },
    critical: true,
    kind: "Krens",
    property1: "are stup-herders",
    property2: "are fishermen",
    property3: "sing songs to the stups to help them relax",
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "np"
  },
  // {
  // 	title: "Lorches",
  // 	main_text: [
  // 	    "Lorches have massive beaks and are found on the continents of Dodi and Gomi. The two continents ",
  // 	    "are quite different in what kinds of animals are available for them to eat. Lorches have long wings "
  // 	],
  // 	continuation: {
  // 	    critical: {
  // 		s: "and lorches have short wings",
  // 		vp: "and have short wings",
  // 		np: "and short wings",
  // 	    },
  // 	    filler: "and fly only at night",
  // 	    nme: {
  // 		s: "and lorches have sharp claws",
  // 		vp: "and have sharp claws",
  // 		np: "and sharp claws",
  // 	    }
  // 	},
  // 	critical: true,
  // 	kind: "lorches",
  // 	property1: "have long wings",
  // 	property2: "have short wings",
  // 	property3: "have sharp claws",
  // 	type: "critical",
  // 	continuationType: "real",
  // 	coordination: "np"
  // },
  // {
  // 	title: "Reesles",
  // 	main_text: [
  // 	    "Reesles are strange, furry creatures, often found in the homes of the aliens. They are not house pets ",
  // 	    "but quasi-domesticated animals. They have ",
  // 	    "special headgear to help other aliens identify their owners. Around their heads, they wear giant wutsats"
  // 	],
  // 	continuation: {
  // 	    critical: {
  // 		s: "and they wear krevnors",
  // 		vp: "and wear krevnors",
  // 		np: "and krevnors",
  // 	    },
  // 	    filler: "and roam around by themselves at night",
  // 	    nme: {
  // 		s: "and they carry sticks with them",
  // 		vp: "and carry sticks with them",
  // 	    }
  // 	},
  // 	critical: true,
  // 	kind: "reesles",
  // 	property1: "wear wutsats around their heads",
  // 	property2: "wear krevnors around their heads",
  // 	property3: "carry sticks with them",
  // 	type: "critical",
  // 	continuationType: "fakeDefs",
  // 	coordination: "np"
  // },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. Even though they are pack animals, they tend to have different preferences. ",
      "Right before they go hunting,"
    ],
    continuation: {
      firstConjunct: {
        same: "kweps chew on old bones",
        reverse: "kweps chew on thick leaves",
      },
      critical: {
        s: {
          same: "and kweps chew on thick leaves",
          reverse: "and kweps chew on old bones",
        },
        vp: {
          same: "and chew on thick leaves",
          reverse: "and chew on old bones",
        },
        pp: {
          same: "and on tunkel",
          reverse: "and on old bones",
        },
        np: {
          same: "and tunkel",
          reverse: "and old bones",
        },
      },
      filler: "and howl towards the sky",
      nme: {
        s: "and the kweps jump up and down in circles",
        vp: "and jump up and down in circles",
      }
    },
    critical: true,
    kind: "kweps",
    property1: "chew on thick leaves",
    property2: "chew on old bones",
    property3: "jump up and down in circles",
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "pp"
  },
  {
    title: "Ollers",
    main_text: [
      "Ollers use tools, which are passed down from parents to children. Oller children are very heavy. While on land,"
    ],
    continuation: {
      firstConjunct: {
        same: "ollers carry their young in slings",
        reverse: "ollers carry their young in knapsacks",
      },
      critical: {
        s: {
          same: "and ollers carry their young in knapsacks",
          reverse: "and ollers carry their young in slings",
        },
        vp: {
          same: "and carry their young in knapsacks",
          reverse: "and carry their young in slings",
        },
        pp: {
          same: "and in knapsacks",
          reverse: "and in slings",
        },
        np: {
          same: "and knapsacks",
          reverse: "and slings",
        },
      },
      filler: "and use sticks for balance",
      nme: {
        s: "and ollers are very protective",
        vp: "and are very protective"
      },
    },
    critical: true,
    kind: "oller families",
    property1: "carry their young in knapsacks",
    property2: "carry their young in slings",
    property3: "are very protective",
    type: "critical",
    continuationType: "fakeDefs",
    coordination: "pp"
  },
  {
    title: "Crafts",
    main_text: [
      "The aliens have many different kinds of specialized skills and trades, such as basket weaving. Primarily for social reasons, crafters like to join guilds."
    ],
    continuation: {
      firstConjunct: {
        same: "Basket weavers are part of the Tinno guild",
        reverse: "Basket weavers are part of the Farza guild",
      },
      critical: {
        s: {
          same: "and basket weavers are part of the Farza guild",
          reverse: "and basket weavers are part of the Tinno guild",
        },
        vp: {
          same: "and are part of the Farza guild",
          reverse: "and are part of the Tinno guild",
        },
        pp: {
          same: "and of the Farza guild",
          reverse: "and of the Tinno guild",
        },
        np: {
          same: "and the Farza guild",
          reverse: "and the Tinno guild",
        },
      },
      filler: "and pledge allegiance to Tinnius the Elder",
      nme: {
        s: "and basket weavers sell their baskets in Warfi marketplace",
        vp: "and sell their baskets in the Warfi marketplace"
      }
    },
    critical: true,
    kind: "basket weavers",
    property1: "are part of the Tinno guild",
    property2: "are part of the Farza guild",
    property3: "sell their baskets in the Warfi marketplace",
    type: "critical",
    continuationType: "fakeNames",
    coordination: "np"
  },
  // {
  // 	title: "Batozes",
  // 	main_text: [
  // 	    "Batozes are large birds that are found along all the coasts of Dax. They are skilled hunters and ",
  // 	    "can fly for whole days without stopping. They ",
  // 	    "have special wings that are light but powerful. Batozes have six wings "
  // 	],
  // 	continuation: {
  // 	    critical: {
  // 		s: "and batozes have seven wings",
  // 		vp: "and have seven wings",
  // 		np: "and seven wings",
  // 	    },
  // 	    filler: "and can flap their wings very fast",
  // 	    nme: {
  // 		s: "and batozes have three eyes",
  // 		vp: "and have three eyes",
  // 		np: "and three eyes"
  // 	    },
  // 	},
  // 	critical: true,
  // 	kind: "batozes",
  // 	property1: "have six wings",
  // 	property2: "have seven wings",
  // 	property3: "have three eyes",
  // 	type: "critical",
  // 	continuationType: "real",
  // 	coordination: "np"
  // },
  // {
  // 	title: "Kaples",
  // 	main_text: [
  // 	    "Kaples are small animals that live in the jungles. They are most active ",
  // 	    "at dawn and at dusk. Their thick fur helps camouflage ",
  // 	    "them on the forest floor. Kaples have striped fur "
  // 	],
  // 	continuation: {
  // 	    critical: {
  // 		s: "and kaples have spotted fur",
  // 		vp: "and have spotted fur",
  // 		np: "and spotted fur",
  // 	    },
  // 	    filler: "and beautiful eyes",
  // 	    nme: {
  // 		s: "and kaples have long tails",
  // 		vp: "and have long tails",
  // 		np: "and long tails"
  // 	    },
  // 	},
  // 	critical: true,
  // 	kind: "kaples",
  // 	property1: "have striped fur",
  // 	property2: "have spotted fur",
  // 	property3: "have long tails",
  // 	type: "critical",
  // 	continuationType: "real",
  // 	coordination: "np"
  // },
  // {
  // 	title: "Landeks",
  // 	main_text: [
  // 	    "Landeks are very fierce creatures, often fighting each other over territory, food, or mates. They fight using the long horns on their heads and on their ",
  // 	    "backs. Landeks have four horns"
  // 	],
  // 	continuation: {
  // 	    critical: {
  // 		s: "and landeks have seven horns",
  // 		vp: "and have seven horns",
  // 		np: "and seven horns",
  // 	    },
  // 	    filler: "and charge without warning",
  // 	    nme: {
  // 		s: "and landeks have two tails",
  // 		vp: "and have two tails",
  // 		np: "and two tails"
  // 	    },
  // 	},
  // 	critical: true,
  // 	kind: "landeks",
  // 	property1: "have four horns",
  // 	property2: "have seven horns",
  // 	property3: "have two tails",
  // 	type: "critical",
  // 	continuationType: "real",
  // 	coordination: "np"
  // },
  {
    title: "Vimbles",
    main_text: [
      "Vimbles are social insects that live in colonies of up to a thousand individuals. They have a single queen, who must find somewhere to hibernate over the winter before ",
      "starting a new colony."
    ],
    continuation: {
      firstConjunct: {
        same: "Vimble queens hibernate in abandoned burrows",
        reverse: "Vimble queens hibernate in fallen logs",
      },
      critical: {
        s: {
          same: "and vimble queens hibernate in fallen logs",
          reverse: "and vimble queens hibernate in abandoned burrows",
        },
        vp: {
          same: "and hibernate in fallen logs",
          reverse: "and hibernate in abandoned burrows",
        },
        pp: {
          same: "and in fallen logs",
          reverse: "and in abandoned burrows",
        },
        np: {
          same: "and fallen logs",
          reverse: "and abandoned burrows",
        },
      },
      filler: "and only emerge when the weather has become warmer",
      nme: {
        s: "and vimble queens give birth twice a year",
        vp: "and give birth twice a year"
      }
    },
    critical: true,
    kind: "vimble queens",
    property1: "hibernate in fallen logs",
    property2: "hibernate in abandoned burrows",
    property3: "give birth twice a year",
    type: "critical",
    continuationType: "real",
    coordination: "pp"
  },
  {
    title: "Isooms",
    main_text: [
      "Isooms are tree-like plants that are found in hilly regions. Their fruit is edible, and the aliens often ",
      "cultivate isooms as food."
    ],
    continuation: {
      firstConjunct: {
        same: "Isooms produce fruit with bumpy skin",
        reverse: "Isooms produce fruit with smooth skin",
      },
      critical: {
        s: {
          same: "and isooms produce fruit with smooth skin",
          reverse: "and isooms produce fruit with bumpy skin",
        },
        vp: {
          same: "and produce fruit with smooth skin",
          reverse: "and produce fruit with bumpy skin",
        },
        pp: {
          same: "and with smooth skin",
          reverse: "and with bumpy skin",
        },
        np: {
          same: "and smooth skin",
          reverse: "and bumpy skin",
        },
      },
      filler: "and prefer to grow in the shade",
      nme: {
        s: "and isooms produce fruit with a sour taste",
        vp: "and produce fruit with a sour taste",
        pp: "and with a sour taste",
        np: "and a sour taste",
      }
    },
    critical: true,
    kind: "isooms",
    property1: "produce fruit with bumpy skin",
    property2: "produce fruit with smooth skin",
    property3: "produce fruit with a sour taste",
    type: "critical",
    continuationType: "real",
    coordination: "np"
  },
  {
    title: "Rondas",
    main_text: ["Rondas are very common creatures on Dax. They have adapted to live in many different habitats like rainforests and plains."],
    continuation: {
      firstConjunct: {
        same: "Rondas eat with short, hooked beaks",
        reverse: "Rondas eat with long, pointed beaks",
      },
      critical: {
        s: {
          same: "and rondas eat with long, pointed beaks",
          reverse: "and rondas eat with short, hooked beaks",
        },
        vp: {
          same: "and eat with long, pointed beaks",
          reverse: "and eat with short, hooked beaks",
        },
        pp: {
          same: "and with long, pointed beaks",
          reverse: "and with short, hooked beaks",
        },
        np: {
          same: "and long, pointed beaks",
          reverse: "and short, hooked beaks",
        }
      },
      filler: "and bring back food for their young",
      nme: {
	s: "and rondas eat with sharp claws",
	vp: "and eat with sharp claws",
	pp: "and with sharp claws",
	np: "and sharp claws",
      },
    },
    critical: true,
    kind: "rondas",
    property1: "eat with short, hooked beaks",
    property2: "eat with long, pointed beaks",
    property3: "eat with sharp claws",
  },
  {
    title: "Sarkeys",
    main_text: ["Sarkeys are large herbivores. They invest a lot of care into each of their offspring. Both parents spend most of their time taking care of the baby until it grows to an adult, a process that takes about three years."],
    continuation: {
      firstConjunct: {
        same: "Sarkeys mate in the spring",
        reverse: "Sarkeys mate in the fall",
      },
      critical: {
        s: {
          same: "and sarkeys mate in the fall",
          reverse: "and sarkeys mate in the spring",
        },
        vp: {
          same: "and mate in the fall",
          reverse: "and mate in the spring",
        },
        pp: {
          same: "and in the fall",
          reverse: "and in the spring",
        },
        np: {
          same: "and the fall",
          reverse: "and the spring",
        },
      },
      filler: "and give birth in late summer",
      nme: {
        s: "and sarkeys choose a new mate each season",
        vp: "and choose a new mate each season",
      },
    },
    critical: true,
    kind: "sarkeys",
    property1: "mate in the spring",
    property2: "mate in the fall",
    property3: "choose a new mate each season",
  },
  {
    title: "Vimers",
    main_text: ["Vimers are tiny bugs that form mutually beneficial relationships with plants in order to reproduce. After they lay their eggs inside the plant, they die."],
    continuation: {
      firstConjunct: {
        same: "Vimers lay their eggs in yergs",
        reverse: "Vimers lay their eggs in flooms",
      },
      critical: {
        s: {
          same: "and vimers lay their eggs in flooms",
          reverse: "and vimers lay their eggs in yergs",
        },
        vp: {
          same: "and lay their eggs in flooms",
          reverse: "and lay their eggs in yergs",
        },
        pp: {
          same: "and in flooms",
          reverse: "and in yergs",
        },
        np: {
          same: "and flooms",
          reverse: "and yergs",
        }
      },
      filler: "and feed on evors",
      nme: {
        s: "and vimers lay their eggs in clutches of a few hundred",
        vp: "and lay their eggs in clutches of a few hundred",
      },
    },
    critical: true,
    kind: "vimers",
    property1: "lay their eggs in yergs",
    property2: "lay their eggs in flooms",
    property3: "lay their eggs in cluthces of a few hundred",
  },
  {
    title: "Marths",
    main_text: ["Marths are parasitic vines that climb on top of other plants in order to reach more sunlight. They also steal nutrients from the plant because their roots are entangled with their hosts' roots."],
    continuation: {
      firstConjunct: {
        same: "Marths grow on freenas",
        reverse: "Marths grow on vorbas",
      },
      critical: {
        s: {
          same: "and marths grow on vorbas",
          reverse: "and marths grow on freenas",
        },
        vp: {
          same: "and grow on vorbas",
          reverse: "and grow on freenas",
        },
        pp: {
          same: "and on vorbas",
          reverse: "and on freenas",
        },
        np: {
          same: "and vorbas",
          reverse: "and freenas",
        },
      },
      filler: "and grow up to ten feet long",
      nme: {
        s: "and marths grow up to ten feet long",
        vp: "and grow up to ten feet long",
      }
    },
    critical: true,
    kind: "marths",
    property1: "grow on freenas",
    property2: "grow on vorbas",
    property3: "grow up to ten feet long",
  },
]
