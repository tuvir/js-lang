'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Congratulations!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;
document.querySelector('.highscore').textContent = 11;
*/
const rightAnswer = Math.floor(Math.random() * (20 - 2) + 1);
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const displayAnswer = document.querySelector('.number');
console.log(displayAnswer.textContent);
function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'Enter a number';
  } else if (guess > rightAnswer) {
    message.textContent = 'Too hot';
    countScore();
  } else if (guess < rightAnswer) {
    message.textContent = 'Too cold';
    countScore();
  } else if (guess === rightAnswer) {
    message.textContent = 'Right answer!';
    countHighScore();
    displayRightAnswer();
  }
}

function countScore() {
  if (Number(score.textContent) > 0) {
    score.textContent -= 1;
  }
}

function countHighScore() {
  if (Number(score.textContent) > Number(highScore.textContent)) {
    highScore.textContent = score.textContent;
  }
}

function displayRightAnswer() {
  displayAnswer.textContent = rightAnswer;
}

document.querySelector('.check').addEventListener('click', checkGuess);
