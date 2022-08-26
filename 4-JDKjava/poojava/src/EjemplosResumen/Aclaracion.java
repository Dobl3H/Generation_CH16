package EjemplosResumen;

public class Aclaracion {

    private int atributo1;
    private int atributo2;
    private String atributo3;

    public void setAtributo1(int attr1){
        this.atributo1 = attr1;
    }

    public void setAtributo2(int attr2){
        this.atributo2 = attr2;
    }

    public void setAtributo3(String atributo3) {
        this.atributo3 = atributo3;
    }

    public static void main(String[] args) {
        Aclaracion ac1 = new Aclaracion();
        Aclaracion ac2 = new Aclaracion();
        Aclaracion ac3 = new Aclaracion();

        ac1.setAtributo1(5);
        ac2.setAtributo2(10);
        ac3.setAtributo3("x");

        ac2.atributo1 = 5;
        ac2.atributo2 = 10;
        ac2.atributo3 = "x";
        System.out.println(ac1.atributo1 + ", " + ac1.atributo2 + ", " + ac1.atributo3);
        System.out.println(ac2.atributo1 + ", " + ac2.atributo2 + ", " + ac2.atributo3);

    }

    public Aclaracion(int attr1, int attr2, String attr3) {
        this.atributo1 = attr1;
        this.atributo2 = attr2;
        this.atributo3 = attr3;
    }


    public Aclaracion(){

    }
}
