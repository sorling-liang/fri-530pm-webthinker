let myfill = 0;
let xpos;
let ypos;
function setup() {
    createCanvas(500,500);
    background(200);
    fill( myfill );

    for (let count=0; count<7; count++) {
        rect(xpos, ypos, 50,50);
        xpos = xpos+50;
        ypos = ypos+50;
        myfill = myfill + 35;
    }
}



// function draw() {
//     // fill("yellow");
//     // triangle(50,100,  100,100,   75,50);
// }