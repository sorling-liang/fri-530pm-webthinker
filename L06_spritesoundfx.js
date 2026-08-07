// write your codes here

let picoImg;
let soundSFX;
let bgM;

function preload() {
    picoImg = loadImage('assets/pico-a.png');
    soundSFX = loadSound('assets/pop.mp3');
    bgM = loadSound('assets/bossaNova.mp3');
}

let xpos;
let ypos;

function setup() {
    createCanvas(600, 600);
    background("lightblue");
    //rectMode(CENTER); // new!

    xpos = width/2;
    ypos = height/2;

    imageMode(CENTER); // new!
    //noStroke();
}

function draw() {
    background("lightblue"); // erase
    //             x      y    w    h
    image(picoImg, xpos, ypos, 110, 133);
    if (keyIsDown(UP_ARROW)) {
        ypos = ypos -5;
        bgM.loop();
    }
    else if (keyIsDown(DOWN_ARROW)) {
        ypos = ypos +5;
        bgM.stop();
    }
    else if (keyIsDown(LEFT_ARROW)) {
        xpos = xpos -5;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos +5;
    }

    xpos = constrain(xpos, 55, width-55);
    ypos = constrain(ypos, 67, height-67);
}

function keyPressed() {
    if (keyCode === 32) {
        // space key 
        soundSFX.play();  // .loop()   .stop()
    }
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