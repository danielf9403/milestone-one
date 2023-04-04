

let gameLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const BRICK  = 1;
const COIN   = 2;
const GROUND = 3;
const PACMAN = 5;
const eatenCoin = 10;

const scoreboard = document.getElementById("scoreboard");
scoreboard.innerText = `Score: ${score}`;


let map ;
let score=10
let brBox;
let box;



function setup()
{
  createCanvas(windowWidth, windowHeight);
  scoreDisplay.textContent = score;
  brBox = frameElement('br');
  box = frameElement('div');
  box.id = 'box';
  box.style.position = 'absolute';
  box.style.left = '0px';
  box.style.top = '0px';
  box.style.width = '100%';
  box.style.height = '100%';
  box.style.backgroundColor = 'black';
  box.style.opacity = '0.5';
  document.body.appendChild(box);
  map = new Map();
  for (let i = 0; i < BRICK.length; i++)
  {
    let brick = frameElement('div');
    brick.id = 'brick' + i;
    brick.style.position = 'absolute';
    brick.style.left = '0px';
    brick.style.top = '0px';
    brick.style.width = '100%';
    brick.style.height = '100%';
    brick.style.backgroundColor = 'black';
    brick.style.opacity = '0.5';
    box.appendChild(brick);
    map.set(brick[i], brick);
    brick.addEventListener('click', brickClicked);
  }
}



let pacman = {
  x: 1,
  y: 1,
  move: 'right'
};


function createBoxs(layout) {
  let boxsArray = [];

  for (let row of layout) {
  for (let col of row) {

      let box = document.createElement('div');
      box.classList.add('box');

      if (col === BRICK) {
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
  console.log(gameLayout[pacman.y][pacman.x])

  for (let box of boxs) {
    map.appendChild(box);
  }

   document.body.appendChild(map);  

}



function eraseMap() {
  document.body.removeChild(map);
}

// !=="not equal value or type" Pacman can't go through bricks 


function moveDown(){
  pacman.move = 'down';
  console.log(gameLayout[pacman.y+1][pacman.x])

  if (gameLayout[pacman.y+1][pacman.x] === 2) {
    score += eatenCoin;
  
  }
  if (gameLayout[pacman.y+1][pacman.x] !== 1) {
    gameLayout[pacman.y][pacman.x] = 3;
    pacman.y = pacman.y+1;
    gameLayout[pacman.y][pacman.x] = 5;
    
  }
  console.log(score, 'line 110');
}

function moveUp(){
  pacman.move = 'up';
  if (gameLayout[pacman.y-1][pacman.x] === 2) {
    score += eatenCoin;
  }
  if (gameLayout [pacman.y-1][pacman.x] !== 1) {
    gameLayout [pacman.y][pacman.x] = 3;
    pacman.y = pacman.y-1;
    gameLayout [pacman.y][pacman.x] = 5;
  }
  console.log(score);
}


function moveRight(){
  pacman.move = 'rigth';
  if (gameLayout[pacman.y][pacman.x +1] === 2) {
    score += eatenCoin;
   // score.innerHTML = score
  }
  if (gameLayout [pacman.y][pacman.x + 1] !== 1) {
    gameLayout [pacman.y][pacman.x] = 3;
    pacman.x = pacman.x + 1;
    gameLayout [pacman.y][pacman.x] = 5;
  }
  console.log(score);
}

function moveLeft(){
  pacman.move = 'left';
  if (gameLayout[pacman.y][pacman.x - 1] === 2) {
    score += eatenCoin;
  }
  if (gameLayout [pacman.y][pacman.x - 1] !== 1) {
    gameLayout [pacman.y][pacman.x] = 3;
    pacman.x = pacman.x - 1;
    gameLayout [pacman.y][pacman.x] = 5;
  }
  console.log(score);
}

function setUpContols(){
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37  ){   // left arrow 
      moveLeft();

    }else if (e.keyCode === 39 ){
      moveRight();

    }else if (e.keyCode === 38 ){
      moveUp();

    }else if (e.keyCode === 40 ){
      moveDown();
    }
    
    eraseMap();
    drowMap();
  })
}



function display_score() {
  document.getElementById('score').innerHTML = "Score: " + score;
}

// move pacman
document.onkeydown = function(e) {
  if (e.keyCode == 37 && map[pacman.y][pacman.x-1] != 2) { // left
    pacman.x--;
    document.getElementById('pacman').style.transform = "rotateY(180deg)";
  }
  else if (e.keyCode == 38 && map[pacman.y-1][pacman.x] != 2) { // up
    pacman.y--;
    document.getElementById('pacman').style.transform = "rotateZ(-90deg)";
  }
  else if (e.keyCode == 39 && map[pacman.y][pacman.x+1] != 2) { // right
    pacman.x++;
    document.getElementById('pacman').style.transform = "rotateY(0deg)";
  }
  else if (e.keyCode == 40 && map[pacman.y+1][pacman.x] != 2) { // down
    pacman.y++;
    document.getElementById('pacman').style.transform = "rotateZ(90deg)";
  }
  
  if (map[pacman.y][pacman.x] == 1) {
    score += 10;
    map[pacman.y][pacman.x] = 0;
    food_count--;
    display_map();
    display_score();
  }
  
  if (food_count == 0) {
    alert("You won!");
  }
  
  display_pacman();
}


function main(){
  setUpContols()
  drowMap();
 setup()
 eatCoin();
 checkCollision()
}
// eraseMap();
// drowMap();
// gamePlay();

