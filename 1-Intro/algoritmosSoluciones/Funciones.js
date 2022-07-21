//funciones


function sumar (numero1, numero2){
    console.log("Voy a sumar");
    console.log("El resultado de la suma es; " + (numero1 + numero2));
}


sumar(4, 5)


//Ejercicio 2 utilizando funciones


function calculadoraSueldo (sueldoIngresado, diasTrabajados) {

    let nombre = prompt("Escribe tu nombre");
    console.log(nombre);

    const semanasMes = 4; // local

    console.log("Sueldo semanal: " + sueldoIngresado * diasTrabajados);
    console.log(
        "Sueldo mensual: " + sueldoIngresado * diasTrabajados * semanasMes
    );

    return semanasMes;
}

let mes = calculadoraSueldo (100, 2);

console.log(mes);


// calculadora de porcentajes

//0.6 = 60%
function calcularPorcentaje (numero, porcentaje) {
   
    let resultado = numero + porcentaje //local
    
    return resultado;

}

let porcentajeResultado = calcularPorcentaje(100, 40)
console.log(porcentajeResultado);

let multi = 5 * 5
console.log(multi);
