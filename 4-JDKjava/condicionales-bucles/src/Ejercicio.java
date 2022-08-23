import java.util.Scanner;

public class Ejercicio {

    public static void main(String[] args) {

        String cantAstericos = "";
        for (int i = 1; i <=5; i++) {
            cantAstericos = cantAstericos + "*";
            System.out.println(cantAstericos);
        }
        String cantAsteriscos2="******";
        System.out.println("segundo");
        for (int j=1; j<=6;j++){
            String a=cantAsteriscos2.substring(j);
            System.out.println(a);
        }

    }


}



