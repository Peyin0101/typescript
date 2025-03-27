class CardCollection<T> {
  private cards: T[] = [];

  addCard(card: T): void {
    this.cards.push(card);
  }
  drawCard(): T | null {
    if (this.cards.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    const drawnCard = this.cards.splice(randomIndex, 1)[0];
    return drawnCard;
  }

  countCards(): number {
    return this.cards.length;
  }

  findCard(chosenCard: (card: T) => boolean): T | null {
    return this.cards.find(chosenCard) || null;
  }

  shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
let playingCards = new CardCollection<string>();
playingCards.addCard("Harten Aas");
playingCards.addCard("Klaveren 10");
playingCards.addCard("Ruiten 7");
playingCards.addCard("Schoppen Vrouw");
playingCards.addCard("Harten Koning");
console.log(playingCards.countCards()); // Outputs: 5
console.log(playingCards.drawCard()); // Outputs: (willekeurig)
console.log(playingCards.countCards()); // Outputs: 4
console.log(playingCards.findCard((card) => card === "Klaveren 10")); // Outputs: "Klaveren 10"
console.log("Voor shuffle:", [...playingCards["cards"]]);
playingCards.shuffle();
console.log("Na shuffle:", [...playingCards["cards"]]);
