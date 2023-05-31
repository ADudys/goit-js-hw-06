const minusBtn = document.querySelector(`button[data-action="decrement"]`);
const plusBtn = document.querySelector(`button[data-action="increment"]`);
const span = document.querySelector("#value");
let counterValue = 0;

minusBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;
  span.textContent = counterValue;
});
plusBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;
  span.textContent = counterValue;
});
