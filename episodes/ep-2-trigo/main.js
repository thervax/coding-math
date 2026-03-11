window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");

    /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  context.translate(0, height / 2);
  context.scale(1, -1);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, 0);
  context.stroke();

  for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    let value = Math.sin(angle);
    context.fillRect(angle * 200, value * 200, 5, 5)
  }
};
