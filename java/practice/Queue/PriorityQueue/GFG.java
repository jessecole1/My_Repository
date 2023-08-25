import java.util.Queue;
import java.util.PriorityQueue;
import java.util.Iterator;

public class GFG {
    public static void main(String[] args) {

        Queue<String> priorityQueue = new PriorityQueue<>();

        priorityQueue.add("Geeks");
        priorityQueue.add("For");
        priorityQueue.add("Geeks");

        System.out.println(priorityQueue);

        priorityQueue.remove("Geeks");

        System.out.println(priorityQueue);

        priorityQueue.poll();

        System.out.println(priorityQueue);

        priorityQueue.add("For");
        priorityQueue.add("Geeks");

        Iterator iterator = priorityQueue.iterator();
        
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

    }
}