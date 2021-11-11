var City = getColumn("Daily Weather", "City");
var HT = getColumn("Daily Weather", "High Temperature");
var LT = getColumn("Daily Weather", "Low Temperature");
var Icon = getColumn("Daily Weather", "Icon");
var CD = getColumn("Daily Weather", "Condition Description");

onEvent("forecastButton", "click", function( ) {
  var z = randomNumber(0, City.length-1);
  setProperty("cityOutput", "text", City[z]);
  setProperty("highTempOutput", "text", HT[z]);
  setProperty("lowTempOutput", "text", LT[z]);
  setProperty("iconOutput", "image", Icon[z]);
  setProperty("conditionOutput", "text", CD[z]);
});
