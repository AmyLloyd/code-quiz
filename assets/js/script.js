var questionSetA = {
    question1: "What is the meaning of .trim?",
    choice1: "Cut the code from the page.",
    choice2: "Remove the white space after the characters.",
    answer: "Remove the white space after the characters.",
}

var questionSetB = {
    question1: "What is the meanign of .split?",
    choice1: "Split the function in two.",
    choice2: "Split the array into individual parts or characters.",
    answer: "Split the array into individual parts or characters.",
}
var startButton = document.getElementById("start-button");

var welcomeScreen = document.getElementById("welcome-screen");
console.log(welcomeScreen);

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("start button is working");
    startButton.disabled = true; 
//works!
})

var innerHTML =document.getElementById("innerHTML");
console.log(innerHTML);


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