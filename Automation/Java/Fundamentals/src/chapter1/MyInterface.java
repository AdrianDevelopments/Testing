package chapter1;

public interface MyInterface {
    int number = 0;

    public int getNumber();

    public default void ImplementedMethod(){
        System.out.println("I am a default method, so I have to give a default implementation in the interface.");
    }
}
