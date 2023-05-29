// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.



class Solution {
    public static void main (String[] args) {
        int[] ints = {2,2,1,2,2};
        int num = ints[0];
        int count = 0;
        int potentialNum = 0;
        for (int i = 1; i < ints.length; i++) {
            if (ints[i] == num) {
                count++;
            } else {
                potentialNum = ints[i];
            }
        }
        if (count > 0) {
            System.out.println(potentialNum);
        } else {
            System.out.println(num);
        }
    }
}