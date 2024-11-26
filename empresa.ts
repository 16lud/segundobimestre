export class empresa{
    private nome: string;
    private funcionarios: funcionarios[];
    constructor( nome: string){
        this.nome = nome;
        this.funcionarios = [];
    }
    public adicionarFuncionarios(funcionario:funcionarios):void{
        console.log(`funcionario da ${this.nome}:`);
        this.funcionarios.forEach(funcionari => console.log(funcionario.descricao()));
    }

}