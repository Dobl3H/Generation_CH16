
const urlAleatorios = "https://api.thecatapi.com/v1/images/search"

const imagenGatito = document.getElementById("img-gatito");
console.log(imagenGatito);

const btn = document.getElementById("btn-gatito")
console.log(btn);

btn.addEventListener("click", () => {

    console.log("Boton presionado");

    obtenerGatitoAleatorio(urlAleatorios)

})

async function obtenerGatitoAleatorio(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenGatito.src = datos[0].url;

}

obtenerGatitoAleatorio(urlAleatorios)