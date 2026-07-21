// =====================================
// COVERIFY SHOP
// =====================================

const productsContainer = document.getElementById("products");

if (productsContainer) {

    displayProducts();

    // Filter Buttons
    document.querySelectorAll(".filter-btn").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".filter-btn").forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            displayProducts(button.dataset.category);

        });

    });

}

function displayProducts(category = "all") {

    productsContainer.innerHTML = "";

    Object.values(products).forEach(product => {

        if (
            category === "all" ||
            product.category.toLowerCase() === category.toLowerCase()
        ) {

            createProductCard(product);

        }

    });

}
// =====================================
// Product Card
// =====================================

function createProductCard(product) {

    productsContainer.innerHTML += `

    <div class="card">

        <span class="product-badge">
            ${product.category}
        </span>

        <img
            src="${product.image}"
            alt="${product.name}"
        >

        <div class="card-content">

            <h3>${product.name}</h3>

            <p class="price">
                ${product.price} QAR
            </p>

            <a
                href="product.html?id=${product.id}"
                class="card-btn"
            >
                View Product
            </a>

        </div>

    </div>

    `;

}