let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart icon
function updateCartCount() {

    document.querySelectorAll("#cart-count").forEach(count => {

        count.textContent = cart.reduce((t, i) => t + i.quantity, 0);

    });

}

// Save cart
function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}

// Add product
function addToCart(productId, model, quantity) {

    const product = products[productId];

    const existing = cart.find(item =>
        item.id === productId &&
        item.model === model
    );

    if(existing){

        existing.quantity += quantity;

    }else{

        cart.push({

            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            model: model,
            quantity: quantity

        });

    }

    saveCart();

    alert(product.name + " added to cart!");

}

// Display cart
function displayCart(){

    const container=document.getElementById("cart-items");

    if(!container) return;

    if(cart.length===0){

        container.innerHTML="<h2>Your cart is empty.</h2>";

        return;

    }

    let html="";

    let total=0;

    cart.forEach((item,index)=>{

        total+=item.price*item.quantity;

        html+=`

<div class="card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>${item.price} QAR</p>

<p><strong>Model:</strong> ${item.model}</p>

<div class="quantity">

<button onclick="decrease(${index})">-</button>

<input value="${item.quantity}" readonly>

<button onclick="increase(${index})">+</button>

</div>

<button class="card-btn"

onclick="removeItem(${index})">

🗑 Remove

</button>

</div>

`;

    });

    container.innerHTML=html;

    document.getElementById("total").innerHTML=

    "Total: <span style='color:#D4AF37'>"+total+" QAR</span>";

}

function increase(index){

    cart[index].quantity++;

    saveCart();

    displayCart();

}

function decrease(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    saveCart();

    displayCart();

}

function removeItem(index){

    if(confirm("Remove this item?")){

        cart.splice(index,1);

        saveCart();

        displayCart();

    }

}

updateCartCount();

displayCart();