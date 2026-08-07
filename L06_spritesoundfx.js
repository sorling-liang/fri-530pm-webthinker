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
    //     x        y        w   h
    rect(xpos, height/2, 50, 50);
}