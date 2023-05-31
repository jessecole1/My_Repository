public class Room {
    private String roomName = "";
    private int numOfCharacters = 0;


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
}