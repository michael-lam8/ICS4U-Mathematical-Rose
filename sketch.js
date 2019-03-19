// Michael Lam
// March 18, 2019
// Coding Challenge 55 (Derivative): Mathematical Rose Patterns

// Declaring variables
var d, n, weight, dSlider, nSlider, weightSlider;

// Creating rose object
var Rose = function() {
  this.d = 8;
  this.n = 5;
}

// Sets up colour and stroke weight of rose
Rose.prototype.properties = function(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  weight = weightSlider.value();

  stroke(r, g, b);
  noFill();
  strokeWeight(weight);
}

// Expands rose based on slider value
Rose.prototype.expand = function() {
  d = dSlider.value();
  n = nSlider.value();

  push();
  translate(width / 2, height / 2);
  beginShape();
  for (let a = 0; a < TWO_PI * d; a += 0.02) {
    let r = 200 * cos(n / d * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

// Declaring instances
var rose1 = new Rose();

// Canvas setup
function setup() {
  createCanvas(500, 500);

  dSlider = createSlider(1, 20, 8, 1);
  nSlider = createSlider(1, 20, 5, 1);
  weightSlider = createSlider(1, 8, 1, 1);
}

// Continuously draws rose
function draw() {
  background(51);
  rose1.properties(0, 161, 211);
  rose1.expand();
}
