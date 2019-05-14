

$(document).ready(function() {

// variables 
 var wins = 0;
 var losses = 0;
 var userTotal = 0;

 
 // Random Number function 
 function randomNum(max, min) {
     var result = Math.floor(Math.random() * (max - min + 1)) + min; 
     return result;
 }

 var compRandom = randomNum(120, 19);
    assignNumbersToPeppers();
    
    $("#random-numbner").html(compRandom);
    $("#total-score").html(totalCrystal);

    

//end of function
}); 