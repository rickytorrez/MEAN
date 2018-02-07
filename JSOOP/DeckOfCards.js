class Deck {
    constructor(){
        this.deck = [];
    }
    reset(){
        this.deck = [];
        let suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        let pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for(let suit in suits){
            for(let pip in pips){
                this.deck.push(pips[pip] + " of " + suits[suit]);
            }
        }
        return this;
    }
    shuffle(){
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }
    deal(){
        return this.deck.pop();
    }
}
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(deck){
        this.hand.push(deck.deal());
        return this;
    }
    discard(){
        this.hand.pop();
        return this;
    }
}
let deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);
let player2 = new Player("Ronnel");
player2.draw(deck2).draw(deck2);
console.log(player2);