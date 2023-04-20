document.addEventListener("DOMContentLoaded", function() {
let guesses = 0;
let maxGuesses = 10;
let brasilScore = 0;
let alemanhaScore = 0;
let result = "";
let tips = "";

const form = document.getElementById("game-form");
const brasilInput = document.getElementById("brasil-score");
const alemanhaInput = document.getElementById("alemanha-score");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const resultDisplay = document.getElementById("result");
const tipsDisplay = document.getElementById("tips");

function generateScores() {
    brasilScore = Math.floor(Math.random() * 11);
    alemanhaScore = Math.floor(Math.random() * 11);
}

function restartGame() {
    guesses = 0;
    result = "";
    tips = "";
    brasilInput.value = "";
    alemanhaInput.value = "";
    resultDisplay.textContent = "";
    tipsDisplay.textContent = "";
    form.classList.remove("disabled");
    submitButton.disabled = false;
    brasilInput.disabled = false;
    alemanhaInput.disabled = false;
    submitButton.focus();
    generateScores();
}

function checkGuess() {
  tips = "";
  guesses++;

  const brasilGuess = parseInt(brasilInput.value);
  const alemanhaGuess = parseInt(alemanhaInput.value);

  const scores = [brasilScore, alemanhaScore];
  const guessesArr = [brasilGuess, alemanhaGuess];
  const teamNames = ["Brasil", "Alemanha"];

  let correctGuesses = 0;

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    const guess = guessesArr[i];
    const teamName = teamNames[i];

    if (guess === score) {
      tips += `Seu palpite para o placar do ${teamName} está correto. `;
      correctGuesses++;
    } else if (guess > score) {
      tips += `Seu palpite para o placar do ${teamName} é alto. `;
    } else {
      tips += `Seu palpite para o placar do ${teamName} é baixo. `;
    }
  }

  if (correctGuesses === 2) {
    result = "Você acertou!";
    form.classList.add("disabled");
    submitButton.disabled = true;
    brasilInput.disabled = true;
    alemanhaInput.disabled = true;
    restartButton.focus();
  } else if (guesses >= maxGuesses) {
    result = "Fim de jogo!";
    form.classList.add("disabled");
    submitButton.disabled = true;
    brasilInput.disabled = true;
    alemanhaInput.disabled = true;
    restartButton.focus();
  }

  resultDisplay.textContent = result;
  tipsDisplay.textContent = tips;

  brasilInput.focus();
  brasilInput.select();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkGuess();
});

restartButton.addEventListener("click", function() {
    restartGame();
});

generateScores();
restartButton.click();
})
