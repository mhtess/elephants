const critical_stims = [
    {
	stim_type: "critical",
	kind: "elephants",
	predicate1: "live in Africa",
	predicate2: "live in Asia",
	combined_predicate: "live in Africa and Asia"
    },
    {
	stim_type: "critical",
	kind: "turtles",
	predicate1: "live in saltwater",
	predicate2: "live in freshwater",
	combined_predicate: "live in saltwater and freshwater"
    },
    {
	stim_type: "critical",
	kind: "dolphins",
	predicate1: "live in the oceans",
	predicate2: "live in rivers",
	combined_predicate: "live in the oceans and in rivers"
    },
    {
	stim_type: "critical",
	kind: "tigers",
	predicate1: "are orange with black stripes",
	predicate2: "are white with brown stripes",
	combined_predicate: "are orange with black stripes and white with brown stripes"
    },
    {
	stim_type: "critical",
	kind: "jaguars",
	predicate1: "are yellow with brown spots",
	predicate2: "are black",
	combined_predicate: "are yellow with brown spots and black"
    },
    {
	stim_type: "critical",
	kind: "grapes",
	predicate1: "are purple",
	predicate2: "are green",
	combined_predicate: "are purple and green"
    },
    {
	stim_type: "critical",
	kind: "cats",
	predicate1: "live as pets",
	predicate2: "live in the wild",
	combined_predicate: "live as pets and live in the wild"
    },
    {
	stim_type: "critical",
	kind: "trees",
	predicate1: "have broad, flat leaves",
	predicate2: "have long, skinny leaves",
	combined_predicate: "have broad, flat leaves and long, skinny leaves"
    },
    {
	stim_type: "critical",
	kind: "cars",
	predicate1: "have gas engines",
	predicate2: "have electric engines",
	combined_predicate: "have gas engines and electric engines"
    },
    {
	stim_type: "critical",
	kind: "clouds",
	predicate1: "are white",
	predicate2: "are gray",
	combined_predicate: "are white and gray"
    },
    {
	stim_type: "critical",
	kind: "lions that go hunting",
	predicate1: "are male",
	predicate2: "are female",
	combined_predicate: "are male and female"
    },
    {
	stim_type: "critical",
	kind: "peacocks",
	predicate1: "have beautiful feathers",
	predicate2: "have drab feathers",
	combined_predicate: "have beautiful feathers and drab feathers"
    },
    {
	stim_type: "critical",
	kind: "dumplings",
	predicate1: "have meat fillings",
	predicate2: "have fruit fillings",
	combined_predicate: "have meat fillings and fruit fillings"
    },
    {
	stim_type: "critical",
	kind: "breads",
	predicate1: "are cooked in a dutch-oven",
	predicate2: "are cooked on a pan",
	combined_predicate: "are cooked in a dutch-oven and on a pan"
    },
    {
	stim_type: "critical",
	kind: "rice",
	predicate1: "is white",
	predicate2: "is brown",
	combined_predicate: "is white and brown"
    },
    {
  stim_type: "critical",
  kind: "beans",
  predicate1: "are black",
  predicate2: "are brown",
  combined_predicate: "are black and brown"
    },
    {
	stim_type: "critical",
	kind: "raisins",
	predicate1: "are purple",
	predicate2: "are golden",
	combined_predicate: "are purple and golden"
    },
    {
	stim_type: "critical",
	kind: "chocolate",
	predicate1: "is brown",
	predicate2: "is white",
	combined_predicate: "is brown and white"
    },
    {
	stim_type: "critical",
	kind: "spiders that weave webs",
	predicate1: "are young",
	predicate2: "are old",
	combined_predicate: "are young and old"
    },
    {
	stim_type: "critical",
	kind: "goldfish",
	predicate1: "live in fish tanks",
	predicate2: "live in fish bowls",
	combined_predicate: "live in fish tanks and fish bowls"
    },
    {
	stim_type: "critical",
	kind: "religious people",
	predicate1: "pray in churches",
	predicate2: "pray in synagogues",
	combined_predicate: "pray in churches and synagogues"
    },
    {
	stim_type: "critical",
	kind: "bridges",
	predicate1: "go over rivers",
	predicate2: "go over valleys",
	combined_predicate: "go over rivers and valleys"
    },
    {
  stim_type: "critical",
  kind: "tunnels",
  predicate1: "go through mountains",
  predicate2: "go through the sea",
  combined_predicate: "go through mountains and the sea"
    },
    {
	stim_type: "critical",
	kind: "flowers",
	predicate1: "bloom in the spring",
	predicate2: "bloom in the summer",
	combined_predicate: "bloom in the spring and summer"
    },
    {
	stim_type: "critical",
	kind: "birds",
	predicate1: "build nests in trees",
	predicate2: "build nests on the ground",
	combined_predicate: "build nests in trees and on the ground"
    },
    {
	stim_type: "critical",
	kind: "socks",
	predicate1: "are made of wool",
	predicate2: "are made of cotton",
	combined_predicate: "are made of wool and cotton"
    },
    {
	stim_type: "critical",
	kind: "hurricanes",
	predicate1: "form in the Atlantic Ocean",
	predicate2: "form in the Pacific Ocean",
	combined_precidate: "form in the Atlantic Ocean and Pacific Ocean"
    },
    {
	stim_type: "critical",
	kind: "monkeys",
	predicate1: "live in the western hemisphere",
	predicate2: "live in the eastern hemisphere",
	combined_predicate: "live in the western hemisphere and eastern hemisphere"
    },
    {
	stim_type: "critical",
	kind: "bears",
	predicate1: "live in forests",
	predicate2: "live in tundras",
	combined_predicate: "live in forests and tundras"
    },
    {
	stim_type: "critical",
	kind: "Iowa farmers",
	predicate1: "grow corn",
	predicate2: "grow soy",
	combined_predicate: "grow corn and soy"
    },
    {
	stim_type: "critical",
	kind: "theaters",
	predicate1: "show movies",
	predicate2: "show plays",
	combined_predicate: "show movies and plays"
    },
    {
	stim_type: "critical",
	kind: "fishermen",
	predicate1: "fish in oceans",
	predicate2: "fish in lakes",
	combined_predicate: "fish in oceans and lakes"
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
