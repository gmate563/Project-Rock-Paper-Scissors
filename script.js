function getComputerChoice(){
    const x = Math.random();
    if (x < 1/3){
        return "rock";
    }
    else if (x < 2/3){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?").trim().toLowerCase();
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == "rock"){
            if (computerChoice == "rock"){
                return "Draw.";
            }
            else if (computerChoice == "paper"){
                computerScore += 1;
                return "Computer wins. Paper beats rock.";
            }
            else {
                humanScore += 1;
                return "You win. Rock beats scissors.";
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "paper"){
                return "Draw.";
            }
            else if (computerChoice == "scissors"){
                computerScore += 1;
                return "Computer wins. Scissors beats paper.";
            }
            else {
                humanScore += 1;
                return "You win. Paper beats rock.";
            }
        }
        else {
            if (computerChoice == "scissors"){
                return "Draw.";
            }
            else if (computerChoice == "rock"){
                computerScore += 1;
                return "Computer wins. Rock beats scissors.";
            }
            else {
                humanScore += 1;
                return "You win. Scissors beats paper.";
            }
        }
    }

    for (let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(),getComputerChoice()));
        console.log("Your score: " + humanScore);
        console.log("Computers score: " + computerScore);
    }

    if (humanScore > computerScore){
        console.log("You won.")
    }
    else if (humanScore < computerScore){
        console.log("Computer won.")
    }
    else {
        console.log("Draw.")
    }
}

playGame();
