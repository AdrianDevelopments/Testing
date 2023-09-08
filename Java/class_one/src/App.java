// -*- coding: utf-8 -*-

import java.text.MessageFormat;

import javax.lang.model.util.Elements.Origin;

import org.xml.sax.ErrorHandler;

public class App {

    static int fibonnaciNum = 0;
    static boolean booleano = true;
    static double doble = 4.3245;
    static char caracter = 'a'; //Usamos comillas simples para indicar un tipo de dato char
    static byte bite = 127; //El byte en Java abarca desde el -128 al 127, ocupa 1 byte de espacio
    static short corto = -32768; //El short en Java abarca desde -32768 a 32767, ocupa 2 bytes de espacio
    static int edad = 21; //El int en Java abarca desde -2,147,483,648 a 2,1471483,647, ocupa 4 bytes de espacio
    static long largo = -9223372036854775808L; //El long en Java va desde -9,223,372,036,854,775,808 hasta -9,223,372,036,854,775,807, OJO: Se debe usar la L al final para hacerle saber a Java que es un long, , ocupa 8 bytes de espacio
    static float flotante = 7.534f; //Se debe usar f al final del numero para indicar que estamos usando un float
    static int[] numArray = new int[5];
    static char[] charArray = { 'a', 'b', 'c' };
    //Aray numerico de array numerico
    static int[][] numArrayArray = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

    static int casteado = (int) doble; //Casteo en Java

    static String[] nombres = { "Adrian", "Yarilyn" };

    public static void main(String[] args) {
        /*        System.out.println("Hello, World!");
        System.out.println(addAdmiration(18));
        seeCast();
        System.out.println(testConditionals()); */
        /* matricesNovios(); */
        /*   probarDoWhile(); */
        /*  probarForEach(); */
        /*         useArrayCopy(); */
        /* probarWhile(); */
        /* fibonnaci(); */
        try {
            Excepciones.InvocarExcepcion();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        
    }

    public static String addAdmiration(int num) {

        return new StringBuilder().append(Integer.toString(edad)).append("! ").append(" Yo tengo ")
                .append(Integer.toString(num)).append(" años").toString();
    }

    public static void seeCast() {
        System.out.println(casteado);
    }

    public static boolean testConditionals() {
        if (booleano) {
            System.out.println("Primera condicion cumplida");
            boolean respuesta = (edad > 18) ? true : false;
            int numerico = (respuesta) ? 1 : 0;

            switch (numerico) {
                case 1:
                    System.out.println("Es verdadera");
                    break;
                default:
                    System.out.println("Es falsa");
                    break;
            }
            return respuesta;
        } else {
            return false;
        }
    }

    public static void matricesNovios() {
        for (int i = 0; i < nombres.length; i++) {
            if (i == 0) {
                //Usamos %s para representar las variables que se pasan por parametro junto al format y sustituirlas dentro del format, si usamos estas variables mas de una vez en el string, debemos ponerle el identificador num$s para diferenciarlos
                System.out.println(
                        String.format("%s y %s son novios, %2$s es la novia de %1$s", nombres[i], nombres[i + 1]));
            } else if (i == 1) {
                System.out.println(MessageFormat.format("{0} y {1} son novios, {1} es el novio de {0}", nombres[i],
                        nombres[i - 1]));
            }
        }
    }

    public static void probarWhile() {
        while (edad > 0) {
            if (edad == 6){
                edad -= 1;
                //Continue sirve para saltar a  la siguiente interación del bucle
                continue;
            }
            System.out.println(edad);
            edad -= 1;
        }
    }

    public static void probarDoWhile() {
        do {
            System.out.println(edad);
        } while (edad > 22);
    }

    public static void probarForEach() {
        for (char c : charArray) {
            System.out.println(c);
        }
    }

    public static void useArrayCopy() {
        HandleArrays<int[]> handleArrays = new HandleArrays<>();
        int[][] result = handleArrays.copyArray(numArrayArray);
        System.out.println("Resultado:");
        System.out.println(result[0][0]);
    }

    public static void fibonnaci() {

        try {
          
            int almacenNumA = 0;
            int almacenNumB = 1;
            for (int i = 0; i < 15; i++) {
                System.out.println(fibonnaciNum);
                almacenNumA = fibonnaciNum;
                fibonnaciNum = almacenNumA + almacenNumB;
                almacenNumB = almacenNumA;
            }
            throw new Exception();
        } catch (Exception e) {
            throw new Error("Error lanzado");
        }
        
    }

}


