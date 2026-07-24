// write your codes here

let shapeColor = "blue";

function setup() {
    createCanvas(600,600);
    background("skyblue");
    noLoop(); // make draw() run once
}


function draw() {
    print(width);
    // print(height);
    let xpos = 50;
    let ypos = 50;
    let ggColour = 0;

    for (let count = 0; count < 7; count++) {
        //fill(random(0,255),random(0,255),random(0,255));
        fill(shapeColor);
        circle( xpos, ypos, 35);
        xpos += 50;
        ypos += 50;
        ggColour += 50;
    }
}