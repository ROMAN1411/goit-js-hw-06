const inputField = document.querySelector('#validation-input');

const blurOff = (event) => {

    const inputValue = event.currentTarget.value.length;    
    const requiredValue = inputField.dataset.length;
    console.log(typeof (event.currentTarget.value.length))
    console.log(typeof (inputField.dataset.length))

    if (inputValue === Number(requiredValue)) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    }
    else {
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');
    }
}
inputField.addEventListener('blur', blurOff);

