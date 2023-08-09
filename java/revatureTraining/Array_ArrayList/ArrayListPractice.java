import java.util.*;

public class ArrayListPractice {
    public static void main(String[] args) {
        List<Integer> integerArrayList = new ArrayList<Integer>();
        integerArrayList.add(1);
        integerArrayList.add(2);
        System.out.println(integerArrayList);
        System.out.println(integerArrayList.get(1));
        System.out.println(integerArrayList.get(0));
        System.out.println(integerArrayList.size());
    }
}