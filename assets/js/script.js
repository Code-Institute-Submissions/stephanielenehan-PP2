var me; 
var myScore = 0; 
var computer;
var computerScore = 0;

var chooseFrom = ["rock", "paper", "scissors"]; 

window.onload = function() {
    for (let i = 0; i < 3; i++) {

        let choice = document.createElement("img"); 
        choice.id = choice[i]; 
        choices.src = choices[i] + ".jpeg"; 
        document.getElementById("choices").append(choice);
    }
}
