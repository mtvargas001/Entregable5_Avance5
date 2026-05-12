// Arreglo de objetos con los datos del menú
const menu = [
    // Entradas
    { name: 'Sopa de Caverna', description: 'Crema de hongos silvestres con crujientes de pan al ajo, servida en cuenco rústico.', price: '$120', image: 'img/sopa taverna.png', category: 'entradas' },
    { name: 'Raíces Asadas', description: 'Mezcla de zanahoria, betabel y chirivía al horno, con toque de hierbas de montaña.', price: '$100', image: 'img/raices asadas.png', category: 'entradas' },
    { name: 'Crisp de Lava', description: 'Chips de yuca y camote con salsa picante de jitomate ahumado.', price: '$90', image: 'img/Crisp de Lava.png', category: 'entradas' },

    // Platos Fuertes
    { name: 'Filete a la Roca', description: 'Filete de res cocido sobre piedra caliente, con reducción de vino y verduras de temporada.', price: '$250', image: 'img/Filete a la roca.png', category: 'plato-fuerte' },
    { name: 'Pollo del Subsuelo', description: 'Pollo al horno de piedra con romero, papas rústicas y zanahorias asadas.', price: '$210', image: 'img/pollo del subsuelo.png', category: 'plato-fuerte' },
    { name: 'Lomo Volcánico', description: 'Lomo de cerdo glaseado con frutos rojos, servido sobre plato oscuro simulando roca.', price: '$230', image: 'img/lomo volcanico.png', category: 'plato-fuerte' },
    { name: 'Pescado de Lava', description: 'Filete de pescado del día, cocido al vapor con cítricos y servido sobre piedra caliente.', price: '$220', image: 'img/Pescado de lava.png', category: 'plato-fuerte' },

    // Bebidas
    { name: 'Bebida Volcánica', description: 'Refresco chispeante con frutos rojos y limón, efecto lava visual.', price: '$65', image: 'img/bebida volcanica.png', category: 'bebidas' },
    { name: 'Limonada Subterránea', description: 'Limonada con jarabe de frutos rojos que se mezcla lentamente, servida con hielo picado.', price: '$50', image: 'img/limonada.png', category: 'bebidas' },
    { name: 'Agua Mineral de Cueva', description: 'Agua con gas con un toque de hierbas frescas y rodaja de cítrico.', price: '$45', image: 'img/Agua mineral de cueva.png', category: 'bebidas' },

    // Postres
    { name: 'Tarta de Lava', description: 'Mini tarta de chocolate negro con centro líquido rojo, decorada con cacao en polvo simulando ceniza.', price: '$80', image: 'img/Tarta de lava.png', category: 'postres' },
    { name: 'Brownie Subterráneo', description: 'Brownie de chocolate con nueces, servido con helado y toque de cacao.', price: '$75', image: 'img/brownie subterraneo.png', category: 'postres' },
    { name: 'Crème de Piedra', description: 'Crema de vainilla con base de galleta rústica y frutos rojos como “minerales”.', price: '$70', image: 'img/postre.png', category: 'postres' }
];

// Función para renderizar los ítems del menú
function renderMenuItems(category = 'all') {
    const container = document.querySelector('.menu-items');
    container.innerHTML = '';
    
    const filteredItems = category === 'all' ? menu : menu.filter(item => item.category === category);

    if (filteredItems.length === 0) {
        container.innerHTML = '<p>No hay productos en esta categoría.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.dataset.category = item.category;
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        container.appendChild(itemElement);
    });
}

// Event Listeners para los botones de filtrado
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const category = e.target.dataset.category;
        renderMenuItems(category);
    });
});

// Lógica del Slider
const slider = document.querySelector('.slide-row');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

window.addEventListener('resize', updateSlider);

document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems('all');
});