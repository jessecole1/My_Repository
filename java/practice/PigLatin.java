import java.util.*;

public class PigLatin {

    public String returnPigLatin(String in){

        String s = "";
        for (int i = 1; i < in.length(); i++) {
            s += in.charAt(i);
        }
        s += in.charAt(0);
        s += "ay";
        return s;
    }


    public static void main(String[] args) {

        PigLatin p = new PigLatin();

        System.out.println(p.returnPigLatin("banana"));
        

    }
}
