public class Swordsman extends Troop{

    public Swordsman(String name) {

        String swordsmanName = name;
        int swordsmanHealth = 100;
        int swordsmanAttack = 15;
        int swordsmanDefense = 10;
        this.setHealth(swordsmanHealth);
        this.setAttack(swordsmanAttack);
        this.setDefense(swordsmanDefense);
        this.setName(swordsmanName);
    }
}