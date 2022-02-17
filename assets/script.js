//variable declarations
var startButton = document.querySelector(".start-button");
var submitButton = document.querySelector("#name-btn");
var intro = document.querySelector(".intro");
var startQuiz = document.querySelector(".start-quiz");
var userInit = document.querySelector(".user-initials");
var userInitials = document.querySelector("#initials");
var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var clockId = null;
userScore = 0;
var ans1 = document.querySelector("#a1");
var ans2 = document.querySelector("#a2");
var ans3 = document.querySelector("#a3");
var ans4 = document.querySelector("#a4");
//starting index position for first question
var qIndex = 0;
//questions and answers
var questionArray = [
  {
    title: "What does JS stand for?",
    answers: ["JoeSmith", "JavaScript", "JohnScena", "JustSign"],

    solution: "JavaScript",
  },
  {
    title: "What does CSS stand for?",

    answers: [
      "Cascading Software Style",
      "Coffee Sugar Sweetcream",
      "Cascading Style Sheets",
      "Carry Some Salt",
    ],

    solution: "Cascading Style Sheets",
  },
  {
    title: "Where do we insert links to CSS in the HTML doc?",

    answers: ["Body", "Head", "Main", "Section"],

    solution: "Head",
  },
  {
    title: "Which languages have we implemented to make this quiz?",

    answers: ["HTML", "CSS", "JS", "All of the Above"],

    solution: "All of the Above",
  },
  {
    title: "What is the capital of Colorado?",

    answers: ["Colorado Springs", "Fort Collins", "Denver", "Boulder"],

    solution: "Denver",
  },
  //added blank array to prevent error message from popping up once the Colorado question is asked.
  {
    title: "blank",
    answers: "blank",
    solution: "blank",
  },
];

//number of questions *10 will give the time allotted for the quiz
var timeRemaining = questionArray.length * 5;
//On page load, hide everything but the intro page.

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
  userPick();
}
//Countdown timer / 1second interval
function countdown() {
  timer.textContent = timeRemaining;
  timeRemaining = timeRemaining - 1;

  if (timeRemaining <= 0) {
    timer.textContent = "0";
    endGame();
  }
}

//function for displaying questions and answers with buttons
function populateFields() {
  var question = document.querySelector("#question-prompt");
  var options = document.querySelector("#answers");

  question.textContent = "Question " + (qIndex + 1);
  options.textContent = questionArray[qIndex].title;
  //   console.log(title);
  for (i = 0; i < 4; i++) {
    var button = document.querySelector("#a" + (i + 1));
    console.log(button);
    button.textContent = questionArray[qIndex].answers[i];
  }

  qIndex++;
  //after we iterate through the entire question array, end the game
  if (qIndex === 6) {
    endGame();
  }
}

//endQuiz function to hide questions array, make highscore visible and log scores to localStorage with a prompt to enter initials
function endGame() {
  intro.style.display = "none";
  startQuiz.style.display = "none";
  userInit.style.display = "none";
  highscore.style.display = "block";
  console.log(userScore);
  function storeInitials(event) {
    event.preventDefault();
    var initValue = userInitials;
    var initScore = userScore;
    document.querySelector("#initials").textContent = initValue;
    document.querySelector("#score").textContent = initScore;
  }
  submitButton.addEventListener("click", storeInitials);
}

//when user clicks one of the answers, the next question will be displayed
function userPick() {
  ans1.addEventListener("click", function () {
    var userChoice = this.innerHTML;
    var correctChoice = questionArray[qIndex - 1].solution;
    if (userChoice === correctChoice) {
      timeRemaining += 10;
      userScore += 1;
      populateFields();
    } else {
      timeRemaining -= 10;
      userScore -= 1;
      populateFields();
    }
  });
  ans2.addEventListener("click", function () {
    var userChoice = this.innerHTML;
    var correctChoice = questionArray[qIndex - 1].solution;
    if (userChoice === correctChoice) {
      timeRemaining += 10;
      userScore += 1;
      populateFields();
    } else {
      timeRemaining -= 10;
      userScore -= 1;
      populateFields();
    }
  });
  ans3.addEventListener("click", function () {
    var userChoice = this.innerHTML;
    var correctChoice = questionArray[qIndex - 1].solution;
    if (userChoice === correctChoice) {
      timeRemaining += 10;
      userScore += 1;
      populateFields();
    } else {
      timeRemaining -= 10;
      userScore -= 1;
      populateFields();
    }
  });
  ans4.addEventListener("click", function () {
    var userChoice = this.innerHTML;
    var correctChoice = questionArray[qIndex - 1].solution;
    if (userChoice === correctChoice) {
      timeRemaining += 10;
      userScore += 1;
      populateFields();
    } else {
      timeRemaining -= 10;
      userScore -= 1;
      populateFields();
    }
  });
}
