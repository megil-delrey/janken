function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

function getHumanChoice() {
    return parseInt(prompt('Type the number of your choice: \n1. Rock \n2. Paper \n3. Scissors'))
}

function getChoiceName(choice) {
    switch(choice) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
}

function playGame() {
    let computerScore = 0
    let humanScore = 0
    
    function playRound(humanChoice, computerChoice) {
        let result = humanChoice - computerChoice 
        if (result === 0) {
            console.log('Tied!')
        } else if (result === 1 || result === -2){
            console.log(`You won! ${getChoiceName(humanChoice)} beats ${getChoiceName(computerChoice)}`)
            humanScore++
        } else {
            console.log(`You lost! ${getChoiceName(computerChoice)} beats ${getChoiceName(humanChoice)}`)
            computerScore++
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        alert('You won!')
    } else if (humanScore < computerScore) {
        alert('You lost!')
    } else {
        alert('Tied!')
    }
}

playGame()