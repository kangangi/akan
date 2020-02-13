//create arrays for the akan names
var males = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var dd = document.getElementById("dd").value;
var mm = document.getElementById("mm").value;
var cc = document.getElementById("cc").value;
var yy = document.getElementById("yy").value;
var male = document.getElementById("male").value;
var female = document.getElementById("female").value;

var dayOfTheWeek = function(cc,yy,mm,dd){
  var day  =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd %) mod 7;
  return day;
}

var akanName = function(day,male){
  if (male === true){
    alert("Your Akan name is " + males[day] + "!");
  }else {
    alert("Your Akan name is " + females[day] + "!");
}
