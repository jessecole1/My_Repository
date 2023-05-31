import java.util.*;

public class TroopTest {
    public static void main(String[] args) {
        Room world = new Room("World");
        Room roomOne = new Room("Room One");
        Swordsman jesse = new Swordsman("Jesse");
        Swordsman kasey = new Swordsman("Kasey");
        jesse.enterRoom(roomOne);
        jesse.basicAttack(kasey);
        kasey.enterRoom(roomOne);
        jesse.basicAttack(kasey);
    }
}
