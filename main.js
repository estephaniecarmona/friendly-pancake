
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



var possibleWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [3, 6, 9], [1, 5, 9], [3, 5, 7], [2, 5, 8]]
//placement of the x's and o's in the saveProgress
//update saveProgress with 'move'
// returns nothing

function winner(){   
   for (var i = 0; i < possibleWins.length; i++){ //loops through 1st array
      for (var j = 0; j < possibleWins[i].length; j++){ //loops through 2nd array
         if (saveProgress[possibleWins[i][0]] === 'X') { //looks through 2nd array 1st element to see if it equal 'X'
            if (saveProgress[possibleWins[i][1]] === 'X') { //looks through 2nd element to see if equals 'X'
               if (saveProgress[possibleWins[i][2]] === 'X') { //looks through 3rd element to see if it equal 'X"
                  return true;
               }
            }
         }
         if (saveProgress[possibleWins[i][0]] === 'O') {
            if (saveProgress[possibleWins[i][1]] === 'O') {
               if (saveProgress[possibleWins[i][2]] === 'O') {
                  return true;
               } 
            }
         }
      }
   
   }
}


function checkDraw() {
   const isXorO = (value) => value === 'X' || value === 'O'
   const valuesInSaveProgress = Object.values(saveProgress)
   console.log(valuesInSaveProgress.every(isXorO))
   return valuesInSaveProgress.every(isXorO)
}
      
      

   


// give back true or false (boolean)
function noRepeats(saveProgress, move) {
   return saveProgress[move] === ' ';
}
   


function saveMove(move, saveProgress) { //rotates turns
   saveProgress[move] = playerTurn[1];

console.log(saveProgress)
}



function drawBoard(saveProgress){ // tic tac toe grid
 console.log(`
       ${saveProgress['7']} |  ${saveProgress['8']}  |  ${saveProgress['9']}
   ---------------
      ${saveProgress['4']}  |  ${saveProgress['5']}  |  ${saveProgress['6']}
   ---------------
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

var playerTurn = playerOne; //playerOne goes first
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
   1: ' ',
   2: ' ',
   3: ' ',
   4: ' ',
   5: ' ',
   6: ' ',
   7: ' ',
   8: ' ',
   9: ' '
}

while (true){
   
   drawBoard(saveProgress) 
   const move = prompt(`player ${playerTurn[0]} turn: `); //move has a number that is a string 
   console.log(`move ${move}`); //player move
   if (!noRepeats(saveProgress, move)){
      console.log(`player ${playerTurn[0]} lost turn`)
   } else {
      saveMove(move, saveProgress); // save move
   }
   
   if (winner()) {
      return console.log (`player ${playerTurn[0]} won`)
   }
   if (checkDraw()) {
      return console.log(`draw`)
   }
   playerTurn = changeTurn(playerTurn);  //next player turn

}

