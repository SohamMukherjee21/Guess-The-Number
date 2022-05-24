'use strict';
let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let keyword is used instead of const as we're changing the secret number everytime an user clicks on 'again' without reloading the page to a new one

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Not a valid number 😥😣😥😣';
  } else if (guess === secretNumber) {
    document.querySelector('.hi').innerHTML="Correct guess 😍😎😎😍";
    document.querySelector('.message').textContent =
      'Yay! you guessed correctly 😍😍😍😍🤩';
    document.querySelector('.number').textContent = secretNumber;
    // Because of this the secret number gets displayed only when the user guesses it correctly
    document.querySelector('body').style.backgroundColor = 'rgb(250, 128, 114)';
    document.querySelector('.number').style.width = '30rem';
    //Above 2 lines are manipulating the styles
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Guess lower!🤨🤔🤔' : 'Guess higher!😒😒';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Nah! you lost the game 😢😢';
      document.querySelector('.score').textContent = 0;
    }
  } //else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess lower!🤨🤔🤔';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Nah! you lost the game 😢😢';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess higher!😒😒';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Nah! you lost the game 😢😢';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //If we don't set the secretNumber again,it'll remain the same even on clicking 'again' because we're not reloading the page again , so we need to set the secretNumber again,as we want a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(73,52,235)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
});
