const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const photos = document.getElementById("photos");

var position = 250;

rightBtn.addEventListener("click", () => {
  position >= 500 ? (position = 0) : (position += 250);
  photos.style.right = `${position}px`;
  console.log("mas:", position);
});

leftBtn.addEventListener("click", () => {
  position <= 0 ? (position = 500) : (position -= 250);
  photos.style.right = `${position}px`;
  console.log("menos:", position);
});

setInterval(() => {
  position >= 500 ? (position = 0) : (position += 250);
  photos.style.right = `${position}px`;
}, 4000);

console.log(location);
