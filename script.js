'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct!!!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// function updatescore() {
//   document.querySelector('.score').textContent = score;
// }

// let.highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ no number';
  } else if (guess === secretNumber) {
    // highscore++;
    document.querySelector('.message').textContent = 'Correct!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //challange
    // document.querySelector('.highscore').textContent = highscore;
    // if (guess === secretNumber) {
    // document.querySelector('.highscore').textContent

    // }

    // document.querySelector('.score').textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber? 'Too high':'Too Low' ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You are a looser🤪';
      document.querySelector('.score').textContent = 0;
      highscore != score;
    }

};
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset the score to its initial value
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
// document.querySelector('.highscore').textContent = highscore;

// let highscore = 0;
// document.querySelector('.highscore').addEventListener('click', function() {
//   if (guess === secretNumber) {
//     let highscore =+ 1;
//   }

// the highscore should be implemented when the secret number is found
//  like if secret number is equal to correct 3 credit should be added .
// in order to do that i should first try to find the code to write
// document.querySelector('.highscore').textContent = ;
