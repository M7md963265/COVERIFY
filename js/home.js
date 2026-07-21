// ===============================
// COVERIFY - HOME PAGE
// ===============================

const featuredContainer = document.getElementById("featured-products");

if (featuredContainer) {

    const featured = Object.values(products)
        .filter(product => product.featured)
        .slice(0, 8);

    featured.forEach(product => {

        featuredContainer.innerHTML += `

        <div class="card">

            <span class="product-badge">
                ${product.category}
            </span>

            <img src="${product.image}" alt="${product.name}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p class="price">${product.price} QAR</p>

                <a href="product.html?id=${product.id}" class="card-btn">
                    View Product
                </a>

            </div>

        </div>

        `;

    });

}