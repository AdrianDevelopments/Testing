public class Excepciones{
    public static void InvocarExcepcion() throws MiExcepcion
    {
        throw new MiExcepcion("This is my own exception.");
    }
}
