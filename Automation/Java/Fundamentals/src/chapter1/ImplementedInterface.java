package chapter1;

public class ImplementedInterface implements MyInterface {
    public static void main(String[] args) {
        ImplementedInterface implementedInterface = new ImplementedInterface();
        int value = implementedInterface.number;
    }

    public int number = 1;

    @Override
    public int getNumber() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getNumber'");
    }

}
