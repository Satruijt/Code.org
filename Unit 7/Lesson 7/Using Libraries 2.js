onEvent("nextButton", "click", function( ) {
    var cat = Cats.randomBreed();
    setProperty("catImage", "image", Cats.breedImage(cat));
    setProperty("breedName", "text", cat);
  });
  