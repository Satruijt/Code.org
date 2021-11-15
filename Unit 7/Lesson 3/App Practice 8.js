//Setting up lists and global variables
var namesList = getColumn("TheRoot: 100 Influential African Americans", "Name");
var imageURLList = getColumn("TheRoot: 100 Influential African Americans", "Picture");
var agesList = getColumn("TheRoot: 100 Influential African Americans", "Age");
var sectorList = getColumn("TheRoot: 100 Influential African Americans", "Sector");

var correctName = "";
var guess = "";
var score = 0;
var questionNumber = 1;

//Call to newQuestion() generates the first question
newQuestion();

//One onEvent for each answer button
// 
onEvent("choice1", "click", function( ) {
	guess = getText("choice1");
	checkCorrect(guess, correctName);
	newQuestion();
});
onEvent("choice2", "click", function( ) {
	guess = getText("choice2");
	checkCorrect(guess, correctName);
	newQuestion();
});
onEvent("choice3", "click", function( ) {
	guess = getText("choice3");
	checkCorrect(guess, correctName);
	newQuestion();
});
onEvent("choice4", "click", function( ) {
	guess = getText("choice4");
	checkCorrect(guess, correctName);
	newQuestion();
});

//Resets the global variables and brings user back to the main screen
onEvent("playAgainBtn", "click", function( ) {
	score = 0;
	questionNumber = 1;
	newQuestion();
	setScreen("screen1");
	
});

//Selects a random name from namesList as the correct answer
//Updates the screen with a photo and info
//
function newQuestion() {
  //Check to see if the user has answered 5 or fewer questions
  if(questionNumber<=5){
    var index = randomNumber(0, namesList.length-1);
    correctName = namesList[index];
    setImageURL("imageOutput", imageURLList[index]);
    setText("ageOutput", agesList[index]);
    setText("sectorOutput", sectorList[index]);
    
    
    //Use the index to populate a random answer choice with the correct name
    var randAnswerChoice = randomNumber(1,4);
    setText("choice"+randAnswerChoice, namesList[index]);
    
    //Populate the remaining 3 buttons with the next three names on the list (previous three if the name is one of the last 3 on the list)
    if (index<namesList.length-4) {
      for (var i = 0; i < 3; i++) {
        if(randAnswerChoice == 4){
          randAnswerChoice = 0;
        }
        randAnswerChoice = randAnswerChoice+1;
        index = index + 1;
        setText("choice"+randAnswerChoice, namesList[index]);
      }
    } else {
      for (var j = 0; j < 3; j++) {
        if(randAnswerChoice == 4){
          randAnswerChoice = 0;
        }
        randAnswerChoice = randAnswerChoice+1;
        index = index - 1;
        setText("choice"+randAnswerChoice, namesList[index]);
      }
    }
  } else {
    //If the user has answered more than 5 questions, change the screen and display how many questions are correct
    setScreen("screen2");
    setText("scoreLabel", "You answered " + score + " questions out of 5 correctly.");
  }
}

//Adds one to the variable score if the answer selected is correct
//userChoice {string} - the name the user selected
//correctAnswer {string} - the name of the described and in the picture
function checkCorrect(userChoice, correctAnswer) {
  //Add one to the value stored in score if answer is correct
  if (userChoice == correctAnswer) {
    score = score + 1;
  } 
  questionNumber = questionNumber + 1;
  
}



