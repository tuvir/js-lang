'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Congratulations!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;
document.querySelector('.highscore').textContent = 11;
*/
const message = document.querySelector('.message');
const displayAnswer = document.querySelector('.number');
const loseMessage = 'You lose!';

let rightAnswer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess < 0) {
    message.textContent = 'Enter a number > 0';
  } else if (guess > rightAnswer) {
    displayHigher();
  } else if (guess < rightAnswer) {
    displayLower();
  } else if (guess === rightAnswer) {
    countHighScore();
    displayRightAnswer();
  }
}

function displayLower() {
  countScore();
  if (score > 0) {
    message.textContent = 'Too low';
  } else {
    message.textContent = loseMessage;
  }
}

function displayHigher() {
  countScore();
  if (score > 0) {
    message.textContent = 'Too high';
  } else {
    message.textContent = loseMessage;
  }
}

function countScore() {
  if (score > 0) {
    score--;
    document.querySelector('.score').textContent = score;
  }
}

function countHighScore() {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

function displayRightAnswer() {
  displayAnswer.textContent = rightAnswer;
  message.textContent = 'Right answer!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

function restartGame() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayAnswer.textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  rightAnswer = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', restartGame);
