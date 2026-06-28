import {set_info_card_state} from "./info-card.js";

await fetch("../components/timeline.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("timeline-container").innerHTML = html;
  });

document.getElementById("label_abitur").addEventListener("click", () => {
  set_info_card_state("abitur_summary")
});

document.getElementById("label_tudarmstadt").addEventListener("click", () => {
  set_info_card_state("tudarmstadt_summary");
});

document.getElementById("label_mentoring").addEventListener("click", () => {
  set_info_card_state("mentoring_summary");
})

document.getElementById("label_seriousgames").addEventListener("click", () => {
  set_info_card_state("seriousgames_summary");
});

document.getElementById("label_wwdd").addEventListener("click", () => {
  set_info_card_state("wwdd_summary");
})

document.getElementById("label_micromobility").addEventListener("click", () => {
  set_info_card_state("micromobility_summary");
})

document.getElementById("label_website").addEventListener("click", () => {
  set_info_card_state("website_summary");
})

document.getElementById("label_bachelor").addEventListener("click", () => {
  set_info_card_state("bachelor_summary");
})
