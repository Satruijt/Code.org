onEvent("addButton", "click", function(){
    setText("outputLabel", calculate(" + "));
  });
  
  onEvent("minusButton", "click", function(){
    setText("outputLabel", calculate(" - "));
  });
  
  onEvent("multiplyButton", "click", function(){
    setText("outputLabel", calculate(" * "));
  });
  
  onEvent("divisionButton", "click", function(){
    setText("outputLabel", calculate(" / "));
  });
  
  // calculates the answer to the math problem 
  // displays whether the answer is even or odd
  // symbol {string} - the operator
  // return {string}
  function calculate(symbol){
    var number1 = getNumber("inputNumber1");
    var number2 = getNumber("inputNumber2");
    var answer;
    
    if(symbol == " + "){
      answer = number1 + number2;
    } else if (symbol == " - ") {
      answer = number1 - number2;
    } else if (symbol == " * ") {
      answer = number1 * number2;
    } else {
      answer = number1 / number2;
    }
    
    // the MOD operator "%" - divides two numbers and returns the remainder
    // in this case - if a number divide by two has a remainder of zero, it's an even number
    if(answer%2==0){
      setText("evenOddLabel", "The answer is an EVEN number.");
    } else {
      setText("evenOddLabel", "The answer is an ODD number");
    }
    
    // answer is now set to a string of the math problem written out
    answer = number1 + " " + symbol + " " + number2 + " = " + answer;
    
    setText("inputNumber1", "");
    setText("inputNumber2", "");
    return answer;
  }
  
  // duplicate the multiple button and add a ÷ to the text part and rename id to divisionButton
  