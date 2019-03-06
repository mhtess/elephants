function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
    name : "i0",
    start: function() {
      exp.startT = Date.now();
      $('#instruct-text > #1').text("some objects");
      $('#instruct-text > #2').text("5");
    }
  });

    slides.practice = slide({
    name : "practice",
    start: function() {
      $(".err").hide();

      this.init_sliders(1);
	this.init_sliders(2);
	this.init_sliders(3)
      practice_questions = [
        "Anna laughed on Jon.\n",
          "The train from Edmonton to Orlando was late.\n",
	  "The burning candle spelled wrong.\n"
      ]
      for (i=1;i<4; i++){
        $("#query_p"+ i).html(practice_questions[i-1])
      }
	exp.sliderPractice = [-1,-1, -1];

    },
    init_sliders : function(i) {
        utils.make_slider("#single_slider_p" + i, this.make_slider_callback(i));
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPractice[i-1] = ui.value;
      };
    },
    button : function() {
      if (exp.sliderPractice.indexOf(-1) >= 0) {
        $(".err").show();
      } else {

        exp.catch_trials.push({
          condition: "practice",
          check_index: 1,
          sentence: "Anna laughed on Jon.",
          response: exp.sliderPractice[0],
          correct:  exp.sliderPractice[0] < 0.5
        })

        exp.catch_trials.push({
          condition: "practice",
          check_index: 2,
          sentence: "The train was late this morning.",
          response: exp.sliderPractice[1],
          correct:  exp.sliderPractice[1] > 0.5
        })

	  exp.catch_trials.push({
          condition: "practice",
          check_index: 3,
          sentence: "The burning candle spelled wrong.",
          response: exp.sliderPractice[1],
          correct:  exp.sliderPractice[1] > 0.5
        })

        exp.go(); //use exp.go() if and only if there is no "present" data.
      }
    }
  });

  slides.single_trial = slide({
    name: "single_trial",
    start: function() {
      $(".err").hide();
      $(".display_condition").html("You are in " + exp.condition + ".");
    },
    button : function() {
      response = $("#text_response").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : "single_trial",
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
  });

  slides.one_slider = slide({
    name : "one_slider",
    present : exp.stims,

      present_handle : function(stim) {
	  console.log(stim);
      $(".err").hide();

      this.stim = stim;

	if (stim.stim_type == "critical") {
	    $(".prompt").html((stim.trial_type == "generic" ? this.capitalize_first_letter(stim.kind) : stim.trial_type == "most" ? "Most " + stim.kind : "All " + stim.kind )+ " " + (stim.condition == "vp" ? stim.predicate1 + " and " + stim.predicate2 : stim.combined_predicate) + ".");
	}
	else if (stim.stim_type == "filler") {
	    $(".prompt").html((stim.quantifier == "generic" ? this.capitalize_first_letter(stim.kind) : stim.quantifier == "most" ? "Most " + stim.kind : "All " + stim.kind) + " " + stim.predicate1 + (stim.predicate2 ? " and " + stim.predicate2 + "." : "."));
	}
      this.init_sliders();
      exp.sliderPost = null;
    },

      button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } else {
        this.log_responses();
        _stream.apply(this);
      }
    },

    init_sliders : function() {
      utils.make_slider("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

    log_responses : function() {
	exp.data_trials.push(_.extend(this.stim, {
        "response" : exp.sliderPost
	}));
    },

      capitalize_first_letter: function(word) {
	  return word.slice(0,1).toUpperCase().concat(word.slice(1))
      }
  });

  slides.multi_slider = slide({
    name : "multi_slider",
    present : _.shuffle([
      {"critter":"Wugs", "property":"fur"},
      {"critter":"Blicks", "property":"fur"}
    ]),
    present_handle : function(stim) {
      $(".err").hide();
      this.stim = stim; //FRED: allows you to access stim in helpers

      this.sentence_types = _.shuffle(["generic", "negation", "always", "sometimes", "usually"]);
      var sentences = {
        "generic": stim.critter + " have " + stim.property + ".",
        "negation": stim.critter + " do not have " + stim.property + ".",
        "always": stim.critter + " always have " + stim.property + ".",
        "sometimes": stim.critter + " sometimes have " + stim.property + ".",
        "usually": stim.critter + " usually have " + stim.property + "."
      };

      this.n_sliders = this.sentence_types.length;
      $(".slider_row").remove();
      for (var i=0; i<this.n_sliders; i++) {
        var sentence_type = this.sentence_types[i];
        var sentence = sentences[sentence_type];
        $("#multi_slider_table").append('<tr class="slider_row"><td class="slider_target" id="sentence' + i + '">' + sentence + '</td><td colspan="2"><div id="slider' + i + '" class="slider">-------[ ]--------</div></td></tr>');
        utils.match_row_height("#multi_slider_table", ".slider_target");
      }

      this.init_sliders(this.sentence_types);
      exp.sliderPost = [];
    },

    button : function() {
      if (exp.sliderPost.length < this.n_sliders) {
        $(".err").show();
      } else {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this); if and only if there is "present" data.
      }
    },

    init_sliders : function(sentence_types) {
      for (var i=0; i<sentence_types.length; i++) {
        var sentence_type = sentence_types[i];
        utils.make_slider("#slider" + i, this.make_slider_callback(i));
      }
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
      };
    },
    log_responses : function() {
      for (var i=0; i<this.sentence_types.length; i++) {
        var sentence_type = this.sentence_types[i];
        exp.data_trials.push({
          "trial_type" : "multi_slider",
          "sentence_type" : sentence_type,
          "response" : exp.sliderPost[i]
        });
      }
    },
  });

  slides.vertical_sliders = slide({
    name : "vertical_sliders",
    present : _.shuffle([
      {
        "bins" : [
          {
            "min" : 0,
            "max" : 10
          },
          {
            "min" : 10,
            "max" : 20
          },
          {
            "min" : 20,
            "max" : 30
          },
          {
            "min" : 30,
            "max" : 40
          },
          {
            "min" : 40,
            "max" : 50
          },
          {
            "min" : 50,
            "max" : 60
          }
        ],
        "question": "How tall is tall?"
      }
    ]),
    present_handle : function(stim) {
      $(".err").hide();
      this.stim = stim;

      $("#vertical_question").html(stim.question);

      $("#sliders").empty();
      $("#bin_labels").empty();

      $("#sliders").append('<td> \
            <div id="slider_endpoint_labels"> \
              <div class="top">likely</div> \
              <div class="bottom">unlikely</div>\
            </div>\
          </td>')
      $("#bin_labels").append('<td></td>')

      this.n_sliders = stim.bins.length;
      for (var i=0; i<stim.bins.length; i++) {
        $("#sliders").append("<td><div id='vslider" + i + "' class='vertical_slider'>|</div></td>");
        $("#bin_labels").append("<td class='bin_label'>" + stim.bins[i].min + " - " + stim.bins[i].max + "</td>");
      }

      this.init_sliders(stim);
      exp.sliderPost = [];
    },

    button : function() {
      if (exp.sliderPost.length < this.n_sliders) {
        $(".err").show();
      } else {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this); if and only if there is "present" data.
      }
    },

    init_sliders : function(stim) {
      for (var i=0; i<stim.bins.length; i++) {
        utils.make_slider("#vslider" + i, this.make_slider_callback(i), "vertical");
      }
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
      };
    },
    log_responses : function() {
      for (var i=0; i<this.stim.bins.length; i++) {
        exp.data_trials.push({
          "trial_type" : "vertical_slider",
          "question" : this.stim.question,
          "response" : exp.sliderPost[i],
          "min" : this.stim.bins[i].min,
          "max" : this.stim.bins[i].max
        });
      }
    },
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
        "trials" : exp.data_trials,
        "system" : exp.system,
        "condition" : exp.condition,
        "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000,
	  "catch_trials": exp.catch_trials
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
  };

    exp.condition = "vp";

    exp.stims = [];
    exp.data_trials = [];
    exp.catch_trials = [];

    // CONFIGURATION
    const num_criticals = {
	generic: 3,
	most: 3,
	all: 3
    }
    // const num_fillers = {
    // 	good: 1,
    // 	bad: 1
    // }

    var critical_stims_shuffled = _.shuffle(critical_stims);

    var criticals = [];
    
    for (i=0; i<num_criticals.generic; i++) {
	criticals.push(_.extend(critical_stims_shuffled.pop(), {trial_type: "generic", condition: exp.condition}));
    }
    for (i=0; i<num_criticals.most; i++) {
	criticals.push(_.extend(critical_stims_shuffled.pop(), {trial_type: "most", condition: exp.condition}));
    }
    for (i=0; i<num_criticals.all; i++) {
	criticals.push(_.extend(critical_stims_shuffled.pop(), {trial_type: "all", condition: exp.condition}));
    }
    criticals = _.shuffle(criticals);

    // var filler_stims_good_shuffled = _.shuffle(filler_stims_good);
    // var filler_stims_bad_shuffled = _.shuffle(filler_stims_bad);
    
    // var fillers = [];

    // for (i=0; i<num_fillers.good; i++) {
    // 	fillers.push(_.extend(filler_stims_good_shuffled.pop(), {quantifier: "generic"}))
    // }
    // for (i=0; i<num_fillers.bad; i++) {
    // 	fillers.push(_.extend(filler_stims_bad_shuffled.pop(), {quantifier: "generic"}))
    // }
    // fillers = _.shuffle(fillers);

    // var criticals_fillers = []
    // const total_criticals = criticals.length;
    // for (i=0; i<total_criticals; i++) {
    // 	criticals_fillers.push(criticals.pop());
    // 	if (i<total_criticals-1) {
    // 	    criticals_fillers.push(fillers.pop());
    // 	}
    // }
    //  function getRandomInt(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // var insertionIndices = []
    // for (i=0;i<fillers.length;i++) {
    // 	insertionIndices.push(getRandomInt(0, criticals_fillers.length));
    // }
    // insertionIndices = insertionIndices.sort(function(a, b){return a - b});
    // var prevIndex = 0;
    // var i = 0;
    // insertionIndices.forEach(function(index) {
    // 	exp.stims = exp.stims.concat(criticals_fillers.slice(prevIndex, index));
    // 	exp.stims.push(fillers[i]);
    // 	i ++;
    // 	prevIndex = index;
    // });
    // exp.stims = exp.stims.concat(criticals_fillers.slice(prevIndex, criticals_fillers.length))
    exp.stims = criticals;
    console.log(exp.stims)

  //blocks of the experiment:
  exp.structure=[
      'i0', 'practice',
      'one_slider',
    'subj_info', 'thanks'
  ];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
  USOnly();
  uniqueTurker();
}
