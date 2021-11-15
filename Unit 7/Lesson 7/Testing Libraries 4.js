// Returns a list of all lowercase letters
// return {list} - list of lowercase letters
function allLower(){
    return ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  }
  
  // Returns a list of all lowercase letters
  // return {list} - list of lowercase letters
  function allUpper(){
    return ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }
  
  // Returns a list of all lowercase letters
  // return {list} - list of lowercase letters
  function vowelsLower(){
    return ["a","e","i","o","u"];
  }
  
  // Returns a list of all lowercase letters
  // return {list} - list of lowercase letters
  function vowelsUpper(){
    return ["A","E","I","O","U"];
  }
  
  // Returns a list of all lowercase letters
  // return {list} - list of lowercase letters
  function consonantsLower(){
    return ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  }
  
  // Returns a list of all lowercase letters
  // return {list} - list of lowercase letters
  function consonantsUpper(){
    return ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];  
  }
  
  // Returns a list of letters
  // letterType {string} - "All", "Consonants", or "Vowels"
  // upper {boolean} - whether the letters should be upper case. If false, returns lowercase
  // return {list} - a list of letters
  function getLetters(letterType,upper){
    if(letterType == "All"){
      if(upper){
        return allUpper();
      } else {
        return allLower();
      }
    } else if (letterType == "Consonants") {
      if(upper){
        return consonantsLower();
      } else {
        return consonantsUpper();
      }
    } else if (letterType == "Vowels") {
      if(upper){
        return vowelsLower();
      } else {
        return vowelsUpper();
      }
    }
  }
  
  console.log("All Uppercase");
  console.log(getLetters("All",true));
  
  console.log("All Lowercase");
  console.log(getLetters("All",false));
  
  console.log("Consonants Uppercase");
  console.log(getLetters("Consonants",true));
  
  console.log("Consonants Lowercase");
  console.log(getLetters("Consonants",false));
  
  console.log("Vowels Uppercase");
  console.log(getLetters("Vowels",true));
  
  console.log("Vowels Lowercase");
  console.log(getLetters("Vowels",false));