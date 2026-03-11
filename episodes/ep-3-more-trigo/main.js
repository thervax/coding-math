window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");

    /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  let centerY = height * 0.5;
  let centerX = width * 0.5;
  let offsetY = height * 0.4;
  let speedY = 0.01;
  let angleY = 0;

  let offsetX = width * 0.4;
  let speedX = 0.03;
  let angleX = 0;

  let baseRadius = 50;
  let radiusOffset = 40;
  let radiusSpeed = 0.03;
  let radiusAngle = 0;

  render();

  function render() {
    let y = centerY + Math.sin(angleY) * offsetY;
    let x = centerX + Math.sin(angleX) * offsetX;
    let radius = baseRadius + Math.sin(radiusAngle) * radiusOffset;

    context.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
    context.clearRect(0, 0, width,height);
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fill();

    angleY += speedY;
    angleX += speedX;
    radiusAngle += radiusSpeed;

    requestAnimationFrame(render);
  }
};
