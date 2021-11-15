greetAndCompliment("Benjamin");
greetAndCompliment("Raji");
greetAndCompliment("Esmerelda");

function greetAndCompliment(name){
  console.log(randomGreeting() + name);
  console.log(name + randomCompliment());
}

// Generates a random greetinga
// return {string} - random greeting, followed by a comma and space
function randomGreeting(){
  
  var greetings = ["Good day, ", "Bonne journée, ", "Buenos dias, ", "Magandang araw, ", "美好的一天, "];
  var randomGreet = greetings[randomNumber(0, greetings.length-1)];
  return randomGreet;
  
}

// Generates a random compliment
// return {string} - random compliment, followed by exclamation point
function randomCompliment(){
  var compliments = [", you have incredible hair!", ", you are astonishingly smart!", 
                     ", your fashion sense is unmatched!", ", your smile lights up the room!", 
                     ", you are uncommonly talented!", ", you are ridiculously funny!"];
  // Write code to complete this function
  return compliments[randomNumber(0, compliments.length-1)];
}