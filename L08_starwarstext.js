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
    bgm.loop();
}

function draw() {
    scrollingY -= 0.6;
}