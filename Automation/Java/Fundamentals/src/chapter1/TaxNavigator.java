package chapter1;

public class TaxNavigator {
    public ITaxStrategy taxStrategy;

    public void setStrategy(ITaxStrategy strategy) {
        this.taxStrategy = strategy;
    }

    public double calculateTax(double salary) {
        return taxStrategy.calculateTaxes(salary);
    }
}
