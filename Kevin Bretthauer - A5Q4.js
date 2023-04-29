let bubbles = [];

function setup() {
  createCanvas(960, 540);
  spriteWidth = 80;
  spawnDelay = 90;
  startHealth = 600;
  frameDelay = 0;
  addX = -3;
  breedersToStart = 25;
  catchersToStart = 2;

  breeders = [];
  for (
    let breederDefined = 0;
    breederDefined < breedersToStart;
    breederDefined++
  ) {
    let x = random(width);
    let y = random(height);
    breeders.push(new Breeder(x, y));
  }

  catchers = [];
  for (
    let catcherDefined = 0;
    catcherDefined < catchersToStart;
    catcherDefined++
  ) {
    let x = random(width);
    let y = random(height);
    catchers.push(new Catcher(x, y));
  }
}

function draw() {
  background("blue");
  frameDelay++;
  for (let i = 0; i < 50; i++) {
    let r = random(10, 50);
    let b = new Bubble(random(width), random(height), r);
    bubbles.push(b);
    bubbles[i].move();
    bubbles[i].show();
  }

  for (let breederShown = 0; breederShown < breeders.length; breederShown++) {
    let thisBreeder = breeders[breederShown];
    thisBreeder.update();
    thisBreeder.show();

    if (frameDelay > spawnDelay) {
      for (let j = 0; j < breeders.length; j++) {
        let pMate = breeders[j];
        let isDiff = breederShown !== j;
        if (isDiff && isTouching(thisBreeder, pMate)) {
          let x = random(width);
          let y = random(height);
          breeders.push(new Breeder(x, y));
          frameDelay = 0;
          break;
        }
      }
    }
  }

  // Update catchers.
  for (let catcherShown = 0; catcherShown < catchers.length; catcherShown++) {
    let thisCatcher = catchers[catcherShown];
    thisCatcher.update();
    thisCatcher.show();
  }
}

function isTouching(s1, s2) {
  let sDist = dist(s1.x, s1.y, s2.x, s2.y);
  if (sDist < spriteWidth) {
    return true;
  } else {
    return false;
  }
}

class Bubble {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "hsla(" + random(200) + ", 100%, 90%, 1)";
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(this.color);
    strokeWeight(random(10));
    noFill();
    ellipse(this.x, this.y, this.r * random(2.5));
  }
}

class Breeder {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
    this.facingRight = false;
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
    this.health = startHealth;
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
    this.health--;
  }

  show() {
    push();
    translate(this.x, this.y);
    let colorHealth = 100 * (this.health) / startHealth;
    fill(255, 255, 0);
    if (this.facingRight) {
      arc(0, 0, 50, 50, this.angle1, this.angle2, PIE);
    } else {
      arc(0, 0, 50, 50, this.angle3, this.angle4, PIE);
    }

    pop();
  }
}
