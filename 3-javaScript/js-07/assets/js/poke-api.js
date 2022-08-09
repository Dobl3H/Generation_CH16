/* url a consumir */
const urlPokemon ="https://pokeapi.co/api/v2/pokemon/163"


/* elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")
console.log(imgPokemon);

const idPokemon = document.getElementById("id-pokemon")
console.log(idPokemon);

const nombrePokemon = document.getElementById("nombre-pokemon")
console.log(nombrePokemon);

/* funciones */
async function obtenerPokemon(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    const pokemon = {
        nombre: datos.forms[0].name,
        habilidad: datos.abilities,
        id: datos.id,
        tipos: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default
    }

    imgPokemon.src = pokemon.imagen;

    idPokemon.textContent = `ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;
    
}

obtenerPokemon(urlPokemon)