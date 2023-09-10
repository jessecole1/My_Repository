public class SubArray {
    // 1, 2, 3, 4, 5
    public int[] sub(int[] nums, int start, int end) {

        int[] subArray = new int[nums.length - 2];
        for (int i = 0; i < nums.length; i++) {
            if (i == start || i == end) {
                continue;
            } else {
                subArray[i-1] = nums[i];
            }
        }
        return subArray;
    }


    public static void main(String[] args) {

        SubArray s1 = new SubArray();
        s1.sub({1,2,3,4,5})

    }
}
