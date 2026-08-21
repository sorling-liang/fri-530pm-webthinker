// write your codes here
function setup() {
    createCanvas(400,600);
}

function draw() {
    background("black");
    fill("yellow");

    textSize(68);
    //text("hello class", 10, 200);
    let ypos = 50;
    let foodList = ["burger", "tacos", "ice cream"];
    for (let count=0; count<4; count++) {
        print( foodList[0] );
        text( foodList[0], 50, ypos);
        
    }
}