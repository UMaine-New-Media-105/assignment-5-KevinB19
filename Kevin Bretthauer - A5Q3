// Create an empty array for bubbles.
let bubbles = [];

function setup() {
  // Create a canvas.
  createCanvas(960, 540);

  // Set initial values for variables.
  addX = -3;
  breedersToStart = 25;
  catchersToStart = 2;
  breeders = [];
  catchers = [];

  // Create an initial set of breeders and catchers.
  for (let breederDefined = 0; breederDefined < breedersToStart; breederDefined++) {
    let x = random(width);
    let y = random(height);
    breeders.push(new Breeder(x, y));
  }

  for (let catcherDefined = 0; catcherDefined < catchersToStart; catcherDefined++) {
    let x = random(width);
    let y = random(height);
    catchers.push(new Catcher(x, y));
  }
}

function draw() {
  // Set the background to black.
  background("black");

  // Create 50 random bubbles, move and show them.
  for (let i = 0; i < 50; i++) {
    let r = random(10, 50);
    let b = new Bubble(random(width), random(height), r);
    bubbles.push(b);
    bubbles[i].move();
    bubbles[i].show();
  }

  // Update breeders.
  for (let breederShown = 0; breederShown < breeders.length; breederShown++) {
    let thisBreeder = breeders[breederShown];
    thisBreeder.update();
    thisBreeder.show();
  }

  // Update catchers.
  for (let catcherShown = 0; catcherShown < catchers.length; catcherShown++) {
    let thisCatcher = catchers[catcherShown];
    thisCatcher.update();
    thisCatcher.show();
  }
}

// Define the Bubble class.
class Bubble {
  constructor(x, y, r, color) {
    // Set the x and y coordinates, radius and color of the bubble.
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "hsla(" + random(200) + ", 100%, 90%, 1)";
  }

  // Move the bubble randomly.
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  // Show the bubble on the canvas.
  show() {
    stroke(this.color);
    strokeWeight(random(10));
    noFill();
    ellipse(this.x, this.y, this.r * random(2.5));
  }
}

// Define the Breeder class.
class Breeder {
  constructor(x, y) {
    // Set the x and y coordinates of the breeder, as well as its direction.
    this.x = x;
    this.y = y;
    this.addX = addX;
    this.facingRight = false;
  }

  // Update the breeder's position.
  update() {
    this.x = this.x + this.addX;
    this.y = this.y;

    // Reverse direction if the breeder hits a wall.
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.facingRight = !this.facingRight;
      this.y = random(height);
    }
  }

  // Show the breeder on the canvas.

  show() {
    push();
    translate(this.x, this.y);
    stroke("blue");
    fill("white");
    rect(0, 0, 50, 50, 20, 20, 0, 0);
    rect(15, 35, 20, 15, 10);
    fill(255);
    if (this.facingRight) {
      ellipse(25, 20, 10, 10);
      ellipse(40, 20, 10, 10);
      fill(0);
      ellipse(25, 20, 4, 4);
      ellipse(40, 20, 4, 4);
    } else {
      ellipse(10, 20, 10, 10);
      ellipse(25, 20, 10, 10);
      fill(0);
      ellipse(10, 20, 4, 4);
      ellipse(25, 20, 4, 4);
    }

    pop();
  }
}

class Catcher {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = -addX;
    //this.health = startHealth;
    this.facingRight = true;
    this.angle1 = 0.25 * PI;
    this.angle2 = 1.75 * PI;
    this.angle3 = 1.25 * PI; // change angle1 to 1.25 PI
    this.angle4 = 0.75 * PI; // change angle2 to 0.75 PI
  }

  update() {
    this.x = this.x + this.addX;
    this.y = this.y;
    // Reverse if it hits a wall.
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.facingRight = !this.facingRight;
      this.y = random(height);
    }
    
  }

  show() {
    push();
    translate(this.x, this.y);

    fill(255, 255, 0);
    if (this.facingRight) {
      arc(0, 0, 50, 50, this.angle1, this.angle2, PIE);
    } else {
      arc(0, 0, 50, 50, this.angle3, this.angle4, PIE);
    }

    pop();
  }
}
