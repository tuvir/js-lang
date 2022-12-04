'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Congratulations!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;
document.querySelector('.highscore').textContent = 11;
*/
const rightAnswer = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let score = 20;
let highScore = 0;
const displayAnswer = document.querySelector('.number');

function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess < 0) {
    message.textContent = 'Enter a number > 0';
  } else if (guess > rightAnswer) {
    displayHigher();
  } else if (guess < rightAnswer) {
    displayLower();
  } else if (guess === rightAnswer) {
    message.textContent = 'Right answer!';
    countHighScore();
    displayRightAnswer();
  }
}

function displayLower() {
  countScore();
  if (score > 0) {
    message.textContent = 'Too low';
  } else {
    message.textContent = 'You lose!';
  }
}

function displayHigher() {
  countScore();
  if (score > 0) {
    message.textContent = 'Too high';
  } else {
    message.textContent = 'You lose!';
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
    document.querySelector('.highscore').textContent = score;
  }
}

function displayRightAnswer() {
  displayAnswer.textContent = rightAnswer;
  document.querySelector('body').style.backgroundColor = '#60b347';
}

document.querySelector('.check').addEventListener('click', checkGuess);
