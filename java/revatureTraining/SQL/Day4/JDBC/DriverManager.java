// Using the Driver Manager class to get a Connection to the database
try {Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
    // Write some SQL code and execute it
    Statement stmt = conn.createStatement();
    String sql = "SELECT * FROM table_name";
    ResultSet rs = stmt.executeQuery(sql);

    // Alternatively, use a PreparedStatement 
    PreparedStatement ps = conn.prepareStatement();
    String sql = "SELECT * FROM employees WHERE age > ? AND location = ?";
    ps.setInt(1, 40);
    ps.setString(2, "New York");
    ResultSet rs = ps.executeQuery(sql);

    // Retrieving the results 
    List<Employee> empList = new ArrayList<>();
    while (rs.next()) {
        int id = rs.getInt("id");
        String name = rs.getString("first_name");
        empList.add(new Employee(id, name));
    }

    
} catch (SQLException e) {};




// Manually calling commits instead of using Autocomit mode
Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
conn.setAutoCommit(false);
// some more code
conn.commit();