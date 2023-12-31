package chapter1;

import java.util.Arrays;
import java.util.Random;

public class Lottery {
    private int[] numbers = { 10, 1, 23, 56, 43, 766, 92, 94, 129, 9384, 98, 311, 58, 0, 10, 37 };
    long longNumber;
    short shortNumber;
    float floatNumber = 4.87f;
    double doubleNumber = 4.87;
    
    private Random random = new Random();

    public static void main(String[] args) {
        Lottery lottery = new Lottery();
        System.out.println(lottery.getNumber());
        int searchNumber = 777;
        System.out.println("Index of the number " + searchNumber + " that you have searched for: "
                + lottery.findIndexNumber(searchNumber));
        lottery.SeeNumbers();
        
    }
    
    /**
     * Gets a random number from the private array
     * @return int number
     */
    public int getNumber() {
        int length = numbers.length;
        int index = random.nextInt(length);
        int selectedNumber = numbers[index];

        return selectedNumber;
    }
    
    public Integer findIndexNumber(int number) {
        var newNumber = 777;
        numbers[15] = newNumber;
        //Sorting numbers array from biggest to smallest
        Arrays.sort(numbers);
        /*Performing the binary search algorithm inside the number arrays, since the array must be sorted prior to execute it, what
         * the binary search is going to do is to take the number we are searching for, and look the half of the array, if the
         * number is greater or smaller than the half of the array, it will ignore the other part (if is smaller it will ignore the
         * upper half of the array) and will only search inside the part of the array that is relevant, saving resources and
         * increasing the performance 
        */
        //.binarySearch returns the index of a found number inside an array
        int foundNumber = Arrays.binarySearch(numbers, number);

        //The binarySearch returns a negative number that represents the position in which the not found number could be inserted
        if (foundNumber >= 0) {
            return foundNumber;
        } else {
            return null;
        }

    }

    public void SeeNumbers(){
            for(int number: numbers) System.out.println(number);
    }
}
