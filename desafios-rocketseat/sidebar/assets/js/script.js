document.getElementById('menu-hamburguer').addEventListener('click', event => {
    const aside = document.querySelector('aside');
    aside.classList.toggle('close');
})