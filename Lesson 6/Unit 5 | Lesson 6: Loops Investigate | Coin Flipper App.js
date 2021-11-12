// Create and assign variables
var heads = 0;
var tails = 0;
var totalFlips = 0;

onEvent("coin", "click", function() {
  heads = 0;
  tails = 0;
  totalFlips = getNumber("flipNum");

  for (var j = 0; j < totalFlips; j++) {
    var flip = randomNumber(0, 1);
    if(flip == 0){
      // Increase heads by 1
      heads++;
    } else {
      // Increase tails by 1
      tails++;
    }
  }

  playSound("sound://category_digital/coin_3.mp3", false);
  
  updateScreen();
});

function updateScreen(){
  setText("totalHeads", heads);
  setText("totalTails", tails);
}
