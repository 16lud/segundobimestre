import { empresa } from "./empresa";
 class funcionarios { 
 private nome: string;
 private cargo: string;
 private salario : number;

 constructor(nome: string, cargo: string, salario: number){
    this.nome =nome;
    this.cargo = cargo;
    this.salario = salario;
 }
 public getNome():string{ return this.nome};

 public getcargo():string{ return this.cargo};

 public getsalario():number{ return this.salario};

 public setnome():void{ this.nome};

 public setcargo():void{ this.cargo};


 public aplicarAumento(percentual:number): void{
  if (percentual > 0){
    this.salario += (this.salario/100)*percentual;
  }else{
    console.log("percentual de almento invalido!!!")
  }
 }
 public descricao(): string {
 return `${this.nome} - ${this.cargo}- R$ ${this.salario.toFixed(2)}`;
 }
 }
 export default funcionarios;