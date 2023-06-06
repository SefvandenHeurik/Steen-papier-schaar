// Span elements
const humanOutput = document.querySelector("#human");
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze";

// button click event
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");


humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze";

const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

function computerChoiceF() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = 'steen';
      break;
    case 2:
      computerChoice = 'schaar';
      break;
    case 3:
      computerChoice = 'papier';
      break;
  }
  computerOutput.innerHTML = computerChoice;
}

function resultChoiceF(humanChoice) {
  console.log(humanChoice);
}

steenBtn.addEventListener("click", function (event) {
  event.preventDefault();
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  computerChoiceF();
  resultChoiceF('steen');
  switch (true) {
    case computerChoice === 'steen' && humanChoice === 'steen':
      resultChoice = "gelijk";
      break;
    case computerChoice === 'papier' && humanChoice === 'steen':
      resultChoice = "computer wint";
      break;
    case computerChoice === 'schaar' && humanChoice === 'steen':
      resultChoice = "jij wint";
      break;
  }
  resultOutput.innerHTML = resultChoice;
});

papierBtn.addEventListener("click", function (event) {
  event.preventDefault();
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  computerChoiceF();
  switch (true) {
    case computerChoice === 'papier' && humanChoice === 'papier':
      resultChoice = "gelijk";
      break;
    case computerChoice === 'schaar' && humanChoice === 'papier':
      resultChoice = "computer wint";
      break;
    case computerChoice === 'steen' && humanChoice === 'papier':
      resultChoice = "jij wint";
      break;
  }
  resultOutput.innerHTML = resultChoice;
});

schaarBtn.addEventListener("click", function (event) {
  event.preventDefault();
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  computerChoiceF();
  switch (true) {
    case computerChoice === 'steen' && humanChoice === 'schaar':
      resultChoice = "computer wint";
      break;
    case computerChoice === 'papier' && humanChoice === 'schaar':
      resultChoice = "jij wint";
      break;
    case computerChoice === 'schaar' && humanChoice === 'schaar':
      resultChoice = "gelijk";
      break;
  }
  resultOutput.innerHTML = resultChoice;
});

// Function to update the high score
function updateHighScore() {
  const currentScore = 100; // Replace with your actual score value
  
  // Retrieve the previous high score from local storage
  const previousHighScore = localStorage.getItem("highScore");

  if (previousHighScore === null || currentScore > previousHighScore) {
    // If no previous high score or current score is higher, update the high score
    localStorage.setItem("highScore", currentScore);
    document.getElementById("highScore").textContent = currentScore;
    alert("Congratulations! New high score achieved!");
  } else {
    alert("Your score is not higher than the current high score.");
  }
}

// On page load, retrieve and display the high score from local storage
window.addEventListener("DOMContentLoaded", () => {
  const previousHighScore = localStorage.getItem("highScore");
  if (previousHighScore !== null) {
    document.getElementById("highScore").textContent = previousHighScore;
  }
});

