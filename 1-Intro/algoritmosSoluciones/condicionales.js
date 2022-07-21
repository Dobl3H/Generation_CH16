
// Control de fluho

let nombre = "Marina";

let nombreIngresado = prompt("Escribe tu nombre");
console.log(nombreIngresado);

if(nombre === "Jonathan Yair"  || nombre === "Raul"){
    //Scope = contexto
    console.log("Eres un ");
    console.log("ADMIN 😎");

} else if (nombre === "Maria") {

    console.log("Eres una mentora");

} else {

    console.log("Eres un alumn@ 😀");

}

console.log("Fin del programa");