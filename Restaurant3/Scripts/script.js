
function validateEmail(email){
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}


function validateUserInput(){
var fname = document.forms["customerForm"]["fname"].value;
var lname = document.forms["customerForm"]["lname"].value;
var email = document.forms["customerForm"]["email"].value;
var phone = document.forms["customerForm"]["phone"].value;



if(fname == ""){
alert("Please Enter your First Name");
document.forms["customerForm"]["fname"].focus();
return false;
}

if(lname == ""){
  alert("Please Enter your last Name");
  document.forms["customerForm"]["lname"].focus();
  return false;
}

if(email == ""){
  alert("Please Enter an Email Adress");
  document.forms["customerForm"]["email"].focus();
  return false;
}

if(validateEmail(email) == false){
  alert("Invalid E-mail address format");
  document.forms["customerForm"]["email"].focus();
  return false;
}

if(phone == "" || isNaN(phone)){
  alert("Please Enter a phone Number");
  document.forms["customerForm"]["phone"].focus();
  return false;
}











document.getElementById("demo").innerHTML = "You Entered: "+ fname + " " + " " + lname + " " + " "  + " " + email + " "+ phone;



return false;
}
