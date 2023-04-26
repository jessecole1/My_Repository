public class Codewars {
    public static void main (String[] array) {
    int[] b = {2,2,3};
    // your code
    int number = 0;
    for (int i = 0; i < b.length; i++) {
        number += b[i];
    }
    if (number % 2 == 0) {
        System.out.println("even");
    } else {
        System.out.println("odd");
    }
    }
}

// public class Codewars {
//   public static String oddOrEven (int[] array) {
//     int sum = 0;
//     for (int n : array){
//       sum += n;
//     }
//     return sum%2==0 ? "even" : "odd";
//   }
// }