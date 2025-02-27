// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array of objects
let oscillators = [];

function setup() {
  createCanvas(640, 240);
  // Initialize all objects
  for (let i = 0; i < 10; i++) {
    oscillators.push(new Oscillator());
  }
}

function draw() {
  background(255);
  // Run all objects
  for (let i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].show();
  }
}