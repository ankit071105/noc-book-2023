// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// an array of ParticleSystems
let systems = [];

function setup() {
  createCanvas(640, 240);
  let text = createP("click to add particle systems");
}

function draw() {
  background(255);
  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].run();
  }
}

function mousePressed() {
  systems.push(new ParticleSystem(mouseX, mouseY));
}