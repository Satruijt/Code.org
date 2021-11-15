// set up the variables
var state = "";

// gets the state name from the user
// sets up the screen by calling library functions and passing through the state name as an argument
onEvent("clickButton", "click", function(){
  state = getText("stateInput");
  setText("stateOutput", state + " - " + StateLibrary.stateAbbreviation(state));
  setImageURL("skylineImage", StateLibrary.stateSkyline(state));
  setImageURL("sealImage", StateLibrary.stateSeal(state));
  setImageURL("flagImage", StateLibrary.stateFlag(state));
  
  setText("stateInput", "");
});
