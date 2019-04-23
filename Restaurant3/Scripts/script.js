
function validateEmail(email){
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}


function validateUserInput(){
var fname = document.forms["customerForm"]["fname"].value;
var lname = document.forms["customerForm"]["lname"].value;
var email = document.forms["customerForm"]["email"].value;
var phone = document.forms["customerForm"]["phone"].value;
var inquiry = document.forms["customerForm"]["inquiry"].value;



var yes = document.forms["customerForm"]["Radio1"].checked;
var no = document.forms["customerForm"]["Radio2"].checked;
var hold;
var m = document.forms["customerForm"]["m"].checked;
var t = document.forms["customerForm"]["t"].checked;
var w = document.forms["customerForm"]["w"].checked;
var th = document.forms["customerForm"]["th"].checked;
var f = document.forms["customerForm"]["f"].checked;


if(yes == false && no == false ){
alert("Have you been to The Ratatouille before");
return false;
}

if(m == false && t == false && w == false && th == false && f ==false){
  alert("Please select best days to contact you");
  return false;
}





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


if(inquiry == ""){
  alert("Please Select Reason for Inquiry");
  document.forms["customerForm"]["inquiry"].focus();
  return false;
}




alert("You Entered The following Info: " + "\nName: " + fname + " " + lname + "\n" + "Email: " + email + "\nPhone: " + phone + "\nInquiry Reason: " + inquiry);



// var oRadio = document.forms[0].elements["gridCheck1"];
//
// for(var i = 0; i< oRadio.length;i++){
//
//   if(oRadio[i].checked)
//   {
//
// console.log(oRadio[i].value);
// }
// }



















return false;
}
