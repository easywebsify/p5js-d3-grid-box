let d = 35;
let i, j, n;
function setup() {
  createCanvas(windowWidth-30, windowHeight-30, WEBGL);
  noLoop();
}
function draw() {
  for (i = -d * 15; i < d * 15; i += d) {
    for (j = -d * 15; j < d * 15; j += d) {
      fill(random(255), random(255), random(255), 127);
      for (n = 0; n < Math.ceil(random(9)); n++) {
        push();
        translate(i, j, n * d);
        box(d);
        pop();
      }
    }
  }
}
function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas("3d-grid-box", "png");
	}
}