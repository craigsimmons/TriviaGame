$(document).ready(function() {
//Quiz data - how the fuck do I step through this? for loop not cutting it in way I've written the program flow.
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
var secondsLeftInt = 21;
var intervalId;
var correctCountInt = 0;
var incorrectCountInt = 0;
var quizQuestionStr = "";
var answerAStr = "";
var answerBStr = "";
var answerCStr = "";
var answerDStr = "";
var correctAnswerStr = "";
var positionId = "";
var quizIndexInt = 0;

/* Event Handlers */

$("#start").click(function() {
    correctCountInt = 0;
    incorrectCountInt = 0;
    $("#gametimer").text(secondsLeftInt);
    $("#goodanswer").text(correctCountInt);
    $("#badanswer").text(incorrectCountInt);
    buildQuiz();
    startCountdown();
    // need to add code to disable start button
    // fix timer issues 
});

$("#end").click(function() {
    $("#gametimer").text("Game Over!");
    $("#goodanswer").text(correctCountInt);
  $("#badanswer").text(incorrectCountInt);
    endCountdown();
    resetGame();
    // need to add code to enable start button
});

$("#submitbtn").click(function() {
  endCountdown();
  $("#gametimer").text(secondsLeftInt);
  evalSubmission();
});

/* functions and core logic */

function startCountdown() {
    secondsLeftInt = 21;
    clearInterval(intervalId);
    intervalId = setInterval(gameTimer, 1000);
}

function endCountdown() {
    clearInterval(intervalId);
}

function resetGame() {
  $("#gametimer").text("Game Over");
  var secondsLeftInt = 21;
  var quizQuestionStr = "";
  var answerAStr = "";
  var answerBStr = "";
  var answerCStr = "";
  var answerDStr = "";
  var correctAnswerStr = "";
  $("#goodanswer").text(correctCountInt);
  $("#badanswer").text(incorrectCountInt);
}

function evalSubmission(){
  var submitValue = $('input[name="selected"]:checked').val();
  console.log(submitValue)
  console.log(correctAnswerStr)
  if  (submitValue === correctAnswerStr)  {
    $("#gametimer").text("Correct");
    correctCountInt = correctCountInt + 1;
    $("#goodanswer").text(correctCountInt)
    quizIndexInt++;
    console.log("ln 129 correct sub ----quiz index:" + quizIndexInt);
    if (quizIndexInt === quizMaterialArr.length) {
      $("#gametimer").text("Game Over!");
      $("#goodanswer").text(correctCountInt);
      $("#badanswer").text(incorrectCountInt);
      removeHTML();
      endCountdown();
      resetGame();
    }
    else {
      //create separate function to "restart" ????
      removeHTML();
      startCountdown();
      buildQuiz();
      // startCountdown(); ? if I include this, I get a stack overflow
    }
  }
  else {
    $("#gametimer").text("Incorrect");
    incorrectCountInt = incorrectCountInt + 1;
    $("#badanswer").text(incorrectCountInt)
    quizIndexInt++;
    console.log("ln 142 incorrect sub----quiz index:" + quizIndexInt);
    if (quizIndexInt === quizMaterialArr.length) {
      $("#gametimer").text("Game Over!");
      $("#goodanswer").text(correctCountInt);
      $("#badanswer").text(incorrectCountInt);
      removeHTML();
      endCountdown();
      resetGame();
    }
    else {
      //create separate function to "restart" ????
      removeHTML();
      startCountdown();
      buildQuiz();
      // startCountdown(); ? if I include this, I get a stack overflow
    }
  }
}

function gameTimer() {
  if (secondsLeftInt === 0) {
    $("#gametimer").text("Time's Up!");
    endCountdown();
    incorrectCountInt = incorrectCountInt + 1;
    $("#badanswer").text(incorrectCountInt)
    quizIndexInt++;
    console.log("ln 129 ----quiz index:" + quizIndexInt);
    removeHTML();
    gameTimer();
    buildQuiz();
   
    }
  else {
    secondsLeftInt --;
    console.log(secondsLeftInt);
    $("#gametimer").text(secondsLeftInt);
    }
}

function buildQuiz() {  // should I abandon this for loop and keep track of the index[] myself? 

    quizQuestionStr = quizMaterialArr[quizIndexInt].question;
    answerAStr = quizMaterialArr[quizIndexInt].answers.a;
    answerBStr = quizMaterialArr[quizIndexInt].answers.b;
    answerCStr = quizMaterialArr[quizIndexInt].answers.c;
    answerDStr = quizMaterialArr[quizIndexInt].answers.d;
    correctAnswerStr = quizMaterialArr[quizIndexInt].correctAnswer;
    /*
    console.log(quizQuestionStr);
    console.log(answerAStr);
    console.log(answerBStr);
    console.log(answerCStr);
    console.log(answerDStr);
    console.log(correctAnswerStr);
    console.log(positionId);
   */
    buildHTML();
    gameTimer();
  }

function buildHTML() {
  $("#question").html('<p id="question' + positionId + '">' + quizQuestionStr + '</p>');
  $("#answerA").html('<input type="radio" name="selected" id="a1' + positionId + 'answer" value="a">' + 
  '<label for="q' + positionId + 'answer" value="a">' + '  ' + answerAStr + '</label>');
  $("#answerB").html('<input type="radio" name="selected" id="a2' + positionId + 'answer" value="b">' + 
  '<label for="q' + positionId + 'answer" value="b">' + '  ' + answerBStr + '</label>');
  $("#answerC").html('<input type="radio" name="selected" id="a3' + positionId + 'answer" value="c">' + 
  '<label for="q' + positionId + 'answer" value="c">' + '  ' + answerCStr + '</label>');
  $("#answerD").html('<input type="radio" name="selected" id="a4' + positionId + 'answer" value="d">' + 
  '<label for="q' + positionId + 'answer" value="d">' + '  ' + answerDStr + '</label>');
  // $("submitdiv").html('<button id="submitbtn" type="button" value="Submit" class="button btn">Submit</button>'); 
  }
  function removeHTML() {
    $("#question").html("");
    $("#answerA").html("");
    $("#answerB").html("");
    $("#answerC").html("");
    $("#answerD").html("");
  }
/*
  function hideHTML() {
  $("#question").hide();
  $("#answerA").hide();
  $("#answerB").hide();
  $("#answerC").hide();
  $("#answerD").hide();
  }
*/


// end brcket for document.ready -don't erase
});