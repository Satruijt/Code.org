randomGreeting("Benjamin");
randomCompliment("Benjamin");

randomGreeting("Raji");
randomCompliment("Raji");

randomGreeting("Esmerelda");
randomCompliment("Esmerelda");

function randomGreeting(name){
  var greetings = ["Good day, ", "Bonne journée, ", "Buenos dias, ", "Magandang araw, ", "美好的一天, "];
  console.log(greetings[randomNumber(0, greetings.length-1)] + name);
}

function randomCompliment(name){
  var compliments = [", you have incredible hair!", ", you are astonishingly smart!", ", your fashion sense is unmatched!", ", your smile lights up the room!", ", you are uncommonly talented!", ", you are ridiculously funny!"];
  
  // Add code so that the function console.logs the person's
  // name followed by random compliment from the list above.
  console.log(name + compliments[randomNumber(0, compliments.length-1)]);                   
}