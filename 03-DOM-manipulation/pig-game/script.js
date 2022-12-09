'use strict';
let player1TotalScore = 0;
let player2TotalScore = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let diceRoll = Math.trunc(Math.random() * 6) + 1;

const player1TotalScoreEl = document.querySelector('#score--0');
const player2TotalScoreEl = document.querySelector('#score--1');
player1TotalScoreEl.textContent = player1TotalScore;
player2TotalScoreEl.textContent = player2TotalScore;

const player1CurrentScoreEl = document.querySelector('#current--0');
const player2CurrentScoreEl = document.querySelector('#current--1');
player1CurrentScoreEl.textContent = player1CurrentScore;
player2CurrentScoreEl.textContent = player2CurrentScore;

document.querySelector('.btn--roll').addEventListener('click', rollDicePlayer1);

function rollDicePlayer1() {
  displayDice(diceRoll);
  while (1) {
    if (diceRoll != 1) {
      player1CurrentScore += diceRoll;
      diceRoll = Math.trunc(Math.random() * 6) + 1;
      displayDice(diceRoll);
    } else {
      player1CurrentScore = 0;
      break;
    }
  }
}

function displayDice(diceRoll) {}
