public class BicycleTest {
    public static void main(String[] args) {
        Bicycle b1 = new Bicycle(0,1,2);
        KidsBicycle k1 = new KidsBicycle(1,2,3);
        k1.addTrainingWheels();
        k1.removeTrainingWheels();
    }
}