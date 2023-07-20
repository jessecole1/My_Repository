public class Stack {

    private int lastItem = 0;
    private int[] items = new int[0];

    // add items to the stack
    public void push(int newItem) {
        int index = items.length;
        items = new int[items.length + 1];
        items[index] = newItem;

        // this method doesn't work, we would need to 
        // create a temporary array with +1 length, add all the items to it from items
        // and add the new item to newArray[newArray.length]. 
        // Then set items = newArray

        lastItem = newItem;
    }

    // remove items from the stack
    public int pop() {
        int tempItem = lastItem;

        int[] newArray = new int[items.length - 1];

        for (int i = 0; i < newArray.length; i++) {
            newArray[i] = items[i];
        }

        items = newArray;
        lastItem = items[items.length - 1];

        return tempItem;
    }

    // peel
    public int peek() {
        return 0;
    }

    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(1);
        s.push(5);
        for (int i = 0; i < s.items.length; i++) {
            System.out.println(s.items[i]);
        }
    }
}