const decEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.getElementById('value');
let counterValue = 0;
const incEl = document.querySelector('button[data-action="increment"]');
decEl.addEventListener('click', ButtonDecEl);
incEl.addEventListener('click', ButtonIncEl);
function ButtonDecEl() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
function ButtonIncEl() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
console.log(document.getElementById('counter'))