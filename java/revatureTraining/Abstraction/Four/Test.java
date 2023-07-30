public class Test {
    public static void main(String[] args) {
        Lion lionOne = new Lion();
        Tiger tigerOne = new Tiger();
        Deer deerOne = new Deer();

        lionOne.eat();
        tigerOne.eat();
        deerOne.eat();

        lionOne.sleep();
        tigerOne.sleep();
        deerOne.sleep();
    }
}