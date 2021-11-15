onEvent("totalButton", "click", function(){
    setText("outputLabel", totalCost());
  });
  
  onEvent("taxButton", "click", function(){
    setText("outputLabel", totalWithTax(totalCost()));
  });
  
  
  function totalCost(){
    var total = 0;
    
    for(var i=0; i<5; i++){
      if(getChecked("check" + i)){
        total = total + getNumber("cost" +i);
      }
    }
    return total;
  }
  
  function totalWithTax(amount){
    var total = amount + amount * 0.07;
    return total;
  }