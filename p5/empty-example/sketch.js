
function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);
  rotateZ(frameCount * mouseX * 0.0001);
  rotateX(frameCount * mouseX * 0.0001);
  rotateY(frameCount * mouseX * 0.0001);

  if (mouseIsPressed) {
    stroke(random(255), random(255), random(255));
  } else {
    stroke(0,0,0);
  }
  


  for (let j = 0; j < 1; j++) {
    push();
    for (let i = 0; i < 1; i++) {
      translate(
        sin(frameCount * 0.00000001 + j) * 50,
        sin(frameCount * 0.00000001 + j) * 50,
        i * 0
      );
      
      push();
      sphere(40, 24, 20);
      pop();
    }
    pop();
  }
}


  