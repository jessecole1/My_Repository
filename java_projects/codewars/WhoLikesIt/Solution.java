class Solution {
    public static void main(String[] args) {
        String[] names = {"Jesse", "Kasey", "Kingston", "Ethan"};
        if (names.length == 0) {
            System.out.println("no one likes this");
        } 
        else if (names.length == 1) {
            System.out.println(names[0] + " likes this");
        }
        else if (names.length == 2) {
            System.out.println(names[0] + " and " + names[1] + " like this");
        }
        else if (names.length == 3) {
            System.out.println(names[0] + ", " + names[1] + " and " + names[2] + " like this");
        }
        else {
            int length = names.length - 2;
            System.out.println(names[0] + ", " + names[1] + " and " + length + " others like this");
        }
    }
}