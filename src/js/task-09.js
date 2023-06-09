function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button.change-color");
const text = document.querySelector(".color");
btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  (document.body.style.backgroundColor = newColor),
    (text.textContent = `${newColor}`);
});
