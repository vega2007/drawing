let buildDeck = function () {
  let deck = [];
  for (let rank = 2; rank < 15; rank++) {
    deck.push(createCard("Sun", rank));
    deck.push(createCard("Moon", rank));
    deck.push(createCard("Stars", rank));
    deck.push(createCard("Cloud", rank));
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
  if (
    suit === "Sun" ||
    suit === "Moon" ||
    suit === "Stars" ||
    suit === "Cloud "
  ) {
    return "yellow";
  } else {
    return "grey";
  }
};

let getRankName = function (rank) {
  switch (rank) {
    case 11:
      return "Sun";
    case 12:
      return "Moon";
    case 13:
      return "Stars";
    case 14:
      return "Clouds";
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
console.table(hand);
console.table(hand);
console.table(hand);
console.table(hand);
console.table(hand);
