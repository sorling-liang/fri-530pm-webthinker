// write your codes here
// recap
// then lesson 7

// let pianoImg;
// let picoWidth;
// let picoX, picoY;
// let sfx;

// function preload() {
//     pianoImg = loadImage("assets/pico-a.png");
//     sfx = loadSound("assets/pop.mp3");
// }

// function setup() {
//     createCanvas(600,600);
//     background("black");

//     imageMode(CENTER);

//     picoWidth = 110;
//     picoX = width/2;
//     picoY = height/2;
// }

// function draw() {
//     // erase everytime when this is called
//     background("lightgray");
//     image(pianoImg, picoX, picoY, picoWidth, 133);

//     if (keyIsDown(RIGHT_ARROW)) {
//         picoWidth = 110;
//         picoX += 5;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         picoX -= 5;
//     }
//     if (keyIsDown(UP_ARROW)) {
//         picoY -= 5;
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         picoY += 5;
//     }    
// }

// function keyPressed() {
//     if (keyCode === 32) {
//         picoWidth = 55;
//         sfx.play();
//     }
// }

let ballX, ballY;
let ballSize;
let ballSpeedX, ballSpeedY;

function setup() {
    noStroke();
    createCanvas(600, 400);
    ballX = 300;
    ballY = 200;
    ballSize = 30;
    ballSpeedX = 2;
    ballSpeedY = 2;
}

function draw() {
    background(200);
    circle(ballX, ballY, ballSize);
    ballX += ballSpeedX;
    ballY += ballSpeedY;
}