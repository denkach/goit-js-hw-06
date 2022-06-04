const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = document.querySelector('#ingredients');

const result = ingredients.map(ingredient => {
  const elemLi = document.createElement('li');
  elemLi.textContent = ingredient;
  elemLi.classList.add('item');
  return elemLi;
})

elements.append(...result);