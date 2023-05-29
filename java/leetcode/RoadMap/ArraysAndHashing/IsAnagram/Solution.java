// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

import java.util.*;

public class Solution {
    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagaram";
        HashMap<String, Integer> hash = new HashMap<String, Integer>();
        // Iterate through String s's length
        for (int i = 0; i < s.length(); i++) {
            // Check to see if the hashmap already has the letter value
            if (hash.containsKey(String.valueOf(s.charAt(i)))) {
                // If it does, add 1 to the value count
                hash.merge(String.valueOf(s.charAt(i)), 1, Integer::sum);
            // If it does not contain the character
            } else {
                // Create a new key and give its value 1
                hash.put(String.valueOf(s.charAt(i)), 1);
            }
        }
        for (int i = 0; i < t.length(); i++) {
            if (hash.containsKey(String.valueOf(t.charAt(i)))) {
                hash.merge(String.valueOf(t.charAt(i)), -1, Integer::sum);
            } else {
                hash.put(String.valueOf(t.charAt(i)), -1);
            }
        }
        for (Map.Entry<String, Integer> entry : hash.entrySet()) {
            if (entry.getValue() > 0) {
                System.out.println(false);
            }
        }
    }
}