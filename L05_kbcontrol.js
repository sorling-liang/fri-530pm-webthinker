// write your codes here
let size = 50;
let showCirle;

function setup() {
    createCanvas(600, 600);
    background("skyblue");
    // noStroke();
}

function draw() {
    background("skyblue");
    rect( width/2, height/2, size, size );
}

function keyPressed() {
    size = 200;
}

function keyReleased() {
    size = 50;
}
// recap
// function mousePressed() {
//     fill(random(0,255), random(0,255), 0);
//     size = 5;
// }
// function mouseDragged() {
//     circle(mouseX, mouseY, size);
//     size = size + 0.5;
// }