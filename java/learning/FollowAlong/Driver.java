package come.revature.main;

import java.util.ArrayList;

public class Driver {

    public static void main(String[] args) {

        Byte b = 10;
        Integer i = 10000;
        Integer i2 = 20000;

        System.out.println(i + i2);

        Integer i3 = 5000;
        Integer i4 = 5000;

        // This will print out to false since their wrapper classes point to two different 
        // points in memory;
        System.out.println("i3 == i4: " + (i3 == i4));

        // This will print out true
        // .equals() is how to compare two values of two different objects.
        System.out.println("i3.equals(i4): " + i3.equals(i4));


        // Useful static methods and constants in wrapper classes
        System.out.println(Integer.MIN_VALUE);
        System.out.println(Integer.MAX_VALUE);

        // Converting string to its corresponding value
        int age = Integer.parseInt("75");

        // Collections such as ArrayList can only deal with non-primitive values 
        // Java automatically (autboxing) converts primitive types to its wrapper class
        ArrayList<Integer> myInts = new ArrayList<>();
        myInts.add(10);
        myInts.add(1000);

    }

}