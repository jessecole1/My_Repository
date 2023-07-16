import java.util.*;

class ReorganizeString {
    public static void main(String[] args) {
        String s = "aab";

        Map<String, Integer> hashMap = new HashMap<String, Integer>();
        System.out.println("hashmap 1: " + hashMap);
        for (int i = 0; i < s.length(); i++) {
        //     // If the hashmap already has the letter, increase it by 1
            if (hashMap.containsKey(String.valueOf(s.charAt(i)))) {
                // System.out.println("PP " + i + " : " + hashMap.get(String.valueOf(s.charAt(i))));
                hashMap.put(String.valueOf(s.charAt(i)), hashMap.get(String.valueOf(s.charAt(i))) + 1);
                // System.out.println("hey");
            } 
        //     // If the hashmap doesn't have the key, add it and add 1
            else {
                hashMap.put(String.valueOf(s.charAt(i)), 1);
            }
        }
        System.out.println("hashmap 2: " + hashMap);

        System.out.println("one: " + hashMap.get(String.valueOf(s.charAt(1))));
        return;
    }
}


