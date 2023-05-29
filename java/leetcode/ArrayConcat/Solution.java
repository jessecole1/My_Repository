class Solution {
    public static void main (String[] args) {
        int[] arr = {1,2,3};
        int[] ans = new int[arr.length*2];
        int i = 0;
        while (i < arr.length) {
            ans[i] = arr[i];
            ans[i + arr.length] = arr[i];
            i++;
        }
        for (int j = 0; j < ans.length; j++) {
            System.out.println(ans[j]);
        }
    }
}