// If we have an Employee table we'd like to query, we would create an employee dao interface like this

public interface EmployeeDAO {

    public List<Employee> getAllEmployees();
    public List<Employee> getEmployeesByCity(String cityName);
    public void updateEmployee(int id);
    public void deleteEmployee(int id);
    public void addEmployee(Employee e);
}