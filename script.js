function getComputerChoice() {
    const x = Math.random();
    if (x < 1 / 3) {
        return "rock";
    }
    else if (x < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".results");

function playRound(humanChoice, computerChoice) {
    if (humanScore < 5 && computerScore < 5) {
        let roundResult = "";

        if (humanChoice === computerChoice) {
            roundResult = "Draw.";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            roundResult = `You win. ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        } else {
            computerScore++;
            roundResult = `Computer wins. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        }

        results.textContent = `${roundResult} Your score: ${humanScore} | Computer score: ${computerScore}`;

        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                results.textContent += " You won the game!";
            } else {
                results.textContent += " Computer won the game!";
            }
            // Reset scores to allow a new game
            humanScore = 0;
            computerScore = 0;
        }

        return roundResult;
    }
}

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})
