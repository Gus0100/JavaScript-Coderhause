// Obtiene la lista de elementos del carrito
const cartList = document.getElementById("cart-list");

// Obtiene el contador del carrito
const cartCount = document.getElementById("cart-count");

// Agrega el evento click a los botones "Agregar al carrito" en las tarjetas
const addToCartButtons = document.getElementsByClassName("add-to-cart");
for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
}

// Agrega el evento click al botón "Vaciar carrito"
document.getElementById("clear-cart").addEventListener("click", clearCart);

// Agrega el evento click a los botones de eliminación de los elementos del carrito
const removeCartItemButtons = cartList.getElementsByClassName("btn-danger");
for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
}

// Función que se ejecuta cuando se hace clic en el botón "Agregar al carrito"
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

// Función que agrega un elemento al carrito
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

    // Actualiza el contador de la cantidad de elementos en el carrito
    updateCartItemCount();
}

// Función que actualiza el contador de la cantidad de elementos en el carrito
function updateCartItemCount() {
    const cartItemCount = document.getElementById("cart-item-count");
    const cartItems = cartList.getElementsByTagName("li");
    cartItemCount.innerText = cartItems.length;
}

// Función que actualiza el total del carrito
function updateCartTotal() {
    const cartItems = cartList.getElementsByTagName("li");
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.getElementsByClassName("text-muted")[0];
        const price = parseFloat(priceElement.innerText.replace("$", ""));
        total += price;
    }
    document.getElementById("cart-total").innerText = "$" + total;
}

// Función que elimina un elemento del carrito
function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    updateCartItemCount();
}

// Función que vacía el carrito
function clearCart() {
    cartList.innerHTML = "";
    updateCartTotal();
    updateCartItemCount();
}