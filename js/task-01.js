const allUlCategories = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${allUlCategories.length}`);

allUlCategories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});