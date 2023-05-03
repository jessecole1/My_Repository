// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


public class Kata {
    public static void main(String[] args) {
        int[] arr = {1,7,4,3,9,8};
        int[] newArr = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                for (int j = 0; j < arr.length; j++) {
                    if (arr[j] % 2 == 0) {
                        continue;
                    } else {
                        if (j < i && arr[j] > arr[i]) {
                            newArr[j] = arr[i];
                            newArr[i] = arr[j];
                    }

                    }
                }
            } else {
                newArr[i] = arr[i];
            }
        System.out.println(newArr[i]);
        }
    }
}










        //     // if its an even
        //     if (arr[i] % 2 == 0) {
        //         newArr[i] = arr[i];
        //     } else {

        //         // if its an odd
        //         int temp = arr[i];
        //         for (int j = 0; j < arr.length; j++) {
        //             if (arr[j] % 2 == 0) {
        //                 continue;
        //             } else {
        //                 if (j < i && arr[j] > arr[i]) {
        //                     newArr[i] = arr[j];
        //                     // System.out.println(newArr[i]);
                            
        //                     newArr[j] = temp;
        //                     // newArr[i] = temp;
        //                 }
        //             } 
        //         }
        //         // newArr[i] = temp;
        //     }
        // System.out.println(newArr[i]);