// create the variables
var mileTimes = [];
var avg = 0;
var fastest = 0;
var slowest = 0;
var totalMiles = 0;
var newTime = 0;

// when a new mile is added, the mile time is added to the mileTimes list
onEvent("newMileButton", "click", function( ) {
  newTime = getNumber("newMileInput");
  appendItem(mileTimes, newTime);
  totalMiles++;
  
  updateScreen();
});

// updates the display
function updateScreen(){
  average();
  fast();
  slow();
  numberedListDisplay();
  adder();
  
  setText("avgOutput", avg);
  setText("fastestOutput", fastest);
  setText("slowestOutput", slowest);
  setText("totalMilesOutput", totalMiles);
  setText("newMileInput", "");
  
}

function adder() {
  var zep = 0;
  for(var i=0; i<mileTimes.length; i++){
    zep = zep + mileTimes[i];
  }
    
  console.log(zep);
}

function average(){
  var total = 0;
  for(var i=0; i<mileTimes.length; i++){
    total = total + mileTimes[i];
  }
  avg = total / mileTimes.length;
}

function slow(){
  var temp = 0;
  for(var i=0; i<mileTimes.length; i++){
    if(mileTimes[i] > temp){
      temp = mileTimes[i];
    }
  }
  slowest = temp;
}

function fast(){
  var temp = mileTimes[0];
  for(var i=0; i<mileTimes.length; i++){
    if(mileTimes[i]< temp){
      temp = mileTimes[i];
    }
  }
  fastest = temp;
}

function numberedListDisplay(){
  var temp = "";
  for(var i=0; i<mileTimes.length; i++){
      temp = temp + "Mile " + (i+1) + ": " + mileTimes[i] + "\n";
  }
  setText("milesOutput", temp);
}
