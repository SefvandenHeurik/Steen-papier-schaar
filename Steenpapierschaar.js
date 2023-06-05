// Span elements
const humanOutput = document.querySelector("#human");
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze";

// button click event
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

let humanChoice = "";
let computerChoice = "";
let resultChoice = "";

humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze"

const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result")

steenBtn.addEventListener("click", function (event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'steen';
  }
  if (randomNumber === 2) {
    computerChoice = 'schaar';
  }
  if (randomNumber === 3) {
    computerChoice = 'papier';
  }
  computerOutput.innerHTML = computerChoice
  if (computerChoice === 'steen' && humanChoice === 'steen') {
    resultChoice = "gelijk";
  }
  if ( computerChoice === 'papier' && humanChoice === 'steen') {
    resultChoice = "computer wint";
    }
  if ( computerChoice === 'schaar' && humanChoice === 'steen') {
      resultChoice = "jij wint";
    }
  resultOutput.innerHTML = resultChoice

});

papierBtn.addEventListener("click", function (event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'steen';
  }
  if (randomNumber === 2) {
    computerChoice = 'schaar';
  }
  if (randomNumber === 3) {
    computerChoice = 'papier';
  }
  computerOutput.innerHTML = computerChoice

  if (computerChoice === 'papier' && humanChoice === 'papier') {
    resultChoice = "gelijk";
  }
  if (computerChoice === 'schaar' && humanChoice === 'papier') {
    resultChoice = "computer wint";
  }
  if (computerChoice === 'steen' && humanChoice === 'papier') {
    resultChoice = "jij wint";
  }

  resultOutput.innerHTML = resultChoice

});

schaarBtn.addEventListener("click", function (event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'steen';
  }
  if (randomNumber === 2) {
    computerChoice = 'schaar';
  }
  if (randomNumber === 3) {
    computerChoice = 'papier';
  }
  computerOutput.innerHTML = computerChoice

  if (computerChoice === 'steen' && humanChoice === 'schaar') {
    resultChoice = "computer wint";
  }
  if (computerChoice === 'papier' && humanChoice === 'schaar') {
    resultChoice = "jij wint";
  }
  if (computerChoice === 'schaar' && humanChoice === 'schaar') {
    resultChoice = "gelijk";
  }

  resultOutput.innerHTML = resultChoice
});


