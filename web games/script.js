'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const showModalButton = document.querySelectorAll('.show-modal');
const play = document.querySelector('.play');
const rules = document.querySelector('.game-rules');

let game = '';

const openModal = gameName => {
  // only removing class will handle everything
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  game = gameName;
  if (game === 'Guess The Number')
    rules.textContent = `
  1.Guess any number between 1 and 20
  2.Enter that inside textbox
  3.You can also use up and down arrow of textbox to enter number
  4.Once entered, hit Check button and you will see a number in place of ? symbol
  5.If you number matches then one point will be increment in score and highscore will be added
  6.If number don't match then 1 point will be reduced from scores
  7.When player reaches 20 then they won the game and if comes down to 0 then game is lost
  8.Hit Again button to play again
  `;
  else if (game === 'Roll A Dice')
    rules.textContent = `
  1.Game starts with player1, click on ROLL DICE
  2.The dice will appear showing some number which will be added to current score
  3.Continue rolling until get 1, all scores will be added to current score
  4.After getting 1, whole score will reduce to 0 and player2 can start playing
  5.However if player1 click on HOLD before getting any 1 number on dice then scores will be saved and player2 will start playing
  6.This same rule will be applicable to both players
  7.The player who scores 100 first, is the winner on the game.
  8.Click on NEW GAME to play again
  `;
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const playGame = () => {
  if (game === 'Guess The Number')
    window.location.replace('guess-my-number/index.html');
  else if (game === 'Roll A Dice')
    window.location.replace('dice-game/index.html');
};

showModalButton.forEach(show => {
  show.addEventListener('click', function () {
    openModal(show.textContent);
  });
});

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
play.addEventListener('click', playGame);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  //   else openModal();
});
