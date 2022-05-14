const postagens = [
    {
        id: 01,
        data: '02 de jul, 2021',
        titulo: 'Agora é oficial: o Windows 11 está vindo',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
    },
    {
        id: 02,
        data: '02 de jul, 2021',
        titulo: 'Tim Berners-Lee vai leiloar código-fonte da web',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
    },
    {
        id: 03,
        data: '02 de jul, 2021',
        titulo: 'Tem Firefox novo no pedaço e você vai querer migrar',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.'
    },
    {
        id: 04,
        data: '02 de jul, 2021',
        titulo: 'John McAfee, criador do antivírus McAfee, morre',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
    },
];

const containerPosts = document.querySelector('.posts-container');

postagens.forEach(post => {
containerPosts.innerHTML += `
    <article class="post">
        <section class="post-status-bar">
            <span class="post-time">${post.data}</span>
            <div class="post-icon">
                <img src="assets/img/icons/icon-heart.svg" alt="Ícone de curtida">
            </div>
        </section>
        <section class="post-content">
            <h2 class="post-title">${post.titulo}</h2>
            <p class="post-paragraph">${post.texto}</p>
        </section>
    </article>
`
});

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