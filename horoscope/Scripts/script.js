function data(){
//Array 
 var ids = ["aries","pisces","scorpio","taurus","gemini","cancer","leo","virgo","libra","capricorn","aquarius","sagittarius"]; 
  
//Variables
var day = document.forms["set"]["day"].value;
var month = document.forms["set"]["month"].value;
var symbol = document.getElementById("s");
var content = document.getElementById("display");
var compatability = document.getElementById("compa");
  
//Functions
  function displayNone(){
   for(var i = 0;i<ids.length; i++){
      document.getElementById(ids[i]).style.display = "none";
    }  
}
  
document.getElementById("m").innerHTML = month;
document.getElementById("d").innerHTML = day;
    
  
 if(month == "April"){
 displayNone();
  document.getElementById("aries").style.display ="block";
  symbol.innerHTML = "Aries";
   compatability.innerHTML = "<b>Most:</b> Gemini, Leo, Sagittarius, Aquarius <b>Least:</b>Cancer, capricorn";

}else if(month == "February"){
   displayNone();
         document.getElementById("pisces").style.display ="block";
         symbol.innerHTML = "pisces";
   compatability.innerHTML = "<b>Most:</b> Taurus, Cancer, Scorpio, Capricorn <b>Least:</b> Gemini, Sagittarius";
         }
  else if(month == "March"){
    displayNone();
    document.getElementById("aries").style.display = "block";
    symbol.innerHTML = "Aries";
        compatability.innerHTML = "<b>Most:</b> Gemini, Leo, Sagittarius, Aquarius <b>Least:</b>Cancer, capricorn";
  }
  else if(month == "May"){
          displayNone();
          document.getElementById("gemini").style.display = "block";
          symbol.innerHTML = "Gemini";
       compatability.innerHTML = "<b>Most:</b> Aries, Leo, Libra, Aquarius <b>Least:</b>Virgo, Pisces ";
          
          }
    else if(month == "June"){
          displayNone();
          document.getElementById("cancer").style.display = "block";
     symbol.innerHTML = "Cancer";
      
         compatability.innerHTML = "<b>Most:</b>Taurus, Virgo, Scorpio, Pisces <b>Least:</b>Libra ";
          }
    else if(month == "July"){
          displayNone();
          document.getElementById("leo").style.display = "block";
          symbol.innerHTML = "Leo";
          compatability.getElementById("compa").innerHTML = "<b>Most:</b>Aries, Gemini, Libra, Sagittarius<b>Least:</b>Taurus, Scorpio ";
          }
    else if(month == "August"){
         displayNone();
          document.getElementById("virgo").style.display = "block";
          symbol.innerHTML = "Virgo";
          compatability.innerHTML = "<b>Most:</b>Taurus, Cancer, Scorpio, Capricorn<b>Least:</b>Gemini, Sagittarius";
      
      
          }
    else if(month == "September"){
          displayNone();
          document.getElementById("libra").style.display = "block";
          symbol.innerHTML = "Libra";
            compatability.innerHTML = "<b>Most:</b>Gemini, Leo, Sagittarius, Aquarius<b>Least:</b>TVergo, Cancer, Capricorn";
          }
    else if(month == "October"){  
      displayNone();
          document.getElementById("scorpio").style.display = "block";
          symbol.innerHTML = "Scorpio";
           compatability.innerHTML = "<b>Most:</b>Cancer, Virgo, Capricorn, Pisces<b>Least:</b>Leo, Aquarius ";
          }
    else if(month == "November"){
      displayNone();
          document.getElementById("sagittarius").style.display = "block";
          symbol.innerHTML = "Sagittarius";
          compatability.innerHTML = "<b>Most:</b>Aries,Leo, Libra, Aquuarius<b>Least:</b>Virgo, Pisces ";
          }
    else if(month == "December"){
      displayNone();
          document.getElementById("capricorn").style.display = "block";
          symbol.innerHTML = "Capricorn";
          compatability.innerHTML = "<b>Most:</b>Torus, Virgo, Scorpio, Pisces<b>Least:</b>Aries, Libra ";    }
    else if(month == "January"){
      displayNone();
          document.getElementById("aquarius").style.display = "block";
          symbol.innerHTML = "Aquarius";
          compatability.innerHTML = "<b>Most:</b> Aries, Gemini, Libra and Sagittarius.<b>Least:</b>Taurus and Scorpio. ";
          }
  
return false;
}
