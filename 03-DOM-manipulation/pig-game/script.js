'use strict';
// Global variables of players scores
let player0TotalScore = 0;
let player1TotalScore = 0;
let player0CurrentScore = 0;
let player1CurrentScore = 0;

let activePlayer = 0;
let currentScore = 0;
// Variables of score and dice elements
const player0TotalScoreEl = document.querySelector('#score--0');
const player1TotalScoreEl = document.querySelector('#score--1');
const player0CurrentScoreEl = document.querySelector('#current--0');
const player1CurrentScoreEl = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

player0TotalScoreEl.textContent = player0TotalScore;
player1TotalScoreEl.textContent = player1TotalScore;
player1CurrentScoreEl.textContent = player1CurrentScore;

// Event handlers
document.querySelector('.btn--roll').addEventListener('click', rollDice);

function rollDice() {
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  displayDice(diceRoll);
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    // CHANGE LATER
  } else {
  }
}

function displayDice(diceRoll) {
  diceEl.classList.remove('hidden');
  diceEl.src = `dices-img/dice-${diceRoll}.png`;
}
