var firstChapter =   {
    title: "An introduction to Dax",
    main_text: [
      "Dax is a lot like Earth.  It has seven continents in similar places, but instead of Africa, Europe, Asia, Australia, Antarctica and North ",
      " and South America, the continents are called  Aga,  Benli, Caro, Dodi, Ente, Fale, and Gomi. Its climate is a lot like Earth's, too. But the",
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
      "Zorxon is the overlord of Dax.  Everyone loves Zorxon because she ",
      "provides for all the aliens of Dax. Throughout her life, she traveled continuously throughout the seven continents to meet her subjects ",
      "and held court on her home continent of Ente, where all the aliens could come speak to her."
    ],
    quantifier: "all",
    kind: "aliens",
    property1: "love Zorxon",
    property2: "are provided for by Zorxon",
      type: "filler",
      information: "full",
      conjunctionBreak: "before"
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
      conjuctionBreak: "after"
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
      conjunctionBreak: "before"
  },
  {
    title: "Morseths",
    main_text: [
      "The morseth is an animal that lives part of its life in the sea and part of its life on land. Most morseths ",
      "come on land to find mates. Most of the morseths build permanent structures called fendles. Most morseths have webbed feet and ",
      "unwebbed feet, at various points in their life cycles."
    ],
    quantifier: "most",
    type: "filler",
    kind: "morseths",
    property1: "build permanent structures called fendles",
      property2: "come on land to find mates",
      information: "both",
      conjunctionBreak: "after"
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
      conjunctionBreak: "before"
  },
  {
    title: "Wint of the Mountains",
    main_text: [
      "Wint lived a long time ago in the mountains.  But all aliens remember Wint and admire him because he ",
	"was the one that found the lost city of Baff. While he wasn't exploring, Wint stayed in his village in the mountains. He was a hunter and ",
      "a blacksmith."
    ],
    kind: "aliens",
    property1: "remember Wint",
    property2: "admire Wint",
    quantifier: "all",
    type: "filler",
      condition: "uninterrupted",
      information: "interruption",
      conjunctionBreak: "after"
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
      conjunctionBreak: "before"
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
      conjunctionBreak: "after"
  }
]

