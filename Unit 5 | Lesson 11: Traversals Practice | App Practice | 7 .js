// Create and assign variables and lists

var gradesList = [];
var average = 0;



onEvent("addGradeButton","click",function(){
  var newGrade = getNumber("gradeInput");
  appendItem(gradesList,newGrade);
  
  updateScreen();  
});

onEvent("averageGradeButton","click",function(){
  for (var i = 0; i < gradesList.length; i++) {
    average += gradesList[i];
    setProperty("averageGradeLabel", "text", "Your average grade:" + average/gradesList.length);
  }
  average = 0;
});

function updateScreen(){
  setProperty("gradeInput","text","");
  setProperty("gradesLabel","text",gradesList.join("\n"));
}
