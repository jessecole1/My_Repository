public class Troop extends Army {
    private String name = "";
    private int health = 100;
    private int attack = 0;
    private int defense = 0;

    public void basicAttack(Troop target) {
        int charactersAttack = this.getAttack();
        int blow = charactersAttack - target.getDefense();
        int newHealth = target.getHealth() - blow;
        target.setHealth(newHealth);
        System.out.println("You attacked " + target.getName() + " for " + blow + " attack!");
        System.out.println(" - " + target.getName() + "'s new health: " + target.getHealth());
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

}