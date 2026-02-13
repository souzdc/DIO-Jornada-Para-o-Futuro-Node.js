import Player from "./Player";

// hide funcction
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result: string;

    switch(true) {
        case random < 0.33:
            result = "RETA";
            break;
        
        case random < 0.66:
            result = "CURVA";
            break;

        default:
            result = "CONFRONTO";
    }

    return result;
}




export async function playRaceEngine(char1: Player, char2: Player, rounds: number = 5) {

    for(let round = 1; round <= rounds; round++) {

        let block = await getRandomBlock();
        console.log(`Rodada ${round} Bloco: ${block}`);


    }

}