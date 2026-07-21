// =====================================
// COVERIFY CART
// =====================================

const cartItems = document.getElementById("cart-items");
const summary = document.querySelector(".cart-summary");

let cart = getCart();

function formatPrice(price) {
    return `${price} QAR`;
}

function save() {

    saveCart(cart);

    cart = getCart();

    updateCartCounter();

}

function subtotal() {
    return cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
}

function deliveryFee() {

    if (cart.length === 0) return 0;

    const accessories = cart.some(item =>
        item.category === "accessories"
    );

    const cases = cart.filter(item =>
        item.category === "case"
    ).length;

    if (accessories || cases >= 2) {
        return 0;
    }

    return 10;
}

function totalPrice() {
    return subtotal() + deliveryFee();
}
// =====================================
// Quantity Functions
// =====================================

function increase(index) {

    if (!cart[index]) return;

    cart[index].quantity++;

    save();

    renderCart();

}

function decrease(index) {

    if (!cart[index]) return;

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    save();

    renderCart();

}

function removeItem(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    save();

    renderCart();

}

// =====================================
// Display Cart
// =====================================

function displayCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `

        <div class="empty-cart">

            <h2>Your cart is empty</h2>

            <p>Add your favorite COVERIFY products to start shopping.</p>

            <a href="shop.html" class="btn">
                Continue Shopping
            </a>

        </div>

        `;

        if (summary) summary.style.display = "none";

        return;

    }

    if (summary) summary.style.display = "block";

    cart.forEach((item, index) => {

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <div class="cart-details">

                    <h3>${item.name}</h3>

                    <p><strong>Model:</strong> ${item.model || "-"}</p>

                    <p>${formatPrice(item.price)}</p>

                </div>

                <div class="cart-actions">

                    <div class="quantity">

                        <button onclick="decrease(${index})">−</button>

                        <span>${item.quantity}</span>

                        <button onclick="increase(${index})">+</button>

                    </div>

                    <button
                        class="remove-btn"
                        onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}
// =====================================
// Order Summary
// =====================================

function updateSummary() {

    const subtotalElement = document.getElementById("subtotal");
    const deliveryElement = document.getElementById("delivery");
    const totalElement = document.getElementById("total");

    if (!subtotalElement || !deliveryElement || !totalElement) return;

    subtotalElement.textContent = formatPrice(subtotal());

    const delivery = deliveryFee();

    deliveryElement.textContent =
        delivery === 0 ? "FREE" : formatPrice(delivery);

    totalElement.textContent = formatPrice(totalPrice());

}

// =====================================
// WhatsApp Checkout
// =====================================

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "🛍️ *New COVERIFY Order*%0A%0A";

    cart.forEach(item => {

        message +=
`• ${item.name}
Model: ${item.model || "-"}
Qty: ${item.quantity}
Price: ${item.price} QAR

`;

    });

    message +=
`Subtotal: ${subtotal()} QAR
Delivery: ${deliveryFee() === 0 ? "FREE" : deliveryFee() + " QAR"}
Total: ${totalPrice()} QAR`;

    const phone = "97477149050"; // <-- Replace with your business number

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}

// =====================================
// Render
// =====================================

function renderCart() {

    cart = getCart();

    displayCart();

    updateSummary();

    updateCartCounter();

}

// =====================================
// Start
// =====================================

const checkoutButton = document.getElementById("checkout-btn");

if (checkoutButton) {

    checkoutButton.addEventListener("click", checkout);

}

renderCart();