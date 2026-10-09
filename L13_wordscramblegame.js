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
    rescrambleButton.position(270, height/2-50);
    rescrambleButton.style("font-size", "20px");
    
    rescrambleButton.size(105,35);

    guessInput = createInput();
    guessInput.position(400, height/2-50);
    guessInput.style("font-size", "20px");
    guessInput.size(200,30);

    submitButton = createButton("Submit");
    submitButton.position(width/2+130, height/2-50);
    submitButton.size(60,35);
}
function draw() {
    fill("black");
    textSize(34);
    textAlign(CENTER, CENTER);
    text("Word Scramble Game", width/2, 75);
    text("Random Word: NOTEBOOK", width/2, 205);

    textSize(28);
    text("Score: 0", width/2, height/2+80);
    text("Streak: 0 (Max: 0)", width/2, height/2+120);

}