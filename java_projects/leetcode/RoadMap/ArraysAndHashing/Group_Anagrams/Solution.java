import java.util.*;

// INCOMPLETE

class Solution {
    public static void main(String[] args) {
        String[] arr = {"hello", "lloeh", "oehll","hey","yeh","ehy"};
        String[][] newArr = new String[arr.length][];
        HashMap<String, Integer> hashMap = new HashMap<String, Integer>();
        for (int i = 0; i < arr.length; i++) {
            String[] strs = arr[i].split("");
            if (i == 0) {
                for (int j = 0; j < strs.length; j++) {
                    hashMap.put(strs[j], 1);
                }
                
            } else {
                for (int j = 0; j < strs.length; j++) {
                    hashMap.put(strs[j], 1);
                }
            }
            // hashMap.put(arr[i], 1);
        };
            System.out.println(hashMap);
        // for (int i = 0; i < arr.length; i++) {
        //     for (int j = 0; j < arr[i].length(); j++) {
        //         // System.out.println(arr[i].charAt(j));
        //         hashMap.put(String.valueOf(arr[i].charAt(j)), 1);
        //     }
        // }
    }
}