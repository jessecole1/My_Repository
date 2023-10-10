import java.util.*;

public class MostCommon {

    public char returningChar(String str) {
        
        Map<String, Integer> map = new HashMap<String, Integer>();
        for (int i = 0; i < str.length(); i++) {
            if (map.get(Character.toString(str.charAt(i))) == null) {
                map.put(Character.toString(str.charAt(i)), 1);
            } else {
                map.put(Character.toString(str.charAt(i)), map.get(Character.toString(str.charAt(i))) + 1);
            }
        }
        Set set = map.entrySet();
        String mostCommonChar = "";
        int num = 0;
        
        for (Map.Entry<String, Integer> m : map.entrySet()) {
            if (m.getValue() > num) {
                num = m.getValue();
                mostCommonChar = m.getKey();
            }
        }
        return mostCommonChar.charAt(0);
    }



    public static void main(String[] args) {

        MostCommon g = new MostCommon();
        g.returningChar("aaaaaaadfghsdgh");

    }
}
