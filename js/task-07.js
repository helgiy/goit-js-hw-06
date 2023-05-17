const textSizeEl = document.getElementById('font-size-control');
const textValueEl = document.getElementById('text');
textSizeEl.addEventListener("input", () => {
    textValueEl.style.fontSize =`${textSizeEl.value}px`;
});