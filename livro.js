var livro = /** @class */ (function () {
    function livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    livro.prototype.descrição = function () {
        return "livro: ".concat(this.titulo, "/n\n    autor: ").concat(this.autor, "/n\n    preco: ").concat(this.preco.toFixed(2));
    };
    return livro;
}());
var livro01 = new livro("1984", "George orwell", 16.90);
var livro02 = new livro("o senhor dos aneis", "tolkien", 129.90);
var livro03 = new livro("admiravel novo mundo ", "loverhe", 80.50);
console.log(livro01.descrição());
console.log(livro02.descrição());
console.log(livro03.descrição());
