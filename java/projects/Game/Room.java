import java.util.*;

public class Room {
    private String roomName = "";
    private int id = 0;
    private int numOfCharacters = 0;
    private ArrayList<Object> characters = new ArrayList<Object>();
    private ArrayList<Guard> guards = new ArrayList<Guard>();

    public Room(String roomName) {
        this.setRoomName(roomName);
    }

    public void addCharacter(Object newChar) {
        ArrayList<Object> chars = this.getCharacters();
        chars.add(newChar);
        this.setCharacters(chars);
        this.setNumOfCharacters(this.getNumOfCharacters()+1);
    }

    public void addGuard(Guard newGuard) {
        ArrayList<Guard> chars = this.getGuards();
        chars.add(newGuard);
        this.setGuards(chars);
        this.setNumOfCharacters(this.getNumOfCharacters()+1);
    }


    public String getRoomName() {
        return this.roomName;
    }

    public void setRoomName(String newRoomName) {
        this.roomName = newRoomName;
    }

    public int getNumOfCharacters() {
        return this.numOfCharacters;
    }

    public void setNumOfCharacters(int newNumOfCharacters) {
        this.numOfCharacters = newNumOfCharacters;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int newId) {
        this.id = newId;
    }

    public ArrayList<Object> getCharacters() {
        return this.characters;
    }

    public void setCharacters(ArrayList<Object> newCharacters) {
        this.characters = newCharacters;
    }

    public ArrayList<Guard> getGuards() {
        return this.guards;
    }

    public void setGuards(ArrayList<Guard> newGuards) {
        this.guards = newGuards;
    }
}