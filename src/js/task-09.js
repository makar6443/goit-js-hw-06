// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const btnRef = document.querySelector('.change-color');

const body = document.querySelector('body');

const codeColorRef = document.querySelector('.color');

btnRef.addEventListener('click', () => getRandomHexColor());

function getRandomHexColor() {
  const newColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  console.log(newColor);
  body.style.background = newColor

  codeColorRef.textContent = newColor
  return newColor
}
console.log(btnRef);