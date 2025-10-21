async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        const data = await response.json();
        
        const productGrid = document.querySelector('.product-grid');
        if (!productGrid) return;
        
        productGrid.innerHTML = ''; // Clear existing products
        
        data.products.forEach(product => {
            const productHTML = `
                <article class="product-card">
                    <div class="product-image">
                        ${product.status ? `<span class="status-tag">${product.status}</span>` : ''}
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                    </div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}€</p>
                    <button class="btn product-btn">AFEGIR →</button>
                </article>
            `;
            productGrid.innerHTML += productHTML;
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Load products when the page is ready
document.addEventListener('DOMContentLoaded', loadProducts);