// write your codes here
const WORDS = [
    "intentions","nationality","watermelon",
    "cabybara","notebook","honeymelon",
    "bumblebee","chimpanzee","hippopotamus"
];

let rescrambleButton;
let guessInput;
let submitButton;

function setup() {
    createCanvas(1000,700);
    background("skyblue");

    rescrambleButton = createButton("Rescramble");
    rescrambleButton.position(250, height/2);
    rescrambleButton.size(60,105);

    submitButton = createButton("Submit");
    submitButton.position(width/2, height/2);
    submitButton.size(60,35);
}
function draw() {
    fill("black");
    textSize(34);
    textAlign(CENTER, CENTER);
    text("Word Scramble Game", width/2, 75);
    text("Random Word: NOTEBOOK", width/2, 205);
}