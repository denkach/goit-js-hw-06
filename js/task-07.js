const fontSizeControl = document.querySelector('#font-size-control');
const resultText = document.querySelector('#text');

fontSizeControl.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput(event) {
    resultText.style.fontSize = event.currentTarget.value + 'px';
}