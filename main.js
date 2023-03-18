// Mostrar mensaje de bienvenida
alert("Bienvenidos a SAMSUNG!");

// Solicitar nombre del cliente
let nombreCliente = prompt("Ingrese su nombre");

// Definir modelos de celulares y su información
const celulares = ["S21", "S22", "S23"]

const celularesInfo = [
    {Nombre: "S21", Precio: 21000, Cantidad: 3 },
    {Nombre: "S22", Precio: 22000, Cantidad: 3 },
    {Nombre: "S23", Precio: 23000, Cantidad: 3 },
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
        this.info = `El modelo elegido es ${this.nombre} el precio es de ${this.precio} y contamos con ${this.cantidad}`
    }

    vender(){
        this.cantidad -= 1;
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

function OpcionIncorrecta(){
    if(eligeUnModelo != "1" && eligeUnModelo != "2" && eligeUnModelo != "3" && eligeUnModelo != "si" && eligeUnModelo != "SI" && eligeUnModelo != "Si"){
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
function AgregarModeloEncargo(){
    let modEncargado = prompt(`Estos son los modelos disponible en el marcado para encargar:
    ${modeloDisponibleMercado}
    Ingrese el nombre del modelo a encargar`);
    if(celulares.includes(modEncargado)){
        let respuesta = prompt(`Lo sentimos, el modelo ${modEncargado} ya está disponible en la tienda. Escriba:
        "   1  ". Si quiere volver a encargar probando otro modelo.
            O
        "   2  ". Si quiere volver al menu principal.`);
        if(respuesta == "1"){
            EncargarModelo();
            AgregarModeloEncargo();
        }else if(respuesta == "2"){
            ModeloElegido();
            EncargarModelo();
            AgregarModeloEncargo();
        }else{
            alert("Opcion Incorrecta");
            AgregarModeloEncargo();
        }
    }else if(modeloDisponibleMercado.includes(modEncargado)){
        MODELOS_ENCARGADOS.push(modEncargado);
        alert(`El modelo ${modEncargado} ha sido encargado.`);
        eligeUnModelo = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
        1). S21
        2). S22
        3). S23
        Por favor ingrese el número correspondiente al modelo que desea adquirir.`)
    }else{
        let respuesta = prompt(`Lo sentimos, el modelo ${modEncargado} no existe o no esta disponible en el mercado.
        Escriba:
        "   1  ". Si quiere volver a encargar probando otro modelo.
            O
        "   2  ". Si quiere volver al menu principal.`);
        if(respuesta == "1"){
            EncargarModelo();
            AgregarModeloEncargo();
        }else if(respuesta == "2"){
            ModeloElegido();
            EncargarModelo();
            AgregarModeloEncargo();
        }else{
            alert("Opcion Incorrecta");
            AgregarModeloEncargo();
        }
    }
    return eligeUnModelo
}

if(eligeUnModelo == "si" || eligeUnModelo == "SI" || eligeUnModelo == "Si"){
    AgregarModeloEncargo()
}


function ComprarCelular(){
    let modeloElegido;
    if(eligeUnModelo == "1"){
        modeloElegido = celular21;
    }else if(eligeUnModelo == "2"){
        modeloElegido = celular22;
    }else{
        modeloElegido = celular23;
    }

    // Mostrar información del modelo elegido
    alert(modeloElegido.info);

    // Preguntar si el cliente quiere agregar el producto al carrito
    let respuesta = prompt(`¿Quiere agregar ${modeloElegido.nombre} al carrito? Escriba "SI" si quiere agregarlo, de lo contrario, escriba "NO".`);

    if (respuesta.toUpperCase() == "SI") {
        carrito.push(modeloElegido);
        alert(`El modelo ${modeloElegido.nombre} se ha agregado al carrito.`);
    }

    // Vender un modelo de celular
    modeloElegido.vender();
    alert(`Quedan ${modeloElegido.cantidad} unidades del modelo ${modeloElegido.nombre}.`);

    // Preguntar si el cliente quiere comprar otro celular
    respuesta = prompt("¿Quiere comprar otro celular? Escriba 'SI' si quiere comprar otro, de lo contrario, escriba 'NO'.");

    if (respuesta.toUpperCase() == "SI") {
        eligeUnModelo = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
        1). S21
        2). S22
        3). S23
        Por favor ingrese el número correspondiente al modelo que desea adquirir.`);
        OpcionIncorrecta();
        ComprarCelular();
    } else {
        alert("Gracias por su compra.");
    }
}

ComprarCelular()


/* function OpcionCarrito() {
    let opcionCarrito = prompt("¿Quiere agregarlo al carrito?")
    if (opcionCarrito == "si") {
        alert(`${celular21.nombre} añadido al carrito con éxito`);
    } else {
        alert("bueno chau");
    }
}

OpcionCarrito()

let promocion = prompt(`${nombreCliente} no te pierdas esta oportunidad única llevando un ${modelo} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);

let resultado = (S23 && S22 && S21 + auriculares)

function OpcionPromocion() {
    if (promocion == "si") {
        alert(`Tu monto total es de ${resultado}`);
        alert(`Hasta luego ${nombreCliente}, que disfrute de la promocion`);
    } else {
        alert("Tu monto a abonar es de " + S23 || S22 || S21);
        alert(`Hasta luego ${nombreCliente}, que lo disfrute`);
    }
}

OpcionPromocion()

let otroModelo = prompt(`${nombreCliente} ¿Quieres elegir otro modelo?`);

function OpcionOtroModelo() {
    if (otroModelo == "no") {
        alert(`Hasta luego ${nombreCliente}`);
    } else {
        modelo = prompt(`Hola devuelta ${nombreCliente} ingrese el nombreCliente de los 3 modelos disponibles: "S23", "S22", "S21"`);
    }
    return modelo;
}