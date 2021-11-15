// when the Pigify button is clicked, call the updateScreen() function
onEvent("pigifyButton", "click", function(){
    updateScreen();
  });
  
  // resets the screen and calls the pigify() function passing through user input
  function updateScreen(){
    var text = getText("textInput");
    var statement = pigify(text);
    setText("textOutput", statement);
  }
  
  // uses a set of rules to convert the user input into pig latin
  // makes calls to the Strings library to manage the user input so it can be converted
  function pigify(str){
    var list = StringsLibrary.splitStringBySpace(str);
    var newList = [];
    
    for(var i=0; i<list.length; i++){
      var first = StringsLibrary.firstLetter(list[i]);
      var rest = StringsLibrary.allButFirst(list[i]);
      var temp = "";
      
      if(list[i].length < 4){
        temp = list[i];
      } else if (StringsLibrary.hasVowel(first) == true){
        temp = list[i] + "ay";
      } else {
        temp = rest + first + "ay";
      }
      appendItem(newList, temp);
    }
    
    var newString = newList.join(" ");
    console.log(newString);
    return newString;
  }