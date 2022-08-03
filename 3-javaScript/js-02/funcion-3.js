"use strict";
/* Funciones como objetos */
function miFuncion (a, b){
    let res = 0; /* Propiedad */
    res = (a * b); /* Accion o proceso */
    return res;
}

console.log( typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
