"use strict";
class CardCollection {
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        this.cards.push(card);
    }
    drawCard() {
        if (this.cards.length === 0)
            return null;
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const drawnCard = this.cards.splice(randomIndex, 1)[0];
        return drawnCard;
    }
    countCards() {
        return this.cards.length;
    }
    findCard(chosenCard) {
        return this.cards.find(chosenCard) || null;
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}
let playingCards = new CardCollection();
playingCards.addCard("Harten Aas");
playingCards.addCard("Klaveren 10");
playingCards.addCard("Ruiten 7");
playingCards.addCard("Schoppen Vrouw");
playingCards.addCard("Harten Koning");
console.log(playingCards.countCards()); // Outputs: 2
console.log(playingCards.drawCard()); // Outputs: (willekeurig) "Harten Aas" of "Klaveren 10"
console.log(playingCards.countCards()); // Outputs: 1
console.log(playingCards.findCard((card) => card === "Klaveren 10")); // Outputs: "Klaveren 10"
console.log("Voor shuffle:", [...playingCards["cards"]]);
playingCards.shuffle();
console.log("Na shuffle:", [...playingCards["cards"]]);
