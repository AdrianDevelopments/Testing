package chapter1;

public enum TaxRates {
    High(1.2),
    Medium(1.1),
    Low(1.05);

    private double value;

    private TaxRates(double value) {
        this.value = value;
    }

    public double GetValue() {
        return value;
    }

}
