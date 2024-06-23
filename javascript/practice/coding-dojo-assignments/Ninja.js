class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    };

    sayName() {
        console.log("My name is " + this.name);
    };

    showStats() {
        console.log("Speed is " + this.speed + ", Strength is " + this.strength);
    };

    drinkSake() {
        console.log("Drinks some sake..");
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Wisdom stat is at " + this.wisdom);
        console.log("What one programmer can do in a month, two programmers can do in two months.");
    }
}

const one = new Ninja();
const two = new Sensei("Jesse");
two.sayName();
two.showStats();
two.speakWisdom();