const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsElementsRef = document.querySelector('#ingredients');

console.log(ingredientsElementsRef);

const ingredientsList = ingredients.map(item => {
  const ingrItem = document.createElement('li');
  ingrItem.textContent = item;
  ingrItem.classList.add('item');
  return ingrItem;
});

console.log(ingredientsList);

ingredientsElementsRef.append(...ingredientsList);
