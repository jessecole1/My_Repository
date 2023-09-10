// HashMap stores items in key/value pairs. 
// Can be access by index of another type. 
// One object is used as a key(index) and another object (value).
// It can store Strings keys and Integer values, or vice versa. 
// Import with java.util

import java.util.HashMap;
import java.util.*;



public class HashMapPractice {
    public static void main(String[] args) {

        HashMap<String, String> hashMap = new HashMap<String, String>();

        // Adding method
        hashMap.put("One", "One value");
        hashMap.put("Two", "Two value");
        hashMap.put("Three", "Three value");
        hashMap.put("Four", "Four value");
        hashMap.put("Five", "Five value");

        System.out.println(hashMap);

        // Accessing an item method. 
        // Use the .get() method on the HashMap object.
        // Pass in the key to get the value.
        System.out.println(hashMap.get("One"));

        // Removing an item.
        // Use the .remove() method on the HashMap object.
        // Pass in the key to delete the key/value pair.
        hashMap.remove("Five");
        System.out.println(hashMap);

        // HashMap size
        // Use the .size() method on the HashMap object. 
        System.out.println(hashMap.size());

        // Looping through a HashMap
        // Use a for-each loop 
        // Use .keySey() on HashMap object to get the keys: 
        for (String i : hashMap.keySet()) {
            System.out.println(i);
        }

        // Use .values() on HashMap object to get the values:
        for (String i : hashMap.values()) {
            System.out.println(i);
        }

        // Print keys and values 
        for (String i : hashMap.keySet()) {
            System.out.println("The key " + i + " has the value: " + hashMap.get(i));
        }

        Set set = hashMap.entrySet();
        System.out.println(set);

        for (Map.Entry<String, String> m : hashMap.entrySet()) {
            System.out.println(m.getKey() + " : " + m.getValue());
        }

    }
}