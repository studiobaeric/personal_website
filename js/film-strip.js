await fetch("../components/film-strip.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("film-strip-container").innerHTML = html;
  });
