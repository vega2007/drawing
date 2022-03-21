///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(600, 400);
  frameRate(5);
};

var draw = function () {
  background(100);

  for (let y = 0; y < 50; y++) {
    for (let x = 0; x < 50; x++) {
      fill(random(200, 255));
      square(x * 50, y * 50, 50);
    }
  }
};
