 let inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', (event) => {
    
    // if  (inputEl.getAttribute('data-length') == event.currentTarget.value.length) {
    //     inputEl.classList.add('valid')
    //     inputEl.classList.remove('invalid')
    // }
    // else {
    //     inputEl.classList.add('invalid')
    //     inputEl.classList.remove('valid')
    // }
    inputEl.getAttribute('data-length') == event.currentTarget.value.length
        ? inputEl.classList.add('valid') || inputEl.classList.remove('invalid')
        : inputEl.classList.add('invalid') || inputEl.classList.remove('valid')
})  