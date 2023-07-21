import java.io.*;

import java.io.FileNotFoundException;
import java.io.IOException;

public class ExceptionPractice {

    public static void main(String[] args) {
        // throw
            try {
                // System.out.println(throwException(0));
                throwException(1);
            } catch (Exception e) {
                System.out.println("Caught");
                e.printStackTrace();
            }

    }

    public static int divide(int i) {
        return 10 / i;
    }

    public static void throwException(int i) throws Exception{
        if (i == 0) {
            throw new Exception();
            // System.out.println("IOException caught.");
        }
    }

}