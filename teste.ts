class animal {
     nome: string;
     raça: string;
     idade: number;
     cor: string;
 constructor(raça:string, nome:string, idade: number, cor:string) {
    this.raça=raça;
    this.nome=nome;
    this.idade=idade;
    this.cor=cor;
        
    } 
    descricao():string {
        return `animal: ${this.nome}
        raça:${this.raça}
        idade:${this.idade}
        cor:${this.cor}`;
    }


}
let bixano = new animal("gato","perça",4,"cinza");

console.log(bixano.descricao());