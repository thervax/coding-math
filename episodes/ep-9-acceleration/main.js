window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");

  /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  let particles = [];
  let numParticles = 100;

  for (let i = 0; i < numParticles; i++) {
    particles.push(
      new Particle(
        width / 2,
        height / 3,
        Math.random() * 4 + 2,
        (Math.random() * Math.PI) / 2 + Math.PI * 1.25,
        0.05,
      ),
    );
  }

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      context.beginPath();
      p.update();
      context.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2, false);
      context.fill();
    });

    requestAnimationFrame(render);
  }
};
