// List of icons to randomly choose between
var iconsList = ["icon://fa-heart", 
                 "icon://fa-music", 
                 "icon://fa-smile-o", 
                 "icon://fa-globe", 
                 "icon://fa-tree", 
                 "icon://fa-bolt", 
                 "icon://fa-moon-o",
                 "icon://fa-star"];

function colorthing() {
  for (var i = 0; i <= 19; i++) {
    var r = randomNumber(0 , 255);
    var b = randomNumber(0 , 255);
    var g = randomNumber(0 , 255); 
    setProperty("icon" + i, "icon-color", rgb(r, b, g, 0.5));
    setProperty("homeScreen", "background-color", rgb(b, r, g));
  }
}

function locatorthing() {
  for (var i = 0; i <= 19; i++) {
    setProperty("icon" + i, "x", randomNumber(-100, 200));
    setProperty("icon" + i, "y", randomNumber(-100, 300));
    setProperty("icon" + i, "width", randomNumber(0, 420));
    setProperty("icon" + i, "height", randomNumber(0, 400));
  }
}

function ShApEr() {
  var cc = randomNumber(0, iconsList.length-1);
  for (var i = 0; i <= 19; i++) {
    setProperty("icon" + i, "image", iconsList[cc]);
  }
}

colorthing();
locatorthing();
ShApEr();

onEvent("colorsButton", "click", function( ) {
  playSound("sound://category_bell/choose_background.mp3", false);
  colorthing();
});

onEvent("locationsButton", "click", function( ) {
  playSound("sound://category_bell/choose_background.mp3", false);
  locatorthing();
});

onEvent("shapesButton", "click", function( ) {
  playSound("sound://category_bell/choose_background.mp3", false);
  ShApEr();
});
