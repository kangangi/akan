//create arrays for the akan names
var males = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//function to display the day of the week
function dayOfWeek (cc, yy, mm, dd, male, female){
  //create variables for calculating
  var cc = parseInt();
  var yy = parseInt();
  var mm = parseInt();
  var dd = parseInt();
  var male = parseInt();
  var female = parseInt();
  //calculating the day of the week
  var day = (((cc/4) - 2*cc-1)+ ((5*yy/4))+((26*(mm + 1)/10))+dd)%7;

  if (male == true){
      alert("Your Akan name is " + males[day] + "!");
    } else {
      alert("Your Akan name is " + females[day] + "!");
    }
