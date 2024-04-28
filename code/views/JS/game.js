let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newGame = document.getElementById("newGame");
let game = document.querySelector(".game");
let winnerText = document.querySelector(".winnerText");
let container = document.querySelector(".container");
let turnX = true;
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let disabled = () => {
  box.disabled = true;
};

resetBtn.addEventListener("click", () => {
  turnX = true;
  disabledBoxes();
});

let disabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
