// write your codes here
// recap
// then lesson 7

let pianoImg;
let sfx;
function preload() {
    pianoImg = loadImage("assets/images.png");
    sfx = loadSound("assets/pop.mp3");
}

function setup() {
    createCanvas(600,600);
    background("black");
    imageMode(CENTER);
}

function draw() {
    // erase everytime when this is called
    background("black");
    image(pianoImg, width/2, height/2, 500, 500);
}

function keyPressed() {
    if (keyCode === 32) {
        picoWidth = 50;
        sfx.play();
    }
}