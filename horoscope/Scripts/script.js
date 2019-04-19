function data(){

var month = document.forms["set"]["day"].value;
var day = document.forms["set"]["month"].value;



document.getElementById("m").innerHTML = month;
document.getElementById("d").innerHTML = day;


return false;
}
