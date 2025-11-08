// Product data - fixed for customer display
const products = [
    { id: 1, name: 'Liquid Detergent (White)', size: '1L', price: 80, image: 'liquid white.png' },
    { id: 2, name: 'Liquid Detergent (Blue)', size: '1L', price: 80, image: 'liquid blue.png' },
    { id: 3, name: 'Stain Remover', size: '500ml', price: 50, image: 'stainremover.png' },
    { id: 4, name: 'Floor Cleaner', size: '500ml', price: 60, image: 'floorlceaner.png' },
    { id: 5, name: 'Phenyl', size: '1L', price: 50, image: 'images/phenyl.jpg' },
    { id: 6, name: 'Fabric Conditioner', size: '500ml', price: 80, image: 'images/fabric.jpg' },
    { id: 7, name: 'Dish Wash', size: '500ml', price: 60, image: 'dishwash.png' }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Render products grid
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductViewModal(product);
    
    const imageSrc = product.image || 'placeholder.png';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${imageSrc}" alt="${product.name}" class="product-img" 
                 loading="lazy" 
                 onerror="this.onerror=null; this.src='${imageSrc.replace('.jpg', '.png').replace('.png', '.jpg')}'; this.onerror=function(){this.style.display='none';};">
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-size">${product.size}</p>
        <p class="product-price">₹${product.price}</p>
    `;
    
    return card;
}

// Open product view modal
function openProductViewModal(product) {
    const modal = document.getElementById('productViewModal');
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalSize').textContent = `Size: ${product.size}`;
    
    // Set product image
    const modalImage = document.getElementById('modalProductImage');
    const imageSrc = product.image || 'placeholder.png';
    modalImage.src = imageSrc;
    modalImage.alt = product.name;
    
    modal.classList.add('show');
}

// Close product view modal
function closeProductViewModal() {
    const modal = document.getElementById('productViewModal');
    modal.classList.remove('show');
}

// Setup event listeners
function setupEventListeners() {
    // Product view modal
    document.getElementById('closeModal').addEventListener('click', closeProductViewModal);
    document.getElementById('closeViewBtn').addEventListener('click', closeProductViewModal);
    
    // Close modal on outside click
    document.getElementById('productViewModal').addEventListener('click', (e) => {
        if (e.target.id === 'productViewModal') closeProductViewModal();
    });
}
