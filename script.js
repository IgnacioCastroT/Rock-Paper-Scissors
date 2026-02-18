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


function getHumanChoice(choice) {
    let humanchoice = choice
    return humanchoice
}

function playRound(humanChoice, computerChoice) {

    if ((humanChoice == 'piedra' && computerChoice == 'tijera' ) ||
        (humanChoice == 'papel' && computerChoice == 'piedra') ||
        (humanChoice == 'tijera' && computerChoice == 'papel')) {

        humanScore += 1;
        updateScore();
        marcador("humano", humanChoice, computerChoice);

        if (humanScore === 5) {
            marcadorElemento.textContent = "HUMANO GANA EL JUEGO";
            botones.forEach((boton) => boton.disabled = true);
        }

    } else if (humanChoice == computerChoice) {

        marcador("empate", humanChoice, computerChoice);

    } else {

        computerScore += 1;
        updateScore();
        marcador("CPU", humanChoice, computerChoice);

        if (computerScore === 5) {
            marcadorElemento.textContent = "CPU GANA EL JUEGO";
            botones.forEach((boton) => boton.disabled = true);
        }
    }
}



function puntaje (humanScore, computerScore) {
    console.log(`Puntaje: Humano = ${humanScore} y Maquina = ${computerScore}`)
}



function playGame(option) {
    let computerChoice = getComputerChoice();
    let humanchoice = option
    playRound(humanchoice, computerChoice)
}


function updateScore() {
    humanP.textContent = humanScore;
    computerP.textContent = computerScore;
}

function marcador(ganador, humanChoice, computerChoice){
    if (ganador === "humano") {
        marcadorElemento.textContent = 
        `Humano juega ${humanChoice} | CPU juega ${computerChoice} → Humano GANA`;
    } 
    else if (ganador === "CPU") {
        marcadorElemento.textContent = 
        `Humano juega ${humanChoice} | CPU juega ${computerChoice} → CPU GANA`;
    } 
    else {
        marcadorElemento.textContent = 
        `Humano juega ${humanChoice} | CPU juega ${computerChoice} → EMPATE`;
    }
}



//DOM
const botones = document.querySelectorAll(".btn")
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        let option;

        if (boton.classList.contains("piedra")) {
            option = getHumanChoice("piedra")

        }else if(boton.classList.contains("papel")) {
            option = getHumanChoice("papel")

        }else {
            option = getHumanChoice("tijera")
        }
        playGame(option)
    })
    
})


const result = document.querySelectorAll(".score");
const pantalla = document.querySelector(".resultado")

const marcadorElemento = document.createElement("h3")
pantalla.appendChild(marcadorElemento)


let humanP;
let computerP;

result.forEach((player) => {
    const puntaje = document.createElement("p");
    puntaje.style.fontSize = "60px"
    puntaje.classList.add("resultado");

    if (player.classList.contains("humano")) {
        puntaje.textContent = humanScore;
        humanP = puntaje;   // guardamos referencia
    } else {
        puntaje.textContent = computerScore;
        computerP = puntaje; // guardamos referencia
    }

    player.appendChild(puntaje);
});


