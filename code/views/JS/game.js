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

newGame.addEventListener("click", () => {
  winnerText.style.display = "none";
  newGame.style.display = "none";
  disabledBoxes();

  game.style.display = "flex";
  resetBtn.style.display = "block";
});

const jsConfetti = new JSConfetti({ container });
function Winner(pos1) {
  setTimeout(() => {
    game.style.display = "none";
    resetBtn.style.display = "none";
    turnX = true;
    newGame.style.display = "block";
    jsConfetti.addConfetti();
    winnerText.style.display = "block";
    winnerText.innerHTML = `Congrats To the Winner <br> '${pos1}'`;
  }, 800);
}

let checkWinner = () => {
  for (const pattern of winningPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    pos1 = boxes[pattern[0]].innerHTML;
    pos2 = boxes[pattern[1]].innerHTML;
    pos3 = boxes[pattern[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        Winner(pos1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerHTML = "X";
      turnX = false;
    } else {
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
