const SYMBOLS = ["rock", "paper", "scissors"];
//Generate random symbol for computer's choice
function computerPlay(){
    let randIndex = Math.floor(Math.random() * 3);
    let symbol = SYMBOLS[randIndex];
    const computerPhoto = document.querySelector("img[name='cp']");
    computerPhoto.src = `/pictures/${symbol}.png`;
    return symbol;
}
//check who is the winner according to the choices
function checkWinner(player, computer){
    if (playerSelection === computerSelection) return "tie"; // tie

    if (playerSelection === "rock"){
        if (computerSelection === "paper") return "computer"; //computer wins
        if (computerSelection === "scissors") return "player"; //player wins
    }
    if (playerSelection === "paper"){
        if (computerSelection === "rock") return "player";
        if (computerSelection === "scissors") return "computer";
    }
    if (playerSelection === "scissors"){
        if (computerSelection === "rock") return "computer";
        if (computerSelection === "paper") return "player";
    }
    // default return value
    return -1;
}
//updates the paragraph that describes what are the selections
function changePSelections(pselect, cselect){
        const para = document.querySelector("p[id='selections']");
        para.textContent = `${pselect} vs ${cselect}`;
}
//updates the score and plays the equivilent sound
function changeScore(winner){
    const pwinner = document.querySelector("p[id='winner']");
    let audioSelect = undefined;
    if (winner === "player"){
        wins++;
        pwinner.textContent = "You Won!";
        audioSelect = document.querySelector("audio[data-key='win']");
    } 
    if (winner === "computer"){ 
        losses++;
        pwinner.textContent = "You Lost!";
        audioSelect = document.querySelector("audio[data-key='loss']");
    }
    if (winner === "tie"){
        pwinner.textContent = "It's a Tie!"
        audioSelect = document.querySelector("audio[data-key='tie']");
    }
    const pscore = document.querySelector("p[id='score-board']");
    pscore.textContent = `${wins} - ${losses}`;

    //playing music
    audioSelect.currentTime = 0;
    audioSelect.play();
}
//workflow of the whole game
function playRound(element){
    playerSelection = element.target.name;
    computerSelection = computerPlay();
    changePSelections(playerSelection, computerSelection);
    let winner = checkWinner(playerSelection, computerSelection);
    changeScore(winner);
}
//resets the game
function reset(){
    wins = 0, losses = 0;
    const pscore = document.querySelector("p[id='score-board']");
    const pselect = document.querySelector("p[id='selections']");
    const pwinner = document.querySelector("p[id='winner']");
    pscore.textContent = "0 - 0";
    pselect.textContent = "Choose Wisely";
    pwinner.textContent = "(click the picture)";
}

let wins = 0, losses = 0;
//adding eventlisteneres for the player choices
const photos = document.querySelectorAll(".photo");
photos.forEach((photo)=>{
    photo.addEventListener("click", playRound);
})

const btn = document.querySelector("button");
btn.addEventListener('click', reset);
