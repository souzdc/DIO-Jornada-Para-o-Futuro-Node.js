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


export async function playRaceEngine(char1: Player, char2: Player, rounds: number = 5) {

    for(let round = 1; round <= rounds; round++) {

        let block = await getRandomBlock();
        console.log(`🏁 Rodada ${round} - Bloco: ${block}`);

        const [diceResult1, diceResult2] = await rollDice();

        let totalTestSkill1: number = 0;
        let totalTestSkill2: number = 0;

        if (block === "💨 RETA") {
            totalTestSkill1 = diceResult1 + char1.velocidade;
            totalTestSkill2 = diceResult2 + char2.velocidade;

            char1.logRollResult(diceResult1, "velocidade");
            char2.logRollResult(diceResult2, "velocidade");

            totalTestSkill1 > totalTestSkill2 ? char1.receivedPoint() : char2.receivedPoint();

        }


        else if (block === "🌪️  CURVA") {
            totalTestSkill1 = diceResult1 + char1.manobrabilidade;
            totalTestSkill2 = diceResult2 + char2.manobrabilidade;

            char1.logRollResult(diceResult1, "manobrabilidade");
            char2.logRollResult(diceResult2, "manobrabilidade");

            totalTestSkill1 > totalTestSkill2 ? char1.receivedPoint() : char2.receivedPoint();
          
        }


        else if (block === "💢 CONFRONTO") {
            totalTestSkill1 = diceResult1 + char1.poder;
            totalTestSkill2 = diceResult2 + char2.poder;

            console.log(`${char1.name} confrontou com ${char2.name}`);

            char1.logRollResult(diceResult1, "poder");
            char2.logRollResult(diceResult2, "poder");

            if (totalTestSkill1 === totalTestSkill2 ) {
                console.log(`Confronto empatado! Nenhuma ponto foi perdido`)
                continue;
            }

            totalTestSkill1 > totalTestSkill2 ? char2.lossesPoint() : char1.lossesPoint();
        }

    }


    char1.points > char2.points ? char1.winner() : char2.winner();
    
    char1.showPoints();
    char2.showPoints();

} 