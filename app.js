
const celulares = [
    {
        nombre: "S21",
        info: "Samsung S21, 128 GB, 8 GB RAM, color negro, $1000",
        precio: 1000,
        cantidad: 10,
    },
    {
        nombre: "S22",
        info: "Samsung S22, 256 GB, 12 GB RAM, color blanco, $1200",
        precio: 1200,
        cantidad: 5,
    },
    {
        nombre: "S23",
        info: "Samsung S23, 512 GB, 16 GB RAM, color dorado, $1500",
        precio: 1500,
        cantidad: 3,
    },
];


let carrito = [];

function mostrarModelos() {
    const contenedor = document.querySelector("#modelos");

    const celulares = JSON.parse(localStorage.getItem("celulares"));

    for (let i = 0; i < celulares.length; i++) {
        const modelo = celulares[i];

        const modeloElemento = document.createElement("div");
        modeloElemento.classList.add("modelo");
        modeloElemento.innerHTML = `
        <h3>${modelo.nombre}</h3>
        <p>${modelo.info}</p>
        <p>Precio: $${modelo.precio}</p>
        <button id="agregar-${i}">Agregar al carrito</button>
    `;

        contenedor.appendChild(modeloElemento);

        const botonAgregar = document.querySelector(`#agregar-${i}`);
        botonAgregar.addEventListener("click", function () {
            agregarAlCarrito(modelo);
        });
    }
}


function AgregarAlCarrito(event) {
    let id = event.target.dataset.id;
    let modelo = celulares[id];
    if (modelo.cantidad > 0) {
        carrito.push(modelo);
        modelo.cantidad--;
        ActualizarCarrito();
    } else {
        alert("Lo siento, este producto está agotado.");
    }
}


function VaciarCarrito() {
    carrito = [];
    ActualizarCarrito();
}


function ActualizarCarrito() {
    let carritoElemento = document.getElementById("carrito");
    carritoElemento.innerHTML = "";
    let totalCarrito = 0;
    for (let i = 0; i < carrito.length; i++) {
        let modelo = carrito[i];
        let productoElemento = document.createElement("div");
        productoElemento.innerHTML = <p>${modelo.nombre} - $${modelo.precio}</p>;
        carritoElemento.appendChild(productoElemento);
        totalCarrito += modelo.precio;
    }
    let totalElemento = document.createElement("div");
    totalElemento.innerHTML = <p>Total: $${totalCarrito}</p>;
    carritoElemento.appendChild(totalElemento);
}


let botonesAgregar = document.querySelectorAll(".agregar-carrito");
botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", AgregarAlCarrito);
});


let botonVaciar = document.getElementById("vaciar-carrito");
botonVaciar.addEventListener("click", VaciarCarrito);
