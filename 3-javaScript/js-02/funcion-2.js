"use strict";
function miFuncion(a, b){
    return (a + b);
}
let resultado = miFuncion(3, 6);
console.log("El resultado es: " + resultado);

/* Funcion Expresion o anonima*/

let suma = function (a, b){return (a + b)};

let res = suma (2, 3);

console.log("La suma es : " +res);

/* let suma = function (a, b){return (a + b)};

resultado = suma (2, 3);

let caracteres = "La suma es : "

console.log(caracteres + resultado); */

/* Ejercicio Operaciones Atirmeticas con Funciones de Expresion */

/* Resta */
let resta = function (a, b){return (a - b)};

let respuesta = resta (10, 4);

console.log("El resultado es : " + respuesta);

/* Multiplicacion */
let multiplicacion = function (a, b){return (a * b)};

let respuesta2 = resta (10, 4);

console.log("El resultado es : " + respuesta2);

/* Division */
let division = function (a, b){return (a / b)};

let respuesta3 = resta (8, 4);

console.log("El resultado es : " + respuesta3);

/* Autollamada o Self Invoking solo puede ser llamada una vez*/
(function (a, b){
    console.log("El resultado de Self Invoking es : " (a + b));
}
)(3, 4);




