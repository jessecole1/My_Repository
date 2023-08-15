// A HashSet is a collection of items where every item is unique 
// Order is not guaranteed. 
// HashSet is found in the java.util package.
// HashSet accepts objects. To use primitives, use the corresponding wrapper class for the primitive. 

import java.util.*;

public class HashSetTest {

    public static void main(String[] args) {

        // Creating a hashset 
        HashSet<String> myHashSet = new HashSet<String>();
        System.out.println(myHashSet);

        // Add method 
        myHashSet.add("String");
        myHashSet.add("Str");
        myHashSet.add("S");
        // No Compilation error with bellow line, but it will not add since it contains the value "String" already
        myHashSet.add("String");
        System.out.println(myHashSet);

        // Contain method. Returns boolean
        System.out.println(myHashSet.contains("String"));

        // Remove method
        myHashSet.remove("S");
        System.out.println(myHashSet);

        // Remove all items
        myHashSet.clear();
        System.out.println(myHashSet);

        // HashSet size. .size() Returns number of items in HashSet
        myHashSet.add("One");
        myHashSet.add("Two");
        myHashSet.add("Three");
        myHashSet.add("Four");
        System.out.println(myHashSet.size());

        // Looping through HashSet
        for (String i : myHashSet) {
            System.out.println(i);
        }

    }

}