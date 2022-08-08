/* let texto = "hoy parece que va a salir el "; */
/* let texto01 = "la espero en el aeropuerto de LA"; */
let texto01 = "usuario@servidor.com";

let buscar = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;

console.log(buscar.test(texto01));