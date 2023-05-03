// INCOMPLETE


import java.util.*;

class Solution {
    public static void main(String[] args) {
        String[] arr = {"flowers", "flow", "flint"};
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < arr[0].length(); i++) {
            if (arr.length == 0) {
                break;
            } else if (arr.length == 1) {
                    str.append(arr[i]);
            } else if (arr.length == 2) {
                if (arr[0].charAt(i) == arr[1].charAt(i)) {
                    str.append(arr[0].charAt(i));
                }
            } else if (arr.length > 2) {
                if (arr[0].charAt(i) == arr[1].charAt(i) && arr[0].charAt(i) == arr[2].charAt(i)) {
                str.append(arr[0].charAt(i));
                } 
                System.out.println("test");
            } else {
                break;
            }
        }
        System.out.println(str);

    }
}