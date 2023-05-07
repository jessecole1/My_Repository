class Solution {
    public static void main(String[] args) {
        int n = 10;
        int result = 0;
        for (int i = 0; i <= n; i++) {
            if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
                result += i;
            }
        }
        System.out.println(result);
    }
}