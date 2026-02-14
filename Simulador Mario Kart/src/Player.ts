
type Attributes = "velocidade" | "manobrabilidade" | "poder";


export default class Player {
    
    constructor(
        readonly name: string,
        readonly velocidade: number,
        readonly manobrabilidade: number,
        readonly poder: number,
        private pontos = 0
    ){}

    get points(): number {
        return this.pontos
    }

    winner() {
        console.log(`${this.name} venceu a corrida! Parabéns! 🏆`);
    }

    logRollResult(diceResult: number, att: Attributes ) {
        console.log(`${this.name} rolou um dado de ${att}: ${this[att]} + ${diceResult} = ${diceResult + this[att]}`)
    };

    receivedPoint() {
        console.log(`${this.name} marcou um ponto! \n--------------------------------`);
        this.pontos++
    }

    lossesPoint() {
        console.log(`${this.name} perdeu um ponto!\n--------------------------------`);
        this.pontos <= 0 ? 0 : this.pontos++;
    }

    showPoints() {
        console.log(`${this.name} tem no total: ${this.pontos} pontos.`);
    }
}