package com.ehh.herencia;

public class BasePadre {
        protected int a;
        private double b;
        private String c;

        public BasePadre() {

        }
        public void visualizarA(){
            System.out.println("elemento de la clase padre el valor de a" + getA());
            System.out.println("objet h -> soy un metodo de la clase BasePadre");
        }
        public void visualizarABC(){
            System.out.println("el valor de a es " + getA());
            System.out.println("el valor de b es " + getB());
            System.out.println("el valor de c es " +getC());
            System.out.println("objet ho -> soy el metodo visualizaABC");

        }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
