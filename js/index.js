import {set_info_card_state} from "./info-card.js";

const timeline_view = document.getElementById("TIMELINE-VIEW");
const geo_hochzeit_view = document.getElementById("GEO-HOCHZEIT-VIEW");
const website_design_view = document.getElementById("WEBSITE-DESIGN-VIEW");

document.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    set_info_card_state("personal_information");
    document.getElementById("image-container").replaceChildren();
  }
});

function fix_info_card_to_corner() {
  document.getElementById("back-to-timeline-button").classList.remove("hidden");
  document.getElementById("infoCard").classList.add("no-hover");
  document.getElementById("infoCard").style.transform = "translate(0, 0) scale(var(--scale))";
  document.getElementById("infoCard").style.margin = "8px 8px";
}

function show_timeline_view() {
  timeline_view.classList.remove("hidden");
  document.getElementById("back-to-timeline-button").classList.add("hidden");
  document.getElementById("infoCard").style.transform = "translate(var(--translate)) scale(var(--scale))";
  document.getElementById("infoCard").style.margin = "0px 0px";
  document.getElementById("infoCard").classList.remove("no-hover");
}

function show_geo_hochzeit_view() {
  geo_hochzeit_view.classList.remove("hidden");
  fix_info_card_to_corner();
  set_info_card_state("personal_information");
}

function show_website_design_view() {
  website_design_view.classList.remove("hidden");
  fix_info_card_to_corner();
  set_info_card_state("personal_information");
}

export function show_view(view) {
  timeline_view.classList.add("hidden");
  geo_hochzeit_view.classList.add("hidden");
  website_design_view.classList.add("hidden");

  switch (view) {
    case "timeline":
      show_timeline_view();
      break;
    case "geo-hochzeit":
      show_geo_hochzeit_view();
      break;
    case "website-design":
      show_website_design_view();
      break;
  }
}


