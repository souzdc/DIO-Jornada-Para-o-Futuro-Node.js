
export default class Player {
    
    private pontos: number = 0;

    constructor(
        readonly name: string,
        readonly velocidade: number,
        readonly manobrabilidade: number,
        readonly poder: number,
        //readonly pontos: number
    ){}
}