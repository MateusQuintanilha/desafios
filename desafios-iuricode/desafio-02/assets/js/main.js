const products = [
    {
        id: 01,
        title:'Tênis Air Jordan 1 High – Zoom CMFT Tropical Twist',
        product:'./assets/img/produtos/dutch-green.png'
    },
    {
        id: 02,
        title:'Tênis Air Jordan 1 Mid – Black/White Noble Red',
        product:'./assets/img/produtos/zoom-cmft-tropical-twist.png'
    },
    {
        id: 03,
        title:'Tênis Air Jordan 1 Mid – SE Bright Citrus',
        product:'./assets/img/produtos/high-court-purple.png'
    },
    {
        id: 04,
        title:'Tênis Air Jordan 1 Mid – Carbon Fiber',
        product:'./assets/img/produtos/light-smoke-grey.png'
    },
    {
        id: 05,
        title:'Tênis Air Jordan 1 Mid – Dutch Green',
        product:'./assets/img/produtos/black-white-noble-red.png'
    },
    {
        id: 06,
        title:'Tênis Air Jordan 1 Mid – Grey Camo',
        product:'./assets/img/produtos/se-bright-citrus.png'
    },
    {
        id: 07,
        title:'Tênis Air Jordan 1 Mid – Light Smoke Grey',
        product:'./assets/img/produtos/grey-camo.png'
    },
    {
        id: 08,
        title:'Tênis Air Jordan 1 Retro – High Court Purple',
        product:'./assets/img/produtos/carbon-fiber.png'
    }
];

const containerProdutos = document.querySelector('.products');

products.forEach((produto) => {
    containerProdutos.innerHTML += `
    <figure class="product-single">
        <img src="${produto.product}" alt="${produto.title}">
    </figure>
`;
});
