document.getElementById("submit").addEventListener("click",function(event){
  event.preventDefault()
})

//get input from HTML
function readData(){
var dd = document.getElementById("dd").value;
var mm = document.getElementById("mm").value;
var yy = document.getElementById("yy").value;

if (document.getElementById("male").checked){
  var male = true;
}else{
  var female = true;
}
//calculation of day of the week
var males = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var birthday = new Date(mm + '/' + dd + '/' + yy);
var day1 = birthday.getDay();

//Validitation and allocation of names
  if (dd <= 0 || dd >= 31){
  document.getElementById("display").innerText = "Sorry your date is invalid, please enter a valid date!"
  } else if(mm <= 0 || mm >= 13){
  document.getElementById("display").innerText = "Sorry your month is invalid, please enter a valid month!"
  }else if (male === true){
  document.getElementById("display").innerText = "Your Akan name is " + males[day1] + "!"
  }else if (female === true){
    document.getElementById("display").innerText = "Your Akan name is " + females[day1] + "!"
  }else{
    document.getElementById("display").innerText = "Please select Gender "
  }
}
