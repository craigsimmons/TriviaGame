$(document).ready(function() {
  
// Quiz data - 10 questions.
var quizMaterialArr = [
    {
      id: "1",
      question: "In what century did the 100 years war begin?",
      answers: {
        a: "15th Century",
        b: "14th Century",
        c: "16th Century",
        d: "17th Century"
      },
      correctAnswer: "b"
    },
    {
      id: "2",
      question: "When did Julius Caesar cross the Rubicon?",
      answers: {
        a: "59 BCE",
        b: "52 BCE",
        c: "49 BCE",
        d: "45 BCE",
      },
      correctAnswer: "c"
    },
    {
      id: "3",
      question: "Which English King was beheaded by Parliment in 1649?",
      answers: {
        a: "Charles II",
        b: "James I",
        c: "Henry VI",
        d: "Charles I"
      },
      correctAnswer: "d"
    },
    {
      id: "4",
      question: "Which of the following empires had no written language? ",
      answers: {
        a: "Incan",
        b: "Babylonian",
        c: "Tang Dynasty",
        d: "Aztec"
      },
      correctAnswer: "a"
    },
    {
      id: "5",
      question: "How many witches died at the stake during the Salem Witch Trials?",
      answers: {
        a: "10",
        b: "19",
        c: "0",
        d: "2"
      },
      correctAnswer: "c"
    },
    {
      id: "6",
      question: "Which Greek City-State fought the Persian Army at Thermopylae?",
      answers: {
        a: "Athens",
        b: "Sparta",
        c: "Thebes",
        d: "Minos"
      },
      correctAnswer: "b"
    },
    {   
      id: "7",
      question: "Mount Vesuvius destroyed the city of Pompeii in the year? ",
      answers: {
        a: "79 CE",
        b: "69 CE",
        c: "79 BCE",
        d: "42 BC"
      },
      correctAnswer: "a"
    },
    {   
      id: "8",
      question: "What was the last battle of the Napoleonic Wars?",
      answers: {
        a: "Trafalgar",
        b: "Waterloo",
        c: "Brandenburg",
        d: "Wavre"
      },
      correctAnswer: "d"
    },
    {    
      id: "9",
      question: "Which English king did William Wallace fight against?",
      answers: {
          a: "Edward II",
          b: "Richard I",
          c: "Edward I",
          d: "Henry I"
        },
      correctAnswer: "c"
    },
    {    
      id: "10",
      question: "Who was the first Prime Minister of the United Kingdom?",
      answers: {
        a: "George Grenville",
        b: "Robert Walpole",
        c: "Henry Pelham",
        d: "Winston Churchill"
      },
      correctAnswer: "b"
    }    
  ];

/* Variables */
// Timer vars
var secondsLeftInt = 15;
var intervalId;
// win loss vars
var correctCountInt = 0;
var incorrectCountInt = 0;
// holds quiz question for display
var quizQuestionStr = "";
// holds quiz answers for display
var answerAStr = "";
var answerBStr = "";
var answerCStr = "";
var answerDStr = "";
// holds the "correct" answer for evaluation
var correctAnswerStr = "";
// holds question Id - used to build HTML
var positionId = "";
// holds quizMaterialArray index for stepping through questions/answers
// using this to track question "state" instead of a for loop
var quizIndexInt = 0;

/* Event Handlers */
// Start button event handler
$("#start").click(function() {
  // reset wins and losses
    correctCountInt = 0;
    incorrectCountInt = 0;
    $("#gametimer").text(secondsLeftInt);
    $("#goodanswer").text(correctCountInt);
    $("#badanswer").text(incorrectCountInt);
// disable and enable buttons - makes Start disabled (after it's pressed)
    $("#start").attr("disabled", true);
    $("#end").attr("disabled", false);
    $("#submitbtn").attr("disabled", false);
// build quiz and kick off timer
    buildQuiz();
    startCountdown();
});

//event handler for Reset (end) button
$("#end").click(function() {
// message to player (in red) upon "ending/resetting game"
    $("#gametimer").text("Game Over");
  // $("#gametimer").css({"color":"red"});
// update wins and losses
    $("#goodanswer").text(correctCountInt);
    $("#badanswer").text(incorrectCountInt);
    // disable and enable buttons - makes End and Submit buttons disabled
    $("#start").attr("disabled", false);
    $("#end").attr("disabled", true);
    $("#submitbtn").attr("disabled", true);
// end countdown, reset game and key variables
    endCountdown();
    resetGame();
    secondsLeftInt = 15;
});

//event handler for Submit button
// end/restart timer and evaluate if answer is correct
$("#submitbtn").click(function() {
    endCountdown();
  startCountdown()
  $("#gametimer").text(secondsLeftInt);
  evalSubmission();
});

/* functions and core logic */

// initial state of buttons - only start is enabled initially.
// Reset/end & Submit becomes enabled once game starts. Toggle false or True argument
$("#start").attr("disabled", false);
$("#submitbtn").attr("disabled", true);
$("#end").attr("disabled", true);

// starts timer countdown. set to 11 (because 10 would start at 9)
function startCountdown() {
    secondsLeftInt = 16;
    clearInterval(intervalId);
    intervalId = setInterval(gameTimer, 1000);
}

// and clear the interval we set when we want to end countdown
function endCountdown() {
    clearInterval(intervalId);
}
//Game reset
function resetGame() {
  endCountdown();
  $("#gametimer").text("Game Over!");
// $("#gametimer").css({"color":"red"});
 
// set to 15 (not 16) for display purposes
//reset key variables
  var secondsLeftInt = 15;
  var quizQuestionStr = "";
  var answerAStr = "";
  var answerBStr = "";
  var answerCStr = "";
  var answerDStr = "";
  var correctAnswerStr = "";
// update win loss counts and display 0's
  $("#goodanswer").text(correctCountInt);
  $("#badanswer").text(incorrectCountInt);
}
// evals player answer
function evalSubmission(){
// get letter value for the radio button that was selected and plop into a variable
  var submitValue = $('input[name="selected"]:checked').val();
// if the user selects the correct answer
  if  (submitValue === correctAnswerStr)  {
    // message the user that she chose the correct answer
   // $("#gametimer").css({"color":"green"});
    $("#gametimer").text("Correct");
    // increment wins counter and display updated value
    correctCountInt = correctCountInt + 1;
    $("#goodanswer").text(correctCountInt)
// Increments the counter used to iterate over the quiz array
    quizIndexInt++;
// Test to see if end of quiz is reached
    if (quizIndexInt === quizMaterialArr.length) {
// if it is, declare Game Over and reset things
      $("#gametimer").css({"color":"#000066"});
      $("#gametimer").text("Game Over!");
      $("#goodanswer").text(correctCountInt);
      $("#badanswer").text(incorrectCountInt);
      removeHTML();
      endCountdown();
      resetGame();
    }
    else {
//if there are additional questions in array, build another question page
      $("#gametimer").css({"color":"#000066"});
      removeHTML();
      startCountdown();
      buildQuiz();
    }
  }
// if the player guesses incorrectly
  else {
    $("#gametimer").text("Incorrect");
    incorrectCountInt = incorrectCountInt + 1;
    $("#badanswer").text(incorrectCountInt)
    quizIndexInt++;
// checking to see if Quiz array is empty. 
    if (quizIndexInt === quizMaterialArr.length) {
     // $("#gametimer").css({"color":"red"});
      $("#gametimer").text("Game Over!");
      $("#goodanswer").text(correctCountInt);
      $("#badanswer").text(incorrectCountInt);
      removeHTML();
      endCountdown();
      resetGame();
    }
    else {
    // start the quiz anew
      removeHTML();
      startCountdown();
      buildQuiz();
      // startCountdown(); ? if I include this, I get a stack overflow
    }
  }
}
// implements a timer
function gameTimer() {
  // evals whether timer has hit zero
  if (secondsLeftInt === 0) {
    // means player let timer expire. Let player know
    $("#gametimer").text("Time's Up!");
    endCountdown();
    // mark as incorrect and update display
    incorrectCountInt = incorrectCountInt + 1;
    $("#badanswer").text(incorrectCountInt)
    quizIndexInt++;
    // start up a new question - one final time
    removeHTML();
    buildQuiz();
    startCountdown();
    }
    // Time remaining!
  else {
    // decrease timer by 1 second 
    secondsLeftInt --;
    console.log(secondsLeftInt);
    $("#gametimer").text(secondsLeftInt);
    }
}
// Pulls data from Quiz Material array and prepares it for display
function buildQuiz() { 
    quizQuestionStr = quizMaterialArr[quizIndexInt].question;
    answerAStr = quizMaterialArr[quizIndexInt].answers.a;
    answerBStr = quizMaterialArr[quizIndexInt].answers.b;
    answerCStr = quizMaterialArr[quizIndexInt].answers.c;
    answerDStr = quizMaterialArr[quizIndexInt].answers.d;
    correctAnswerStr = quizMaterialArr[quizIndexInt].correctAnswer;
    buildHTML();
    startCountdown();
  }
// Creates and displays quiz data/info dynamically
function buildHTML() {
  $("#question").html('<p class="whitefont" id="question' + positionId + '">' + quizQuestionStr + '</p>');
  $("#answerA").html('<input type="radio" name="selected" id="a1' + positionId + 'answer" value="a">' + 
  '<label for="q' + positionId + 'answer" value="a">' + '  ' + answerAStr + '</label>');
  $("#answerB").html('<input type="radio" name="selected" id="a2' + positionId + 'answer" value="b">' + 
  '<label for="q' + positionId + 'answer" value="b">' + '  ' + answerBStr + '</label>');
  $("#answerC").html('<input type="radio" name="selected" id="a3' + positionId + 'answer" value="c">' + 
  '<label for="q' + positionId + 'answer" value="c">' + '  ' + answerCStr + '</label>');
  $("#answerD").html('<input type="radio" name="selected" id="a4' + positionId + 'answer" value="d">' + 
  '<label for="q' + positionId + 'answer" value="d">' + '  ' + answerDStr + '</label>');
  }
  // Function to remove HTML elements of quiz
  function removeHTML() {
    $("#question").html("");
    $("#answerA").html("");
    $("#answerB").html("");
    $("#answerC").html("");
    $("#answerD").html("");
  }

});