// Displays information about three different people in the console. 
nameAndAge("Lenora", 15, "March");
nameAndAge("Tan", 3, "July");
nameAndAge("Laquan", 9, "October");

// Displays information about a person in the console.
// name {string} - the person's name
// age {number} - the person's age in years
// birthMonth {string} - a month of the year, e.g. "January"
function nameAndAge(name, age, birthMonth){
  console.log(name + " is " + age + " years old and is " + ageToDescription(age));
  console.log(name + " was born in " + birthMonth + " which is in the " + monthToSeason(birthMonth));
}

// Translates an age in years into a text description
// years {number} - the age in years
// return {string} - a text description of the age as "an infant", "a preschooler", "a grade schooler", "a teenager", "an adult"
function ageToDescription(years){
  var description = "";
  if (years <= 1) {
    description = "an infant";
  } else if (years <= 3){
    description = "a toddler";
  } else if (years <= 5){
    description = "a preschooler";
  } else if (years <= 12){
    description = "a grade schooler";
  } else if (years <= 19){
    description = "a teenager";
  } else {
    description = "an adult";
  }
  return description;
}

// Converts a month to the season of the year
// month {string} - a month of the year, "January", "February", ...., "December"
// return {string} - a season of the year, "Spring", "Summer", "Fall", "Winter"
function monthToSeason(month){
  var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  if (month == months[3] || month == months[4] || month == months[5]) {
    return "Spring";
  }else if (month == months[6] || month == months[7] || month == months[8]) {
    return "Summer";
  }else if (month == months[9] || month == months[10] || month == months[11]) {
    return "Fall";
  }else if (month == months[0] || month == months[1] || month == months[2]) {
    return "Winter";
  }
}
