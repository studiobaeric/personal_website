await fetch("../components/film-strip.html")
  .then(res => res.text())
  .then(html => {
    document.querySelectorAll(".film-strip-container").forEach(x => x.innerHTML = html);
  });

