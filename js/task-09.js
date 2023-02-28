const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const bgColorValue = document.querySelector('.color');

btn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  bgColorValue.textContent = body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
