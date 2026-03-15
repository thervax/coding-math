class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setAngle(angle) {
    let length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  setLength(length) {
    let angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  print() {
    console.log(`x: ${this.x}, y: ${this.y}`);
  }

  add(v2) {
    return new Vector(this.x + v2.x, this.y + v2.y);
  }

  subtract(v2) {
    return new Vector(this.x - v2.x, this.y - v2.y);
  }

  multiply(value) {
    return new Vector(this.x * value, this.y * value);
  }

  divide(value) {
    return new Vector(this.x / value, this.y / value);
  }

  addTo(v2) {
    this.x += v2.x;
    this.y += v2.y;
  }

  subtractFrom(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
  }

  multiplyBy(value) {
    this.x *= value;
    this.y *= value;
  }

  divideBy(value) {
    this.x /= value;
    this.y /= value;
  }
}
