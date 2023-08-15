// The ArrayList class is a resizable array. Found in the java.util package. 
// Difference between an Array and ArrayList is that an Array's size cannot be modified. 
// Elements can be added or removed from an ArrayList at any time. 

import java.util.*;

public class ArrayListPractice {
    public static void main(String[] args) {

        // Syntax for creating a new ArrayList
        List<Integer> intArrayList = new ArrayList<Integer>();

        // Adding method
        // Use the .add() method on the ArrayList object you want to add to. 
        intArrayList.add(10);
        intArrayList.add(20);
        intArrayList.add(30);
        intArrayList.add(40);
        intArrayList.add(50);

        System.out.println(intArrayList);

        // Accessing an item
        // Use the .get() method and pass in the index number.
        System.out.println(intArrayList.get(3));

        // Changing an item
        // Use the .set() method, passing in two parameters. 1 is the index, 2 is the value.
        intArrayList.set(0, 100);
        System.out.println(intArrayList);

        // Remove an item
        // Use the .remove() method, passing in the index of the value you want to remove. 
        intArrayList.remove(4);
        System.out.println(intArrayList);

        // ArrayList size
        // Use the .size() method on the ArrayList object.
        System.out.println(intArrayList.size());

        // Looping through an ArrayList
        // Use a for loop and the .size() method.
        for (int i = 0; i < intArrayList.size(); i++) {
            System.out.println(intArrayList.get(i));
        }

        // Looping with a for-each loop
        for (Integer i : intArrayList) {
            System.out.println(i);
        }

        // Sort an ArrayList
        // Use the .sort() method on the Collections class and pass in the ArrayList object. 
        Collections.sort(intArrayList);
        System.out.println(intArrayList);

        // Remove all items.
        // Use the .clear() method on the ArrayList object.
        intArrayList.clear();
        System.out.println(intArrayList);

    }
}