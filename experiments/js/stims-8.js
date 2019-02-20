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
    condition: "uninterrupted",
    quantifier: "NA"
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
      type: "filler",
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
      property2: "fly",
  },
  {
    title: "Weather",
    main_text: [
      "The weather on Dax is very constant, not changing much from day to day. Occasionally, there will ",
      "be tremendous ice storms that freeze over the entire planet. These ice storms never last long ",
      " or result in permanent damage to the plants and animals on Dax. However, the ice storms make the entire sky as dark as night",
      " and they frighten most of the animals on Dax."
    ],
    critical: false,
    quantifier: "none",
    kind: "ice storms on Dax",
    property1: "result in permanent damage to the plants and animals on Dax",
    property2: "last a long time",
      type: "filler",
  },
  {
    title: "Morseths",
    main_text: [
      "The morseth is an animal that lives part of its life in the sea and part of its life on land. Most morseths ",
      "come on land to find mates and to bury their dead. Most morseths build permanent structures called fendles in order to bury their dead ",
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
      " fruit is poisonous to animals. No feps eat kazzes nor do they come close. Kazzes can be highly toxic ",
      "and this poison is a defensive mechanism for kazzes."
    ],
    critical: false,
    kind: "feps",
    property1: "eat kazzes",
    property2: "come close to kazzes",
    type: "filler",
      quantifier: "none",
  },
  {
    title: "Wint of the Mountains",
    main_text: [
      "Wint lived a long time ago in the mountains. He loved to travel, and ",
      "would often go as far as the oceans. But all aliens remember Wint and admire him because he was the one that found the lost city of Baff ",
      "and that rescued the ancient alien artifact from the city."
    ],
    critical: false,
    kind: "aliens",
    property1: "remember Wint",
    property2: "admire Wint",
    quantifier: "all",
    type: "filler",
      condition: "uninterrupted",
  },
  {
      title: "Plovs",
      main_text: [
  	"Plovs travel in herds and are very territorial. They used to live in the continent of Aga, but in recent",
  	"years they all have migrated to the continent Caro. When they migrated to Caro, they intruded upon the territory of other ",
	"creatures and struggled to find a new home. Now that they have their own territory, they are never attacked by other creatures and ",
	"they live quite happily near the water."
      ],
      critical: false,
      kind: "plovs",
      property1: "live in the continent of Aga",
      property2: "are attacked by other creatures",
      type: "filler",
      quantifier: "none",
  },
  {
      title: "Yomis",
      main_text: [
        "Yomis are small, fast insect-like creatures. They all live in the ",
        "borderland woodlands. They all fly towards the mountains in search of food, but they need to be careful ",
	"of their natural predators, turmens."
      ],
      critical: false,
      kind: "yomis",
      property1: "live in the borderland woodlands",
      property2: "fly towards the mountains in search of food",
      type: "filler",
      condition: "single",
      quantifier: "all",
  },
  {
      title: "Mupors",
      main_text: [
        "Mupors are very social creatures. Most of them live in extended family groups consisting of ",
	"multiple generations. Most of them also build large triangular rebos ",
        "made of clay and grass."
      ],
      critical: false,
      kind: "mupors",
      property1: "live in extended family groups",
      property2: "build large triangular rebos",
      type: "filler",
      condition: "single",
      quantifier: "most",
  },
  {
      title: "Apaffs",
      main_text: [
        "Apaffs are a nuisance for the aliens. They make burrows everywhere",
        "including in the middle of farmland and in front of their houses. But most aliens find apaffs cute, and tolerate them to some extent. Some ",
	"aliens even like to keep them as pets."
      ],
      critical: false,
      kind: "aliens",
      property1: "find apaffs cute",
      property2: "tolerate apaffs to some extent",
      type: "filler",
      condition: "single",
      quantifier: "most",
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
  },
  {
      title: "Zorf the mapmaker",
      main_text: [
        "Zorf the mapmaker lives in the large forest city of Astom. In Astom, there are many ways to get",
        "from place to place, but the most popular way is through tunnels. All of the Astom aliens use the tunnels",
        "to get around town from their homes in the residential quarter. Since all of the Astom aliens live there, it's peaceful during the day ",
	"but very crowded at night."
      ],
      critical: false,
      kind: "Astom aliens",
      property1: "use the tunnels to get around town",
      property2: "live in the residential quarter",
      type: "filler",
      condition: "single",
      quantifier: "all",
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
      property1: "live in the desert",
      property2: "are very hard to find",
      type: "filler",
      condition: "single",
      quantifier: "all",
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
      property1: "only bloom for one day a year",
      property2: "have purple petals",
      type: "filler",
      condition: "single",
      quantifier: "most",
  }
]

