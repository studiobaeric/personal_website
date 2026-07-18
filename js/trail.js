const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastPoints = [];

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  lastPoints.push({
    x: e.pageX,
    y: e.pageY,
    time: Date.now()
  });
});

window.addEventListener("scroll", () => {
  lastPoints.push({
    x: mouseX + window.scrollX,
    y: mouseY + window.scrollY,
    time: Date.now()
  });
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

function resizeCanvas() {
  canvas.width = document.documentElement.scrollWidth -15;
  canvas.height = document.documentElement.scrollHeight;

  console.log(
    document.documentElement.clientWidth,
    document.documentElement.scrollWidth,
    canvas.width
  );
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

draw();


