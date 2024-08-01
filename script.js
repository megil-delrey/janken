const buttonsContainer = document.querySelector('#buttons');
const log1 = document.querySelector('#log1');
const log2 = document.querySelector('#log2');
const humanScoreLog = document.querySelector('#human-score');
const computerScoreLog = document.querySelector('#computer-score');

buttonsContainer.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id) {
        case 'rock':
            playRound(1, getComputerChoice());
            break;
        case 'paper':
            playRound(2, getComputerChoice());
            break;
        case 'scissors':
            playRound(3, getComputerChoice());
            break;
    }
});

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

function getReadableChoiceName(choice) {
    switch(choice) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
}

let humanScore = 0
let computerScore = 0

function isThereAWinner() {
    return humanScore >= 5 || computerScore >= 5
}

function playRound(humanChoice, computerChoice) {
    let result = humanChoice - computerChoice;
    log1.textContent = `You chose ${getReadableChoiceName(humanChoice)}.
        Computer chose ${getReadableChoiceName(computerChoice)}.`
    if (result === 0) {
        log2.textContent = 'Tied!';
    } else if (result === 1 || result === -2){
        log2.textContent = `You won! ${getReadableChoiceName(humanChoice)} beats 
            ${getReadableChoiceName(computerChoice)}`;
        humanScore++;
    } else {
        log2.textContent = `You lost! ${getReadableChoiceName(computerChoice)} beats 
            ${getReadableChoiceName(humanChoice)}`;
        computerScore++;
    }
    humanScoreLog.textContent = humanScore;
    computerScoreLog.textContent = computerScore;
    if (isThereAWinner()) {
        const winner = document.querySelector('#winner');
        winner.textContent = humanScore > computerScore ? 'You won!!!' : 'You lost!!!';
    }
}

humanScoreLog.textContent = humanScore;
computerScoreLog.textContent = computerScore;
