// Mostrar mensaje de bienvenida
alert("Bienvenidos a SAMSUNG!");

// Solicitar nombre del cliente
let nombreCliente = prompt("Ingrese su nombre");

// Definir modelos de celulares y su información
const celulares = ["S21", "S22", "S23"]

const celularesInfo = [
    { Nombre: "S21", Precio: 21000, Cantidad: 3 },
    { Nombre: "S22", Precio: 22000, Cantidad: 3 },
    { Nombre: "S23", Precio: 23000, Cantidad: 3 },
];

const modeloDisponibleMercado = ["Z Flip4", "A23", "A53", "A72", "A52"];

// Definir modelos encargados, precio de auriculares y clase Samsung
const MODELOS_ENCARGADOS = [];

const AURICULARES_PRECIO = 500;

let carrito = [];

class Samsung {
    constructor(id, nombre, precio, cantidad, info) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.info = `Modelo: ${this.nombre} Precio: ${this.precio}`
    }

    vender() {
        if (this.cantidad > 0) {
            this.cantidad -= 1;
            if (this.cantidad == 0) {
                alert(`El modelo ${this.nombre} ya no tiene stock disponible`);
            }
        } else {
            alert(`Lo sentimos, el modelo ${this.nombre} ya no tiene stock disponible`);
        }
    }
}

// Crear objetos de los modelos de celulares
const celular21 = new Samsung("1", "S21", 21000, 3);
const celular22 = new Samsung("2", "S22", 22000, 3);
const celular23 = new Samsung("3", "S23", 23000, 3);


let eligeUnModelo = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
    1). S21
    2). S22
    3). S23
    Por favor ingrese el número correspondiente al modelo que desea adquirir.
    O si quiere encargar un modelo que no se encuentra en la lista de productos disponibles escriba "si"`);

function OpcionIncorrecta() {
    if (eligeUnModelo != "1" && eligeUnModelo != "2" && eligeUnModelo != "3" && eligeUnModelo != "si" && eligeUnModelo != "SI" && eligeUnModelo != "Si") {
        alert("Opcion Incorrecta");
        eligeUnModelo = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
        1). S21
        2). S22
        3). S23
        Por favor ingrese el número correspondiente al modelo que desea adquirir.
        O si quiere encargar un modelo que no se encuentra en la lista de productos disponibles escriba "si"`);
        OpcionIncorrecta()
    }
    return eligeUnModelo
}

OpcionIncorrecta()


// Función para buscar modelo de celular
function AgregarModeloEncargo() {
    let modEncargado = prompt(`Estos son los modelos disponible en el marcado para encargar:
    ${modeloDisponibleMercado}
    Ingrese el nombre del modelo a encargar`);
    if (celulares.includes(modEncargado)) {
        let respuesta = prompt(`Lo sentimos, el modelo ${modEncargado} ya está disponible en la tienda. Escriba:
        "   1  ". Si quiere volver a encargar probando otro modelo.
            O
        "   2  ". Si quiere volver al menu principal.`);
        if (respuesta == "1") {
            EncargarModelo();
            AgregarModeloEncargo();
        } else if (respuesta == "2") {
            eligeUnModelo = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
            1). S21
            2). S22
            3). S23
            Por favor ingrese el número correspondiente al modelo que desea adquirir.
            O si quiere encargar un modelo que no se encuentra en la lista de productos disponibles escriba "si"`);
            EncargarModelo();
            AgregarModeloEncargo();
        } else {
            alert("Opcion Incorrecta");
            AgregarModeloEncargo();
        }
    } else if (modeloDisponibleMercado.includes(modEncargado)) {
        MODELOS_ENCARGADOS.push(modEncargado);
        alert(`El modelo ${modEncargado} ha sido encargado.`);
        eligeUnModelo = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
        1). S21
        2). S22
        3). S23
        Por favor ingrese el número correspondiente al modelo que desea adquirir.`)
    } else {
        let respuesta = prompt(`Lo sentimos, el modelo ${modEncargado} no existe o no esta disponible en el mercado.
        Escriba:
        "   1  ". Si quiere volver a encargar probando otro modelo.
            O
        "   2  ". Si quiere volver al menu principal.`);
        if (respuesta == "1") {
            EncargarModelo();
            AgregarModeloEncargo();
        } else if (respuesta == "2") {
            eligeUnModelo = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
            1). S21
            2). S22
            3). S23
            Por favor ingrese el número correspondiente al modelo que desea adquirir.
            O si quiere encargar un modelo que no se encuentra en la lista de productos disponibles escriba "si"`);
            EncargarModelo();
            AgregarModeloEncargo();
        } else {
            alert("Opcion Incorrecta");
            AgregarModeloEncargo();
        }
    }
    return eligeUnModelo
}

if (eligeUnModelo.toUpperCase() == "SI") {
    AgregarModeloEncargo()
}


function ComprarCelular() {
    let modeloElegido;
    if (eligeUnModelo == "1") {
        modeloElegido = celular21;
    } else if (eligeUnModelo == "2") {
        modeloElegido = celular22;
    } else if (eligeUnModelo == "3") {
        modeloElegido = celular23;
    }else{
        alert("Opción incorrecta");
    }

    // Mostrar información del modelo elegido
    alert(modeloElegido.info);

    // Preguntar si el cliente quiere agregar el producto al carrito
    let respuesta = prompt(`¿Quiere agregar ${modeloElegido.nombre} al carrito? Escriba "SI" si quiere agregarlo, de lo contrario, escriba "NO".`);

    if (respuesta.toUpperCase() == "SI") {
        carrito.push(modeloElegido);
        alert(`El modelo ${modeloElegido.nombre} se ha agregado al carrito.`);
    } else {
        eligeUnModelo = prompt(`${nombreCliente}, actualmente contamos con el stock de estos productos:
            1). S21
            2). S22
            3). S23
            Por favor ingrese el número correspondiente al modelo que desea adquirir.
            O si quiere encargar un modelo que no se encuentra en la lista de productos disponibles escriba "si"`);
    }

    // Vender un modelo de celular
    modeloElegido.vender();
    alert(`Quedan ${modeloElegido.cantidad} unidades del modelo ${modeloElegido.nombre}.`);

    // Preguntar si el cliente quiere comprar otro celular
    respuesta = prompt("¿Quiere comprar otro celular? Escriba 'SI' si quiere comprar otro, de lo contrario, escriba 'NO'.");

    if (respuesta.toUpperCase() == "SI") {
        eligeUnModelo = prompt(`${nombreCliente}, actualmente contamos con el stock de estos productos:
        1). S21
        2). S22
        3). S23
        Por favor ingrese el número correspondiente al modelo que desea adquirir.`);
        OpcionIncorrecta();
        ComprarCelular();
    } else {
        alert(`Gracias ${nombreCliente}`);
    }
}

ComprarCelular()

// Función para actualizar el carrito
function ActualizarCarrito() {
    let carritoMensaje = `!El carrito de ${nombreCliente}!\n`;
    let totalCarrito = 0;
    for (let i = 0; i < carrito.length; i++) {
        let modelo = carrito[i];
        carritoMensaje += `${modelo.info}\n`;
        totalCarrito += modelo.precio;
    }
    alert(`Su carrito contiene los siguientes modelos:\n${carritoMensaje}Total: $${totalCarrito}`);
}

ActualizarCarrito()

// Función para agregar modelo de celular al carrito
function AgregarAlCarrito(modelo) {
    carrito.push(modelo);
    ActualizarCarrito();
}

AgregarAlCarrito()