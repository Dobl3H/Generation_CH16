
function saludar (   ){
    console.log("Hola mundos");
}

//saludar();

//Arreglos

//let num = [];
//console.log(num);

//let arr1 = new Array ();
//console.log(arr1);


//usar un arreglo

//const arr = [1,2,3,4,5];
//console.log(arr);
//notacion de corchetes []
//console.log(arr[3]);

//arr[5]  = 25;
//arr[6]  = 8;
//arr[6]  = 0;

//arr[7] = undefined
//arr[8] = undefined
//arr[9] = undefined

//arr[10] =40;

//arr[8]  =9;

//console.log(arr);


//Propiedades de los arreglos
//descripcion de nuestro arreglo
//console.log(arr.length);

//Metodos
//acciones que puede realizar un arreglo


const frutas = ["Manzanas", "Platano"];
console.log(frutas);

//push()
//agrega un valor al final del arreglo

let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);


console.log(frutas);


//pop()
//quita un elemento del final del arreglo

let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);


//unshift()
//agrega un elemento al inicio del arreglo

let devolver = frutas.unshift("Uvas", "Peras");
console.log(frutas);
console.log(devolver);

//shift
//elimina un elemento del inicio de un arreglo

frutas.shift();
frutas.shift();
let frutaQuitada1 = frutas.shift();
let frutaQuitada = frutas.shift();
console.log(frutas);
console.log(frutaQuitada1);
console.log(frutaQuitada);



