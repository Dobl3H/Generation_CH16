package com.ehh.h_abstracta;

public class Circulo extends FigurasGeometricas{
    private  float radio;

    @Override
    public float area() {
        return (float) (Math.PI * Math.pow(radio, 2));
    }

    public float getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }

    public Circulo(float radio) {
        super("Circulo");
        this.radio = radio;
    }
}
