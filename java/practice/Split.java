import java.util.*;


public class Split {

    public Map<String, Integer> returnWordMap(String words){
        String[] split = words.split(" ");
        Map<String, Integer> map = new HashMap<String, Integer>();
        for (String s : split) {
            if (map.containsKey(s)) {
                map.put(s, map.get(s) + 1);
            } else {
                map.put(s, 0);
            }
        }
        return map;
    }

    public static void main(String[] args) {

        Split s = new Split();
        System.out.println(s.returnWordMap("h h h sd lg h ld sd"));

    }
}
