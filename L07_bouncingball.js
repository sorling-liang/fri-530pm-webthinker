// write your codes here
// recap
// then lesson 7

let pianoImg;

function preload() {
    pianoImg = loadImage("assets/images.png");
}

function setup() {
    createCanvas(500,500);
    background("black");
    imageMode(CENTER);
    image(pianoImg, 0,0, 250, 250);
}

function draw() {
    // erase everytime when this is called
    //background("black");
}