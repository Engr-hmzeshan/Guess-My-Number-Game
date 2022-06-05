'use strict';
/*
document.querySelector('.message').textContent;
const updated = (document.querySelector('.message').textContent =
  "let's jump in!!");
console.log(updated);

console.log((document.querySelector('.label-score').textContent = 10));
console.log(
  (document.querySelector('.between').textContent = '1 or 20 ky darmyan')
);
console.log((document.querySelector('.guess').value = 20));
*/
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  // 1. Validation of input(right shape, right type)
  // if we simply click on the check button without any number simply return -> No number
  //
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) document.querySelector('.message').textContent = 'No number!';
  // 2. Input number vs random number
  // input = randomNo. => Correct number
  if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.highscore').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Manipulating style(CSS) in DOM
    // structure:  get element --> select document type(styleor CSS) --> specified property(i.e Background color) --> = 'type in string'.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // input < randomNo. => Too Low!
  else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // input > randomNo. => Too High!
  else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset Button or Again Button
// addEventListener --> 1. type of event 2. what to do(here function is called by javascript engines when click on the event);
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = score;
  document.querySelector('.guess').value = '';
});
