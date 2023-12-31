package chapter1;

public class HighTax extends ITaxStrategy {

    private TaxRates taxRates;

    public HighTax() {
        taxRates = TaxRates.High;
    }

    //Overriden methods cannot change the visibility nor the return type, the parameters nor the method signature at all
    //Overloaded methods can do so
    @Override
    public double calculateTaxes(double salary) {
        return salary / taxRates.GetValue();
    }

    //Overloading inherited method
    public int OverloadMethod(int num) {
        return num;
    }

   /*  @Override
    public final void NotOverwritteableMethod(){
        System.out.println("This method cannot be overwritten");
    }*/
}
