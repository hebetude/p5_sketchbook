'use strict';

var walkers = [];

function setup() {
    createCanvas(700, 700);
    background(255);
    for (let i = 0; i < 100; i++) {
        walkers.push(new Walker(width/2, height/2));  
    }
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
    walkers = [];
    for (let i = 0; i < 100; i++) {
        walkers.push(new Walker(width/2, height/2));  
    }
}

// this is only here to let me know where the canvas actually is
function border() {
    push();
    noFill();
    rect(0, 0, width-2, height-2);
    pop();
}

