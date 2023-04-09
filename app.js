fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const title = product.title;
            const price = product.price;
            const imgSrc = product.imgSrc;
            const cartItem = addItemToCart(title, price, imgSrc);
        });
        updateCartTotal();
        updateCartItemCount();
    })
    .catch(error => console.error(error))

const cartList = document.getElementById("cart-list");

const cartCount = document.getElementById("cart-count");

const addToCartButtons = document.getElementsByClassName("add-to-cart");
for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
}

document.getElementById("clear-cart").addEventListener("click", clearCart);

const removeCartItemButtons = cartList.getElementsByClassName("btn-danger");
for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
}

function addToCartClicked(event) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1000
    })
    const button = event.target;
    const card = button.parentElement;
    const title = card.getElementsByTagName("h2")[0].innerText;
    const price = card.getElementsByTagName("p")[1].innerText;
    addItemToCart(title, price);
    updateCartTotal();
}

function addItemToCart(title, price, imgSrc) {
    const cartRow = document.createElement("li");
    cartRow.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-sm");
    const cartItem = `
        <div>
          <h6 class="my-0">${title}</h6>
          <small class="text-muted">${price}</small>
        </div>
        <div>
          <img class="cart-item-image" src="${imgSrc}" alt="${title}">
          <button class="btn btn-sm btn-danger ms-3" type="button">Eliminar</button>
        </div>`;
    cartRow.innerHTML = cartItem;
    cartList.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);

    updateCartItemCount();
}



function updateCartItemCount() {
    const cartItemCount = document.getElementById("cart-item-count");
    const cartItems = cartList.getElementsByTagName("li");
    cartItemCount.innerText = cartItems.length;
}

function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    updateCartItemCount();
}

function clearCart() {
    cartList.innerHTML = "";
    updateCartTotal();
    updateCartItemCount();
}

function updateCartTotal() {
    const cartItems = cartList.getElementsByTagName("li");
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.getElementsByClassName("text-muted")[0];
        const price = parseFloat(priceElement.innerText.replace("$", ""));
        total += price;
    }
    const cartTotalElement = document.getElementById("cart-total");
    cartTotalElement.innerText = "$" + total.toFixed(2);
}