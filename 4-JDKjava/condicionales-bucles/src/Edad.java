import java.util.Scanner;

public class Edad {

    public static void main(String[] args) {

        //Determinar si una persona es mayor de edad

        //Tener la edad - pedir al usuario
        //condicional para saber si es menor de 18

        //let nombre = prompt ("Escribe tu edad")

        Scanner escaner = new Scanner(System.in);//new es para instanciar
        System.out.println("Escribe tu edad ");
        int edad = escaner.nextInt();
        escaner.close(); //Se ocupan cuando ya no se necesiten leer mas datos

        // if else
        if (edad >= 18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }

        //Operdor ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);


    }

}
