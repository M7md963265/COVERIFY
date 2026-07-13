let quantity = 1;

function changeQty(change) {

    quantity += change;

    if (quantity < 1) {
        quantity = 1;
    }

    document.getElementById("qty").value = quantity;
}

if (document.getElementById("product-name")) {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const product = products[id];

    if (!product) {
        window.location.href = "shop.html";
    }

    // Product Info
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price + " QAR";
    document.getElementById("product-description").textContent = product.description;

    // Phone Models
    const select = document.getElementById("phone-model");

if (product.models) {

    select.style.display = "block";
    select.previousElementSibling.style.display = "block";

    select.innerHTML = "";

    product.models.forEach(model => {

        const option = document.createElement("option");

        option.value = model;
        option.textContent = model;

        select.appendChild(option);

    });

} else {

    // Hide phone model label and dropdown for accessories
    select.style.display = "none";
    select.previousElementSibling.style.display = "none";

}

// Add To Cart
document.getElementById("addCart").onclick = function () {

    const model = product.models ? select.value : "Accessory";

    addToCart(
        product.id,
        model,
        quantity
    );

};

}
// ==============================
// SHOP PAGE
// ==============================

// ==============================
// SHOP PAGE
// ==============================

if (document.getElementById("products")) {

    const container = document.getElementById("products");

    function displayProducts(category = "All") {

        container.innerHTML = "";

        Object.values(products).forEach(product => {

            if (category === "All" || product.category === category) {

                container.innerHTML += `

                <div class="card">

                    <img src="${product.image}" alt="${product.name}">

                    <h3>${product.name}</h3>

                    <p>${product.price} QAR</p>

                    <a href="product.html?id=${product.id}" class="card-btn">
                        View Product
                    </a>

                </div>

                `;

            }

        });

    }

    displayProducts();

    document.querySelectorAll(".filter-btn").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".filter-btn").forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            displayProducts(button.textContent.trim());

        });

    });

}