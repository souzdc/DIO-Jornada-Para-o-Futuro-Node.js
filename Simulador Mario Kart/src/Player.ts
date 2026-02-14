
type Attributes = "velocidade" | "manobrabilidade" | "poder";


export default class Player {
    
    constructor(
        readonly name: string,
        readonly velocidade: number,
        readonly manobrabilidade: number,
        readonly poder: number,
        readonly pontos?: number
    ){}

    logRollResult(diceResult: number, att: Attributes ) {
        console.log(`${this.name} rolou um dado de ${att}: ${this[att]} + ${diceResult} = ${diceResult + this[att]}`)
    }
}