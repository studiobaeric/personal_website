import {set_info_card_state} from "./info-card.js";

const timeline_view = document.getElementById("TIMELINE-VIEW");
const geo_hochzeit_view = document.getElementById("GEO-HOCHZEIT-VIEW");

document.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    set_info_card_state("personal_information");
  }
});

export function show_view(view) {
  switch (view) {
    case "timeline":
      timeline_view.classList.remove("hidden");
      geo_hochzeit_view.classList.add("hidden");
      break;
    case "geo-hochzeit":
      geo_hochzeit_view.classList.remove("hidden");
      timeline_view.classList.add("hidden");
      document.getElementById("infoCard").style.transition = "transform 1s ease";
      document.getElementById("infoCard").style.transform = "translate(0, 0)";
      break;
  }
}


