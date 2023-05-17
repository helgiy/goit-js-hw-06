const formEl = document.querySelector('.login-form');
const useremail = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault()

    const elements = {
        email: useremail.value,
        pass: password.value
    }
    if (useremail.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені!')
    }
    console.log(elements);
    formEl.reset();
};

