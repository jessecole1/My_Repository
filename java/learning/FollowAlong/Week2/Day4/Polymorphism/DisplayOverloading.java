// Static Polymorphism
// Polymorphism that is resolved during compile time.
// Method overloading can be considered as static polymorphism example.
// Method Overloading: This allows us to have more than one methods with 
// same name in a class that differs in signature.


class DisplayOverloading {
    public void disp(char c) {
        System.out.println(c);
    }

    public void disp(char c, int num) {
        System.out.println(c + " " + num);
    }
}

public class ExampleOverloading {
    public static void main(String[] args) {
        DisplayOverloading obj = new DisplayOverloading();
        obj.disp('a');
        obj.disp('a', 10);
    }
}