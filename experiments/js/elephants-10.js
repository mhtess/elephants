
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
      present: exp.stims,
      //this gets run only at the beginning of the chapter
      present_handle : function(stim) {
        console.log(stim)
        $(".err").hide()
        $(".slider_instruct").hide()
        $("#question_material").hide()

        $(".storyText").css("text-align-last", "justify")
        this.startTime = Date.now();
        this.stim = stim
        this.chapter_length = stim.main_text.length;

        this.page = 0
        exp.sliderPost = [-99, -99];

        $(".chapterTitle").html("<u>Chapter "+ (this.trial_num+1) +": "+stim.title+"</u>")
        console.log("chapter length = " + this.chapter_length)
        this.present_page()
      },

      // this presents a page of a chapter
      present_page : function(){
        $(".err").hide()
        $(".slider_instruct").hide()
        $("#question_material").hide()
        $("#text_material").show()
        // $(".query").hide()
        $(".slider_number").hide()
        $(".slider_table").hide()

        console.log("page = " + this.page)
        if (this.page > 0) {
          $(".chapterTitle").html('')
        }

          this.last_page = this.chapter_length - 1;

	  this.question_order = this.stim.question_order;

          switch (this.stim.type){
         case "critical":
          if (this.page < this.last_page){
            $(".storyText").html(this.stim.main_text[this.page]);
	          $(".storyText").removeClass("leftJustify");
          } else if (this.page > this.last_page){
            this.present_question()
          } else if (this.page == this.last_page){

            $(".storyText").css("text-align-last", "left") // align last page to left
	           $(".storyText").addClass("leftJustify");

            switch (this.stim.condition){
              case "uninterrupted":
                $(".storyText").html(this.stim.main_text[this.page]);
                break;
          }
	  }
	      break;

        case "filler": // filler trials
          switch (this.stim.condition){
            case "uninterrupted":
                if (this.page == this.last_page) {
                  $(".storyText").css("text-align-last", "left");
		  $(".storyText").addClass("leftJustify");
                }
                $(".storyText").html(this.stim.main_text[this.page]);
              break;

          break;
        }
        break;
      }


      },

      // this gets run on pages where we ask questions
      present_question: function(question_part){
        $(".slider_instruct").show()
        $("#question_material").show()
          $("#text_material").hide()

	  this.question_order = this.stim.question_order;
	  this.question_part = question_part;

	  var query_prompts = {
	      "ab": "What percentage of <strong>" + this.stim.kind + "</strong> do you think <strong>" + this.stim.property1 + " and " + this.stim.property2 + "</strong>?\n",
	      "notab": "What percentage of <strong>" + this.stim.kind + "</strong> do you think <strong> do not " + this.stim.property1 + " and " + this.stim.property2 + "</strong>?\n",
	      "anotb": "What percentage of <strong>" + this.stim.kind + "</strong> do you think <strong>" + this.stim.property1 + " and do not " + this.stim.property2 + "</strong>?\n",
	      "notanotb": "What percentage of <strong>" + this.stim.kind + "</strong> do you think <strong> do not " + this.stim.property1 + " and do not " + this.stim.property2 + "</strong>?\n"
	  }

        $("#query0").html(query_prompts[this.question_order[0]]);
          $("#query1").html(query_prompts[this.question_order[1]]);
	  $("#query2").html(query_prompts[this.question_order[2]]);
	  $("#query3").html(query_prompts[this.question_order[3]]);

        $(".storyText").html('');
        $(".query").show()
        $(".slider_number").show()
          $(".slider_table").show()

        this.init_sliders(0);
          this.init_sliders(1);
	  this.init_sliders(2);
	  this.init_sliders(3);
          exp.sliderPost = [-1, -1, -1, -1];
        $("#slider_number0").html("---")
          $("#slider_number1").html("---")
	  $("#slider_number2").html("---")
	  $("#slider_number3").html("---")

          if (question_part == 1) {
	      $('#slider0').show();
	      $('#slider1').show();
	      $('#slider2').hide();
	      $('#slider3').hide();
	  }
	  else {
	      $('#slider0').hide();
	      $('#slider1').hide();
	      $('#slider2').show();
	      $('#slider3').show();
	  }
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

	  if (this.stim.title == "An introduction to Dax") {
	      if (this.page == this.last_page) {
		  _stream.apply(this);
	      }
	      else {
		  this.page ++;
		  this.present_page();
	      }
		}
	  else {
        if (exp.sliderPost.indexOf(-1) > 1 && this.page == this.last_page + 2) {
          $(".err").show();
        } else if (exp.sliderPost.indexOf(-1) < 2 && this.page == this.last_page+1) {
	    $(".err").show();
	}
	  else {

	    this.log_responses();
	    this.startTime = Date.now();

            if (this.page == this.last_page+1) {
		 this.page ++;
	    this.present_question(2);
	  }
	    else if (this.page < this.last_page) { // middle of chapter
		 this.page ++;
		this.present_page();
	    }
	    else if (this.page == this.last_page) { // last page, so present question
		 this.page ++;
		    this.present_question(1);
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
          "condition": this.stim.condition,
          "chapter_num": this.trial_num,
          "page_num": this.page == null ? -1 : this.page,
            "page_content": $(".storyText").html(),
            "response_1" : this.page > this.last_page - 1 ? exp.sliderPost[0] : "NA",
            "response_2" : this.page > this.last_page - 1 ? exp.sliderPost[1] : "NA",
	    "query_1": this.page > this.last_page - 1 ? (this.question_part == 1 ? this.question_order[0] : this.question_order[2]) : "NA",
	    "query_2": this.page > this.last_page - 1 ? (this.question_part == 1 ? this.question_order[1] : this.question_order[3]) : "NA",
          "rt":this.rt,
          "kind": this.stim.kind,
          "predicate_1": this.stim.property1,
          "predicate_2": this.stim.property2,
          "question_order": this.question_order == null ? "NA" : this.question_order,
          "chapter": this.stim.title,
          "quantifier": this.stim.quantifier ? this.stim.quantifier : "generic"
        });

        exp.sliderPost >= 0 ? exp.sliderPost = -99 : null
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

    // CONFIGURATION
    // numFillerControls + numFillerInterrupts + numNmeControls + numNmeInterrupts
    // >= numCriticalControls + numCriticalInterrupts - 1

    const beginningFillers = 2;

    const numCriticals = 8;
    const numFillers = 8;

    const questions = ["ab", "notab", "anotb", "notanotb"];

    // add first chapter and desired number of beginning fillers (uninterrupted)
    exp.stims = [firstChapter]
    for (i=0;i<beginningFillers;i++) {
	     exp.stims.push(
         _.extend(fillers[i],
		  {condition: "uninterrupted", query: true, question_order: _.shuffle(questions)}
         ))
    }
    fillers = fillers.slice(2, fillers.length);

    var baseCriticals = shuffled_chapters.slice(0, numCriticals);
    shuffled_chapters = shuffled_chapters.slice(numCriticals, shuffled_chapters.length);
    var randomizedCriticals = [];
    for (i=0;i<numCriticals;i++) {
	var question_order = _.shuffle(questions)
	randomizedCriticals.push(_.extend(baseCriticals.pop(), {condition: "uninterrupted", query: true, question_order: question_order}));
    }
    randomizedCriticals = _.shuffle(randomizedCriticals);

    var baseFillers = fillers.slice(0, numFillers);
    var randomizedFillers = [];
    for (i=0;i<numFillers;i++) {
	var question_order = _.shuffle(questions)
	randomizedFillers.push(_.extend(baseFillers.pop(), {condition: "uninterrupted", query: true, question_order: question_order}))
    }
    randomizedFillers = _.shuffle(randomizedFillers)

    exp.memory_properties = _.shuffle(randomizedFillers).slice(0, 5)

    var withFillers = [];
    const n = randomizedCriticals.length;
    for (i=0;i<n;i++) {
	withFillers.push(randomizedCriticals.pop())
	if (i < n-1) {
	    withFillers.push(randomizedFillers.pop())
	}
    }


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
     "title_page",
    "main_chapters",
    "the_end",
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
