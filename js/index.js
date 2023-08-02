let temaEscuro = true;

const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const body = document.getElementsByTagName('body')[0];
const div = document.getElementsByTagName('div')[0];
const section = document.getElementsByTagName('section')[0];
const nav = document.getElementsByTagName('nav')[0];
const footer = document.getElementsByTagName('footer')[0];
const ul = document.getElementsByTagName('ul')[1];

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {

    if (this.window.pageYOffset > 0) {

        return navbar.classList.add('active')

    } else {

        return navbar.classList.remove('active');

    }
});