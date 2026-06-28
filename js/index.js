import {set_state} from "./info-card.js";

document.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    set_state("personal_information");
  }
});
