// Mostrar mensaje de bienvenida
alert("Bienvenidos a SAMSUNG!");

// Solicitar nombre del cliente
let nombreCliente = prompt("Ingrese su nombre");

// Definir modelos de celulares y su información
const celulares = ["S21", "S22", "S23"]

const celularesInfo = [
    {ID: 1 ,Nombre: "S21", Precio: 21000, Cantidad: 3 },
    {ID: 2, Nombre: "S22", Precio: 22000, Cantidad: 3 },
    {ID: 3, Nombre: "S23", Precio: 23000, Cantidad: 3 },
];

// Definir modelos encargados, precio de auriculares y clase Samsung
const MODELOS_ENCARGADOS = [];

const AURICULARES_PRECIO = 500;

class Samsung {
    constructor(id, nombre, precio, cantidad, info) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.info = `El modelo elegido es ${this.nombre} el precio es de ${this.precio}`
    }
}

// Crear objetos de los modelos de celulares
const celular21 = new Samsung("1", "S21", 21000, 3);
const celular22 = new Samsung("2", "S22", 22000, 3);
const celular23 = new Samsung("3", "S23", 23000, 3);

// Función para elegir modelo de celular
function ElegirModelo(){
    modeloElegido = prompt(`Hola ${nombreCliente}, estos son los productos disponibles:
    1. S21
    2. S22
    3. S23
    Ingrese el número correspondiente al modelo que desea adquirir.
    Si quiere encargar un modelo en especial escriba "si"`);
}

ElegirModelo()

// Función para encargar modelo de celular
function EncargarModelo(){
    if(modeloElegido == "si"){
        modeloEncargado = prompt(`Ingrese el nombre del modelo a encargar`);
    }
}

EncargarModelo()

// Función para buscar modelo de celular
function BuscandoModelo(){
    if(celulares.includes(modeloEncargado)){
        alert("Disculpe pero ese modelo ya esta disponible");
        let volverElegir = prompt(`¿Quiere volver ingresar otro modelo? Responda "si" o "no"`);
        if (volverElegir === "si") {
            EncargarModelo();
        }else{
        MODELOS_ENCARGADOS.push(modeloEncargado);
        }
    }else{
        MODELOS_ENCARGADOS.push(modeloEncargado);
    }
}

BuscandoModelo()

function ModeloElegido() {
    while (modeloElegido != "1" && modeloElegido != "2" && modeloElegido != "3") {
        alert("Modelo incorrecto.");
        ElegirModelo()
    }
}

ModeloElegido()

function OpcionCarrito() {
    let opcionCarrito = prompt("¿Quiere agregarlo al carrito?")
    if (opcionCarrito == "si") {
        alert(`${celular21.nombre} añadido al carrito con éxito`);
        promocion = prompt(`${nombreCliente} no te pierdas esta oportunidad única llevando un ${modeloElegido} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);
    } else {
        alert("bueno chau");
    }
}

OpcionCarrito()

function InfoModeloElegido() {
    switch (modeloElegido) {
        case "1":
            alert(celular21.info);
            break;
        case "2":
            alert(celular22.info);
            break;
        case "3":
            alert(celular23.info);
            break;
    }
}

InfoModeloElegido()


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



OpcionOtroModelo()
OpcionPromocion()
ModeloIncorrecto()
