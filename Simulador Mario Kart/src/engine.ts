import Player from "./Player";

// hide funcction
async function rollDice() {
    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;

    return [roll1, roll2];
}

async function getRandomBlock() {
    let random = Math.random();
    let result: string;

    switch(true) {
        case random < 0.33:
            result = "💨 RETA";
            break;
        
        case random < 0.66:
            result = "🌪️  CURVA";
            break;

        default:
            result = "💢 CONFRONTO";
    }

    return result;
}



async function logRollResult (char: Player, block: string, diceResult: number, att: string ) {

    console.log(`${char.name} rolou um dado de ${block} - ${diceResult} att: ${att}`);
            
}


export async function playRaceEngine(char1: Player, char2: Player, rounds: number = 5) {

    for(let round = 1; round <= rounds; round++) {

        let block = await getRandomBlock();
        console.log(`🏁 Rodada ${round} - Bloco: ${block}`);

        let [diceResult1, diceResult2] = await rollDice();

        let totalTestSkill1: number = 0;
        let totalTestSkill2: number = 0;

        if (block === "💨 RETA") {
            totalTestSkill1 = diceResult1 + char1.velocidade;
            totalTestSkill2 = diceResult2 + char2.velocidade;

            logRollResult(char1, block, diceResult1, "velocidade")
            logRollResult(char2, block, diceResult2, "velocidade")
        }


        else if (block === "🌪️  CURVA") {
            totalTestSkill1 = diceResult1 + char1.manobrabilidade;
            totalTestSkill2 = diceResult2 + char2.manobrabilidade;
        }


        else if (block === "💢 CONFRONTO") {
            totalTestSkill1 = diceResult1 + char1.poder;
            totalTestSkill2 = diceResult2 + char2.poder;
        }

    }

}