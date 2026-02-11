let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //Piedra 0, Papel 1, Tijera 2  

    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "piedra"
    }else if (choice === 1) {
        return "papel"
    }else if (choice === 2) {
        return "tijera"
    }
}


function getHumanChoice() {
    let humanchoice = prompt("Elige entre Piedra, Papel o Tijeras.")
    return humanchoice
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if ((humanChoice == 'piedra' && computerChoice == 'tijeras' ) ||
        (humanChoice == 'papel' && computerChoice == 'piedra') ||
        (humanChoice == 'tijera' && computerChoice == 'papel')) {
        console.log(`Humano GANA con ${humanChoice} vs CPU: ${computerChoice}`)
        return humanScore += 1;

    }else if ((
        humanChoice == computerChoice)) {
        console.log(`Empate humano hizo ${humanChoice} y la CPU hizo ${computerChoice}`)

    }else {
        console.log(`CPU GANA con ${computerChoice} vs humano ${humanChoice}`)
        return computerScore +=1;
    }
}

function puntaje (humanScore, computerScore) {
    console.log(`Puntaje: Humano = ${humanScore} y Maquina = ${computerScore}`)
}


function playGame() {

    let nGames = 5;

    for (let i = 0; i < nGames; i++){
        let computerChoice = getComputerChoice();
        let humanchoice = getHumanChoice()
        playRound(humanchoice, computerChoice)
    }
    if (humanScore > computerScore) {
        console.log("Gana el Humano")
        console.log(puntaje(humanScore, computerScore))
    }else if (humanScore == computerScore) {
        console.log("Empate")
        console.log(puntaje(humanScore, computerScore))
    }else {
        console.log("Gana la Maquina")
        console.log(puntaje(humanScore, computerScore))
    }
}

playGame()