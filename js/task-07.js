const fontInput = document.querySelector('#font-size-control');
const spanInput = document.querySelector('#text');

const inputChange = function (event) {
    spanInput.style.fontSize = `${event.currentTarget.value}px`;
};

fontInput.addEventListener('input', inputChange);


