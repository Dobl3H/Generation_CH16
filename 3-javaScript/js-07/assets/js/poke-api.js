/* url a consumir */
const urlPokemon ="https://pokeapi.co/api/v2/pokemon/"


/* elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")
/* console.log(imgPokemon); */

const idPokemon = document.getElementById("id-pokemon")
/* console.log(idPokemon); */

const nombrePokemon = document.getElementById("nombre-pokemon")
/* console.log(nombrePokemon); */

const listaHabilidades = document.getElementById("lista-habilidades")
/* console.log(listaHabilidades); */

const listaTipos = document.getElementById("lista-tipos")
console.log(listaTipos);

const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);

/* Eventos */
formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputPokemon = document.getElementById("busqueda-pokemon")
    console.log(inputPokemon.value);

    const nuevaBusqueda = urlPokemon + inputPokemon.value
    /* console.log(nuevaBusqueda); */   
    
    obtenerPokemon(nuevaBusqueda)
})

/* funciones */
async function obtenerPokemon(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    const pokemon = {
        nombre: datos.forms[0].name,
        habilidades: datos.abilities,
        id: datos.id,
        tipos: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default
    }
    /* Imagen, nombre e ID */
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;
    /* Habilidades */
    console.log(pokemon.habilidades.length);

    let template = ``

    for(let i=0; i < pokemon.habilidades.length; i++){

        const nombreHabilidad = pokemon.habilidades[i].ability.name;

        console.log(nombreHabilidad);

        template += `<li class="list-group-item"> ${nombreHabilidad} </li>`
    }


    listaHabilidades.innerHTML = template;

    /* Tipos */
    console.log(pokemon.tipos);

    let templateTipos = ""

    pokemon.tipos.forEach( (tipo) => {

        console.log(tipo.type.name);
        const nombreTipo = tipo.type.name;
        console.log(nombreTipo);

        templateTipos += `<li class="list-group-item"> ${nombreTipo} </li>`
    })
    console.log();
    listaTipos.innerHTML = templateTipos;
    
}

/* obtenerPokemon(urlPokemon) */