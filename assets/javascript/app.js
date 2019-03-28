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

function buildQuiz(){

}

function displayQuestion(){

}




});
