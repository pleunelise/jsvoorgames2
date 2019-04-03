var ballx = 10;
var bally = 100;
var speedx = 2;
var speedy = 3;

function setup() {
  createCanvas(600, 350);
}

function draw() {
  background(250)
  ellipse(ballx, bally, 20, 20);
  ballx += speedx;
  bally += speedy;
  if (bally > (350-10) || bally < 0)
    speedy = -speedy;
  if (ballx > (600-10) || ballx < 0)
    speedx = -speedx;

}
