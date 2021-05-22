const toogleBtn = document.querySelector('.navbar2__toogleBtn');
const menu = document.querySelector('.navbar2__menu');
const icons = document.querySelector('.navbar2__icons');

toogleBtn.addEventListener('click', () => {
    menu.classlist.toggle('active');
    icons.classlist.toggle('active');
});
