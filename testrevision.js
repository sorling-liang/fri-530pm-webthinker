let myfill = 0;
let xpos;
let ypos;
function setup() {
    createCanvas(500,500);
    background(200);
    //noStroke();

    xpos = 50;
    ypos = 50;
    for (let count=0; count<5; count++) {
        fill( myfill );
        rect(xpos, ypos, 50,50);
        xpos = xpos+50;
        ypos = ypos+50;
        myfill = myfill + 65;
    }
}
// function draw() {
//     // fill("yellow");
//     // triangle(50,100,  100,100,   75,50);
    
// }