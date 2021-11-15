var wordList = getColumn("Words", "Word");
var filteredWordList = [];

filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());

onEvent("lengthDropdown", "input", function(){
  filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());
});

onEvent("letterDropdown", "change", function(){
  filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());
});


function filter(len, letter){
  showElement("waitingImage");
  filteredWordList = [];
  setText("output", "");
  
  for(var i=0; i<wordList.length; i++){
    if(wordList[i].length == len && wordList[i].substring(0,1)==letter){
        appendItem(filteredWordList, wordList[i]);
    } 
  }
  
  if(filteredWordList.length == 0){
    appendItem(filteredWordList, "No Options Available");
  }
  
  hideElement("waitingImage");
  setText("output", filteredWordList.join(", "));
}

// remove dropdown and replace it with an text input and change the id to what the dropdown was and remove the unclickable
