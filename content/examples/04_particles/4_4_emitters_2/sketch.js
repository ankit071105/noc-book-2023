// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// an array of ParticleSystems
let emitters = [];

function setup() {
  createCanvas(640, 240);
  emitters.push(new Emitter(100, 60));
  emitters.push(new Emitter(200, 30));
  emitters.push(new Emitter(350, 90));
  emitters.push(new Emitter(540, 50));
}

function draw() {
  background(255);
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
    emitters[i].run();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}