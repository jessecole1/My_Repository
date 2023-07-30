// 7. Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.

import java.util.*;

public class Student {

    private int studentId;
    private String studentName;
    private ArrayList<String> grades = new ArrayList<>();

    public Student() {};

    public void addGrade(String grade) {
        setGrades(grade);
    }

    public int getStudentId() {
        return this.studentId;
    }

    public void setStudentId(int id) {
        this.studentId = id;
    }

    public String getStudentName() {
        return this.studentName;
    }

    public void setStudentName(String name) {
        this.studentName = name;
    }

    public ArrayList<String> getGrades() {

        return this.grades;
    }

    public void setGrades(String grade) {
        this.grades.add(grade);
    }

}