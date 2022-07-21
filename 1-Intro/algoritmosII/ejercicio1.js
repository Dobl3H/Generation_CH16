const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo

personas.splice(1, 1)
//console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"

personas.splice(2, 1)
//console.log(personas);

//Escribe un comando para agregar a "Luis" al inicio del arreglo

personas.unshift("Luis")
//console.log(personas);

//Escribe el comando para agregar tu nombre al final del arreglo

personas.push("Eduardo");
//console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"

//console.log(personas.indexOf("Maria"));

//Escribe el comando para mostrar la posición de tu nombre

//console.log(personas.indexOf("Eduardo"));

//arreglo multidimensional
const newArr = [1, 45, "Hola", "Adios", true, null, [30, 31, 32], ["Azul", "Amarillo", "Verde"]];

/* console.log(newArr);
console.log(newArr[6][1]);
console.log(newArr[5]); */


//Objetos
//estructura especial llamada objeto
//nos permite guardar pares de valores
// key  -  valor
//llave -  valor

const obj = {
    nombre : "Pedro",
    edad : 25,
    color : "Azul",
    hobbies : ["Leer", "Correr"],
    newArr : newArr
};

console.log(obj.edad);
console.log(obj.hobbies[1]);



