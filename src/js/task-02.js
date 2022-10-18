const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.querySelector('ul#ingredients');

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

  list.innerHTML = markup

// for (let i = 0; i < ingredients.length; i += 1) {
//   let aNewListItem = document.createElement('li');
//   aNewListItem.textContent = ingredients[i];
//   aNewListItem.classList.add('item');
//   listOfIngredients.append(aNewListItem)

// }
// console.log(listOfIngredients)