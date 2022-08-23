import java.util.Objects;
import java.util.Scanner;
// import java.util.*; = Importar todas las clases del paquete util

public class Bucles {

    public static void main(String[] args) {
        // let i=1
        // bucle controlado
        for (int i=5; i<10; i++){
            System.out.println(i);
        }
        // while
        // bucle no controlado
        // La condicion se debe de modificar dentro de while

        String condicion = "";
        Scanner sc = new Scanner(System.in);

        // == != estamos comparando datos primitivos
        // Mientras la condicion sea true
        while(!Objects.equals(condicion, "Hola")){

            System.out.println("Saludame");
            condicion = sc.next();

        }


        // El do while es igual al while
        // El do while ejecuta la accion aunque sea una vez

        do{

            System.out.println("Saludame x2");
            condicion = sc.next();
        }while (!Objects.equals(condicion, "Hola"));
    }
}
