import java.util.*;

public class StringBuilderPractice {


    public String removeAll(String str, String ch) {

        StringBuilder newString = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {
            if (Character.toString(str.charAt(i)).equals(ch)) {
                continue;
            } else {
                newString.append(Character.toString(str.charAt(i)));
            }
        }
        System.out.println(newString);
        return newString.toString();

    }
    
    public static void main(String[] args ){

        StringBuilderPractice sss = new StringBuilderPractice();
        sss.removeAll("Jesse", "s");

    }
}
