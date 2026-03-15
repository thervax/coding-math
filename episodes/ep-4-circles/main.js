window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");

  /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  let centerY = height * 0.5;
  let centerX = width * 0.5;

  let radius = 250;
  let angle = 0;
  let numObjects = 3;
  let slice = (Math.PI * 2) / numObjects;

  for (let i = 0; i < numObjects; i++) {
    let x = centerX + Math.cos(angle) * radius;
    let y = centerY + Math.sin(angle) * radius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
    angle += slice;
  }
};
