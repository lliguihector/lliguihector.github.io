function validateItems(){
  //Create variables to hold user input
  var beggin = document.forms["numberFun"]["strtNum"].value;
  var ending = document.forms["numberFun"]["endNum"].value;
  var skipper = document.forms["numberFun"]["step"].value;


if(beggin == "" || isNaN(beggin)){
alert("Please input a start number");
document.forms["numberFun"]["strtNum"].focus();
return false;
}

if(ending == "" || isNaN(ending)){
  alert("Please input a ending number");
  document.forms["numberFun"]["endNum"].focus();
  return false;
}

if(skipper == "" || isNaN(skipper)){
  alert("Please enter a skipping number");
  document.forms["numberFun"]["step"].focus();
  return false;
}


if(beggin == ending){
  alert("The Ending Number equal to the beggining number");
  document.forms["numberFun"]["endNum"].focus();

  return false;
}

if(Number(beggin) > Number(ending)){
  alert("The Ending Number is less then the starting number");
  document.forms["numberFun"]["endNum"].focus();
  return false;
}

if(Number(skipper) <=0){
alert("The step number is not positive");
  document.forms["numberFun"]["step"].focus();
console.log(typeof(skipper));
  return false;
}

document.getElementById("num1").innerText = beggin;
document.getElementById("num2").innerText = ending;
document.getElementById("num3").innerText = skipper;

//Return even numbers
var text = "";
var step = Number(skipper);
var startNum = Number(beggin);
var endNum = Number(ending);

for(var i = startNum; i<= endNum; i=i+step){

   console.log(i);
  if(i % 2 == 0){

    text += i+ ",";
     console.log(i);
  }
}

// for(var i = startNum ; i<= endNum; i ++){
//
// console.log(startNum);
// startNum += step;
//
// if(startNum%2 ==0 || )
// {
//   text += startNum + "<br>";
//
//   console.log(startNum);
// }
//
// if(startNum >= endNum)
// {
// break;
// }
//
// // display evens
// }

document.getElementById("display").innerHTML = text;
// console.log(typeof(Number(beggin)));
// console.log(typeof(ending));
// console.log(typeof(skipper));
  return false;
}
