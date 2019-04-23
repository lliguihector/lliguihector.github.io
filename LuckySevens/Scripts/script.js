//Global Variable
var currentMoney = 0;
var initialBet = 0;
var numOfTotalRolls = 0;

var maxMoneyWon = 0;
var maxDiceRoll = 0;




function rollDice(){

var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;
var sum = dice1 + dice2;
numOfTotalRolls ++;
//Logic
if(currentMoney > maxMoneyWon){
  maxMoneyWon = currentMoney;
  maxDiceRoll = numOfTotalRolls;
}

if(sum == 7){
  currentMoney += 4;
}else{
  currentMoney -= 1;
}
console.log("currentMoney: " + currentMoney);
console.log("current Roll" + numOfTotalRolls);
  // document.getElementById("money").innerHTML = "Money: $" + currentMoney;
  // document.getElementById("dice1").innerHTML = "Dice1: " + dice1;
  // document.getElementById("dice2").innerHTML = "Dice2: " + dice2;
  // document.getElementById("sum").innerHTML = sum;
  // document.getElementById("roll").innerHTML = "roll" + numOfTotalRolls;
}


function validateItems(){
var bet = parseInt(document.getElementById("bet").value);

currentMoney = bet;
maxMoneyWon = bet;
initialBet = bet;

if(bet == "" || isNaN(bet)){
alert("Please enter a number");
document.getElementById("bet").focus();
return false;
}

if(Number(bet) <=0 ){
  alert("Possitve bets Only please");
  document.getElementById("bet").focus();
  return false;
}

//while ccurrent money does not equal 0
//keep calling the rollfunction
while(currentMoney !==0 ){
rollDice();
}

if(currentMoney == 0){
document.getElementById("results").style.display = "block";
// document.getElementById("initiate").style.display = "block";
document.getElementById("demo").innerHTML = "$" + initialBet;
document.getElementById("demo2").innerHTML = numOfTotalRolls;
document.getElementById("demo3").innerHTML = "$" + maxMoneyWon;
document.getElementById("demo4").innerHTML = maxDiceRoll;
}



}
