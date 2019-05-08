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
	$('input[name="answer_p1"]').attr('checked', false)
	$('input[name="answer_p2"]').attr('checked', false)
	$('input[name="answer_p3"]').attr('checked', false)

      practice_questions = [
        "There are ten continents on Earth.\n",
          "Firefighters work on boats.\n",
	  "The sun rises in the east.\n"
      ]
	$('#query_p1').html(practice_questions[0]);
	$('#query_p2').html(practice_questions[1]);
	$('#query_p3').html(practice_questions[2]);
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
      if (!$('input[name="answer_p1"]:checked').val() || !$('input[name="answer_p2"]:checked').val() || !$('input[name="answer_p3"]:checked').val()) {
        $(".err").show();
      } else {

        exp.catch_trials.push({
          condition: "practice",
          check_index: 1,
          sentence: practice_questions[0],
            response: $('input[name="answer_p1"]:checked').val(),
          correct:  $('input[name="answer_p1"]:checked').val() == "false"
        })

        exp.catch_trials.push({
          condition: "practice",
          check_index: 2,
          sentence: practice_questions[1],
          response: $('input[name="answer_p2"]:checked').val(),
          correct:  $('input[name="answer_p2"]:checked').val() == "false"
        })

	  exp.catch_trials.push({
          condition: "practice",
          check_index: 3,
          sentence: practice_questions[2],
          response: $('input[name="answer_p3"]:checked').val(),
          correct:  $('input[name="answer_p3"]:checked').val() == "true"
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
	  $('input[name="tf"]').attr('checked', false)

      this.stim = stim;

	if (stim.stim_type == "critical") {
	    $(".prompt").html((stim.trial_type == "generic" ? this.capitalize_first_letter(stim.kind) : stim.trial_type == "most" ? "Most " + stim.kind : "All " + stim.kind )+ " " + (stim.condition == "vp" ? stim.predicate1 + " and " + stim.predicate2 : stim.combined_predicate) + ".");
	}
	else if (stim.stim_type == "filler") {
	    $(".prompt").html((stim.quantifier == "generic" ? this.capitalize_first_letter(stim.kind) : stim.quantifier == "most" ? "Most " + stim.kind : "All " + stim.kind) + " " + stim.predicate1 + (stim.predicate2 ? " and " + stim.predicate2 + "." : "."));
	}
    },

      button : function() {
      if (!$('input[name="tf"]:checked').val()) {
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
        "response" : $('input[name="tf"]:checked').val()
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

slides.memory_check = slide({
    name : "memory_check",
    start: function() {
    $(".err").hide()
    console.log(exp.memory_properties)

     this.tested_properties = _.map(exp.memory_properties, function(x){
       var quantifier = x.trail_type == "generic" ?
	   x.trial_type : ""
	 var predicate = exp.condition == "np" ?
	     x.combined_predicate : x.predicate1 + " and " + x.predicate2
       return quantifier + x.kind + " " + predicate
     })
     console.log(this.tested_properties)


	if (exp.condition == "vp") {
     this.catch_properties = [
	 "all lightning storms cause fires and cause floods",
	 "squash is round and is yellow",
       "most snakes live in Europe and live in Asia",
       "grass is green and is short",
       "all flies have wings and have many eyes"
     ]
	}
	else {
	    this.catch_properties = [
	"all lightning storms cause fires and floods",
	 "squash is round and yellow",
       "most snakes live in Europe and Asia",
       "grass is green and short",
       "all flies have wings and many eyes"
	    ]
	}

     this.check_properties = _.shuffle(_.flatten([this.tested_properties, this.catch_properties]))

     // clear the former content of a given <div id="memory_checkboxes"></div>
     document.getElementById('memory_checkboxes').innerHTML = '';

     for (i=0;i<this.check_properties.length;i++){
       // create the necessary elements
       var label= document.createElement("label");
       var description = document.createTextNode(this.check_properties[i]);
       var checkbox = document.createElement("input");

       checkbox.type = "checkbox";    // make the element a checkbox
       checkbox.name = "slct1";      // give it a name we can check on the server side
       checkbox.value = this.check_properties[i];         // make its value "pair"

       label.appendChild(checkbox);   // add the box to the element
       label.appendChild(description);// add the description to the element

       // add the label element to your div
       document.getElementById('memory_checkboxes').appendChild(label);
       document.getElementById('memory_checkboxes').appendChild(document.createElement("br"));

     }
   },
    button : function() {
      if ($("#explanation").val() == "") {
        $(".err").show()
      } else {
        var checked_options = new Array();
        var unchecked_options = new Array();

        $.each($("input[name='slct1']:checked"), function() {
          checked_options.push($(this).val());
        });

        $.each($("input[name='slct1']:not(:checked)"), function() {
          unchecked_options.push($(this).val());
        });

        for (i=0;i<this.check_properties.length;i++){
          var p = this.check_properties[i];
          var tested_on = this.tested_properties.indexOf(p) > -1 ? 1 : 0;
          var response = checked_options.indexOf(p) > -1 ? 1 : 0;
          exp.catch_trials.push({
            condition: "memory_check",
            check_index: i,
            property: p,
            tested_on: tested_on,
            response: response,
            correct: (tested_on == response) ? 1 : 0
          })
        }

        exp.catch_trials.push({
          condition: "explanation",
          check_index: -1,
          property: $("#explanation").val(),
          tested_on: -1,
          response: -1,
          correct: -1
        })

        exp.go(); //use exp.go() if and only if there is no "present" data.
      }

    }
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

    exp.condition = "np";

    exp.stims = [];
    exp.data_trials = [];
    exp.catch_trials = [];

    // CONFIGURATION
    const num_criticals = {
	generic: 15,
	most: 15,
	all: 0
    }

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
    exp.memory_properties = _.shuffle(criticals).slice(0,5);
    console.log(exp.stims)

  //blocks of the experiment:
  exp.structure=[
      'i0', 'practice',
      'one_slider', 'memory_check',
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
