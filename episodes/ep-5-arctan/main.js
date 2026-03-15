window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");

  /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  let centerX = width / 2;
  let centerY = height / 2;
  let arrowX = centerX;
  let arrowY = centerY;
  let offset = 400;
  let moveAngleX = 0;
  let moveSpeedX = 0.05;
  let moveAngleY = 0;
  let moveSpeedY = 0.01;
  let dx, dy;
  let angle = 0;

  let mouseX = 0;
  let mouseY = 0;

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    arrowX = centerX + Math.sin(moveAngleX) * offset;
    arrowY = centerY + Math.sin(moveAngleY) * offset;

    context.save();
    context.translate(arrowX, arrowY);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(-20, 0);
    context.moveTo(20, 0);
    context.lineTo(10, -10);
    context.moveTo(20, 0);
    context.lineTo(10, 10);
    context.stroke();

    context.restore();

    moveAngleX += moveSpeedX;
    moveAngleY += moveSpeedY;

    dx = mouseX - arrowX;
    dy = mouseY - arrowY;
    angle = Math.atan2(dy, dx);

    requestAnimationFrame(render);
  }

  document.body.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
};
