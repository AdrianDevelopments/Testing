public interface IInterfaz {
    //El especificador de acceso default es solo accesible desde el mismo paquete
    //En Java se sigue el camelCase, por lo que los metodos de varias palabras, cada palabra despues de la primera empezara con mayuscula
    default void defaultMetodo() {
    }
}
