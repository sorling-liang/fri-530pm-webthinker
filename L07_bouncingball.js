// write your codes here
// recap
// then lesson 7

let pianoImg;

function preload() {
    pianoImg = loadImage("assets/images.png");
}

function setup() {
    createCanvas(600,600);
    background("black");
    imageMode(CENTER);
    image(pianoImg, width/2, height/2, 500, 500);
}

function draw() {
    // erase everytime when this is called
    //background("black");
}