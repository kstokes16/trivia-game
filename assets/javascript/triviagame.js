// global variables

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;
var counter = 20;
var questionNumber = 0;
var theClock;
var rightAnswers = ["1899", "FSU", "1902", "Gator", "2006", "1853", "Orange and Blue", "Gatorade"];

$("#details").hide();

// questions to be used during the game

var gameQuestions = [{
    question: "What year was the first official season for UF football?",
    answers: ["1966", "1899", "1900", "1998"],
    correctAnswer: "1899"
},
{
    question: "In 1996, the Gators won their first National Championship in football. Who did they beat?",
    answers: ["Miami", "UCF", "USF", "FSU"],
    correctAnswer: "FSU"
},
{
    question: "Florida vs Florida State is certainly one of the most heated rivalries in all of sports, but when did it begin?",
    answers: ["1850", "1933", "1902", "1950"],
    correctAnswer: "1902"
},
{
    question: "What is the mascot for the University of Florida?",
    answers: ["Seminole", "Gator", "Knight", "Bulldog"],
    correctAnswer: "Gator"
},
{
    question: "When did the Gator basketball team win its first national title?",
    answers: ["2006", "2008", "1994", "1996"],
    correctAnswer: "2006"
},
{
    question: "What year was the University of Florida founded?",
    answers: ["1912", "1776", "1982", "1853"],
    correctAnswer: "1853"
},
{
    question: "What are UF's official school colors?",
    answers: ["Green and Orange", "Orange and Blue", "Black and Gold", "Green and Gold"],
    correctAnswer: "Orange and Blue"
},
{
    question: "What popular sports drink was created at UF?",
    answers: ["Powerade", "Red Bull", "Gatorade", "Body Armor"],
    correctAnswer: "Gatorade"
}];

// array of correct answers

// submit button at bottom of screen 

function doneButton() {
    $("#content-area").html("<p><button type='button' class='btn btn-lg' id='done'>Submit! </button></p>");
    
}


// makes timer appear at top of page

function timerWrapper() {
    theClock = setInterval(ninetySeconds, 1000);
    function ninetySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            //resetGame();
            result();
        }
        if (counter > 0) {
            counter--;
        }
        $("#game-timer").text(counter);
    }
} //end of timer function

// click this button at the beginning to begin the game and make the questions appear

function submit () {
    console.log("You clicked the done button");
    clearInterval(theClock);
    result();
}

$("#start-button").on("click",function(){
    timerWrapper();
    doneButton();
    $("#start-button").hide();
    $("#details").show();

    for (var i =0; i < gameQuestions.length; i++) {
        $("#gameflow").append('<h4>' + gameQuestions[i].question+'</h4>');
    for (var ctr=0; ctr < gameQuestions[i].answers.length; ctr++) {
        $("#gameflow").append('<h5>'+
        "<input type='radio' name='question-" + i + "'value='" + gameQuestions[i].answers[ctr]+"'>" + gameQuestions[i].answers[ctr])
        }  
    }
    console.log("You clicked the button");
});

function result(){
    var userAns = [];
    for(var i=0;i<gameQuestions.length;i++){
        var temp = $("input[name='question-"+i+"']:checked").val();
        userAns.push(temp);
    }
    for(var j=0;j<userAns.length;j++){
        if(userAns[j]==rightAnswers[j]){
            correctAnswers++;
        }
        else if(userAns[j]==undefined){
            unansweredAnswers++;
        }
        else{
            incorrectAnswers++;
        }
    }
    $("#ca").text(correctAnswers);
    $("#ic").text(incorrectAnswers);
    $("#ua").text(unansweredAnswers);
    console.log(userAns);

}

$(document).on("click", "#done", submit);

// end of start game button

/* create timer to display after start button is clicked and add it to HTML

DONE

// create done button that appears when game is started and add it to HTML

Added button, but no functionality yet

// tally up correct questions, incorrect questions, unanswered questions and display at completion of game after submit button is hit

// create function to run if time runs out and figure out where to implement it to make game work

function resetGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredAnswers = 0;
    counter = 90;
    theClock;
    timerWrapper();
} */
