

public class KidsBicycle extends Bicycle {
    public int NumberOfTrainingWheels;


    public KidsBicycle(int cadence, int gear, int speed) {
        super(cadence, gear, speed);
        this.NumberOfTrainingWheels = 0;
    }

    public void addTrainingWheels() {
        this.NumberOfTrainingWheels = 2;
        System.out.println("Adding Training wheels...");
        System.out.println("Training wheel amount: " + this.NumberOfTrainingWheels);
    }
    
    public void removeTrainingWheels() {
        this.NumberOfTrainingWheels = 0;
        System.out.println("Removing Training wheels...");
        System.out.println("Training wheel amount: " + this.NumberOfTrainingWheels);
    }


}