import {show_view} from "./index.js";

const postItColors = ['#fe8e45', '#f86398', '#58d3d6']

function setCardFocusedMode() {
  document.body.classList.add("card-focused");
}

function setPostItColors() {
  document.querySelectorAll(".post-it").forEach(note => {
    note.style.background = postItColors[Math.floor(Math.random() * postItColors.length)];
  });
}

setPostItColors();

document.getElementById("geohochzeit-button").addEventListener("click", () => {
  show_view("geo-hochzeit");
});
document.getElementById("website-design-button").addEventListener("click", () => {
  show_view("website-design");
})
