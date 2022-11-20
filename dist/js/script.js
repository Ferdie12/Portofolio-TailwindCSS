// navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Ikon Nav
const ikon = document.querySelector('#ikon');
const navMenu = document.querySelector('#nav-menu');

ikon.addEventListener('click', () => {
    ikon.classList.toggle("ikon-active");
    navMenu.classList.toggle('hidden');
})