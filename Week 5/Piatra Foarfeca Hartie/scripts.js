"use strict";

const handUser = document.querySelector(`.left--1`);
const handComp = document.querySelector(`.right--1`);
const scoreUser = document.querySelector(`.num-user`);
const scoreComp = document.querySelector(`.num-comp`);
const playBtn = document.querySelector(`.play`);
const tryAgainBtn = document.querySelector(`.try-again`);
const winnerUser = document.querySelector(`.winnerU`);
const winnerComp = document.querySelector(`.winnerC`);

const animationHandLeft = [
  { transform: `translate(5px, 50px) rotate(50deg)` },
  { transform: `translate(-5px, -25px) rotate(-50deg)` },
  { transform: `translate(5px, 25px) rotate(50deg)` },
  { transform: `translate(-5px, -50px) rotate(-50deg)` },
  { transform: `translate(5px, 25px) rotate(50deg)` },
  { transform: `translate(-5px, -50px) rotate(-50deg)` },
];
const animationHandRight = [
  { transform: `translate(50px, 5px) rotate(50deg)` },
  { transform: `translate(-25px, -5px) rotate(-50deg)` },
  { transform: `translate(25px, 5px) rotate(50deg)` },
  { transform: `translate(-50px, -5px) rotate(-50deg)` },
  { transform: `translate(25px, 5px) rotate(50deg)` },
  { transform: `translate(-50px, -5px) rotate(-50deg)` },
];

const animationTime = {
  duration: 2000,
  iterations: 1,
};

let scoreU = 0;
let scoreC = 0;
let playing = true;

playBtn.addEventListener(`click`, function () {
  if (playing) {
    handUser.animate(animationHandLeft, animationTime);
    handComp.animate(animationHandRight, animationTime);
    const handRandUser = Math.trunc(Math.random() * 3) + 1;
    handUser.src = `left--${handRandUser}.png`;
    const handRandComp = Math.trunc(Math.random() * 3) + 1;
    handComp.src = `right--${handRandComp}.png`;
    if (handRandUser === 1 && handRandComp === 2) {
      scoreU += 1;
      scoreUser.textContent = scoreU;
    } else if (handRandUser === 1 && handRandComp === 3) {
      scoreC += 1;
      scoreComp.textContent = scoreC;
    } else if (handRandUser === 2 && handRandComp === 1) {
      scoreC += 1;
      scoreComp.textContent = scoreC;
    } else if (handRandUser === 2 && handRandComp === 3) {
      scoreU += 1;
      scoreUser.textContent = scoreU;
    } else if (handRandUser === 3 && handRandComp === 1) {
      scoreU += 1;
      scoreUser.textContent = scoreU;
    } else if (handRandUser === 3 && handRandComp === 2) {
      scoreC += 1;
      scoreComp.textContent = scoreC;
    }
    if (scoreU >= 5) {
      playing = false;
      winnerUser.classList.remove(`hide`);
    } else if (scoreC >= 5) {
      playing = false;
      winnerComp.classList.remove(`hide`);
    }
  }
});

tryAgainBtn.addEventListener(`click`, function () {
  winnerComp.classList.add(`hide`);
  winnerUser.classList.add(`hide`);
  playing = true;
  scoreC = 0;
  scoreU = 0;
  scoreUser.textContent = 0;
  scoreComp.textContent = 0;
});
