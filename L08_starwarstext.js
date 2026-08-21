// write your codes here
// 3 functions

let storyText = [
    "A long long time ago",
    "in the galaxy far far away...",
    "",
    "THE BEGINNING",
    "A group of learners begin",
    "their journey"
];

let ypos;
let scrollingY;
let bgm;

function preload() {
    bgm = loadSound("assets/star_wars_theme_8_bit.mp3");
}

function setup() {
    //bgm.loop();
    createCanvas(400,600);
    textSize(36);
    textAlign(CENTER, CENTER);
    scrollingY = height;
}

function draw() {
    background("black");
    fill("yellow");

    ypos = scrollingY;
    for (let count=0; count<storyText.length; count++) {
        text(storyText[count], width/2, ypos);
        ypos = ypos +50;
    }

    scrollingY -= 0.6;
}