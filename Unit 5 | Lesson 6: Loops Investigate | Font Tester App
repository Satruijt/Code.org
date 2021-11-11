var phrases = ["The quick brown fox jumps over the lazy dog", 
               "To be or not to be, that is the question", 
               "Lorem ipsum dolor sit amet",
               "Try to be a rainbow in someone's cloud",
               "Now is the winter of our discontent",
               "Made glorious summer by this sun of York;",
               "And all the clouds that lour'd upon our house",
               "In the deep bosom of the ocean buried.",
               "Now are our brows bound with victorious wreaths;",
               "Our bruised arms hung up for monuments;",
               "Our stern alarums changed to merry meetings,",
               "Our dreadful marches to delightful measures.",
               "Grim-visaged war hath smooth'd his wrinkled front;",
               "And now, instead of mounting barded steeds",
               "To fright the souls of fearful adversaries,",
               "He capers nimbly in a lady's chamber",
               "To the lascivious pleasing of a lute.",
               "But I, that am not shaped for sportive tricks,",
               "Nor made to court an amorous looking-glass;",
               "I, that am rudely stamp'd, and want love's majesty",
               "To strut before a wanton ambling nymph;",
               "I, that am curtail'd of this fair proportion"];
               
onEvent("textInput", "input", function( ) {
  for (var cats_are_bad = 0; cats_are_bad < 5; cats_are_bad++) {
    setProperty("text"+cats_are_bad, "text", getText("textInput"));
  }
});
onEvent("fontSizeSlider", "change", function( ) {
  for (var doggest = 0; doggest < 5; doggest++) {
    setProperty("text"+doggest, "font-size", getNumber("fontSizeSlider"));
  }
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_3_app_click.mp3");
});
onEvent("colorDropdown", "input", function( ) {
  for (var agua = 0; agua < 5; agua++) {
    setProperty("text"+agua, "text-color", getText("colorDropdown"));
  }
});
onEvent("randomPhraseButton", "click", function( ) {
  var randomPhrase = phrases[randomNumber(0,phrases.length-1)];
  for (var zebra = 0; zebra < 5; zebra++) {
    setProperty("text"+zebra, "text", randomPhrase);
  }
  setProperty("textInput","text", randomPhrase);
  playSound("Gibby-(iCarly)-falls-from-the-ceiling.mp3", false);
});
