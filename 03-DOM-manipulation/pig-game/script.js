'use strict';
// Global variables of players scores
let player0TotalScore = 0;
let player1TotalScore = 0;
let player0CurrentScore = 0;
let player1CurrentScore = 0;

let activePlayer = 0;
let currentScore = 0;

// Array which stores total scores of each players
const totalScoresArr = [0, 0];

// Variable which determines the winning total score
const scoreToWin = 10;

// State variable that check if game is finishe or not
let gamePlaying = true;

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

const player0SideEl = document.querySelector('.player--0');
const player1SideEl = document.querySelector('.player--1');

player0TotalScoreEl.textContent = player0TotalScore;
player1TotalScoreEl.textContent = player1TotalScore;
player1CurrentScoreEl.textContent = player1CurrentScore;

// Event handlers
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);

function rollDice() {
  if (gamePlaying) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    displayDice(diceRoll);
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
}

function displayDice(diceRoll) {
  diceEl.classList.remove('hidden');
  diceEl.src = `dices-img/dice-${diceRoll}.png`;
}

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document;
  currentScore = 0;
  player0SideEl.classList.toggle('player--active');
  player1SideEl.classList.toggle('player--active');
}

function holdScore() {
  if (gamePlaying) {
    totalScoresArr[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScoresArr[activePlayer];
    if (totalScoresArr[activePlayer] >= scoreToWin) {
      finishGame();
    } else {
      switchPlayer();
    }
  }
}

function finishGame() {
  gamePlaying = false;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  // rollBtn.removeEventListener('click', rollDice);
  // holdBtn.removeEventListener('click', holdScore);
}
