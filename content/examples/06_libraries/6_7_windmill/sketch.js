const { Engine, Bodies, Composite, Constraint, Body, Vector } = Matter;

let engine;

let windmill;

let particles = [];

function setup() {
  createCanvas(640, 240);
  engine = Engine.create();
  windmill = new Windmill(width / 2, height - 50, 120, 10);
}

function draw() {
  background(255);
  if (random(1) < 0.05) {
    particles.push(new Particle(width / 2 + random(-60, 60), 0));
  }
  Engine.update(engine);
  windmill.show();

  // Iterate over the boxes backwards
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].show();
    // Remove the Body from the world and the array
    if (particles[i].checkEdge()) {
      particles[i].removeBody();
      particles.splice(i, 1);
    }
  }
}
