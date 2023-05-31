public class Army {
    private int numOfCharacters = 0;
    private int id = 0;

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
}