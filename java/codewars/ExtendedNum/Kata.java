// Kata.expandedForm(12); # Should return "10 + 2"
// Kata.expandedForm(42); # Should return "40 + 2"
// Kata.expandedForm(70304); # Should return "70000 + 300 + 4"

// public class Kata
// {
//     public static void main(String[] args) {

        // int input = 51;
        // for (int i = input; i >= 0; i--) {
        //     if (i % 10 == 0) {
        //         System.out.println(i);
        //     }
        // }

        // int number = 50;
        // int rem = number % 10;
        // int x = number - rem;

        // String nums = Integer.toString(number);
        // int[] array = new int[nums.length()];

        // for (int i = 0; i < array.length; i++) {
        //     int y = nums.charAt(i);
        //     int d = Character.getNumericValue(y);
        //     array[i] = d;
        // }

        // for (int i = 0; i < array.length; i++) {
        //     int new = array[i];

        // }

        // for (int i = 0; i < array.length; i++) {
        //     System.out.println(array[i]);
        // }


        
//     }
// }
        // = = = = = = Answer from codewars comments = = = = = = //

public class Kata
{
    public static String expandedForm(int num)
    {
        String outs = "";
        for (int i = 10; i < num; i *= 10) {
            int rem = num % i;
            outs = (rem > 0) ? " + " + rem + outs : outs;
            num -= rem;
        }
        outs = num + outs;
        
        return outs;
    }
}