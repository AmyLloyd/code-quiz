//set variables to access sections
var questionSet = document.getElementById("question-set");
var gameOverContainer = document.getElementById("game-over");
var highScoresContainer = document.getElementById("high-scores-container");
var welcomeScreen = document.getElementById("welcome-screen");

//set variables to access buttons including choices buttons
var saveHighScore = document.getElementById("save-high-score");
var startButton = document.getElementById("start-button");
var choices = document.querySelector("#choice-list");
var initialsInput = document.getElementById("initials-input");
var highScoresLink = document.querySelector("#high-scores-button");


//set original attributes of sections
gameOverContainer.setAttribute("style", "visibility: hidden;");
highScoresContainer.setAttribute("style", "visibility: hidden;");
questionSet.setAttribute("style", "visibility: hidden;");
welcomeScreen.setAttribute("style", "display: flex;");


//Identifying positions for question data in questionSet section
var choice1 = document.getElementById("option-1");
var choice2 = document.getElementById("option-2");
var choice3 = document.getElementById("option-3");
var choice4 = document.getElementById("option-4");
var questionHeading = document.getElementById("question-heading");
var answerTextEl = document.getElementById("check-answer");

//Create variables for questions that appear - an array of the question sets
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


//Tutor support needed to add this currentQuestion array in order to link the array to the textContent
var currentQuestionIndex = 0;

//event listener to activate function on startBtn WORKS!
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startButton.disabled = true;
  welcomeScreen.style.display = "none";
  questionSet.style.visibility = "visible";
  
  renderQuestion();
  setTime();
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
var score = 0;

//add event listener to activate choices
choices.addEventListener("click", function (event) {
  var guess = event.target.textContent;

  if (guess === questions[currentQuestionIndex].answer) {
     console.log("CORRECT!") 
     score ++;
     console.log(score);
   
     answerTextEl.textContent = "CORRECT!";
     setTimeout(clearMessage, 500);
     function clearMessage() {
     answerTextEl.textContent = "  ";
     }    

  } else {
      console.log("WRONG!!!");
      answerTextEl.textContent = "WRONG!";
      setTimeout(clearMessage, 500);
      function clearMessage() {
      answerTextEl.textContent = "  ";
      }
      if (secondsLeft > 10) {
      secondsLeft = secondsLeft - 10;
      }
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
var secondsLeft = 70;

function gameOver() {
  questionSet.style.display = "none";
  gameOverContainer.style.visibility = "visible";
  
  //finalScore is the position to put text
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = score;  
}


//Add timer to count down by ones
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0 || gameOverContainer.style.visibility === "visible"){
      clearInterval(timerInterval);
      gameOver();
    } 
  }, 1000);
}

//Make array to hold high scores
var highScores = [];

//store highScores
function storeHighScore() {
  //collect player initials data from input
  var uncasedPlayerInitials = initialsInput.value
    //convert to upper case
  var playerInitials = uncasedPlayerInitials.toUpperCase();
  var playerData = {
    initials: "",
    score: 0
  };
  playerData.initials = playerInitials;
  playerData.score = score;  

  if (playerData.score > highScores) {
    highScores.push(playerData.score);
    console.log(highScores);
    console.log("High score" + highScores);
  } else {
    console.log("try again");
    var sendMessageTag = document.createElement("li");
    sendMessageTag.textContent = "No high score. Refresh to try again."
    var scoreBoard = document.getElementById("high-scores");
    scoreBoard.appendChild(sendMessageTag);
    return;
  }
  localStorage.setItem("playerData", JSON.stringify(playerData));
  //clear input 
  initialsInput.value = ' ';
}

//render data to high score board screen

function renderHighScoreBoard() {
  var storedScores = JSON.parse(localStorage.getItem("playerData"));
  //create array to hold parsed items
  console.log(storedScores);
  var returnedScores = [];
  returnedScores.push(storedScores);
  //add validation that storedScore is not empty  
  if (returnedScores !== null) {
    //create the new element using tag
    var scoreTag = document.createElement("li");
    //add text to new element
    scoreTag.textContent = storedScores.initials + "_________" + storedScores.score;
    //identify position to append
    var scoreBoard = document.getElementById("high-scores");
    //append child
    scoreBoard.appendChild(scoreTag);
  }
}

saveHighScore.addEventListener("click", function (event) {
  event.preventDefault();
    //test if saveHighScore works using console.log
  storeHighScore();
  renderHighScoreBoard();
   // show highscores screen
  gameOverContainer.setAttribute("style", "display: none;");
  highScoresContainer.setAttribute("style", "visibility: visible;");
  //disable high scores button to prevent clicking and further activation 
  highScoresLink.disabled = true;
});

highScoresLink.addEventListener("click", function() {
  highScoresLink.disabled = true;
  questionSet.style.display = "none";
  gameOverContainer.style.display = "none";
  highScoresContainer.setAttribute("style", "visibility: visible;");
  welcomeScreen.setAttribute("style", "display: none;");
  renderHighScoreBoard();
});