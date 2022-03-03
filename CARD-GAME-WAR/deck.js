const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

get numberOfCards() {
    return this.cards.length
}

pop() {
    return this.card.shift()
}

push(card) {
    this.card.push(card)
}

  shuffle() {
    for (let i = this.cards.length - 1; 1 > 0; 1--) {
        const newIndex = Math.floor(Math.random () * (i + 1))
        const oldValue = this.card[newIndex]
        this.cards[newIndex] = this.card[i]
        this.cards[i] = oldValue
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
      return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red'
  }

  getHTML() {
      const cardDiv = document.createElement("div")
      cardDiv.InnerText = this.suit
      cardDiv.classList.add("card", this.color)
      cardDiv.dataset.value = `${this.value} ${this.suit}`
      return cardDiv;
  }
}

function freshDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
}
