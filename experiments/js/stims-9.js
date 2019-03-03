const critical_stims = [
    {
	stim_type: "critical",
	kind: "turtles",
	predicate1: "live in saltwater",
	predicate2: "live in freshwater",
	combined_predicate: "live in saltwater and freshwater"
    },
    {
	stim_type: "critical",
	kind: "dragon fruit",
	predicate1: "has red flesh",
	predicate2: "has white flesh",
	combined_predicate: "has red flesh and white flesh"
    },
    {
	stim_type: "critical",
	kind: "whales",
	predicate1: "are filter feeders",
	predicate2: "are hunters",
	combined_predicate: "are filter feeders and hunters"
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
	kind: "roses",
	predicate1: "are red",
	predicate2: "are white",
	combined_predicate: "are red and white"
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
    }
]

const filler_stims_good = [
    {
	stim_type: "filler",
	trial_type: "good",
	kind: "horses",
	predicate1: "eat grass",
	predicate2: "eat hay",
	combined_predicate: "eat grass and hay",
	generic: true,
	most: true,
	all: true
    },
    {
	stim_type: "filler",
	trial_type: "good",
	kind: "dinosaurs",
	predicate1: "are extinct",
	predicate2: false,
	combined_predicate: false,
	generic: true,
	most: false,
	all: true
    }
]

const filler_stims_bad = [
   {
       stim_type: "filler",
       trial_type: "bad",
       kind: "penguins",
       predicate1: "live in the jungle",
       predicate2: false,
       combined_predicate: false
   },
    {
	stim_type: "filler",
	trial_type: "bad",
	kind: "rabbits",
	predicate1: "hunt for food",
	predicate2: "live in trees",
	combined_predicate: "hunt for food and live in trees"
    }
]
