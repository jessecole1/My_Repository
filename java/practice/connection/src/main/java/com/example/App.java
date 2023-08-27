package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Hello world!
 *
 */
public class App {

    public static String getCat() {
        return "Cat";
    }

    public static String getTrick() {
        return "Climb";
    }

    static final String URL = "jdbc:h2:mem:testdb";
    static final String USER_NAME = "sa";
    static final String PASSWORD = "sa";

    public static void main( String[] args ) {


        try {
            Class.forName("org.h2.Driver");
        } catch (Exception e) {
            System.out.println("Couldn't register the driver...");
            e.printStackTrace();
        }

        try (Connection conn = DriverManager.getConnection(URL, USER_NAME, PASSWORD)) {
            Statement stmt = conn.createStatement();
            String sql = "DROP TABLE IF EXISTS animal";
            stmt.executeUpdate(sql);
            String sql2 = "CREATE TABLE animal (breed varchar(45), trick varchar(45))";
            stmt.executeUpdate(sql2);
            System.out.println("Created table in database...");
            PreparedStatement ps = conn.prepareStatement("INSERT INTO animal (breed, trick) VALUES (?, ?)");
            ps.setString(1, "Cat");
            ps.setString(2, "Climb");
            ps.executeUpdate();
            System.out.println("Inserted into the table...");

            Statement returnstmt = conn.createStatement();
            String sqlReturn = "SELECT * FROM animal";
            ResultSet rs = returnstmt.executeQuery(sqlReturn);

            while (rs.next()) {
                System.out.println(rs.getString("breed"));
                System.out.println(rs.getString("Trick"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
