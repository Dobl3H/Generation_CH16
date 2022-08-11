/* tipo predifinido */
let tiempo = new Date();
/* console.log(tiempo);
console.log(Math); */

let obj_literal = { /* Objeto abstracto ya que no esta definido */
     nombre: 'Juan',
   edad: 35
}


let obj_constructor = new Object(); /* El constructor sirve para establecer las propiedades de un objeto o para llamar a los metodos para preparar el objeto para su uso; esta funcion sirve como el constructor del objeto, por lo que no hay necesidade de definir explicitamente un metodo de constructor */
obj_constructor.nombre = 'Dora';
obj_constructor.edad = 23;
console.log(obj_literal);
console.log(obj_constructor);

obj_literal['nombr'];
let llave = 'nombr';
console.log('esto es una llave ' + obj_literal [llave]);




/* tipo cadena */
let cadena = "Esto es una cadena";
let cadena_Obj = new String('Esto es otra cadena obj');
/* console.log(cadena);
console.log(cadena_Obj); */

/* tipo numerico */
let numero = 13;
let numero_Obj = new Number(13.13);
/* console.log(numero);
console.log(numero_Obj); */

/* tipo compuesto o unico */
let lista = ['2', '3', '5', '7'];
let lista_Obj = new Array ('1', '4', '6', '8', '9')
/* console.log(lista);
console.log(lista_Obj); */