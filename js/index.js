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

function light() {

    if (temaEscuro === true) {

        nav.classList.add('dark-theme')
        nav.classList.remove('navbar__color')
        body.classList.add('dark-theme')
        div.classList.add('dark-theme')
        footer.classList.add('dark-theme')
        ul.classList.add('dark-theme')
        temaEscuro = false;

    } else {

        nav.classList.remove('dark-theme')
        nav.classList.add('navbar__color')
        body.classList.remove('dark-theme')
        div.classList.remove('dark-theme')
        footer.classList.remove('dark-theme')
        ul.classList.remove('dark-theme')
        temaEscuro = true;
    }
}
