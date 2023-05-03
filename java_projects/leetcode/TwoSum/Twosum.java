class Twosum {
    public static void main(String[] args) {
        int[] nums = {1,3,5,7,9};
        int target = 12;
        int[] arr = new int[2];
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (i == j) {
                    continue;
                } else {
                    int temp = nums[i] + nums[j];
                    if (temp == target) {
                        arr[0] = nums[i];
                        arr[1] = nums[j];
                    }
                }
            }
        }
        for 
    }
}