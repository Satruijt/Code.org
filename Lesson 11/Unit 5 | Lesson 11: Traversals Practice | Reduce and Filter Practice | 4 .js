// Create and assign list
var animals = ["alligator","bird","cow","dog","emu","flamingo","gorilla","hippo"];

console.log("Which animals have more than 5 letters in their names?");

// Filter animals to those with more than 5 letters
var animalsFiltered = [];
var animal;
for(var i = 0; i < animals.length; i++){
  animal = animals[i];
  if(animal.length > 5){
    appendItem(animalsFiltered,animal);
  }
}
console.log(animalsFiltered);

// Create and assign a list of students

var students = ["Angel","Ben","Clarissa","Darien","Elly","Francesco","Giselle","Henry"];
var studentsFiltered = [];

for (i = 0; i < students.length; i++) {
  if (students[i].length >= 6 ) {
    appendItem(studentsFiltered, students[i]);
  }
}

console.log("Which students have 6 or more letters in their names?");
console.log(studentsFiltered);
