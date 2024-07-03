console.log("code is running");

let computerChoice;
let playerChoice;
let choice;
let result;


function pChoice(choice) {
    console.log("PChoice is being ran");
    
    playerChoice = choice;

    cChoice();
    
    document.getElementById("demo").innerHTML = "Your choice is: " + playerChoice ;
    results();
}

function cChoice() {
    const cOptions = ["rock","paper","scissors"];
    computerChoice = cOptions[Math.floor(Math.random() * cOptions.length)];
    
    document.getElementById("comChoice").innerHTML = "Computer choice is: " + computerChoice;

}

function results() {
    if (computerChoice == playerChoice) {
        result = "draw";
    }
    if((computerChoice == "paper") && playerChoice == "scissors") {
        result = "You win";
    }
    if((computerChoice =="rock") && (playerChoice == "scissors")) {
        result = "You Lose";
    }
    if((computerChoice == "paper") && (playerChoice == "rock")) {
        result = "You lose";
    }
    if((computerChoice == "rock") && (playerChoice == "paper")) {
        result = "You win";
    }
    if((computerChoice == "scissors") && (playerChoice == "rock")) {
        result = "You win";
    }
    if((computerChoice == "scissors") && (playerChoice == "paper")) {
        result = "You lose";
}
    document.getElementById("results").innerHTML = "results: " + result;
}
const button1 = document.getElementById("rock");
button1.addEventListener('click', function() {
    pChoice("rock");
});
const button2 = document.getElementById("paper");
button2.addEventListener('click', function() {
    pChoice("paper");
});
const button3 = document.getElementById("scissors");
button3.addEventListener('click',function() {
    pChoice("scissors");
});


