import { playRaceEngine } from "./engine";
import Player from "./Player"

const player1 = new Player("Mario", 4, 3, 3);
const player2 = new Player("Luigi", 3, 4, 4); 


(async function main(char1: Player, char2: Player) {

    console.log(`Corrida entre ${player1.name} e ${player2.name} está começando...\n`)

    playRaceEngine(player1, player2, 3);

})(player1, player2);





