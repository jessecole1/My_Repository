public class MissingLetter
{
  public static void main (String[] args) {

    String[] array = {"l", "n", "o", "p", "q"};
    int[] nums = new int[array.length];
    int number = 0;
    String f = "";

    for (int i = 0; i < array.length; i++) {
      char chr = array[i].charAt(0);
      int j = chr;
      nums[i] = j;
    }

    for (int i = 0; i < nums.length-1; i++) {
      if (nums[i+1] - nums[i] == 1) {
      }
      else {
        // System.out.println(false);
        number = nums[i] + 1;
        char c = (char)number;
        String s = String.valueOf(c);
        f = s;
      }
    }
    System.out.println("The final answer: " + f);
    // return f;




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // for (int i = 0; i < nums.length; i++) {
    //   System.out.println(nums[i]);
    // }

    // String letter = "a";
    // char chara = letter.charAt(0);
    // // System.out.println(chara);

    // int i = chara;
    // System.out.println(i);
    // for (int i = 0; i < array.length; i++) {

    // }

    // for (int i = 0; i < str.length(); i++) {
    //   System.out.println(str.charAt(i));
    // }

    // String arr[] = {"apple", "banana", "cherry"};
    // String element = "mango";
    // String arrNew[] = new String[arr.length + 1];

    // for (int i = 0; i < arr.length; i++) {
    //   arrNew[i] = arr[i];
    // }
    // arrNew[arrNew.length - 1] = element;
    // for (int i = 0; i < arrNew.length; i++) {
    //   System.out.println(arrNew[i]);
    // }

}
}