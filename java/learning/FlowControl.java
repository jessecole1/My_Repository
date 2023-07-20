import java.util.*;

class FlowControl {



    public static void main(String[] args) {

        // - - - - - - - - - - - - - - - - - - - - - -

        // byte[] array = {1,0,1,0,1,0,1,0,1,0};
        // for (byte b : array) {
        //     System.out.println(b);
        // }
        // - - - - - - - - - - - - - - - - - - - - - -

        // int i = 0;
        // while (i <= 10) {
        //     System.out.println(i);
        //     i++;
        // }
        // - - - - - - - - - - - - - - - - - - - - - -

        // int g = 100;
        // while (g >= -100) {
        //     System.out.println(g);
        //     g--;
        // }

        // - - - - - - - - - - - - - - - - - - - - - -

        // int d = 1;
        // do {
        //     if (d % 2 != 0) {
        //         System.out.println(d);
        //     }
        //     d++;
        // } while (d <= 49); 
        // - - - - - - - - - - - - - - - - - - - - - -

        // String abc = "abcdefghijklmnopqrstuvwxyz";
        // for (int i = 0; i < abc.length(); i++) {
        //     System.out.print(abc.charAt(i));
        // }

        // - - - - - - - - - - - - - - - - - - - - - -


        // float aa = 0.1243f;
        // float bb = 0.1243f;
        // float cc = 0.1243f;
        // String s = myFunction(aa, bb, cc);

        // - - - - - - - - - - - - - - - - - - - - - - 

        int num = 20;
        first: 
        for (int i = 0; i < num; i++) {
            if (i < 10) {
                System.out.println("I: " + i);
                System.out.println("Continuing...");
                continue;
            } else if (i == 15) {
                break;
            }
        }

        // - - - - - - - - - - - - - - - - - - - - - - 

    }
    // public static String myFunction(float a, float b, float c) {
    //     float d = (b*b)-(4*a*c);
    //     if (d < 0) {
    //         System.out.println("Two complex (imaginary) solutions.");
    //         return "Two complex (imaginary) solutions.";
    //     } else if (d == 0) {
    //         System.out.println("One real-numbered solution.");
    //         return "One real-numbered solution.";
    //     } else {
    //         System.out.println("Two real-numbered solutions.");
    //         return "Two real-numbered solutions.";
    //     }
    // }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Using switch statement: 

    // public static String myFunction(float a, float b, float c) {
    //     float d = (b*b)-(4*a*c);

    //     switch (Float.compare(d, 0)) {
    //         case (-1):
    //             System.out.println("Two complex (imaginary) solutions.");
    //             return "Two complex (imaginary) solutions.";
    //         case (0):
    //             System.out.println("One real-numbered solutions");
    //             return "One real-numbered solutions";
    //         case (1):
    //             System.out.println("Two real-numbered solutions.");
    //             return "Two real-numbered solutions";
    //         default:
    //             return "Invalid.";
    //     }
    // }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}