
function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
      $("#total-num").html(exp.numTrials);
     }
  });

  slides.title_page = slide({
    name : "title_page",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.practice = slide({
    name : "practice",
    start: function() {
      $(".err").hide();

      this.init_sliders(1);
      this.init_sliders(2);
      this.init_sliders(3);
      this.init_sliders(4);
      practice_questions = [
        "What percentage of <strong>dogs</strong> do you think <strong>bark</strong>?\n",
        "What percentage of <strong>birds</strong> do you think <strong>are male</strong>?\n",
        "What percentage of <strong>cats</strong> do you think <strong>get cancer</strong>?\n",
        "What percentage of <strong>lions</strong> do you think <strong>lay eggs</strong>?\n"
      ]
      for (i=1;i<5; i++){
        $("#query_p"+ i).html(practice_questions[i-1])
      }
      exp.sliderPractice = [-1,-1,-1];
      $(".slider_number").html("---")

    },
    init_sliders : function(i) {
        utils.make_slider("#single_slider_p" + i, this.make_slider_callback(i));
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPractice[i-1] = ui.value;
        $("#slider_number_p"+i).html(Math.round(exp.sliderPractice[i-1]*100) + "%")
      };
    },
    button : function() {
      if (exp.sliderPractice.indexOf(-1) >= 0) {
        $(".err").show();
      } else {

        exp.catch_trials.push({
          condition: "practice",
          check_index: 1,
          property: "dogs bark",
          tested_on: -1,
          response: exp.sliderPractice[0],
          correct:  exp.sliderPractice[0] > 0.5
        })

        exp.catch_trials.push({
          condition: "practice",
          check_index: 2,
          property: "birds are male",
          tested_on: -1,
          response: exp.sliderPractice[1],
          correct:  (exp.sliderPractice[1] > 0.30) &&  (exp.sliderPractice[1] < 0.70)
        })

        exp.catch_trials.push({
          condition: "practice",
          check_index: 2,
          property: "cats get cancer",
          tested_on: -1,
          response: exp.sliderPractice[2],
          correct:  (exp.sliderPractice[2] < 0.50)
        })
        exp.catch_trials.push({
          condition: "practice",
          check_index: 2,
          property: "lions lay eggs",
          tested_on: -1,
          response: exp.sliderPractice[3],
          correct:  (exp.sliderPractice[3] < 0.1)
        })


        exp.go(); //use exp.go() if and only if there is no "present" data.
      }
    }
  });


  slides.the_end = slide({
    name : "the_end",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.main_chapters = slide({
      name: "main_chapters",
      trial_num : 0,
      // present : exp.stims,
      present: exp.stims,
      //this gets run only at the beginning of the chapter
      present_handle : function(stim) {
        console.log(stim)
        $(".err").hide()
        $(".slider_instruct").hide()
        // $(".query").hide()
        // $(".slider_number").hide()
        // $(".slider_table").hide()

        $(".storyText").css("text-align-last", "justify")
        this.startTime = Date.now();
        this.stim = stim
        this.chapter_length = stim.main_text.length;

        this.page = 0
        exp.sliderPost = [-99, -99];

        console.log("chapter length = " + this.chapter_length)
        this.present_question()
      },

      // this gets run on pages where we ask questions
      present_question: function(){
        $(".slider_instruct").show()
          $("#question_material").hide()
	  const mainText = !this.stim.critical ? this.stim.main_text.join(" ") : this.stim.main_text.join(" ") + " " + this.stim.continuation.critical[this.stim.condition] + '.';
	  $('#mainText').text(mainText)

        var query_prompt0 = "What percentage of <strong>"  + this.stim.kind +
            "</strong> do you think <strong>" + this.stim.property1 + "</strong>?\n";
	  this.query_pred1 = this.stim.property1;
	  var query_prompt1 = ""
	  if (this.stim.condition == "nme_interrupted" || this.stim.condition == "nme_uninterrupted") {
	      query_prompt1 = "What percentage of <strong>" + this.stim.kind + "</strong> do you think <strong>" + this.stim.property3 + "</strong>?\n";
	      this.query_pred2 = this.stim.property3;
	  }
	  else {
        var query_prompt1 = "What percentage of <strong>"  + this.stim.kind +
            "</strong> do you think <strong>" + this.stim.property2 + "</strong>?\n";
        this.query_pred2 = this.stim.property2;
	  }


          $("#query0").html(query_prompt0);

        $(".query").show()
        $(".slider_number").show()
        $(".slider_table").show()

          this.init_sliders(0);
          exp.sliderPost = [-1];
          $("#slider_number0").html("---");

          this.stim.query = false;

	   setTimeout(function() {
	      $('#question_material').show();
	  }, 6000);
      },

      init_sliders : function(i) {
          utils.make_slider("#single_slider" + i, this.make_slider_callback(i));
      },
      make_slider_callback : function(i) {
        return function(event, ui) {
          exp.sliderPost[i] = ui.value;
          $("#slider_number" + i ).html(Math.round(exp.sliderPost[i]*100) + "%")
        };
      },

      button : function() {

        if (exp.sliderPost.indexOf(-1) > -1) {
          $(".err").show();
        } else {
	    this.log_responses();
	      _stream.apply(this);
        }
      },
     log_responses : function() {
       this.rt = Date.now() - this.startTime;

        exp.data_trials.push({
          "trial_type" : this.stim.type,
          "condition": this.stim.condition,
          "chapter_num": this.trial_num,
          "page_num": this.page == null ? -1 : this.page,
            "page_content": $("#mainText").html(),
	    "query_predicate": this.query_pred1,
            "response" : exp.sliderPost[0],
          "rt":this.rt,
          "kind": this.stim.kind,
            "predicate_1": this.stim.property1,
	    "predicate_2": this.stim.property2,
          "chapter": this.stim.title,
            "quantifier": this.stim.quantifier ? this.stim.quantifier : "generic",
        });

        exp.sliderPost[0] >= 0 ? exp.sliderPost[0] = -99 : null
      }
    });

  slides.memory_check = slide({
    name : "memory_check",
    start: function() {
    $(".err").hide()
    console.log(exp.memory_properties)

     this.tested_properties = _.map(exp.memory_properties, function(x){
       var quantifier = x.quantifier ?
       x.quantifier == "none" ? "no " :
        x.quantifier + " ": ""
       return quantifier + x.kind + " " + x.property1
     })
     console.log(this.tested_properties)


     this.catch_properties = [
       "lorches have long legs and breathe underwater",
       "taifles have gold spots that are sticky",
       "dorbs have infected, yellow scales ",
       "cranoor is the king of all beings",
       "no kweps eat plants"
     ]

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
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val(),
        comments : $("#comments").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          // "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {

  repeatWorker = false;
  (function(){
      var ut_id = "mht-eleph-20190121";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  fillers = _.shuffle(filler_chapters)
    shuffled_chapters = _.shuffle(stims_chapters)

    exp.memory_properties = _.shuffle(fillers).slice(0, 5)


    // CONFIGURATION

    const coordinationLevels = ['s', 'vp', 'pp', 'np'];
    const beginningFillers = 2;
    exp.stims = [];

    // add first chapter and desired number of beginning fillers (uninterrupted)
    exp.stims = []
    for (i=0;i<beginningFillers;i++) {
	     exp.stims.push(
         _.extend(fillers[i],
           {condition: "uninterrupted", query: true}
         ))
    }
    fillers = fillers.slice(2, fillers.length);

    // randomize order of interrupts
    var randomizedCriticals = [];
    console.log(shuffled_chapters);
    const numChapters = shuffled_chapters.length;
    for (i=0;i<numChapters;i++) {
	randomizedCriticals.push(_.extend(shuffled_chapters.pop(), {condition: _.sample(coordinationLevels), query: true}));
    }
    randomizedCriticals = _.shuffle(randomizedCriticals);

    var randomizedFillers = [];
    const numFillers = fillers.length;
    for (i=0;i<numFillers;i++) {
	randomizedFillers.push(_.extend(fillers.pop(), {condition: "uninterrupted", query: true}))
    }
    randomizedFillers = _.shuffle(randomizedFillers)

    // add critical trials with filler or nme trials in between each
    var withFillers = [];
    const n = randomizedCriticals.length;
    console.log(n);
    for (i=0;i<n;i++) {
	withFillers.push(randomizedCriticals.pop())
	if (i < n-1) {
	    console.log('here')
	    withFillers.push(randomizedFillers.pop())
	}
    }
    console.log(withFillers);

    // insert remaining fillers randomly into completed sequence
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var insertionIndices = []
    for (i=0;i<randomizedFillers.length;i++) {
	insertionIndices.push(getRandomInt(0, withFillers.length));
    }
    insertionIndices = insertionIndices.sort(function(a, b){return a - b});
    var prevIndex = 0;
    var i = 0;
    insertionIndices.forEach(function(index) {
	exp.stims = exp.stims.concat(withFillers.slice(prevIndex, index));
	exp.stims.push(randomizedFillers[i]);
	i ++;
	prevIndex = index;
    });
    exp.stims = exp.stims.concat(withFillers.slice(prevIndex, withFillers.length))

    console.log(exp.stims)

  exp.stimscopy = exp.stims.slice(0);
  exp.numTrials = exp.stims.length;
  exp.trials = [];
  exp.catch_trials = [];
  exp.data_trials = [];

  exp.structure=[
     "i0",
      "practice",
      "instructions",
    "main_chapters",
    "memory_check",
    'subj_info',
    'thanks'
  ];

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

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
}
