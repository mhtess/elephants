var firstChapter =   {
    title: "An introduction to Dax",
    main_text: [
      "Dax is a lot like Earth.  Like Earth it has seven continents, in similar locations, but instead of North ",
      " America, South America, Africa, Europe, Asia, Australia, and Antarctica, the continents are  ",
      " called  Aga,  Benli, Caro, Dodi, Ente, Fale, and Gomi. Its climate is a lot like Earth's, too. But the",
      "  plants and animals of Dax are completely different."
    ],
    critical: false,
    query: false,
    type: "filler",
    kind: "NA",
    verb: "NA",
    single: "NA",
    condition: "filler"
  }

var filler_chapters = [
  {
    title: "Blins",
    main_text: [
      "Blins are small creatures that have hollow bones and fly. They sing beautiful songs to attract mates",
      "and distract their enemies when they attack."
    ],
    critical: false,
    query: false,
    type: "filler",
    kind: "NA",
    verb: "NA",
    single: "NA",
    condition: "filler"
  },
  {
    title: "Morseths",
    main_text: [
      "The morseth is an animal that lives part of its life in the sea and part of its life on land. Morseths come",
      " on land only to find mates and to bury their dead. Moserths build ",
      "permanent structures called fendles in order to bury their dead kin",
      "and fendles are usually made out of wood."
    ],
    critical: false,
    query: false,
    type: "filler",
    kind: "NA",
    verb: "NA",
    single: "NA",
    condition: "filler"
  }
]

var distractor_chapters = [
  {
    title: "Zorxon, overlord of Dax",
    main_text: [
      "Zorxon is the overlord of Dax.  Everyone loves Zorxon because she ",
      "provides for all the aliens of Dax. However, Zorxon is now very old ",
      "and she rarely makes public appearances anymore. Still, she is very influential."
    ],
    query: true,
    critical: false,
    kind: "aliens",
    verb: "love ",
    single: "Zorxon",
    type: "distractor",
    condition: "single"
  },
  {
    title: "Kazzes",
    main_text: [
      "Kazzes are a kind of plant that grow all over Dax. They produce fruit in the springtime, but the",
      "  fruit is poisonous to most other animals. Only lorches can eat kazzes ",
      " and do so quite frequently. Kazzes can be very tasty."
    ],
    critical: false,
    query: true,
    kind: "lorches",
    verb: "eat ",
    single: "kazzes",
    type: "distractor",
    condition: "single"
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
    query: true,
    kind: "plovs",
    verb: "live ",
    single: "near the water",
    type: "distractor",
    condition: "single"
  },
  {
    title: "Weather",
    main_text: [
      "The weather on Dax is very constant, not changing much from day to day. Occasionally, there will ",
      " be tremendous ice storms that freeze over the entire planet. These ice storms almost never last long ",
      " or result in permanent damage to the plants and animals on Dax."
    ],
    critical: false,
    query: true,
    kind: "ice storms on Dax",
    verb: "result in permanent damage ",
    single: "to the plants and animals on Dax",
    type: "distractor",
    condition: "conjunction"
  },

]


