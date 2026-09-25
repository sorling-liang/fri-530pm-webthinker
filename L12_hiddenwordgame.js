// write your codes here
let guessInput;
let guessButton;
let attempts = 0;

function setup() {
    // create canvas 800,700
    // color lightgray
    createCanvas(800, 700);
    background("lightgray");

    guessInput = createInput();
    guessInput.position(width/2-70, height/2);

    guessButton = createButton("Guess");
    guessButton.position(width/2 + guessInput.width -60, height/2);
    guessButton.mousePressed(checkGuess);
}

function draw() {
    background("lightgray"); // erase all

    textAlign(CENTER, CENTER);
    textSize(50);
    text("Guess the Hidden Word!", width/2, height/2-160);
    text("Attempts:" + attempts, width/2, height/2-120);

}

function checkGuess() {
    print("hello");
}