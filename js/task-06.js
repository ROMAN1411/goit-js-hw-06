const inputField = document.querySelector('#validation-input');

const blurOff = (event) => {
    if (event.currentTarget.value.length == inputField.dataset.length) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    }
    else {
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');
    }
}
inputField.addEventListener('blur', blurOff);

console.log(inputField.event)
