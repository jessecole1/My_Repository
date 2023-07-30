// 5. Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.

public abstract class Employee {

    private double salary;
    private int employeeId;
    private String name;

    public Employee(String name, int employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }


    public void calculateSalary() {
        System.out.println("Calculating salary...");
        System.out.println("This " + this.getClass().getSimpleName() + " " + this.getName() + "'s salary is: " + this.getSalary());
    }

    public void displayInfo() {
        System.out.println("Displaying " + this.getClass().getSimpleName() + " " + this.getName() + "'s info...");
        System.out.println("Employee ID: " + this.getEmployeeId());
        System.out.println("Name: " + this.getName());
        System.out.println("Salary: " + this.getSalary());
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public double getSalary() {
        return this.salary;
    }

    public void setEmployeeId(int id) {
        this.employeeId = id;
    }

    public int getEmployeeId() {
        return this.employeeId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

}