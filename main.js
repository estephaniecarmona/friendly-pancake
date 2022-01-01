
const prompt  = require("prompt-sync")({ sigint: true });
var tictactoeKeys = {
    1: "bottom left",
    2: "bottom middle",
    3: "bottom right",
    4: "middle left",
    5: "middle middle",
    6: "middle right",
    7: "top left",
    8: "top middle",
    9: "top right"
};



var possibleWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

function saveMove(move, saveProgress) {
   saveProgress[move] = playerTurn[1];

//placement of the x's and o's in the saveProgress
//update saveProgress with 'move'
console.log(saveProgress)
}


function drawBoard(saveProgress){
 console.log(`
 ${saveProgress['7']} |  ${saveProgress['8']}  |  ${saveProgress['9']}
   ---------------------------------
${saveProgress['4']}  |  ${saveProgress['5']}  |  ${saveProgress['6']}
   ---------------------------------
${saveProgress['1']}  | ${saveProgress['2']}   | ${saveProgress['3']}
`)
}

var playerOne = [
   '1',
   'X'
];

var playerTwo = [
   '2',
   'O'
];

var playerTurn = playerOne;
console.log(playerTurn)

function changeTurn(playerTurn) {//change turn
   if (playerTurn[0] === '1') {
      return playerTwo;
   }
   return playerOne;
}



console.log("game start")

console.log("player 1 is X, player 2 is O")

var saveProgress = {
    
}

while (true){

  drawBoard(saveProgress) 
    const move = prompt(`player ${playerTurn[0]} turn: `); //move 1
    playerTurn = changeTurn(playerTurn);
    console.log(`move ${move}`);
    saveMove(move, saveProgress);
}




