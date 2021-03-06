import GamepadHelper from "./utils/gamepadhelper.js";
import Bullet from "./bullet.js";

export default class Player {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.bullets = [];
    this.canShoot;
    this.keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
      KeyW: false,
      KeyS: false,
      KeyA: false,
      KeyD: false,
      Space: false,
    };
    this.gamepadButtons = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
      Button0: false,
    };
    this.gamepadHelper = new GamepadHelper();
  }

  draw() {
    this.ctx.fillStyle = "#ff0000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.bullets.forEach((bullet) => bullet.draw());
  }

  update() {
    this.keyboardHandler();
    this.gamepadHelper.update();
    this.gamepadHandler();
    this.move();
    this.x += this.speedX;
    this.y += this.speedY;
    this.checkCollisions();
    this.bullets.forEach((bullet) => bullet.update());
    this.checkBulletsCollisions();
    this.shoot();
  }

  keyboardHandler() {
    addEventListener("keydown", (e) => {
      if (e.code == "ArrowUp") this.keys.ArrowUp = true;
      if (e.code == "ArrowDown") this.keys.ArrowDown = true;
      if (e.code == "ArrowLeft") this.keys.ArrowLeft = true;
      if (e.code == "ArrowRight") this.keys.ArrowRight = true;
      if (e.code == "KeyW") this.keys.KeyW = true;
      if (e.code == "KeyS") this.keys.KeyS = true;
      if (e.code == "KeyA") this.keys.KeyA = true;
      if (e.code == "KeyD") this.keys.KeyD = true;
      if (e.code == "Space") this.canShoot = false;
    });

    addEventListener("keyup", (e) => {
      if (e.code == "ArrowUp") this.keys.ArrowUp = false;
      if (e.code == "ArrowDown") this.keys.ArrowDown = false;
      if (e.code == "ArrowLeft") this.keys.ArrowLeft = false;
      if (e.code == "ArrowRight") this.keys.ArrowRight = false;
      if (e.code == "KeyW") this.keys.KeyW = false;
      if (e.code == "KeyS") this.keys.KeyS = false;
      if (e.code == "KeyA") this.keys.KeyA = false;
      if (e.code == "KeyD") this.keys.KeyD = false;
      if (e.code == "Space") this.canShoot = true;
    });
  }

  gamepadHandler() {
    document.addEventListener("gampadbuttondown", (event) => {
      if (event.detail.gamepad == 0 && event.detail.button === 12)
        this.gamepadButtons.ArrowUp = true;
      if (event.detail.gamepad == 0 && event.detail.button === 13)
        this.gamepadButtons.ArrowDown = true;
      if (event.detail.gamepad == 0 && event.detail.button === 14)
        this.gamepadButtons.ArrowLeft = true;
      if (event.detail.gamepad == 0 && event.detail.button === 15)
        this.gamepadButtons.ArrowRight = true;
      if (event.detail.gamepad == 0 && event.detail.button === 0)
        this.canShoot = false;
    });

    document.addEventListener("gampadbuttonup", (event) => {
      if (event.detail.gamepad == 0 && event.detail.button === 12)
        this.gamepadButtons.ArrowUp = false;
      if (event.detail.gamepad == 0 && event.detail.button === 13)
        this.gamepadButtons.ArrowDown = false;
      if (event.detail.gamepad == 0 && event.detail.button === 14)
        this.gamepadButtons.ArrowLeft = false;
      if (event.detail.gamepad == 0 && event.detail.button === 15)
        this.gamepadButtons.ArrowRight = false;
      if (event.detail.gamepad == 0 && event.detail.button === 0)
        this.canShoot = true;
    });
  }

  move() {
    if (this.keys.ArrowUp || this.keys.KeyW || this.gamepadButtons.ArrowUp)
      this.y -= 5;
    if (this.keys.ArrowDown || this.keys.KeyS || this.gamepadButtons.ArrowDown)
      this.y += 5;
    if (this.keys.ArrowLeft || this.keys.KeyA || this.gamepadButtons.ArrowLeft)
      this.x -= 5;
    if (
      this.keys.ArrowRight ||
      this.keys.KeyD ||
      this.gamepadButtons.ArrowRight
    )
      this.x += 5;
  }

  checkCollisions() {
    if (this.x <= 0) this.x = 0;
    if (this.x >= this.ctx.canvas.width - this.width)
      this.x = this.ctx.canvas.width - this.width;
    if (this.y <= 0) this.y = 0;
    if (this.y >= this.ctx.canvas.height - this.height)
      this.y = this.ctx.canvas.height - this.height;
  }

  checkBulletsCollisions() {
    this.bullets.forEach((bullet) => {
      if (bullet.y < 0 || bullet.y > this.ctx.canvas.height) {
        this.bullets.splice(this.bullets.indexOf(bullet), 1);
      }
    });
  }

  shoot() {
    if (this.canShoot) {
      this.bullets.push(
        new Bullet(this.ctx, this.x + this.width / 2, this.y, 5, 25, "player")
      );
    }

    this.canShoot = false;
  }
}
