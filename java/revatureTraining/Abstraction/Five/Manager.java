public class Manager extends Employee {

    private int salary = 100000;

    public Manager(String name, int employeeId) {
        super(name, employeeId);
        this.setSalary(salary);
    }
}