public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludos;//Declarar el objeto
        objSaludos = new Saludo();//Crear el objeto con new
        objSaludos.saludar();//Llamando al objeto

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludos.saludar0());
        System.out.println("Este es otro objeto: -> " + objSaludo0.saludar0());
    }
}
