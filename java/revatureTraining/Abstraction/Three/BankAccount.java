// 3. Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.

public abstract class BankAccount {
    private int balance = 0;

    public void setBalance(int amount) {
        this.balance = amount;
    }

    public int getBalance() {
        return this.balance;
    }

    public void display() {
        System.out.println("Balance from your " + this.getClass().getSimpleName() + " account: " + this.getBalance());
    }

    public void deposit(int amount) {
        System.out.println("Depositing " + amount + " to your " + this.getClass().getSimpleName() + " account.");
        this.setBalance(this.getBalance() + amount);
    }

    public void withdraw(int amount) {
        if (amount > this.getBalance()) {
            System.out.println("Insufficient Funds in your " + this.getClass().getSimpleName());
        } else {
            System.out.println("Withdrawing " + amount + " from your " + this.getClass().getSimpleName() + " account.");
            this.setBalance(this.getBalance() - amount);
        }
    }
}