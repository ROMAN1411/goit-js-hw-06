const form = document.querySelector('.login-form');

const onFormSubmit = function (event) {
    event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля джолжны быть заполнены!");
    event.currentTarget.reset();
  }
  
  console.log(`Email: ${email.value}`);
  console.log(`Password: ${password.value}`);

  // console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);
