const mobileNavbar = document.querySelector('.navbar__mobile');
const mobileLink = document.querySelector('.mobile__links');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

mobileNavbar.addEventListener('click', function (event) {

    if (mobileLink.contains(event.target)) {

        mobileNavbar.classList.remove('active');
    }
});
