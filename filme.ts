class filme{
private titulo: string;
private diretor:string;
private anoLancamento:number;
private avaliacoes:number[];
 constructor(titulo: string,  diretor:string, anoLancamento:number){
this.titulo = titulo
this.diretor = diretor
this.anoLancamento = anoLancamento
this.avaliacoes = avaliacoes[];
 }
public getTitulo(): string{ return this.titulo}

public setTitulo(titulo: string): void{this.titulo=titulo};

public getDiretor(): string{ return this.diretor}

public setDiretor(titulo: string): void{this.diretor=diretor};

public getAnoLancamento(): number{ return this.anoLancamento}

public setAnoLancamento(anoLancamento: number): void{this.anoLancamento=anoLancamento};

public adicionarAvaliacao(nota: number):void{
if (nota >= 1 && nota <= 5){
    this.avaliacoes.push(nota);
}else{ console.log("avaliacao nao aceita.")};
}
}
public descricao(): string {return `${this.titulo}-${this.diretor}-${this.anoLancamento}- avaliacao: ${this.calcularMediaAvaliacoes().tofixed(2)}`;}



