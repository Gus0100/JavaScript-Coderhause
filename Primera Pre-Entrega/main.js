alert("Bienvenidos a SAMSUNG!");
let nombre = prompt("Ingrese su nombre");

let S23 = 23000;
let S22 = 22000;
let S21 = 21000;

let auriculares = 500;

function Saludo(){
    modelo = prompt(`Hola ${nombre} ingrese el nombre de los 3 modelos disponibles: "S23", "S22", "S21"`);
}

Saludo()

function ModeloIncorrecto(){
    while(modelo != "S23" && modelo != "S22" && modelo != "S21"){
        alert("Modelo incorrecto.");
        modelo = prompt(`Hola ${nombre} ingrese el nombre de los 3 modelos disponibles: "S23", "S22", "S21".`);
    }
    return modelo;
}

ModeloIncorrecto()

function ElegirModelo(){
    switch(modelo){
        case "S23":
            alert(`${nombre} El precio del modelo "S23" es de $${S23}.`);
            preguntaCarrito = prompt("¿Queres añadirlo al carrito?")
            break;
    
        case "S22":
            alert(`${nombre} El precio del modelo "S22" es de $${S22}.`);
            preguntaCarrito = prompt("¿Queres añadirlo al carrito?")
            break;
    
        case "S21":
            alert(`${nombre} El precio del modelo "S21" es de $${S21}.`);
            preguntaCarrito = prompt("¿Queres añadirlo al carrito?")
            break;
    }
}


ElegirModelo()

/* function OpcionIncorrectaCarrito(){
    while(preguntaCarrito != "si" && preguntaCarrito != "no"){
        alert("Responda 'si' o 'no'.");
        preguntaCarrito = prompt("¿Queres añadirlo al carrito?");
    }
}

OpcionIncorrectaCarrito() */

promocion = prompt(`${nombre} no te pierdas esta oportunidad única llevando un ${modelo} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);

function OpcionCarrito(){
    if(preguntaCarrito == "si"){
        alert(`${modelo} añadido al carrito con éxito`);
        promocion = prompt(`${nombre} no te pierdas esta oportunidad única llevando un ${modelo} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);
    }else{
        alert("bueno chau");
    }
}


OpcionCarrito()

/* function OpcionIncorrectaPromocion(){
    while(promocion != "si" && promocion != "no"){
        alert("Responda 'si' o 'no'.");
        promocion = prompt(`${nombre} no te pierdas esta oportunidad única llevando un ${modelo} se te aplica un descuento a unos auriculares por $${auriculares} \n ¿Quieres llevarlo?`);
    }
    return promocion;
}

OpcionIncorrectaPromocion() */

let resultado = (S23 && S22 && S21 + auriculares )

function OpcionPromocion(){
    if(promocion == "si"){
        alert(`Tu monto total es de ${resultado}`);
        alert(`Hasta luego ${nombre}, que disfrute de la promocion`);
    }else{
        alert("Tu monto a abonar es de " + S23 ||  S22 || S21);
        alert(`Hasta luego ${nombre}, que lo disfrute`);
    }
}

/* OpcionPromocion() */

/* function OpcionNoCarrito(){
    if(preguntaCarrito == "no"){
    }
}

OpcionNoCarrito() */

let otroModelo = prompt(`${nombre} ¿Quieres elegir otro modelo?`);

function OpcionOtroModelo(){
    if(otroModelo == "no"){
        alert(`Hasta luego ${nombre}`);
    }else{
        modelo = prompt(`Hola devuelta ${nombre} ingrese el nombre de los 3 modelos disponibles: "S23", "S22", "S21"`);
    }
    return modelo;
}


/* function OpcionIncorrectaOtroModelo(){
    while(otroModelo != "si" && otroModelo != "no"){
        alert("Responda 'si' o 'no'.");
        otroModelo = prompt(`${nombre} ¿Quiere elegir otro modelo?`);
    }
    return otroModelo;
} */

/* OpcionIncorrectaOtroModelo()
OpcionOtroModelo()*/

OpcionOtroModelo()
OpcionPromocion()
ModeloIncorrecto()
ElegirModelo()