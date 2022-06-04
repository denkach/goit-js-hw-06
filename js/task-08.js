const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: {
            email: { value: email },
            password: {value: password},
        }
    } = event.currentTarget;

    if (!email || !password) {
        alert('Заповніть всі поля.');
    } else {
        console.log(`email: ${email}
password: ${password}`);
    }
    
    formEl.reset();
}

