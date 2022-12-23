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
const currentScoreEl = document.querySelector(`#current--${activePlayer}`);
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

player0TotalScoreEl.textContent = player0TotalScore;
player1TotalScoreEl.textContent = player1TotalScore;
player1CurrentScoreEl.textContent = player1CurrentScore;

// Event handlers
rollBtn.addEventListener('click', rollDice);

function rollDice() {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  displayDice(diceRoll);
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    currentScoreEl.textContent = currentScore;
    // CHANGE LATER
  } else {
  }
}

function displayDice(diceRoll) {
  diceEl.classList.remove('hidden');
  diceEl.src = `dices-img/dice-${diceRoll}.png`;
}
