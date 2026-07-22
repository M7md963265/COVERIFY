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

            displayProducts(button.dataset.filter);

        });

    });

}

function displayProducts(filter = "all") {

    productsContainer.innerHTML = "";

    Object.values(products).forEach(product => {

        if (
            filter === "all" ||
            product.category === filter ||
            product.collection === filter
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
// ================================
// Search
// ================================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const search = searchInput.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(search)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}
// ================================
// Sort
// ================================

const sortSelect = document.getElementById("sort");

if (sortSelect) {

    sortSelect.addEventListener("change", () => {

        let list = Object.values(products);

        if (sortSelect.value === "low") {

            list.sort((a, b) => a.price - b.price);

        } else if (sortSelect.value === "high") {

            list.sort((a, b) => b.price - a.price);

        }

        productsContainer.innerHTML = "";

        list.forEach(product => createProductCard(product));

    });
// ===============================
// FILTER BUTTONS
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filter = this.dataset.filter;

        if (filter === "all") {
            currentProducts = Object.values(products);
        } else {
            currentProducts = Object.values(products).filter(product =>
                product.category === filter ||
                product.collection === filter
            );
        }

        renderProducts(currentProducts);
    });

});
}