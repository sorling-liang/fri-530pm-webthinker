// write your codes here

let picoImg;

function preload() {

}

let xpos;
let ypos;

function setup() {
    createCanvas(400, 400);
    background("lightblue");
    //rectMode(CENTER); // new!

    xpos = width/2;
    ypos = height/2;

    noStroke();
}

function draw() {

}



// function draw() {
//     background("lightblue");
//     fill("white");
//     rect(width/2, height/2, 300,300); // border, the bigger square
//     fill("black");
//     //     x     y    w   h
//     rect(xpos, ypos, 50, 50);

//     if (keyIsDown(UP_ARROW)) {
//         ypos = ypos -5;
//     }
//     else if (keyIsDown(DOWN_ARROW)) {
//         ypos = ypos +5;
//     }
//     else if (keyIsDown(LEFT_ARROW)) {
//         xpos = xpos -5;
//     }
//     else if (keyIsDown(RIGHT_ARROW)) {
//         xpos = xpos +5;
//     }

//     xpos = constrain(xpos, 75, 325);
//     ypos = constrain(ypos, 75, 325);
// }