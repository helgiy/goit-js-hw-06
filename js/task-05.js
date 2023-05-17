const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(this.value);
    spanEl.textContent = this.value;
 
}
    