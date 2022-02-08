export default class Enemy {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  update() {}

  draw() {
    this.ctx.fillStyle = "#ffff00";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
