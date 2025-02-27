// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Curve
// Renders a simple fractal, the Koch snowflake
// Each recursive level drawn in sequence

// An array for all the line segments
let segments = [];

function setup() {
  createCanvas(640, 240);
  let w = 200;
  let offset = (width - w) / 2;
  let y = 62;
  let a = createVector(offset, y);
  let b = createVector(width - offset, y);
  let c = createVector(width / 2, y + w * cos(PI / 6));

  // Starting with additional lines
  segments.push(new KochLine(a, b));
  segments.push(new KochLine(b, c));
  segments.push(new KochLine(c, a));

  //{!3} Apply the Koch rules five times.
  for (let i = 0; i < 5; i++) {
    generate();
  }
}

function draw() {
  background(255);
  for (let segment of segments) {
    segment.show();
  }
  noLoop();
}

function generate() {
  // Create the next array
  let next = [];
  // For every segment
  for (let segment of segments) {
    // Calculate 5 koch p5.Vectors (done for us by the line object)
    let a = segment.kochA();
    let b = segment.kochB();
    let c = segment.kochC();
    let d = segment.kochD();
    let e = segment.kochE();
    // Make line segments between all the vectors and add them
    next.push(new KochLine(a, b));
    next.push(new KochLine(b, c));
    next.push(new KochLine(c, d));
    next.push(new KochLine(d, e));
  }
  // The next segments!
  segments = next;
}
