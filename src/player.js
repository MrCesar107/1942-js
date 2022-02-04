export default class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.move();
    this.x += this.speedX;
    this.y += this.speedY;
  }

  move() {
    addEventListener("keydown", (e) => {
      if (e.code == "ArrowUp" || e.code == "KeyW") this.speedY = -5;
      if (e.code == "ArrowDown" || e.code == "KeyS") this.speedY = 5;
      if (e.code == "ArrowLeft" || e.code == "KeyA") this.speedX = -5;
      if (e.code == "ArrowRight" || e.code == "KeyD") this.speedX = 5;
    });

    addEventListener("keyup", (e) => {
      if (e.code == "ArrowUp" || e.code == "KeyW") this.speedY = 0;
      if (e.code == "ArrowDown" || e.code == "KeyS") this.speedY = 0;
      if (e.code == "ArrowLeft" || e.code == "KeyA") this.speedX = 0;
      if (e.code == "ArrowRight" || e.code == "KeyD") this.speedX = 0;
    });
  }
}
