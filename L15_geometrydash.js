// write your codes here
let playerX = 100;
let playerY;
let playerSize = 50;
let velocity = 0;
let isGrounded = false;

let spikesX = [];
let spikeWidth = 30;
let spikeHeight = 55;
let spikeSpeed = 5;

let gameOver = false;

function setup() {
    createCanvas(800,600);
    background("black");
    //rectMode(CENTER);
    playerY = height-75;

    for (let count=0; count<3; count++) {
        spikesX.push(width + count * 300);
    }
}
function draw() {
    background("black");

    if (gameOver) {
        fill("red");
        textSize(44);
        textAlign(CENTER, CENTER);
        text("GAME OVER!", width/2, height/2);
        return;
    }

    fill("lime");
    rect( 100,playerY, 50,50 );

    // gravity
    velocity += 0.8; // pull down similar to gravity
    playerY += velocity;
    
    if (playerY >= height - playerSize) {
        playerY = height - playerSize;
        isGrounded = true;
        velocity = 0;
    } else {
        isGrounded = false;
    }

    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Press SPACE to jump!", width/2, 50);

    // draw obstacles
    fill("red");
    for (let count=0; count<3; count++) {
        spikesX[count] -= spikeSpeed;

        if ( spikesX[count] < 0-spikeWidth ) {
            // teleport the obstacle to the other side
            spikesX[count] = width + random(100, 300);
        }
        triangle(
            spikesX[count],                height,
            spikesX[count] + spikeWidth/2, height - spikeHeight,
            spikesX[count] + spikeWidth,   height
        );
        // collision
        if ( playerX + playerSize > spikesX[count] &&
                          playerX < spikesX[count] + spikeWidth &&
             playerY + playerSize > height - spikeHeight
        ) {
            gameOver = true;
        }
    }
}

function keyPressed() {
    if (keyCode === 32 && isGrounded) {
        velocity = -18;
    }
}