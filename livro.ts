class livro{
titulo: string;
autor:string;
preco:number;

constructor(titulo: string, autor:string, preco:number){
    this.titulo=titulo;
    this.autor=autor;
    this.preco=preco;
}
descrição(): string {
    return `livro: ${this.titulo}/n
    autor: ${this.autor}/n
    preco: ${this.preco.toFixed(2)}`;

}

}

let livro01= new livro("1984","George orwell", 16.90);
let livro02 = new livro("o senhor dos aneis","tolkien",129.90);
let livro03 = new livro ("admiravel novo mundo ","loverhe",80.50);


console.log(livro01.descrição());
console.log(livro02.descrição());
console.log(livro03.descrição());