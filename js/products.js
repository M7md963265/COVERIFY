const products = {

    "white-silicone": {
        id: "white-silicone",
        name: "White Silicone",
        category: "case",
        price: 20,
        image: "images/IMG_9384.PNG",
        description: "Premium soft silicone case with a smooth matte finish and everyday protection.",
        featured: true,
        models: [
            "iPhone 17 Pro Max",
            "iPhone 17 Pro",
            "iPhone 17",
            "iPhone 16 Pro Max",
            "iPhone 16 Pro",
            "iPhone 16",
            "iPhone 15 Pro",
            "iPhone 15"
        ]
    },

    "pink-silicone": {
        id: "pink-silicone",
        name: "Pink Silicone",
        category: "case",
        price: 20,
        image: "images/IMG_9385.PNG",
        description: "Elegant pink silicone case with a soft-touch finish.",
        featured: true,
        models: [
            "iPhone 17 Pro Max",
            "iPhone 17 Pro",
            "iPhone 17",
            "iPhone 16 Pro Max",
            "iPhone 16 Pro",
            "iPhone 16",
            "iPhone 15 Pro",
            "iPhone 15"
        ]
    },

    "black-silicone": {
        id: "black-silicone",
        name: "Black Silicone",
        category: "case",
        price: 20,
        image: "images/IMG_9386.PNG",
        description: "Minimal black silicone case with premium protection.",
        featured: true,
        models: [
            "iPhone 16 Pro Max",
            "iPhone 16 Pro",
            "iPhone 16",
            "iPhone 15 Pro",
            "iPhone 15"
        ]
    },

    "falcon-heritage": {
        id: "falcon-heritage",
        name: "Falcon Heritage",
        category: "case",
        price: 29,
        image: "images/IMG_9403.PNG",
        description: "Inspired by Qatar's heritage with an elegant falcon design.",
        featured: true,
        models: [
            "iPhone 15 Pro Max",
            "iPhone 16 Pro Max",
            "iPhone 15 Pro"
        ]
    },

    "arabian-heritage": {
        id: "arabian-heritage",
        name: "Arabian Heritage",
        category: "case",
        price: 29,
        image: "images/IMG_9405.PNG",
        description: "Luxury Arabian-inspired artwork with a premium finish.",
        featured: true,
        models: [
            "iPhone 15 Pro",
            "iPhone 16 Pro",
            "iPhone 15 Pro Max",
            "iPhone 16 Pro Max"
        ]
    },
        "camel-heritage": {
        id: "camel-heritage",
        name: "Camel Heritage",
        category: "case",
        price: 29,
        image: "images/IMG_9407.PNG",
        description: "Traditional camel artwork celebrating Arabian heritage.",
        featured: true,
        models: [
            "iPhone 15 Pro Max",
            "iPhone 16 Pro Max",
            "iPhone 17 Pro Max"
        ]
    },

    "falcon-camel": {
        id: "falcon-camel",
        name: "Falcon & Camel Heritage",
        category: "case",
        price: 29,
        image: "images/IMG_9409.PNG",
        description: "A premium design combining the falcon and camel in one elegant case.",
        featured: true,
        models: [
            "iPhone 15 Pro",
            "iPhone 16 Pro Max"
        ]
    },

    "falcon-majlis": {
        id: "falcon-majlis",
        name: "Falcon Majlis",
        category: "case",
        price: 29,
        image: "images/IMG_9410.PNG",
        description: "Elegant falcon-inspired design with a traditional Qatari touch.",
        featured: true,
        models: [
            "iPhone 17 Pro Max",
            "iPhone 17",
            "iPhone 16 Pro Max",
            "iPhone 16",
            "iPhone 15 Pro Max",
            "iPhone 15 Pro",
            "iPhone 14 Pro Max",
            "iPhone 14 Pro"
        ]
    },

    "airpods-pro2": {
        id: "airpods-pro2",
        name: "AirPods Pro 2",
        category: "accessories",
        price: 89,
        image: "images/airpods-pro2.jpg",
        description: "High-quality wireless earbuds with noise cancellation, transparency mode, spatial audio, instant pairing and wireless charging.",
        featured: true
    },

    "airpods-4": {
        id: "airpods-4",
        name: "AirPods 4",
        category: "accessories",
        price: 99,
        image: "images/airpods4.jpg",
        description: "Premium wireless earbuds with crystal-clear sound, instant pairing, touch controls, long battery life, and seamless compatibility with Apple devices.",
        featured: true
    },
    };

// =====================================
// CART HELPERS
// =====================================

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId, model = "", quantity = 1) {

    const product = products[productId];

    if (!product) return;

    let cart = getCart();

    const existing = cart.find(item =>
        item.id === product.id &&
        item.model === model
    );

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            model: model,
            quantity: quantity

        });

    }

    saveCart(cart);

    // Update navbar counter if it exists
    updateCartCounter();

    alert(`${product.name} added to cart!`);

}

function updateCartCounter() {

    const cart = getCart();

    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    const navbarCounter = document.getElementById("cart-count");
    const pageCounter = document.getElementById("cart-count-large");

    const text = total === 1 ? "1 Item" : `${total} Items`;

    if (navbarCounter) {
        navbarCounter.textContent = text;
    }

    if (pageCounter) {
        pageCounter.textContent = text;
    }

}

document.addEventListener("DOMContentLoaded", updateCartCounter);