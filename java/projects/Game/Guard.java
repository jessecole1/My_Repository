public class Guard extends Troop {
    private Room location = new Room("Starter");

    public Guard() {
        String guardsName = "Guard";
        int guardsHealth = 150;
        int guardsAttack = 10;
        int guardsDefense = 12;
        this.setHealth(guardsHealth);
        this.setAttack(guardsAttack);
        this.setDefense(guardsDefense);
        this.setName(guardsName);
    }
    public Guard(Room location) {
        String guardsName = "Guard";
        int guardsHealth = 150;
        int guardsAttack = 10;
        int guardsDefense = 12;
        this.setHealth(guardsHealth);
        this.setAttack(guardsAttack);
        this.setDefense(guardsDefense);
        this.setName(guardsName);
        this.setLocation(location);
    }

    public Room getLocation() {
        return this.location;
    }

    public void setLocation(Room location) {
        this.location = location;
    }

}