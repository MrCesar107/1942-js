import Player from "./player.js";
import Enemy from "./enemy.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let player;
let enemies = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function init() {
  resizeCanvas();
  createEnemies();
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

function updateEnemies() {
  enemies.forEach((enemy) => {
    enemy.update();
  });
}

function drawEnemies() {
  enemies.forEach((enemy) => {
    enemy.draw();
  });
}

function update() {
  player.update();
  updateEnemies();
  checkBulletEnemyCollitions();
}

function createEnemies() {
  enemies.push(new Enemy(ctx, 200, 200, 30, 30));
  enemies.push(new Enemy(ctx, 300, 200, 30, 30));
}

function draw() {
  clearCanvas();
  player.draw(ctx);
  drawEnemies();
}

function clearCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function checkBulletEnemyCollitions() {
  enemies.forEach((enemy) => {
    player.bullets.forEach((bullet) => {
      if (
        bullet.x >= enemy.x &&
        bullet.x <= enemy.x + enemy.width &&
        bullet.y <= enemy.y + enemy.height
      ) {
        player.bullets.splice(player.bullets.indexOf(bullet), 1);
        enemies.splice(enemies.indexOf(enemy), 1);
      }
    });
  });
}

onload = init;
addEventListener("resize", resizeCanvas);
