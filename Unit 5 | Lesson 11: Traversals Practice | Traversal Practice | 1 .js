// Creating and assigning lists

var fruits = ["apples", "bananas", "peaches", "pears", "oranges"];
var prices = [0.99, 0.69, 1.29, 1.09, 0.89];

// Traversing both lists to print the price of each fruit
var fruit;
var price;

for(var i = 0; i < fruits.length; i++){
  fruit = fruits[i];
  price = prices[i];
  console.log(fruit + " cost " + price);
}

// Creating and assigning lists

var students = ["Angelo","Emilia","Abel","Darien","Elly"];
var grades    = [11, 10, 12, 10, 9];

for (i = 0 ; i < students.length; i ++) {
  console.log(students[i] + " is in grade " + grades[i]);
}

