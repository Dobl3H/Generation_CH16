let x = 10;
/* console.log(x.length); */

/* ejercicio */

let persona = {
    nombre: 'Jose',
    apellido: 'Perez',
    edad: 25,
    email: 'jose@correo.com',
    /* nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido; 
    } */

        idioma: 'es',
        get leng() {
            return this.idioma.toUpperCase();
        },
        set leng (lang){
            this.idioma = lang.toLowerCase();
        }
}
/* console.log(persona.leng); */
persona.lang = 'ES';
console.log(persona.leng);
console.log(persona.idioma);

persona.tel = '555567890';
persona.te1 = '8749287349';

/* console.log(persona);
console.log(persona.nombre); */
/* console.log(persona.nombreCompleto()); */

/* let datos = new Object();
datos.nombre = 'Jose';
datos.apellido = 'Perez';
datos.edad = 25;
datos.email = 'jose@correo.com';
console.log(persona);
console.log(datos); */

/* for in */

/* for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString); */