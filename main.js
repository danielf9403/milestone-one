

let gameLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 3, 5, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 3, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const BRICK = 1;
const COIN = 2;
const GROUND = 3;
const PACMAN = 5;

let map;
let score = 0;
let brBox;
let box;
let eatcoin = 10;

let pacman = {
  x: 16,
  y: 7,
  move: "right",
};

function createBoxs(layout) {
  let boxsArray = [];

  for (let row of layout) {
    for (let col of row) {
      let box = document.createElement("div");
      box.classList.add("box");

      if (col === BRICK) {
        box.classList.add("brick");
      } else if (col === COIN) {
        box.classList.add("coin");
      } else if (col === GROUND) {
        box.classList.add("ground");
      } else if (col === PACMAN) {
        box.classList.add("pacman");
        box.classList.add(pacman.move);
      }

      boxsArray.push(box);
    }

    let brBox = document.createElement("br");
    boxsArray.push(brBox);
  }
  return boxsArray;
}

function drawMap() {
  map = document.createElement("div");

  let boxs = createBoxs(gameLayout);
  console.log(gameLayout[pacman.y][pacman.x]);

  for (let box of boxs) {
    map.appendChild(box);
  }

  document.body.appendChild(map);
}

function moveDown() {
  pacman.move = "down";
  console.log(gameLayout[pacman.y + 1][pacman.x]);

  if (gameLayout[pacman.y + 1][pacman.x] === 2) {
    updateScore(eatcoin);
    
  }
  if (gameLayout[pacman.y + 1][pacman.x] !== 1) {
    gameLayout[pacman.y][pacman.x] = 3;
    pacman.y = pacman.y + 1;
    gameLayout[pacman.y][pacman.x] = 5;
  }
  console.log(score, "line 110");
}

function moveUp() {
  pacman.move = "up";
  if (gameLayout[pacman.y - 1][pacman.x] === 2) {
    updateScore(eatcoin);
  }
  if (gameLayout[pacman.y - 1][pacman.x] !== 1) {
    gameLayout[pacman.y][pacman.x] = 3;
    pacman.y = pacman.y - 1;
    gameLayout[pacman.y][pacman.x] = 5;
  }
  console.log(score);
}

function moveRight() {
  pacman.move = "right";
  if (gameLayout[pacman.y][pacman.x + 1] === 2) {
    updateScore(eatcoin);
  }
  if (gameLayout[pacman.y][pacman.x + 1] !== 1) {
    gameLayout[pacman.y][pacman.x] = 3;
    pacman.x = pacman.x + 1;
    gameLayout[pacman.y][pacman.x] = 5;
  }
  console.log(score);
}

function moveLeft() {
  pacman.move = "left";
  if (gameLayout[pacman.y][pacman.x - 1] === 2) {
    updateScore(eatcoin);
  }
  if (gameLayout[pacman.y][pacman.x - 1] !== 1) {
    gameLayout[pacman.y][pacman.x] = 3;
    pacman.x = pacman.x - 1;
    gameLayout[pacman.y][pacman.x] = 5;
  }
  console.log(score);
}

function setUpControls() {
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
      // left arrow
      moveLeft();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 38) {
      moveUp();
    } else if (e.keyCode === 40) {
      moveDown();
    }

    eraseMap();
    drawMap();
  });
}

function eraseMap() {
  map.remove();
}

function gamePlay() {
  // write game logic here
}

function setup() {
  // setup the game
}

function main() {
  setUpControls();
  drawMap();
  gamePlay();
  setup();
  updateScore(eatcoin);
  displayScore(score);
  reset();
}

main();

function displayScore(score) {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `Score: ${score}`;
}

function updateScore(eatcoin) {
  score += eatcoin;
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `Score: ${score}`;
}


  