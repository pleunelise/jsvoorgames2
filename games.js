var xCar = 50; //Meest links boven
var yCar = 100; //Meest links boven
var xSize = 350;
var ySize = 180;
var wheelSize = 26;

function setup() {
  createCanvas(xSize, ySize);
  background(220);
}

function draw() {
    noStroke();
    fill(255, 0, 0);
    rect(xCar, yCar - 73, 220, 100);
		//ramen
		fill(255)
		rect(xCar + 15, yCar - 60, 30, 20);
  	rect(xCar + 60, yCar - 60, 30, 20);
		rect(xCar + 105, yCar - 60, 30, 20);
		rect(xCar + 150, yCar - 60, 30, 20);
		rect(xCar + 15, yCar - 30, 30, 20);
		rect(xCar + 60, yCar - 30, 30, 20);
		rect(xCar + 105, yCar - 30, 30, 20);
		rect(xCar + 150, yCar - 30, 30, 20);
		rect(xCar + 210, yCar - 73, 10, 70);
		// Wielen
    stroke(255);
    strokeWeight(3);
    fill(12, 66, 66);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 135, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 190, yCar + 21, wheelSize, wheelSize);
    stroke(0); //Zwarte weg
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2);
    //'width' is de breedte van je canvas
};
