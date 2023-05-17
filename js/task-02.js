const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const listEl = document.getElementById('ingredients');
// const ingredientsMukap = ingredients.map(ingredient =>
//   `<li class="item">${ingredient}</li>`).join('\n');
// listEl.innerHTML = ingredientsMukap;
// console.log(ingredientsMukap);

const listEl = document.getElementById('ingredients');
const ingredientsMukap = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
});
listEl.append(...ingredientsMukap);
console.log(listEl);