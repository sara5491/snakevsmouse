var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var paused = false;
var grid = 16;
var count = 0;

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

let score = 0;

// SCORES
let highscore = localStorage.getItem("highscore");
if (highscore === null) {
    highscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval));
}
else {
    highscoreval = JSON.parse(highscore);
    highscoreBox.innerHTML = "High Score: " + highscore;
}

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

// TOGGLE SOUNDS - audio muted until toggled on
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

// GAME PLAY
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function gameLoop() {
    requestAnimationFrame(gameLoop);
    if (++count < 4) return;
    if (paused) throwError();
    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    snake.x += snake.dx; 
    snake.y += snake.dy;


    
    // CANVAS
        // WIDTH
        if (snake.x < 0) snake.x = canvas.width - grid;
        else if (snake.x >= canvas.width) snake.x = 0;
    
        // HEIGHT
        if (snake.y < 0) snake.y = canvas.height - grid;
        else if (snake.y >= canvas.width) snake.y = 0;
    
        // REMOVE FOOD
        if (snake.cells.length > snake.maxCells) snake.cells.pop();
        
        // HEAD AT FRONT
        snake.cells.unshift({x: snake.x, y: snake.y});

    // FOOD
    const img = new Image();
    img.src = 'https://cdn-icons-png.flaticon.com/512/3969/3969773.png';
    context.drawImage(img, food.x, food.y, grid-1, grid-1);

    // SNAKE
    context.fillStyle = 'green';
    snake.cells.forEach(function(cell, index) {
        context.fillRect(cell.x, cell.y, grid-1, grid-1);
        if (cell.x === food.x && cell.y == food.y) {
            snake.maxCells++;
            food.x = getRandomInt(0, 25) * grid;
            food.y = getRandomInt(0, 25) * grid;
            score += 1;
            foodSound.play(); // sound plays when snake eats mouse
            document.getElementById('score').innerHTML = "Score: " + score;
        if (score > highscoreval) {
            highscoreval = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreval));
            highscoreBox.innerHTML = "High Score: " + highscoreval;
        }
}
    // GAME OVER IF SNAKE HITS ITSELF
    for (var i = index + 1; i < snake.cells.length; i++) {
    if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake = resetSnake();
        food.x = getRandomInt(0, 25) * grid;
        food.y = getRandomInt(0, 25) * grid;
        gameOverSound.play(); // sound plays and game resets
        score = 0;
        alert("Game Over. Press OK to play again!");
        document.getElementById('score').innerHTML = "Score: " + 0;
        }
    }
});
}

// KEYBOARD CONTROLS
document.addEventListener('keydown', function(e) {
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
    else if (e.which == 32) {
        paused = !paused;
        document.querySelector('.pause').innerHTML = paused ? 'Play':'Pause';
    }
});

function left() {
    if (snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
};
function right() {
    if (snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
};
function up() {
    if (snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
};
function down() {
    if (snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }  
};
function pause() {
    paused = !paused;
    document.querySelector('.pause').innerHTML = paused ? 'Play' : 'Pause';
}
requestAnimationFrame(gameLoop);