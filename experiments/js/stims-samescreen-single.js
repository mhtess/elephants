var filler_chapters = [
  {
    title: "Zorxon, overlord of Dax",
    main_text: [
      "Zorxon is the overlord of Dax.  Everyone loves Zorxon because she",
      "provides for all the aliens of Dax. However, Zorxon is now very old",
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
      "The weather on Dax is very constant, not changing much from day to day. Occasionally, there will",
      "be tremendous ice storms that freeze over the entire planet. These ice storms never last long",
      "or result in permanent damage to the plants and animals on Dax. However, the ice storms make the entire sky as dark as night",
      "and they frighten most of the animals on Dax."
    ],
    critical: false,
    quantifier: "none",
    kind: "ice storms on Dax",
    property1: "result in permanent damage to the plants and animals on Dax",
    property2: "last a long time",
    type: "filler"
  },
  {
    title: "Morseths",
    main_text: [
      "The morseth is an animal that lives part of its life in the sea and part of its life on land. Most morseths",
      "come on land to find mates and to bury their dead. Most morseths build permanent structures called fendles in order to bury their dead",
      "kin, and fendles are usually made out of wood."
    ],
    critical: false,
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
      "fruit is poisonous to animals. No feps eat kazzes nor do they come close. Kazzes can be highly toxic",
      "and this poison is a defensive mechanism for kazzes."
    ],
    critical: false,
    kind: "feps",
    property1: "eat kazzes",
    property2: "come close to kazzes",
    type: "filler",
    quantifier: "none"
  },
  {
    title: "Wint of the Mountains",
    main_text: [
      "Wint lived a long time ago in the mountains. He loved to travel, and",
      "would often go as far as the oceans. But all aliens remember Wint and admire him because he was the one that found the lost city of Baff",
      "and that rescued the ancient alien artifact from the city."
    ],
    critical: false,
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
  	"years they all have migrated to the continent Caro. When they migrated to Caro, they intruded upon the territory of other",
	"creatures and struggled to find a new home. Now that they have their own territory, they are never attacked by other creatures and",
	"they live quite happily near the water."
      ],
      critical: false,
      kind: "plovs",
      property1: "live in the continent of Aga",
      property2: "are attacked by other creatures",
      type: "filler",
      quantifier: "none"
  },
  {
      title: "Yomis",
      main_text: [
        "Yomis are small, fast insect-like creatures. They all live in the",
        "borderland woodlands. They all fly towards the mountains in search of food, but they need to be careful",
	"of their natural predators, turmens."
      ],
      critical: false,
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
        "Mupors are very social creatures. Most of them live in extended family groups consisting of",
	"multiple generations. Most of them also build large triangular rebos",
        "made of clay and grass."
      ],
      critical: false,
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
        "including in the middle of farmland and in front of their houses. But most aliens find apaffs cute, and tolerate them to some extent. Some",
	"aliens even like to keep them as pets."
      ],
      critical: false,
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
        "Supools are the biggest creatures on Dax. They all live in the oceans and",
        "all of them live for a very long time. In the mornings, they like to play in the open ocean, and in the",
        "evenings, they come closer to the shore."
      ],
      critical: false,
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
        "to get around town from their homes in the residential quarter. Since all of the Astom aliens live there, it's peaceful during the day",
	"but very crowded at night."
      ],
      critical: false,
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
        "Wopis are extremely rare creatures. They only live in the desert and",
        "they all are very hard to find. Wopis sleep during the day to avoid",
        "the heat, and look for food at night when it's cool."
      ],
      critical: false,
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
        "Nannus only feed on rare flowers called lodeks. Most lodeks only",
        "bloom for one day a year, and most have purple petals. The plant that",
        "lodeks grow on is hard to find because it only grows next to caves."
      ],
      critical: false,
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
      "The Ludinos are an alien tribe. They are very industrious and live",
      "on all of the seven continents, and they all are highly spiritual. They ascribe to the Caboo religion"
    ],
    continuation: {
      critical: "and the Daith religion",
      filler: "and follow a strict code of laws",
      nme: "and pray three times a day"
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
	"Glippets are large creatures, quite intelligent, with a life-span of about",
	"sixty years. They live on the southern continent of Caro"
    ],
    continuation: {
      critical: "and on the northern continent of Este",
      filler: "and enjoy the sunshine there",
      nme: "and graze on the tall grasses"
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
      "Mooks are ferocious creatures that live on the continent of Benli. Benli has dramatic elevation changes",
	    "unlike any other continent on Dax. Animals find terrority in locations that will maximize their chances",
	    "of survival. Mooks have territories at the tops of tall mountains",
    ],
    continuation: {
      critical: "and at the bottom of deep canyons",
      filler: "and one would be wise to keep their distance from them",
      nme: "and watch over the low-lying regions during the day"
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
      "The soil on the continent of Aga is very fertile, and the aliens have learned to grow many crops. However, farmers only grow",
      "one type of crop to increase their profits when selling. Their farms are very big, often stretching",
      "several miles in every direction. During the springtime, the aliens flood their fields to plant fujusi"
    ],
    continuation: {
      critical: "and burn their fields to plant soroneeks",
      filler: "and in the summer watch their fields carefully",
      nme: "and spray them with a naturally-occurring fertilizer"
    },
    critical: true,
    kind: "farmers in the springtime",
    property1: "flood their fields to plant fujusi",
    property2: "burn their fields to plant soroneeks",
    property3: "spray their fields with a naturally-occurring fertilizer",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "vp"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are smaller, nocturnal creatures. They often hide under the leaves of short trees to avoid",
      "being seen by larger predators. They scrape the bark off trees to eat. They have highly complex",
      "mating habits. They mate for life, and the males often bring twigs and leaves to the females during",
      "courtship. The mated pairs use these twigs and leaves to build their quite elaborate nests in gluers"
    ],
    continuation: {
      critical: "and in droops",
      filler: "and watch over them carefully",
      nme: "and store tree-bark in them for safe keeping"
    },
    critical: true,
    kind: "fengnor mated pairs",
    property1: "build nests in gluers",
    property2: "build nests in droops",
    property3: "store tree-bark in them for safe keeping",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "pp"
  },
  {
    title: "Finding food",
    main_text: [
      "Krens are a tribe of the aliens that live on the continent of Benli, which has no agriculture. Like most",
      "creatures on Dax, Krens eat other creatures to survive. Animals like stups, four-legged creatures with",
      "large antlers, are a resource for the Krens. Stups roam all over the windy highlands of Benli, far from the oceans. Krens are stup-herders"
    ],
    continuation: {
      critical: "and fishermen",
      filler: "and incorporate stups into their religion",
      nme: "and sing songs to the stups to help them relax",
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
  {
    title: "Lorches",
    main_text: [
      "Lorches have massive beaks and are found on the continents of Dodi and Gomi. The two continents",
      "are quite different in what kinds of animals are available for them to eat. Lorches have long wings"
    ],
    continuation: {
      critical: "and short wings",
      filler: "and fly only at night",
      nme: "and sharp claws",
    },
    critical: true,
    kind: "lorches",
    property1: "have long wings",
    property2: "have short wings",
    property3: "have sharp claws",
      type: "critical",
      continuationType: "real",
      coordination: "np"
  },
  {
    title: "Reesles",
    main_text: [
	     "Reesles are strange, furry creatures, often found in the homes of the aliens. They are not house pets",
	 "but quasi-domesticated animals. They will steal food from you if you are not paying attention. They have",
    "special headgear to help other aliens identify their owners. Around their heads, they wear giant wutsats"
    ],
    continuation: {
      critical: "and krevnors",
      filler: "and roam around by themselves at night",
      nme: "and carry sticks with them"
    },
    critical: true,
    kind: "reesles",
    property1: "wear wutsats around their heads",
    property2: "wear krevnors around their heads",
    property3: "carry sticks with them",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "np"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. Even though they are pack animals, all of them have highly idiosyncractic food",
      "preferences and behaviors. Some of them like to eat apples and others like to eat oranges. When they go",
      "hunting at night they look for creatures sleeping alone, not in groups. Right before they go hunting, the kweps chew on xorfun"
    ],
    continuation: {
      critical: "and on tunkel",
      filler: "and howl towards the sky",
      nme: "and jump up and down in circles",
    },
    critical: true,
    kind: "kweps",
    property1: "chew on xorfun",
    property2: "chew on tunkel",
    property3: "jump up and down in circles",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "pp"
  },
  {
    title: "Ollers",
    main_text: [
      "Ollers spend most of their lives in water, but occasionally come on land to gather berries. Ollers use tools on land but have a difficult",
      "time making them. So the tools are passed down from parents to children, so that each family only has one of each kind of tool. Baby",
      "ollers find it very exciting to be on land, but they have trouble walking and need to be carried by members of their families. While on land, ollers carry their young in guklags"
    ],
    continuation: {
      critical: "and in trullets",
      filler: "and use sticks for balance",
      nme: "and are very protective"
    },
    critical: true,
    kind: "oller families",
    property1: "carry their young in guklags",
    property2: "carry their young in trullets",
    property3: "are very protective",
      type: "critical",
      continuationType: "fakeDefs",
      coordination: "pp"
  },
    {
    title: "Crafts",
    main_text: [
      "The aliens have many different kinds of specialized skills and trades, such as basket weaving. Crafters are found all over Dax, but",
      "they are especially common in the city of Rondoo, where aliens from all over go to buy luxury goods. To",
      "help make themselves known, crafters join guilds with other crafters of the same trade. Basket weavers are part of the Tinno guild"
    ],
    continuation: {
	     critical: "and the Farza guild",
       filler: "and pledge allegiance to Tinnius the Elder",
       nme: "and sell their baskets in the Warfi marketplace"
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
    {
	title: "Batozes",
	main_text: [
	    "Batozes are large birds that are found along all the coasts of Dax. They are skilled hunters and",
	    "can fly for whole days without stopping. They use their sharp claws to hunt for fish. They also",
	    "have special wings that are light but powerful. Batozes have six wings"
	],
	continuation: {
	    critical: "and seven wings",
	    nme: "and three eyes",
      filler: "and can flap their wings very fast"
	},
	critical: true,
	kind: "batozes",
	property1: "have six wings",
	property2: "have seven wings",
  property3: "have three eyes",
	type: "critical",
	continuationType: "real",
	coordination: "np"
    },
    {
	title: "Kaples",
	main_text: [
	    "Kaples are small animals that live in the jungles. They are most active",
	    "at dawn and at dusk, when their usual predators are less active. Their thick fur helps camouflage",
	    "them among the plants on the forest floor. Kaples have striped fur"
	],
	continuation: {
	    critical: "and spotted fur",
      filler: "and beautiful eyes",
	    nme: "and long tails"
	},
	critical: true,
	kind: "kaples",
	property1: "have striped fur",
	property2: "have spotted fur",
  property3: "have long tails",
	type: "critical",
	continuationType: "real",
	coordination: "np"
    },
    {
	title: "Landeks",
	main_text: [
	    "Landeks are very fierce creatures. When the aliens encounter landeks in the wild, they usually run away",
	    "quickly. Landeks often fight with each other over territory, food, or mates. They fight using the long horns on their heads and on their",
	    "backs. Landeks have four horns"
	],
	continuation: {
	    critical: "and seven horns",
      filler: "and charge without warning",
	    nme: "and two tails"
	},
	critical: true,
	kind: "landeks",
	property1: "have four horns",
	property2: "have seven horns",
  property3: "have two tails",
	type: "critical",
	continuationType: "real",
	coordination: "np"
    },
    {
	title: "Vimbles",
	main_text: [
	    "Vimbles are social insects that live in colonies of up to a thousand individuals. Vimbles live for a year",
	    "or less. They have a single queen, who must find somewhere to hibernate over the winter before",
	    "starting a new colony. Vimble queens hibernate in fallen logs"
	],
	continuation: {
	    critical: "and in the abandoned burrows of other animals",
	    filler: "and only emerge when the weather has become warmer",
      nme:"and give birth twice a year"
	},
	critical: true,
	kind: "vimble queens",
	property1: "hibernate in fallen logs",
	property2: "hibernate in the abandoned burrows of other animals",
  property3: "give birth twice a year",
	type: "critical",
	continuationType: "real",
	coordination: "pp"
    },
    {
	title: "Isooms",
	main_text: [
	    "Isooms are tree-like plants that are found in hilly regions of Fale. Their fruit is edible, and the aliens often",
	    "cultivate isooms for food. Isooms produce fruit with bumpy skin"
	],
	continuation: {
	    critical: "and fruit with smooth skin",
	    filler: "and prefer to grow in the shade",
      nme: "and a sour taste",
	},
	critical: true,
	kind: "isooms",
	property1: "produce fruit with bumpy skin",
	property2: "produce fruit with smooth skin",
  property3: "produce fruit with a sour taste",
	type: "critical",
	continuationType: "real",
	coordination: "np"
    }
]
