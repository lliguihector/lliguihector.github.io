// var total=0;
// var firstNumber = 2;
// var secondNumber = 3;
//
//
// total=firstNumber + secondNumber;
// console.log(total);


// console.log("This text will be on line 1.\nThis text will be on line 2.");


// if (true){
// //any code placed here will be executed
// }
//
// if(false){
// //any code placed here will be skipped over.
// }

// var direction = prompt("Should we STOP, SLOW, or GO?");
// if(direction == "STOP"){
//   console.log("STOP!");
// }else{
//   console.log("GO!");
//   alert("GO!");
// }


//If/else and conditional statements

// var direction = prompt("Should we STOP, SLOW, or GO?");
// if(direction == "STOP"){
//   console.log("STOP!");
//   alert("STOP!");
// }else if(direction == "SLOW"){
//   console.log("SLOW DOWN!");
//   alert("SLOW DOWN!");
// }else{
//   console.log("GO!");
//   alert("GO!");
// }


//Switch


// switch (direction){
//   case "STOP":
//
//   console.log("STOP!");
//   alert("STOP!");
// break;
//
// case "SLOW":
// console.log("SLOW DOWN!");
// alert("SLOW DOWN!");
// break;
// default:
// console.log("GO!");
// alert("GO!");
// }



//The For Loop

// for(var loopCounter=0; loopCounter <=4; loopCounter++){
//   console.log(loopCounter);
// }


//The While Loop

// var loopCounter = 0;
//
// while(loopCounter <=4){
// console.log(loopCounter)
// loopCounter++
// }

//The Do While Loop

// do{
//   userInput = prompt("Give me a number between 1 and 10.");
//
//   if(userInput <= 0 || userInput > 10){
//   alert("The number must be between 1 and 10");
//   }
// }while(userInput > 10 || userInput <=0);
//
// console.log(userInput);

//Logging Ltters

function myFunction(){
var sentence = "I love learning software development";


for(var i=0; i<sentence.length; i++){

if(sentence[i] !==" "){

  // console.log(sentence[i]);
  document.getElementById("demo").innerHTML = sentence[i-2];
}
}
}

// var n = 24;
// var result = 0;
//
// if(n%2 == 0){
//   result+=10;
// console.log(result);
//
// }
// else if(n%2 !== 0){
//
// result-=10;
//   console.log(result);
// }


var n = 25;
var sum = 0;

for(var i = 0;i<n;i++){

sum+= i;
console.log("i" + sum);

}
