function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateBox = document.querySelector('[data-create]');
const buttonDestroyBox = document.querySelector('[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]')
const divBoxes = document.querySelector('#boxes');

buttonCreateBox.addEventListener('click', onButtonCreateBoxClick);
buttonDestroyBox.addEventListener('click', onButtonDestroyBoxClick);

function onButtonCreateBoxClick() {
  const elements = [];
  let currentBoxSize = 30;
  for (let i = 0; i < Number(inputNumber.value); i++) {
    const boxElem = document.createElement('div');
    boxElem.style.width = currentBoxSize + 'px';
    boxElem.style.height = currentBoxSize + 'px';
    boxElem.style.backgroundColor = getRandomHexColor();

    currentBoxSize += 10;
    elements.push(boxElem);
  }
  divBoxes.append(...elements);
}

function onButtonDestroyBoxClick() {
  divBoxes.innerHTML = '';
}
