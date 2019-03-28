$(document).ready(function() {
/* Variables */

// # of seconds for this countdown timer
//1000 will  run it every 1 second
// 6 seconds for testing only; change to 20 for release
var secondsLeft = 6;
var intervalId;

/* Event Handlers */

// not an event handler per se; might not need

$("#start").click(function() {
    $("#gametimer").text(secondsLeft);
    $("#quiz").text("Quiz Content Placeholder");
    $("#results").text("Results Content Placeholder");
    startCountdown();
});

$("#end").click(function() {
    $("#timerlabel").html("");
    $("#gametimer").text("Game Over!");
    console.log("Game Over");
    endCountdown();
});

$("#submit").click(function() {
    $("#gametimer").text("Submit it!");
    showResults();
});

/* functions and core logic */

function startCountdown() {
    clearInterval (intervalId);
    intervalId = setInterval(gameTimer, 1000);
}

function endCountdown() { 
    clearInterval (intervalId);
    secondsLeft = 6;
}

function gameTimer() {
    secondsLeft --;
    console.log(secondsLeft);
    $("#gametimer").text("  " + secondsLeft);
    if (secondsLeft === 0) {
        $("#gametimer").text("Time's Up!");
        console.log("Time's Up");
        endCountdown();
    }
}

function gamePause() {
    // setTimeout(gamePause, 5000);  - USE THIS TO CALL TIMEOUT
    $("#gametimer").text("we pause for 5 seconds");
}
//  why not working???
function showResults(){
    var $quizContainer = $("#quizdiv").html();
    var $resultsContainer = $("#resultsdiv").html();
    $("#quiz").text($quizContainer);
    $("#results").text($resultsContainer);
}

function displayQuestion(){
    // use flip cards? 
    //get input from quizMaterials Obj
    // display question and answer list with radio buttons

}

function correctAnswer(){
    // display right answer - highlight correct guess in green,
}
function wrongAnswer(){
    // display bad answer - highlight correct one in green, highligh user selection in red
}

function buildQuiz() {
}
/* var quizMaterialObj {} defined in quiz.js

    1. Get quizMaterialObj {} for processing (question, answerChoices, correctAnswer) 
        var currentQuestionStr = "";  // the question (do I need an array here for entire object representing one question )
        var questionNumberInt; // may not need this
        var answerChoicesArr = []; // all 4 answers 
        var correctAnswerStr = []; // single line radio button
      
    2. would like to use a forEach() on the quizMaterialObj
        a. pull question, list of answers, correct answer together
        b. create HTML output 

    3. Create HTML OUTPUT 
        var quizOutputArr = [];  // place to store the HTML output
            <label>
            <input type="radio">
            </label>
    4. put quiz content into quizOutputArr and display;
     a. questionStr , answerChoicesArr, correctAnswerStr

    5. add the question and its answers to the output
         quizOutputArr ?  use push()
    6. join html and content and display
    quizdiv.innerHTML = output.join('');
        
*/
    


// ebd brcket for document.ready -don't erase
});
