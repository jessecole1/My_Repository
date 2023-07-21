// package com.revature.exceptions.intro;

import java.io.FileNotFoundException;
import java.io.IOException;

public class BasicExceptionExample {

    public static void main(String[] args) {

        try {
            throwManyExceptions(1);
        } catch(FileNotFoundException e) {
            System.out.println("FileNotFoundException caught.");
        } catch(IOException e) {
            System.out.println("IOException caught.");
        } catch(Exception e) { // If you have multiple catch blocks, broader exception classes must come after more specific ones 
            System.out.println("Other exception caught.");
        } finally {
            System.out.println("The finally block will always run! (unless System.exit(0) is called or power is lost)");
        }

    }

    public static void throwManyExceptions(int i) throws Exception { // throws declaration in the method means you are "ducking" the exception
        switch(i) {
            case 1: throw new IOException();
            case 2: throw new ClassNotFoundException();
            case 3: throw new FileNotFoundException();
            default: throw new Exception();
        }
    }

}