var me; 
var myScore = 0; 
var computer;
var computerScore = 0;

var choices = ["rock", "spock", "scissors"]; 

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        

        let choice = document.createElement("img"); 
        choice.id = choice[i]; 
        choice.src = choices[i] + "assets/images/choices/.png"; 
        choice.addEventListener("click", selectChoice); 
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("my-choice").src = me + "assets/images/choices/.png"; 

    computer = choices[Math.floor(Math.random() * 3 )];
    document.getElementById("computer-choice").src = computer + "assets/images/choices/.png";



}