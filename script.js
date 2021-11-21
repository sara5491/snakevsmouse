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

//TOGGLE SOUNDS
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

