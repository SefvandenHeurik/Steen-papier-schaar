// Span elements
const humanOutput = document.querySelector("#human");
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze";

// button click event
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");


// button click event
const btns = document.querySelectorAll('button');

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


