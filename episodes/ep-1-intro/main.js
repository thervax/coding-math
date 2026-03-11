window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");

    /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  for (let i = 0; i < 100; i++) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  }
};
