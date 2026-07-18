function getCenter(el, svg) {
  const rect = el.getBoundingClientRect();
  const svgRect = svg.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2 - svgRect.left,
    y: rect.top + rect.height / 2 - svgRect.top
  };
}

function getBlocks() {
  // matches wd-block1, wd-block2, ...
  return [...document.querySelectorAll('[id^="wd-block"]')]
    .sort((a, b) => {
      const na = parseInt(a.id.replace('wd-block', ''), 10);
      const nb = parseInt(b.id.replace('wd-block', ''), 10);
      return na - nb;
    });
}

// Convert points to smooth cubic bezier path
function catmullRom2bezier(points) {
  if (points.length < 2) return '';

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;

    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return d;
}

function drawConnectionLine() {
  const svg = document.getElementById('wd-connections');
  const blocks = getBlocks();

  const points = blocks.map(b => getCenter(b, svg));

  const pathData = catmullRom2bezier(points);

  let path = svg.querySelector('path');
  if (!path) {
    path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'rgba(0, 0, 0, 0.2)');
    path.setAttribute('stroke-width', '90');
    svg.appendChild(path);
  }

  path.setAttribute('d', pathData);
}

// redraw on load + resize + scroll (important if layout changes)
window.addEventListener('load', drawConnectionLine);
window.addEventListener('resize', drawConnectionLine);


document.addEventListener("click", (event) => {
  if (event.target.id === "back-to-timeline-button") {
    console.log("back-to-timeline-button clicked");

    document
      .getElementById("WEBSITE-DESIGN-VIEW")
      .classList.add("hidden");

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 300);
  }
});
