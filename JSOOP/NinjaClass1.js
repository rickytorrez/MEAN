function Ninja(name, health){
    var self = this;
    this.name = name;
    this.health = 100;
    // private
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name)
        return this;
    }
    this.showStats = function(){
        console.log("Name: " + this.name)
        console.log("Health: " + this.health)
        console.log("Speed: " + speed)
        console.log("Strength: " + strength)
        return this;
    }
    this.drinkShake = function(){
        this.health += 10;
        console.log("I had a protein shake, my health is at " + this.health + "!!")
        return this;
    }

    this.increaseSpeed = function(){
        speed += 10;
        console.log("Increased my speed to " + speed + "!")
        return this;
    }
}

var Wil = new Ninja("Wil", 200)
var Kap = new Ninja("Kap")
Wil.sayName()
Wil.drinkShake()
Kap.sayName()
Kap.showStats()
// Kap.increaseSpeed()

// console.log(Wil);