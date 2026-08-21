// write your codes here
function setup() {
    createCanvas(400,600);
    background("black");
    fill("yellow");

    textSize(38);
    //text("hello class", 10, 200);
    let ypos = 50;
    let foodList = ["burger", "tacos", "ice cream"];
    for (let count=0; count < foodList.length; count++) {
        print( foodList[0] );
        //    what text        x   y
        text( foodList[count], 50, ypos );
        ypos = ypos + 50;
    }
}

function draw() {
}