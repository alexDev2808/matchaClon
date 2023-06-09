const btnAbrir = document.querySelector('#btnAbrir');
const btnCerrar = document.querySelector('#btnCerrar');
const navbar = document.querySelector('#nav');

btnAbrir.addEventListener('click', () => {
    navbar.classList.add('visible');
});

btnCerrar.addEventListener('click', () => {
    navbar.classList.remove('visible');
});

