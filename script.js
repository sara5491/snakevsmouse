var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var paused = false;
var grid = 16;
var count = 0;
let score = 0;

function resetSnake() {
    var snake = {
        x: 160,
        y: 160,
        dx: grid,
        dy: 0,
        cells: [],
        maxCells: 3, // GROWS BY 3 AFTER EATING MOUSE
    };
    return snake;
}
var snake = resetSnake();
var food = {x: 320, y: 320};

// SOUNDS
let mySound = document.getElementById("foodSound");
let mySound2 = document.getElementById("gameOverSound");

let audioOn = document.getElementById('playerOn');
audioOn.style.display = "none";
let audioOff = document.getElementById('playerOff');

audioOn.addEventListener('click', toggleSound);
audioOff.addEventListener('click', toggleSound);

mySound.muted = true;
mySound2.muted = true;

//TOGGLE SOUNDS - audio muted until toggled on
function toggleSound() {
    mySound.muted = !mySound.muted;
    mySound2.muted = !mySound2.muted;
    if (mySound.muted) {
        audioOff.style.display = "block";
        audioOn.style.display = "none";
        console.log("no sound");
    } else {
        audioOn.style.display = "block";
        audioOff.style.display = "none";
        console.log("sound");
    }
}

// SCORES
let highscore = localStorage.getItem("highscore");
if (highscore === null) {
    highscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval))
}
else {
    highscoreval = JSON.parse(highscore);
    highscoreBox.innerHTML = "High Score: " + highscore;
}

// GAME PLAY
function getRandomInt(mn, mx) {
    return Math.floor(Math.random() * (mx - mn)) + mn;
}

function gameLoop() {
    
    requestAnimationFrame(gameLoop);
    if (++count < 4) return;
    if (paused) throwError();
    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    snake.x += snake.dx; 
    snake.y += snake.dy;

    // FOOD
    const img = new Image();
    img.src = 'https://cdn-icons-png.flaticon.com/512/3969/3969773.png';
    context.drawImage(img, food.x, food.y, grid-1, grid-1);
    
    // SNAKE
    context.fillStyle = '#5E548E';
    snake.cells.forEach(function(cell, index) {
        context.fillRect(cell.x, cell.y, grid-1, grid-1)
        if (cell.x === food.x && cell.y == food.y) {
            snake.maxCells++;
            food.x = getRandomInt(0, 25) * grid;
            food.y = getRandomInt(0, 25) * grid;
            score += 1;
            foodSound.play();
            document.getElementById('score').innerHTML = "Score: " + score;
        if (score > highscoreval) {
            highscoreval = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreval));
            highscoreBox.innerHTML = "High Score: " + highscoreval;
        }
