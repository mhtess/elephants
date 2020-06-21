# Experiments

## elephants-storybook-both
- n = 27, n = 27 (05/18/2019) and n = 27 (05/19/2019)
- First n = 27 is Experiment 1 reported in CogSci 2019.
- Participants see conjunctive generics with either a mutually exclusive (ME) or non-mutually exclusive (NME) continuation. The generic is either interrupted before "and" or uninterrupted. (4 conditions total).
- Participants are asked to rate what % of kind has predicate1 and what % of kind has predicate2 (either ME or NME). (both questions)
- Each participant contributes 12 critical observations across all 4 conditions.
- There are 8 filler trials.
- $1.50

## elephants-storybook-single
- n = 27 (09/06/2019), n = 27 (03/20/2020)
- First n = 27 reported in CUNY 2020.
- Modifies `elephants-storybook-both` to ask only about what % of kind has predicate1. (single question).
- $1.50

## elephants-incremental-both
- n = 108, n = 359 (11/15/2019)
- First n = 108 is Experiment 2 reported in CogSci 2019.
- Modifies `elephants-storybook-both` to ask about %Africa/%other continent instead of %Africa/%Asia to avoid explicitly mentioning the continuing predicate
- $1.25

## elephants-storybook-quantifiers
- n = 54 (02/21/2019), n = 54 (02/23/2019)
- 21 trials per subject
  - first chapter
  - 2 filler chapters
  - 4 uninterrupted critical chapters
  - 4 interrupted critical chapters
  - 2 uninterrupted NME chapters
  - 2 interrupted NME chapters
  - 3 uninterrupted fillers
  - 3 interrupted fillers
  - no two back-to-back critical chapters
- same conditions as Elephants-3i, but using stimuli from Elephants-7, adjusted as follows:
  - all filler trials have page breaks before and
  - all predicates in critical trials are vp-coordinated
- between subject condition: generic/most/all quantified sentences in critical trial
- Participants are evenly distributed between conditions.
- $1.25

## elephants-quantifier-coord
- Attempts to show that VP-coordination doesn't allow a group predicate interpretation. (All elephants live in Africa and live in Asia should be unacceptable/false, while Elephants live in Africa and live in Asia should be acceptable/true, e.g.)
- Uses different stimuli with familiar items:
-- weather: 2
-- animals: 10
-- plants: 1
-- food: 7
-- artifacts: 5
-- people: 5

### elephants-acceptability
- n = 54 (03/13/2019)
- Participants give acceptability judgements using a sliding scale. Practice trials with grammatical but unacceptable sentences. (NP vs. VP coordination) between-subjects, and (most vs. all vs. generic) within-subjects.
- $1

### elephants-tvjt: truth value judgement task version of elephants-acceptability
- n = 54 (05/08/2019)
- Participants give truth value judgements (yes/no). Practice trials with false sentences that may have arisen due to speaker error (swapping words).
- $1 

## elephants-me
- n = 36 (05/19/2019)
- n = 20 (05/20/2019)
- Attempts to obtain a measure of the strength of mutual exclusivity for each item.
- same story as in elephants-3, without last sentence, ask explicitly about the following probabilities: Pr(Africa), Pr(Asia | Africa), Pr(eat bugs | Africa)
- 15 trials per subject
- $1

## elephants-samescreen-single
- n = 27 (04/11/2020)
- Modifies `elephants-storybook-single` so that all information and question presented on same page
- $1.50

## elephants-coord
- n = 63 (04/14/2020): `legacy/elephants-coord-20200414.html`
- n = 54 (04/27/2020) `elephants-coord.html`
- $1.50
- Modifies `elephants-samescreen-single` to vary the coordination level of the critical sentences into four conditions: S, VP, NP, PP.
- Coordination level is manipulated within subjects.
- Analysis can be found in `analysis/elephants-coord.Rmd`.
