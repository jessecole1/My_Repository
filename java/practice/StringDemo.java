public class StringDemo {

    public static void main(String args[]) {
        char[] helloArray = { 'h', 'e', 'l', 'l', 'o', '.' };
        String helloString = new String(helloArray);  
        // System.out.println( helloString );
        int len = helloString.length(); // Using the length method
        // System.out.println( "String Length is : " + len );
        String helloStringTwo = "world!";
        // System.out.println(helloString.concat(helloStringTwo));
        helloString.concat(helloStringTwo);
        System.out.println(helloStringTwo);
    }    
}