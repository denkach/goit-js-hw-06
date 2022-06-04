function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorSpan.textContent = color;
}
