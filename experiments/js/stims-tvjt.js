const critical_stims = [
    {
	stim_type: "critical",
	kind: "elephants",
	predicate1: "live in Africa",
	predicate2: "live in Asia",
	combined_predicate: "live in Africa and Asia",
	domain: "animals"
    },
    // {
    // 	stim_type: "critical",
    // 	kind: "turtles",
    // 	predicate1: "live in saltwater",
    // 	predicate2: "live in freshwater",
    // 	combined_predicate: "live in saltwater and freshwater",
    // 	domain: "animals"
    // },
    // {
    // 	stim_type: "critical",
    // 	kind: "dolphins",
    // 	predicate1: "live in the oceans",
    // 	predicate2: "live in rivers",
    // 	combined_predicate: "live in the oceans and in rivers"
    // },
    // {
    // 	stim_type: "critical",
    // 	kind: "tigers",
    // 	predicate1: "are orange with black stripes",
    // 	predicate2: "are white with brown stripes",
    // 	combined_predicate: "are orange with black stripes and white with brown stripes",
    // 	domain: "animals"
    // },
    // {
    // 	stim_type: "critical",
    // 	kind: "jaguars",
    // 	predicate1: "are yellow with brown spots",
    // 	predicate2: "are black",
    // 	combined_predicate: "are yellow with brown spots and black"
    // },
    {
	stim_type: "critical",
	kind: "grapes",
	predicate1: "have purple skin",
	predicate2: "have green skin",
	combined_predicate: "have purple skin and green skin",
	domain: "food"
    },
    // {
    // 	stim_type: "critical",
    // 	kind: "cats",
    // 	predicate1: "live as pets",
    // 	predicate2: "live in the wild",
    // 	combined_predicate: "live as pets and live in the wild",
    // 	domain: "animals"
    // },
    // {
    // 	stim_type: "critical",
    // 	kind: "trees",
    // 	predicate1: "have broad, flat leaves",
    // 	predicate2: "have long, skinny leaves",
    // 	combined_predicate: "have broad, flat leaves and long, skinny leaves"
    // },
    {
	stim_type: "critical",
	kind: "cars",
	predicate1: "have gas engines",
	predicate2: "have electric engines",
	combined_predicate: "have gas engines and electric engines",
	domain: "artifacts"
    },
    // {
    // 	stim_type: "critical",
    // 	kind: "clouds",
    // 	predicate1: "are white",
    // 	predicate2: "are gray",
    // 	combined_predicate: "are white and gray",
    // 	domain: "weather"
    // },
    // {
    // 	stim_type: "critical",
    // 	kind: "lions that go hunting",
    // 	predicate1: "are male",
    // 	predicate2: "are female",
    // 	combined_predicate: "are male and female"
    // },
    // {
    // 	stim_type: "critical",
    // 	kind: "peacocks",
    // 	predicate1: "have beautiful feathers",
    // 	predicate2: "have drab feathers",
    // 	combined_predicate: "have beautiful feathers and drab feathers",
    // 	domain: "animals"
    // },
    // {
    // 	stim_type: "critical",
    // 	kind: "dumplings",
    // 	predicate1: "have meat fillings",
    // 	predicate2: "have vegetable fillings",
    // 	combined_predicate: "have meat fillings and vegetable fillings",
    // 	domain: "food"
    // },
    {
	stim_type: "critical",
	kind: "breads",
	predicate1: "are cooked in dutch-ovens",
	predicate2: "are cooked in pans",
	combined_predicate: "are cooked in dutch-ovens and pans",
	domain: "food"
    },
   //  {
  // 	stim_type: "critical",
  // 	kind: "rice",
  // 	predicate1: "is white",
  // 	predicate2: "is brown",
  // 	combined_predicate: "is white and brown",
  // 	domain: "food"
  //   },
  //   {
  // stim_type: "critical",
  // kind: "beans",
  // predicate1: "are black",
  // predicate2: "are brown",
  // 	combined_predicate: "are black and brown",
  // 	domain: "food"
  //   },
  //   {
  // 	stim_type: "critical",
  // 	kind: "raisins",
  // 	predicate1: "are purple",
  // 	predicate2: "are golden",
  // 	combined_predicate: "are purple and golden",
  // 	domain: "food"
  //   },
  //   {
  // 	stim_type: "critical",
  // 	kind: "chocolate",
  // 	predicate1: "is brown",
  // 	predicate2: "is white",
  // 	combined_predicate: "is brown and white",
  // 	domain: "food"
  //   },
    // {
    // 	stim_type: "critical",
    // 	kind: "spiders that weave webs",
    // 	predicate1: "are young",
    // 	predicate2: "are old",
    // 	combined_predicate: "are young and old",
    // 	domain: "animals"
    // },
    {
	stim_type: "critical",
	kind: "goldfish",
	predicate1: "live in fish tanks",
	predicate2: "live in fish bowls",
	combined_predicate: "live in fish tanks and fish bowls",
	domain: "animals"
    },
    {
	stim_type: "critical",
	kind: "religious people",
	predicate1: "pray in churches",
	predicate2: "pray in synagogues",
	combined_predicate: "pray in churches and synagogues",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "bridges",
	predicate1: "go over rivers",
	predicate2: "go over valleys",
	combined_predicate: "go over rivers and valleys",
	domain: "artifacts"
    },
    // {
  // stim_type: "critical",
  // kind: "tunnels",
  // predicate1: "go through the sea",
  // predicate2: "go through mountains",
  // 	combined_predicate: "go through the sea and mountains",
  // 	domain: "artifacts"
  //   },
    {
	stim_type: "critical",
	kind: "flowers",
	predicate1: "bloom in the spring",
	predicate2: "bloom in the summer",
	combined_predicate: "bloom in the spring and summer",
	domain: "plants"
    },
    {
	stim_type: "critical",
	kind: "birds",
	predicate1: "build nests in trees",
	predicate2: "build nests in cliffs",
	combined_predicate: "build nests in trees and cliffs",
	domain: "animals"
    },
    {
	stim_type: "critical",
	kind: "socks",
	predicate1: "are made of wool",
	predicate2: "are made of cotton",
	combined_predicate: "are made of wool and cotton",
	domain: "artifacts"
    },
    {
	stim_type: "critical",
	kind: "hurricanes",
	predicate1: "form in the Atlantic Ocean",
	predicate2: "form in the Pacific Ocean",
	combined_predicate: "form in the Atlantic Ocean and Pacific Ocean",
	domain: "weather"
    },
    {
	stim_type: "critical",
	kind: "monkeys",
	predicate1: "live in the western hemisphere",
	predicate2: "live in the eastern hemisphere",
	combined_predicate: "live in the western hemisphere and eastern hemisphere",
	domain: "animals"
    },
    {
	stim_type: "critical",
	kind: "bears",
	predicate1: "live in forests",
	predicate2: "live in tundras",
	combined_predicate: "live in forests and tundras",
	domain: "animals"
    },
    {
	stim_type: "critical",
	kind: "Iowa farmers",
	predicate1: "grow corn",
	predicate2: "grow soy",
	combined_predicate: "grow corn and soy",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "theaters",
	predicate1: "show movies",
	predicate2: "show plays",
	combined_predicate: "show movies and plays",
	domain: "artifacts"
    },
    {
	stim_type: "critical",
	kind: "fishermen",
	predicate1: "fish in oceans",
	predicate2: "fish in lakes",
	combined_predicate: "fish in oceans and lakes",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "artists",
	predicate1: "create paintings",
	predicate2: "create sculptures",
	combined_predicate: "create paintings and sculptures",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "professional athletes",
	predicate1: "compete in team sports",
	predicate2: "compete in individual sports",
	combined_predicate: "compete in team sports and individual sports",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "shopping bags",
	predicate1: "are made of paper",
	predicate2: "are made of plastic",
	combined_predicate: "are made of paper and plastic",
	domain: "artifacts"
    },
    {
	stim_type: "critical",
	kind: "pilots",
	predicate1: "fly planes",
	predicate2: "fly helicopters",
	combined_predicate: "fly planes and helicopters",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "runners",
	predicate1: "compete in sprints",
	predicate2: "compete in marathons",
	combined_predicate: "compete in sprints and marathons",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "police officers",
	predicate1: "wear uniforms",
	predicate2: "wear plainclothes",
	combined_predicate: "wear uniforms and plainclothes",
	domain: "people"
    },
    // {
    // 	stim_type: "critical",
    // 	kind: "sandwiches",
    // 	predicate1: "are served hot",
    // 	predicate2: "are served cold",
    // 	combined_predicate: "are served hot and cold",
    // 	domain: "food"
    // },
    {
	stim_type: "critical",
	kind: "coffee",
	predicate1: "is grown in South America",
	predicate2: "is grown in Africa",
	combined_predicate: "is grown in South America and Africa",
	domain: "food"
    },
    {
	stim_type: "critical",
	kind: "noodles",
	predicate1: "are made from wheat",
	predicate2: "are made from rice",
	combined_predicate: "are made from wheat and rice",
	domain: "food"
    },
    {
	stim_type: "critical",
	kind: "professional actors",
	predicate1: "star in movies",
	predicate2: "star in plays",
	combined_predicate: "star in movies and plays",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "football players",
	predicate1: "play offense",
	predicate2: "play defense",
	combined_predicate: "play offense and defense",
	domain: "people"
    },
    {
	stim_type: "critical",
	kind: "ships",
	predicate1: "carry passengers",
	predicate2: "carry cargo",
	combined_predicate: "carry passengers and cargo",
	domain: "artifacts"
    },
    {
	stim_type: "critical",
	kind: "wine",
	predicate1: "is made from red grapes",
	predicate2: "is made from green grapes",
	combined_predicate: "is made from red grapes and green grapes",
	domain: "food"
    },
    {
	stim_type: "critical",
	kind: "museums",
	predicate1: "contain scientific artifacts",
	predicate2: "contain works of art",
	combined_predicate: "contain scientific artifacts and works of art",
	domain: "artifacts"
    },
    {
	stim_type: "critical",
	kind: "gamblers",
	predicate1: "bet at casinos",
	predicate2: "bet at sporting events",
	combined_predicate: "bet at casinos and sporting events",
	domain: "people"
    }
]

