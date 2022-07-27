let gameData = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
] ;


const wall = 1;
const coint = 2;
const empty = 3;
const pacmn = 5; 

let map;

let pacman = {
    x: 1,
    y: 1,
    direction: "right",
};


function createBox(data) {

    let boxArray = [];

    for(let row of data) {
        for(let col of row) {

            let box = document.createElement("div");
            box.classList.add("box");

            if(col === wall) {
                box.classList.add("wall");
            }else if(col === coint){
                box.classList.add("coint");
            }else if(col === empty){
                box.classList.add("empty");
            }else if(col === pacman){
                box.classList.add("pacman");
                box.classList.add(pacman.direction);
            }   
            
            boxArray.push(box);
        }

        let brbox = document.createElement("br");
        boxArray.push(brbox);
    }

    return boxArray;
};


function gameMap() {
map = document.createElement("div");

let boxs = createBoxs(gameData);
for (let box of boxs) {
    map.appendChild(box);
}
document.main.appendChild(map);
};

// function emptyBox() {
// 
// };
// 
// function moveDown() {
// 
// };
// 
// function moveUp() {
// 
// };
// 
// function moveRight() {
// 
// };
// 
// function moveLeft() {
// 
// };
// 
// function main(){
// 
// }
// let box = [];

