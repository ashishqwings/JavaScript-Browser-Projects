const squares = document.querySelectorAll(".game-square");
const gameHeading = document.querySelector("#game-heading");
const restartButton = document.querySelector("#restart-button");

let turn = 1;
let currentPlayer = 1;
let isGameOver = false;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],        //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],        //columns
    [0, 4, 8], [2, 4, 6]                    //diagonal
]

restartButton.onclick = restartGame;


function checkIfGameOver(){

    winConditions.forEach(condition => {
        let cellA = squares[condition[0]].innerText;
        let cellB = squares[condition[1]].innerText;
        let cellC = squares[condition[2]].innerText;

        if(cellA !== "" && cellA == cellB && cellB == cellC){
            squares.forEach(square => {square.disabled = true})
            isGameOver = true;
        }
    })
    
    if(!isGameOver && turn == 9){
        return 3;
        isGameOver = true;
    }
    
}

squares.forEach(square => {
    square.onclick = () => {
        square.disabled = true;
        square.innerText = turn % 2 == 1 ? 'X' : 'O';
        if(checkIfGameOver()){
            let winner = checkIfGameOver();
            gameHeading.innerText == winner < 3 ? `Player ${winner} wins!` : `Game Drawn`;
            restartButton.style.display = "block";
        }
        else{
            turn++;
            currentPlayer = turn % 2 == 1 ? 1 : 2;
            gameHeading.innerText = `Player ${currentPlayer}'s Turn`;
            console.log(turn);
        }
        
    }    
    
})

function restartGame(){
    gameHeading.innerText = "Player 1's turn";
    isGameOver = false;
    squares.forEach(square => {
        square.innerText = "";
        square.disabled = false;
        turn = 1;
        currentPlayer = 1;
    });
    restartButton.style.display = "none";
}