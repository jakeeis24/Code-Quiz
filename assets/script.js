var startButton = document.querySelector(".start-button");
var intro = document.querySelector(".intro");
var startQuiz = document.querySelector(".start-quiz");
var inputInit = document.querySelector(".input-initial");
var highscore = document.querySelector(".highscore");
var timer = document.querySelector("#timer");
var clockId = null;
var index = 0;
var questionArray = [
  {
    title: "Question 1",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    solution: "Option 1",
  },
  {
    title: "Question 2",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    solution: "Option 3",
  },
  {
    title: "Question 3",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    solution: "Option 2",
  },
  {
    title: "Question 4",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    solution: "Option 1",
  },
  {
    title: "Question 5",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    solution: "Option 4",
  },
];
var timeRemaining = questionArray.length * 15;
startButton.addEventListener("click", function () {
  intro.classList.add("invisible");
  startQuiz.classList.remove("invisible");
  showQuestions();
  clockId = setInterval(countdown, 1000);
});
function countdown() {
  timer.textContent = timeRemaining;
  timeRemaining = timeRemaining - 1;
}
function showQuestions() {
  startQuiz.innerHTML = `
     <h2>${questionArray[index].title}</h2>
      <ol>
        <li><button>${questionArray[index].options[0]}</button></li>
        <li><button>${questionArray[index].options[1]}</button></li>
        <li><button>${questionArray[index].options[2]}</button></li>
        <li><button>${questionArray[index].options[3]}</button></li>
      </ol>
    `;
  var button = document.querySelectorAll("button");
  console.log(button);
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      index = index + 1;
      showQuestions();
    });
  }
}
