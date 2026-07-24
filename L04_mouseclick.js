// write your codes here
function setup() {
    createCanvas(600,600);
    background("skyblue");
    noLoop(); // make draw() run once
}

function draw() {
    // print(width);
    // print(height);
    let xpos = 0;
    let ypos = 0;
    let ggColour = 0;
    for (let count = 0; count < 6; count++) {
        circle( xpos, ypos, 35);
    }
}