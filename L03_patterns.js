function setup() {
    createCanvas(800, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  let diameter = 50;
  let circleY = 50;

  for( let count=1; count<6; count++) {
    circle(count*50,  circleY,  diameter);
    circleY = circleY + 50;
  }

  // Task 1: Colour Gradient
  // let red = 0; // 0-255
  let count = 1;
  for ( let red = 0; red < 256; red++ ) {
    fill(red, 0, 0);
    circle(count*15,  circleY,  15);
    count = count + 1;
  }

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}