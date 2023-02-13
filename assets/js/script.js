var me; 
var myScore = 0; 
var computer;
var computerScore = 0;

var chooseFrom = ["rock"; "paper"; "scissors"]; 

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="assets/images/rockicon.jpeg">

        let choice = document.createElement("img"); 
        choice.id = choice[i]; 
        choice.src = choices[i] + ".jpeg"; 
        choice.addEventListener("click", selectChoice); 
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("my-choice").src = you + ".jpeg"; 

    computer = choices[Math.floor(Math.random() * 3 )];
    document.getElementById("computer-choice").src = computer + ".jpeg";



}