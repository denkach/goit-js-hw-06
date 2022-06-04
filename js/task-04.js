const counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', () => {
    counterValue.textContent--;
})

buttonIncrement.addEventListener('click', () => {
    counterValue.textContent++;
})