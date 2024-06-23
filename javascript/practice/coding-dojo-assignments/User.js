class User {
    constructor(username, emailAddress) {
        this.username = username;
        this.emailAddress = emailAddress;
        this.bankAccount = new BankAccount(0.02, 1000)
    };
}

class BankAccount {
    constructor(intRate, balance) {
        this.intRate = intRate;
        this.balance = balance;
    }
    makeDeposit(amount) {
        this.balance += amount;
        console.log("Depositing " + amount + " into your bank account");
    };

    makeWithdrawl(amount) {
        this.balance -= amount;
        console.log("Withdrawing " + amount + " from your bank account");
    };

    displayBalance() {
        console.log("Your balance: " + this.balance);
    }

    transfer(user, amount) {
        this.balance -= amount;
        console.log("Tranfering " + amount + " from your bank account..");
        user.bankAccount.balance += amount;
        console.log("Transfer successful");
    }
}

const jesse = new User("jessecole", "cole@email.com");
jesse.bankAccount.makeDeposit(1000);
jesse.bankAccount.displayBalance();