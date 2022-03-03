let cl = console.log;

let getRPS = function () {
  let rps = ["rock", "paper", "scissors"];
  return rps[Math.floor(Math.random() * rps.length)];
};

let getUserInput = function () {
  let userInput = process.argv[2];
  return userInput || getRPS();
};

let getWinner = function (userInput, computerInput) {
  if (userInput === computerInput) {
    return "tie";
  } else if (
    (userInput === "rock" && computerInput === "scissors") ||
    (userInput === "scissors" && computerInput === "paper") ||
    (userInput === "paper" && computerInput === "rock")
  ) {
    return "user";
  } else {
    return "computer";
  }
};

let congratulate = function (result) {
  if (result === "tie") {
    cl("Nobody's a winner");
  } else if (result === "win") {
    cl("You are a winner!");
  } else {
    cl("Sorry not this time!");
  }
};

for (let index = 0; index < 100; index++) {
  


let userInput = getUserInput();
let computerInput = getRPS();
cl("You picked", userInput);
cl("Computer picked", computerInput);
let result = getWinner(userInput, computerInput);
congratulate(result);

}