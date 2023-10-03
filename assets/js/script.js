var questionSet = document.getElementById("question-set");
var gameOverContainer = document.getElementById("game-over");
var highScoresContainer = document.getElementById("high-scores-container");
var submitBtn = document.getElementById("#submit");
var welcomeScreen = document.getElementById("welcome-screen");


gameOverContainer.setAttribute("style", "visibility: hidden;");
highScoresContainer.setAttribute("style", "visibility: hidden;");
questionSet.setAttribute("style", "visibility: hidden;");
welcomeScreen.setAttribute("style", "display: flex;");

// //Questionset needs to be hidden at load
// window.addEventListener("load", function () {
//   questionSet.style.visibility = "hidden";
//   answerTextEl.style.visibility = "hidden";
//   gameOverContainer.style.visibility = "hidden";
//   highScoresContainer.style.visibility = "hidden";
// });
//Identifying positions for question data on the page
var choice1 = document.getElementById("option-1");
var choice2 = document.getElementById("option-2");
var choice3 = document.getElementById("option-3");
var choice4 = document.getElementById("option-4");
var questionHeading = document.getElementById("question-heading");
var answerTextEl = document.getElementById("check-answer");

//Identify content that will need to be activated or toggled between hidden and visible

var startButton = document.getElementById("start-button");

//Create variables for what appears - an array of the question sets
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var choices = document.querySelector("#choice-list");

//Tutor support needed to add this currentQuestion array in order to link the array to the textContent
var currentQuestionIndex = 0;

//event listener to activate function WORKS!
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startButton.disabled = true;
  welcomeScreen.style.display = "none";
  questionSet.style.visibility = "visible";
  
  renderQuestion();
  //setTime();
});


function renderQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionHeading.textContent = currentQuestion.title;
  choice1.textContent = currentQuestion.choices[0];
  choice2.textContent = currentQuestion.choices[1];
  choice3.textContent = currentQuestion.choices[2];
  choice4.textContent = currentQuestion.choices[3];
}

//Create variable to collect score starting at zero
var highScores = {
  score: 0,
  initials:[""],
};

//add event listener to activate 
choices.addEventListener("click", function (event) {
  var guess = event.target.textContent;
  if (guess === questions[currentQuestionIndex].answer) {
     console.log("CORRECT!") 
     highScores.score ++;
  } else {
      console.log("WRONG!!!");
  }

  //Add less than length to ensure it knows what to do if index runs out
  currentQuestionIndex++;      
  if (currentQuestionIndex < questions.length) {
  renderQuestion();
  } else {
  gameOver ();
  }
});

//Create timer 
var timeEl = document.getElementById("timer");
var secondsLeft = 20;

function gameOver() {
  questionSet.style.display = "none";
  gameOverContainer.style.visibility = "visible";

  //finalScore is the position to put text
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = highScores.score;  
}


//Add timer to count down by ones
// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;
//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       gameOver();
//     } 
//   }, 1000);
// }

//When submit button clicked

submitBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("initials written");
  // show highscores screen
  // gameOverContainer.setAttribute("style", "display: none;");
 // highScoresContainer.setAttribute("style", "visibility: visible;");
  }
);
