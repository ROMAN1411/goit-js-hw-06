const idValue = document.querySelector('#value');

let counterValue = 0;
// console.log(counterValue)

const incrementButton = document.querySelector('button[data-action = "increment"]')
const incrementValue = () => {
    counterValue += 1;
    idValue.textContent = counterValue;
    console.log('click, incrementValue')
};
incrementButton.addEventListener('click', incrementValue)

const decrementButton = document.querySelector('button[data-action = "decrement"]')
const decrementValue = () => {
    counterValue -= 1;
    idValue.textContent = counterValue;
    console.log('click, incrementValue')
};
decrementButton.addEventListener('click', decrementValue)
