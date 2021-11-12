// Creating and assigning a list of prices
var prices = [0.70, 1.50, 0.50, 2.50, 0.50, 3.25, 0.75];

// Setting up values for traversal
var minPrice = prices[0];

// Traversing list to find minimum value
for (var i = 0; i < prices.length; i++) {
  if(prices[i] < minPrice){
    minPrice = prices[i];
  }
}

console.log("The minimum price is $" + minPrice);

// Setting up variables
var maxPrice = prices[0];

// Traverse the list to find the maximum value
for (var i = 0; i < prices.length; i++) {
  if (prices[i] > maxPrice) {
    maxPrice = prices[i];
  }
}

console.log("The maximum price is $" + maxPrice);




