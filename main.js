
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
var saveProgress = {

    
}

var possibleWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

function placeMove(move) {
//placement of the x's and o's in the saveProgress
//update saveProgress with 'move'
}


function drawBoard(saveProgress){
 console.log(`
   |   | 
---+---+---
   |   | 
---+---+---
   |   | 
`)
}



console.log("game start")

console.log("player 1 is X, player 2 is O")

while (true){
  drawBoard(saveProgress)
  const playerTurn = 1;
    const move = prompt(`player ${playerTurn} turn: `);
    console.log(`${move}`);
    placeMove(move)
}
