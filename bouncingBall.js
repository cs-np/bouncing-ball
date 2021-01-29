let x = 400;
let y = 300;
let xspeed = 5;
let yspeed = 5;

let r = 25;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(150);
    ellipse(x, y, r*2, r*2);
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
        xspeed = -xspeed;
    }
    if (y > height - r || y < r) {
        yspeed = -yspeed;
    }
}