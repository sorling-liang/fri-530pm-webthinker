// write your codes here
let guessInput;
let guessButton;

function setup() {
    // create canvas 800,700
    // color lightgray
    createCanvas(800, 700);
    background("lightgray");

    guessInput = createInput();
    guessInput.position(width/2-70, height/2);

    guessButton = createButton("Guess");
    guessButton.position(width/2 + guessInput.width -60, height/2);
}

function draw() {
    background("lightgray"); // erase all
}