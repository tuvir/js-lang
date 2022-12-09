'use strict';
let player1TotalScore = 0;
let player2TotalScore = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let diceRoll = Math.trunc(Math.random() * 6) + 1;

document.querySelector('#score--0').textContent = player1TotalScore;
document.querySelector('#score--1').textContent = player2TotalScore;
document.querySelector('#current--0').textContent = player1CurrentScore;
document.querySelector('#current--1').textContent = player2CurrentScore;

document.querySelector('.btn--roll').addEventListener('click', startGame);
