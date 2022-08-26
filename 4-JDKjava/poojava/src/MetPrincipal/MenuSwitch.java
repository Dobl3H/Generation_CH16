package MetPrincipal;

import EjemplosResumen.Animal;
import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class MenuSwitch {
    public void seleccionar(){
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();

        int Op;
        do {
            menuOp.menu();
            System.out.print("Elija una opcion -> ");
            Op = sc.nextInt();
            switch (Op) {
                case 1:
                    Saludo s = new Saludo();
                    s.saludar();
                    System.out.println(s.saludar0());
                    break;
                case 2:
                    Persona p = new Persona();
                    p.getNombre();
                    p.getEdad();
                    p.getNss();
                    p.caminar();
                    p.dormir();
                    break;
                case 3:
                    Fecha objF = new Fecha();
                    objF.setDia(25);
                    objF.setMes(8);
                    objF.setAnio(2022);
                    System.out.println(objF.formaF());
                    break;
                case 4:
                    Animal miAnimal = new Animal("Falco");
                    miAnimal.setEdad(3);
                    System.out.println("El nombre es: " + miAnimal.getNombre());
                    System.out.println(" y tiene " + miAnimal.getEdad() + " años");
                    break;
                default:
                    System.out.println("<-- opcion no valida -->");
                    System.out.println("Adios");
            }

        } while (Op <= 5);

    }
}
