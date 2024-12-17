let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max){
    //this will generate a random value and scale it up so that it is 1 less than max
    let selection =  Math.floor(Math.random() * max);
    if(selection === 0){
        let computer_choice = 'rock';
        console.log(`computer chooses ${computer_choice}`)
        return computer_choice;
    }
    else if(selection === 1){
        let computer_choice = 'paper';
        console.log(`computer chooses ${computer_choice}`)
        return computer_choice
    }
    else{
        let computer_choice = 'scissors';
        console.log(`computer chooses ${computer_choice}`)
        return computer_choice;
    }
}

function getHumanChoice(){
    let choice = prompt('Enter either rock, paper, or scissors');
    if(choice.toLowerCase() === 'rock'){
        console.log(`player chooses ${choice}`)
        return choice;
    }
    else if(choice.toLowerCase() === 'paper'){
        console.log(`player chooses ${choice}`)
        return choice;
    }
    else if(choice.toLowerCase() === 'scissors'){
        console.log(`player chooses ${choice}`)
        return choice;
    }
    else{
        console.log('invalid choice');
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        humanScore += 1;
        computerScore += 1;
        console.log('tie!')
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore += 1;
        console.log('player wins');
    }
    else{
        computerScore += 1;
        console.log('computer wins!');
    }
}

function playGame(roundnum){
    playerScore = 0;
    computerScore = 0;
    for(let  i = 0; i < roundnum; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(3);
        playRound(humanChoice, computerChoice);
    }
    console.log(`player score is ${humanScore}`);
    console.log(`computer score is ${computerScore}`);
}

playGame(3);