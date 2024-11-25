import { funcionario } from './funcionario';

export class Desenvolvedor extends funcionario {
  private _nivel: string;

  constructor(nome: string, salario: number, nivel: string) {
    super(nome, salario);
    this._nivel = nivel;
  }

  get nivel(): string {
    return this._nivel;
  }
 set nivel(nivel: string){
    if (nivel ==='junior'|| nivel === 'pleno' || nivel ==='senior')
    this._nivel= nivel;
    else
    console.log("nivel inesistente! deve ser junior, pleno ou senior.")
 }
 promover(): void {
    let aumento: number;
    switch (this._nivel) {
      case 'Junior':
        aumento = 0.1; // 10% de aumento
        break;
      case 'Pleno':
        aumento = 0.2; // 20% de aumento
        break;
      case 'Senior':
        aumento = 0.3; // 30% de aumento
        break;
      default:
        throw new Error('Nível inválido para promoção');
    }

    this._salario += this._salario * aumento;
    console.log(`Desenvolvedor ${this.nome} promovido. Novo salário: R$ ${this._salario.toFixed(2)}`);
  }
}
