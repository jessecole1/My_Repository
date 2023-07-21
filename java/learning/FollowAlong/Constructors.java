public class Constructors {

    public Constructors(int value) {
        System.out.println(value);
    }

    public Constructors() {
        System.out.println("Default constructor created.");
    }

    public static void main(String[] args) {
        Constructors c = new Constructors(5378);

        // NoArg constructor
        Constructors cNoArg = new Constructors();
        // Doesn't work, since the constructor with given args was created the compiler won't 
        // automatically create one
    }
}