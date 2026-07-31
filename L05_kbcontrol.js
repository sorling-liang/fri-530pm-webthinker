// write your codes here
let size = 35;
let showCirle = true;
let colour = "white";

function setup() {
    createCanvas(600, 600);
    background("skyblue");
    // noStroke();
}

function draw() {
    background("skyblue");
    // rect( width/2, height/2, size, size );
    fill(colour);
    // if (showCirle) {
    circle( width/2, height/2, size);
    // }
    if (keyCode === RIGHT_ARROW) {
    }
}

// function keyPressed() {
//     // size = 200;
//     if (key === 'c') {
//         // showCirle = !showCirle;
//         colour = "white";
//     }
//     print(key);
//     print(keyCode);

//     if (keyCode === RIGHT_ARROW) {
//         colour = "red";
//         // print("i was pressing UP arrow key");
//     }
//     if (keyCode === DOWN_ARROW) {
//         colour = "black";
//     }
// }

// function keyReleased() {
//     size = 50;
// }
// recap
// function mousePressed() {
//     fill(random(0,255), random(0,255), 0);
//     size = 5;
// }
// function mouseDragged() {
//     circle(mouseX, mouseY, size);
//     size = size + 0.5;
// }