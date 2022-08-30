package com.ehh.principal;

import com.ehh.herencia.BasePadre;
import com.ehh.herencia.Hija;
import com.ehh.herencia.Hijo;

import java.util.Scanner;

public class EjemploHerencia {
    public static void main(String[] args) {
        //BasePadre basepadre = new BasePadre();
        //Scanner sc = new Scanner(System.in);
        //System.out.println("ingrese el valor de a (es entero)");
        //int a = sc.nextInt();
        //basepadre.setA(a);
        //System.out.println("ingrese el valor de b (es double)");
        //double b = sc.nextDouble();
        //basepadre.setB(b);
        //System.out.println("ingrese el valor de c (es string)");
        //String c= sc.next();
        //basepadre.setC(c);
        //basepadre.visualizarA();
        //basepadre.visualizarABC();

        Hija h = new Hija();
        h.visualizarA();

        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2357);
        Object miObj = new BasePadre();

        System.out.println("Atributo de Clase Base Padre ->" +h.getA());
        System.out.println("Atributo de Clase Hijo -> " +ho.getA());

    }
}
