const parent = document.querySelector(".top_left");
const postIts = document.querySelectorAll(".post-it");
const postItColors = ['#fe8e45', '#f86398', '#58d3d6', '#f8838a']

postIts.forEach(postIt => {
  const maxX = parent.clientWidth - postIt.offsetWidth;
  const maxY = parent.clientHeight - postIt.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  function getRotation() {
    return (Math.random() * 6) * (Math.random() >= 0.5 ? 1 : -1);
  }

  // Position
  postIt.style.left = `${x}px`;
  postIt.style.top = `${y}px`;
  postIt.style.rotate = getRotation() + 'deg';

  // Color
  postIt.style.background = postItColors[Math.floor(Math.random() * postItColors.length)];
});
