const prompt  = require("prompt-sync")({ sigint: true });


console.log(`
  |  | 
--+--+--
  |  | 
--+--+--
  |  |
`)

console.log("game start")

console.log("player 1 is X, player 2 is O")

while (true){
    const move = prompt("player 1 turn");
    console.log(`${move}`);
}
