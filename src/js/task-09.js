function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button.change-color");
const text = document.querySelector(".color");
const newColor = getRandomHexColor();

btn.addEventListener(
  "click",
  () => (
    (document.body.style.backgroundColor = newColor),
    (text.textContent = `${newColor}`)
  )
);
