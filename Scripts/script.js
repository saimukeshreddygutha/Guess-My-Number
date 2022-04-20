"use strictmode";

let myNum = Math.trunc(Math.random() * 100 + 1);

let score = 10;
let maxScore = 0;

const setMessage = function (message) {
  document.querySelector(".board").textContent = message;
};

const setTempScore = function () {
  document.querySelector(".temp-score").textContent = score;
};

const setMaxScore = function () {
  document.querySelector(".max-score").textContent = maxScore;
};

const playAgain = function () {
  score = 10;
  myNum = Math.trunc(Math.random() * 100 + 1);
  document.querySelector(".my-num").style.color = "#f7ff56";
  document.querySelector(".my-num").textContent = "?";
  setMessage("Start guessing the number 😀");
  setTempScore();
  return;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessed = Number(document.querySelector(".input-guessed-number").value);

  if (score > 1) {
    if (!guessed) {
      setMessage("Input a valid number");
    } else if (guessed === myNum) {
      document.querySelector(".my-num").style.color = "gold";
      document.querySelector(".my-num").textContent = myNum;
      setMessage("Correct Answer!");
      maxScore = Math.max(maxScore, score);
      setMaxScore();
    } else if (guessed > myNum) {
      setMessage("Number entered is too high!");
      score--;
    } else {
      setMessage("Number entered is too low!");
      score--;
    }
  } else {
    setMessage("Sorry you lost the game!");
    score = 0;
  }
  setTempScore();
});

document.querySelector(".play-again").addEventListener("click", playAgain);

document.querySelector(".reset").addEventListener("click", function () {
  playAgain();
  maxScore = 0;
  setMaxScore();
});
