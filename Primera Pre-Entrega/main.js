alert("Bienvenidos a SAMSUNG!");
let nombreCliente = prompt("Ingrese su nombre");

const celulares = [
    {id: 1, nombre: "S21", precio: 21000},
    {id: 2, nombre: "S22", precio: 22000},
    {id: 3, nombre: "S23", precio: 23000},
]

let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio de del producto");

let buscaCelular = {
    id: celulares.length + 1,
    nombre,
    precio,
};

celulares.push(buscaCelular);
console.log(celulares);

let auriculares = 500;

function Saludo(){
    modelo = prompt(`Hola ${nombreCliente} ingrese el nombre de los 3 modelos disponibles: "S23", "S22", "S21"`);
}

Saludo()

function ModeloIncorrecto(){
    while(modelo != celulares[nombre]){
        alert("Modelo incorrecto.");
        modelo = prompt(`Hola ${nombreCliente} ingrese el nombre de los 3 modelos disponibles: "S23", "S22", "S21".`);
    }
    return modelo;
}

ModeloIncorrecto()

/* function ElegirModelo(){
    switch(modelo){
        case celulares[nombre]:
            alert(`${nombreCliente} El precio del modelo "S23" es de $${S23}.`);
            preguntaCarrito = prompt("¿Queres añadirlo al carrito?")
            break;

        case "S22":
            alert(`${nombreCliente} El precio del modelo "S22" es de $${S22}.`);
            preguntaCarrito = prompt("¿Queres añadirlo al carrito?")
            break;
    
        case "S21":
            alert(`${nombreCliente} El precio del modelo "S21" es de $${S21}.`);
            preguntaCarrito = prompt("¿Queres añadirlo al carrito?")
            break;
    }
} */

function ElegirModelo(){
    if(modelo == celulares[nombre]){
        alert(`${nombreCliente} El precio del modelo ${celulares.nombre} es de $${celulares.precio}`)
    }
}


ElegirModelo()


promocion = prompt(`${nombreCliente} no te pierdas esta oportunidad única llevando un ${modelo} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);

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