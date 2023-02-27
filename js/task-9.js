const body = document.querySelector('body');
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

function changeBackgroundColor () {
    const color = getRandomHexColor();

    body.style.backgroundColor = color;
    spanEl.textContent = color;
}

buttonEl.addEventListener('click',changeBackgroundColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
