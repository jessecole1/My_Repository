import java.util.Queue;
import java.util.LinkedList;
import java.lang.Exception;

public class LinkedListPractice {
    public static void main(String[] args) {

        Queue<String> firstQueue = new LinkedList<>();
        firstQueue.add("Hello");
        firstQueue.add("Cherry");
        firstQueue.add("Button");

        firstQueue.poll();
        firstQueue.poll();
        firstQueue.poll();
        
        // SIDE NOTE FOR EXCEPTIONS - Just learning 
        // If firstQueue.remove() ran without being in a try-catch, an exception would be
        // thrown and the program would stop running. 
        // However, if we put the firstQueue.remove() in a try-catch, it will throw an 
        // exception but the rest of the program will run!! 

        try {
            firstQueue.remove();
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("Got here?");
        System.out.println(firstQueue);

        firstQueue.add("Banana");
        firstQueue.add("Apple");
        firstQueue.add("Button");

        String first = firstQueue.remove();
        System.out.println("Removed element: " + first);
        System.out.println("Rest of Queue: " + firstQueue);

    }
}