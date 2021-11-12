onEvent("randomizeButton", "click", function( ) {
  for (var i = 0; i < 4; i++) {
    setProperty("label"+i, "text-color", rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)));
    setProperty("label"+i, "font-size", randomNumber(2, 50));
  }
});
