const carrito = [];

// Maneja el evento click del botón "Agregar al carrito"
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        const id = card.getAttribute('id');
        const title = card.querySelector('h2').textContent;
        const price = card.querySelector('p:last-of-type').textContent;
        carrito.push({ id, title, price });
        updateCart();
    });
});

// Maneja el evento click del botón "Vaciar carrito"
document.querySelector('.btn-danger').addEventListener('click', () => {
    carrito.length = 0;
    updateCart();
});

// Actualiza el contenido del offcanvas
function updateCart() {
    const offcanvas = document.querySelector('.offcanvas-body');
    offcanvas.innerHTML = '';
    if (carrito.length === 0) {
        offcanvas.innerHTML = '<p class="text-center">Carrito vacío</p>';
    } else {
        const total = carrito.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
        carrito.forEach((item) => {
            offcanvas.innerHTML += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price}</p>
          </div>
        </div>
      `;
        });
        offcanvas.innerHTML += `
      <div class="d-flex justify-content-between">
        <p>Total:</p>
        <p>$${total.toFixed(2)}</p>
      </div>
      <div class="mt-3">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="offcanvas">Seguir comprando</button>
        <button type="button" class="btn btn-danger float-end">Vaciar carrito</button>
      </div>
    `;
        // Vuelve a agregar el evento click al botón "Vaciar carrito"
        offcanvas.querySelector('.btn-danger').addEventListener('click', () => {
            carrito.length = 0;
            updateCart();
        });
    }
    // Actualiza el texto del botón "Carrito"
    const cartButton = document.querySelector('[data-bs-target="#offcanvasRight"]');
    cartButton.innerHTML = `
    <i class="bi bi-cart"></i>
    Carrito (${carrito.length})
  `;
}

