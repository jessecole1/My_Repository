import java.util.*;

class DigitCountValue {
    public static void main(String[] args) {
        String num = "1210";
        HashMap<Integer, Integer> hash = new HashMap<Integer, Integer>();
        for (int i = 0; i < num.length(); i++) {
            hash.put(Integer.parseInt(num[i]), 1);
        }
        System.out.println(hash);
    }
}

// testing