// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,7,8,9,1,2,3};
        HashMap<Integer, Integer> hash = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (hash.containsKey(nums[i])) {
                hash.merge(nums[i], 1, Integer::sum);
                return false;
            } else {
                hash.put(nums[i], 1);
            }
        }
        return true;
    }
}