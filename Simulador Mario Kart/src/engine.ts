import Player from "./Player";

// hide funcction
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

export async function playRaceEngine(char1: Player, char2: Player, rounds: number = 5) {

    for(let rounds = 1; rounds <= 5; rounds++) {
        console.log(`Rodada ${rounds}`);
    }

}