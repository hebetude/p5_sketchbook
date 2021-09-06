var kitty;
var squareSize;
var walkers = [];
var bounds = [];
var firstRun = true;

function preload() {
  kitty = loadImage("cat.jpg");
  console.log("Honestly not sure how I expected this to turn out, but it ended up garbage.");
}

function setup() {
  createCanvas(1000, 1000);
  kitty.resize(1000, 1000);
  squareSize = 20;
}

function draw() {
  if (firstRun) {
    background(220);
    imageMode(CENTER);
    image(kitty, width / 2, height / 2);

    kitty.loadPixels();
    let kittyPixels = kitty.pixels;

    for (var y = 0; y < height; y += squareSize) {
      for (var x = 0; x < width; x += squareSize) {
        var avg = averagePixels(kittyPixels, x, y, squareSize);
        // bounds.push(new Bound(x, y, x + squareSize, y + squareSize));
        walkers.push(new BoundWalker(x, y, squareSize, avg))
      }
    }

    background(255);
    firstRun = false;
  }
  walkers.forEach(
    walker => {
      walker.update();
      walker.draw();
    }
  )

}


function averagePixels(pxArray, startX, startY, sqSize) {
  var idx = 0;

  var avg = 0;
  for (var y = startY; y < startY + sqSize; y++) {
    for (var x = startX; x < startX + sqSize; x++) {
      idx = x + y * width;
      avg += pxArray[idx * 4];
    }
  }
  avg /= 400;

  return avg;
}
