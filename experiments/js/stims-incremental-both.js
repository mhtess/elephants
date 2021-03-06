var firstChapter =   {
    title: "An introduction to Dax",
    main_text: [
	"Dax is a lot like Earth.  It has seven continents in similar places, but instead of Africa, Europe, Asia, ",
	"Australia, Antarctica and North and South America, the continents ",
	"are called  Aga,  Benli, Caro, Dodi, Ente, Fale, and Gomi. Its climate is a lot like Earth's, too. But the",
      "  plants and animals of Dax are quite different."
    ],
    query: false,
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
	"Zorxon is the overlord of Dax.  Everyone loves Zorxon because she provides for all the aliens of Dax. ",
	"Throughout her life, she traveled continuously throughout the seven continents to meet her subjects ",
      "and held court on her home continent of Ente, where all the aliens could come speak to her."
    ],
    quantifier: "all",
    kind: "aliens",
    property1: "love Zorxon",
    property2: "are provided for by Zorxon",
      type: "filler",
      information: "full",
      conjunctionBreak: "before",
      coordination: "vp"
  },
  {
    title: "Blins",
    main_text: [
      "Blins are small creatures. They all have hollow bones and fly. They often fly together in flocks of up",
      " to a hundred. They have shiny blue feathers when they are young and ",
      "no feathers when they grow old."
    ],
    quantifier: "all",
    type: "filler",
    kind: "blins",
    property1: "have hollow bones",
      property2: "fly",
      information: "full",
      conjuctionBreak: "after",
      coordination: "np"
  },
  {
    title: "Weather",
    main_text: [
      "Occasionally on Dax, there will be tremendous ice storms that freeze over the entire planet. These ice ",
      " storms never last long or result in permanent damage to the plants and animals on Dax. However, ",
      " they can be quite noisy. They produce strong southerly winds",
      " and strong northerly winds, frightening most of the animals on Dax."
    ],
    quantifier: "none",
    kind: "ice storms on Dax",
    property1: "result in permanent damage to the plants and animals on Dax",
    property2: "last a long time",
      type: "filler",
      information: "full",
      conjunctionBreak: "before",
      coordination: "np"
  },
  {
    title: "Morseths",
    main_text: [
      "The morseth is an animal that lives part of its life in the sea and part of its life on land. Most morseths ",
	"come on land to find mates. Most of the morseths build permanent ",
	"structures called fendles. Most morseths have webbed feet and ",
      "unwebbed feet, at various points in their life cycles."
    ],
    quantifier: "most",
    type: "filler",
    kind: "morseths",
    property1: "build permanent structures called fendles",
      property2: "come on land to find mates",
      information: "both",
      conjunctionBreak: "after",
      coordination: "np"
  },
  {
    title: "Kazzes",
    main_text: [
      "Kazzes are a kind of plant that grow all over Dax. No feps eat kazzes nor do they come close",
      "because their fruit is poisonous to animals. Kazzes grow into tall stalks to absorb as much light as possible ",
      "and short bushes to avoid being trampled."
    ],
    kind: "animals",
    property1: "eat kazzes",
    property2: "come close to kazzes",
    type: "filler",
      quantifier: "none",
      information: "full",
      conjunctionBreak: "before",
      coordination: "np"
  },
  {
    title: "Wint of the Mountains",
    main_text: [
      "Wint lived a long time ago in the mountains.  But all aliens remember Wint and admire him because he ",
	"was the one that found the lost city of Baff. While he wasn't exploring, ",
	"Wint stayed in his village in the mountains. He was a hunter and ",
      "a blacksmith."
    ],
    kind: "aliens",
    property1: "remember Wint",
    property2: "admire Wint",
    quantifier: "all",
    type: "filler",
      condition: "uninterrupted",
      information: "interruption",
      conjunctionBreak: "after",
      coordination: "np"
  },
  {
      title: "Plovs",
      main_text: [
  	"No plovs live on the continent of Aga; instead, in they all live on",
  	"Caro. Since they have their own territory, they are never attacked by other, larger creatures and ",
	  "live happily near water. Their herds are large but have a single leader. The leaders are the oldest female ",
	  "and the oldest male."
      ],
      kind: "plovs",
      property1: "live in the continent of Aga",
      property2: "are attacked by other creatures",
      type: "filler",
      quantifier: "none",
      information: "both",
      conjunctionBreak: "before",
      coordination: "np"
  },
  {
      title: "Yomis",
      main_text: [
        "Yomis are small, fast insect-like creatures. They all live in the ",
        "borderland woodlands and they all fly towards the mountains in search of food. Yomis have a single  ",
	  "mouthpart for grabbing food, usually from yellow flowers. Their mouthparts are long and ",
	  "short, which makes them suited for different types of food."
      ],
      kind: "yomis",
      property1: "live in the borderland woodlands",
      property2: "fly towards the mountains in search of food",
      type: "filler",
      condition: "single",
      quantifier: "all",
      information: "both",
      conjunctionBreak: "after",
      coordination: "ap"
  },
  {
      title: "Mupors",
      main_text: [
        "Mupors are very social creatures. Most of them live in extended family groups consisting of multiple ",
	"generations. Most of them also build large rebos made of clay and grass. Rebos have one entrance ",
        "and four entrances."
      ],
      kind: "mupors",
      property1: "live in extended family groups",
      property2: "build large triangular rebos",
      type: "filler",
      condition: "single",
      quantifier: "most",
      information: "both",
      conjunctionBreak: "before",
      coordination: "np"
  },
  {
      title: "Apaffs",
      main_text: [
        "Apaffs are a nuisance for the aliens. They make burrows everywhere including in the middle of farmland ",
          "and in front of houses. But most aliens find apaffs cute, and tolerate ",
	  "them to some extent. To reproduce, apaffs lay eggs. Apaffs incubate their eggs until hatching and ",
	"abandon them in special mounds once they have been laid."
      ],
      kind: "aliens",
      property1: "find apaffs cute",
      property2: "tolerate apaffs to some extent",
      type: "filler",
      condition: "single",
      quantifier: "most",
      information: "full",
      conjunctionBreak: "after",
      coordination: "vp"
  },
  {
      title: "Supools",
      main_text: [
        "Supools are the biggest creatures on Dax. They all live in the oceans and ",
        "all of them live for a very long time. In the mornings, they play in the open ocean. Supools travel as pairs ",
        "and in large groups of more than ten individuals."
      ],
      kind: "supools",
      property1: "live in the oceans",
      property2: "live for a very long time",
      type: "filler",
      condition: "single",
      quantifier: "all",
      information: "full",
      conjunctionBreak: "before",
      coordination: "pp"
  },
  {
      title: "Zorf the mapmaker",
      main_text: [
        "Zorf the mapmaker lives in the large forest city of Astom. In Astom, there are many ways to get",
        "from place to place, but the most popular way is through tunnels. All of the Astom aliens use the tunnels",
          "to get around town from their homes in the residential quarter. All ",
	  "of the Astom aliens live there. They live in apartment complexes and ",
	"in single-family homes."
      ],
      kind: "Astom aliens",
      property1: "use the tunnels to get around town",
      property2: "live in the residential quarter",
      type: "filler",
      condition: "single",
      quantifier: "all",
      information: "both",
      conjunctionBreak: "after",
      coordination: "pp"
  },
  {
      title: "Wopis",
      main_text: [
        "Wopis are extremely rare creatures. They only live in the desert and ",
        "they all are very hard to find, since they live underground. Wopis sleep for more than twelve hours a day ",
        "and for less than six hours a day."
      ],
      kind: "wopis",
      property1: "live in the desert",
      property2: "are very hard to find",
      type: "filler",
      condition: "single",
      quantifier: "all",
      information: "full",
      conjunctionBreak: "before",
      coordination: "pp"
  },
  {
      title: "Nannus",
      main_text: [
        "Nannus only feed on rare flowers called lodeks. Most lodeks only ",
          "bloom for one day a year, and most have purple petals. Each type of ",
	  "lodek has a unique pollinator, usually a bird or insect. Lodeks are pollinated by deveets and ",
        "wisgos."
      ],
      kind: "lodeks",
      property1: "only bloom for one day a year",
      property2: "have purple petals",
      type: "filler",
      condition: "single",
      quantifier: "most",
      information: "full",
      conjunctionBreak: "after",
      coordination: "np"
  }
]

