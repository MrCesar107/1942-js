import Player from "./player.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let player;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function init() {
  resizeCanvas();
  player = new Player(ctx, canvas.width / 2 - 25, canvas.height - 200, 50, 50);
  main();
}

function main() {
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

onload = init;
addEventListener("resize", resizeCanvas);
