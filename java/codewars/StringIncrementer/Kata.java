// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// *{{  INCOMPLETE, NOT THERE YET }}*

import java.util.*;

public class Kata {
    public static void main(String[] args) {

        String string = "foobar";
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < string.length(); i++) {
            if ((int)string.charAt(i) >= 97 && (int)string.charAt(i) <= 122) {
                str.append(string.charAt(i));
            }
        }
        if ((int)string.charAt(string.length()-1) > 57) {
            str.append(1);
        } else {
            for (int i = 0; i < string.length(); i++) {
                if ((int)string.charAt(i) >= 48 && (int)string.charAt(i) <= 57) {
                    if (i == string.length() - 1) {
                        char h = (char)string.charAt(i);
                        int f = h - '0';
                        // System.out.println(f);
                        str.append(f + 1);
                    } else {
                        str.append((char)string.charAt(i));
                    }
                } 
            }
        }
        System.out.println(str);


    }
}