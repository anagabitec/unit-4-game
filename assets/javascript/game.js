$(document).ready(function() {
// variables 
var gameNum = gameNumber();
var wins = 0;
var losses = 0;
var totalScore = 0;
var crystal1 =0;
var crystal2 =0;
var crystal3 =0;
var crystal4 =0;

    
$("#random-number").html(gameNum);
$("#wins").html(wins);
$("#losses").html(losses);
$("#total-score").html("<h3>Total score:  " + totalScore + "</h3>");




function AssignCrystalNumber() {
    return Math.floor(Math.random ()* 12 ) +1 ;
}


function gameNumber() {
    var random = Math.floor(Math.random() * 101) + 19;
    return random;
}
startNewRound ()
//click on crystal and get numbers 
$(".crystal").on("click", function(){

    if (this.id === "crystal1") {
        totalScore += crystal1;
    }
    else if (this.id === "crystal2") {
        totalScore += crystal2;
    }
    
    else if (this.id === "crystal3") {
        totalScore += crystal3;
    }
    else if (this.id === "crystal4") {
        totalScore += crystal4;
    }

    $("#total-score").html("<h3>Total score:  " + totalScore + "</h3>");
    
    if (totalScore === gameNum) {
        wins +=1;
        $("#wins").html(wins);
        alert("You win!");
        startNewRound();
    }

    else if (totalScore >= gameNum) {
        losses += 1;
        $("#losses").html(losses);
        alert("you lost!");
        startNewRound();
    }

})

//  START A NEW ROUND
 function startNewRound() {
    totalScore = 0;
    gameNum = gameNumber();
     $("#random-number").html("<h2>Match this Number</h2>" +gameNum);
    $("#total-score").html("<h3>Total score:" + totalScore + "</h3>");
    crystal1 = AssignCrystalNumber();
    crystal2 = AssignCrystalNumber();
    crystal3 = AssignCrystalNumber();
    crystal4 = AssignCrystalNumber();
}


});




