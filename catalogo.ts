import {filme} from './filme';

class catalogo{
 private filme: filme[]
  constructor(){ this.filme = []};
  public adicionarFilme(filme:filme): void{this.filme.push(filme)};
 public listarFilme(): void {console.log("filmes do catalogo:")};
 this.filme.forEach(filme => console.log(filme.descricao()));

} export default catalogo