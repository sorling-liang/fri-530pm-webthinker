// write your codes here
let guessInput;
let guessButton;
let attempts = 0;
let hintWord = "S _ _ _ _";

let myWordList;
let hiddenWord;

function setup() {
    // create canvas 800,700
    // color lightgray

    myWordList = ["green", "black", "light", "watch", "apple", 
        "round", "short", "shirt", "cover", "power"];
    hiddenWord = random(myWordList);
    print("the hidden is: " + hiddenWord); // console.log
    
    createCanvas(800, 700);
    background("lightgray");

    guessInput = createInput();
    guessInput.position(width/2-70, height/2+50);

    guessButton = createButton("Guess");
    guessButton.position(width/2 + guessInput.width -60, height/2+50);
    guessButton.mousePressed(checkGuess);
}

function draw() {
    background("lightgray"); // erase all

    textAlign(CENTER, CENTER);
    textSize(50);
    text("Guess the Hidden Word!",  width/2, height/2-160);

    text("Attempts: " + attempts,   width/2, height/2-100);
    text("Hints: " + hintWord,      width/2, height/2-40);
}

function checkGuess() {
    print("hello");
    attempts++;
}