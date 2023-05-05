class Solution {
    public static void main(String[] args) {
        // for (int i = 0; i < stringN.length(); i++) {
        //     int digit = Integer.parseInt(Character.toString(stringN.charAt(i)));
        //     int squared = digit * digit;
        //     newNum += squared;
        //     if (i == stringN.length()-1) {
        //         n = n - n + newNum;
        //     }
        //     // i = 1;
        // }
        // System.out.println("n: " + n + " | " + "newNum: " + newNum);
        int n = 19;
        String stringN = String.valueOf(n);
        int stringLength = stringN.length();
        int newNum = 0;
        int i = 0;
        int count = 0;
        while (i < stringN.length()) {
            if (count == 0 || count == count + 1) {
                int digit = Integer.parseInt(Character.toString(stringN.charAt(i)));
                int squared = digit * digit;
                newNum += squared;
                System.out.println("i: " + i);
                System.out.println("digit: " + digit);
                System.out.println("Squared Concated Number: " + newNum);
                String str = stringN + Integer.toString(newNum);
                if (i == stringN.length() - 1) {
                    stringN = str;
                    count++;
                    System.out.println("count: " + count);
                }
            }
            System.out.println("does it get here?");
            i++;
            if (i == 10) {
                break;
            }
        }
        System.out.println("n: " + n + " | " + "newNum: " + newNum);
        System.out.println(stringN);

    }
}