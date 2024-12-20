
let turn = 1;
let winner = 0;
let gameHeading = document.querySelector("#game-heading");
let table = document.querySelector("table");
let restartButton = document.querySelector("#restart-button");


let buttonList = document.querySelectorAll(".game-square");

buttonList.forEach(button => {
    button.addEventListener('click', play);
})

restartButton.addEventListener('click', resetGame);

function resetGame(event){
    turn = 1;
    gameHeading.innerText = "Player 1\'s Turn";
    buttonList.forEach(button => {
        button.disabled = false;
        button.innerText = "";
    })
    event.target.style.display = 'none';
}

function play(event){
    console.log(turn)
    if(turn % 2){
        event.target.innerText = 'X';
        gameHeading.innerText = 'Player 2\'s Turn';
        event.target.disabled = true;
    }
    else{
        event.target.innerText = 'O';
        gameHeading.innerText = 'Player 1\'s Turn';
        event.target.disabled = true;
    }
    turn++;
    if(isGameOver() != -1){
        if(isGameOver() == 0){
            gameHeading.innerText = "Tie Game!"
        }
        else if(isGameOver() == 1){
            gameHeading.innerText = "Player 1 Won!"
        }
        else{
            gameHeading.innerText = "Player 2 Won!"
        }
        buttonList.forEach(button => {
            button.disabled = true;
        })
        restartButton.style.display = "block";
    }
}


function isGameOver(){
    
    //Game can be over in 8 different ways -> 3 rows, 3 columns and 2 diagonals

    
    //checking for rows

    for(let row = 0; row <= 2; row++){
        if(buttonList[row * 3].innerText == buttonList[row * 3 + 1].innerText && buttonList[row * 3 + 1].innerText == buttonList[row * 3 + 2].innerText){
            if(buttonList[row * 3].innerText == 'X'){
                winner = 1;
                return winner;
            }
            if(buttonList[row * 3].innerText == 'O'){
                winner = 2;
                return winner;
            }
            
        }
    }

    //checking for columns

    for(let col = 0; col <= 2; col++){
        if(buttonList[col].innerText == buttonList[col + 3].innerText && buttonList[col + 3].innerText == buttonList[col + 6].innerText){
            if(buttonList[col].innerText == 'X'){
                winner = 1;
                return winner;
            }
            if(buttonList[col].innerText == 'O'){
                winner = 2;
                return winner;
            }
            
        }
    }

    //diagonal 1
    if(buttonList[0].innerText == buttonList[4].innerText && buttonList[4].innerText == buttonList[8].innerText){
        if(buttonList[0].innerText == 'X'){
            winner = 1;
            return winner;
        }
        if(buttonList[0].innerText == 'O'){
            winner = 2;
            return winner;
        }
        
    }

    //diagonal 2
    if(buttonList[2].innerText == buttonList[4].innerText && buttonList[4].innerText == buttonList[6].innerText){
        if(buttonList[2].innerText == 'X'){
            winner = 1;
            return winner;
        }
        if(buttonList[2].innerText == 'O'){
            winner = 2;
            return winner;
        }
        
    }

    //check for drawn
    if(turn == 10){
        return 0;
    }

    return -1;
}