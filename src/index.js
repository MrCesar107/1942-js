import Player from "./player.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const player = new Player(100, 100, 50, 50);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function main() {
  resizeCanvas();
  clearCanvas();
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  update();
  draw();
}

function update() {
  player.update();
}

function draw() {
  clearCanvas();
  player.draw(ctx);
}

function clearCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

onload = main;
