// write your codes here
const WORDS = [
    "intentions","nationality","watermelon",
    "cabybara","notebook","honeymelon",
    "bumblebee","chimpanzee","hippopotamus"
];


function setup() {
    createCanvas(1000,700);
    background("skyblue");
}
function draw() {
    fill("black");
    textSize(34);
    textAlign(CENTER, CENTER);
    text("Word Scramble Game", width/2, 75);
    text("Random Word: NOTEBOOK", width/2, 205);
}