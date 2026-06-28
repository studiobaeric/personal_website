import {set_state} from "./info-card.js";

document.getElementById("label_abitur").addEventListener("click", () => {
  set_state("abitur_summary")
});

document.getElementById("label_tudarmstadt").addEventListener("click", () => {
  set_state("tudarmstadt_summary");
});

document.getElementById("label_mentoring").addEventListener("click", () => {
  set_state("mentoring_summary");
})

document.getElementById("label_seriousgames").addEventListener("click", () => {
  set_state("seriousgames_summary");
});

document.getElementById("label_wwdd").addEventListener("click", () => {
  set_state("wwdd_summary");
})

document.getElementById("label_micromobility").addEventListener("click", () => {
  set_state("micromobility_summary");
})

document.getElementById("label_website").addEventListener("click", () => {
  set_state("website_summary");
})

document.getElementById("label_bachelor").addEventListener("click", () => {
  set_state("bachelor_summary");
})
