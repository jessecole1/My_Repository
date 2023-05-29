// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
import java.lang.Math;

public class PerfectSquare {
    public static void main(String[] args) {
        long num = 342768196;
        long numb = Math.abs(num);
        long square = (long)Math.sqrt(numb);
        // System.out.println(square);
        if (numb / square == square) {
            long nextSquare = square + 1;
            // return nextSquare * nextSquare;
            System.out.println(nextSquare * nextSquare);
        } else {
            System.out.println(-1);
        }

        // long sq = 120;

        // long root = (long) Math.sqrt(sq);
        // System.out.println(root);
        //     System.out.println(root * root == sq ? (root + 1) * (root + 1) : -1);

    }
}
