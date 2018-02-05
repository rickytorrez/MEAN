class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My ninja name is ${this.name}`)
    }

    showStats(){
        console.log(`These are my stats:`)
        console.log(`Health =   ${this.health}`)
        console.log(`Speed  =   ${this.speed}`)
        console.log(`Strength = ${this.strength}`)
    }

    drinkShake(){
        console.log(`My health increased to ${this.health += 10}`)
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10
    }

    speakWisdom(){
        super.drinkShake();
        console.log("Knowledge is power")
    }
}


let John = new Ninja('John');
John.sayName();
John.showStats();
John.drinkShake();
John.showStats();

console.log('*******************************************');

let Shifu = new Sensei('Shifu');
Shifu.speakWisdom();
Shifu.showStats();