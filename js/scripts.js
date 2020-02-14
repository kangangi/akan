function readData(){
var dd = document.getElementById("dd").value;
var mm = document.getElementById("mm").value;
var yy = document.getElementById("yy").value;

if (document.getElementById("male").checked){
  var male = true;
}
if (document.getElementByid("female").checked){
  var female = true;
}
return dd;
return mm;
return yy;
}

var birthday = new Date(mm + '/' + dd + '/' + yy);
var day1 = birthday.getDay();
alert(day1);
