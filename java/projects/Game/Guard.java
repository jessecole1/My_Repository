public class Guard extends Troop {

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
}