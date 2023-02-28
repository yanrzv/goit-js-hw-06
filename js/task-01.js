const mainList = document.querySelector('#categories');
const categories = mainList.querySelectorAll('ul');

const categoriesQuantity = categories.length;

console.log(`Number of categories: ${categoriesQuantity}`);


const subCategory = document.querySelectorAll('.item');

subCategory.forEach((element) => {
    const title = element.querySelector('h2');
    console.log(`Category: ${title.textContent}`);

    const subElementsQuantity = element.querySelectorAll('li').length;
    console.log(`Elements: ${subElementsQuantity}`);

  })




