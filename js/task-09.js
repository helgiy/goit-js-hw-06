function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl= document.querySelector('.widget');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
console.log(getRandomHexColor())
btnEl.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  divEl.parentNode.style.backgroundColor = getRandomHexColor();
})