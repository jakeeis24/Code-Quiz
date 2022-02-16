//variable declarations
var startButton = document.querySelector(".start-button");
var intro = document.querySelector(".intro");
var startQuiz = document.querySelector(".start-quiz");
var inputInit = document.querySelector(".input-initial");
var highscore = document.querySelector(".highscore");
var timer = document.querySelector("#timer");
var clockId = null;
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
startButton.addEventListener("click", function () {
  intro.classList.add("invisible");
  startQuiz.classList.remove("invisible");
  showQuestions();
  clockId = setInterval(countdown, 1000);
});
//Countdown timer / 1second interval
function countdown() {
  timer.textContent = timeRemaining;
  timeRemaining = timeRemaining - 1;
}

//endQuiz function to hide questions array, make highscore visible and log scores to localStorage with a prompt to enter initials
function endQuiz() {
  //remove quiz from the page
  startQuiz.classList.add("invisible");
  //add highscores to the page
  highscore.classList.remove("invisible");
}

//display questions and options from the questions array
function showQuestions() {
  startQuiz.innerHTML = `
     <h1>${questionArray[index].title}</h1>
      <ol>
        <li><button class = "answer-btn">${questionArray[index].options[0]}</button></li>
        <li><button class = "answer-btn">${questionArray[index].options[1]}</button></li>
        <li><button class = "answer-btn">${questionArray[index].options[2]}</button></li>
        <li><button class = "answer-btn">${questionArray[index].options[3]}</button></li>
      </ol>
    `;
  var button = document.querySelectorAll(".answer-btn");
  console.log(button);
  //when user clicks one of the answers, the next question will be displayed
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      showQuestions();
      index = index + 1;

      //   if ((index = 5)) {
      //     endQuiz();
      //   }
    });

    //after we iterate through the entire question array, end the game
  }
}
endQuiz();
