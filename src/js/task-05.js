const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const placeholder = "Anonymous";

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = placeholder;
  }
});
