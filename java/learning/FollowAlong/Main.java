class MyException extends Exception {

    public MyException(String s) {

        // Call constructor of parent Exception
        super(s);

    }

}

// Class that used above MyException 

public class Main {

    public static void main(String[] args) {

        try {
            // Throw an object of user defined exception 
            throw new MyException("GeeksGeeks");
        } catch(MyException ex) {
            System.out.println("Caught");

            // Print the message from MyException Object
            System.out.println(ex.getMessage());
        }

    }

}