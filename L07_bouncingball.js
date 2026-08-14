// write your codes here
// recap
// then lesson 7

let pianoImg;
let picoWidth;
let picoX, picoY;
let sfx;
function preload() {
    pianoImg = loadImage("assets/pico-a.png");
    sfx = loadSound("assets/pop.mp3");
}

function setup() {
    createCanvas(600,600);
    background("black");
    imageMode(CENTER);
    picoWidth = 100;
    picoX = width/2;
    picoY = height/2;
}

function draw() {
    // erase everytime when this is called
    background("lightgray");
    image(pianoImg, picoX, picoY, picoWidth, 133);
    if (keyIsDown(UP_ARROW)) {
        picoY -= 5;
    }
    if (keyIsDown(UP_ARROW)) {
        picoY -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        picoY += 5;
    }    
}

function keyPressed() {
    if (keyCode === 32) {
        picoWidth = 50;
        sfx.play();
    }
}