// global variables

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;
var counter = 90;
var questionNumber = 0;
var theClock;

// questions to be used during the game

var gameQuestions = [{
    question: "What year was the first official season for UF football",
    answers: ["A. 1966", "B. 1899", "C. 1900", "D. 1998"],
    correctAnswer: "B. 1899"
},
{
    question: "In 1996, the Gators won their first National Championship in football. Who did they beat?",
    answers: ["A. Miami", "B. UCF", "C. USF", "D. FSU"],
    correctAnswer: "D. FSU"
},
{
    question: "Florida vs Florida State is certainly one of the most heated rivalries in all of sports, but when did it begin?",
    answers: ["A. 1850", "B. 1933", "C. 1902", "D. 1950"],
    correctAnswer: "C. 1902"
},
{
    question: "What is the mascot for the University of Florida?",
    answers: ["A. Seminole", "B. Gator", "C. Knight", "D. Bulldog"],
    correctAnswer: "B. Gator"
},
{
    question: "When did the Gator basketball team win its first national title?",
    answers: ["A. 2006 ", " B. 2008 ", " C. 1994 ", " D. 1996 "],
    correctAnswer: "A. 2006"
},
{
    question: "What year was the University of Florida founded?",
    answers: ["A. 1912", "B. 1776", "C. 1982", "D. 1853"],
    correctAnswer: "D. 1853"
},
{
    question: "What are UF's official school colors?",
    answers: ["A. Green and Orange", "B. Orange and Blue", "C. Black and Gold", "D. Green and Gold"],
    correctAnswer: "B. Orange and Blue"
},
{
    question: "What popular sports drink was created at UF?",
    answers: ["A. Powerade", "B. Red Bull", "C. Gatorade", "D. Body Armor"],
    correctAnswer: "C. Gatorade"
}];

// submit button at bottom of screen 

function doneButton() {
    $("#content-area").html("<p><button type='button' class='btn btn-lg' id='start-button'>Submit! </button></p>");
}

// makes timer appear at top of page

function timerWrapper() {
    theClock = setInterval(ninetySeconds, 1000);
    function ninetySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            resetGame();
        }
        if (counter > 0) {
            counter--;
        }
        $("#game-timer").html("<h4>Time Remaining:</h4>" + counter + "<h6>Seconds</h6>");
    }
} //end of timer function

// click this button at the beginning to begin the game and make the questions appear

$("#start-button").on("click",function(){
    timerWrapper();
    doneButton();
    $("#start-button").hide();

    for (var i =0; i < gameQuestions.length; i++) {
        $("#gameflow").append('<h4>' + gameQuestions[i].question+'</h4>');
    for (var ctr=0; ctr < gameQuestions[i].answers.length; ctr++) {
        $("#gameflow").append('<h5>'+
        "<input type='radio' name=' question-" + i + "'value='" + gameQuestions[i].answers[ctr]+"'>" + gameQuestions[i].answers[ctr])
        }
    }
    console.log("You clicked the button");
}); // end of start game button
    

/* create timer to display after start button is clicked and add it to HTML

function timerWrapper() {
    theClock = setInterval(ninetySeconds, 1000);
    function ninetySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            timeoutLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $("#game-timer").html("<h3>Time Remaining:</h3>" + counter);
    }
} */

// create done button that appears when game is started and add it to HTML

// tally up correct questions, incorrect questions, unanswered questions and display at completion of game after submit button is hit

// create function to run if time runs out

function resetGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredAnswers = 0;
    counter = 90;
    theClock;
    timerWrapper();
}
