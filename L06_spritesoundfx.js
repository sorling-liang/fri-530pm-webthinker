// write your codes here
function preload() {

}

let xpos;
let ypos;

function setup() {
    createCanvas(400, 400);
    background("lightblue");
    rectMode(CENTER);
    xpos = width/2;
    ypos = height/2;
}


function draw() {
    background("lightblue");
    fill("white");
    rect()
    //     x        y        w   h
    rect(xpos, ypos, 50, 50);

    if (keyIsDown(UP_ARROW)) {
        ypos = ypos -1;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        ypos = ypos +1;
    }
    else if (keyIsDown(LEFT_ARROW)) {
        xpos = xpos -1;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos +1;
    }

    xpos = constrain(xpos, 50, 350);
    ypos = constrain(ypos, 50, 350);
}