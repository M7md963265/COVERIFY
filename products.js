const products = {

    "white-silicone": {
        id: "white-silicone",
        name: "White Silicone",
        category: "Silicone",
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
        category: "Silicone",
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
        category: "Silicone",
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
        category: "Heritage",
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
        category: "Heritage",
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
        category: "Heritage",
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
        category: "Heritage",
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
        category: "Heritage",
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
        category: "Accessories",
        price: 89,
        image: "images/airpods-pro2.jpg",
        description: "High-quality wireless earbuds with noise cancellation, transparency mode, spatial audio, instant pairing and wireless charging.",
        featured: true
    }

};

// ================= PRODUCT PAGE =================

if (document.getElementById("product-name")) {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = products[id];

    if (!product) {
        window.location.href = "shop.html";
    }

    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price + " QAR";
    document.getElementById("product-description").textContent = product.description;

    const select = document.getElementById("phone-model");

    if (select) {

        if (product.models) {

            select.style.display = "block";
            select.innerHTML = "";

            product.models.forEach(model => {

                const option = document.createElement("option");
                option.value = model;
                option.textContent = model;

                select.appendChild(option);

            });

        } else {

            select.style.display = "none";

        }

    }

}

// ================= SHOP PAGE =================

if (document.getElementById("products")) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    Object.values(products).forEach(product => {

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

    });

}