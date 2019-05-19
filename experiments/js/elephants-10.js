
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
    present: [
      {
        questions: [
 	  {
            index: 0,
            text: "What percentage of <strong>birds</strong> do you think <strong>are male</strong>?\n",
            correct: function(slider) {return slider > 0.3 && slider < 0.7}
	  },
	  {
            index: 1,
            text: "What percentage of <strong>lions</strong> do you think <strong>lay eggs</strong>?\n",
            correct: function(slider) {return slider < 0.1}
	  }
        ],
        instructions: "The first question will ask you to estimate (using a slider bar) the % of a category with a property. The answer to some questions could be 0%, so pay attention to the chapter. Try answering the questions below."
      },
      {
        questions: [
	  {
            index: 2,
            text: "Suppose there is <strong>a dog that is a pet</strong>. What are the chances that it <strong>has a collar</strong>?\n",
            correct: function(slider) {return slider > 0.8}
	  },
	  {
            index: 3,
            text: "Suppose there is <strong>an elephant that lives in Africa</strong>. What are the chances that it <strong>lives in Asia</strong>?\n",
            correct: function(slider) {return slider < 0.1}
          }
        ],
        instructions: "The next two questions will ask you to estimate (using a slider bar) the chances that a given individual has a certain property. The answer to some questions could be 0%, so pay attention to the chapter. Try answering the questions below."
      }
    ],
    present_handle: function(stim) {
      $(".err").hide();
      $("#practice_instructions").html(this.stim.instructions);
      this.stim = stim;

      this.init_sliders(1);
      this.init_sliders(2);
      for (i=1;i<3; i++){
        $("#query_p"+ i).html(this.stim.questions[i-1].text)
      }
      exp.sliderPractice = [-1,-1];
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
      }
      else {
        exp.catch_trials.push({
          condition: "practice",
          check_index: this.stim.questions[0].index,
          property: this.stim.questions[0].text,
          response: exp.sliderPractice[0],
          correct:  this.stim.questions[0].correct(exp.sliderPractice[0])
        })

        exp.catch_trials.push({
          condition: "practice",
          check_index: this.stim.questions[1].index,
          property: this.stim.questions[1].text,
          tested_on: -1,
          response: exp.sliderPractice[1],
            correct:  this.stim.questions[1].correct(exp.sliderPractice[1])
        })

        _stream.apply(this);
      }
    }
  });


  slides.the_end = slide({
    name : "the_end",
    button : function() {
      exp.go();
    }
  });

  slides.main_chapters = slide({
    name: "main_chapters",
    trial_num : 0,
    present: exp.stims,
    present_handle : function(stim) {
      console.log(stim)
      $(".err").hide()
      $(".slider_instruct").hide()
      $("#question_material").hide()

      $(".storyText").css("text-align-last", "justify")
      this.startTime = Date.now();
      this.stim = stim
      this.chapter_length = stim.main_text.length;
      this.page = 0;
      exp.sliderPost = [-1];

      $(".chapterTitle").html("<u>Chapter "+ (this.trial_num+1) +": "+stim.title+"</u>")
      this.present_page()
    },

    present_page : function(){
      $(".err").hide()
      $(".slider_instruct").hide()
      $("#text_material").show()
      $(".slider_number").hide()
      $(".slider_table").hide()
      $("#question_marginal").hide();
      $("#question_conditional").hide();

      if (this.page > 0) {
        $(".chapterTitle").html('')
      }

      this.last_page = this.chapter_length - 1;

      if (this.page < this.last_page) {
        $(".storyText").html(this.stim.main_text[this.page]);
        $(".storyText").removeClass("leftJustify");
      }
      else if (this.page > this.last_page){
        this.present_question()
      }
      else if (this.page == this.last_page){
        $(".storyText").css("text-align-last", "left") // align last page to left
        $(".storyText").addClass("leftJustify");
        $(".storyText").html(this.stim.main_text[this.page]);
      }
    },

    present_question_marginal: function(){
      $(".slider_instruct").show()
      $("#question_marginal").show();
      $("#question_conditional").hide();
      $("#text_material").hide()

      $("#query0").html((this.stim.ask_first ? this.stim.property.property1.supportFirst : this.stim.property.property2.supportFirst)+" What percentage of <b>"+this.stim.kind.plural+"</b> do you think <b>"+(this.stim.ask_first ? this.stim.property.property1.plural : this.stim.property.property2.plural)+"</b>?\n");

      $(".storyText").html('');
      $(".query").show()
      $(".slider_number").show()
      $(".slider_table").show()

      this.init_sliders(0);
      exp.sliderPost = [-1];
      $("#slider_number0").html("---")
    },

    present_question_conditional: function() {
      $(".slider_instruct").show();
      $("#question_marginal").hide();
      $("#question_conditional").show();
      $("#text_material").hide()

      const vowels = "aeiou"; // to pick a vs. an

      $('#conditional_intro').html("Suppose there is "+(vowels.includes(this.stim.kind.singular.charAt(0)) ? "an" : "a")+" <b>"+this.stim.kind.singular+"</b> that <b>"+ (this.stim.ask_first ? this.stim.property.property1.singular : this.stim.property.property2.singular)+"</b>.");
      const me_property = (this.stim.ask_first ? this.stim.property.property2.supportSecond : this.stim.property.property1.supportSecond)+" What are the chances that this <b>"+this.stim.kind.singular+" "+(this.stim.ask_first ? this.stim.property.property2.singular : this.stim.property.property1.singular) + "</b>?\n";
      const nme_property = this.stim.nme_property.support+" What are the chances that this <b>"+this.stim.kind.singular+" "+this.stim.nme_property.singular+"</b>?\n";
      if (this.stim.question_order == "forward") {
	$("#query1").html(me_property);
	$("#query2").html(nme_property);
      }
      else if (this.stim.question_order == "reverse") {
	$("#query1").html(nme_property);
	$("#query2").html(me_property);
      }

      this.init_sliders(1);
      this.init_sliders(2);
      exp.sliderPost = [-1, -1, -1];
      $("#slider_number1").html("---");
      $("#slider_number2").html("---")
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

      if (this.stim.title == "An introduction to Dax") { // first chapter: no questions
	if (this.page == this.last_page) {
	  this.trial_num ++;
	  _stream.apply(this);
        }
        else {
	  this.page ++;
	  this.present_page();
        }
      }
      else {
        if (exp.sliderPost.indexOf(-1) >= 1 && this.page == this.last_page + 2) {
          $(".err").show();
        }
	else if (exp.sliderPost.indexOf(-1) > -1 && this.page == this.last_page+1) {
          $(".err").show();
	}
	else {
	  this.log_responses();
	  this.startTime = Date.now();
	  if (this.page < this.last_page) { // middle of chapter
	    this.page ++;
	    this.present_page();
	  }
	  else if (this.page == this.last_page) { // last page, so present marginal question
	    this.page ++;
	    this.present_question_marginal();
	  }
	  else if (this.page == this.last_page + 1) { // after marginal question
	    this.page ++;
	    this.present_question_conditional();
	  }
	  else { // done with this stim
	    this.trial_num ++;
	    _stream.apply(this);
	  }
        }
      }
    },
    log_responses : function() {
      this.rt = Date.now() - this.startTime;

      exp.data_trials.push({
        "trial_type" : this.stim.type,
        "page_type": $(".storyText").html() == "" ? "query" : "text",
        "chapter_num": this.trial_num,
        "page_num": this.page == null ? -1 : this.page,
        "page_content": $(".storyText").html(),
        "rt":this.rt,
        "chapter": this.stim.title,
        "quantifier": this.stim.quantifier ? this.stim.quantifier : "generic"
      });
      if (this.stim.title != "An introduction to Dax") {
        if (this.page == this.last_page + 1) {
          Object.assign(exp.trials[this.trial_num-1], {
	    "marginal_probability": exp.sliderPost[0]
	  });
        }
        else if (this.page == this.last_page + 2) {
          Object.assign(exp.trials[this.trial_num-1], {
	    "conditional_probability_me": this.stim.question_order == "forward" ? exp.sliderPost[1] : exp.sliderPost[2],
	    "conditional_probability_nme": this.stim.question_order == "forward" ? exp.sliderPost[2] : exp.sliderPost[1]
          })
	}
      }

      exp.sliderPost >= 0 ? exp.sliderPost = -99 : null
      }
    });

  slides.memory_check = slide({
    name : "memory_check",
    start: function() {
    $(".err").hide()

	this.tested_properties = _.map(exp.memory_properties, function(stim) {
	    return stim.memory
	})

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
	    "trials": exp.trials,
          "data_trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
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

  shuffled_chapters = _.shuffle(stims_chapters)

    const numTrials = 14;

  exp.stims = [firstChapter]

  const makeStim = function() {
    return {
      query: true,
      question_order: _.sample(["forward", "reverse"]),
      property: _.sample(critical.properties),
      ask_first: _.sample([true, false])
    }
  }

  for (i=0;i<numTrials;i++) {
    var critical = shuffled_chapters.pop()
    exp.stims.push(_.extend(critical, makeStim()));
  }
  exp.memory_properties = _.shuffle(exp.stims.slice(1,exp.stims.length)).slice(0,5);

  console.log(exp.stims)

  exp.stimscopy = exp.stims.slice(0);
  exp.numTrials = exp.stims.length;
  exp.trials = exp.stims.slice(1, exp.stims.length);
  exp.catch_trials = [];
  exp.data_trials = [];

  exp.structure=[
    "i0",
    "instructions",
    "practice",
    "title_page",
    "main_chapters",
    "the_end",
    "memory_check",
    "subj_info",
    "thanks"
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

  exp.nQs = utils.get_exp_length();

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
