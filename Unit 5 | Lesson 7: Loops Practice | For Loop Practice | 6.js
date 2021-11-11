// Create and assign empty lists
var flips1 = [];
var flips2 = [];
var flips3 = [];

// For loop to fill the lists
for(var i = 0; i < 10; i++){
  appendItem(flips1, randomNumber(0,1));
  appendItem(flips2, randomNumber(0,1));
  appendItem(flips3, randomNumber(0,1));
}

// Display results
console.log("Flips 1");
console.log(flips1);
console.log("Flips 2");
console.log(flips2);
console.log("Flips 3");
console.log(flips3);
