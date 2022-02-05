export default class Bullet {
  constructor(ctx, x, y, width, height, entity) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.entity = entity;
    this.type = "bullet";
  }

  update() {
    if (this.entity === "player") this.y -= 10;
    else this.y += 10;
  }

  draw() {
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
