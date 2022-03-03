import Deck from "/deck.js";

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 10,
    "10": 2,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}

const computerCardSlot = document.querySelector(`.computer-card-slot`);
const playerCardSlot = document.querySelector(`.player-card-slot`);
const computerDeckElement = document.querySelector(`.computer-deck`)
const playerDeckElement = document.querySelector(`.player-deck`)
const text = document.querySelector(`.text`)


let playerDeck, computerDeck, inRound

document.addEventListener(`click`, () => {
    if (stop) {
        startGameOver()
        return
    }

    if (inRound) {
        cleanBeforeRound()
    } else {
       flipCards()
    }
})

startGame()
function (startGame) {
    const deck = new Deck();
    deck.shuffle();
    
    const deckMidpoint = Math.cell(deck.numberOfCarda / 2)
    playerDeck = deck.cards.slice(0, deckMidpoint)
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false

    cleanBeforeRound()
}

function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ``
    playerCardSlot.innerHTML = ``
    text.InnerText = ``

    updateDeckCount()
}

function flipCards() {
    inRound = true

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
    
    updateDeckCount()

    if (isRoundWinner(playCard, computerCard)) {
        text.innerText = "Win"
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    } else if (isRoundWinner(computerCard, computerCard)) {
        text.innerText = "Lose"
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else {
        text.innerText = "Draw"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }

    if (isGameOver(playerDeck)) {
        text.innerText = "You Lose!!!"
        stop = true
    } else if { (isGameOver(computerDeck)) }
    
        text.innerText = "You Win!!!"
        stop = true

    }
}

function updateDeckCount() {
    computerDeckElement.innerHTML = computerDeck.numberOfCards
    playerDeckElement.innerHTML = playerDeck.numberOfCards
}

function isRoundWinner(cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

function isGameOver(deck) {
    return deck.numberOfCards === 0
}