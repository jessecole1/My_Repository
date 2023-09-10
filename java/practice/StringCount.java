


public class StringCount {
        /**
         * @param in A String representing a sentence, with words delineated by spaces.
         * @return return the amount of words in a string.
         */
        public int count(String in){
            if (in == null || in.isEmpty()) {
                return 0;
            } 
            String[] s = in.split("\\s+");
            return s.length;

        }
    

    public static void main(String[] args) {

        StringCount s = new StringCount();
        System.out.println(s.count("hello this is a test"));

    }
}
