alert("Bienvenidos a SAMSUNG!");
let nombreCliente = prompt("Ingrese su nombre");

const celulares = ["S21","S22", "S23"]

const celularesInfo = [
    {Nombre: "S21", Precio: 21000, Cantidad: 3},
    {Nombre: "S22", Precio: 22000, Cantidad: 3},
    {Nombre: "S23", Precio: 23000, Cantidad: 3},
];


class Samsung{
    constructor(nombre, precio, cantidad, info) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.info = `El modelo elegido es ${this.nombre} el precio es de ${this.precio}`
    }
}

const celular21 = new Samsung("S21", 21000, 3);
const celular22 = new Samsung("S22", 22000, 3);
const celular23 = new Samsung("S23", 23000, 3);

let auriculares = 500;

let modeloElegido = prompt(`Hola ${nombreCliente} estos son los productos disponibles:
${celulares}
escriba el nombre del modelo que quiere adquirir`);

function ModeloElegido(){
    while(modeloElegido != celulares){
        alert("Modelo incorrecto.");
        modeloElegido = prompt(`Hola ${nombreCliente} estos son los productos disponibles:
        ${celulares}
        escriba el nombre del modelo que quiere adquirir`);
        if(modeloElegido == celulares){
            break
        }
        return modeloElegido
    }
}

ModeloElegido()

function InfoModeloElegido(){
    
}

InfoModeloElegido()


let promocion = prompt(`${nombreCliente} no te pierdas esta oportunidad única llevando un ${modelo} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);

function OpcionCarrito(){
    if(preguntaCarrito == "si"){
        alert(`${modelo} añadido al carrito con éxito`);
        promocion = prompt(`${nombreCliente} no te pierdas esta oportunidad única llevando un ${modelo} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);
    }else{
        alert("bueno chau");
    }
}


OpcionCarrito()


let resultado = (S23 && S22 && S21 + auriculares )

function OpcionPromocion(){
    if(promocion == "si"){
        alert(`Tu monto total es de ${resultado}`);
        alert(`Hasta luego ${nombreCliente}, que disfrute de la promocion`);
    }else{
        alert("Tu monto a abonar es de " + S23 ||  S22 || S21);
        alert(`Hasta luego ${nombreCliente}, que lo disfrute`);
    }
}

let otroModelo = prompt(`${nombreCliente} ¿Quieres elegir otro modelo?`);

function OpcionOtroModelo(){
    if(otroModelo == "no"){
        alert(`Hasta luego ${nombreCliente}`);
    }else{
        modelo = prompt(`Hola devuelta ${nombreCliente} ingrese el nombreCliente de los 3 modelos disponibles: "S23", "S22", "S21"`);
    }
    return modelo;
}



OpcionOtroModelo()
OpcionPromocion()
ModeloIncorrecto()
ElegirModelo()