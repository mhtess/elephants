
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

    slides.botcaptcha  = slide({
	name: "botcaptcha",
	// amount of trials to enter correct response
	trial: 0,
	start: function(){
	    $("#fail").hide()
	    // define possible speaker and listener names
	    // fun fact: 10 most popular names for boys and girls
	    var speaker = _.shuffle(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"])[0];
	    var listener = _.shuffle(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"])[0];

	    var story = speaker + ' says to ' + listener + ': "It\'s a beautiful day, isn\'t it?"'

	    $("#story").html(story)
	    $("#question").html("Who is " + speaker + " talking to?" +
				"<br><strong>Note: please type your answer in lower-case.")

	    // don't allow enter press in text field
	    $('#listener-response').keypress(function(event) {
		if (event.keyCode == 13) {
		    event.preventDefault();
		}
	    });

	    // don't show any error message
	    $("#error").hide();
	    $("#error_incorrect").hide();
	    $("#error_2more").hide();
	    $("#error_1more").hide();
	    this.listener = listener, this.speaker = speaker
	},
	button:  function() {
            response = $("#listener-response").val().replace(" ","");

            // response correct
            // if (this.listener.toLowerCase() == response.toLowerCase()) {
            if (this.listener.toLowerCase() == response) {
		// exp.catch_trials.botresponse = $("#listener-response").val();
		exp.go();

		// response false
            } else {
		this.trial = this.trial + 1;
		$("#error_incorrect").show();
		if (this.trial == 1) {
                    $("#error_2more").show();
		} else if (this.trial == 2) {
                    $("#error_2more").hide();
                    $("#error_1more").show();
		} else {
                    $("#error_incorrect").hide();
                    $("#error_1more").hide();
                    $("#next").hide();
                    $('#quest-response').css("opacity", "0.2");
                    $('#listener-response').prop("disabled", true);
                    $("#error").show();
                    $("#fail").show()

		};
            };
	}

	//$("#next").on("click",);
	//}
    })


    slides.practice = slide({
	name : "practice",
	start: function() {
	    $(".err").hide();

	    this.init_sliders(1);
	    this.init_sliders(2);
	    this.init_sliders(3);
	    practice_questions = [
		"What percentage of <strong>dogs</strong> do you think <strong>bark</strong>?\n",
		"What percentage of <strong>cats</strong> do you think <strong>get cancer</strong>?\n",
		"What percentage of <strong>lions</strong> do you think <strong>lay eggs</strong>?\n"
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
		    correct:  exp.sliderPractice[0] > 0.5
		})

		exp.catch_trials.push({
		    condition: "practice",
		    check_index: 2,
		    property: "cats get cancer",
		    tested_on: -1,
		    response: exp.sliderPractice[1],
		    correct:  (exp.sliderPractice[1] < 0.50)
		})
		exp.catch_trials.push({
		    condition: "practice",
		    check_index: 2,
		    property: "lions lay eggs",
		    tested_on: -1,
		    response: exp.sliderPractice[2],
		    correct:  (exp.sliderPractice[2] < 0.1)
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
            this.stim = stim
            this.chapter_length = stim.main_text.length;

            this.page = 0
            exp.sliderPost = [-99, -99];

            $(".chapterTitle").html("<u>Chapter "+ (this.trial_num+1) +": "+stim.title+"</u>")
            console.log("chapter length = " + this.chapter_length)
	    console.log(stim)
            this.present_page()
	},

	// this presents a page of a chapter
	present_page : function(){
            $(".err").hide()
            $(".slider_instruct").hide()
            $("#question_material").hide()
            $("#text_material").show()
            $(".slider_number").hide()
            $(".slider_table").hide()

	    this.startTime = Date.now();

            if (this.page > 0) {
		$(".chapterTitle").html('')
            }

	    if (this.stim.type == "filler") {
		this.last_page = this.chapter_length - 1; // page numbers are 0-indexed
            }
            else {
		this.last_page = this.chapter_length; // continuation adds a page
            }

	    $(".pageNum").html("Page " + (this.page+1) + " of " + (this.last_page+1) + " (" + "Chapter " + (this.trial_num+1)+")");


            switch (this.stim.type){
            case "critical":
		if (this.page == this.last_page - 1) {
		    switch (this.stim.condition) {
		    case "int1":
			$(".storyText").width(this.stim.continuation.africaWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africa);
			break;
		    case "int2":
			$(".storyText").width(this.stim.continuation.africaAndWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africaAnd);
			break;
		    case "int3":
			$(".storyText").width(this.stim.continuation.africaAndFillerWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africaAnd+" "+this.stim.continuation.filler);
			break;
		    case "int4":
			$(".storyText").width(this.stim.continuation.africaAndAsiaWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africaAndAsia);
			break;
		    case "nme_interrupted":
			$(".storyText").width(this.stim.continuation.africaWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africa);
			break;
		    case "nme_uninterrupted":
			$(".storyText").width(this.stim.continuation.africaWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africa);
			break;
		    case "before":
			$(".storyText").width(this.stim.continuation.africaWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africa);
			break;
		    case "after":
			$(".storyText").width(this.stim.continuation.africaAndWidth);
			$(".storyText").html(this.stim.main_text[this.page]+this.stim.continuation.africa+" and");
		    }
		}
		else if (this.page < this.last_page){
		    $(".storyText").width(720);
		    $(".storyText").html(this.stim.main_text[this.page]);
		    $(".storyText").removeClass("leftJustify");
		} else if (this.page == this.last_page){
		    $(".storyText").width(720);
		    $(".storyText").css("text-align-last", "left") // align last page to left
		    $(".storyText").addClass("leftJustify");

		    switch (this.stim.condition){
	            case "int1":
			$(".storyText").html("and "+this.stim.continuation.filler+".");
			break;
	            case "int2":
			$(".storyText").html(this.stim.continuation.filler+".");
			break;
	            case "int3":
			$(".storyText").html(this.stim.continuation.subordFiller+".");
			break;
	            case "int4":
			$(".storyText").html(this.stim.continuation.conjFiller+".");
			break;
		    case "nme_interrupted":
			$(".storyText").html("and " +this.stim.continuation.filler+".");
			break;
		    case "nme_uninterrupted":
			$(".storyText").html("and " +this.stim.continuation.nme+".");
			break;
		    case "before":
			$(".storyText").html("and "+this.stim.continuation.asia+".");
			// $(".storyText").html("and " + this.stim.continuation.nme);
			break;
		    case "after":
			$(".storyText").html(this.stim.continuation.asia+".");
			// $(".storyText").html("and " + this.stim.continuation.nme);
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
		case "interrupted":
		    if (this.page == this.last_page){
			$(".storyText").css("text-align-last", "left")
			$(".storyText").addClass("leftJustify");
		    }
		    $(".storyText").html(this.stim.main_text[this.page]);
		    break;
		}
		break;
            }
	},

	// this gets run on pages where we ask questions
	present_question: function(){
            $(".slider_instruct").show()
            $("#question_material").show()
            $("#text_material").hide()

	    this.startTime = Date.now();

	    if (exp.interruptConditions.includes(this.stim.condition)) {
		$(".pageNum").html("Page " + (this.last_page) + " of " + (this.last_page+1) + " (" + "Chapter " + (this.trial_num+1)+")");
	    }
	    else {
		$(".pageNum").html("Page " + (this.last_page+1) + " of " + (this.last_page+1) + " (" + "Chapter " + (this.trial_num+1)+")");
	    }

            var query_prompt0 = "What percentage of <strong>"  + this.stim.kind +
		"</strong> do you think <strong>" + this.stim.property1 + "</strong>?\n";
	    this.query_pred1 = this.stim.property1;

            $("#query0").html(query_prompt0);

            $(".storyText").html('');
            $(".query").show()
            $(".slider_number").show()
            $(".slider_table").show()

            this.init_sliders(0);
            exp.sliderPost = [-1];
            $("#slider_number0").html("---")

            this.stim.query = false;
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

            if ($(".storyText").html() == "" && exp.sliderPost.indexOf(-1) > -1) {
		$(".err").show();
            } else {
		this.log_responses();

		if (this.page == null) { // came from an interrupting question, so go directly to last page
		    this.page = this.last_page;
		    this.present_page();
		}
		else {
		    if (this.page < this.last_page - 1) {
			this.page ++;
			this.present_page();
		    }
		    else if (this.page == this.last_page - 1) { // came from second to last page: decide if we need to query
			if (exp.interruptConditions.includes(this.stim.condition) && this.stim.query) { // go to question
	 		    this.page = null;
			    this.present_question();
			}
			else {
			    this.page ++;
			    this.present_page();
			}
		    }
		    else if (this.page == this.last_page) { // last page, but might still need to ask question
			if (!exp.interruptConditions.includes(this.stim.condition) && this.stim.query) { // go to question
			    this.page ++;
			    this.present_question();
			}
			else { // done with this stim
			    this.trial_num ++;
			    _stream.apply(this);
			}
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
		"page_num": this.page,
		"page_content": $(".storyText").html(),
		"query_predicate_1": this.query_pred1,
		"response_1" : exp.sliderPost[0],
		"rt":this.rt,
		"kind": this.stim.kind,
		"predicate_1": this.stim.property1,
		"predicate_2": this.stim.property2,
		"question_order": this.question_order,
		"chapter": this.stim.title,
		"quantifier": this.stim.quantifier ? this.stim.quantifier : "generic",
		"information": this.stim.information,
		"conjunctionBreak": this.stim.conjunctionBreak
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
    console.log(JSON.stringify(filler_chapters))

    repeatWorker = false;
    // unique turker
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

    exp.interruptConditions = ["interrupted", "int1", "int2", "int3", "int4", "nme_interrupted"];

    // CONFIGURATION

    // fillers + NMEs >= criticals - 1
    // test trials using conjunctive generics (<= 16)

    // main trials (critical and filler)
    // For Cogsci Expt 2, we consider the following conditions to be "critical": int1, int2, int4, and uninterrupted. All other conditions are "filler".
    // - int1: (Africa) -- Q(Af, As) -- (and eat bugs in the wild)
    const numCriticalInt1 = 2;
    // - int2: (Africa and) -- Q(Af, As) -- (eat bugs in the wild)
    const numCriticalInt2 = 2;
    // - int3: (Africa and eat  bugs) -- Q(Af, As) -- (which are tasty)
    const numCriticalInt3 = 0;
    // - int4: (Africa and Asia) -- Q(Af, As) -- (which is warm)
    const numCriticalInt4 = 2;
    // non-mutually exclusive
    const numNmeControls = 0;
    const numNmeInterrupts = 0;
    // uninterrupted, Q(Af, As)
    const numBreakControlsBefore = 2; // (Africa) -- (and Asia)
    const numBreakControlsAfter = 2; // (Africa and) -- (Asia)
    // fillers using quantifiers (<= 14)
    const numFillerControls = 3;
    const numFillerInterrupts = 0;

    // beginning filler trials (after first chapter)
    // quantifier fillers
    const beginningControlsBefore = 0; // (Africa) -- (and Asia), uninterrupted, Q(Af, As)
    const beginningControlsAfter = 0; // (Africa and) -- (Asia), uninterrupted, Q(Af, As)
    const beginningInterruptsBefore = 1; // (Africa) -- (and Asia), filler trial, interrupted
    const beginningInterruptsAfter = 1;// (Africa and ) -- (Asia), filler trial, interrupted
    // conjunctive generics fillers
    const beginningBreakControlsBefore = 1;// (Africa) -- (and Asia), filler trial, uninterrupted
    const beginningBreakControlsAfter = 1; // (Africa and) -- (Asia), filler trial, uninterrupted

    // convenience definitions
    const numCriticals = numCriticalInt1 + numCriticalInt2 + numCriticalInt3 + numCriticalInt4;
    const numNmes = numNmeControls + numNmeInterrupts;
    const numBreakControls = numBreakControlsBefore + numBreakControlsAfter;
    const numFillers = numFillerControls + numFillerInterrupts;

    if (numFillers + numNmes + numBreakControls < numCriticals - 1) {
	throw "not enough fillers, nmes, and break controls";
    }

    if (numFillers > fillers.length) {
	throw "too many fillers"
    }

    if (numNmes + numBreakControls + numCriticals > shuffled_chapters.length) {
	throw "too many criticals, nmes, or break controls"
    }

    // add first chapter and desired number of beginning fillers (uninterrupted)
    const addBeginningFillers = function(numTrials, condition, conjunctionBreak) {
    	if (numTrials > 0) {
    	    var toDelete = [];
    	    var fillersAdded = 0;
    	    for (i=0;i<fillers.length;i++) {
    		if (fillers[i].conjunctionBreak == conjunctionBreak) {
    		    beginningFillers.push(_.extend(fillers[i], {condition: condition, query: true}));
    		    toDelete.push(i);
    		    fillersAdded ++;
    		}
    		if (fillersAdded == numTrials) {
    		    break;
    		}
    	    }
    	    var toSubtract = 0;
    	    toDelete.forEach(function(i) {
    		fillers.splice(i-toSubtract, 1);
    		toSubtract ++;
    	    });
    	}
    }

    exp.stims = [firstChapter]
    var beginningFillers = [];
    addBeginningFillers(beginningControlsBefore, "uninterrupted", "before");
    addBeginningFillers(beginningControlsAfter, "uninterrupted", "after");
    addBeginningFillers(beginningInterruptsBefore, "interrupted", "before");
    addBeginningFillers(beginningInterruptsAfter, "interrupted", "after");

    for (i=0;i<beginningBreakControlsBefore;i++) {
	beginningFillers.push(
            _.extend(shuffled_chapters.pop(),
		     {condition: "before", query: true}
		    ));
    }
    for (i=0;i<beginningBreakControlsAfter;i++) {
	beginningFillers.push(
            _.extend(shuffled_chapters.pop(),
		     {condition: "after", query: true}
		    ));
    }

    exp.stims = exp.stims.concat(_.shuffle(beginningFillers));

    // randomize order of interrupts

    const randomizeTrials = function(conditions, critical) {
	const totalTrials = Object.values(conditions).reduce(function(a,b) {return a+b});
  	if (critical) {
  	    var baseTrials = shuffled_chapters.slice(0, totalTrials);
  	    shuffled_chapters = shuffled_chapters.slice(totalTrials, shuffled_chapters.length);
  	}	else {
  	    var baseTrials = fillers.slice(0, totalTrials);
  	    fillers = fillers.slice(totalTrials, fillers.length);
  	}
	var result = [];
	for (var property in conditions) {
	    if (conditions.hasOwnProperty(property)) {
		for (i=0;i<conditions[property];i++) {
		    result.push(_.extend(baseTrials.pop(), {condition: property, query:true}))
		}
	    }
	}
	return [_.shuffle(result), shuffled_chapters, fillers];
    }

    var result = randomizeTrials({
    	"int1": numCriticalInt1,
    	"int2": numCriticalInt2,
    	"int3": numCriticalInt3,
    	"int4": numCriticalInt4
    }, true);
    randomizedCriticals = result[0];
    shuffled_chapters = result[1];
    fillers = result[2];

    var result = randomizeTrials({
    	"uninterrupted": numFillerControls,
    	"interrupted": numFillerInterrupts
    }, false);
    randomizedFillers = result[0];
    shuffled_chapters = result[1];
    fillers = result[2];

    var result = randomizeTrials({
    	"nme_uninterrupted": numNmeControls,
    	"nme_interrupted": numNmeInterrupts
    }, true);
    randomizedNmes = result[0];
    shuffled_chapters = result[1];
    fillers = result[2];

    var result = randomizeTrials({
    	"before": numBreakControlsBefore,
    	"after": numBreakControlsAfter
    }, true);
    randomizedBreakControls = result[0];
    shuffled_chapters = result[1];
    fillers = result[2];


    // add critical trials with filler trials in between each
    var fillerTrials = _.shuffle(randomizedFillers.concat(randomizedNmes).concat(randomizedBreakControls));
    var withFillers = [];
    const n = randomizedCriticals.length;
    for (i=0;i<n;i++) {
	withFillers.push(randomizedCriticals.pop())
	if (i < n-1) {
	    withFillers.push(fillerTrials.pop())
	}
    }

    // insert remaining fillers randomly into completed sequence
    function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var insertionIndices = []
    for (i=0;i<fillerTrials.length;i++) {
	insertionIndices.push(getRandomInt(0, withFillers.length));
    }
    insertionIndices.sort(function(a,b){return a - b});
    var prevIndex = 0;
    var i = 0;
    insertionIndices.forEach(function(index) {
	exp.stims = exp.stims.concat(withFillers.slice(prevIndex, index));
	exp.stims.push(fillerTrials[i]);
	i ++;
	prevIndex = index;
    });
    exp.stims = exp.stims.concat(withFillers.slice(prevIndex, withFillers.length))

    console.log(exp.stims)

    //exp.stims = [_.extend(filler_chapters[13], {condition: "uninterrupted", query: true})]

    exp.memory_properties = _.shuffle(exp.stims.slice(1)).slice(0, 5)

    exp.stimscopy = exp.stims.slice(0);

    exp.trials = [];
    exp.catch_trials = [];
    exp.data_trials = [];
    exp.numTrials = exp.stims.length;

    exp.structure=[
	"i0",
	"botcaptcha",
	"practice",
	"instructions",
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
}
