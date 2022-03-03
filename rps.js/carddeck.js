let buildDeck = function () {
    let deck = [];
    for (let rank = 2; rank < 15;rank++) {
        deck.push( createCard("Hearts", rank) );
        deck.push( createCard("Spades", rank) );
        deck.push( createCard("Diamonds", rank) );
        deck.push( createCard("Clubs", rank) );
    }
    return deck;
};
let createCard = function (suit, rank) {
  let name = getRankName(suit, rank)
  let color= getSuitColor(suit);

    let card = {
        rank: 2,
        suit: suit,
        name: "2",
        color: "red"
    };
    return card;
};
let getSuitColor = function () {};
let getRankName = function () {};
let dealCard = function () {};
let dealHand = function () {};

let deck = buildDeck();
console.table(deck);

