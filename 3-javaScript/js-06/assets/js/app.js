/* console.log(document.URL); */

/* getElementById() */

console.log(document.getElementById("parrafo1"));

const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el parrafo 1";

console.log(parrafo1.textContent);

console.log(parrafo1.style);

parrafo1.style.color = "red";
parrafo1.style.backgroundColor = "yellow";


/* querySelector () */
/* etiqueta = p */
/* clase = .parrafo */
/* id = #parrafo1 */


const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

parrafo2.textContent += "\n Modificando el contenido desde JavaScript";

/* \n  -- inserta un salto de linea === <br */
/* \t inserta una tabulacion */


/* query.SelectorAll() // lista de nodos - nodelist*/

const parrafos = document.querySelectorAll("p")
console.log(parrafos[2]);

parrafos[2].style.fontSize = "30px";
parrafos[1].style.background = "gray";

/* css - font-size */
/* js - fontsize - lower camel case */


/* modificar los atributos de html */
const enlace = document.getElementById("enlace");
console.log(enlace);

enlace.href = "https://www.youtube.com/"
enlace.target = "_blank"
enlace.textContent = "Enlace de Youtube"

/* Reemplazar contenido */

const parrafo4 = document.getElementById("parrafo4");

console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML);/* muestra el html en el interior de el elemento */
console.log(parrafo4.outerHTML);/* muestra el contenido html, incluyendo al elemento */

/* parrafo4.outerHTML =' <a href="http://google.com">Enlace</a> '; reemplaza el elemento completo */

/* parrafo4.innerHTML =' <a href="http://google.com">Enlace</a> '; reemplaza el contenido del elemento*/

/* parrafo4.outerHTML = '<div class="elemento">Este es un div</div>'; */


/* Js nos permite modificar las clases css */
/* utilizando style */
/* usando classlist */
console.log(parrafo4.classList.contains("elemtento"));


const cambiarColor = () => {
    parrafo4.classList.toggle('elemento');
}

cambiarColor();/* se agrega la clase */
cambiarColor();/* se quita la clase */