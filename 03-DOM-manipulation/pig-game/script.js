'use strict';
// Global variables of players scores
let player1TotalScore = 0;
let player2TotalScore = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;

// Variables of score and dice elements
const player1TotalScoreEl = document.querySelector('#score--0');
const player2TotalScoreEl = document.querySelector('#score--1');
const player1CurrentScoreEl = document.querySelector('#current--0');
const player2CurrentScoreEl = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

player1TotalScoreEl.textContent = player1TotalScore;
player2TotalScoreEl.textContent = player2TotalScore;
player2CurrentScoreEl.textContent = player2CurrentScore;

// Event handlers
document.querySelector('.btn--roll').addEventListener('click', rollDice);

function rollDice() {
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  displayDice(diceRoll);
  if (diceRoll !== 1) {
    player1CurrentScore += diceRoll;
    player1CurrentScoreEl.textContent = player1CurrentScore;
    // CHANGE LATER
  }
}

function displayDice(diceRoll) {
  diceEl.classList.remove('hidden');
  diceEl.src = `dices-img/dice-${diceRoll}.png`;
}
