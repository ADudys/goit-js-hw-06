console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);
const categories = document.querySelectorAll("h2");
categories.forEach((category) => {
  console.log(`Category: ${category.textContent}
  Elements: ${category.nextElementSibling.childElementCount}`);
});
