package chapter1;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


public class PayCalculator {
    int[] numbers = new int[] { 1, 2, 3, 4, 5, 6, 7 };
    int valores[] = { 1, 2, 3, 4 };
    final String name = "Adrian";
    Scanner scanner;
    TaxNavigator taxNavigator;
    Map<String, ITaxStrategy> taxesContainer = new HashMap<String, ITaxStrategy>(){
        {
            put("low", new LowTax());
            put("medium", new MediumTax());
            put("high", new HighTax());
        }
    };

    public PayCalculator(Scanner scanner, TaxNavigator taxNavigator) {
        this.scanner = scanner;
        this.taxNavigator = taxNavigator;
    }

    public static void main(String[] args) throws Exception {
        int count = 3;

        while (count >= 1) {
            System.out.println("La aplicacion comenzara en: " + count);
            count -= 1;
        }
        Scanner scanner = new Scanner(System.in);
        TaxNavigator taxNavigator = new TaxNavigator();
        PayCalculator payCalculator = new PayCalculator(scanner, taxNavigator);
        System.out.print("Enter your daily salary: ");
        double salary = scanner.nextDouble();
        System.out.print("Enter the amount of hours you work per day: ");
        int hours = scanner.nextInt();
        double finalPayment = payCalculator.CalculateMonthlyPay(salary, hours);
        finalPayment = Math.round(finalPayment);
        System.out.println("The payment after the taxes have been paid is: " + finalPayment + " dollars");
        scanner.close();
        /* HighTax tax = new HighTax();
        tax.OverloadMethod();
        tax.OverloadMethod(6);*/ 
    }
    
    public double CalculateMonthlyPay(double amount, int hours) throws Exception {

        if (hours > 8) {
            throw new Exception("You cannot work more than 8 hours per day");
        }

        this.SetTaxes(amount);
        double salary = taxNavigator.calculateTax(amount);
            
        return (salary * hours) * 23.83;
    }

    /* The payments over 200 dollars get a 20% of taxes, payments over 100 dollars get a 10% of taxes, and payments below 100 get a 5%*/

    private void SetTaxes(double payment) {
        String taxApplication;
        if (payment > 200) {
            taxApplication = "high";
        } else if (payment < 200 && payment > 100) {
            taxApplication = "medium";
        } else {
            taxApplication = "low";
        }

     /*  switch ("A") {
            case "A":
                System.out.println("fdfsd");
            case "B":
        
            default:
                break;
        } */ 

        ITaxStrategy taxStrategy = taxesContainer.get(taxApplication);
        taxNavigator.setStrategy(taxStrategy);
    }
}
