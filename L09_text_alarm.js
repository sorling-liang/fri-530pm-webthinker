// write your codes here

// task 1
function setup() {
    // give me a canvas of size: 400 by 200
    createCanvas(400, 200);
    // bg colour is skyblue
    background("skyblue");
    textSize(32);
    textAlign(CENTER, CENTER);
}

// forever loop
function draw() {
    background("skyblue"); // erase

    let xhour = nf( hour(), 2 ); // 24 hour
    let xminute = nf( minute(), 2 );
    let xsecond = nf( second(), 2 );
    let timeString = xhour + ":" + xminute + ":" + xsecond;

    text(timeString, width/2, height/2);
}






// recap
// let xpos;
// let speed;

// function setup() {
//     createCanvas(500,500);
//     background("lightgray");
//     textAlign(CENTER, CENTER);
//     textSize(48);
//     xpos = width/2;
//     speed = 2;
// }
// function draw() {
//     background("lightgray");
//     text("Bounce!", xpos, height/2);
//     xpos = xpos + speed;

//     if (xpos > width || xpos < 0) {
//         speed = speed * -1;
//     }
// }