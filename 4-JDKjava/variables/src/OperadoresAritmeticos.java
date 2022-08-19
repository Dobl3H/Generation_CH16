import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int i = 5, j = 4, suma = i + j;
        System.out.println("suma = " + suma);

        System.out.println("i + j = " + (i + j));
        System.out.println("i + j = " + i + j );
        int resta = i - j;
        System.out.println("resta = " + resta);
        System.out.println("i - j = " + (i - j));

        int multi = i * j;
        System.out.println("multi = " + multi);
        System.out.println("i * j = " + (i * j));

        int  div = i / j;
        System.out.println("div = " + div);
        float div1 = (float) i / (float) j;
        System.out.println("div1 = " + div1);
        //System.out.println("i / j = " + (i / j));

        int resto = i % j;
        System.out.println("resto = " + resto);
        resto = 8 % 5;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in);
        System.out.println("cual es tu nombre");
        String dato = scanner.next();
        System.out.println("Mi nombre es : " + dato);



        //System.out.println("cual es tu nombre: ");
        String dato1 = scanner.next();
        int edad = Integer.parseInt(dato);
        System.out.println("Mi edad es : " + edad);

        String nombre = scanner.next();
        System.out.println("tu nombre es: = " + nombre);


    }
}
