const svg = document.getElementById("connectorLayer");

const jitter = () => (Math.random() - 0.5) * 30;

function getCenter(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 + window.scrollX,
    y: rect.top + rect.height / 2 + window.scrollY
  };
}

function getDotCenter(label) {
  const dot = label.querySelector(".label_dot");
  const rect = dot.getBoundingClientRect();

  return {
    x: (rect.left + rect.width / 2 + window.scrollX) + (Math.floor(Math.random() * (rect.width / 2)) * Math.random() < 0.5 ? 1 : -1),
    y: (rect.top + rect.height / 2 + window.scrollY) + (Math.floor(Math.random() * (rect.width / 2)) * Math.random() < 0.5 ? 1 : -1)
  };
}

function drawPath(from, to) {
  const dx = to.x - from.x;

  // control points (this creates the "curve")
  const c1 = {
    x: from.x + dx * 0.3 + jitter(),
    y: from.y + jitter()
  };

  const c2 = {
    x: from.x + dx * 0.7 + jitter(),
    y: to.y + jitter()
  };

  return `
    M ${from.x} ${from.y}
    C ${c1.x} ${c1.y},
      ${c2.x} ${c2.y},
      ${to.x} ${to.y}
  `;
}

function renderConnections() {

  const items = document.querySelectorAll(".item");

  if (items.length === 0) {
    console.error("Red Strings tried to render before items exist.");
    return;
  }

  svg.innerHTML = "";

  items.forEach(item => {
    const dot = item.querySelector(".timeline_dot");
    const label = item.querySelector(".label");

    if (!dot || !label) return;

    const from = getCenter(dot);
    const to = getDotCenter(label);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute("d", drawPath(from, to));
    path.setAttribute("stroke", "#990000");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");
    path.setAttribute("opacity", "0.7");

    // optional: slightly sketchy feel
    path.setAttribute("stroke-linecap", "round");

    svg.appendChild(path);
  });
}

// redraw on load + resize
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    requestAnimationFrame(renderConnections);
  });
});
window.addEventListener("resize", renderConnections);
window.addEventListener("scroll", renderConnections);
