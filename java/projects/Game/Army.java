import java.util.*;

public class Army {
    private int numOfCharacters = 0;
    private int id = 0;
    private List<Troop> troops = new ArrayList<Troop>();

    public Army (int theId) {
        this.setId(theId);
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

    public List<Troop> getTroops() {
        return this.troops;
    }

    public void setTroops(ArrayList<Troop> newTroop) {
        this.troops = newTroop;
    }
}