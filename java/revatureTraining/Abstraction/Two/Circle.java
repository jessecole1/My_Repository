import java.util.*;

public class Circle extends Shape {

    public Circle(double width, double height) {
        super();
        this.setHeight(height);
        this.setWidth(width);
    }

    public double calculateArea() {
        return  3.14 * ((this.getWidth()/2)*(this.getWidth()/2));
    }

    public double calculatePerimeter() {
        return 2 * 3.14 * (this.getWidth()/2);
    }

}