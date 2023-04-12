//Game confirmations to know he'd like to play/replay rock, paper, scissors
let startGame = confirm("Would you like to play some rock, paper, scissors?")
let playAgain

function replay(){
    playAgain = confirm('Would you like to play again?')
}


//Variables for user and bot
let userChoice
let botChoice

function userInput(){
    do{
        userChoice = parseInt(prompt('Would you like to play some rock, paper, scissors?'))
    } while (userChoice != 1 && userChoice != 2 && userChoice != 3)
}

function botInput(){
    botChoice = parseInt(Math.random() * 3 + 1)
}


//Bot textual choice
let botTextualChoice
function botWrittenChoice(){
    if(botChoice == 1){
        botTextualChoice = 'Rock'
    } else if (botChoice == 2){
        botTextualChoice = 'Paper'
    } else if (botChoice == 3){
        botTextualChoice = 'Scissors'
    }
}


//Variables to count victories for user and bot
let userVictories = 0
let botVictories = 0


//Winner variable
let winner = ''


//Set to zero, so user can play again
function setToZero(){
    userVictories = 0
    botVictories = 0
    winner = ''
}


//Compare choices
function compare (){
    if(userChoice == botChoice){
        alert('Draw, both picked ' + botTextualChoice)
    } else if (userChoice == (botChoice + 1)){
        alert('You win, bot picked ' + botTextualChoice)
        userVictories += 1
    } else if (userChoice == (botChoice - 1)){
        alert('You lose, bot picked ' + botTextualChoice)
        botVictories += 1
    } else {
        (userChoice == (botChoice + 2)) ? (botVictories += 1) && alert('You lose, bot picked ' + botTextualChoice) : (userVictories += 1) && alert('You win, bot picked ' + botTextualChoice)
    }
}


//Get the winner
function getTheWinner(){
    if(userVictories == 2){
        winner = 'User'
    } else if (botVictories == 2){
        winner = 'Bot'
    }
}


//Game
function game(){
    do{
        userInput()
        botInput()
        botWrittenChoice()
        compare()
        getTheWinner()
    } while (winner != 'User' && winner != 'Bot')
}


//Full game ready
if(startGame == true){
    game()
    switch(winner){
        case 'User':
            alert("Congrats! You're the winner")
            setToZero()
            break;
        case 'Bot':
            alert("Bot won this time :'( - Good luck next time!")
            setToZero()
            break;
    }
    do{
        replay()
        game()
        switch(winner){
            case 'User':
                alert("Congrats! You're the winner")
                setToZero()
                break;
            case 'Bot':
                alert("Bot won this time :'( - Good luck next time!")
                setToZero()
                break;
        }
    } while (playAgain == true)
} else {
    alert("Hope we get to play sometime soon! If you wanna give it a shot, reload this page!")
}