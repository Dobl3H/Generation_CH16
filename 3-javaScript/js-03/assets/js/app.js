
/* Control de flujo */
/* Condicionales */
/* If */
let condicion = false; /* Asignacion */

/* console.log(5 == 5);
console.log(5 === 5); */

if(condicion === 10){
    /* 
    Codigo que se hace si se cumple
    la condicion A
    */
   /* console.log("Entro en la condicion A"); */

} else if (condicion === "Hola") {
    /* 
    Codigo que se hace si se cumple
    la condicion B
    */
   /* console.log("Entro en la condicion B"); */

} else if (condicion === false){
    /* 
    Codigo que se hace si se cumple
    la condicion C
    */
   console.log("Entro en la condicion C");

} else {
    /* 
    Codigo que se hace si no se cumple
    ninguna de las condiciones anteriores
    */
   console.log("No cumple con ninguna");
}

function dividir (a, b) {

    if (b === 0){
        console.log(("No se puede realizar la operacion"));
    }
    else{
        console.log( a/ b);
    }
    
}

/* dividir(10,2) */

/* Switch */

let nuevaCondicion = 156;

/* == o === regresa un true si la condicion se cumple */

/* Se utiliza para evaluar expresiones */

let edad = 30

switch(edad >= 18) {
    case true :
        console.log("mayor");
        break;
    case false:
        console.log("menor");
        break;

    case 20 :
        console.log("Te mando un saludo");
        break;

    case 15 :
        console.log("Caso false");
        break;

    default: /* por defecto */
        console.log("No entendi tu mensaaje");
        break;
}

switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
}

if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}



