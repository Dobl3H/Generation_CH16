let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"]
console.log(carreritas);

/* Andrea adelanta a maria */
carreritas.splice(2,4);

carreritas.push("Andrea");
carreritas.push("Maria");
carreritas.push("Jesus");
carreritas.push("Jose");
console.log(carreritas);

/* Jose es descalificado de la carrera */
carreritas.pop();
console.log(carreritas);

/* Detras de lucia y antes de Roberto se clasifican tres nuevos corredores : Cristobal, Fernanda y Armando */
carreritas.shift();

carreritas.unshift("Lucia", "Cristobal", "Fernanda", "Armando");

/* Hay un nuevo concursante que toma el primer puesto: Federico */
carreritas.unshift("Federico");


/* Terminos
    *array son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación
    *splice sirve cambiar el contenido del arreglo eliminando o sustituyendo los elementos existentes por otros nuevos
    *push añade uno o más elementos al final de un array
    *pop elimina el último elemento de un array
    *shitf elimina el primer elemento del array
    *unshift sirve para agrega uno o más elementos al inicio del array 
    */