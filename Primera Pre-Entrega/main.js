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

const modeloDisponibleMercado = ["Z Flip4", "A23", "A53", "A72", "A52"];

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

let modeloElegido = prompt(`Hola ${nombreCliente}, actualmente contamos con el stock de estos productos:
1. S21
2. S22
3. S23
Por favor ingrese el número correspondiente al modelo que desea adquirir.
O si quiere encargar un modelo que no se encuentra en la lista de productos disponibles:
Escriba "si"`);


// Función para encargar modelo de celular
function EncargarModelo(){
    if(modeloElegido == "si"){
        modeloEncargado = prompt(`Ingrese el nombre del modelo a encargar`);
    }
    return modeloEncargado
}

EncargarModelo()

// Función para buscar modelo de celular
function AgregarModeloEncargo(){
    if(celulares.includes(modeloEncargado)){
        const respuesta = prompt(`Lo sentimos, el modelo ${modeloEncargado} ya está disponible en la tienda. ¿Desea encargar otro modelo en la tienda? Conteste "si" o "no"`);
        if(respuesta == "si"){
            EncargarModelo();
            AgregarModeloEncargo();
        }else{
            ElegirModelo();
            EncargarModelo();
            AgregarModeloEncargo();
        }
    }else{
        if(modeloDisponibleMercado == modeloEncargado)
        MODELOS_ENCARGADOS.push(modeloEncargado);
        alert(`El modelo ${modeloEncargado} ha sido encargado.`);
    }
}

AgregarModeloEncargo()

function ModeloElegido() {
    while (modeloElegido != "1" && modeloElegido != "2" && modeloElegido != "3") {
        alert("Numero Incorrecto");
        ElegirModelo();
        ModeloElegido();
    }
    return modeloElegido
}

ModeloElegido()

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
