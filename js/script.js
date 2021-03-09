const symbols = ["rock", "paper", "scissors"];
            function computerPlay(){
                let randIndex = Math.floor(Math.random() * 3);
                return symbols[randIndex];
            }
            function playRound(playerSelection, computerSelection){
                playerSelection = playerSelection.toLowerCase();

                if (playerSelection === computerSelection) return 2; // tie

                if (playerSelection === "rock"){
                    if (computerSelection === "paper") return 0; //computer wins
                    if (computerSelection === "scissors") return 1; //player wins
                }
                if (playerSelection === "paper"){
                    if (computerSelection === "rock") return 1;
                    if (computerSelection === "scissors") return 0;
                }
                if (playerSelection === "scissors"){
                    if (computerSelection === "rock") return 0;
                    if (computerSelection === "paper") return 1;
                }

                // default return value if player didn't entered a valid input
                return -1;
            }
            function game(){
                let playerWins = 0;
                const numberOfGames = 5;
                for(let i = 1; i <= numberOfGames; i++){
                    let playerChoice = prompt("Enter your choise: Rock, Paper or Scissors!");
                    let computerChoice = computerPlay();
                    console.log(`Player selected: ${playerChoice} and the computer selected: ${computerChoice}.`)

                    let result = playRound(playerChoice, computerChoice);
                    switch(result){
                        case 0: console.log("You lost!");break;
                        case 1: console.log("You won!"); playerWins++; break;
                        case 2: console.log("It's a tie!"); i--; break;
                    }
                }

                console.log(`You have ${playerWins} and the computer has ${numberOfGames - playerWins}.`);
                console.log(`${playerWins > 3?"You Won The MATCH!!!":"You Lost The MATCH!!!"}`);
            }

            console.log(playRound("rock", "paper"));