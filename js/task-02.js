const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const els = ingredients.forEach((element) => {
  const item = document.createElement('li');
  item.classList = 'item';
  item.textContent = element;
  
  const ingredientsMarkup = list.append(item);

  });




  


