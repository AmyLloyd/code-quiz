var questionSet = document.getElementById("question-set");

//Questionset needs to be hidden at load
window.addEventListener("load", function () {
  questionSet.style.visibility = "hidden";
  answerTextEl.style.visibility = "hidden";
});
//Identifying positions for question data on the page
var choice1 = document.getElementById("option-1");
var choice2 = document.getElementById("option-2");
var choice3 = document.getElementById("option-3");
var choice4 = document.getElementById("option-4");
var questionHeading = document.getElementById("question-heading");
var answerTextEl = document.getElementById("check-answer");

//Identify content that will need to be activated or toggled between hidden and visible
var welcomeScreen = document.getElementById("welcome-screen");
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
});


function renderQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionHeading.textContent = currentQuestion.title;
  choice1.textContent = currentQuestion.choices[0];
  choice2.textContent = currentQuestion.choices[1];
  choice3.textContent = currentQuestion.choices[2];
  choice4.textContent = currentQuestion.choices[3];
}

//add event listener to activate 
choices.addEventListener("click", function (event) {
  var guess = event.target.textContent;
  if (guess === questions[currentQuestionIndex].answer) {
     console.log("CORRECT!") 
     return
  } else {
      console.log("WRONG!!!");
  }
  currentQuestionIndex++;
  
  renderQuestion();
});


//Create timer 
var timeEl = document.getElementById("timer");
var secondsLeft = 20;

function gameOver() {
  questionSet.style.visibility = "hidden";

}
]

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

setTime();




// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score