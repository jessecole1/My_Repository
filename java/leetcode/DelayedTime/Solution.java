// INCOMPLETE


import java.text.SimpleDateFormat;
import java.util.Date;

class Solution {
    public static void main(String[] args) {
        int arrivalTime = 11;
        int delayedTime = 12;

        SimpleDateFormat time = new SimpleDateFormat("hh");
        try {
            Date date = time.parse(Integer.toString(arrivalTime));
            if (delayedTime == 12) {
                int delay = 12;
            } else if (delayedTime == 24) {
                int delay = 24;
            } else {
            Date delay = time.parse(Integer.toString(delayedTime));
            }
            int total = date.getHours() + delay.getHours();
            System.out.println(delay);
            if (total == 24) {
                System.out.println(0);
            } else if (total > 24) {
                System.out.println(total - 24);
            } else {
            System.out.println(total);
            }
        } catch (Exception e) {
            System.out.println("error");
        }
    }
}