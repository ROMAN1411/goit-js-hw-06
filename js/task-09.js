const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgColor = function () {

  const colorValue = `${getRandomHexColor()}`;
console.log('colorValue:' + colorValue)

  document.body.style.backgroundColor = colorValue;
  span.textContent = colorValue;
}

button.addEventListener('click', changeBgColor)