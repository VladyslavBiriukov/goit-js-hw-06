const categories = document.querySelector('#categories');
console.log('Number of categories:',categories.children.length);

const categoriesItem = categories.querySelectorAll('.item');

categoriesItem.forEach(item => {
    console.log('Category:',item.firstElementChild.textContent);
    console.log('Elements:',item.lastElementChild.children.length);
});