document.addEventListener('click', (event) => {
    const element = event.target;
    
    if(element.classList.contains('liked')){
        element.classList.toggle('liked');
        element.setAttribute('src', 'assets/img/icons/icon-heart.svg');
    } else {
        element.classList.toggle('liked');
        element.setAttribute('src', 'assets/img/icons/icon-heart-full.svg');
    }
});