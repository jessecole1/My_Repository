public class Test {
    public static void main(String[] args) {
        SavingsAccount savingsOne = new SavingsAccount();
        savingsOne.deposit(1000);
        savingsOne.display();
        System.out.println();
        savingsOne.withdraw(500);
        savingsOne.display();
        savingsOne.withdraw(700);
        savingsOne.display();

        System.out.println();
        System.out.println();
        Checking checkingOne = new Checking();
        checkingOne.deposit(5000);
        checkingOne.withdraw(200);
        checkingOne.display();
    }
}