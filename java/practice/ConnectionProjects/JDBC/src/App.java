import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


public class App {

    static final String DB_URL = "jdbc:h2:mem:testdb";
    static final String USERNAME = "sa";
    static final String PASSWORD = "sa";

    public static void main(String[] args) throws Exception {
        
        Class.forName("org.h2.Driver");
        try (Connection conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD)) {
            Statement stmt = conn.createStatement();
            String sql = "CREATE DATABASE cat";
            stmt.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
    }
}
