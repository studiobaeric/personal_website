import {set_info_card_state} from "./info-card.js";

document.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    set_info_card_state("personal_information");
  }
});


