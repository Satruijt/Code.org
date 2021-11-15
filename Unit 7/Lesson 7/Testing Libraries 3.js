// Decides if a number is even
// number {number} - a number to decide is even or not
// return {boolean} - whether the number is even
function isEven(number){
    return (number%2) == 0;
  }
  
  console.log("10 is even? " + isEven(10));
  console.log("5 is even? " + isEven(5));
  console.log("-2 is even? " + isEven(-2));
  
  // Decides if a number is odd
  // number {number} - a number to decide is odd or not
  // return {boolean} - whether the number is odd
  function isOdd(number){
    return (number%2) == 1 || (number%2) == -1;
  }
  
  console.log("10 is odd? " + isOdd(10));
  console.log("5 is odd? " + isOdd(5));
  console.log("-5 is odd? " + isOdd(-5));
  
  // Decides if a number is between two other numbers
  // number {number} - a number to decide is in the range given
  // low {number} - the low end of the range to check
  // high {number} - the high end of the range to check
  // return {boolean} - whether the number is between the two numbers given
  function isBetween(number, low, high){
    return ((number >= low) && (number <= high));
  }
  
  console.log("10 is between 0 and 5? " + isBetween(10,0,5));
  console.log("10 is between 5 and 10? " + isBetween(10,5,10));
  console.log("10 is between 15 and 20? " + isBetween(10,15,20));