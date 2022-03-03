let buildDeck = function () {
  let deck = [];
  for (let rank = 2; rank < 15; rank++) {
    deck.push(createCard("Hearts", rank));
    deck.push(createCard("Spades", rank));
    deck.push(createCard("Diamonds", rank));
    deck.push(createCard("Clubs", rank));
  }
  return deck;
};
let createCard = function (suit, rank) {
  let name = getRankName(rank);
  let color = getSuitColor(suit);

  let card = {
    rank: rank,
    suit: suit,
    name: name,
    color: color,
  };
  return card;
};
let getSuitColor = function (suit) {
  if (suit === "Clubs" || suit === "Spades") {
    return "black";
  } else {
    return "red";
  }
};
let getRankName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank.toString();
  }
};

let dealCard = function (deck) {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};
let dealHand = function (deck) {
  return [
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
  ];
};

let deck = buildDeck();
let hand = dealHand(deck);
console.table(hand);
