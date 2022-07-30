

let gameLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const BRICK  = 1;
const COIN   = 2;
const GROUND = 3;
const PACMAN = 5;

let map;

let pacman = {
  x: 6,
  y: 4,
  move: 'right'
};


function createBoxs(layout) {
  let boxsArray = [];

  for (let row of layout) {
  for (let col of row) {

      let box = document.createElement('div');
      box.classList.add('box');

      if (col ===BRICK) {
        box.classList.add('brick');

      }else if (col === COIN) {
        box.classList.add('coin');

      }else if (col === GROUND) {
        box.classList.add('ground');

      }else if (col === PACMAN){
        box.classList.add('pacman');
        box.classList.add(pacman.move);
      }

      boxsArray.push(box);
    }

    let brBox = document.createElement('br');
    boxsArray.push(brBox);
  }
  return boxsArray;
}

function drowMap() {
  map = document.createElement('div');

  let boxs = createBoxs(gameLayout);
  for (let box of boxs) {
    map.appendChild(box);
  }

   document.body.appendChild(map);  
}

function eraseMap() {
  document.body.removeChild(map);
}

// !=="not equal value or type" Pacman can't go through bricks 

function moveUp(){
  pacman.move = 'up';
  if (gameLayout [pacman.y-1][pacman.x] !== BRICK) {
    gameLayout [pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y-1;
    gameLayout [pacman.y-1][pacman.x] = PACMAN;
  }
}

function moveDown(){
  pacman.move = 'up';
  if (gameLayout [pacman.y+1][pacman.x] !== BRICK) {
    gameLayout [pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y+1;
    gameLayout [pacman.y+1][pacman.x] = PACMAN;
  }
}

function moveRight(){
  pacman.move = 'up';
  if (gameLayout [pacman.y][pacman.x+1] !== BRICK) {
    gameLayout [pacman.y][pacman.x+1] = GROUND;
    pacman.y = pacman.y;
    gameLayout [pacman.y][pacman.x+1] = PACMAN;
  }
}

function moveRight(){
  pacman.move = 'up';
  if (gameLayout [pacman.y][pacman.x-1] !== BRICK) {
    gameLayout [pacman.y][pacman.x-1] = GROUND;
    pacman.y = pacman.y;
    gameLayout [pacman.y][pacman.x-1] = PACMAN;
  }
}

function setUpContols(){
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37 || )
  })
}

// eraseMap();
drowMap();
gamePlay();