var stims_chapters = [
  {
    title: "Religion",
    main_text: [
      "The Ludinos are an alien tribe. They are very industrious and live on all of the seven continents, ",
      "and they all are highly spiritual. They ascribe "
    ],
    continuation: {
      africa: "to Cabooism",
      africaWidth: 660,
      asia: "Daithism",
      africaAnd: "to Cabooism and",
      africaAndWidth: 680,
      africaAndAsia: "to Cabooism and Daithism",
      africaAndAsiaWidth: 620,
    	filler: "follow a strict code of laws",
    	africaAndFillerWidth: 660,
    	conjFiller: "which coexist peacefully",
    	subordFiller: "which is studied by all the Ludino children",
      nme: "pray three times a day"
    },
    kind: "ludinos",
    property1: "ascribe to Cabooism",
    property2: "ascribe to some other religion",
    property3: "pray three times a day",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Glippets",
    main_text: [
      "Glippets are large creatures, quite intelligent, with a life-span of about ",
      "sixty years. They live "
    ],
    continuation: {
      africa: "on the southern continent of Caro",
      africaWidth: 720,
      asia: "on the northern continent of Este",
      africaAnd: "on the southern continent of Caro and",
      africaAndWidth: 720,
      africaAndAsia: "on the southern continent of Caro and on the northern continent of Este",
      africaAndAsiaWidth: 720,
    	filler: "enjoy the sunshine there",
    	africaAndFillerWidth: 640,
    	conjFiller: "which are quite different from each other",
    	subordFiller: "which is much stronger than on other continents",
      nme: "graze on the tall grasses"
    },
    kind: "glippets",
    property1: "live on the continent of Caro",
    property2: "live on some other continent",
    property3: "graze on the tall grasses",
      type: "critical",
      continuationType: "fakeNames",
      coordination: "pp"
  },
  {
    title: "Mooks",
    main_text: [
	"Mooks are ferocious creatures that live on the continent of Benli. Benli ",
	"has dramatic elevation changes unlike any other continent. Animals ",
      "find terrority in locations that maximize their chances of survival. ",
      "Mooks have territories ",
    ],
    continuation: {
      africa: "at the tops of tall mountains",
      africaWidth: 640,
      asia: "at the bottom of deep canyons",
      africaAnd: "at the tops of tall mountains and",
      africaAndWidth: 660,
      africaAndAsia: "at the tops of tall mountains and at the bottom of deep canyons",
      africaAndAsiaWidth: 660,
	     filler: "it would be wise to keep a safe distance from them",
	      africaAndFillerWidth: 720,
	       conjFiller: "where not many other predators venture",
	        subordFiller: "since they are easily provoked",
      nme: "watch over the low-lying regions during the day"
    },
    kind: "mooks",
    property1: "have territories at the tops of tall mountains",
    property2: "have territories in other geographical locations",
    property3: "watch over the low-lying regions during the day",
      type: "critical",
      continuationType: "real",
      coordination: "pp"
  },
  {
    title: "Agriculture",
    main_text: [
	"The soil on the continent of Aga is very fertile, and the aliens have learned to grow many crops. ",
	"However, farmers only grow one type of crop in each season to increase their profits when selling. ",
      "Their farms are very big, often stretching several miles in every direction. During the springtime, ",
      "the aliens flood their fields in order to plant  "
    ],
    continuation: {
      africa: "fujusi",
      africaWidth: 640,
      asia: "soroneeks",
      africaAnd: "fujusi and",
      africaAndWidth: 680,
      africaAndAsia: "fujusi and soroneeks",
      africaAndAsiaWidth: 720,
	     filler: "in the summer watch their fields carefully",
	      africaAndFillerWidth: 740,
	   conjFiller: "which they sell in the marketplaces",
	  subordFiller: "since wild animals may trample them",
      nme: "spray them with a naturally-occurring fertilizer"
    },
    kind: "farmers in the springtime",
    property1: "plant fujusi",
    property2: "plant some other crop",
    property3: "spray their fields with a naturally-occurring fertilizer",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Fengnors",
    main_text: [
	"Fengnors are smaller, nocturnal creatures that live in dense forests. ",
	"They have complex mating habits. They mate for life and the males ",
	"often bring twigs and leaves to the females during courtship. The mated pairs use these twigs and ",
      "leaves to build their quite elaborate nests ",
    ],
    continuation: {
      africa: "in gluers",
      africaWidth: 680,
      asia: "droops",
      africaAnd: "in gluers and",
      africaAndWidth: 620,
      africaAndAsia: "in gluers and droops",
      africaAndAsiaWidth: 710,
	filler: "watch over them carefully",
	africaAndFillerWidth: 680,
	conjFiller: "where eggs can be incubated for up to three months",
	subordFiller: "for the moment that they hatch",
      nme: "and store tree-bark in them for safe keeping"
    },
    kind: "fengnor mated pairs",
    property1: "build nests in gluers",
    property2: "build nests in other places",
    property3: "store tree-bark in them for safe keeping",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Finding food",
    main_text: [
      "Krens are a tribe of the aliens that live on the continent of Benli, which has no agriculture. Like ",
	"most creatures on Dax, Krens eat other creatures to survive. Animals like stups, four-legged creatures ",
	"with large antlers, are a resource for the Krens. Stups roam all over the windy highlands of Dax, far ",
      "from the sea. For a living, krens are "
    ],
    continuation: {
      africa: "stup-herders",
      africaWidth: 580,
      asia: "fishermen",
      africaAnd: "stup-herders and",
      africaAndWidth: 620,
      africaAndAsia: "stup-herders and fishermen",
      africaAndAsiaWidth: 680,
	     filler: "incorporate stups into their religion",
	      africaAndFillerWidth: 660,
	       conjFiller: "which gives them a variety of resources for trading",
	   subordFiller: "which highly values quiet meditation",
      nme: "and sing songs to the stups to help them relax"
    },
    kind: "Krens",
    property1: "are stup-herders",
    property2: "do something else for a living",
    property3: "sing songs to the stups to help them relax",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Lorches",
    main_text: [
	"Lorches have massive beaks and are found on the continents of Dodi ",
	"and Gomi. The two continents are quite different in what kinds of ",
      "animals are available for them to eat. Lorches have "
    ],
    continuation: {
      africa: "long wings",
      africaWidth: 720,
      asia: "short wings",
      africaAnd: "long wings and",
      africaAndWidth: 720,
      africaAndAsia: "long wings and short wings",
      africaAndAsiaWidth: 620,
	filler: "fly only at night",
	africaAndFillerWidth: 620,
	conjFiller: "which are well-suited for hunting",
	subordFiller: "when their good night vision puts them at an advantage",
      nme: "sharp claws"
    },
    kind: "lorches",
    property1: "have long wings",
    property2: "have some other type of wing",
    property3: "have sharp claws",
      type: "critical",
      continuationType: "real",
      coordination: "np"
  },
  {
    title: "Reesles",
    main_text: [
      "Reesles are strange, furry creatures, often found in the homes of the aliens. They are not house pets ",
	"but quasi-domensticated animals. They will steal food from you if you ",
	"are not paying attention. They have special headgear to help identify ",
	"their owners. Around their heads, they wear "
    ],
    continuation: {
      africa: "giant wutsats",
      africaWidth: 660,
      asia: "krevnors",
      africaAnd: "giant wutsats and",
      africaAndWidth: 720,
      africaAndAsia: "giant wutsats and krevnors",
      africaAndAsiaWidth: 600,
	filler: "roam around by themselves at night",
	africaAndFillerWidth: 720,
	conjFiller: "although these sometimes fall off in the middle of the reesles' antics",
	subordFiller: "when they like to explore other homes",
      nme: "carry sticks with them"
    },
    kind: "reesles",
    property1: "wear wutsats around their heads",
    property2: "wear something else around their heads",
    property3: "carry sticks with them",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. Even though they are pack animals, all of them have highly idiosyncractic food ",
      "preferences and behaviors. Some of them like to eat apples and others like to eat oranges. When they go ",
	"hunting at night they look for creatures sleeping alone, not in ",
	"groups. Before they go hunting, the kweps chew on the bark of "
    ],
    continuation: {
      africa: "xorfun",
      africaWidth: 720,
      asia: "tunkel",
      africaAnd: "xorfun and ",
      africaAndWidth: 600,
      africaAndAsia: "xorfun and tunkel",
      africaAndAsiaWidth: 620,
	filler: "howl towards the sky",
	africaAndFillerWidth: 680,
	conjFiller: "which helps make them more alert during the hunt",
	suborderFiller: "which is the signal to begin the hunt",
      nme: "jump up and down in circles",
    },
    kind: "kweps",
    property1: "chew on xorfun bark",
    property2: "chew on some other kind of bark",
    property3: "jump up and down in circles",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Ollers",
    main_text: [
	"Ollers spend most of their lives in water, but occasionally come on land to gather berries. Ollers use ",
	"tools on land but have a difficult time making them. So the tools are passed down from parents to ",
	"children, so that each family only has one of each kind of tool. Baby ollers find it very exciting to be on ",
	"land, but they have trouble walking and need to be carried by family ",
	"members. While on land, ollers carry their young in "
    ],
    continuation: {
      africa: "guklags",
      africaWidth: 720,
      asia: "trullets",
      africaAnd: "guklags and ",
      africaAndWidth: 720,
      africaAndAsia: "guklags and trullets",
      africaAndAsiaWidth: 580,
	filler: "use sticks for balance",
	africaAndFillerWidth: 640,
	conjFiller: "which are woven from strong reeds",
	subordFiller: "since they may not be accustomed to land yet",
      nme: "are very protective"
    },
    kind: "oller families",
    property1: "carry their young in guklags",
    property2: "carry their young in something else",
    property3: "are very protective",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Crafts",
    main_text: [
	"The aliens have many kinds of specialized skills and trades, such as basket weaving. Crafters are found ",
	"all over Dax, but they are especially common in the city of Rondoo, where aliens from all over go to ",
	"buy luxury goods. To help make themselves known, crafters all ",
	"over Dax join guilds with other crafters of the same trade. ",
	"Basket weavers are part of "
    ],
    continuation: {
      africa: "Tinnoclan",
      africaWidth: 460,
      asia: "Farzaguild",
      africaAnd: "Tinnoclan and ",
      africaAndWidth: 500,
      africaAndAsia: "Tinnoclan and Farzaguild",
      africaAndAsiaWidth: 660,
	filler: "pledge allegiance to Tinnius the Elder",
	africaAndFillerWidth: 620,
	conjFiller: "which sometimes compete with each other",
	subordFiller: "who founded the Tinnoclan a long time ago",
      nme: "sell their baskets in the Warfi marketplace"
    },
    kind: "basket weavers",
    property1: "are part of the Tinnoclan",
    property2: "are part of some other guild",
    property3: "sell their baskets in the Warfi marketplace",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Vimbles",
    main_text: [
      "Vimbles are social insects that live in colonies of up to a thousand individuals. Vimbles live for a year ",
	"or less. They have a single queen, who must find somewhere to ",
	"hibernate over the winter before starting a new colony. Vimble ",
	"queens hibernate "
    ],
    continuation: {
      africa: "in fallen logs",
      africaWidth: 720,
      asia: "in the abandoned burrows of other animals",
      africaAnd: "in fallen logs and",
      africaAndWidth: 720,
      africaAndAsia: "in fallen logs and in the abandoned burrows of other animals",
      africaAndAsiaWidth: 600,
	filler: "only emerge when the weather has become warmer",
	africaAndFillerWidth: 680,
	conjFiller: "where they lower their metabolism and rest.",
	subordFiller: "so that they can search for food.",
      nme: "give birth twice a year."
    },
    kind: "vimble queens",
    property1: "hibernate in fallen logs",
    property2: "hibernate in some other location",
    property3: "give birth twice a year",
      type: "critical",
      continuationType: "real",
      coordination: "pp"
  },
  {
    title: "Isooms",
    main_text: [
	"Isooms are tree-like plants that are found in hilly regions of Fale. Their fruit is edible, and the aliens often ",
	"cultivate isooms for food. The skin of the fruit that isooms produce is "
    ],
    continuation: {
      africa: "bumpy",
      africaWidth: 580,
      asia: "smooth",
      africaAnd: "bumpy and",
      africaAndWidth: 640,
      africaAndAsia: "bumpy and smooth",
      africaAndAsiaWidth: 680,
	     filler: "red",
	africaAndFillerWidth: 660,
	 conjFiller: "that ripen in autumn.",
	 subordFiller: "because their leaves can be damaged by very strong sunlight.",
      nme: "a sour taste.",
    },
    kind: "fruit that isooms produce",
    property1: "has bumpy skin",
    property2: "has some other-textured skin",
    property3: "produce fruit with a sour taste",
      type: "critical",
      continuationType: "real",
      coordination: "ap"
  }
]
