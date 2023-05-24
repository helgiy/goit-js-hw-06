const categoriesEL = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEL.length}`);

categoriesEL.forEach((item) => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
  // console.log(`Category: ${item.querySelector("h2").textContent}`);
  // console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
