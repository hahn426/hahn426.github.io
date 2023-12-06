let a = 10
let b = 5
let xP = 300;
let yP = 200;
let xS = 5;
let yS = 5;
let counter = 3;


function setup() {
    let myCanvas= createCanvas(1575, 725);
    myCanvas.parent('myContainer');
    fill(255, 0, 0, 0.1);
    stroke(255);

    
}
function draw() {
    
    background(10, 20, 75);

    
    strokeWeight(a);
    ellipse(xP, yP, 50);

    strokeWeight(b);
    ellipse(xP, yP, 75);

    strokeWeight(a);
    ellipse(xP, yP, 100);

    yP = yP + yS;
    xP = xP + xS;

    xP = xP + random(-3, 3);
    yP = yP + random(-3, 3);


    if (yP > height) {
        yP = 0;
    }
    if (xP > width) {
        xP = 0;
    }

    if (counter > 20){
        counter =0;
    }

    counter = counter + 1;
}