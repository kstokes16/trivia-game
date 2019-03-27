// global variables

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;
var counter = 120;
var questionNumber = 0;
var theClock;
var rightAnswers = ["B. 1899", "D. FSU", "C. 1902", "B. Gator", "A. 2006", "D. 1853", "B. Orange and Blue", "C. Gatorade"];

$("#details").hide();

$("#done").on("click", function() {
    console.log("You clicked the done button me");
    clearInterval(theClock);
    result();
})

// questions to be used during the game

var gameQuestions = [{
    question: "What year was the first official season for UF football?",
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
    answers: ["A. 2006 ", "B. 2008", "C. 1994", "D. 1996"],
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
