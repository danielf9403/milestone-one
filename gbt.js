// initialize game variables
var score = 0;
var pacman = {
x: 1,
y: 1
};
var map = [
[2,2,2,2,2,2,2,2,2,2],
[2,0,0,0,2,0,0,0,0,2],
[2,0,2,0,2,0,2,2,0,2],
[2,0,2,0,0,0,2,0,0,2],
[2,0,2,2,2,2,2,0,2,2],
[2,0,0,0,0,0,0,0,0,2],
[2,2,2,2,2,2,2,2,2,2],
];
var food_count = 0;

// display game map
function display_map() {
var output = "";
for (var i = 0; i < map.length; i++) {
output += "<div class='row'>";
for (var j = 0; j < map[i].length; j++) {
if (map[i][j] == 2)
output += "<div class='brick'></div>";
else if (map[i][j] == 1)
output += "<div class='coin'></div>";
else
output += "<div class='empty'></div>";
}
output += "</div>";
}
document.getElementById('map').innerHTML = output;
}

// display pacman
function display_pacman() {
document.getElementById('pacman').style.top = pacman.y20+"px";
document.getElementById('pacman').style.left = pacman.x20+"px";
}

// display scoreboard
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

// initialize game
function init() {
    display_map();
    display_pacman();
    display_score();
    food_count = 0;
    for (var i = 0; i < map.length; i++) {
      for (var j = 0; j < map[i].length; j++) {
        if (map[i][j] == 1) {
          food_count++;
        }
      }
    }
  }