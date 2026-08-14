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
    image(pianoImg, 0,0, 500, 500);
}

function draw() {
    // erase everytime when this is called
    //background("black");
}