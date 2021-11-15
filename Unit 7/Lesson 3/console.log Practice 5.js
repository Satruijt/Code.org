var stateNames = getColumn("US States", "State Name");
var dogNames = getColumn("Dogs", "Name");

longestShortest("states", stateNames);
longestShortest("dogs", dogNames);

function longestShortest(typeOfList, list){
  var message = "There are many " + typeOfList;
  message = message + " but the one with the shortest name is " + shortestWord(list);
  message = message + " and the one with the longest name is " + longestWord(list);
  console.log(message);
}

// Finds the shortest word in a list
// list {list} - a list of strings to search through
// return {string} - the string in the list with the fewest characters
function shortestWord(list){
  
  var shortest = list[0];
  for(var i = 0; i < list.length; i++){
    if (list[i].length < shortest.length){
      shortest = list[i];
    }
  }
  
  return shortest;
}

// Finds the longest word in a list
// list {list} - a list of strings to search through
// return {string} - the string in the list with the most characters
function longestWord(list){
  var LONGEST = list[0];
  for(var i = 0; i < list.length; i++){
    if (list[i].length > LONGEST.length){
      LONGEST = list[i];
    }
  }
  
  return LONGEST;
}