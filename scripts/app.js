const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = 'Justine Insong';

copyright.textContent = `© ${new Date().getFullYear()}`;
let quantity = document.querySelector('#q').value;

alert(document.lastModified);