

// Declare an array to hold instances of the Bubble class
let bubbles = [];

function setup() {
  // Create a canvas with dimensions of 960 x 540 pixels
  createCanvas(960, 540);
  
}

function draw() {
  // Set the background color to black
  background(0);

  // Create 50 instances of the Bubble class with random positions and sizes, and push them to the bubbles array
  for (let i = 0; i < 50; i++) {
    let r = random(10, 50);
    let b = new Bubble(random(width), random(height), r);
    bubbles.push(b);
    
    // Move and show each instance of the Bubble class in the bubbles array
    bubbles[i].move();
    bubbles[i].show();
  }
}

// Define the Bubble class
class Bubble {
  constructor(x, y, r, color) {
    // Initialize the position (x,y), radius (r) and color of the Bubble
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "hsla(" + random(200) + ", 100%, 90%, 1)";
  }

  move() {
    // Move the Bubble randomly within a range of -5 to 5 pixels for both x and y directions
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    // Set the stroke color to the Bubble's color and the stroke weight randomly between 0 and 10
    stroke(this.color);
    strokeWeight(random(10));
    
    // Set the fill color to transparent
    noFill();
    
    // Draw an ellipse at the current position (x,y) with a diameter between the radius (r) and 2.5 times the radius
    ellipse(this.x, this.y, this.r * random(2.5));
  }
}
