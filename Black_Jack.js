// Blackjack project
const prompt = require('prompt-sync')();

// Full deck of cards
let cards = [
  "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH",
  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD",
  "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS"
];

function dealCard() {
  let randomIndex = Math.floor(Math.random() * cards.length);
  let dealtCard = cards[randomIndex];
  cards.splice(randomIndex, 1);
  return dealtCard;
}

let players = parseInt(prompt("How many players? "));

if (players < 1) {
  console.log("Please enter a valid number of players.");
  process.exit(1);
}

let dealerHand = [];
let playerHands = [];

for (let i = 0; i < 2; i++) {
  dealerHand.push(dealCard());
}

for (let i = 0; i < players; i++) {
  playerHands[i] = [];

  for (let j = 0; j < 2; j++) {
    playerHands[i].push(dealCard());
  }
}

console.log("Dealer hand:", dealerHand);

for (let i = 0; i < playerHands.length; i++) {
  console.log("Player " + (i + 1) + " hand:", playerHands[i]);
}

function win (playerHand, dealerHand) {
    let playerScore = calculateScore(playerHand);
    let dealerScore = calculateScore(dealerHand);







    