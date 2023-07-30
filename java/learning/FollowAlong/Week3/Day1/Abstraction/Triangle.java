import java.util.*;

public class Triangle extends Shape {
    double base;
    double height;

    public Triangle(double base, double height, String color) {

        super(color);
        this.base = base;
        this.height = height;
    }

    @Override
    public double area() {
        return 0.5 * this.base * this.height;
    }

    @Override
    public String toString() {
        return "Triangle Area: " + this.area() + " Triangle Color: " + this.color;
    }
}