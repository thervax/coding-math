window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");

  /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  let ship = new Particle(width / 2, height / 2, 0, 0);
  let thrust = new Vector(0, 0);
  let angle = 0;
  let turningLeft = false;
  let turningRight = false;
  let thursting = false;

  document.body.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w":
        thursting = true;
        break;

      case "a":
        turningLeft = true;
        break;

      case "d":
        turningRight = true;
        break;

      default:
        break;
    }
  });

  document.body.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "w":
        thursting = false;
        break;

      case "a":
        turningLeft = false;
        break;

      case "d":
        turningRight = false;
        break;

      default:
        break;
    }
  });

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    if (turningLeft) {
      angle -= 0.05;
    }
    if (turningRight) {
      angle += 0.05;
    }
    thrust.setAngle(angle);

    if (thursting) {
      thrust.setLength(0.1);
    } else {
      thrust.setLength(0);
    }

    ship.accelerate(thrust);
    ship.update();

    context.save();
    context.translate(ship.position.x, ship.position.y);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(10, 0);
    context.lineTo(-10, -7);
    context.moveTo(10, 0);
    context.lineTo(-10, 7);
    context.lineTo(-10, -7);
    context.stroke();
    if (thursting) {
      context.fillStyle = "red";
      context.beginPath();
      context.moveTo(-10, 0);
      context.lineTo(-60, -10);
      context.lineTo(-60, 10);
      context.closePath();
      context.fill();
    }

    context.restore();

    if (ship.position.x > width) {
      ship.position.x = 0;
    }
    if (ship.position.x < 0) {
      ship.position.x = width;
    }
    if (ship.position.y > height) {
      ship.position.y = 0;
    }
    if (ship.position.y < 0) {
      ship.position.y = height;
    }

    requestAnimationFrame(render);
  }
};
