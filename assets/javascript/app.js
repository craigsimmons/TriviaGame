$(document).ready(function() {

//Quiz data
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
        question: "Who was the lead singer for the Ramones?",
        answers: {
          a: "Dee Dee",
          b: "Johnny",
          c: "Joey",
          d: "Kurt"
        },
        correctAnswer: "c"
      }
  ];


    /* Variables */
// 6 seconds for testing only; change to 20 for release
var secondsLeftInt = 20;
var intervalId;
var correctCountInt = 0;
var incorrectCountInt = 0;

/* Event Handlers */

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
    endCountdown();
    // showResults();
    buildQuiz();
});

/* functions and core logic */
function submitPressed() { 
  return false; }

function startCountdown() {
    clearInterval (intervalId);
    intervalId = setInterval(gameTimer, 1000);
}

function endCountdown() { 
    clearInterval (intervalId);
    secondsLeft = 20;
}

function gameTimer() {
    secondsLeft --;
    console.log(secondsLeftInt);
    $("#gametimer").text("  " + secondsLeftInt);
    if (secondsLeftInt === 0) {
        $("#gametimer").text("Time's Up!");
        console.log("Time's Up");
        endCountdown();
        incorrect++;
    }

}

function gamePause() {
    // setTimeout(gamePause, 5000);  - USE THIS TO CALL TIMEOUT
    $("#gametimer").text("we pause for 5 seconds");
}

function showResults(){
    var $quizContainer = $("#quizdiv").html();
    var $resultsContainer = $("#resultsdiv").html();
    $("#quiz").text($quizContainer);
    $("#results").text($resultsContainer);
}

function buildQuiz() {
    var quizQuestionStr = "";
    var answerAStr = "";
    var answerBStr = "";
    var answerCStr = "";
    var answerDStr = "";
    var correctAnswerStr = "";
    var positionId = "";

  for (var i = 0; i < quizMaterialArr.length; i++) { 
    positionId = i;
    quizQuestionStr = quizMaterialArr[i].question;
    answerAStr = quizMaterialArr[i].answers.a;
    answerBStr = quizMaterialArr[i].answers.b;
    answerCStr = quizMaterialArr[i].answers.c;
    answerDStr = quizMaterialArr[i].answers.d;
    correctAnswerStr = quizMaterialArr[i].correctAnswer;
    
    console.log(quizQuestionStr);
    console.log(answerAStr);
    console.log(answerBStr);
    console.log(answerCStr);
    console.log(answerDStr);
    console.log(correctAnswerStr);

    $("#question").html('<p id="question' + positionId + '">' + quizQuestionStr + '</p>');
    $("#answerA").html('<input type="radio" id="q' + positionId + 'answer" value="a">' + 
    '<label for="q' + positionId + 'answer" value="a">' + answerAStr + '</label>');
    $("#answerB").html('<input type="radio" id="q' + positionId + 'answer" value="b">' + 
    '<label for="q' + positionId + 'answer" value="b">' + answerBStr + '</label>');
    $("#answerC").html('<input type="radio" id="q' + positionId + 'answer" value="c">' + 
    '<label for="q' + positionId + 'answer" value="c">' + answerCStr + '</label>');
    $("#answerD").html('<input type="radio" id="q' + positionId + 'answer" value="d">' + 
    '<label for="q' + positionId + 'answer" value="d">' + answerDStr + '</label>');

  gameTimer();

  }
}
/*

quizMaterialArr[i].question  - <p id="quizquestion"class="displayfont">Quiz Question  #1</p>
    console.log(quizMaterialArr[i].answers.a);

  }
   for(letter in questions[i].answers){

    // ...add an html radio button
    answers.push(
      '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + questions[i].answers[letter]
      + '</label>'
    );
  }
} 

*/


// end brcket for document.ready -don't erase
});
