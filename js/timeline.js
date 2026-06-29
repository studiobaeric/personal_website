import {set_info_card_state} from "./info-card.js";

await fetch("../components/timeline.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("timeline-container").innerHTML = html;
  });

const image_container = document.getElementById("image-container");

function reset_image_container() {
  image_container.replaceChildren();
}

document.getElementById("label_abitur").addEventListener("click", () => {
  reset_image_container();
  set_info_card_state("abitur_summary")
});

document.getElementById("label_tudarmstadt").addEventListener("click", () => {
  reset_image_container();
  set_info_card_state("tudarmstadt_summary");
});

document.getElementById("label_mentoring").addEventListener("click", () => {
  reset_image_container();
  set_info_card_state("mentoring_summary");
})

document.getElementById("label_seriousgames").addEventListener("click", () => {
  reset_image_container();
  set_info_card_state("seriousgames_summary");
});

document.getElementById("label_wwdd").addEventListener("click", () => {
  reset_image_container();
  set_info_card_state("wwdd_summary");
})

document.getElementById("label_micromobility").addEventListener("click", () => {
  set_info_card_state("micromobility_summary");

  const img = document.createElement("img");
  img.src = "./assets/micromobility.png";
  img.alt = "Micromobility Map";
  img.style.width = "300px";
  img.style.height = "300px";
  img.style.rotate = "6deg"
  img.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.35)";

  image_container.replaceChildren(img);
})

document.getElementById("label_website").addEventListener("click", () => {
  reset_image_container();
  set_info_card_state("website_summary");
})

document.getElementById("label_bachelor").addEventListener("click", () => {
  reset_image_container();
  set_info_card_state("bachelor_summary");
})
