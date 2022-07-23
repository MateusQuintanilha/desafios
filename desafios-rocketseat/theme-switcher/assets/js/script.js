const switchTheme = document.getElementById('switch-theme');

switchTheme.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
})