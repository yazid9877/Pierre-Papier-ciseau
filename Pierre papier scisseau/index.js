const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor( Math.random()* 3 ) ];
    let result = "";
    
    if(playerChoice === computerChoice)
    {
        result = "cest une egalite";
    }else{
        switch(playerChoice){
            case "rock":
              result =  (computerChoice === "scissors") ? "TU AS GAGNE" : "TU AS PERDU NOOBIE";
             break;
             case "paper":
              result =  (computerChoice === "rock") ? "TU AS GAGNE" : "TU AS PERDU NOOBIE";
             break;
             case "scissors":
              result =  (computerChoice === "paper") ? "TU AS GAGNE" : "TU AS PERDU NOOBIE";
             break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");


    switch(result){
        case  "TU AS GAGNE":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "TU AS PERDU NOOBIE":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

    }
}