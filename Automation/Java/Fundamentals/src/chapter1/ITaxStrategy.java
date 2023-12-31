package chapter1;

public abstract class ITaxStrategy {
    public TaxRates taxRates;

    public abstract double calculateTaxes(double salary);

    public void OverloadMethod() {
        System.out.println("This method will be inherited and overloaded");
    }

    //Final methods can be inherited but not overwritten by the subclasses
    public final void NotOverwritteableMethod() {
        System.out.println("You cannot overwrite me!");
    }
}