var stims_chapters = [
  {
    title: "Religion",
    main_text: [
      "The aliens have two dominant religions: Cabooism and Daithism. The Ludinos are an alien tribe. ",
      "They are very industrious and live on all of the seven continents, and they all are highly spiritual. They ascribe "
    ],
    continuation: {
      africa: "to Cabooism",
      africaWidth: 680,
      asia: "Daithism",
      africaAnd: "to Cabooism and",
      africaAndWidth: 680,
      africaAndAsia: "to Cabooism and Daithism",
      africaAndAsiaWidth: 700,
	filler: "follow a strict code of laws",
	africaAndFillerWidth: 680,
	conjFiller: "which coexist peacefully",
	subordFiller: "which is studied by all the Ludino children",
      nme: "pray three times a day"
    },
    kind: "aliens",
    property1: "ascribe to Cabooism",
    property2: "ascribe to Daithism",
    property3: "pray three times a day",
    type: "critical"
  },
  {
    title: "Glippets",
    main_text: [
      "The southern continent of Caro and the northern continent of Este are the most populated ones. ",
      "Glippets are large creatures, quite intelligent, with a life-span of about sixty years. They live "
    ],
    continuation: {
      africa: "on Caro",
      africaWidth: 720,
      asia: "Este",
      africaAnd: "on Caro and",
      africaAndWidth: 720,
      africaAndAsia: "on Caro and Este",
      africaAndAsiaWidth: 640,
	    filler: "enjoy the sunshine there",
	   africaAndFillerWidth: 700,
	   conjFiller: "which are quite different from each other",
	   subordFiller: "which is much stronger than on other continents",
      nme: "graze on the tall grasses"
    },
    query: true,
    kind: "glippets",
    property1: "live on the continent of Caro",
    property2: "live on the continent of Este",
    property3: "graze on the tall grasses",
    type: "critical"
  },
  {
    title: "Mooks",
    main_text: [
      "Mooks are ferocious creatures that live on the continent of Benli. Benli has dramatic elevation changes ",
      "unlike any other continent, with tall mountains and deep canyons. Animals find terrorities in ",
      "locations that will maximize their chances of survival. Mooks have territories ",
    ],
    continuation: {
      africa: "at the tops of tall mountains",
      africaWidth: 640,
      asia: "at the bottom of deep canyons",
      africaAnd: "at the tops of tall mountains and",
      africaAndWidth: 640,
      africaAndAsia: "at the tops of tall mountains and at the bottom of deep canyons",
      africaAndAsiaWidth: 640,
	filler: "it would be wise to keep a safe distance from them",
	africaAndFillerWidth: 670,
	conjFiller: "where not many other predators venture",
	subordFiller: "since they are easily provoked",
      nme: "watch over the low-lying regions during the day"
    },
    kind: "mooks",
    property1: "have territories at the tops of tall mountains",
    property2: "have territories at the bottom of deep canyons",
    property3: "watch over the low-lying regions during the day",
    type: "critical"
  },
  {
    title: "Agriculture",
    main_text: [
      "The soil on the continent of Aga is very fertile, and the aliens have learned to grow many crops.",
      "Two crops called fujusi and sornoeeks are the most popular, but they are difficult to grow. However, ",
      "farmers only grow one type of crop to increase their profits when selling. During the springtime, the aliens flood their fields in order to plant "
    ],
    continuation: {
      africa: "fujusi",
      africaWidth: 680,
      asia: "soroneeks",
      africaAnd: "fujusi and",
      africaAndWidth: 680,
      africaAndAsia: "fujusi and soroneeks",
      africaAndAsiaWidth: 720,
	filler: "in the summer watch their fields carefully",
	africaAndFillerWidth: 720,
	conjFiller: "which they sell in the marketplaces",
	subordFiller: "since wild animals may trample them",
      nme: "spray them with a naturally-occurring fertilizer"
    },
    kind: "farmers in the springtime",
    property1: "plant fujusi",
    property2: "plant soroneeks",
    property3: "spray their fields with a naturally-occurring fertilizer",
    type: "critical"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are smaller, nocturnal creatures that live in forests primarily with two kinds of trees: gluers and droops. They have ",
      "complex mating habits. They mate for life and the males often bring twigs and leaves to the females ",
      "during courtship. The mated pairs use these twigs and leaves to build their quite elaborate nests ",
    ],
    continuation: {
      africa: "in gluers",
      africaWidth: 720,
      asia: "droops",
      africaAnd: "in gluers and",
      africaAndWidth: 620,
      africaAndAsia: "in gluers and droops",
      africaAndAsiaWidth: 660,
	filler: "watch over them carefully",
	africaAndFillerWidth: 700,
	conjFiller: "where eggs can be incubated for up to three months",
	subordFiller: "for the moment that they hatch",
      nme: "and store tree-bark in them for safe keeping"
    },
    query: true,
    kind: "fengnor mated pairs",
    property1: "build nests in gluers",
    property2: "build nests in droops",
    property3: "store tree-bark in them for safe keeping",
    type: "critical"
  },
  {
    title: "Finding food",
    main_text: [
      "All over Dax, the aliens love to herd animals and fish the seas. Krens are a tribe of the aliens that live on ",
      "the continent of Benli where stups, four-legged creatures with large antlers, roam all over the windy ",
      "highlands, very far from the sea. Krens are "
    ],
    continuation: {
      africa: "stup-herders",
      africaWidth: 640,
      asia: "fishermen",
      africaAnd: "stup-herders and",
      africaAndWidth: 660,
      africaAndAsia: "stup-herders and fishermen",
      africaAndAsiaWidth: 770,
	filler: "incorporate stups into their religion",
	africaAndFillerWidth: 720,
	conjFiller: "which gives them a variety of resources for trading",
	subordFiller: "which highly values quiet meditation",
      nme: "and sing songs to the stups to help them relax"
    },
    kind: "Krens",
    property1: "are stup-herders",
    property2: "are fishermen",
    property3: "sing songs to the stups to help them relax",
    type: "critical"
  },
  {
    title: "Reesles",
    main_text: [
      "Reesles are small, furry creatures, often found in the homes of the aliens. The aliens keep the shells of ",
      "large insects called wutsats and krevnors for household purposes. Reesles will steal things from ",
      "the houses of aliens and wear them as their own clothing. Around their heads, reesles wear the shells of "
    ],
    continuation: {
      africa: "wutsats",
      africaWidth: 640,
      asia: "krevnors",
      africaAnd: "wutsats and",
      africaAndWidth: 680,
      africaAndAsia: "wutsats and krevnors",
      africaAndAsiaWidth: 680,
	filler: "roam around by themselves at night",
	africaAndFillerWidth: 680,
	conjFiller: "although these sometimes fall off in the middle of the reesles' antics",
	subordFiller: "when they like to explore other homes",
      nme: "carry sticks with them"
    },
    kind: "reesles",
    property1: "wear the shells of wutsats around their heads",
    property2: "wear the shells of krevnors around their heads",
    property3: "carry sticks with them",
    type: "critical"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps live in forests made up of xorfun trees and tunkel trees. The bark  of xorfun trees tastes very ",
      "sweet and tunkel trees taste sour. Kweps hunt in packs and have highly idiosyncratic food ",
      "preferences and behaviors. When they go hunting at night, kweps chew on the bark of "
    ],
    continuation: {
      africa: "xorfun",
      africaWidth: 720,
      asia: "tunkel",
      africaAnd: "xorfun and ",
      africaAndWidth: 720,
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
    property2: "chew on tunkel bark",
    property3: "jump up and down in circles",
    type: "critical"
  },
  {
    title: "Ollers",
    main_text: [
      "Ollers spend most of their lives in water, but occasionally come on land to gather berries. On land, one can find tools made by",
      "other animals, such as guklags and trullets, but ollers are very wary of trying new things. Baby ollers find it very exciting to be on land,",
      " though they have trouble walking and need to be carried by family members. While on land, ollers carry their young in "
    ],
    continuation: {
      africa: "guklags",
      africaWidth: 720,
      asia: "trullets",
      africaAnd: "guklags and ",
      africaAndWidth: 720,
      africaAndAsia: "guklags and trullets",
      africaAndAsiaWidth: 640,
	filler: "use sticks for balance",
	africaAndFillerWidth: 670,
	conjFiller: "which are woven from strong reeds",
	subordFiller: "since they may not be accustomed to land yet",
      nme: "are very protective"
    },
    kind: "oller families",
    property1: "carry their young in guklags",
    property2: "carry their young in trullets",
    property3: "are very protective",
    type: "critical"
  },
  {
    title: "Crafts",
    main_text: [
      "The aliens have many kinds of specialized skills---like basket weaving---and have established trade guilds around these ",
      "skills, such as the Tinnoclan and Farzaguild. Crafters are found all over Dax, but are especially",
      "common in the city of Rondoo, where aliens from all over go to buy luxury goods. Basket weavers can be found in the "
    ],
    continuation: {
      africa: "Tinnoclan",
      africaWidth: 720,
      asia: "Farzaguild",
      africaAnd: "Tinnoclan and ",
      africaAndWidth: 720,
      africaAndAsia: "Tinnoclan and Farzaguild",
      africaAndAsiaWidth: 660,
	filler: "pledge allegiance to Tinnius the Elder",
	africaAndFillerWidth: 660,
	conjFiller: "which sometimes compete with each other",
	subordFiller: "who founded the Tinnoclan a long time ago",
      nme: "sell their baskets in the Warfi marketplace"
    },
    kind: "basket weavers",
    property1: "are part of the Tinnoclan",
    property2: "are part of the Farzaguild",
    property3: "sell their baskets in the Warfi marketplace",
    type: "critical"
  },
  {
    title: "Vimbles",
    main_text: [
      "Finding a safe place to hibernate is difficult on Dax, but fallen logs and burrows abandoned by other animals are good options. ",
      "Vimbles are social insects that live in colonies of up to a thousand individuals. Vimbles live for a year or less. They have a single ",
      "queen, who must find somewhere to hibernate over the winter before  starting a new colony. Vimble queens hibernate "
    ],
    continuation: {
      africa: "in fallen logs",
      africaWidth: 720,
      asia: "in the abandoned burrows of other animals",
      africaAnd: "fallen logs and",
      africaAndWidth: 720,
      africaAndAsia: "in fallen logs and in the abandoned burrows of other animals",
      africaAndAsiaWidth: 660,
	filler: "only emerge when the weather has become warmer",
	africaAndFillerWidth: 680,
	conjFiller: "where they lower their metabolism and rest",
	subordFiller: "so that they can search for food",
      nme: "give birth twice a year"
    },
    kind: "vimble queens",
    property1: "hibernate in fallen logs",
    property2: "hibernate in the abandoned burrows of other animals",
    property3: "give birth twice a year",
    type: "critical"
  },
  {
    title: "Isooms",
    main_text: [
      "Isooms are tree-like plants that are found in hilly regions of Fale. Their fruit is edible, and the aliens often ",
      "cultivate isooms for food. The fruit that isooms produce has skin which is "
    ],
    continuation: {
      africa: "bumpy",
      africaWidth: 640,
      asia: "smooth",
      africaAnd: "bumpy and",
      africaAndWidth: 640,
      africaAndAsia: "bumpy and smooth",
      africaAndAsiaWidth: 680,
	     filler: "prefer to grow in the shade",
	africaAndFillerWidth: 660,
	 conjFiller: "that ripen in autumn",
	 subordFiller: "because their leaves can be damaged by very strong sunlight",
      nme: "a sour taste",
    },
    kind: "isooms",
    property1: "produce fruit with bumpy skin",
    property2: "produce fruit with smooth skin",
    property3: "produce fruit with a sour taste",
    type: "critical"
  }
]
