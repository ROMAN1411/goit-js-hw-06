const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const anonymous = output.textContent;

const onInputChange = (name) => {
  if (name.currentTarget.value === "") {
    return (output.textContent = anonymous);
  }
  return (output.textContent = name.currentTarget.value);
}

input.addEventListener('input', onInputChange);



