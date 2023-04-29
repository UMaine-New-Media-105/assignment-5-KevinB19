// Declare variables to hold instances of the Bubble class
let bubble1;
let bubble2;

function setup() {
  // Create a canvas with dimensions of 960 x 540 pixels
  createCanvas(960, 540);

  // Initialize the instances of the Bubble class with specified positions and sizes
  bubble1 = new Bubble(400, 100, random(100));
  bubble2 = new Bubble(300, 200, random(50));
  bubble3 = new Bubble(100, 200, random(150));
  bubble4 = new Bubble(500, 500, random(75));
  bubble5 = new Bubble(200, 200, random(100));
}

function draw() {
  // Set the background color to black
  background(0);

  // Move and show each instance of the Bubble class
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}

// Define the Bubble class
class Bubble {
  constructor(x, y, r) {
    // Initialize the position (x,y) and radius (r) of the Bubble
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    // Move the Bubble randomly within a range of -5 to 5 pixels for both x and y directions
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    // Set the stroke color randomly between 100 and 250 and the stroke weight randomly between 0 and 10
    stroke(random(100, 250));
    strokeWeight(random(10));

    // Set the fill color to transparent
    noFill();

    // Draw an ellipse at the current position (x,y) with a diameter of 2 times the radius (r)
    ellipse(this.x, this.y, this.r * 2);
  }
}
