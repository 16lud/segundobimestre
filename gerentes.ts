import funcionarios from "./funcionarios";

class gerente extends funcionarios{
    private bonus: number;
 constructor(nome: string, cargo: string, salario: number, bonus: number){
    super (nome, cargo, salario);
    this.bonus;
 }
 public getBonus(): number{ return this.bonus};

 public setBonus(bonus: number): void{
  if (bonus>=0){
    this.bonus = bonus;
  }else{
    console.log("Bonus nao pode ser NEGATIVO!!!!!");
  }
 }
 public descricao(): string{
    return `${super.descricao()}-bonus: R$${this.bonus.toFixed(2)}- salario total: R$ ${(this.getsalario()+ this.bonus).toFixed(2)}`;
 }
}
export default gerente;