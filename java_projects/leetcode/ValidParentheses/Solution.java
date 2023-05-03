class Solution {
    public static void main(String[] args) {
        int num = 12321;
        String strNum = String.valueOf(num);
        double lenHalf = strNum.length() / 2;
        boolean theTruth = true;
        for (int i = 0; i < lenHalf; i++) {
            // System.out.println("First: " + strNum.charAt(i) + " | Last: " + strNum.charAt(strNum.length()-1-i));
            if (strNum.charAt(i) == strNum.charAt(strNum.length()-1-i)) {
                theTruth = true;
            } else {
                return false;
            }
        }
        if (theTruth == true) {
            return theTruth;
        }
    }
}