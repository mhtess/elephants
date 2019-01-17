
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

  slides.practice = slide({
    name : "practice",
    start: function() {
      $(".err").hide();

      this.init_sliders(1);
      this.init_sliders(2);
      this.init_sliders(3);
      practice_questions = [
        "<strong>Out of all dogs</strong>, what percentage do you think bark?\n",
        "<strong>Out of all birds</strong>, what percentage do you think are male?\n",
        "<strong>Out of all ticks</strong>, what percentage do you think carry Lyme Disease?\n"
      ]
      for (i=1;i<4; i++){
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
          correct:  exp.sliderPractice[0] > 0.8
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
          property: "ticks carry lyme disease",
          tested_on: -1,
          response: exp.sliderPractice[2],
          correct:  (exp.sliderPractice[2] < 0.40)
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
        $(".query").hide()
        $(".slider_number").hide()
        $(".slider_table").hide()
        $(".storyText").css("text-align-last", "justify")
        this.startTime = Date.now();
        this.stim = stim
        this.chapter_length = stim.main_text.length;

        this.page = 0
        exp.sliderPost = -99;

        $(".chapterTitle").html("<u>Chapter "+ (this.trial_num+1) +": "+stim.title+"</u>")
        console.log("chapter length = " + this.chapter_length)
        this.present_page()
      },

      // this presents a page of a chapter
      present_page : function(){
        $(".err").hide()
        $(".slider_instruct").hide()
        $(".query").hide()
        $(".slider_number").hide()
        $(".slider_table").hide()
        console.log("page = " + this.page)
        if (this.page > 0) {
          $(".chapterTitle").html('')
        }

        // if (this.stim.critical && this.stim.condition == "single") {
        // if (this.stim.condition == "interrupted") {
        //   this.last_page = this.chapter_length - 1
        // } else {
          this.last_page = this.chapter_length
        // }

        // if this.stim.critical {
        // && this.stim.query

        if (this.stim.type == "critical") {
          if (this.page == this.last_page){
            console.log('align last page to left')
            $(".storyText").css("text-align-last", "left")
            if (this.stim.condition == "uninterrupted") {
              $(".storyText").html(this.stim.continuation.critical)
            } else if (this.stim.condition == "uninterrupted_irrelevant") {
              $(".storyText").html(this.stim.continuation.filler)
            } else if (this.stim.condition == "interrupted") {
              if (this.stim.query) {
                console.log("interupt present question")
                this.present_question()
              } else {
                $(".storyText").html(this.stim.continuation.filler)
                this.page++
              }
            }
          } else if (this.page > this.last_page){
            this.present_question()
          } else {
            $(".storyText").html(this.stim.main_text[this.page]);
          }
        } else { // filler trials
          if (this.stim.query && this.page == this.last_page){
            this.present_question()
          } else {
            if (this.page == this.last_page - 1){
              $(".storyText").css("text-align-last", "left")
            }
            $(".storyText").html(this.stim.main_text[this.page]);
          }
        }
      },

      // this gets run on pages where we ask questions
      present_question: function(){
        $(".slider_instruct").show()

        var query_prompt = "<strong>Out of all "  + this.stim.kind + "</strong>, what percentage do you think " + this.stim.property1 + "?\n";
        $(".query").html(query_prompt);
        $(".storyText").html('');
        $(".query").show()
        $(".slider_number").show()
        $(".slider_table").show()
        this.init_sliders();
        exp.sliderPost = -1;
        $(".slider_number").html("---")
        this.stim.query = false;
        if (this.stim.condition == "interrupted") { this.page -- }
        // console.log(this.page)
      },

      init_sliders : function() {
          utils.make_slider("#single_slider", this.make_slider_callback());
      },
      make_slider_callback : function() {
        return function(event, ui) {
          exp.sliderPost = ui.value;
          $(".slider_number").html(Math.round(exp.sliderPost*100) + "%")
        };
      },

      button : function() {

        if (exp.sliderPost == -1) {
          $(".err").show();
        } else {
          // if ((this.page == this.chapter_length)&& this.stim.query) {this.page++}
          // console.log(this.page)
          this.log_responses();
          this.startTime = Date.now();

          if (this.stim.query) {
            this.page++;
            this.present_page();
          } else if (
            (this.page > this.chapter_length) ||
            (this.stim.type == "filler" && (this.page == this.chapter_length)) ||
            (this.stim.condition == "filler" && (this.page == this.chapter_length - 1))
          ){
            $(".storyText").html() == ""
            // this.log_responses();
            this.trial_num++;
            _stream.apply(this);
          } else {
            this.page++
            // this.trial_num++;
            this.present_page()
          }
        }
        // }
      },
     log_responses : function() {
       this.rt = Date.now() - this.startTime;

        exp.data_trials.push({
          "trial_type" : this.stim.type,
          "page_type": $(".storyText").html() == "" ? "query" : "text",
          "condition": this.stim.condition,
          "chapter_num": this.trial_num,
          "page_num": this.page,
          "page_content": $(".storyText").html(),
          "response" : exp.sliderPost,
          "rt":this.rt,
          "kind": this.stim.kind,
          "verb": this.stim.verb,
          "predicate": this.stim.single,
          "generic": this.stim.kind + " " + this.stim.verb + " " + this.stim.single,
          "chapter": this.stim.title
          //,
          // "explanation": $("#followUpResponse").val()
        });

        exp.sliderPost >= 0 ? exp.sliderPost = -99 : null

        // CHECK THAT THIS IS LAST TRIAL
        // if (this.trial_num == exp.stims.length){
        //
        //   minorityInterpretations = _.filter(exp.data_trials, function(x){
        //     return x.response < 0.50
        //   })
        //
        //   // set stimuli to be explained,
        //   slides.explain_responses.present = _.shuffle(minorityInterpretations).slice(0, 5)
        // }
      }
    });

  slides.memory_check = slide({
    name : "memory_check",
    start: function() {
    $(".err").hide()
     this.tested_properties = [
       "Krens are stup-herders and fishermen",
       "Glippets live in Caro and Este",
       "Krens pray in caboos and daiths",
       "Ice storms don't result in permanent damage to the plants and animals on Dax",
       "Everyone loves Zorxon"
     ]

     this.catch_properties = [
       "Lorches have long legs and breathe underwater",
       "Taifles have gold spots that are sticky",
       "Dorbs have infected, yellow scales ",
       "Cranoor is the kind of all beings",
       "Kweps eat plants"
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
          "condition" : exp.condition,
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
      var ut_id = "mht-eleph-20190114";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  // exp.condition = _.sample(["single", "conjunction"])
  // exp.condition = "conjunction"

  conditions = ["interrupted", "uninterrupted", "uninterrupted_irrelevant"]

  exp.conditions = _.shuffle([
    "uninterrupted", "uninterrupted_irrelevant",
    "uninterrupted", "uninterrupted_irrelevant",
    "uninterrupted", "uninterrupted_irrelevant",
    "uninterrupted", "uninterrupted_irrelevant",
    "uninterrupted", "uninterrupted_irrelevant"
  ])

  // exp.conditions = _.shuffle([
  //   "uninterrupted", "uninterrupted_irrelevant","interrupted",
  //   "uninterrupted", "uninterrupted_irrelevant","interrupted",
  //   "uninterrupted", "uninterrupted_irrelevant","interrupted",
  //   _.sample(["uninterrupted", "uninterrupted_irrelevant","interrupted"])
  // ])

  critical_trial_order = _.sample([[
    true, true, false, true, false,
    false, true, false, true, true,
    false, false, false, true, true,
    false, true, false, false, true
  ], [
    false, false, true, false, true,
    false, true, true, false, false,
    true, false, true, true, true,
    false, true, false, false, true
  ],[
    false, true, true, false, false,
    false, true, false, true, true,
    false, false, true, false, true,
    true, true, false, false, true
  ],[
    true, false, false, true, false,
    false, true, true, false, true,
    true, false, false, true, true,
    false, true, false, false, true
  ]
]).reverse()

critical_trial_order = [
  false, false,
  true, true, false, true, true, true,
  false, false,
  true, true,false, true, true, true
].reverse()

fillers = _.shuffle(filler_chapters.slice(0, 6))
console.log(fillers)

// function add(a, b) {
//     return a + b;
// }
// _.map(critical_trial_order, function(x){
//   console.log(x.reduce(add, 0))
// })

  shuffled_chapters = _.shuffle(stims_chapters)
  // shuffled_chapters = stims_chapters

  exp.stims = [firstChapter]

  for (i=0; i<critical_trial_order.length; i++){
    if (critical_trial_order[i]) {
      exp.stims.push(
        _.extend(shuffled_chapters.pop(), {
          condition: exp.conditions.pop(),
          query: true
        })
      )
    } else {
      exp.stims.push(
        _.extend(fillers.pop(), {
          condition: "uninterrupted",
          query: true
        })
      )
    }
  }
  exp.stims = exp.stims
  console.log(exp.stims)
  // console.log(stims_chapters)

  // console.log(stims_chapters.length)
  // console.log(filler_chapters.length)
    // firstChapter,
    // distractor_chapters[0],
    // stims_chapters[0],
    // stims_chapters[1],
    // filler_chapters[0],
    // distractor_chapters[1],
    // stims_chapters[2],
    // stims_chapters[3],
    // filler_chapters[1],
    // distractor_chapters[2],
    // stims_chapters[4],
    // distractor_chapters[3],
    // stims_chapters[5]
  // ]


  exp.numTrials = stim_properties.length;
// console.log(stim_properties.length)
// var creatures = _.map(_.shuffle(creatureNames).slice(0,exp.numTrials),
//   function(x){return {category: x.category, exemplar: x.exemplar}}
//   )
//
// var properties_to_be_tested = _.shuffle(stim_properties).slice(0,exp.numTrials)


// _.map(_.zip(creatures, properties_to_be_tested),
//   function(cp){
//     return _.extend(cp[1], cp[0])
//   })

  exp.stimscopy = exp.stims.slice(0);

  exp.trials = [];
  exp.catch_trials = [];
  exp.data_trials = [];

  exp.structure=[
    // "i0",
    // "practice",
    // "title_page",
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