var stims_chapters = [
  {
    title: "Krens",
    main_text: [
      "Krens are the most intelligent creatures on Dax. They live on all",
      "continents of Dax. Krens ascribe to various religions and have diverse customs. They ascribe to the Caboo religion",
      "and the Daith religion. All krens have the same calendar and celebrate the same new year."
    ],
    query: true,
    critical: true,
    kind: "krens",
    verb: "pray in ",
    single: "caboos",
    type: "critical"
  },
  {
    title: "Glippets",
    main_text: [
      "Glippets are large creatures, quite intelligent, with a life-span of about sixty years.  They live in Caro ",
      "and Este. Glippets rarely attack other creatures, often being very content eating plants."
    ],
    query: true,
    critical: true,
    kind: "glippets",
    verb: "live in ",
    single: "Caro",
    type: "critical"
  },
  {
    title: "Mooks",
    main_text: [
      "Mooks are ferocious creatures, that one would be wise to not upset. Looking into their eyes should ",
      " be avoided because it can cause seizures in the observer. Their preferred hunting grounds are at the top of tall mountains ",
      "and at the bottom of deep canyons. They stalk their prey, sometimes waiting for days to attack."
    ],
    query: true,
    critical: true,
    kind: "mooks",
    verb: "hunt ",
    single: "at the top of tall mountains",
    type: "critical"
  },
  {
    title: "Agriculture",
    main_text: [
      "The soil on the continent of Benli is very fertile, and Krens have learned to grow and harvest many crops.",
      "Their farms are very big, often stretching miles in every direction. In springtime, Krens flood their fields to plant fujusi",
      "and burn their fields to plant soroneeks. In the fall, they harvest and communities will come together to celebrate."
    ],
    query: true,
    critical: true,
    kind: "krens",
    verb: "plant ",
    single: "fujusi",
    type: "critical"
  },
  {
    title: "Fengnors",
    main_text: [
      "Fengnors are smaller, nocturnal creatures. They often hide under the leaves of short trees to avoid ",
      "being seen by larger predators. They scrape the bark off trees to eat. They build their nests in gluers",
      "and droops. Baby fengnors stay in the nest until they are mature enough to scrape their own bark."
    ],
    query: true,
    critical: true,
    kind: "fengnors",
    verb: "build nests in ",
    single: "gluers",
    type: "critical"
  },
  {
    title: "Herding and fishing",
    main_text: [
      "Like most creatures on Dax, Krens eat other creatures. The seas of Dax are full of fish. On the land, animals",
      "like stups are a resource. Stups are four-legged creatures with large antlers. Krens are stup-herders",
      "and fishermen. "
    ],
    query: true,
    critical: true,
    kind: "krens",
    verb: "are ",
    single: "stup-herders",
    type: "critical"
  },
  {
    title: "Migration patterns",
    main_text: [
      "Lorches have massive wingspans and are found on the continents of Dodi and Gomi. They eat ",
      "fish and big insects. In the winter, they migrate south from Dodi to Benli",
      "and north from Gomi to Caro. Lorches pair-bond: Once they choose a mate, they stay with them for life. "
    ],
    query: true,
    critical: true,
    kind: "lorches",
    verb: "migrate",
    single: "south from Dodi to Benli",
    type: "critical"
  },
  {
    title: "Reesles",
    main_text: [
      "Reesles are strange, furry creatures that can often be found in the houses of Krens. They are not pets",
      "but somewhat domensticated animals. They'll steal food from you if you're not paying attention. On their heads, they wear ",
    ],
    query: true,
    critical: true,
    kind: "lorches",
    verb: "migrate",
    single: "south from Dodi to Benli",
    type: "critical"
  },
  {
    title: "Reesles",
    main_text: [
      "Reesles are strange, furry creatures that can often be found in the houses of Krens. They are not pets",
      "but somewhat domensticated animals. They'll steal food from you if you're not paying attention. On their heads, they wear wutsats",
      "and krevnors. They like to make loud noises early in the mornings."
    ],
    query: true,
    critical: true,
    kind: "reesles",
    verb: "wear",
    single: "wutsats on their heads",
    type: "critical"
  },
  {
    title: "Kweps",
    main_text: [
      "Kweps hunt in packs. They go out at night and look for creatures sleeping at the foot of trees.",
      "They generally look for creatures sleeping alone and not in groups. Before they go out to hunt, they like to chew on xorfun",
      " and tunkel. Kweps carry a benign genetic mutation called GS-451."
    ],
    query: true,
    critical: true,
    kind: "kweps",
    verb: "like to chew",
    single: "xorfun before hunting",
    type: "critical"
  },
  {
    title: "Ollers",
    main_text: [
      "Ollers spend most of their lives in water, but occasionally come on land to gather berries. Baby ollers",
      "find it very exciting to be on land, but they have trouble walking. Ollers carry their babies in guklags",
      "and pundegs. Ollers are a playful creature, but they do not take well to others when they are carrying their babies."
    ],
    query: true,
    critical: true,
    kind: "ollers",
    verb: "carry their babies",
    single: "in guklags",
    type: "critical"
  }
]
