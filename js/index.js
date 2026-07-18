import {set_info_card_state} from "./info-card.js";

const timeline_view = document.getElementById("TIMELINE-VIEW");

document.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    set_info_card_state("personal_information");
    document.getElementById("image-container").replaceChildren();
  }
});

function fix_info_card_to_corner() {
  document.getElementById("back-to-timeline-button").classList.remove("hidden");
  document.getElementById("infoCard").classList.add("no-hover");
  document.getElementById("infoCard").classList.add("fixed");
}

function show_timeline_view() {
  timeline_view.classList.remove("hidden");
  document.getElementById("back-to-timeline-button").classList.add("hidden");
  document.getElementById("infoCard").classList.remove("fixed");
  document.getElementById("infoCard").classList.remove("no-hover");
}

function show_geo_hochzeit_view() {
  fix_info_card_to_corner();
  set_info_card_state("personal_information");
}

function show_website_design_view() {
  fix_info_card_to_corner();
  set_info_card_state("personal_information");

  setTimeout(() => {
    window.location.replace("./pages/website-design-page.html");
  }, 500);
}

export function show_view(view) {
  timeline_view.classList.add("hidden");

  switch (view) {
    case "geo-hochzeit":
      show_geo_hochzeit_view();
      break;
    case "website-design":
      show_website_design_view();
      break;
  }
}


