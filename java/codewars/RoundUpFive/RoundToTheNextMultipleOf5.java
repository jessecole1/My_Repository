// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// package com.codewars.hwtdstrngls;

public class RoundToTheNextMultipleOf5 {

    public static void main(String[] args) {
        int num = 3;
        if (num >= 0) {
        int i = 0;
            while (i < num) {
                if (i-num <= 5) {
                    i += 5;
                }
            }
        System.out.println(i);
        } else {
            int i = 0;
            while (i > num) {
                i-=5;
                if (i < num) {
                    i+=5;
                    break;
                }
            }
            System.out.println(i);
        }
    }
}
