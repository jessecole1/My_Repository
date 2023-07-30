public class Programmer extends Employee {

    private int salary = 80000;

    public Programmer(String name, int employeeId) {
        super(name, employeeId);
        this.setSalary(salary);
    }
}