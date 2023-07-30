public class TestStudent {
    public static void main(String[] args) {
        Student studentOne = new Student();
        studentOne.setStudentName("Jesse");
        studentOne.setStudentId(1);
        System.out.println(studentOne.getStudentName());
        studentOne.setGrades("A");
        studentOne.setGrades("B");
        studentOne.addGrade("C");
        System.out.println(studentOne.getGrades());
    }
}