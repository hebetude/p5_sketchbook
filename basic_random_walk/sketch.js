'use strict';

var walkers = [];

function setup() {
    createCanvas(700, 700);
    background(255);
}

function draw() {
    border();
    walkers.forEach(
        walker => {
            walker.update();
            walker.draw();
        }
    )
}

function mouseClicked() {
    walkers.push(new Walker(mouseX, mouseY));
}

// this is only here to let me know where the canvas actually is
function border() {
    push();
    noFill();
    rect(0, 0, width-2, height-2);
    pop();
}