// const filler_stims_good = [
//     {
// 	stim_type: "filler",
// 	trial_type: "good",
// 	kind: "horses",
// 	predicate1: "eat grass",
// 	predicate2: "eat hay",
// 	combined_predicate: "eat grass and hay",
// 	generic: true,
// 	most: true,
// 	all: true
//     },
//     {
// 	stim_type: "filler",
// 	trial_type: "good",
// 	kind: "dinosaurs",
// 	predicate1: "are extinct",
// 	predicate2: false,
// 	combined_predicate: false,
// 	generic: true,
// 	most: false,
// 	all: true
//     },
//     {
// 	stim_type: "filler",
// 	trial_type: "good",
// 	kind: "squirrels",
// 	predicate1: "eat nuts",
// 	predicate2: "eat seeds",
// 	combined_predicate: "eat nuts and seeds",
// 	generic: true,
// 	most: true,
// 	all: true
//     }
// ]

// const filler_stims_bad = [
//    {
//        stim_type: "filler",
//        trial_type: "bad",
//        kind: "penguins",
//        predicate1: "live in the jungle",
//        predicate2: false,
//        combined_predicate: false
//    },
//     {
// 	stim_type: "filler",
// 	trial_type: "bad",
// 	kind: "rabbits",
// 	predicate1: "hunt for food",
// 	predicate2: "live in trees",
// 	combined_predicate: "hunt for food and live in trees"
//     },
//     {
// 	stim_type: "filler",
// 	trial_type: "bad",
// 	kind: "pigs",
// 	predicate1: "can fly",
// 	predicate2: false,
// 	combined_predicate: false
//     }
// ]
