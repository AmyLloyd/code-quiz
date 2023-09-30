
var questionSet = document.getElementById("question-set");

//Tutor: Would like Questionset hidden at load
window.addEventListener("load", function() {
    questionSet.style.visibility = "hidden";
    console.log("Check");
});     

//Create variables for what appears at innerHTML
var questionContent = {
    question: "What is the meaning of the method .split?",
    choice1: "Split the function in two.",
    choice2: "Split the array into individual parts or characters.",
    choice3: "Split the array into halves.",
    answer: "Split the array into individual parts or characters.",
}
console.log(questionContent.question1);
var highScores = [];

var welcomeScreen = document.getElementById("welcome-screen");
console.log(welcomeScreen);


//Variable for startButton
var startButton = document.getElementById("start-button");

//variable for questionSet so that it can be inputed by DOM
var questionSet = document.createElement("div");
questionSet.innerHTML = "This is where this is inserted";
document.getElementById("innerHTML").appendChild(questionSet);

//Write questionContent data to page
var choice1 = document.getElementById("option-1");
var choice2 = document.getElementById("option-2");
var choice3 = document.getElementById("option-3");
var questionHeading = document.getElementById("question-heading");
var answer = document.getElementById("check-answer");
choice1.textContent = questionContent.choice1;
choice2.textContent = questionContent.choice2;
choice3.textContent = questionContent.choice3;
questionHeading.textContent = questionContent.question;
answer.textContent = questionContent.answer;

console.log(choice1.textContent);

//event listener to activate function
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("start button is working");
    startButton.disabled = true;
    welcomeScreen.style.display = "none";
    questionSet.style.visibility = "visible";

//works!
})

var choiceList = document.querySelector(".choice");
console.log(choiceList);

function checkAnswer() {
    console.log("working");
    if (choice1.textContent === questionContent.answer) {
        console.log("correct");
    } else {
        console.log("wrong, try again");
    }
    return;
}

checkAnswer();

//event listener to activate pressing answer
// choice1.addEventListener("click", checkAnswer()) {
//     if (choice1.value === questionContent.answer.value) {
//         console.log("choice1");
//         answer.style.visibility = "visible";
//     }
// }




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