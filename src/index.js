import Player from "./player.js";
import Enemy from "./enemy.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let player;
let enemy;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function init() {
  resizeCanvas();
  player = new Player(ctx, canvas.width / 2 - 25, canvas.height - 200, 50, 50);
  enemy = new Enemy(ctx, 300, 300, 30, 30);
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
  enemy.draw(ctx);
}

function clearCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

onload = init;
addEventListener("resize", resizeCanvas);
