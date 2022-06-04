const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
    const inputLength = event.currentTarget.value.length;
    const currentInput = event.currentTarget;

    if (inputLength !== Number(event.currentTarget.dataset.length)) {
        currentInput.classList.add('invalid');
        currentInput.classList.remove('valid');
    } else {
        currentInput.classList.remove('invalid');
        currentInput.classList.add('valid');
    }
}