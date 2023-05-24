const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    // console.log(this.value);
    spanEl.textContent = this.value ? this.value: "Anonymous" ;       
}


// const ref = {
//     input: document.querySelector("#name-input"),
//     output: document.querySelector("#name-output"),
// }; ref.input.addEventListener("input", onInputChange);
// function onInputChange(event) {
//     const inputValue = event.target.value.trim();
//     ref.output.textContent = inputValue ? inputValue : "Anonymous"
// };
