import java.util.*;

public class TroopTest {
    public static void main(String[] args) {
        Room world = new Room("Open World");
        Room roomOne = new Room("Room One");
        Guard guardOne = new Guard(roomOne);
        Guard guardTwo = new Guard(roomOne);
        Guard guardThree = new Guard(roomOne);
        roomOne.addCharacter(guardOne);
        roomOne.addCharacter(guardTwo);
        roomOne.addCharacter(guardThree);

        Swordsman jesse = new Swordsman("Jesse");
        jesse.enterRoom(world);
        jesse.viewGuards();
        jesse.enterRoom(roomOne);
        jesse.viewGuards();

    }
}
