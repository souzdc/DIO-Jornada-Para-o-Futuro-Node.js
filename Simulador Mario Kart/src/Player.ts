
export default class Player {
    
    constructor(
        readonly name: string,
        readonly velocidade: number,
        readonly manobrabilidade: number,
        readonly poder: number,
        readonly pontos?: number
    ){}
}