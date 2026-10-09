// write your codes here
const WORDS = [
    "intentions","nationality","watermelon",
    "cabybara","notebook","honeymelon",
    "bumblebee","chimpanzee","hippopotamus"
];

let rescrambleButton;
let guessInput;
let submitButton;

let score = 0;
let streak = 0;
let max = 0;

let hiddenword;
let messedup;

function setup() {
    createCanvas(1000,700);
    background("skyblue");

    rescrambleButton = createButton("Rescramble");
    rescrambleButton.position(270, height/2-50);
    rescrambleButton.style("font-size", "20px");
    rescrambleButton.size(135,35); // width then height

    guessInput = createInput();
    guessInput.position(430, height/2-50);
    guessInput.style("font-size", "20px");
    guessInput.size(200,30);

    submitButton = createButton("Submit");
    submitButton.position(width/2+160, height/2-50);
    submitButton.style("font-size", "20px");
    submitButton.size(80,35);

    hiddenword = pickNewWord(); // pick a random word
    print("the secret is " + hiddenword);
}
function shuffleWord(someWord) {
    let arrChars = 
    return "";
}
function pickNewWord() {
    hiddenword = random(WORDS);
    hiddenword = hiddenword.toUpperCase();
    messedup = shuffleWord(hiddenword);
    return hiddenword;
}

function draw() {
    fill("black");
    textSize(34);
    textAlign(CENTER, CENTER);
    text("Word Scramble Game",    width/2, 75);
    text("Random Word: NOTEBOOK", width/2, 205);

    textSize(28);
    text("Score: " + score,           width/2, height/2+80);
    text("Streak: " + streak +" (Max: "+ max + ")", width/2, height/2+120);
}