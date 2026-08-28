// write your codes here
let xpos;
let speed;

function setup() {
    createCanvas(500,500);
    textAlign(CENTER, CENTER);
    textSize(48);
    xpos = width/2;
    speed = 0.5;
}

function draw() {
    background("lightgray");
    text("Bounce!", xpos, height/2);
    xpos = xpos + speed;

    if (xpos > width) {
        speed = speed * -1;
    }
    
    if (xpos < 0) {
        speed = speed * -1;
    }
}