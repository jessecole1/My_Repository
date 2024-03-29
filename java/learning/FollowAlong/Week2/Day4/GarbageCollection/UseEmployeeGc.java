// Java Program to count number
// of employees working
// in a company

class Employee {

    private int ID;
    private String name;
    private int age;
    private static int nextId = 1;
    // it is made static because it
    // is keep common among all and
    // shared by all objects
   
   public Employee(String name, int age) {
    this.ID = nextId++;
    this.name = name;
    this.age = age;
   }

   public void show() {
    System.out.println("ID:" + ID + "\nName: " + name + "\nAge: " + age);
   }

   public void showNextId() {
    System.out.println("The next employee id will be: " + nextId);
   }

   protected void finalize() {
    --nextId;
    // In this case,
    // gc will call finalize()
    // for 2 times for 2 objects.
   }
}

class UseEmployeeGc {

    public static void main(String[] args) {

        Employee E = new Employee("GFG1", 56);
        Employee F = new Employee("GFG2", 45);
        Employee G = new Employee("GFG3", 25);
        E.show();
        F.show();
        G.show();
        E.showNextId();
        F.showNextId();
        G.showNextId();

        { // It is sub block to keep
            // all those interns.
            Employee X = new Employee("GFG4", 23);
            Employee Y = new Employee("GFG5", 21);
            X.show();
            Y.show();
            X.showNextId();
            Y.showNextId();
            X = Y = null;
            System.gc();
            System.runFinalization();
        }

        E.showNextId();

    }

}