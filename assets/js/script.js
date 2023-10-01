
var questionSet = document.getElementById("question-set");

//Tutor: Would like Questionset hidden at load
window.addEventListener("load", function() {
    questionSet.style.visibility = "hidden";
    answerTextEl.style.visibility = "hidden";
});     

//Create variables for what appears at innerHTML
var question1 = {
    question: "What is .include?",
    choice1: "Looks for the value within the array. True if present.",
    choice2: "Used to push another value into an array",
    choice3: "Looks for a character within an array", 
    answer: "Looks for the value within the array. True if present.",
}

var question2 = {
    question: "What is the meaning of the method .split?", 
    choice1: "Split the function in two.", 
    choice2: "Split the array into individual parts or characters.",
    choice3: "Split the array into halves.",
    answer: "Split the array into individual parts or characters.",
}
var question3 = {
    question: "What is .splice?",
    choice1: "Cuts an array in helf and stores the values in local storage.",
    choice2: "Cuts a series of values out of the array using the defined parameters.",
    choice3: "An icecream you buy from the shop.",
    answer: "Cuts a series of values out of the array using the defined parameters.",
}

var welcomeScreen = document.getElementById("welcome-screen");

//Variable for startButton
var startButton = document.getElementById("start-button");

//Write question1 data to page
var choice1 = document.getElementById("option-1");
var choice2 = document.getElementById("option-2");
var choice3 = document.getElementById("option-3");
var questionHeading = document.getElementById("question-heading");
var answerTextEl = document.getElementById("check-answer");
choice1.textContent = question1.choice1[0];
choice2.textContent = question1.choice2[0];
choice3.textContent = question1.choice3[0];
questionHeading.textContent = question1.question[0];
answerTextEl.textContent = question1.answer[0];



//event listener to activate function WORKS!
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startButton.disabled = true;
    welcomeScreen.style.display = "none";
    questionSet.style.visibility = "visible";
})

var choiceList = document.getElementById("choice-list");

//event listener to activate pressing answer - WORKS!
choiceList.addEventListener("click", function(event) {
    var clickedEl = event.target;
    if (clickedEl.textContent === question1.answer[0]) {
        answerTextEl.style.visibility = "visible";
        answerTextEl.textContent = "That's right! " + question1.answer[0];
        console.log(question1.question[0]);
    } else {
        answerTextEl.style.visibility = "visible";
        answerTextEl.textContent = "Study harder or you will fail!";
    }
});





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