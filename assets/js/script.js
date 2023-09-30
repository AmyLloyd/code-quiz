//Create variables for what appears at innerHTML
var questionSet = {
    question1: "What is the meanign of .split?",
    choice1: "Split the function in two.",
    choice2: "Split the array into individual parts or characters.",
    answer: "Split the array into individual parts or characters.",
}

var highScores = [];

var welcomeScreen = document.getElementById("welcome-screen");
console.log(welcomeScreen);
var questionSet = document.getElementById("question-set");

//Variable for startButton
var startButton = document.getElementById("start-button");

//variable for questionSet so that it can be inputed by DOM
var questionSet = document.createElement("div");
questionSet.innerHTML = "This is where this is inserted";
document.getElementById("innerHTML").appendChild(questionSet);


//event listener to activate function
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("start button is working");
    startButton.disabled = true;
    welcomeScreen.style.display = "none";
    questionSet.style.visibility = "visible";

//works!
})

//When the page loads questionSet is invisible






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