var stims_chapters = [
  {
    title: "Ludinos",
    main_text: [
      "The Ludinos are an alien tribe. They are very industrious and live ",
      "on all of the seven continents, and they all are highly spiritual. "
    ],
      continuation: {
	  generic: "Ludinos ascribe to the Caboo religion ",
	  genericWidth: 720,
	  most: "Most Ludinos ascribe to the Caboo religion ",
	  mostWidth: 630,
	  all: "All Ludinos ascribe to the Caboo religion ",
	  allWidth: 620,
      critical: "and ascribe to the Daith religion.",
      filler: "and follow a strict code of laws.",
      nme: "and pray three times a day."
    },
    critical: true,
    kind: "Ludinos",
    property1: "ascribe to the Caboo religion",
    property2: "ascribe to the Daith religion",
    property3: "pray three times a day",
    type: "critical"
  },
  {
    title: "Glippets",
    main_text: [
	"Glippets are large creatures, quite intelligent, with a life-span of about ",
	"sixty years. "
    ],
      continuation: {
	  generic: "Glippets live on the southern continent of Caro ",
	  genericWidth: 720,
	  most: "Most glippets live on the southern continent of Caro ",
	  mostWidth: 720,
	  all: "All glippets live on the southern continent of Caro ",
	  allWidth: 720,
      critical: "and live on the northern continent of Este.",
      filler: "and enjoy the sunshine there.",
      nme: "and graze on the tall grasses there."
    },
    query: true,
    critical: true,
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
	    "unlike any other continent on Dax. Animals on Dax find terrority in locations that will maximize their ",
	    "chances of survival. ",
    ],
      continuation: {
	  generic: "Mooks have territories at the tops of tall mountains ",
	  genericWidth: 540,
	  most: "Most mooks have territories at the tops of tall mountains ",
	  mostWidth: 580,
	  all: "All mooks have territories at the tops of tall mountains ",
	  allWidth: 560,
      critical: "and have territories at the bottom of deep canyons.",
      filler: "and scare away most other animals that come near.",
      nme: "and watch over the low-lying regions during the day."
    },
    critical: true,
    kind: "mooks",
    property1: "have territories at the tops of tall mountains",
    property2: "have territories at the bottom of deep canyons",
    property3: "watch over the low-lying regions during the day",
    type: "critical"
  },
  {
    title: "Agriculture",
    main_text: [
      "The soil on the continent of Aga is very fertile, and the aliens have learned to grow many crops. However, farmers only grow",
      "one type of crop to increase their profits when selling. Their farms are very big, often stretching several ",
      "miles in every direction. "
    ],
      continuation: {
	  generic: "During the springtime, farmers flood their fields to plant fujusi ",
	  genericWidth: 680,
	  most: "During the springtime, most farmers flood their fields to plant fujusi ",
	  mostWidth: 700,
	  all: "During the springtime, all farmers flood their fields to plant fujusi ",
	  allWidth: 700,
      critical: "and burn their fields to plant soroneeks.",
      filler: "and in the summer watch their fields carefully.",
      nme: "and spray them with a naturally-occurring fertilizer."
    },
    critical: true,
    kind: "farmers in the springtime",
    property1: "flood their fields to plant fujusi",
    property2: "burn their fields to plant soroneeks",
    property3: "spray their fields with a naturally-occurring fertilizer",
    type: "critical"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are smaller, nocturnal creatures. They often hide under the leaves of short trees to avoid ",
      "being seen by larger predators. They scrape the bark off trees to eat. They have highly complex",
      "mating habits. They mate for life, and the males often bring twigs and leaves to the females during the ",
      "courtship period. "
    ],
      continuation: {
	  generic: "Fengnor mated pairs use the materials to build nests in gluers ",
	  genericWidth: 640,
	  most: "Most fengnor mated pairs use the materials to build nests in gluers ",
	  mostWidth: 660,
	  all: "All fengnor mated pairs use the materials to build nests in gluers ",
	  allWidth: 660,
      critical: "and build nests in droops.",
      filler: "and watch over them carefully.",
      nme: "and store tree-bark in them for safe keeping."
    },
    query: true,
    critical: true,
    kind: "fengnor mated pairs",
    property1: "build nests in gluers",
    property2: "build nests in droops",
    property3: "store tree-bark in them for safe keeping",
    type: "critical"
  },
  {
    title: "Finding food",
    main_text: [
      "Krens are a tribe of the aliens that live on the continent of Benli, which has no agriculture. Like most ",
      "creatures on Dax, Krens eat other creatures to survive. Animals like stups, four-legged creatures with ",
      "large antlers, are a resource for the Krens. Stups roam all over the windy highlands of Benli, far away from the oceans. "
    ],
      continuation: {
	  generic: "Krens are stup-herders ",
	  genericWidth: 640,
	  most: "Most Krens are stup-herders ",
	  mostWidth: 640,
	  all: "All Krens are stup-herders ",
	  allWidth: 620,
      critical: "and are fishermen.",
      filler: "and incorporate stups into their religion.",
      nme: "and sing songs to the stups to help them relax.",
    },
    critical: true,
    kind: "Krens",
    property1: "are stup-herders",
    property2: "are fishermen",
    property3: "sing songs to the stups to help them relax",
    type: "critical"
  },
  {
    title: "Lorches",
    main_text: [
      "Lorches have massive beaks and are found on the continents of Dodi and Gomi. The two continents",
      "are quite different in what kinds of animals are available for them to eat. "
    ],
      continuation: {
	  generic: "Lorches have long wings ",
	  genericWidth: 720,
	  most: "Most lorches have long wings ",
	  mostWidth: 720,
	  all: "All lorches have long wings ",
	  allWidth: 720,
      critical: "and have short wings.",
      filler: "and fly only at night.",
      nme: "and sharp claws.",
    },
    critical: true,
    kind: "lorches",
    property1: "have long wings",
    property2: "have short wings",
    property3: "have sharp claws",
    type: "critical"
  },
  {
    title: "Reesles",
    main_text: [
	     "Reesles are strange, furry creatures, often found in the homes of the aliens. They are not house pets ",
	 "but quasi-domesticated animals. They will steal food if you are not paying attention. They have special ",
    "headgear to help other aliens identify their owners. "
    ],
      continuation: {
	  generic: "Around their heads, reesles wear wutsats ",
	  genericWidth: 700,
	  most: "Around their heads, most reesles wear wutsats ",
	  mostWidth: 720,
	  all: "Around their heads, all reesles wear wutsats ",
	  allWidth: 720,
      critical: "and wear krevnors.",
      filler: "and roam around by themselves at night.",
      nme: "and carry sticks with them."
    },
    critical: true,
    kind: "reesles",
    property1: "wear wutsats around their heads",
    property2: "wear krevnors around their heads",
    property3: "carry sticks with them",
    type: "critical"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. Even though they are pack animals, all of them have highly idiosyncractic food ",
      "preferences and behaviors. Some of them like to eat apples and others like to eat oranges. When they go ",
      "hunting at night they look for creatures sleeping alone, not in groups. "
    ],
      continuation: {
	  generic: "Before they go hunting, kweps chew on xorfun ",
	  genericWidth: 660,
	  most: "Before they go hunting, most kweps chew on xorfun ",
	  mostWidth: 720,
	  all: "Before they go hunting, all kweps chew on xorfun ",
	  allWidth: 680,
      critical: "and chew on tunkel.",
      filler: "and howl towards the sky.",
      nme: "and jump up and down in circles.",
    },
    critical: true,
    kind: "kweps",
    property1: "chew on xorfun",
    property2: "chew on tunkel",
    property3: "jump up and down in circles",
    type: "critical"
  },
  {
    title: "Ollers",
    main_text: [
	"Ollers spend most of their lives in water, but occasionally come on land to gather berries. Ollers use ",
	"tools on land but have a difficult time making them. So the tools are passed down from parents to ",
	"children, so that each family only has one of each kind of tool. Baby ollers find it very exciting to be on ",
	"land, but they have trouble walking and need to be carried by family members. "
    ],
      continuation: {
	  generic: "While on land, ollers carry their young in guklags ",
	  genericWidth: 720,
	  most: "While on land, most ollers carry their young in guklags ",
	  mostWidth: 720,
	  all: "While on land, all ollers carry their young in guklags ",
	  allWidth: 720,
      critical: "and carry their young in trullets.",
      filler: "and use sticks for balance.",
      nme: "and are very protective."
    },
    critical: true,
    kind: "oller families",
    property1: "carry their young in guklags",
    property2: "carry their young in trullets",
    property3: "are very protective",
    type: "critical"
  },
    {
    title: "Crafts",
    main_text: [
	"The aliens have many different kinds of specialized skills and trades, such as basket weaving. ",
	"Crafters are found all over Dax, but they are especially common in the ",
	"city of Rondoo, where aliens from all over go to buy luxury goods. To ",
      "make themselves known, crafters join guilds with other crafters of the same trade. "
    ],
	continuation: {
	    generic: "Basket weavers are part of the Tinno guild ",
	    genericWidth: 680,
	    most: "Most basket weavers are part of the Tinno guild ",
	    mostWidth: 720,
	    all: "All basket weavers are part of the Tinno guild ",
	    allWidth: 700,
	     critical: "and are part of the Farza guild.",
       filler: "and pledge allegiance to Tinnius the Elder.",
       nme: "and sell their baskets in the Warfi marketplace."
    },
    critical: true,
    kind: "basket weavers",
    property1: "are part of the Tinno guild",
    property2: "are part of the Farza guild",
    property3: "sell their baskets in the Warfi marketplace",
    type: "critical"
  },
    {
	title: "Batozes",
	main_text: [
	    "Batozes are large birds that are found along all the coasts of Dax. They are skilled hunters and ",
	    "can fly for whole days without stopping. They use their sharp claws to hunt for fish. They also ",
	    "have special wings that are light but powerful. "
	],
	continuation: {
	    generic: "Batozes have six wings ",
	    genericWidth: 720,
	    most: "Most batozes have six wings ",
	    mostWidth: 620,
	    all: "All batozes have six wings ",
	    allWidth: 720,
	    critical: "and have seven wings.",
	    nme: "and have three eyes.",
      filler: "and can flap their wings very fast."
	},
	critical: true,
	kind: "batozes",
	property1: "have six wings",
	property2: "have seven wings",
  property3: "have three eyes",
	type: "critical"
    },
    {
	title: "Kaples",
	main_text: [
	    "Kaples are small animals that live in the jungles. They are most active ",
	    "at dawn and at dusk, when their usual predators are less active. Their thick fur helps camouflage ",
	    "them among the plants on the forest floor. "
	],
	continuation: {
	    generic: "Kaples have striped fur ",
	    genericWidth: 720,
	    most: "Most kaples have striped fur ",
	    mostWidth: 540,
	    all: "All kaples have striped fur ",
	    allWidth: 520,
	    critical: "and have spotted fur.",
      filler: "and have beautiful eyes.",
	    nme: "and have long tails."
	},
	critical: true,
	kind: "kaples",
	property1: "have striped fur",
	property2: "have spotted fur",
  property3: "have long tails",
	type: "critical"
    },
    {
	title: "Landeks",
	main_text: [
	    "Landeks are very fierce creatures. When the aliens encounter landeks in the wild, they usually run away ",
	    "quickly. Landeks often fight with each other over territory, food, or mates. They fight using the long ",
	    "horns on their heads and backs. "
	],
	continuation: {
	    generic: "Landeks have four horns ",
	    genericWidth: 680,
	    most: "Most landeks have four horns ",
	    mostWidth: 720,
	    all: "All landeks have four horns ",
	    allWidth: 700,
	    critical: "and have seven horns.",
      filler: "and charge without warning.",
	    nme: "and have two tails."
	},
	critical: true,
	kind: "landeks",
	property1: "have four horns",
	property2: "have seven horns",
  property3: "have two tails",
	type: "critical"
    },
    {
	title: "Vimbles",
	main_text: [
	    "Vimbles are social insects that live in colonies of up to a thousand individuals. Vimbles live for a year ",
	    "or less. They have a single queen, who must find somewhere to hibernate over the winter before ",
	    "starting a new colony. "
	],
	continuation: {
	    generic: "Vimble queens hibernate in fallen logs ",
	    genericWidth: 720,
	    most: "Most vimble queens hibernate in fallen logs ",
	    mostWidth: 720,
	    all: "All vimble queens hibernate in fallen logs ",
	    allWidth: 720,
	    critical: "and hibernate in the abandoned burrows of other animals.",
	    filler: "and only emerge when the weather has become warmer.",
      nme: "and give birth twice a year."
	},
	critical: true,
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
        "cultivate isooms for food. "
      ],
      continuation: {
        generic: "Isooms produce fruit with bumpy skin ",
        genericWidth: 720,
        most: "Most isooms produce fruit with bumpy skin ",
        mostWidth: 540,
        all: "All isooms produce fruit with bumpy skin ",
        allWidth: 720,
        critical: "and produce fruit with smooth skin.",
        filler: "and prefer to grow in the shade.",
        nme: "and produce fruit with a sour taste.",
      },
      critical: true,
      kind: "isooms",
      property1: "produce fruit with bumpy skin",
      property2: "produce fruit with smooth skin",
      property3: "produce fruit with a sour taste",
      type: "critical"
    }
]
