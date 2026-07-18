const images = document.querySelectorAll(".zoomable-image");

const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const close = document.getElementById("close-modal");

images.forEach(image => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
