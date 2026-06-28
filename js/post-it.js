const postItColors = ['#fe8e45', '#f86398', '#58d3d6', '#f8838a']

function setCardFocusedMode() {
  document.body.classList.add("card-focused");
}

function setPostItColors() {
  document.querySelectorAll(".post-it").forEach(note => {
    note.style.background = postItColors[Math.floor(Math.random() * postItColors.length)];
  });
}

setPostItColors();

document.getElementById("geohochzeit").addEventListener("click", () => {
  setCardFocusedMode();

});
