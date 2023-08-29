package com.example.DAO;

import com.example.Model.Painting;

import java.sql.*;

public class PaintingDAO {

    Connection conn;

    static final String URL = "jdbc:h2:mem:testdb";
    static final String UN = "sa";
    static final String PW = "sa";

    public PaintingDAO() {

        // try {
        //     Class.forName("org.h2.Driver");
        //     System.out.println("Driver registered...");
        // } catch (Exception e) {
        //     e.printStackTrace();
        // }

        try {
            conn = DriverManager.getConnection(URL, UN, PW);
            Statement stmt = conn.createStatement();
            String sql = "CREATE TABLE IF NOT EXISTS Painting (id int, author VARCHAR(45), title VARCHAR(45), year_made int)";
            stmt.executeUpdate(sql);
            System.out.println("Table created...");
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public int savePaintingReturnId(Painting painting) {
        try {
            conn = DriverManager.getConnection(URL, UN, PW);
            PreparedStatement stmt = conn.prepareStatement("INSERT INTO Painting (id, author, title, year_made) VALUES (?, ?, ?, ?)");
            stmt.setInt(1, painting.getId());
            stmt.setString(2, painting.getAuthor());
            stmt.setString(3, painting.getTitle());
            stmt.setInt(4, painting.getYear());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return painting.getId();
    }

    public Painting getPaintingById(int id) {
        try {
            conn = DriverManager.getConnection(URL, UN, PW);
            PreparedStatement stmt = conn.prepareStatement("SELECT * FROM Painting WHERE ID = ?");
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();

            Painting paintingObj = new Painting();
            paintingObj.setAuthor(rs.getString("Author"));
            paintingObj.setId(rs.getInt("Id"));
            paintingObj.setTitle(rs.getString("Title"));
            paintingObj.setYear(rs.getInt("year_made"));
            return paintingObj;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
    
}
