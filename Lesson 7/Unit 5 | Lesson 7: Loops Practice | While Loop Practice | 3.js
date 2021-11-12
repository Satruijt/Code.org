// Create and assign variable
var counter = 0;
var coinFlips = [];

while(counter < 10){
  appendItem(coinFlips, randomNumber(0,1));  
  counter++;
}

console.log("Here's 10 random coin flips");
console.log(coinFlips);

// Create and assign variable
var counter2 = 0;
var diceRolls = [];

while(counter2 < 10){
  appendItem(diceRolls, randomNumber(1, 6));  
  counter2++;
}

console.log("Here's 10 random dice rolls");
console.log(diceRolls);
