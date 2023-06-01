import java.util.*;

public class Troop {
    private String name = "";
    private int health = 100;
    private int attack = 0;
    private int defense = 0;
    private Room location = new Room("Starter");


    public void basicAttack(Troop target) {
        if (this.getLocation() != target.getLocation()) {
            System.out.println("Target not in line of sight.");

        } else {
            int charactersAttack = this.getAttack();
            int blow = charactersAttack - target.getDefense();
            int newHealth = target.getHealth() - blow;
            target.setHealth(newHealth);
            System.out.println("You attacked " + target.getName() + " for " + blow + " attack!");
            System.out.println(" - " + target.getName() + "'s new health: " + target.getHealth());
        }
    }

    public void enterRoom(Room room) {
        System.out.println("Entering '" + room.getRoomName() + "'...");
        this.setLocation(room);
    }

    public void viewGuards() {
        int guardNum = this.location.getNumOfCharacters();
        System.out.println("There are " + guardNum + " guards in " + this.location.getRoomName());
    }

    public String getName() {
        return this.name;
    }

    public void setName(String newName) {
        this.name = newName;
    }

    public int getHealth() {
        return this.health;
    }

    public void setHealth(int newHealth) {
        this.health = newHealth;
    }

    public int getAttack() {
        return this.attack;
    }

    public void setAttack(int newAttack) {
        this.attack = newAttack;
    }

    public int getDefense() {
        return this.defense;
    }

    public void setDefense(int newDefense) {
        this.defense = newDefense;
    }

    public Room getLocation() {
        return this.location;
    }

    public void setLocation(Room room) {
        this.location = room;
    }

}