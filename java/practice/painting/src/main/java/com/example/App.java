package com.example;

import com.example.Model.Painting;
import com.example.Controller.PaintingController;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ) {

        System.out.println("Start of the main method...");
        try {
            System.out.println("Attempting Class.forName() method...");
            Class.forName("org.h2.Driver");
            System.out.println("Driver registered...");
        } catch (Exception e) {
            e.printStackTrace();
        }

        PaintingController paintingController = new PaintingController();

        
    }
}
