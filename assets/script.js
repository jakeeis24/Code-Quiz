//variable declarations
var startButton = document.querySelector(".start-button");
var intro = document.querySelector(".intro");
var startQuiz = document.querySelector(".start-quiz");
var userInit = document.querySelector(".user-initials");
var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var clockId = null;
var ans1 = document.querySelector("#a1");
var ans2 = document.querySelector("#a2");
var ans3 = document.querySelector("#a3");
var ans4 = document.querySelector("#a4");
//starting index position for first question
var index = 0;
//questions and answers
var questionArray = [
  {
    title: "What does JS stand for?",
    options: ["JavaScript", "JustSign", "JoeSmith", "JohnScena"],
    solution: "JavaScript",
  },
  {
    title: "What does CSS stand for?",
    options: [
      "Cascading Software Style",
      "Coffee Sugar Sweetcream",
      "Cascading Style Sheets",
      "Carry Some Salt",
    ],
    solution: "Cascading Style Sheets",
  },
  {
    title: "Where do we insert links to CSS in the HTML doc?",
    options: ["Body", "Head", "Main", "Section"],
    solution: "Head",
  },
  {
    title: "Which languages have we implemented to make this quiz?",
    options: ["HTML", "CSS", "JS", "All of the Above"],
    solution: "All of the Above",
  },
  {
    title: "What is the capital of Colorado?",
    options: ["Colorado Springs", "Fort Collins", "Denver", "Boulder"],
    solution: "Denver",
  },
];

//number of questions *10 will give the time allotted for the quiz
var timeRemaining = questionArray.length * 10;
//Once user clicks start button, hide the startup page and start the quiz and the timer

startQuiz.style.display = "none";
userInit.style.display = "none";
highscore.style.display = "none";

startButton.addEventListener("click", showQuestions);
//start quiz -- display questions and options from the questions array and hide the intro page
function showQuestions() {
  intro.style.display = "none";
  startQuiz.style.display = "block";
  userInit.style.display = "none";
  highscore.style.display = "none";
  populateFields();
  clockId = setInterval(countdown, 1000);
}
//Countdown timer / 1second interval
function countdown() {
  timer.textContent = timeRemaining;
  timeRemaining = timeRemaining - 1;
  //NEED TO ADD PENALTY AND REWARD
}
//function for displaying questions and answers with buttons
function populateFields() {
  var question = document.querySelector("#question-prompt");
  var answers = document.querySelector(".ans-btn");
  question.textContent = questionArray[index].title;
  answers.textContent = questionArray[index].options[index];
}
//endQuiz function to hide questions array, make highscore visible and log scores to localStorage with a prompt to enter initials
// function endQuiz() {}  //MAKE END FUNCTION

//when user clicks one of the answers, the next question will be displayed

//after we iterate through the entire question array, end the game
