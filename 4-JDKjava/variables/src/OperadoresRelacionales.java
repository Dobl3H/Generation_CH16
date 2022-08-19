public class OperadoresRelacionales {
    public static void main(String[] args) {
        int i = 3;
        byte j = 7;

        boolean b1 = i == j; //igual
        System.out.println("b1 " + b1);
        boolean b2 = !b1; //not
        System.out.println("b2 = " +b2);
        boolean b3 = i > j;
        System.out.println("b3 = " +b3);
        boolean b4 = i < j;
        System.out.println("b4 = " +b4);
        boolean b5 = i >= j;
        System.out.println("b6 = " +b5);
        boolean b6 = i <= j;
        System.out.println("b6 = " +b6);
    }
}
