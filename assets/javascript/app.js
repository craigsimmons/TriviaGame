$(document).ready(function() {
/* Variables */

// # of seconds for this countdown timer
//1000 will  run it every 1 second
// 6 seconds for testing only; change to 20 for release
var secondsLeft = 6;
var intervalId;

/* Event Handlers */

// not an event handler per se; might not need
// $("#gametimer").text("Timer:  " + " " + secondsLeft);

$("#start").click(function() {
    // $("#gametimer").text("Timer from start button:  " + secondsLeft);
    $("#gametimer").text("  " + secondsLeft);
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
    testContainer();
});

/* functions and core logic */

function startCountdown() {
    clearInterval (intervalId);
    intervalId = setInterval(gameTimer, 1000);

}

function endCountdown() { 
    clearInterval (intervalId);
    secondsLeft = 6;
    // setTimeout(gamePause, 5000);
    // startCountdown();
}

function gameTimer() {
    secondsLeft --;
    console.log(secondsLeft);
    // $("#gametimer").text("Timer in GameTimer != 0:  " + secondsLeft);
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

function testContainer() {
    var quizContainer = $("#quizdiv").html();
    var resultsContainer = $("#resultsdiv").html();
    $("#quizdiv").text(quizContainer);
    $("#resultsdiv").text(resultsContainer);
}


});
