// An Iterator is an object that is used to loop through collections, like HashSet and ArrayList. 
// Import Iterator from the java.util package. 

import java.util.*;

public class IteratorPractice {
    public static void main(String[] args) {

        ArrayList<Integer> arrayList = new ArrayList<>();

        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        arrayList.add(5);
        arrayList.add(10);
        arrayList.add(15);
        arrayList.add(20);

        // Using the .iterator() method, we create an Iterator for any collection. 
        Iterator<Integer> iterator = arrayList.iterator();

        // Prints only the first item
        System.out.println(iterator.next());
        System.out.println();

        // Loop through iterator
        // Use the .hasNext()
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Iterator doesn't reset. To start at the beginning, just call another iterator. 
        Iterator<Integer> iteratorTwo = arrayList.iterator();

        // Removing items from a collection 
        // Use the .remove() method while looping 
        while (iteratorTwo.hasNext()) {
            Integer i = iteratorTwo.next();
            if (i < 10) {
                iteratorTwo.remove();
            }
        }
        System.out.println(arrayList);

    }
}