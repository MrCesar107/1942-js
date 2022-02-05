export default class Player {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw() {
    this.ctx.fillStyle = "#ff0000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.move();
    this.x += this.speedX;
    this.y += this.speedY;
    this.checkCollisions();
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

  checkCollisions() {
    if (this.x <= 0) this.x = 0;
    if (this.x >= this.ctx.canvas.width - this.width)
      this.x = this.ctx.canvas.width - this.width;
    if (this.y <= 0) this.y = 0;
    if (this.y >= this.ctx.canvas.height - this.height)
      this.y = this.ctx.canvas.height - this.height;
  }
}
