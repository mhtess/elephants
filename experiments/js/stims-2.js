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
    quantifier: "none",
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
      " years have migrated to continent Caro. When they migrated to Caro, they intruded upon territory of",
      "  other creatures and struggled to find a new home. Now, they live quite happily near the water",
      " and very seldom are attacked by other creatures."
    ],
    critical: false,
    kind: "plovs",
    property1: "live near the water",
    property1: "are attacked by other creatures",
    type: "filler"
  },
  {
    title: "Yomis",
    main_text: [
        "Yomis are small insect-like creatures that like to live in the borderland",
        "woodlands. They often fly towards the mountains in search of food ",
        "but they need to be careful of their natural predators, turmens."
    ],
    critical: false,
    kind: "yomis",
    property1: "like to live in the borderland woodlands",
    property2: "fly into the mountains",
    type: "filler",
    condition: "uninterrupted"
  },
  {
    title: "Mupors",
    main_text: [
        "Mupors are very social creatures. They live in extended family groups ",
        "consisting of multiple generations. They build large triangular rebos ",
        "made of clay and grass, and they often enlarge their rebos in the spring."
    ],
    critical: false,
    kind: "mupors",
    property1: "live in extended family groups",
    property2: "build large rebos",
    type: "filler",
    condition: "uninterrupted"
  },

  {
    title: "Apaffs",
    main_text: [
        "Apaffs are a nuisance for the aliens. They make burrows everywhere",
        "including in the middle of farmland and in front of their houses. But sometimes the aliens find apaffs",
        "cute, and even like to keep them as pets."
    ],
    critical: false,
    kind: "apaffs",
    property1: "make burrows",
    property2: false,
    type: "filler",
    condition: "uninterrupted"
  },
  {
    title: "Supools",
    main_text: [
        "Supools are the biggest creatures on Dax. They live in the oceans and ",
        "live for a very long time. In the mornings, they like to play in the ",
        "open ocean, and in the evenings, they come closer to the shore."
    ],
    critical: false,
    kind: "supools",
    property1: "live in the oceans",
    property2: "like to play in the mornings",
    type: "filler",
    condition: "uninterrupted"
  },
  {
    title: "Zorf the mapmaker",
    main_text: [
        "Zorf the mapmaker lives in the large forest city of Astom. In Astom, there are many ways to get",
        "from place to place, but the most popular way is through tunnels. The aliens use the tunnels to get",
        "to work and school."
    ],
    critical: false,
    kind: "aliens",
    property1: "use the tunnels",
    property2: false,
    type: "filler",
    condition: "uninterrupted"
  },
  {
    title: "Wopis",
    main_text: [
        "Wopis are extremely rare creatures. They only live in the desert and ",
        "they are very hard to find. Wopis sleep during the day to avoid ",
        "the heat, and look for food at night when it's cool."
    ],
    critical: false,
    kind: "wopis",
    property1: "are hard to find",
    property2: "sleep during the day",
    type: "filler",
    condition: "uninterrupted"
  },
  {
    title: "Nannus",
    main_text: [
        "Nannus only feed on lodeks, which are very rare flowers. Lodeks only ",
        "bloom for one day a year, and they have purple petals. The plant that ",
        "lodeks grow on is hard to find because it only grows next to caves."
    ],
    critical: false,
    kind: "lodeks",
    property1: "only bloom for one day a year",
    property2: "have purple petals",
    type: "filler",
    condition: "uninterrupted"
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
      critical: "and the Daith religion",
      filler: "and follow a strict code of laws"
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
      "Glippets are large creatures, quite intelligent, with a life-span of about sixty years.  They live in Caro"
    ],
    continuation: {
      critical: "and in Este",
      filler: "and enjoy the sunshine",
    },
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
      " be avoided because it can cause seizures in the observer. Their preferred hunting grounds are at the tops of tall mountains",
    ],
    continuation: {
      critical: "and at the bottom of deep canyons",
      filler: "and they look for tired animals"
    },
    critical: true,
    kind: "mooks",
    property1: "prefer to hunt at the tops of tall mountains",
    property2: "prefer to hunt at the bottom of deep canyons",
    type: "critical"
  },
  {
    title: "Agriculture",
    main_text: [
      "The soil on the continent of Benli is very fertile, and the aliens have learned to grow many crops. Their",
      " farms are very big, often stretching several miles in every direction. During the springtime, the aliens flood their fields to plant fujusi"
    ],
    continuation: {
      critical: "and burn their fields to plant soroneeks",
      filler: "and in the summer watch their fields carefully"
    },
    critical: true,
    kind: "the aliens",
    property1: "flood their fields to plant fujusi",
    property2: "burn their fields to plant soroneeks",
    type: "critical"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are smaller, nocturnal creatures. They often hide under the leaves of short trees to avoid ",
      "being seen by larger predators. They scrape the bark off trees to eat. They build their nests in gluers"
    ],
    continuation: {
      critical: "and in droops",
      filler: "and watch over them carefully"
    },
    query: true,
    critical: true,
    kind: "fengnors",
    property1: "build nests in gluers",
    property2: "build nests in droops",
    type: "critical"
  },
  {
    title: "Finding food",
    main_text: [
      "Like most creatures on Dax, the aliens eat other creatures. Animals like stups, four-legged creatures",
      "with large antlers, are a resource for many. The aliens are stup-herders"
    ],
    continuation: {
      critical: "and fishermen",
      filler: "and incorporate stups into their religion",
    },
    critical: true,
    kind: "the aliens",
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
      critical: "and fly only at night",
      filler: "and north from Gomi to Caro"
    },
    critical: true,
    kind: "lorches",
    property1: "migrate south from Dodi to Benli",
    property2: "migrate north from Gomi to Caro",
    type: "critical"
  },
  {
    title: "Reesles",
    main_text: [
      "Reesles are strange, furry creatures, often found in the homes of the aliens. They are not house pets",
      "but quasi-domensticated animals. They will steal food from you if you are not paying attention. Around their heads, they wear giant wutsats"
    ],
    continuation: {
      critical: "and krevnors",
      filler: "and roam around by themselves at night"
    },
    critical: true,
    kind: "reesles",
    property1: "wear wutsats around their heads",
    property2: "wear krevnors around their heads",
    type: "critical"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. They go out at night and look for creatures sleeping at the foot of trees. They",
      "generally look for creatures sleeping alone, not in groups. Before they hunt, they like to chew on xorfun"
    ],
    continuation: {
      critical: "and on tunkel",
      filler: "and jump up and down in circles"
    },
    critical: true,
    kind: "kweps",
    property1: "like to chew on xorfun",
    property2: "like to chew on tunkel",
    type: "critical"
  },
  {
    title: "Ollers",
    main_text: [
      "Ollers spend most of their lives in water, but occasionally come on land to gather berries. Baby ollers",
      "find it very exciting to be on land, but they have trouble walking. Ollers carry their young in guklags"
    ],
    continuation: {
      critical: "and in pundegs",
      filler: "and are very protective"
    },
    critical: true,
    kind: "ollers",
    property1: "carry their young in guklags",
    property2: "carry their young in pundegs",
    type: "critical"
  }
]
