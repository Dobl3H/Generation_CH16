

/* Este cajero esta hecho con una base de interntet, se realizan prueba y error para repasar lo visto
y tambien poder hacer las modificaciones, queda pendiente */


let nipRetiro = 9182;
let nipCapturado = 0;
let opcion = 0;
let saldo = 10000;
let deposito = 0;
let retiro = 1501;
let deA1000 = 0;
let deA500 = 0;
let deA200 = 0;
let deA100 = 0;
let deA50 = 0;
let b1000 = 1000;
let b500 = 500;
let b200 = 200;
let b100 = 100;
let b20 = 20;
while(nipRetiro!=nipCapturado){
     nipCapturado = parseInt(prompt("Ingrese NIP")); 
}

if (nipCapturado==nipRetiro){
   
 while(opcion<1 || opcion>4){
  document.write("Bienvenido al Sistema" + "<br>"
  + "Opciones" + "<br>" + "1. Consulta de Saldo"
  + "<br>" + "2. Retiro" + "<br>" + "3. Deposito"
  + "<br>" + "4. Movimientos" + "<br>");
  
  opcion = parseInt(prompt("Ingrese la opcion: "));
 }                
 if(opcion == 1){
  document.write("Tu saldo actual es: " + saldo);
 }
 if(opcion == 2){    
  //suponga que el cajero solo tiene billetes de 500, 200,100 y 50 pesos
  //el objetico es entregar la menor catidad de billetes posible
  while (retiro>saldo || retiro==0 || (retiro%50) != 0 ) {
   retiro=parseInt(prompt("Cuanto vas a retirar"));
     }
  saldo= saldo-retiro;
  deA500 = parseInt((retiro / b500));
  retiro = (retiro - (deA500 * b500));
  deA200 = parseInt((retiro / b200));
  retiro = (retiro - (deA200 * b200));
  deA100 = parseInt((retiro / b100));
  retiro = (retiro - (deA100 * b100));
  deA50 = parseInt((retiro / b50));
  document.write(deA500 + " de 500" + '<br>');
  document.write(deA200 + " de 200" + '<br>');
  document.write(deA100 + " de 100" + '<br>');
  document.write(deA50 + " de 50" + '<br>');        
  document.write("Tu saldo actual es: " + saldo);
    }
 if(opcion == 3){
  deposito = parseInt(prompt("Cuanto depositas: "));
  saldo = saldo + deposito;
  document.write("Tu saldo actual es: " + saldo);
 }
 if(opcion == 4){
  alert("Movimientos");
 }
}
else{
    alert("Te lo dije....tarjeta retenida");
}
