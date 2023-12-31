package chapter1;

public class LowTax extends ITaxStrategy {

    private TaxRates taxRates ;
    public LowTax() {
       taxRates = TaxRates.Low;
    }

    @Override
    public double calculateTaxes(double salary) {
        return salary / taxRates.GetValue();
    }

}
