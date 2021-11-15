var currentState;

function newState(){
  var state =  getColumn("US States", "State Name");
  var state_f =  getColumn("US States", "State Flag");
  var number = randomNumber(0, state.length);
  currentState = state[number];
  setProperty("flagImage", "image", state_f[number]);
}

newState();

onEvent("newStateButton", "click", function( ) {
  newState();
});

onEvent("guessButton","click",function( ){
  var guessState = getProperty("stateNameInput","text");
  if(guessState == currentState){
    setProperty("appText","text","Correct!");
  } else {
    setProperty("appText","text","Nope, that's not it!");
  }
});

