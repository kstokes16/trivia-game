var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;
var counter = 30;
var questionTimer = 30;
var questionNumber = 0;

// questions to be used during the game

var gameQuestions = [{
    question: "First question goes here...",
    answers: ["A. florida", "B. gator", "C. Albert", "D. Alberta"],
    correctAnswer: "A. florida"
},
{
    question: "Second question goes here...",
    answers: ["A. florida", "B. gator", "C. Albert", "D. Alberta"],
    correctAnswer: "A. florida"
},
{
    question: "Third question goes here...",
    answers: ["A. florida", "B. gator", "C. Albert", "D. Alberta"],
    correctAnswer: "A. florida"
},
{
    question: "Fourth question goes here...",
    answers: ["A. florida", "B. gator", "C. Albert", "D. Alberta"],
    correctAnswer: "A. florida"
},
{
    question: "Fifth question goes here...",
    answers: ["A. florida ", " B. gator ", " C. Albert ", " D. Alberta "],
    correctAnswer: "A. florida"
},
{
    question: "Sixth question goes here...",
    answers: ["A. florida", "B. gator", "C. Albert", "D. Alberta"],
    correctAnswer: "A. florida"
},
{
    question: "Seventh question goes here...",
    answers: ["A. florida", "B. gator", "C. Albert", "D. Alberta"],
    correctAnswer: "A. florida"
},
{
    question: "Eigth question goes here...",
    answers: ["A. florida", "B. gator", "C. Albert", "D. Alberta"],
    correctAnswer: "A. florida"
}];

// click this button at the beginning to begin the game and make the questions appear

$("#start-button").on("click",function(){
    $("#start-button").hide();
    for (var i =0; i < gameQuestions.length; i++) {
        $("#gameflow").append('<h4>' + gameQuestions[i].question+'</h4>');

        for (var ctr=0; ctr < gameQuestions[i].answers.length; ctr++) {
            $("#gameflow").append('<h5>'+
            "<input type='radio' name=' question-" + i + "'value='" + gameQuestions[i].answers[ctr]+"'>" + gameQuestions[i].answers[ctr])
        }
        
    }
   // console.log("You clicked the button");
});

// create timer to display after start button is clicked and add it to HTML

// create done button that appears when game is started and add it to HTML