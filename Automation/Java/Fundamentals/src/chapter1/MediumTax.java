package chapter1;

public class MediumTax extends ITaxStrategy {
    
    private TaxRates taxRates;

    public MediumTax() {
        taxRates = TaxRates.Medium;
    }

    @Override
    public double calculateTaxes(double salary) {
        return salary / taxRates.GetValue();
    }

}
