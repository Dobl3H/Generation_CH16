import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {

        Map<String,String> diccionario = new HashMap<>();
        diccionario.put("door", "puerta");
        diccionario.put("body", "cuerpo");
        diccionario.put("house", "casa");
        diccionario.put("dog", "perro");
        diccionario.put("think","pensar");

        diccionario.put("see", "ver");
        diccionario.put("people", "gente");
        diccionario.put("time", "tiempo");
        diccionario.put("up","arriba");
        diccionario.put("but","pero");

        diccionario.put("all", "todo");
        diccionario.put("sister", "hermana");
        diccionario.put("dragon", "dragon");
        diccionario.put("have", "tener");
        diccionario.put("year","año");

        diccionario.put("work", "trabajo");
        diccionario.put("new", "nuevo");
        diccionario.put("clock", "reloj");
        diccionario.put("day","día");
        diccionario.put("chair","silla");

        //Seleccionar 5

        System.out.println(diccionario);
        //No aleatorio
        Object primero = diccionario.keySet().toArray()[1];
        Object segundo = diccionario.keySet().toArray()[2];
        Object tercero = diccionario.keySet().toArray()[3];
        Object cuarto = diccionario.keySet().toArray()[4];
        Object quinto = diccionario.keySet().toArray()[5];

        System.out.println("Ingresa la palabra en ingles");
        Scanner sc = new Scanner(System.in);
        String palabraBuscada = sc.nextLine();
        //String palabraMeaning = diccionario.get(palabraBuscada);
        //System.out.println();

        for(int j = 0; j<10; j++){


            break;
        };




    }
}
