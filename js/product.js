// =====================================
// COVERIFY PRODUCT PAGE
// =====================================

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products[productId];

if (!product) {
    window.location.href = "shop.html";
}

let quantity = 1;

const image = document.getElementById("product-image");
const name = document.getElementById("product-name");
const price = document.getElementById("product-price");
const description = document.getElementById("product-description");
const modelSelect = document.getElementById("phone-model");
const qtyInput = document.getElementById("qty");
const addBtn = document.getElementById("addCart");
const goCartBtn = document.getElementById("goCart");

image.src = product.image;
image.alt = product.name;

name.textContent = product.name;

price.textContent = `${product.price} QAR`;

description.textContent = product.description;
// =====================================
// Phone Models
// =====================================

if (modelSelect) {

    if (product.models && product.models.length > 0) {

        modelSelect.innerHTML = "";

        product.models.forEach(model => {

            const option = document.createElement("option");

            option.value = model;
            option.textContent = model;

            modelSelect.appendChild(option);

        });

    } else {

        modelSelect.style.display = "none";

    }

}

// =====================================
// Quantity
// =====================================

window.changeQty = function(change) {

    quantity += change;

    if (quantity < 1) {
        quantity = 1;
    }

    qtyInput.value = quantity;

};

// =====================================
// Add To Cart
// =====================================

if (addBtn) {

    addBtn.addEventListener("click", () => {

        const selectedModel = modelSelect
            ? modelSelect.value
            : "";

        addToCart(
            product.id,
            selectedModel,
            quantity
        );

        // Show the Go to Cart button
        if (goCartBtn) {
            goCartBtn.style.display = "flex";
        }

    });

}
// =====================================
// Related Products
// =====================================

const relatedGrid = document.getElementById("related-grid");

if (relatedGrid) {

    const relatedProducts = Object.values(products)
        .filter(item =>
            item.category === product.category &&
            item.id !== product.id
        )
        .slice(0, 4);

    relatedGrid.innerHTML = "";

    relatedProducts.forEach(item => {

        relatedGrid.innerHTML += `

        <div class="card">

            <span class="product-badge">
                ${item.category}
            </span>

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="card-content">

                <h3>${item.name}</h3>

                <p class="price">
                    ${item.price} QAR
                </p>

                <a
                    href="product.html?id=${item.id}"
                    class="card-btn"
                >
                    View Product
                </a>

            </div>

        </div>

        `;

    });

}