var reminder = [];
var Counter = 0;

function lifeeasier(math) {
  if (reminder.length != 0) {
    Counter = math;
    setProperty("countOutput", "text", Counter);
    setProperty("reminderOutput", "text", reminder[Counter]);
  }
}

onEvent("leftButton", "click", function( ) {
  lifeeasier(Math.max(Counter - 1, 0));
});

onEvent("rightButton", "click", function( ) {
  lifeeasier(Math.min(Counter + 1, reminder.length-1));
});

onEvent("addButton", "click", function( ) {
  var textgrabber = getProperty("reminderInput", "text");
  appendItem(reminder, textgrabber);
  setProperty("reminderOutput", "text", reminder[Counter]);
});

