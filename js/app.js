const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastPoints = [];

window.addEventListener("mousemove", (e) => {
  const point = {
    x: e.clientX,
    y: e.clientY,
    time: Date.now()
  };

  lastPoints.push(point);
});

// draw loop
function draw() {
  const now = Date.now();

  // clear canvas each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  lastPoints = lastPoints.filter(p => now - p.time < 300); // keep only last 2s

  for (let i = 0; i < lastPoints.length; i++) {
    const p = lastPoints[i];

    if (i === 0) {
      ctx.moveTo(p.x, p.y);
    } else {
      ctx.lineTo(p.x, p.y);
    }
  }

  ctx.strokeStyle = "grey";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.stroke();

  requestAnimationFrame(draw);
}

draw();
