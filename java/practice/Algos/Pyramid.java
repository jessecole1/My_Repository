

public class Pyramid {

    public static String pyramid(int n) {
        String str = "";
        for (int i = 1; i <= n; i++) {
            String ast = "";
            for (int j = 0; j < i; j++) {
                ast += "*";
            }
            if (i != n) {
                str += ast + "\n";
            } else {
                str += ast;
                return str;
            }
        }
        return str;
    }

    public static void main(String[] args) {

        System.out.println(pyramid(5));

    }
}