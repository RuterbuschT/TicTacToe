
let gameState = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "X";
let gameActive = true;
const statusDisplay = document.querySelector(".game-status")

const winningMessage = () => `${currentPlayer} is the winner!`
const drawMessage = () => "It is a draw!"
const currentPlayerTurn = () => `It is ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();
 
const winningConditions = [
   [0,1,2],
   [0,3,6],
   [2,4,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [3,4,5],
   [6,7,8]
]



const handleCellClick = e => {
    const clickedCell = e.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"))
    //console.log(clickedCellIndex)

    if(clickedCell.innerHTML !== "" || !gameActive){
        return;
    }

    handleCellClicked(clickedCell, clickedCellIndex);
    handleResultValidation();
}

const handleCellClicked = (clickedCell, clickedCellIndex) => {
    
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    //console.log(gameState)
}

const handleResultValidation = () => {
    let roundWon = false;

    winningConditions.forEach(condition => {
        let a = gameState[condition[0]];
        let b = gameState[condition[1]];
        let c = gameState[condition[2]];

        if(a === "" || b === "" || c === ""){
            return
        }

        if(a === b && c === b){
            roundWon = true;
    
        }
    });

    console.log(gameState)

    if(roundWon){
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if(roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

const handlePlayerChange = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}


const restartGame = () => {
    gameState = ["", "", "", "", "", "", "", "", "",];
    gameActive = true;
    currentPlayer = "X";
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
   
}


document.addEventListener("click", handleCellClick);
document.querySelector(".game-restart").addEventListener("click", restartGame)










// const handleCellClick = (e) =>{
//     let clickedCell = e.target
//     // console.log(clickedCell)
//     let clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"))
//     // console.log(clickedCellIndex)

//     if(clickedCell.innerHTML !== "" || !gameActive){
//         return;
//     }

//     handleCellClicked(clickedCell, clickedCellIndex);
//     handleResultValidation();
// }

// const handleCellClicked = (clickedCell, clickedCellIndex) => {
//     gameState[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
// }

// handleResultValidation = () => {
//     let roundWon = false;
   

//   winningConditions.forEach((condition) => {  
//         let a = gameState[condition[0]];
//         let b = gameState[condition[1]];
//         let c = gameState[condition[2]];
//         console.log(a)

        
//         if(a === "" || b === "" || c === ""){
            
//             return;
//         }

//              if(a === b && b === c){
//             roundWon = true;
           
//         }
    
//     });
//     //can i make a forEach loop?
//     // for(let i = 0; i <= 7; i++){
//     //     const winningCondition = winningConditions[i]
//     //     let a = gameState[winningCondition[0]]; //add gameState
//     //     let b = gameState[winningCondition[1]];
//     //     let c = gameState[winningCondition[2]];

//     //     console.log(a)

//     //     if(a === "" || b === "" || c === ""){
            
//     //         continue;
//     //     }

//     //     if(a === b && b === c){
//     //         roundWon = true;
//     //         break;
//     //     }
//     // }
    
//     if(roundWon){
//         statusDisplay.innerHTML = winningMessage();
//         gameActive = false;
//         return;
//     }

//     let roundDraw = !gameState.includes("")
//     if(roundDraw){
//         statusDisplay = drawMessage();
//         gameActive = false;
//         return;
//     }
    
//     handlePlayerChange();
// }

// const handlePlayerChange = () =>{
//     currentPlayer = currentPlayer === "X" ? "O" : "X"
//     statusDisplay.innerHTML = currentPlayerTurn();
// }



// // console.log(gameState)

// document.addEventListener("click", handleCellClick);
// document.querySelector(".game-restart").addEventListener("click", function(){
//     gameState = ["", "", "", "", "", "", "", "", "",];
//     gameActive = true;
//     currentPlayer = "X"
//     statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
// });