console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);
const categories = document.querySelectorAll("h2");
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}
  Elements: ${item.querySelectorAll("li").length}`);
});
